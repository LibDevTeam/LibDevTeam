var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var neo4j = require('neo4j-driver');

var app = express();

app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j','neo4j'));
var session = driver.session();

app.post('/api/v1/post/preference/remove', function(req,res) {
    var email = req.query.email;
    var id = req.query.id;
    session
        .run(`match (u:User{email: "${email}"})-[r:Preference]->(s:Subject) where ID(s)=${id} delete r return u,s`)
        .then(function(result) {
            res.json(result)
        })
        .catch(function(err) {
            console.log(err);
        })
})

app.post('/api/v1/post/preference/add', function(req,res) {
    var email = req.query.email;
    var id = req.query.id;
    session
        .run(`match (u:User{email: "${email}"}) match (s:Subject) where ID(s)=${id} create (u)-[r:Preference]->(s) return u,s`)
        .then(function(result) {
            res.json(result)
        })
        .catch(function(err) {
            console.log(err);
        })
})

app.post('/api/v1/post/wishlist/remove', function(req,res) {
    var email = req.query.email;
    var id = req.query.id;
    session
        .run(`match (u:User{email: "${email}"})-[r:Wishlist]->(b:Book) where ID(b)=${id} delete r return u,b`)
        .then(function(result) {
            res.json(result);
            console.log(res.json);
        })
        .catch(function(err) {
            console.log(err);
        })
})

app.post('/api/v1/post/wishlist/add', function(req,res) {
    var email = req.query.email;
    var id = req.query.id;
    session
        .run(`match (u:User{email: "${email}"}) match(b:Book) where ID(b)=${id} create (u)-[r:Wishlist]->(b) return u,r,b`)
        .then(function(result) {
            res.json(result)
        })
        .catch(function(err) {
            console.log(err);
        })
})

app.get('/api/v1/get/allsubjects', function(req,res) {
    session
        .run('match (s:Subject) return collect(s)')
        .then(function(result) {
            res.json(result.records[0]._fields[0]);
        })
        .catch(function(err) {
            console.log(err);
        })
})

app.get('/api/v1/get/subjects', function(req,res) {
    session
        .run(`match (s:Subject) with s limit 10 return collect(s)`)
        .then(function(result) {
            res.json(result.records[0]._fields[0]);
        })
        .catch(function(err) {
            console.log(err);
        })
})

app.get('/api/v1/get/userDetails', function(req,res) {
    var EMAIL = req.query.email;
    session
        .run(`match (u:User{email: "${EMAIL}"}) optional match(u)-[r1:Preference]->(s:Subject) with collect(s) as preference,u optional match (u)-[r2:Wishlist]->(b:Book) with preference,u,collect(b) as wishlist return u, preference, wishlist`)
        .then(function(result) {
            res.json(result.records[0]._fields);
        })
        .catch(function(err) {
            console.log(err);
        })
})

app.get('/api/v1/get/search', function(req,res) {
    var q = req.query.q;
    var subject = req.query.subject;
    var page = req.query.page;
    var per = req.query.per;
    q = q.split(" ");
    var qstring = '';
    q.forEach(function(query) {
        qstring += `${query} OR ${query}* OR *${query} *${query}* `
    })
    session
        .run(subject == 'all'
            ?`CALL db.index.fulltext.queryNodes("searchResults", "${qstring}") YIELD node, score RETURN node, score SKIP ${(page-1)*per} LIMIT ${per}`
            :`CALL db.index.fulltext.queryNodes("searchResults", "${qstring}") YIELD node, score MATCH(node)-[r:Book_In_Sub]->(s:Subject) WHERE ID(s)=${subject} RETURN node, score LIMIT ${per}`)
        .then(function(result) {
            res.json(result.records);
        })
        .catch(function(err) {
            console.log(err);
        })
})

app.get('/api/v1/get/searchCount', function(req,res) {
    var q = req.query.q;
    var subject = req.query.subject;
    q = q.split(" ");
    var qstring = '';
    q.forEach(function(query) {
        qstring += `${query} OR ${query}* OR *${query} *${query}* `
    })
    session
        .run(subject == 'all'
            ?`CALL db.index.fulltext.queryNodes("searchResults", "${qstring}") YIELD node, score RETURN count(node)`
            :`CALL db.index.fulltext.queryNodes("searchResults", "${qstring}") YIELD node, score match(node)-[:Book_In_Sub]->(s:Subject)-[:Sub_In_Dept]->(d:Dept) where ID(s)=${subject} return count(node), s, d`)
        .then(function(result) {
            res.json(result.records[0]._fields);
        })
        .catch(function(err) {
            console.log(err);
        })
})

app.get('/api/v1/get/book', function(req,res) {
    var bookId = req.query.bookId;
    session
        .run(`match (b:Book)-[:Book_In_Sub]->(s:Subject) where ID(b)=${bookId} return b,s`)
        .then(function(result) {
            res.json(result.records[0]._fields);
        })
        .catch(function(err) {
            console.log(err);
        })
})

app.get('/api/v1/get/recentlyAddedBooks', function(req,res) {
    session
        .run('match (b:Book) with b order by ID(b) desc limit 8 return collect(b)')
        .then(function(result) {
            res.json(result.records[0]._fields[0]);
        })
        .catch(function(err) {
            console.log(err);
        })
})

app.get('/api/v1/get/books', function(req,res) {
    var subjectId = req.query.subjectId;
    var page = req.query.page;
    var limit = req.query.limit;
    session
        .run(`match (b:Book)-[r:Book_In_Sub]->(s:Subject) where ID(s)=${subjectId} with b SKIP ${(page-1)*limit} LIMIT ${limit} return collect(b) as books`)
        .then(function(result) {
            if(result == []) {
                res.json([]);
            }
            else {
                res.json(result.records[0]._fields[0]);
            }
        })
        .catch(function(err) {
            console.log(err);
        })
})

app.get('/api/v1/get/subject', function(req,res) {
    var subjectId = req.query.subjectId;
    session
        .run(`MATCH (s:Subject)-[:Sub_In_Dept]->(d:Dept) WHERE ID(s)=${subjectId} OPTIONAL MATCH (b:Book)-[:Book_In_Sub]->(s) RETURN s,d,count(b)`)
        .then(function(result) {
            res.json({
                subjectId: result.records[0]._fields[0].identity.low,
                subjectName: result.records[0]._fields[0].properties.name,
                subjectImg: result.records[0]._fields[0].properties.img,
                subjectBookCount : result.records[0]._fields[2].low,
                dept: {
                    id: result.records[0]._fields[1].identity.low,
                    name: result.records[0]._fields[1].properties.name,
                    code: result.records[0]._fields[1].properties.code
                }
            });
        })
        .catch(function(err) {
            console.log(err);
        })
})

app.get('/api/v1/dept-subjects', function(req, res) {
    session
        .run('MATCH (d:Dept)<-[r:Sub_In_Dept]-(s:Subject) RETURN d,collect(s) as subjects')
        .then(function(result) {
            var x = [];
            result.records.forEach(function(record) {
                x.push({
                    deptID: record._fields[0].identity.low,
                    deptName: record._fields[0].properties.name,
                    deptCode: record._fields[0].properties.code,
                    subjects: record._fields[1]
                });
            })
            res.json(x);
        })
        .catch(function(err) {
            console.log(err);
        });
});

app.listen(3001);
console.log('Server Started');

module.exports = app;
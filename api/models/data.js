var Log = require('../logs/index');

module.exports = function(db, User, Quiz, Category, Question, Answer) {

    db.once('open', function() {
        Log.info('Database connection successfully');
        User.create({
            firstname   : 'firstname_user0',
            lastname    : 'lastname_user0',
            username    : 'user0',
            password    : 'pass0',
            email       : 'user0@hsr.ch',
            status      : 'Activated'
        }, function(err) {
            if (err) Log.error(err);
            else Log.info('User created successfully');
        });

        User.create({
            firstname   : 'firstname_user1',
            lastname    : 'lastname_user1',
            username    : 'user1',
            password    : 'pass1',
            email       : 'user1@hsr.ch',
            status      : 'Activated'
        }, function(err) {
            if (err) Log.error(err);
            else Log.info('User created successfully');
        });

        User.create({
            firstname   : 'firstname_user2',
            lastname    : 'lastname_user2',
            username    : 'user2',
            password    : 'pass2',
            email       : 'user2@hsr.ch',
            status      : 'Activated'
        }, function(err) {
            if (err) Log.error(err);
            else Log.info('User created successfully');
        });

        User.create({
            firstname   : 'firstname_user3',
            lastname    : 'lastname_user3',
            username    : 'user3',
            password    : 'pass3',
            email       : 'user3@hsr.ch',
            status      : 'Activated'
        }, function(err) {
            if (err) Log.error(err);
            else Log.info('User created successfully');
        });

        var db1 = new Category({
            name    : 'Datenbanken1'
        });

        var db1Q1 = new Question({
            name    : 'Bei welchen Datenbanken/Datenbanksysteme werden die Daten und ihre Beziehungen in Tabellen (Relationen) abgebildet?',
            status  : 'Created',
            _category : db1._id
        });

        var db1A1 = new Answer({
            text    : 'relationalen Datenbanksysteme (RDBS)',
            correct : true,
            _question : db1Q1._id
        });

        var db1A2 = new Answer({
            text    : 'objektrelationale Datenbanksysteme (ORDBS)',
            correct : false,
            _question : db1Q1._id
        });

        var db1A3 = new Answer({
            text    : 'objektorientierte Datenbanksysteme (OODBS)',
            correct : false,
            _question : db1Q1._id
        });

        var db1A4 = Answer({
            text    : 'hierarchischen Datenbanken',
            correct : false,
            _question : db1Q1._id
        });

        var db1Q2 = new Question({
            name    : 'Welche Datenbanken/Systeme sind neuartige Datenbankanwendungen?',
            status  : 'Created',
            _category : db1._id
        });

        var db1A5 = new Answer({
            text    : 'Multimediadatenbank',
            correct : true,
            _question : db1Q2._id
        });

        var db1A6 = new Answer({
            text    : 'Oracle Database',
            correct : false,
            _question : db1Q2._id
        });

        var db1A7 = new Answer({
            text    : 'Objektrelationale Datenbank (ORDB)',
            correct : false,
            _question : db1Q2._id
        });

        var db1A8 = Answer({
            text    : 'Microsoft SQL',
            correct : false,
            _question : db1Q2._id
        });

        var db1Q3 = new Question({
            name    : 'Welche Datenbanken/Datenbanksysteme haben ein Datenmodell (Paradigma) in der Art eines Baums?',
            status  : 'Created',
            _category : db1._id
        });

        var db1A9 = new Answer({
            text    : 'Hierarchische Datenbanken',
            correct : true,
            _question : db1Q3._id
        });

        var db1A10 = new Answer({
            text    : 'Objektrelationale Datenbanksysteme (ORDBS)',
            correct : false,
            _question : db1Q3._id
        });

        var db1A11 = new Answer({
            text    : 'Objektorientierte Datenbanksysteme (OODBS)',
            correct : false,
            _question : db1Q3._id
        });

        var db1A12 = Answer({
            text    : 'Relationale Datenbanksysteme (RDBS)4',
            correct : false,
            _question : db1Q3._id
        });

        var db1Q4 = new Question({
            name    : 'Bei welchen Datenbanken/Datenbanksysteme werden die Daten und ihre Beziehungen in Tabellen (Relationen) abgebildet?',
            status  : 'Created',
            _category : db1._id
        });

        var db1A13 = new Answer({
            text    : 'relationalen Datenbanksysteme (RDBS)',
            correct : true,
            _question : db1Q4._id
        });

        var db1A14 = new Answer({
            text    : 'objektrelationale Datenbanksysteme (ORDBS)',
            correct : false,
            _question : db1Q4._id
        });

        var db1A15 = new Answer({
            text    : 'objektorientierte Datenbanksysteme (OODBS)',
            correct : false,
            _question : db1Q4._id
        });

        var db1A16 = Answer({
            text    : 'hierarchischen Datenbanken',
            correct : false,
            _question : db1Q4._id
        });

        var db1Q5 = new Question({
            name    : 'Bei welchen Datenbanken/Datenbanksysteme werden zusätzlich zum RDBS Konzepte der Objektorientierung übernommen?',
            status  : 'Created',
            _category : db1._id
        });

        var db1A17 = new Answer({
            text    : 'objektrelationalen Datenbanksysteme (ORDBS)',
            correct : true,
            _question : db1Q5._id
        });

        var db1A18 = new Answer({
            text    : 'relationalen Datenbanksysteme (RDBS)',
            correct : false,
            _question : db1Q5._id
        });

        var db1A19 = new Answer({
            text    : 'hierarchischen Datenbanken',
            correct : false,
            _question : db1Q5._id
        });

        var db1A20 = Answer({
            text    : 'bjektorientierten Datenbanksysteme (OODBS)',
            correct : false,
            _question : db1Q5._id
        });

        var db1Q6 = new Question({
            name    : 'Abkürzung für ein relationale Datenbanksystem.',
            status  : 'Created',

            _category : db1._id
        });

        var db1A21 = new Answer({
            text    : 'RDBS',
            correct : true,
            _question : db1Q6._id
        });

        var db1A22 = new Answer({
            text    : 'RDSB',
            correct : false,
            _question : db1Q6._id
        });

        var db1A23 = new Answer({
            text    : 'RDB',
            correct : false,
            _question : db1Q6._id
        });

        var db1A24 = Answer({
            text    : 'RDBSY',
            correct : false,
            _question : db1Q6._id
        });

        var db1Q7 = new Question({
            name        : 'Abkürzung für ein objektorientiertes Datenbanksystem.',
            status      : 'Created',
            _category : db1._id
        });

        var db1A25 = new Answer({
            text    : 'OODBS',
            correct : true,
            _question : db1Q7._id
        });

        var db1A26 = new Answer({
            text    : 'OBDB',
            correct : false,
            _question : db1Q7._id
        });

        var db1A27 = new Answer({
            text    : 'OODB',
            correct : false,
            _question : db1Q7._id
        });

        var db1A28 = Answer({
            text    : 'OODBSYS',
            correct : false,
            _question : db1Q7._id
        });

        var db1Q8 = new Question({
            name        : 'Ein Attribut einer Entity-Menge, welches Primärschlüssel einer anderen Entity-Menge ist, bezeichnet man als Fremdschlüssel. Was ist gemeint?',
            status      : 'Created',
            _category : db1._id
        });

        var db1A29 = new Answer({
            text    : 'Schlüssel (key)',
            correct : true,
            _question : db1Q8._id
        });

        var db1A30 = new Answer({
            text    : 'Datenmodell',
            correct : false,
            _question : db1Q8._id
        });

        var db1A31 = new Answer({
            text    : 'Beziehungen (relationships)',
            correct : false,
            _question : db1Q8._id
        });

        var db1A32 = Answer({
            text    : 'Enität (entity)',
            correct : false,
            _question : db1Q8._id
        });

        var db1Q9 = new Question({
            name        : 'Was gibt es zwischen Entitäten, die auch Attribute haben können?',
            status      : 'Created',
            _category : db1._id
        });

        var db1A33 = new Answer({
            text    : 'Beziehungen (relationships)',
            correct : true,
            _question : db1Q9._id
        });

        var db1A34 = new Answer({
            text    : 'Attribute',
            correct : false,
            _question : db1Q9._id
        });

        var db1A35 = new Answer({
            text    : 'Schlüssel (key)',
            correct : false,
            _question : db1Q9._id
        });

        var db1A36 = Answer({
            text    : 'Entitäten (entity)',
            correct : false,
            _question : db1Q9._id
        });

        var db1Q10 = new Question({
            name        : 'Welcher Typ versteht man als elementare, nicht zusammengesetzte Wertebereiche, wie z.B. INTEGER für ganze Zahlen oder DECIMAL für Zahlen mit Nachkommastellen?',
            status      : 'Created',
            _category : db1._id
        });

        var db1A37 = new Answer({
            text    : 'Basisdatentypen',
            correct : true,
            _question : db1Q10._id
        });

        var db1A38 = new Answer({
            text    : 'Typkonstruktoren',
            correct : false,
            _question : db1Q10._id
        });

        var db1A39 = new Answer({
            text    : 'Wertetyp',
            correct : false,
            _question : db1Q10._id
        });

        var db1A40 = Answer({
            text    : 'Typkonstruktionsregeln',
            correct : false,
            _question : db1Q10._id
        });

        var db1Q11 = new Question({
            name        : 'Wie kann man Zeilen aus einer bestehenden Relation auswählen?',
            status      : 'Created',
            _category : db1._id
        });

        var db1A41 = new Answer({
            text    : 'Selektion',
            correct : true,
            _question : db1Q11._id
        });

        var db1A42 = new Answer({
            text    : 'Join-Operation',
            correct : false,
            _question : db1Q11._id
        });

        var db1A43 = new Answer({
            text    : 'Projektion',
            correct : false,
            _question : db1Q11._id
        });

        var db1A44 = Answer({
            text    : 'InnerJoin-Operation',
            correct : false,
            _question : db1Q11._id
        });

        var db1Q12 = new Question({
            name        : 'Welches sind klassische Mengenoperationen?',
            status      : 'Created',

            _category : db1._id
        });

        var db1A45 = new Answer({
            text    : 'Union, Intersection, Product, Difference',
            correct : true,
            _question : db1Q12._id
        });

        var db1A46 = new Answer({
            text    : 'Intersection, Selection, Division, Difference',
            correct : false,
            _question : db1Q12._id
        });

        var db1A47 = new Answer({
            text    : 'Projection, Difference, Union',
            correct : false,
            _question : db1Q12._id
        });

        var db1A48 = Answer({
            text    : 'Selection, Division, Difference, Product',
            correct : false,
            _question : db1Q12._id
        });

        db1Q1.answers.push(db1A1._id, db1A2._id, db1A3._id, db1A4._id);
        db1Q2.answers.push(db1A5._id, db1A6._id, db1A7._id, db1A8._id);
        db1Q3.answers.push(db1A9._id, db1A10._id, db1A11._id, db1A12._id);
        db1Q4.answers.push(db1A13._id, db1A14._id, db1A15._id, db1A16._id);
        db1Q5.answers.push(db1A17._id, db1A18._id, db1A19._id, db1A20._id);
        db1Q6.answers.push(db1A21._id, db1A22._id, db1A23._id, db1A24._id);
        db1Q7.answers.push(db1A25._id, db1A26._id, db1A27._id, db1A28._id);
        db1Q8.answers.push(db1A29._id, db1A30._id, db1A31._id, db1A32._id);
        db1Q9.answers.push(db1A33._id, db1A34._id, db1A35._id, db1A36._id);
        db1Q10.answers.push(db1A37._id, db1A38._id, db1A39._id, db1A40._id);
        db1Q11.answers.push(db1A41._id, db1A42._id, db1A43._id, db1A44._id);
        db1Q12.answers.push(db1A45._id, db1A46._id, db1A47._id, db1A48._id);

        db1.questions.push(db1Q1._id);
        db1.questions.push(db1Q2._id);
        db1.questions.push(db1Q3._id);
        db1.questions.push(db1Q4._id);
        db1.questions.push(db1Q5._id);
        db1.questions.push(db1Q6._id);
        db1.questions.push(db1Q7._id);
        db1.questions.push(db1Q8._id);
        db1.questions.push(db1Q9._id);
        db1.questions.push(db1Q10._id);
        db1.questions.push(db1Q11._id);
        db1.questions.push(db1Q12._id);

        db1A1.save();
        db1A2.save();
        db1A3.save();
        db1A4.save();
        db1A5.save();
        db1A6.save();
        db1A7.save();
        db1A8.save();
        db1A9.save();
        db1A10.save();
        db1A11.save();
        db1A12.save();
        db1A13.save();
        db1A14.save();
        db1A15.save();
        db1A16.save();
        db1A17.save();
        db1A18.save();
        db1A19.save();
        db1A20.save();
        db1A21.save();
        db1A22.save();
        db1A23.save();
        db1A24.save();
        db1A25.save();
        db1A26.save();
        db1A27.save();
        db1A28.save();
        db1A29.save();
        db1A30.save();
        db1A31.save();
        db1A32.save();
        db1A33.save();
        db1A34.save();
        db1A35.save();
        db1A36.save();
        db1A37.save();
        db1A38.save();
        db1A39.save();
        db1A40.save();
        db1A41.save();
        db1A42.save();
        db1A43.save();
        db1A44.save();
        db1A45.save();
        db1A46.save();
        db1A47.save();
        db1A48.save();

        db1Q1.save();
        db1Q2.save();
        db1Q3.save();
        db1Q4.save();
        db1Q5.save();
        db1Q6.save();
        db1Q7.save();
        db1Q8.save();
        db1Q9.save();
        db1Q10.save();
        db1Q11.save();
        db1Q12.save();

        db1.save();
    });
}

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
            name    : 'Abkürzung für ein objektorientiertes Datenbanksystem.',
            status  : 'Created',
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
            name    : 'Ein Attribut einer Entity-Menge, welches Primärschlüssel einer anderen Entity-Menge ist, bezeichnet man als Fremdschlüssel. Was ist gemeint?',
            status  : 'Created',
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
            name    : 'Was gibt es zwischen Entitäten, die auch Attribute haben können?',
            status  : 'Created',
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
            name    : 'Welcher Typ versteht man als elementare, nicht zusammengesetzte Wertebereiche, wie z.B. INTEGER für ganze Zahlen oder DECIMAL für Zahlen mit Nachkommastellen?',
            status  : 'Created',
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
            name    : 'Wie kann man Zeilen aus einer bestehenden Relation auswählen?',
            status  : 'Created',
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
            name    : 'Welches sind klassische Mengenoperationen?',
            status  : 'Created',
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


        var wi1 = new Category({
            name    : 'Wirtschaftsinformatik1'
        });

        var wi1Q1 = new Question({
            name    : 'Warum werden Dienstleistungen / Produktionen ins Ausland ausgelagert?',
            status  : 'Created',
            _category : wi1._id
        });

        var wi1A1 = new Answer({
            text    : 'Wegen den hohen Kosten im Inland ist es für viele Unternehmen lukrativ im Ausland zu produzieren.',
            correct : true,
            _question : wi1Q1._id
        });

        var wi1A2 = new Answer({
            text    : 'Weil man dadurch die Schweizer Wirtschaft stärkt.',
            correct : false,
            _question : wi1Q1._id
        });

        var wi1A3 = new Answer({
            text    : 'Weil man dadurch Steuern sparen kann.',
            correct : false,
            _question : wi1Q1._id
        });

        var wi1A4 = Answer({
            text    : 'Dadurch kann das Produkt für verschiedene Kulturen passend gestaltet werden.',
            correct : false,
            _question : wi1Q1._id
        });

        var wi1Q2 = new Question({
            name    : 'Welche der folgenden Anforderungen gehört nicht zwingend zu den Aktivitäten eines Geschäftsprozesses?',
            status  : 'Created',
            _category : wi1._id
        });

        var wi1A5 = new Answer({
            text    : 'Aktivitäten müssen die Mitarbeitenden motivieren.',
            correct : true,
            _question : wi1Q2._id
        });

        var wi1A6 = new Answer({
            text    : 'Aktivitäten müssen einen definierten Anfang und ein definiertes Ende haben.',
            correct : false,
            _question : wi1Q2._id
        });

        var wi1A7 = new Answer({
            text    : 'Aktivitäten müssen wiederholt durchgeführt werden.',
            correct : false,
            _question : wi1Q2._id
        });

        var wi1A8 = Answer({
            text    : 'Aktivitäten müssen einen Beitrag zur Wertschöpfung leisten.',
            correct : false,
            _question : wi1Q2._id
        });

        var wi1Q3 = new Question({
            name    : 'Welcher Wirtschaftssektor erlebte den höchsten Zuwachs in den letzten 10 Jahren?',
            status  : 'Created',
            _category : wi1._id
        });

        var wi1A9 = new Answer({
            text    : 'Dienstleistung',
            correct : true,
            _question : wi1Q3._id
        });

        var wi1A10 = new Answer({
            text    : 'Landwirtschaft',
            correct : false,
            _question : wi1Q3._id
        });

        var wi1A11 = new Answer({
            text    : 'Industrie',
            correct : false,
            _question : wi1Q3._id
        });

        var wi1A12 = Answer({
            text    : 'Gewerbe',
            correct : false,
            _question : wi1Q3._id
        });

        var wi1Q4 = new Question({
            name    : 'Welche Akademiker wurden gemäss der Staufenbiel Job Trends Studie im Jahr 2015 über alle Branchen hinweg am wenigsten häufig gesucht?',
            status  : 'Created',
            _category : wi1._id
        });

        var wi1A13 = new Answer({
            text    : 'Naturwissenschaftler',
            correct : true,
            _question : wi1Q4._id
        });

        var wi1A14 = new Answer({
            text    : 'Informatiker',
            correct : false,
            _question : wi1Q4._id
        });

        var wi1A15 = new Answer({
            text    : 'Wirtschaftswissenschaftler',
            correct : false,
            _question : wi1Q4._id
        });

        var wi1A16 = Answer({
            text    : 'Ingenieure',
            correct : false,
            _question : wi1Q4._id
        });

        var wi1Q5 = new Question({
            name    : 'Gegeben ist die Preis-Absatz-Funktion p = 100 - 1/3x. Bei welcher Menge (x) erzielt das Unternehmen den höchsten Umsatz?',
            status  : 'Created',
            _category : wi1._id
        });

        var wi1A17 = new Answer({
            text    : '25',
            correct : true,
            _question : wi1Q5._id
        });

        var wi1A18 = new Answer({
            text    : '150',
            correct : false,
            _question : wi1Q5._id
        });

        var wi1A19 = new Answer({
            text    : '50',
            correct : false,
            _question : wi1Q5._id
        });

        var wi1A20 = Answer({
            text    : '33.33',
            correct : false,
            _question : wi1Q5._id
        });

        var wi1Q6 = new Question({
            name    : 'Warum bietet jedes Logistikunternehmen ein gratis Track&Trace an?',
            status  : 'Created',
            _category : wi1._id
        });

        var wi1A21 = new Answer({
            text    : 'Die Firmenkunden sparen Geld weil der Kunde die Lieferinformationen jederzeit online einsehen kann.',
            correct : true,
            _question : wi1Q6._id
        });

        var wi1A22 = new Answer({
            text    : 'Die Logistikunternehmen wollen den Kunden ein Zusatzdienst verkaufen.',
            correct : false,
            _question : wi1Q6._id
        });

        var wi1A23 = new Answer({
            text    : 'Das Track & Trace ist nur eine Marketingsache, es bietet keinen Mehrwert.',
            correct : false,
            _question : wi1Q6._id
        });

        var wi1A24 = Answer({
            text    : 'Das Track & Trace ist ein Indikator für die Globalisierung.',
            correct : false,
            _question : wi1Q6._id
        });

        var wi1Q7 = new Question({
            name    : 'Welche Vorteile bietet das Unternehmen TAL den Händlern, die Hemden verkaufen?',
            status  : 'Created',
            _category : wi1._id
        });

        var wi1A25 = new Answer({
            text    : 'Gewinnsteigerung Händler - Händler kann sich auf seine Kernkompetenz (Handel) konzentrieren - Händler erhält Empfehlung für Hemden, die gut verkauft werden.',
            correct : true,
            _question : wi1Q7._id
        });

        var wi1A26 = new Answer({
            text    : 'Alle Daten von TAL kann man als Händler runterladen - TAL garantiert eine 100% fehlerfreie Produktion.',
            correct : false,
            _question : wi1Q7._id
        });

        var wi1A27 = new Answer({
            text    : 'TAL speichert keine Kundendaten und garantiert 100% Anonymität - TAL versendet innerhalb von Tagen tausende neu produzierte Hemden an den Händler.',
            correct : false,
            _question : wi1Q7._id
        });

        var wi1A28 = Answer({
            text    : 'TAL übernimmt den gesamten Prozess von der Herstellung bis zum Verkauf der Waren an den Endkunden.',
            correct : false,
            _question : wi1Q7._id
        });

        var wi1Q8 = new Question({
            name    : 'Innovation kann sich in den Bereichen People, Business und/oder Technology auswirken. Wie wird die Innovation genannt, die sich in allen drei Bereichen auswirkt?',
            status  : 'Created',
            _category : wi1._id
        });

        var wi1A29 = new Answer({
            text    : 'Experience Innovation',
            correct : true,
            _question : wi1Q8._id
        });

        var wi1A30 = new Answer({
            text    : 'Process Innovation',
            correct : false,
            _question : wi1Q8._id
        });

        var wi1A31 = new Answer({
            text    : 'Emotional Innovation',
            correct : false,
            _question : wi1Q8._id
        });

        var wi1A32 = Answer({
            text    : 'Functional Innovation',
            correct : false,
            _question : wi1Q8._id
        });

        var wi1Q9 = new Question({
            name    : 'Ein Anwendungssystem beinhaltet gegenüber einem Informationssystem auch:',
            status  : 'Created',
            _category : wi1._id
        });

        var wi1A33 = new Answer({
            text    : 'Organisation',
            correct : true,
            _question : wi1Q9._id
        });

        var wi1A34 = new Answer({
            text    : 'Daten',
            correct : false,
            _question : wi1Q9._id
        });

        var wi1A35 = new Answer({
            text    : 'Hardware',
            correct : false,
            _question : wi1Q9._id
        });

        var wi1A36 = Answer({
            text    : 'Software',
            correct : false,
            _question : wi1Q9._id
        });

        var wi1Q10 = new Question({
            name    : 'Aus welchem Grund ging J.C. Penney eine Verbindung mit TAL ein obwohl es davor auch funktionierte?',
            status  : 'Created',
            _category : wi1._id
        });

        var wi1A37 = new Answer({
            text    : 'Da TAL mit seinen günstigen Produktionsstätten zu niedrigeren Preisen produzieren und liefern kann.',
            correct : true,
            _question : wi1Q10._id
        });

        var wi1A38 = new Answer({
            text    : 'Da TAL eine Erfindung von J.C. Penney ist. J.C. Penney erhoffte sich so eine übersichtlichere Firmenstruktur.',
            correct : false,
            _question : wi1Q10._id
        });

        var wi1A39 = new Answer({
            text    : 'Da sich die Geschäftsleitung von J.C. Penney und der CEO von TAL gut gekannt haben.',
            correct : false,
            _question : wi1Q10._id
        });

        var wi1A40 = Answer({
            text    : 'Da TAL ein Monopol wurde, war J.C. Penney fast schon gezwungen mit ihnen eine Verbindung einzugehen.',
            correct : false,
            _question : wi1Q10._id
        });

        var wi1Q11 = new Question({
            name    : 'Sie wollen die Kosten niedrig halten und gleichzeitig internationale Märkte verfolgen. Ihre Produkte haben nahezu jede Grösse und es handeln sich um Spezialgeräte bis hin zu überdimensionaler Fracht. Welches Produkt von UPS hilft ihrem Unternehmen am besten?',
            status  : 'Created',
            _category : wi1._id
        });

        var wi1A41 = new Answer({
            text    : 'Ocean Freight',
            correct : true,
            _question : wi1Q11._id
        });

        var wi1A42 = new Answer({
            text    : 'Flex Global View',
            correct : false,
            _question : wi1Q11._id
        });

        var wi1A43 = new Answer({
            text    : 'UPS Campus Ship',
            correct : false,
            _question : wi1Q11._id
        });

        var wi1A44 = Answer({
            text    : 'UPS World Ease',
            correct : false,
            _question : wi1Q11._id
        });

        var wi1Q12 = new Question({
            name    : 'Eines der genannten Systeme basiert auf einer Folge integrierter Softwaremodule und einer gemeinsam genutzten Datenbank:',
            status  : 'Created',
            _category : wi1._id
        });

        var wi1A45 = new Answer({
            text    : 'ERP',
            correct : true,
            _question : wi1Q12._id
        });

        var wi1A46 = new Answer({
            text    : 'TPS',
            correct : false,
            _question : wi1Q12._id
        });

        var wi1A47 = new Answer({
            text    : 'EDI',
            correct : false,
            _question : wi1Q12._id
        });

        var wi1A48 = Answer({
            text    : 'MIS',
            correct : false,
            _question : wi1Q12._id
        });

        wi1Q1.answers.push(wi1A1._id, wi1A2._id, wi1A3._id, wi1A4._id);
        wi1Q2.answers.push(wi1A5._id, wi1A6._id, wi1A7._id, wi1A8._id);
        wi1Q3.answers.push(wi1A9._id, wi1A10._id, wi1A11._id, wi1A12._id);
        wi1Q4.answers.push(wi1A13._id, wi1A14._id, wi1A15._id, wi1A16._id);
        wi1Q5.answers.push(wi1A17._id, wi1A18._id, wi1A19._id, wi1A20._id);
        wi1Q6.answers.push(wi1A21._id, wi1A22._id, wi1A23._id, wi1A24._id);
        wi1Q7.answers.push(wi1A25._id, wi1A26._id, wi1A27._id, wi1A28._id);
        wi1Q8.answers.push(wi1A29._id, wi1A30._id, wi1A31._id, wi1A32._id);
        wi1Q9.answers.push(wi1A33._id, wi1A34._id, wi1A35._id, wi1A36._id);
        wi1Q10.answers.push(wi1A37._id, wi1A38._id, wi1A39._id, wi1A40._id);
        wi1Q11.answers.push(wi1A41._id, wi1A42._id, wi1A43._id, wi1A44._id);
        wi1Q12.answers.push(wi1A45._id, wi1A46._id, wi1A47._id, wi1A48._id);

        wi1.questions.push(wi1Q1._id);
        wi1.questions.push(wi1Q2._id);
        wi1.questions.push(wi1Q3._id);
        wi1.questions.push(wi1Q4._id);
        wi1.questions.push(wi1Q5._id);
        wi1.questions.push(wi1Q6._id);
        wi1.questions.push(wi1Q7._id);
        wi1.questions.push(wi1Q8._id);
        wi1.questions.push(wi1Q9._id);
        wi1.questions.push(wi1Q10._id);
        wi1.questions.push(wi1Q11._id);
        wi1.questions.push(wi1Q12._id);

        wi1A1.save();
        wi1A2.save();
        wi1A3.save();
        wi1A4.save();
        wi1A5.save();
        wi1A6.save();
        wi1A7.save();
        wi1A8.save();
        wi1A9.save();
        wi1A10.save();
        wi1A11.save();
        wi1A12.save();
        wi1A13.save();
        wi1A14.save();
        wi1A15.save();
        wi1A16.save();
        wi1A17.save();
        wi1A18.save();
        wi1A19.save();
        wi1A20.save();
        wi1A21.save();
        wi1A22.save();
        wi1A23.save();
        wi1A24.save();
        wi1A25.save();
        wi1A26.save();
        wi1A27.save();
        wi1A28.save();
        wi1A29.save();
        wi1A30.save();
        wi1A31.save();
        wi1A32.save();
        wi1A33.save();
        wi1A34.save();
        wi1A35.save();
        wi1A36.save();
        wi1A37.save();
        wi1A38.save();
        wi1A39.save();
        wi1A40.save();
        wi1A41.save();
        wi1A42.save();
        wi1A43.save();
        wi1A44.save();
        wi1A45.save();
        wi1A46.save();
        wi1A47.save();
        wi1A48.save();

        wi1Q1.save();
        wi1Q2.save();
        wi1Q3.save();
        wi1Q4.save();
        wi1Q5.save();
        wi1Q6.save();
        wi1Q7.save();
        wi1Q8.save();
        wi1Q9.save();
        wi1Q10.save();
        wi1Q11.save();
        wi1Q12.save();

        wi1.save();


        var cn1 = new Category({
            name    : 'Computernetze1'
        });

        var cn1Q1 = new Question({
            name    : 'Wie gross ist bei Ethernet die MTU?',
            status  : 'Created',
            _category : cn1._id
        });

        var cn1A1 = new Answer({
            text    : '1500B',
            correct : true,
            _question : cn1Q1._id
        });

        var cn1A2 = new Answer({
            text    : '64B',
            correct : false,
            _question : cn1Q1._id
        });

        var cn1A3 = new Answer({
            text    : '1460B',
            correct : false,
            _question : cn1Q1._id
        });

        var cn1A4 = Answer({
            text    : '1480B',
            correct : false,
            _question : cn1Q1._id
        });

        var cn1Q2 = new Question({
            name    : 'Wie gross ist die maximale IPv4-SDU?',
            status  : 'Created',
            _category : cn1._id
        });

        var cn1A5 = new Answer({
            text    : '1480B',
            correct : true,
            _question : cn1Q2._id
        });

        var cn1A6 = new Answer({
            text    : '1500B',
            correct : false,
            _question : cn1Q2._id
        });

        var cn1A7 = new Answer({
            text    : '1460B',
            correct : false,
            _question : cn1Q2._id
        });

        var cn1A8 = Answer({
            text    : '64B',
            correct : false,
            _question : cn1Q2._id
        });

        var cn1Q3 = new Question({
            name    : 'Wie gross ist eine IPv6-Adresse?',
            status  : 'Created',
            _category : cn1._id
        });

        var cn1A9 = new Answer({
            text    : '16B',
            correct : true,
            _question : cn1Q3._id
        });

        var cn1A10 = new Answer({
            text    : '4B',
            correct : false,
            _question : cn1Q3._id
        });

        var cn1A11 = new Answer({
            text    : '8B',
            correct : false,
            _question : cn1Q3._id
        });

        var cn1A12 = Answer({
            text    : '32B',
            correct : false,
            _question : cn1Q3._id
        });

        var cn1Q4 = new Question({
            name    : 'Zu welchem IPv4-Feld gibt es kein entsprechendes IPv6-Feld?',
            status  : 'Created',
            _category : cn1._id
        });

        var cn1A13 = new Answer({
            text    : 'Header Lenght',
            correct : true,
            _question : cn1Q4._id
        });

        var cn1A14 = new Answer({
            text    : 'TTL',
            correct : false,
            _question : cn1Q4._id
        });

        var cn1A15 = new Answer({
            text    : 'Protocol Type',
            correct : false,
            _question : cn1Q4._id
        });

        var cn1A16 = Answer({
            text    : 'Datagram Länge',
            correct : false,
            _question : cn1Q4._id
        });

        var cn1Q5 = new Question({
            name    : 'In welchem Portnummernbereich liegen die „Ephemerial bzw. Dynamischen Ports“?',
            status  : 'Created',
            _category : cn1._id
        });

        var cn1A17 = new Answer({
            text    : '49152-65335',
            correct : true,
            _question : cn1Q5._id
        });

        var cn1A18 = new Answer({
            text    : '1024-49151',
            correct : false,
            _question : cn1Q5._id
        });

        var cn1A19 = new Answer({
            text    : '0-1023',
            correct : false,
            _question : cn1Q5._id
        });

        var cn1A20 = Answer({
            text    : '65336-16777216',
            correct : false,
            _question : cn1Q5._id
        });

        var cn1Q6 = new Question({
            name    : 'Welches Anwendungsprotokoll nutzt typisch TCP?',
            status  : 'Created',
            _category : cn1._id
        });

        var cn1A21 = new Answer({
            text    : 'FTP',
            correct : true,
            _question : cn1Q6._id
        });

        var cn1A22 = new Answer({
            text    : 'TFTP',
            correct : false,
            _question : cn1Q6._id
        });

        var cn1A23 = new Answer({
            text    : 'RTP',
            correct : false,
            _question : cn1Q6._id
        });

        var cn1A24 = Answer({
            text    : 'DNS',
            correct : false,
            _question : cn1Q6._id
        });

        var cn1Q7 = new Question({
            name    : 'Welches Anwendungsprotokoll nutzt typisch UDP?',
            status  : 'Created',
            _category : cn1._id
        });

        var cn1A25 = new Answer({
            text    : 'DNS',
            correct : true,
            _question : cn1Q7._id
        });

        var cn1A26 = new Answer({
            text    : 'SMTP',
            correct : false,
            _question : cn1Q7._id
        });

        var cn1A27 = new Answer({
            text    : 'HTTP',
            correct : false,
            _question : cn1Q7._id
        });

        var cn1A28 = Answer({
            text    : 'FTP',
            correct : false,
            _question : cn1Q7._id
        });

        var cn1Q8 = new Question({
            name    : 'Welcher Parameter legt bi TCP für die sendende Station fest, wie gross die TCP-SDU maximal sein darf?',
            status  : 'Created',
            _category : cn1._id
        });

        var cn1A29 = new Answer({
            text    : 'Maximum Segment Size',
            correct : true,
            _question : cn1Q8._id
        });

        var cn1A30 = new Answer({
            text    : 'Receive Window Size',
            correct : false,
            _question : cn1Q8._id
        });

        var cn1A31 = new Answer({
            text    : 'Congestion Window Size',
            correct : false,
            _question : cn1Q8._id
        });

        var cn1A32 = Answer({
            text    : 'Window Scale Factor',
            correct : false,
            _question : cn1Q8._id
        });

        var cn1Q9 = new Question({
            name    : 'Mit welchem Resource Recourd Type wird der "echte Namen" eines Rechners angegeben?',
            status  : 'Created',
            _category : cn1._id
        });

        var cn1A33 = new Answer({
            text    : 'CNAME',
            correct : true,
            _question : cn1Q9._id
        });

        var cn1A34 = new Answer({
            text    : 'MX',
            correct : false,
            _question : cn1Q9._id
        });

        var cn1A35 = new Answer({
            text    : 'NS',
            correct : false,
            _question : cn1Q9._id
        });

        var cn1A36 = Answer({
            text    : 'ALIAS',
            correct : false,
            _question : cn1Q9._id
        });

        var cn1Q10 = new Question({
            name    : 'Bei welchem FTP-Mode baut der Server die Verbindung zum Client auf für den Datentransfer?',
            status  : 'Created',
            _category : cn1._id
        });

        var cn1A37 = new Answer({
            text    : 'Active Mode',
            correct : true,
            _question : cn1Q10._id
        });

        var cn1A38 = new Answer({
            text    : 'Passive Mode',
            correct : false,
            _question : cn1Q10._id
        });

        var cn1A39 = new Answer({
            text    : 'TFTP Mode',
            correct : false,
            _question : cn1Q10._id
        });

        var cn1A40 = Answer({
            text    : 'Anonymous',
            correct : false,
            _question : cn1Q10._id
        });

        var cn1Q11 = new Question({
            name    : 'Welche dieser Top Level Domains ist für Organisationen in den USA vorbehalten?',
            status  : 'Created',
            _category : cn1._id
        });

        var cn1A41 = new Answer({
            text    : 'EDU',
            correct : true,
            _question : cn1Q11._id
        });

        var cn1A42 = new Answer({
            text    : 'COM',
            correct : false,
            _question : cn1Q11._id
        });

        var cn1A43 = new Answer({
            text    : 'ORG',
            correct : false,
            _question : cn1Q11._id
        });

        var cn1A44 = Answer({
            text    : 'CH',
            correct : false,
            _question : cn1Q11._id
        });

        var cn1Q12 = new Question({
            name    : 'Wie nennt man die übertragene Einheit auf dem Application Layer?',
            status  : 'Created',
            _category : cn1._id
        });

        var cn1A45 = new Answer({
            text    : 'Message',
            correct : true,
            _question : cn1Q12._id
        });

        var cn1A46 = new Answer({
            text    : 'Segment',
            correct : false,
            _question : cn1Q12._id
        });

        var cn1A47 = new Answer({
            text    : 'Datagram',
            correct : false,
            _question : cn1Q12._id
        });

        var cn1A48 = Answer({
            text    : 'Bit',
            correct : false,
            _question : cn1Q12._id
        });

        cn1Q1.answers.push(cn1A1._id, cn1A2._id, cn1A3._id, cn1A4._id);
        cn1Q2.answers.push(cn1A5._id, cn1A6._id, cn1A7._id, cn1A8._id);
        cn1Q3.answers.push(cn1A9._id, cn1A10._id, cn1A11._id, cn1A12._id);
        cn1Q4.answers.push(cn1A13._id, cn1A14._id, cn1A15._id, cn1A16._id);
        cn1Q5.answers.push(cn1A17._id, cn1A18._id, cn1A19._id, cn1A20._id);
        cn1Q6.answers.push(cn1A21._id, cn1A22._id, cn1A23._id, cn1A24._id);
        cn1Q7.answers.push(cn1A25._id, cn1A26._id, cn1A27._id, cn1A28._id);
        cn1Q8.answers.push(cn1A29._id, cn1A30._id, cn1A31._id, cn1A32._id);
        cn1Q9.answers.push(cn1A33._id, cn1A34._id, cn1A35._id, cn1A36._id);
        cn1Q10.answers.push(cn1A37._id, cn1A38._id, cn1A39._id, cn1A40._id);
        cn1Q11.answers.push(cn1A41._id, cn1A42._id, cn1A43._id, cn1A44._id);
        cn1Q12.answers.push(cn1A45._id, cn1A46._id, cn1A47._id, cn1A48._id);

        cn1.questions.push(cn1Q1._id);
        cn1.questions.push(cn1Q2._id);
        cn1.questions.push(cn1Q3._id);
        cn1.questions.push(cn1Q4._id);
        cn1.questions.push(cn1Q5._id);
        cn1.questions.push(cn1Q6._id);
        cn1.questions.push(cn1Q7._id);
        cn1.questions.push(cn1Q8._id);
        cn1.questions.push(cn1Q9._id);
        cn1.questions.push(cn1Q10._id);
        cn1.questions.push(cn1Q11._id);
        cn1.questions.push(cn1Q12._id);

        cn1A1.save();
        cn1A2.save();
        cn1A3.save();
        cn1A4.save();
        cn1A5.save();
        cn1A6.save();
        cn1A7.save();
        cn1A8.save();
        cn1A9.save();
        cn1A10.save();
        cn1A11.save();
        cn1A12.save();
        cn1A13.save();
        cn1A14.save();
        cn1A15.save();
        cn1A16.save();
        cn1A17.save();
        cn1A18.save();
        cn1A19.save();
        cn1A20.save();
        cn1A21.save();
        cn1A22.save();
        cn1A23.save();
        cn1A24.save();
        cn1A25.save();
        cn1A26.save();
        cn1A27.save();
        cn1A28.save();
        cn1A29.save();
        cn1A30.save();
        cn1A31.save();
        cn1A32.save();
        cn1A33.save();
        cn1A34.save();
        cn1A35.save();
        cn1A36.save();
        cn1A37.save();
        cn1A38.save();
        cn1A39.save();
        cn1A40.save();
        cn1A41.save();
        cn1A42.save();
        cn1A43.save();
        cn1A44.save();
        cn1A45.save();
        cn1A46.save();
        cn1A47.save();
        cn1A48.save();

        cn1Q1.save();
        cn1Q2.save();
        cn1Q3.save();
        cn1Q4.save();
        cn1Q5.save();
        cn1Q6.save();
        cn1Q7.save();
        cn1Q8.save();
        cn1Q9.save();
        cn1Q10.save();
        cn1Q11.save();
        cn1Q12.save();

        cn1.save();


        var infsi1 = new Category({
            name    : 'Informationssicherheit1'
        });

        var infsi1Q1 = new Question({
            name    : 'Wie viele mögliche Schlüssel gibt es beim Caesar-Code, wenn k Zeichen aus einem Alphabet mit 26 Buchstaben verschlüsselt werden sollen?',
            status  : 'Created',
            _category : infsi1._id
        });

        var infsi1A1 = new Answer({
            text    : '26',
            correct : true,
            _question : infsi1Q1._id
        });

        var infsi1A2 = new Answer({
            text    : '26*k',
            correct : false,
            _question : infsi1Q1._id
        });

        var infsi1A3 = new Answer({
            text    : '26!',
            correct : false,
            _question : infsi1Q1._id
        });

        var infsi1A4 = Answer({
            text    : '26^2',
            correct : false,
            _question : infsi1Q1._id
        });

        var infsi1Q2 = new Question({
            name    : 'Wie viele mögliche Schlüssel gibt es beim Vigenère-Code mit n Zeichen Schlüssellänge?',
            status  : 'Created',
            _category : infsi1._id
        });

        var infsi1A5 = new Answer({
            text    : '26^n',
            correct : true,
            _question : infsi1Q2._id
        });

        var infsi1A6 = new Answer({
            text    : '26?',
            correct : false,
            _question : infsi1Q2._id
        });

        var infsi1A7 = new Answer({
            text    : '2^n',
            correct : false,
            _question : infsi1Q2._id
        });

        var infsi1A8 = Answer({
            text    : '26*n',
            correct : false,
            _question : infsi1Q2._id
        });

        var infsi1Q3 = new Question({
            name    : 'Bei welchem Verfahren zeigt die Autokorrelation der verschlüsselten Zeichenfolge des Märchentextes "Ali Baba und die 40 Räuber" in der Regel Periodizitäten?',
            status  : 'Created',
            _category : infsi1._id
        });

        var infsi1A9 = new Answer({
            text    : 'Vigenère',
            correct : true,
            _question : infsi1Q3._id
        });

        var infsi1A10 = new Answer({
            text    : 'Caesar',
            correct : false,
            _question : infsi1Q3._id
        });

        var infsi1A11 = new Answer({
            text    : '3DES',
            correct : false,
            _question : infsi1Q3._id
        });

        var infsi1A12 = Answer({
            text    : 'AES',
            correct : false,
            _question : infsi1Q3._id
        });

        var infsi1Q4 = new Question({
            name    : 'Die Entropie einer Zeichenfolge (bzw. der mittlere Informationsgehalt der Zeichenfolge) ist dann am höchsten,...',
            status  : 'Created',
            _category : infsi1._id
        });

        var infsi1A13 = new Answer({
            text    : 'wenn alle Zeichen gleich häufig vorkommen.',
            correct : true,
            _question : infsi1Q4._id
        });

        var infsi1A14 = new Answer({
            text    : 'wenn einige Zeichen sehr selten vorkommen.',
            correct : false,
            _question : infsi1Q4._id
        });

        var infsi1A15 = new Answer({
            text    : 'wenn einige Zeichen sehr häufig vorkommen.',
            correct : false,
            _question : infsi1Q4._id
        });

        var infsi1A16 = Answer({
            text    : 'wenn alle Zeichen gleich wenig vorkommen.',
            correct : false,
            _question : infsi1Q4._id
        });

        var infsi1Q5 = new Question({
            name    : 'Welchen Anteil Übereinstimmungen liefert die Autokorrelation einer sehr langen, zufälligen Zeichenfolge. Die Zeichenfolge sei 1000 Zeichen lang, wobei an jeder Stelle eines von 100 möglichen Zeichen zufällig ausgewählt wurde. Die Verschiebung beträgt mindestens ein Zeichen.',
            status  : 'Created',
            _category : infsi1._id
        });

        var infsi1A17 = new Answer({
            text    : '1%',
            correct : true,
            _question : infsi1Q5._id
        });

        var infsi1A18 = new Answer({
            text    : '4%',
            correct : false,
            _question : infsi1Q5._id
        });

        var infsi1A19 = new Answer({
            text    : '7%',
            correct : false,
            _question : infsi1Q5._id
        });

        var infsi1A20 = Answer({
            text    : '10%',
            correct : false,
            _question : infsi1Q5._id
        });

        var infsi1Q6 = new Question({
            name    : 'Welche (effektive) Schlüssellänge wird bei "normaler" DES-Verschlüsselung verwendet?',
            status  : 'Created',
            _category : infsi1._id
        });

        var infsi1A21 = new Answer({
            text    : '56 Bit',
            correct : true,
            _question : infsi1Q6._id
        });

        var infsi1A22 = new Answer({
            text    : '64 Bit',
            correct : false,
            _question : infsi1Q6._id
        });

        var infsi1A23 = new Answer({
            text    : '128 Bit',
            correct : false,
            _question : infsi1Q6._id
        });

        var infsi1A24 = Answer({
            text    : '40 Bit',
            correct : false,
            _question : infsi1Q6._id
        });

        var infsi1Q7 = new Question({
            name    : 'Welchen Teil des Schlüssels muss der Sender einer Nachricht bei der Verschlüsselung mit einem Public Key Verfahren verwenden?',
            status  : 'Created',
            _category : infsi1._id
        });

        var infsi1A25 = new Answer({
            text    : 'den Public Key des Empfängers',
            correct : true,
            _question : infsi1Q7._id
        });

        var infsi1A26 = new Answer({
            text    : 'den Private Key des Empfängers',
            correct : false,
            _question : infsi1Q7._id
        });

        var infsi1A27 = new Answer({
            text    : 'den Public Key des Senders',
            correct : false,
            _question : infsi1Q7._id
        });

        var infsi1A28 = Answer({
            text    : 'den Private Key des Senders',
            correct : false,
            _question : infsi1Q7._id
        });

        var infsi1Q8 = new Question({
            name    : 'Welchen Teil des Schlüssels muss der Empfänger einer mit Public Key Verfahren verschlüsselten Nachricht zur Entschlüsselung verwenden?',
            status  : 'Created',
            _category : infsi1._id
        });

        var infsi1A29 = new Answer({
            text    : 'den Private Key des Empfängers',
            correct : true,
            _question : infsi1Q8._id
        });

        var infsi1A30 = new Answer({
            text    : 'den Private Key des Senders',
            correct : false,
            _question : infsi1Q8._id
        });

        var infsi1A31 = new Answer({
            text    : 'den Public Key des Empfängers',
            correct : false,
            _question : infsi1Q8._id
        });

        var infsi1A32 = Answer({
            text    : 'den Public Key des Senders',
            correct : false,
            _question : infsi1Q8._id
        });

        var infsi1Q9 = new Question({
            name    : '43 mod (13) ist gleich',
            status  : 'Created',
            _category : infsi1._id
        });

        var infsi1A33 = new Answer({
            text    : '4',
            correct : true,
            _question : infsi1Q9._id
        });

        var infsi1A34 = new Answer({
            text    : '1',
            correct : false,
            _question : infsi1Q9._id
        });

        var infsi1A35 = new Answer({
            text    : '3',
            correct : false,
            _question : infsi1Q9._id
        });

        var infsi1A36 = Answer({
            text    : '8',
            correct : false,
            _question : infsi1Q9._id
        });

        var infsi1Q10 = new Question({
            name    : 'Die (multiplikativ) inverse Zahl von 7 mod (9) ist gleich',
            status  : 'Created',
            _category : infsi1._id
        });

        var infsi1A37 = new Answer({
            text    : '4',
            correct : true,
            _question : infsi1Q10._id
        });

        var infsi1A38 = new Answer({
            text    : '2',
            correct : false,
            _question : infsi1Q10._id
        });

        var infsi1A39 = new Answer({
            text    : '5',
            correct : false,
            _question : infsi1Q10._id
        });

        var infsi1A40 = Answer({
            text    : '8',
            correct : false,
            _question : infsi1Q10._id
        });

        var infsi1Q11 = new Question({
            name    : 'Um jemandem eine signierte Meldung schicken zu können, benötigt der Sender...',
            status  : 'Created',
            _category : infsi1._id
        });

        var infsi1A41 = new Answer({
            text    : 'den Private Key des Senders',
            correct : true,
            _question : infsi1Q11._id
        });

        var infsi1A42 = new Answer({
            text    : 'den Public Key des Senders',
            correct : false,
            _question : infsi1Q11._id
        });

        var infsi1A43 = new Answer({
            text    : 'den Private Key des Empfängers',
            correct : false,
            _question : infsi1Q11._id
        });

        var infsi1A44 = Answer({
            text    : 'den Public Key des Empfängers',
            correct : false,
            _question : infsi1Q11._id
        });

        var infsi1Q12 = new Question({
            name    : 'Mittlerweile ist bekannt, dass folgende Personen die Erfinder des ersten Public Key Verschlüsselungsverfahrens waren:',
            status  : 'Created',

            _category : infsi1._id
        });

        var infsi1A45 = new Answer({
            text    : 'Ellis, Cocks, Williamson',
            correct : true,
            _question : infsi1Q12._id
        });

        var infsi1A46 = new Answer({
            text    : 'Rivest, Shamir, Adleman',
            correct : false,
            _question : infsi1Q12._id
        });

        var infsi1A47 = new Answer({
            text    : 'Diffie, Hellman',
            correct : false,
            _question : infsi1Q12._id
        });

        var infsi1A48 = Answer({
            text    : 'Jobs, Nadella',
            correct : false,
            _question : infsi1Q12._id
        });

        infsi1Q1.answers.push(infsi1A1._id, infsi1A2._id, infsi1A3._id, infsi1A4._id);
        infsi1Q2.answers.push(infsi1A5._id, infsi1A6._id, infsi1A7._id, infsi1A8._id);
        infsi1Q3.answers.push(infsi1A9._id, infsi1A10._id, infsi1A11._id, infsi1A12._id);
        infsi1Q4.answers.push(infsi1A13._id, infsi1A14._id, infsi1A15._id, infsi1A16._id);
        infsi1Q5.answers.push(infsi1A17._id, infsi1A18._id, infsi1A19._id, infsi1A20._id);
        infsi1Q6.answers.push(infsi1A21._id, infsi1A22._id, infsi1A23._id, infsi1A24._id);
        infsi1Q7.answers.push(infsi1A25._id, infsi1A26._id, infsi1A27._id, infsi1A28._id);
        infsi1Q8.answers.push(infsi1A29._id, infsi1A30._id, infsi1A31._id, infsi1A32._id);
        infsi1Q9.answers.push(infsi1A33._id, infsi1A34._id, infsi1A35._id, infsi1A36._id);
        infsi1Q10.answers.push(infsi1A37._id, infsi1A38._id, infsi1A39._id, infsi1A40._id);
        infsi1Q11.answers.push(infsi1A41._id, infsi1A42._id, infsi1A43._id, infsi1A44._id);
        infsi1Q12.answers.push(infsi1A45._id, infsi1A46._id, infsi1A47._id, infsi1A48._id);

        infsi1.questions.push(infsi1Q1._id);
        infsi1.questions.push(infsi1Q2._id);
        infsi1.questions.push(infsi1Q3._id);
        infsi1.questions.push(infsi1Q4._id);
        infsi1.questions.push(infsi1Q5._id);
        infsi1.questions.push(infsi1Q6._id);
        infsi1.questions.push(infsi1Q7._id);
        infsi1.questions.push(infsi1Q8._id);
        infsi1.questions.push(infsi1Q9._id);
        infsi1.questions.push(infsi1Q10._id);
        infsi1.questions.push(infsi1Q11._id);
        infsi1.questions.push(infsi1Q12._id);

        infsi1A1.save();
        infsi1A2.save();
        infsi1A3.save();
        infsi1A4.save();
        infsi1A5.save();
        infsi1A6.save();
        infsi1A7.save();
        infsi1A8.save();
        infsi1A9.save();
        infsi1A10.save();
        infsi1A11.save();
        infsi1A12.save();
        infsi1A13.save();
        infsi1A14.save();
        infsi1A15.save();
        infsi1A16.save();
        infsi1A17.save();
        infsi1A18.save();
        infsi1A19.save();
        infsi1A20.save();
        infsi1A21.save();
        infsi1A22.save();
        infsi1A23.save();
        infsi1A24.save();
        infsi1A25.save();
        infsi1A26.save();
        infsi1A27.save();
        infsi1A28.save();
        infsi1A29.save();
        infsi1A30.save();
        infsi1A31.save();
        infsi1A32.save();
        infsi1A33.save();
        infsi1A34.save();
        infsi1A35.save();
        infsi1A36.save();
        infsi1A37.save();
        infsi1A38.save();
        infsi1A39.save();
        infsi1A40.save();
        infsi1A41.save();
        infsi1A42.save();
        infsi1A43.save();
        infsi1A44.save();
        infsi1A45.save();
        infsi1A46.save();
        infsi1A47.save();
        infsi1A48.save();

        infsi1Q1.save();
        infsi1Q2.save();
        infsi1Q3.save();
        infsi1Q4.save();
        infsi1Q5.save();
        infsi1Q6.save();
        infsi1Q7.save();
        infsi1Q8.save();
        infsi1Q9.save();
        infsi1Q10.save();
        infsi1Q11.save();
        infsi1Q12.save();

        infsi1.save();


        var allgHSR = new Category({
            name    : 'Allgemein HSR'
        });

        var allgHSRQ1 = new Question({
            name    : 'Welches ist das Campus-Tier?',
            status  : 'Created',
            _category : allgHSR._id
        });

        var allgHSRA1 = new Answer({
            text    : 'Katze',
            correct : true,
            _question : allgHSRQ1._id
        });

        var allgHSRA2 = new Answer({
            text    : 'Hund',
            correct : false,
            _question : allgHSRQ1._id
        });

        var allgHSRA3 = new Answer({
            text    : 'Hamster',
            correct : false,
            _question : allgHSRQ1._id
        });

        var allgHSRA4 = Answer({
            text    : 'Krokodil',
            correct : false,
            _question : allgHSRQ1._id
        });

        var allgHSRQ2 = new Question({
            name    : 'An wen wende ich mich, wenn ich mich von Modulen an- oder abmelden möchte?',
            status  : 'Created',
            _category : allgHSR._id
        });

        var allgHSRA5 = new Answer({
            text    : 'unterricht(at)hsr.ch',
            correct : true,
            _question : allgHSRQ2._id
        });

        var allgHSRA6 = new Answer({
            text    : 'office(at)hsr.ch',
            correct : false,
            _question : allgHSRQ2._id
        });

        var allgHSRA7 = new Answer({
            text    : 'sekretariat(at)hsr.ch',
            correct : false,
            _question : allgHSRQ2._id
        });

        var allgHSRA8 = Answer({
            text    : 'servicedesk(at)hsr.ch',
            correct : false,
            _question : allgHSRQ2._id
        });

        var allgHSRQ3 = new Question({
            name    : 'Microsoft Software gibt es für Studenten der HSR kostenlos bei...',
            status  : 'Created',
            _category : allgHSR._id
        });

        var allgHSRA9 = new Answer({
            text    : 'DreamSpark',
            correct : true,
            _question : allgHSRQ3._id
        });

        var allgHSRA10 = new Answer({
            text    : 'Torrent',
            correct : false,
            _question : allgHSRQ3._id
        });

        var allgHSRA11 = new Answer({
            text    : 'Usenet',
            correct : false,
            _question : allgHSRQ3._id
        });

        var allgHSRA12 = Answer({
            text    : 'EMule',
            correct : false,
            _question : allgHSRQ3._id
        });

        var allgHSRQ4 = new Question({
            name    : 'Wie viele Studierende studieren an der HSR?',
            status  : 'Created',
            _category : allgHSR._id
        });

        var allgHSRA13 = new Answer({
            text    : '1500',
            correct : true,
            _question : allgHSRQ4._id
        });

        var allgHSRA14 = new Answer({
            text    : '1400',
            correct : false,
            _question : allgHSRQ4._id
        });

        var allgHSRA15 = new Answer({
            text    : '1300',
            correct : false,
            _question : allgHSRQ4._id
        });

        var allgHSRA16 = Answer({
            text    : '1600',
            correct : false,
            _question : allgHSRQ4._id
        });

        var allgHSRQ5 = new Question({
            name    : 'Welcher Alkohol wird an der HSR produziert?',
            status  : 'Created',
            _category : allgHSR._id
        });

        var allgHSRA17 = new Answer({
            text    : 'Bier',
            correct : true,
            _question : allgHSRQ5._id
        });

        var allgHSRA18 = new Answer({
            text    : 'Wein',
            correct : false,
            _question : allgHSRQ5._id
        });

        var allgHSRA19 = new Answer({
            text    : 'Vodka',
            correct : false,
            _question : allgHSRQ5._id
        });

        var allgHSRA20 = Answer({
            text    : 'Whisky',
            correct : false,
            _question : allgHSRQ5._id
        });

        var allgHSRQ6 = new Question({
            name    : 'An wen wende ich mich, wenn ich meinen Badge verloren habe?',
            status  : 'Created',
            _category : allgHSR._id
        });

        var allgHSRA21 = new Answer({
            text    : 'Empfang',
            correct : true,
            _question : allgHSRQ6._id
        });

        var allgHSRA22 = new Answer({
            text    : 'Studiengangsekretariat',
            correct : false,
            _question : allgHSRQ6._id
        });

        var allgHSRA23 = new Answer({
            text    : 'Helpdesk',
            correct : false,
            _question : allgHSRQ6._id
        });

        var allgHSRA24 = Answer({
            text    : 'Gebäudemanagement',
            correct : false,
            _question : allgHSRQ6._id
        });

        var allgHSRQ7 = new Question({
            name    : 'Wie viele Studiengänge gibt es an der HSR?',
            status  : 'Created',
            _category : allgHSR._id
        });

        var allgHSRA25 = new Answer({
            text    : '8',
            correct : true,
            _question : allgHSRQ7._id
        });

        var allgHSRA26 = new Answer({
            text    : '6',
            correct : false,
            _question : allgHSRQ7._id
        });

        var allgHSRA27 = new Answer({
            text    : '7',
            correct : false,
            _question : allgHSRQ7._id
        });

        var allgHSRA28 = Answer({
            text    : '5',
            correct : false,
            _question : allgHSRQ7._id
        });

        var allgHSRQ8 = new Question({
            name    : 'Wo informiere ich mich über das Wohnungsangebot für Studierende?',
            status  : 'Created',
            _category : allgHSR._id
        });

        var allgHSRA29 = new Answer({
            text    : 'Web > Leben an der HSR',
            correct : true,
            _question : allgHSRQ8._id
        });

        var allgHSRA30 = new Answer({
            text    : 'Empfang',
            correct : false,
            _question : allgHSRQ8._id
        });

        var allgHSRA31 = new Answer({
            text    : 'Comparis',
            correct : false,
            _question : allgHSRQ8._id
        });

        var allgHSRA32 = Answer({
            text    : 'Studiengangsekretariat',
            correct : false,
            _question : allgHSRQ8._id
        });

        var allgHSRQ9 = new Question({
            name    : 'An wen wende ich mich für die Abwicklung eines Studienunterbruchs?',
            status  : 'Created',
            _category : allgHSR._id
        });

        var allgHSRA33 = new Answer({
            text    : 'office(at)hsr.ch',
            correct : true,
            _question : allgHSRQ9._id
        });

        var allgHSRA34 = new Answer({
            text    : 'unterricht(at)hsr.ch',
            correct : false,
            _question : allgHSRQ9._id
        });

        var allgHSRA35 = new Answer({
            text    : 'sekretariat.i(at)hsr.ch',
            correct : false,
            _question : allgHSRQ9._id
        });

        var allgHSRA36 = Answer({
            text    : 'servicedesk(at)hsr.ch',
            correct : false,
            _question : allgHSRQ9._id
        });

        var allgHSRQ10 = new Question({
            name    : 'Die HSR liegt direkt am Ufer des...',
            status  : 'Created',
            _category : allgHSR._id
        });

        var allgHSRA37 = new Answer({
            text    : 'Obersee',
            correct : true,
            _question : allgHSRQ10._id
        });

        var allgHSRA38 = new Answer({
            text    : 'Zürisee',
            correct : false,
            _question : allgHSRQ10._id
        });

        var allgHSRA39 = new Answer({
            text    : 'Greifensee',
            correct : false,
            _question : allgHSRQ10._id
        });

        var allgHSRA40 = Answer({
            text    : 'Jonersee',
            correct : false,
            _question : allgHSRQ10._id
        });

        var allgHSRQ11 = new Question({
            name    : 'Wann habe ich Zutritt zur HSR?',
            status  : 'Created',
            _category : allgHSR._id
        });

        var allgHSRA41 = new Answer({
            text    : 'An 365 Tagen von 5 – 24 Uhr',
            correct : true,
            _question : allgHSRQ11._id
        });

        var allgHSRA42 = new Answer({
            text    : 'An 365 Tagen von 5 – 22 Uhr',
            correct : false,
            _question : allgHSRQ11._id
        });

        var allgHSRA43 = new Answer({
            text    : 'An 365 Tagen von 6 – 24 Uhr',
            correct : false,
            _question : allgHSRQ11._id
        });

        var allgHSRA44 = Answer({
            text    : 'An 365 Tagen von 6 – 22 Uhr',
            correct : false,
            _question : allgHSRQ11._id
        });

        var allgHSRQ12 = new Question({
            name    : 'Wo werden kleinere Fundgegenstände aufbewahrt?',
            status  : 'Created',
            _category : allgHSR._id
        });

        var allgHSRA45 = new Answer({
            text    : 'Empfang',
            correct : true,
            _question : allgHSRQ12._id
        });

        var allgHSRA46 = new Answer({
            text    : 'Helpdesk',
            correct : false,
            _question : allgHSRQ12._id
        });

        var allgHSRA47 = new Answer({
            text    : 'Studiengangsekretariat',
            correct : false,
            _question : allgHSRQ12._id
        });

        var allgHSRA48 = Answer({
            text    : 'Gebäudemanagement',
            correct : false,
            _question : allgHSRQ12._id
        });

        allgHSRQ1.answers.push(allgHSRA1._id, allgHSRA2._id, allgHSRA3._id, allgHSRA4._id);
        allgHSRQ2.answers.push(allgHSRA5._id, allgHSRA6._id, allgHSRA7._id, allgHSRA8._id);
        allgHSRQ3.answers.push(allgHSRA9._id, allgHSRA10._id, allgHSRA11._id, allgHSRA12._id);
        allgHSRQ4.answers.push(allgHSRA13._id, allgHSRA14._id, allgHSRA15._id, allgHSRA16._id);
        allgHSRQ5.answers.push(allgHSRA17._id, allgHSRA18._id, allgHSRA19._id, allgHSRA20._id);
        allgHSRQ6.answers.push(allgHSRA21._id, allgHSRA22._id, allgHSRA23._id, allgHSRA24._id);
        allgHSRQ7.answers.push(allgHSRA25._id, allgHSRA26._id, allgHSRA27._id, allgHSRA28._id);
        allgHSRQ8.answers.push(allgHSRA29._id, allgHSRA30._id, allgHSRA31._id, allgHSRA32._id);
        allgHSRQ9.answers.push(allgHSRA33._id, allgHSRA34._id, allgHSRA35._id, allgHSRA36._id);
        allgHSRQ10.answers.push(allgHSRA37._id, allgHSRA38._id, allgHSRA39._id, allgHSRA40._id);
        allgHSRQ11.answers.push(allgHSRA41._id, allgHSRA42._id, allgHSRA43._id, allgHSRA44._id);
        allgHSRQ12.answers.push(allgHSRA45._id, allgHSRA46._id, allgHSRA47._id, allgHSRA48._id);

        allgHSR.questions.push(allgHSRQ1._id);
        allgHSR.questions.push(allgHSRQ2._id);
        allgHSR.questions.push(allgHSRQ3._id);
        allgHSR.questions.push(allgHSRQ4._id);
        allgHSR.questions.push(allgHSRQ5._id);
        allgHSR.questions.push(allgHSRQ6._id);
        allgHSR.questions.push(allgHSRQ7._id);
        allgHSR.questions.push(allgHSRQ8._id);
        allgHSR.questions.push(allgHSRQ9._id);
        allgHSR.questions.push(allgHSRQ10._id);
        allgHSR.questions.push(allgHSRQ11._id);
        allgHSR.questions.push(allgHSRQ12._id);

        allgHSRA1.save();
        allgHSRA2.save();
        allgHSRA3.save();
        allgHSRA4.save();
        allgHSRA5.save();
        allgHSRA6.save();
        allgHSRA7.save();
        allgHSRA8.save();
        allgHSRA9.save();
        allgHSRA10.save();
        allgHSRA11.save();
        allgHSRA12.save();
        allgHSRA13.save();
        allgHSRA14.save();
        allgHSRA15.save();
        allgHSRA16.save();
        allgHSRA17.save();
        allgHSRA18.save();
        allgHSRA19.save();
        allgHSRA20.save();
        allgHSRA21.save();
        allgHSRA22.save();
        allgHSRA23.save();
        allgHSRA24.save();
        allgHSRA25.save();
        allgHSRA26.save();
        allgHSRA27.save();
        allgHSRA28.save();
        allgHSRA29.save();
        allgHSRA30.save();
        allgHSRA31.save();
        allgHSRA32.save();
        allgHSRA33.save();
        allgHSRA34.save();
        allgHSRA35.save();
        allgHSRA36.save();
        allgHSRA37.save();
        allgHSRA38.save();
        allgHSRA39.save();
        allgHSRA40.save();
        allgHSRA41.save();
        allgHSRA42.save();
        allgHSRA43.save();
        allgHSRA44.save();
        allgHSRA45.save();
        allgHSRA46.save();
        allgHSRA47.save();
        allgHSRA48.save();

        allgHSRQ1.save();
        allgHSRQ2.save();
        allgHSRQ3.save();
        allgHSRQ4.save();
        allgHSRQ5.save();
        allgHSRQ6.save();
        allgHSRQ7.save();
        allgHSRQ8.save();
        allgHSRQ9.save();
        allgHSRQ10.save();
        allgHSRQ11.save();
        allgHSRQ12.save();

        allgHSR.save();


        /* Template
        var cat1 = new Category({
            name    : 'Category1'
        });

        var cat1Q1 = new Question({
            name    : '',
            status  : 'Created',
            _category : cat1._id
        });

        var cat1A1 = new Answer({
            text    : '',
            correct : true,
            _question : cat1Q1._id
        });

        var cat1A2 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q1._id
        });

        var cat1A3 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q1._id
        });

        var cat1A4 = Answer({
            text    : '',
            correct : false,
            _question : cat1Q1._id
        });

        var cat1Q2 = new Question({
            name    : '',
            status  : 'Created',
            _category : cat1._id
        });

        var cat1A5 = new Answer({
            text    : '',
            correct : true,
            _question : cat1Q2._id
        });

        var cat1A6 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q2._id
        });

        var cat1A7 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q2._id
        });

        var cat1A8 = Answer({
            text    : '',
            correct : false,
            _question : cat1Q2._id
        });

        var cat1Q3 = new Question({
            name    : '',
            status  : 'Created',
            _category : cat1._id
        });

        var cat1A9 = new Answer({
            text    : '',
            correct : true,
            _question : cat1Q3._id
        });

        var cat1A10 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q3._id
        });

        var cat1A11 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q3._id
        });

        var cat1A12 = Answer({
            text    : '',
            correct : false,
            _question : cat1Q3._id
        });

        var cat1Q4 = new Question({
            name    : '',
            status  : 'Created',
            _category : cat1._id
        });

        var cat1A13 = new Answer({
            text    : '',
            correct : true,
            _question : cat1Q4._id
        });

        var cat1A14 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q4._id
        });

        var cat1A15 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q4._id
        });

        var cat1A16 = Answer({
            text    : '',
            correct : false,
            _question : cat1Q4._id
        });

        var cat1Q5 = new Question({
            name    : '',
            status  : 'Created',
            _category : cat1._id
        });

        var cat1A17 = new Answer({
            text    : '',
            correct : true,
            _question : cat1Q5._id
        });

        var cat1A18 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q5._id
        });

        var cat1A19 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q5._id
        });

        var cat1A20 = Answer({
            text    : '',
            correct : false,
            _question : cat1Q5._id
        });

        var cat1Q6 = new Question({
            name    : '',
            status  : 'Created',
            _category : cat1._id
        });

        var cat1A21 = new Answer({
            text    : '',
            correct : true,
            _question : cat1Q6._id
        });

        var cat1A22 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q6._id
        });

        var cat1A23 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q6._id
        });

        var cat1A24 = Answer({
            text    : '',
            correct : false,
            _question : cat1Q6._id
        });

        var cat1Q7 = new Question({
            name    : '',
            status  : 'Created',
            _category : cat1._id
        });

        var cat1A25 = new Answer({
            text    : '',
            correct : true,
            _question : cat1Q7._id
        });

        var cat1A26 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q7._id
        });

        var cat1A27 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q7._id
        });

        var cat1A28 = Answer({
            text    : '',
            correct : false,
            _question : cat1Q7._id
        });

        var cat1Q8 = new Question({
            name    : '',
            status  : 'Created',
            _category : cat1._id
        });

        var cat1A29 = new Answer({
            text    : '',
            correct : true,
            _question : cat1Q8._id
        });

        var cat1A30 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q8._id
        });

        var cat1A31 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q8._id
        });

        var cat1A32 = Answer({
            text    : '',
            correct : false,
            _question : cat1Q8._id
        });

        var cat1Q9 = new Question({
            name    : '',
            status  : 'Created',
            _category : cat1._id
        });

        var cat1A33 = new Answer({
            text    : '',
            correct : true,
            _question : cat1Q9._id
        });

        var cat1A34 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q9._id
        });

        var cat1A35 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q9._id
        });

        var cat1A36 = Answer({
            text    : '',
            correct : false,
            _question : cat1Q9._id
        });

        var cat1Q10 = new Question({
            name    : '',
            status  : 'Created',
            _category : cat1._id
        });

        var cat1A37 = new Answer({
            text    : '',
            correct : true,
            _question : cat1Q10._id
        });

        var cat1A38 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q10._id
        });

        var cat1A39 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q10._id
        });

        var cat1A40 = Answer({
            text    : '',
            correct : false,
            _question : cat1Q10._id
        });

        var cat1Q11 = new Question({
            name    : '',
            status  : 'Created',
            _category : cat1._id
        });

        var cat1A41 = new Answer({
            text    : '',
            correct : true,
            _question : cat1Q11._id
        });

        var cat1A42 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q11._id
        });

        var cat1A43 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q11._id
        });

        var cat1A44 = Answer({
            text    : '',
            correct : false,
            _question : cat1Q11._id
        });

        var cat1Q12 = new Question({
            name    : '',
            status  : 'Created',
            _category : cat1._id
        });

        var cat1A45 = new Answer({
            text    : '',
            correct : true,
            _question : cat1Q12._id
        });

        var cat1A46 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q12._id
        });

        var cat1A47 = new Answer({
            text    : '',
            correct : false,
            _question : cat1Q12._id
        });

        var cat1A48 = Answer({
            text    : '',
            correct : false,
            _question : cat1Q12._id
        });

        cat1Q1.answers.push(cat1A1._id, cat1A2._id, cat1A3._id, cat1A4._id);
        cat1Q2.answers.push(cat1A5._id, cat1A6._id, cat1A7._id, cat1A8._id);
        cat1Q3.answers.push(cat1A9._id, cat1A10._id, cat1A11._id, cat1A12._id);
        cat1Q4.answers.push(cat1A13._id, cat1A14._id, cat1A15._id, cat1A16._id);
        cat1Q5.answers.push(cat1A17._id, cat1A18._id, cat1A19._id, cat1A20._id);
        cat1Q6.answers.push(cat1A21._id, cat1A22._id, cat1A23._id, cat1A24._id);
        cat1Q7.answers.push(cat1A25._id, cat1A26._id, cat1A27._id, cat1A28._id);
        cat1Q8.answers.push(cat1A29._id, cat1A30._id, cat1A31._id, cat1A32._id);
        cat1Q9.answers.push(cat1A33._id, cat1A34._id, cat1A35._id, cat1A36._id);
        cat1Q10.answers.push(cat1A37._id, cat1A38._id, cat1A39._id, cat1A40._id);
        cat1Q11.answers.push(cat1A41._id, cat1A42._id, cat1A43._id, cat1A44._id);
        cat1Q12.answers.push(cat1A45._id, cat1A46._id, cat1A47._id, cat1A48._id);

        cat1.questions.push(cat1Q1._id);
        cat1.questions.push(cat1Q2._id);
        cat1.questions.push(cat1Q3._id);
        cat1.questions.push(cat1Q4._id);
        cat1.questions.push(cat1Q5._id);
        cat1.questions.push(cat1Q6._id);
        cat1.questions.push(cat1Q7._id);
        cat1.questions.push(cat1Q8._id);
        cat1.questions.push(cat1Q9._id);
        cat1.questions.push(cat1Q10._id);
        cat1.questions.push(cat1Q11._id);
        cat1.questions.push(cat1Q12._id);

        cat1A1.save();
        cat1A2.save();
        cat1A3.save();
        cat1A4.save();
        cat1A5.save();
        cat1A6.save();
        cat1A7.save();
        cat1A8.save();
        cat1A9.save();
        cat1A10.save();
        cat1A11.save();
        cat1A12.save();
        cat1A13.save();
        cat1A14.save();
        cat1A15.save();
        cat1A16.save();
        cat1A17.save();
        cat1A18.save();
        cat1A19.save();
        cat1A20.save();
        cat1A21.save();
        cat1A22.save();
        cat1A23.save();
        cat1A24.save();
        cat1A25.save();
        cat1A26.save();
        cat1A27.save();
        cat1A28.save();
        cat1A29.save();
        cat1A30.save();
        cat1A31.save();
        cat1A32.save();
        cat1A33.save();
        cat1A34.save();
        cat1A35.save();
        cat1A36.save();
        cat1A37.save();
        cat1A38.save();
        cat1A39.save();
        cat1A40.save();
        cat1A41.save();
        cat1A42.save();
        cat1A43.save();
        cat1A44.save();
        cat1A45.save();
        cat1A46.save();
        cat1A47.save();
        cat1A48.save();

        cat1Q1.save();
        cat1Q2.save();
        cat1Q3.save();
        cat1Q4.save();
        cat1Q5.save();
        cat1Q6.save();
        cat1Q7.save();
        cat1Q8.save();
        cat1Q9.save();
        cat1Q10.save();
        cat1Q11.save();
        cat1Q12.save();

        cat1.save();
*/
    });
}

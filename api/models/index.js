var Log = require('../logs/index');

var mongoose = require('mongoose');
var random = require('mongoose-random');
mongoose.connect(process.db.connection);

var db = mongoose.connection;

db.on('error', function() {
    Log.error('Database connection failed');
});

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

    var cc = new Category({
        name    : 'test',
        description : 'etst'
    });

    var q = new Question({
        name        : 'Bei welchen Datenbanken/Datenbanksysteme werden die Daten und ihre Beziehungen in Tabellen (Relationen) abgebildet?',
        status      : 'Created',
        
        _category : cc._id
    });

    var a1 = new Answer({
        text    : 'relationalen Datenbanksysteme (RDBS)',
        correct : true,
        _question : q._id
    });

    var a2 = new Answer({
        text    : 'objektrelationale Datenbanksysteme (ORDBS)',
        correct : false,
        _question : q._id
    });

    var a3 = new Answer({
        text    : 'objektorientierte Datenbanksysteme (OODBS)',
        correct : false,
        _question : q._id
    });

    var a4 = Answer({
        text    : 'hierarchischen Datenbanken',
        correct : false,
        _question : q._id
    });
    q.answers.push(a1._id, a2._id, a3._id, a4._id);
    cc.questions.push(q._id);

    a1.save();
    a2.save();
    a3.save();
    a4.save();

    q.save();
    cc.save();


    /*var db1 = new Category({
        name        : 'Datenbanken1',
        questions   : [
            new Question({
                name        : 'Bei welchen Datenbanken/Datenbanksysteme werden die Daten und ihre Beziehungen in Tabellen (Relationen) abgebildet?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'relationalen Datenbanksysteme (RDBS)',
                        correct : true
                    }),
                    new Answer({
                        text    : 'objektrelationale Datenbanksysteme (ORDBS)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'objektorientierte Datenbanksysteme (OODBS)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'hierarchischen Datenbanken',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welche Datenbanken/Systeme sind neuartige Datenbankanwendungen?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Multimediadatenbank',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Oracle Database',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Objektrelationale Datenbank (ORDB)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Microsoft SQL',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welche Datenbanken/Datenbanksysteme haben ein Datenmodell (Paradigma) in der Art eines Baums?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Hierarchische Datenbanken',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Objektrelationale Datenbanksysteme (ORDBS)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Objektorientierte Datenbanksysteme (OODBS)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Relationale Datenbanksysteme (RDBS)4',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Bei welchen Datenbanken/Datenbanksysteme werden die Daten und ihre Beziehungen in Tabellen (Relationen) abgebildet?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'relationalen Datenbanksysteme (RDBS)',
                        correct : true
                    }),
                    new Answer({
                        text    : 'objektrelationale Datenbanksysteme (ORDBS)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'objektorientierte Datenbanksysteme (OODBS)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'hierarchischen Datenbanken',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Bei welchen Datenbanken/Datenbanksysteme werden zusätzlich zum RDBS Konzepte der Objektorientierung übernommen?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'objektrelationalen Datenbanksysteme (ORDBS)',
                        correct : true
                    }),
                    new Answer({
                        text    : 'relationalen Datenbanksysteme (RDBS)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'hierarchischen Datenbanken',
                        correct : false
                    }),
                    new Answer({
                        text    : 'bjektorientierten Datenbanksysteme (OODBS)',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Abkürzung für ein relationale Datenbanksystem.',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'RDBS',
                        correct : true
                    }),
                    new Answer({
                        text    : 'RDSB',
                        correct : false
                    }),
                    new Answer({
                        text    : 'RDB',
                        correct : false
                    }),
                    new Answer({
                        text    : 'RDBSY',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Abkürzung für ein objektorientiertes Datenbanksystem.',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'OODBS',
                        correct : true
                    }),
                    new Answer({
                        text    : 'OBDB',
                        correct : false
                    }),
                    new Answer({
                        text    : 'OODB',
                        correct : false
                    }),
                    new Answer({
                        text    : 'OODBSYS',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Ein Attribut einer Entity-Menge, welches Primärschlüssel einer anderen Entity-Menge ist, bezeichnet man als Fremdschlüssel. Was ist gemeint?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Schlüssel (key)',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Datenmodell',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Beziehungen (relationships)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Enität (entity)',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Was gibt es zwischen Entitäten, die auch Attribute haben können?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Beziehungen (relationships)',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Attribute',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Schlüssel (key)',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Entitäten (entity)',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welcher Typ versteht man als elementare, nicht zusammengesetzte Wertebereiche, wie z.B. INTEGER für ganze Zahlen oder DECIMAL für Zahlen mit Nachkommastellen?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Basisdatentypen',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Basisdatentypen',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Typkonstruktoren',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Wertetyp',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Wie kann man Zeilen aus einer bestehenden Relation auswählen?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Selektion',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Join-Operation',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Projektion',
                        correct : false
                    }),
                    new Answer({
                        text    : 'InnerJoin-Operation',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welches sind klassische Mengenoperationen?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Union, Intersection, Product, Difference',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Intersection, Selection, Division, Difference',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Projection, Difference, Union',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Selection, Division, Difference, Product',
                        correct : false
                    })
                ]
            })
        ]
    }).save();

    var wi1 = new Category({
        name        : 'Wirschaftsinformatik1',
        questions   : [
            new Question({
                name        : 'Warum werden Dienstleistungen / Produktionen ins Ausland ausgelagert?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Wegen den hohen Kosten im Inland ist es für viele Unternehmen lukrativ im Ausland zu produzieren.',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Weil man dadurch die Schweizer Wirtschaft stärkt',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Weil man dadurch Steuern sparen kann',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Dadurch kann das Produkt für verschiedene Kulturen passend gestaltet werden',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welche der folgenden Anforderungen gehört nicht zwingend zu den Aktivitäten eines Geschäftsprozesses?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Aktivitäten müssen die Mitarbeitenden motivieren	',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Aktivitäten müssen einen definierten Anfang und ein definiertes Ende haben	',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Aktivitäten müssen wiederholt durchgeführt werden',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Aktivitäten müssen einen Beitrag zur Wertschöpfung leisten	',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welcher Wirtschaftssektor erlebte den höchsten Zuwachs in den letzten 10 Jahren?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Dienstleistung',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Landwirtschaft',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Industrie',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Gewerbe',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welche Akademiker wurden gemäss der Staufenbiel Job Trends Studie im Jahr 2015 über alle Branchen hinweg am wenigsten häufig gesucht?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Naturwissenschaftler',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Informatiker',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Wirtschaftswissenschaftler',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Ingenieure',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Gegeben ist die Preis-Absatz-Funktion p = 100 - 1/3x. Bei welcher Menge (x) erzielt das Unternehmen den höchsten Umsatz?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : '25',
                        correct : true
                    }),
                    new Answer({
                        text    : '150',
                        correct : false
                    }),
                    new Answer({
                        text    : '50',
                        correct : false
                    }),
                    new Answer({
                        text    : '33.33',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Sie wollen die Kosten niedrig halten und gleichzeitig internationale Märkte verfolgen. Ihre Produkte haben nahezu jede Grösse und es handeln sich um Spezialgeräte bis hin zu überdimensionaler Fracht. Welches Produkt von UPS hilft ihrem Unternehmen am besten?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Ocean Freight',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Flex Global View',
                        correct : false
                    }),
                    new Answer({
                        text    : 'UPS Campus Ship',
                        correct : false
                    }),
                    new Answer({
                        text    : 'UPS World Ease',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Aus welchem Grund ging J.C. Penney eine Verbindung mit TAL ein obwohl es davor auch funktionierte?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Da TAL mit seinen günstigen Produktionsstätten zu niedrigeren Preisen produzieren und liefern kann.',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Da TAL eine Erfindung von J.C. Penney ist. J.C. Penney erhoffte sich so eine übersichtlichere Firmenstruktur.',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Da sich die Geschäftsleitung von J.C. Penney und der CEO von TAL gut gekannt haben.',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Da TAL ein Monopol wurde, war J.C. Penney fast schon gezwungen mit ihnen eine Verbindung einzugehen.',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Warum bietet jedes Logistikunternehmen ein gratis Track&Trace an?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Die Firmenkunden sparen Geld weil der Kunde die Lieferinformationen jederzeit online einsehen kann',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Die Logistikunternehmen wollen den Kunden ein Zusatzdienst verkaufen',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Das Track & Trace ist nur eine Marketingsache, es bietet keinen Mehrwert',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Das Track & Trace ist ein Indikator für die Globalisierung',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welche der folgenden Anforderungen gehört nicht zwingend zu den Aktivitäten eines Geschäftsprozesses?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Aktivitäten müssen die Mitarbeitenden motivieren',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Aktivitäten müssen einen Beitrag zur Wertschöpfung leisten',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Aktivitäten müssen einen definierten Anfang und ein definiertes Ende haben',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Aktivitäten müssen wiederholt durchgeführt werden',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welche Vorteile bietet das Unternehmen TAL den Händlern, die Hemden verkaufen?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Gewinnsteigerung Händler - Händler kann sich auf seine Kernkompetenz (Handel) konzentrieren - Händler erhält Empfehlung für Hemden, die gut verkauft werden.',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Alle Daten von TAL kann man als Händler runterladen - TAL garantiert eine 100% fehlerfreie Produktion.',
                        correct : false
                    }),
                    new Answer({
                        text    : 'TAL speichert keine Kundendaten und garantiert 100% Anonymität - TAL versendet innerhalb von Tagen tausende neu produzierte Hemden an den Händler.',
                        correct : false
                    }),
                    new Answer({
                        text    : 'TAL übernimmt den gesamten Prozess von der Herstellung bis zum Verkauf der Waren an den Endkunden.',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Innovation kann sich in den Bereichen People, Business und/oder Technology auswirken. Wie wird die Innovation genannt, die sich in allen drei Bereichen auswirkt?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Experience Innovation',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Process Innovation',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Emotional Innovation',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Functional Innovation',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Ein Anwendungssystem beinhaltet gegenüber einem Informationssystem auch:',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Organisation',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Daten',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Hardware',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Software',
                        correct : false
                    })
                ]
            })
        ]
    }).save();

    var cn1 = new Category({
        name        : 'Computernetze1',
        questions   : [
            new Question({
                name        : 'Wie gross ist bei Ethernet die MTU?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : '1500B',
                        correct : true
                    }),
                    new Answer({
                        text    : '64B',
                        correct : false
                    }),
                    new Answer({
                        text    : '1460B',
                        correct : false
                    }),
                    new Answer({
                        text    : '1480B',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Wie gross ist die maximale IPv4-SDU?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : '1480B',
                        correct : true
                    }),
                    new Answer({
                        text    : '1500B',
                        correct : false
                    }),
                    new Answer({
                        text    : '1460B',
                        correct : false
                    }),
                    new Answer({
                        text    : '64B',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Wie gross ist eine IPv6-Adresse?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : '16B',
                        correct : true
                    }),
                    new Answer({
                        text    : '4B',
                        correct : false
                    }),
                    new Answer({
                        text    : '8B',
                        correct : false
                    }),
                    new Answer({
                        text    : '32B',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Zu welchem IPv4-Feld gibt es kein entsprechendes IPv6-Feld?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Header Lenght',
                        correct : true
                    }),
                    new Answer({
                        text    : 'TTL',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Protocol Type',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Datagram Länge',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'In welchem Portnummernbereich liegen die „Ephemerial bzw. Dynamischen Ports“?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : '49152-65335',
                        correct : true
                    }),
                    new Answer({
                        text    : '1024-49151',
                        correct : false
                    }),
                    new Answer({
                        text    : '0-1023',
                        correct : false
                    }),
                    new Answer({
                        text    : '65336-16777216',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welches Anwendungsprotokoll nutzt typisch TCP?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'FTP',
                        correct : true
                    }),
                    new Answer({
                        text    : 'TFTP',
                        correct : false
                    }),
                    new Answer({
                        text    : 'RTP',
                        correct : false
                    }),
                    new Answer({
                        text    : 'DNS',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welches Anwendungsprotokoll nutzt typisch UDP?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'DNS',
                        correct : true
                    }),
                    new Answer({
                        text    : 'SMTP',
                        correct : false
                    }),
                    new Answer({
                        text    : 'HTTP',
                        correct : false
                    }),
                    new Answer({
                        text    : 'FTP',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welcher Parameter legt bi TCP für die sendende Station fest, wie gross die TCP-SDU maximal sein darf?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Maximum Segment Size',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Receive Window Size',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Congestion Window Size',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Window Scale Factor',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Mit welchem Resource Recourd Type wird der "echte Namen" eines Rechners angegeben?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'CNAME',
                        correct : true
                    }),
                    new Answer({
                        text    : 'MX',
                        correct : false
                    }),
                    new Answer({
                        text    : 'NS',
                        correct : false
                    }),
                    new Answer({
                        text    : 'ALIAS',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Bei welchem FTP-Mode baut der Server die Verbindung zum Client auf für den Datentransfer?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Active Mode',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Passive Mode',
                        correct : false
                    }),
                    new Answer({
                        text    : 'TFTP Mode',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Anonymous',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welche dieser Top Level Domains ist für Organisationen in den USA vorbehalten?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'EDU',
                        correct : true
                    }),
                    new Answer({
                        text    : 'COM',
                        correct : false
                    }),
                    new Answer({
                        text    : 'ORG',
                        correct : false
                    }),
                    new Answer({
                        text    : 'CH',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Wie nennt man die übertragene Einheit auf dem Application Layer?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Message',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Segment',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Datagram',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Bit',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Wie nennt man die übertragene Einheit auf dem Data Link Layer?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Frame',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Bit',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Datagram',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Segment',
                        correct : false
                    })
                ]
            })
        ]
    }).save();

    var infsi1 = new Category({
        name        : 'Informationssicherheit1',
        description : 'Category1 description',
        questions   : [
            new Question({
                name        : 'Wie viele mögliche Schlüssel gibt es beim Caesar-Code, wenn k Zeichen aus einem Alphabet mit 26 Buchstaben verschlüsselt werden sollen?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : '26',
                        correct : true
                    }),
                    new Answer({
                        text    : '26*k',
                        correct : false
                    }),
                    new Answer({
                        text    : '26!',
                        correct : false
                    }),
                    new Answer({
                        text    : '26^2',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Wie viele mögliche Schlüssel gibt es beim Vigenère-Code mit n Zeichen Schlüssellänge?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : '26^n',
                        correct : true
                    }),
                    new Answer({
                        text    : '26!',
                        correct : false
                    }),
                    new Answer({
                        text    : '2^n',
                        correct : false
                    }),
                    new Answer({
                        text    : '26*n',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Bei welchem Verfahren zeigt die Autokorrelation der verschlüsselten Zeichenfolge des Märchentextes "Ali Baba und die 40 Räuber" in der Regel Periodizitäten?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Vigenère',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Caesar',
                        correct : false
                    }),
                    new Answer({
                        text    : '3DES',
                        correct : false
                    }),
                    new Answer({
                        text    : 'AES',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Die Entropie einer Zeichenfolge (bzw. der mittlere Informationsgehalt der Zeichenfolge) ist dann am höchsten,...',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'wenn alle Zeichen gleich häufig vorkommen',
                        correct : true
                    }),
                    new Answer({
                        text    : 'wenn einige Zeichen sehr selten vorkommen',
                        correct : false
                    }),
                    new Answer({
                        text    : 'wenn einige Zeichen sehr häufig vorkommen',
                        correct : false
                    }),
                    new Answer({
                        text    : 'wenn alle Zeichen gleich wenig vorkommen',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welchen Anteil Übereinstimmungen liefert die Autokorrelation einer sehr langen, zufälligen Zeichenfolge. Die Zeichenfolge sei 1000 Zeichen lang, wobei an jeder Stelle eines von 100 möglichen Zeichen zufällig ausgewählt wurde. Die Verschiebung beträgt mindestens ein Zeichen.',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : '1%',
                        correct : true
                    }),
                    new Answer({
                        text    : '4%',
                        correct : false
                    }),
                    new Answer({
                        text    : '7%',
                        correct : false
                    }),
                    new Answer({
                        text    : '10%',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welche (effektive) Schlüssellänge wird bei "normaler" DES-Verschlüsselung verwendet?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : '56 Bit',
                        correct : true
                    }),
                    new Answer({
                        text    : '64 Bit',
                        correct : false
                    }),
                    new Answer({
                        text    : '128 Bit',
                        correct : false
                    }),
                    new Answer({
                        text    : '40 Bit',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welchen Teil des Schlüssels muss der Sender einer Nachricht bei der Verschlüsselung mit einem Public Key Verfahren verwenden?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'den Public Key des Empfängers',
                        correct : true
                    }),
                    new Answer({
                        text    : 'den Private Key des Empfängers',
                        correct : false
                    }),
                    new Answer({
                        text    : 'den Public Key des Senders',
                        correct : false
                    }),
                    new Answer({
                        text    : 'den Private Key des Senders',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Welchen Teil des Schlüssels muss der Empfänger einer mit Public Key Verfahren verschlüsselten Nachricht zur Entschlüsselung verwenden?',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'den Private Key des Empfängers',
                        correct : true
                    }),
                    new Answer({
                        text    : 'den Private Key des Senders',
                        correct : false
                    }),
                    new Answer({
                        text    : 'den Public Key des Empfängers',
                        correct : false
                    }),
                    new Answer({
                        text    : 'den Public Key des Senders',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : '43 mod (13) ist gleich',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : '4',
                        correct : true
                    }),
                    new Answer({
                        text    : '1',
                        correct : false
                    }),
                    new Answer({
                        text    : '3',
                        correct : false
                    }),
                    new Answer({
                        text    : '8',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Die (multiplikativ) inverse Zahl von 7 mod (9) ist gleich',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : '4',
                        correct : true
                    }),
                    new Answer({
                        text    : '2',
                        correct : false
                    }),
                    new Answer({
                        text    : '5',
                        correct : false
                    }),
                    new Answer({
                        text    : '8',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Um jemandem eine signierte Meldung schicken zu können, benötigt der Sender …',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'den Private Key des Senders',
                        correct : true
                    }),
                    new Answer({
                        text    : 'den Public Key des Senders',
                        correct : false
                    }),
                    new Answer({
                        text    : 'den Private Key des Empfängers',
                        correct : false
                    }),
                    new Answer({
                        text    : 'den Public Key des Empfängers',
                        correct : false
                    })
                ]
            }),
            new Question({
                name        : 'Mittlerweile ist bekannt, dass folgende Personen die Erfinder des ersten Public Key Verschlüsselungsverfahrens waren:',
                status      : 'Created',
                answers     : [
                    new Answer({
                        text    : 'Ellis, Cocks, Williamson',
                        correct : true
                    }),
                    new Answer({
                        text    : 'Rivest, Shamir, Adleman',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Diffie, Hellman',
                        correct : false
                    }),
                    new Answer({
                        text    : 'Jobs, Nadella',
                        correct : false
                    })
                ]
            })
        ]
    }).save();
    }).save();*/
});

var userSchema = mongoose.Schema({
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: function(v) {
                    return new RegExp("[a-zA-Z0-9\.]*@hsr.ch").test(v);
                },
                message: '{VALUE} ist keine gültige Email adresse!'
            }
        },
        username: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['Registered', 'Activated', 'Deleted'],
            default: 'Registered'
        },
        role: {
            type: String,
            enum: ['Player', 'Administrator', 'Moderator'],
            default: 'Player'
        }
    },
    {
        timestamps: true
    }
);

userSchema.methods.fullName = function() {
    return this.firstname + ', ' + this.lastname;
};

userSchema.methods.validPassword = function(password) {
    return this.password === password;
};

var answerSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    correct: {
        type: Boolean
    },
    _question : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }
});

var questionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Created', 'Approved', 'Rejected', 'Deleted'],
        default: 'Created'
    },
    answers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    _category : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category' 
    }

});

questionSchema.plugin(random, { path: 'r' });


var categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    questions : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }]
});

categorySchema.plugin(random, { path: 'r' });
//categorySchema.questions.plugin(random, {path:'r'});

var userAnswerSchema = mongoose.Schema({
    timeToAnswer: {
        type: Date,
        required: true
    },
    _answer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer',
        required: true
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

var roundQuestionSchema = mongoose.Schema({
    sequenceNo: {
        type: Number,
        required: true
    },
    _question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    },
    userAnswers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserAnswer'
    }]
});

var roundSchema = mongoose.Schema({
    start: {
        type: Date
    },
    end: {
        type: Date
    },
    _category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    },
    userAnswers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }]
});

var quizSchema = mongoose.Schema({
    _challengerId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    _opponentId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['Started', 'Finished', 'Canceled', 'Waiting'],
        default: 'Started'
    },
    rounds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Round'
    }]

});

var ratingSchema = mongoose.Schema({
    ratingValue: {
        type: String,
        enum: ['Highest', 'AboveAverage', 'Average', 'BelowAverage', 'Lowest']
    },
    comment: {
        type: String
    },
    _user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    }
});

var User = mongoose.model('User', userSchema);
var Quiz = mongoose.model('Quiz', quizSchema);
var Category = mongoose.model('Category', categorySchema);
var Question = mongoose.model('Question', questionSchema);
var Answer = mongoose.model('Answer', answerSchema);

module.exports = {
    User        : User,
    Quiz        : Quiz,
    Category    : Category,
    Question    : Question
    
}
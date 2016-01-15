angular.module('starter.services', [])
    .factory('Chats', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var chats = [
            {
                title: 'Mon',
                content: "Monday's Schedule",
                disabled: false
        },
            {
                title: 'Tue',
                content: "Tuesday's Schedule",
                disabled: false
        },
            {
                title: 'Wed',
                content: "Wednesday's Schedule",
                disabled: false
        },
            {
                title: 'Thu',
                content: "Thursday's Schedule",
                disabled: false
        },
            {
                title: 'Fri',
                content: "Friday's Schedule",
                disabled: false
        }
    ];


        return {
            all: function () {
                return chats;
            },
            remove: function (chat) {
                chats.splice(chats.indexOf(chat), 1);
            },
            get: function (chatId) {
                for (var i = 0; i < chats.length; i++) {
                    if (chats[i].id === parseInt(chatId)) {
                        return chats[i];
                    }
                }
                return null;
            }
        };
    })
    .factory('TeachersData', function () {
        var teachers = {
            "offset": 0,
            "title": "Monta Vista High School: All Staff List",
            "pageUrl": "http://www.mvhs.fuhsd.org/allstafflist",
            "connectorGuid": "71124efc-8fe5-49f6-b614-0044de20d343",
            "results": [
                {
                    "subject": "World Language",
                    "number": "1(408)366-7600 (x8842)",
                    "email/_text": "norma_abarca@fuhsd.org",
                    "firstName": "Norma",
                    "lastName": "Abarca",
                    "name": "Norma Abarca",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857123.jpg",
                    "email": "mailto:norma_abarca@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857123.jpg"
            },
                {
                    "subject": "School Psychologist",
                    "number": "1(408)366-7664",
                    "email/_text": "sheila_altmann@fuhsd.org",
                    "firstName": "Sheila",
                    "lastName": "Altmann",
                    "name": "Sheila Altmann",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857124.jpg",
                    "email": "mailto:sheila_altmann@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857124.jpg"
            },
                {
                    "subject": "Paraeducator",
                    "number": "1(408)366-7600 (x8907)",
                    "email/_text": "heather_amirault@fuhsd.org",
                    "firstName": "Heather",
                    "lastName": "Amirault",
                    "name": "Heather Amirault",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857125.jpg",
                    "email": "mailto:heather_amirault@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857125.jpg"
            },
                {
                    "subject": "English & ELD",
                    "number": "1(408)366-7600 (x8920)",
                    "email/_text": "chelsa_anderson@fuhsd.org",
                    "firstName": "Chelsa",
                    "lastName": "Anderson",
                    "name": "Chelsa Anderson",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857126.jpg",
                    "email": "mailto:chelsa_anderson@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857126.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8803)",
                    "email/_text": "colin_anderson@fuhsd.org",
                    "firstName": "Colin",
                    "lastName": "Anderson",
                    "name": "Colin Anderson",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857127.jpg",
                    "email": "mailto:colin_anderson@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857127.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8829)",
                    "email/_text": "kristopher_asuncion@fuhsd.org",
                    "firstName": "Kristopher",
                    "lastName": "Asuncion",
                    "name": "Kristopher Asuncion",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857128.jpg",
                    "email": "mailto:kristopher_asuncion@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857128.jpg"
            },
                {
                    "subject": "World Language",
                    "number": "1(408)366-7600 (x8806)",
                    "email/_text": "maria_autran@fuhsd.org",
                    "firstName": "Maria",
                    "lastName": "Autran",
                    "name": "Maria Autran",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1390030872091.jpg",
                    "email": "mailto:maria_autran@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1390030872091.jpg"
            },
                {
                    "subject": "Attendance",
                    "number": "1(408)366-7604",
                    "email/_text": "monique_balentine@fuhsd.org",
                    "firstName": "Monique",
                    "lastName": "Balentine",
                    "name": "Monique Balentine",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1356612755385.jpg",
                    "email": "mailto:monique_balentine@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1356612755385.jpg"
            },
                {
                    "subject": "English AVID, & Journalism",
                    "number": "1(408)366-7600 (x8904)",
                    "email/_text": "michelle_balmeo@fuhsd.org",
                    "firstName": "Michelle",
                    "lastName": "Balmeo",
                    "name": "Michelle Balmeo",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857130.jpg",
                    "email": "mailto:michelle_balmeo@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857130.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8850)",
                    "email/_text": "sushma_bana@fuhsd.org",
                    "firstName": "Sushma",
                    "lastName": "Bana",
                    "name": "Sushma Bana",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857132.jpg",
                    "email": "mailto:sushma_bana@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857132.jpg"
            },
                {
                    "subject": "Art",
                    "number": "1(408)366-7600 (x8831)",
                    "email/_text": "dale_barcellos@fuhsd.org",
                    "firstName": "Dale",
                    "lastName": "Barcellos",
                    "name": "Dale Barcellos",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857133.jpg",
                    "email": "mailto:dale_barcellos@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857133.jpg"
            },
                {
                    "subject": "World Language",
                    "number": "1(408)366-7600 (x8818)",
                    "email/_text": "melanie_barker@fuhsd.org",
                    "firstName": "Melanie",
                    "lastName": "Barker",
                    "name": "Melanie Barker",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857134.jpg",
                    "email": "mailto:melanie_barker@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857134.jpg"
            },
                {
                    "subject": "Paraeducator",
                    "number": "1(408)366-7600",
                    "email/_text": "kathy_bauman@fuhsd.org",
                    "firstName": "Kathy",
                    "lastName": "Bauman",
                    "name": "Kathy Bauman",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1239343742453.jpg",
                    "email": "mailto:kathy_bauman@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1239343742453.jpg"
            },
                {
                    "subject": "Social Science",
                    "number": "1(408)366-7600 (x8804)",
                    "email/_text": "bonnie_belshe@fuhsd.org",
                    "firstName": "Bonnie",
                    "lastName": "Belshe",
                    "name": "Bonnie Belshe",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857135.jpg",
                    "email": "mailto:bonnie_belshe@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857135.jpg"
            },
                {
                    "subject": "Science",
                    "number": "1(408)366-7600 (x8808)",
                    "email/_text": "jim_birdsong@fuhsd.org",
                    "firstName": "Jim",
                    "lastName": "Birdsong",
                    "name": "Jim Birdsong",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857136.jpg",
                    "email": "mailto:jim_birdsong@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857136.jpg"
            },
                {
                    "subject": "Social Science &AVID",
                    "number": "1(408)366-7600 (x8858)",
                    "email/_text": "nick_bonacorsi@fuhsd.org",
                    "firstName": "Nick",
                    "lastName": "Bonacorsi",
                    "name": "Nick Bonacorsi",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857137.jpg",
                    "email": "mailto:nick_bonacorsi@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857137.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8810)",
                    "email/_text": "sara_borelli@fuhsd.org",
                    "firstName": "Sara",
                    "lastName": "Borelli",
                    "name": "Sara Borelli",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857138.jpg",
                    "email": "mailto:sara_borelli@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857138.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8827)",
                    "email/_text": "matt_brashears@fuhsd.org",
                    "firstName": "Matt",
                    "lastName": "Brashears",
                    "name": "Matt Brashears",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1356612755382.jpg",
                    "email": "mailto:matt_brashears@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1356612755382.jpg"
            },
                {
                    "subject": "Social Science",
                    "number": "1(408)366-7600 (x8813)",
                    "email/_text": "robyn_brostowicz@fuhsd.org",
                    "firstName": "Robyn",
                    "lastName": "Brostowicz",
                    "name": "Robyn Brostowicz",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857139.jpg",
                    "email": "mailto:robyn_brostowicz@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857139.jpg"
            },
                {
                    "subject": "English & Theatre Arts",
                    "number": "1(408)366-7690",
                    "email/_text": "sara_capule@fuhsd.org",
                    "firstName": "Sara",
                    "lastName": "Capule",
                    "name": "Sara Capule",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857140.jpg",
                    "email": "mailto:sara_capule@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857140.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8851)",
                    "email/_text": "mark_carpenter@fuhsd.org",
                    "firstName": "Mark",
                    "lastName": "Carpenter",
                    "name": "Mark Carpenter",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857141.jpg",
                    "email": "mailto:mark_carpenter@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857141.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8912)",
                    "email/_text": "scott_catrette@fuhsd.org",
                    "firstName": "Scott",
                    "lastName": "Catrette",
                    "name": "Scott Catrette",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857142.jpg",
                    "email": "mailto:scott_catrette@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857142.jpg"
            },
                {
                    "subject": "World Language",
                    "number": "1(408)366-7600 (x8845)",
                    "email/_text": "i-chu_chang@fuhsd.org",
                    "firstName": "I-Chu",
                    "lastName": "Chang",
                    "name": "I-Chu Chang",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857144.jpg",
                    "email": "mailto:i-chu_chang@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857144.jpg"
            },
                {
                    "subject": "Art",
                    "number": "1(408)366-7600 (x8819)",
                    "email/_text": "brian_chow@fuhsd.org",
                    "firstName": "Brian",
                    "lastName": "Chow",
                    "name": "Brian Chow",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857143.jpg",
                    "email": "mailto:brian_chow@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857143.jpg"
            },
                {
                    "subject": "Science",
                    "number": "1(408)366-7600 (x8897)",
                    "email/_text": "pamela_chow@fuhsd.org",
                    "firstName": "Pam",
                    "lastName": "Chow",
                    "name": "Pam Chow",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857146.jpg",
                    "email": "mailto:pamela_chow@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857146.jpg"
            },
                {
                    "subject": "Food Services",
                    "number": "1(408)366-7660",
                    "email/_text": "lisa_chu@fuhsd.org",
                    "firstName": "Lisa",
                    "lastName": "Chu",
                    "name": "Lisa Chu",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857145.jpg",
                    "email": "mailto:lisa_chu@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857145.jpg"
            },
                {
                    "subject": "English & AVID",
                    "number": "1(408)366-7600 (x8830)",
                    "email/_text": "david_clarke@fuhsd.org",
                    "firstName": "David",
                    "lastName": "Clarke",
                    "name": "David Clarke",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857148.jpg",
                    "email": "mailto:david_clarke@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857148.jpg"
            },
                {
                    "subject": "A-G Assistant Principal",
                    "number": "1(408)366-7603",
                    "email/_text": "ben_clausnitzer@fuhsd.org",
                    "firstName": "Ben",
                    "lastName": "Clausnitzer",
                    "name": "Ben Clausnitzer",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857147.jpg",
                    "email": "mailto:ben_clausnitzer@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857147.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8821)",
                    "email/_text": "stacey_cler@fuhsd.org",
                    "firstName": "Stacey",
                    "lastName": "Cler",
                    "name": "Stacey Cler",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857149.jpg",
                    "email": "mailto:stacey_cler@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857149.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8833)",
                    "email/_text": "katie_collins@fuhsd.org",
                    "firstName": "Katie",
                    "lastName": "Collins",
                    "name": "Katie Collins",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1356612755396.jpg",
                    "email": "mailto:katie_collins@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1356612755396.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8822)",
                    "email/_text": "john_conlin@fuhsd.org",
                    "firstName": "John",
                    "lastName": "Conlin",
                    "name": "John Conlin",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1239343742456.jpg",
                    "email": "mailto:john_conlin@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1239343742456.jpg"
            },
                {
                    "subject": "World Language",
                    "number": "1(408)366-7600 (x8823)",
                    "email/_text": "maria_coughlin@fuhsd.org",
                    "firstName": "Maria",
                    "lastName": "Coughlin",
                    "name": "Maria Coughlin",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1356612755398.jpg",
                    "email": "mailto:maria_coughlin@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1356612755398.jpg"
            },
                {
                    "subject": "Custodial Staff",
                    "number": "1(408)366-7633",
                    "email/_text": "jorge_couto@fuhsd.org",
                    "firstName": "Jorge",
                    "lastName": "Couto",
                    "name": "Jorge Couto",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1315636386176.jpg",
                    "email": "mailto:jorge_couto@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1315636386176.jpg"
            },
                {
                    "subject": "Art",
                    "number": "1(408)366-7600 (x8910)",
                    "email/_text": "tyler_cripe@fuhsd.org",
                    "firstName": "Tyler",
                    "lastName": "Cripe",
                    "name": "Tyler Cripe",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1356612755403.jpg",
                    "email": "mailto:tyler_cripe@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1356612755403.jpg"
            },
                {
                    "subject": "Paraeducator",
                    "number": "1(408)366-7600 (x8906)",
                    "email/_text": "tim_deegan@fuhsd.org",
                    "firstName": "Tim",
                    "lastName": "Deegan",
                    "name": "Tim Deegan",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857150.jpg",
                    "email": "mailto:tim_deegan@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857150.jpg"
            },
                {
                    "subject": "Music",
                    "number": "1(408)366-7600 (x8825)",
                    "email/_text": "shari_depiro@fuhsd.org",
                    "firstName": "Shari",
                    "lastName": "D'Epiro",
                    "name": "Shari D'Epiro",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857151.jpg",
                    "email": "mailto:shari_depiro@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857151.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8826)",
                    "email/_text": "scott_deruiter@fuhsd.org",
                    "firstName": "Scott",
                    "lastName": "DeRuiter",
                    "name": "Scott DeRuiter",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857152.jpg",
                    "email": "mailto:scott_deruiter@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857152.jpg"
            },
                {
                    "subject": "Special Education",
                    "number": "1(408)366-7600 (x8840)",
                    "email/_text": "paula_dowell@fuhsd.org",
                    "firstName": "Paula",
                    "lastName": "Dowell",
                    "name": "Paula Dowell",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857153.jpg",
                    "email": "mailto:paula_dowell@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857153.jpg"
            },
                {
                    "subject": "Paraeducator",
                    "number": "1(408)366-7600",
                    "email/_text": "kenneth_duckworth@fuhsd.org",
                    "firstName": "Kenneth",
                    "lastName": "Duckworth",
                    "name": "Kenneth Duckworth",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857154.jpg",
                    "email": "mailto:kenneth_duckworth@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857154.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8884)",
                    "email/_text": "kate_evard@fuhsd.org",
                    "firstName": "Kate",
                    "lastName": "Evard",
                    "name": "Kate Evard",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857155.jpg",
                    "email": "mailto:kate_evard@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857155.jpg"
            },
                {
                    "subject": "Science",
                    "number": "1(408)366-7600 (x8893)",
                    "email/_text": "renee_fallon@fuhsd.org",
                    "firstName": "Renee",
                    "lastName": "Fallon",
                    "name": "Renee Fallon",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857156.jpg",
                    "email": "mailto:renee_fallon@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857156.jpg"
            },
                {
                    "subject": "Music",
                    "number": "1(408)366-7635 or",
                    "number": "1(408)366-7600 (x8832)",
                    "email/_text": "jon_fey@fuhsd.org",
                    "firstName": "Jon",
                    "lastName": "Fey",
                    "name": "Jon Fey",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857157.jpg",
                    "email": "mailto:jon_fey@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857157.jpg"
            },
                {
                    "subject": "World Language",
                    "number": "1(408)366-7600 (x8880)",
                    "email/_text": "sarah_finck@fuhsd.org",
                    "firstName": "Sarah",
                    "lastName": "Finck",
                    "name": "Sarah Finck",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857158.jpg",
                    "email": "mailto:sarah_finck@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857158.jpg"
            },
                {
                    "subject": "School Psychologist",
                    "number": "1(408)366-7643",
                    "email/_text": "glenn_fisher@fuhsd.org",
                    "firstName": "Glenn",
                    "lastName": "Fisher",
                    "name": "Glenn Fisher",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857159.jpg",
                    "email": "mailto:glenn_fisher@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857159.jpg"
            },
                {
                    "subject": "H-Kh Dean of Students",
                    "number": "1(408)366-7609",
                    "email/_text": "nico_flores@fuhsd.org",
                    "firstName": "Nico",
                    "lastName": "Flores",
                    "name": "Nico Flores",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857160.jpg",
                    "email": "mailto:nico_flores@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857160.jpg"
            },
                {
                    "subject": "World Language",
                    "number": "1(408)366-7600 (x8852)",
                    "email/_text": "joyce_fortune@fuhsd.org",
                    "firstName": "Joyce",
                    "lastName": "Fortune",
                    "name": "Joyce Fortune",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857161.jpg",
                    "email": "mailto:joyce_fortune@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857161.jpg"
            },
                {
                    "subject": "AP Secretary",
                    "number": "1(408)366-7605",
                    "email/_text": "monique_franzino@fuhsd.org",
                    "firstName": "Monique",
                    "lastName": "Franzino",
                    "name": "Monique Franzino",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857210.jpg",
                    "email": "mailto:monique_franzino@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857210.jpg"
            },
                {
                    "subject": "Math & Science",
                    "number": "1(408)366-7600 (x8835)",
                    "email/_text": "debbie_frazier@fuhsd.org",
                    "firstName": "Debbie",
                    "lastName": "Frazier",
                    "name": "Debbie Frazier",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857162.jpg",
                    "email": "mailto:debbie_frazier@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857162.jpg"
            },
                {
                    "subject": "Science",
                    "number": "1(408)366-7600 (x8859)",
                    "email/_text": "andrew_goldenkranz@fuhsd.org",
                    "firstName": "Andrew",
                    "lastName": "Goldenkranz",
                    "name": "Andrew Goldenkranz",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1356612755420.jpg",
                    "email": "mailto:andrew_goldenkranz@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1356612755420.jpg"
            },
                {
                    "subject": "Custodial Staff",
                    "number": "1(408)366-7633",
                    "firstName": "Isidro",
                    "lastName": "Goncalves",
                    "name": "Isidro Goncalves",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1315636386179.jpg",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1315636386179.jpg"
            },
                {
                    "subject": "Executive Assistant to Principal",
                    "number": "1(408)366-7602",
                    "email/_text": "diana_goularte@fuhsd.org",
                    "firstName": "Diana",
                    "lastName": "Goularte",
                    "name": "Diana Goularte",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857163.jpg",
                    "email": "mailto:diana_goularte@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857163.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8922)",
                    "email/_text": "david_greenstein@fuhsd.org",
                    "firstName": "David",
                    "lastName": "Greenstein",
                    "name": "David Greenstein",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857164.jpg",
                    "email": "mailto:david_greenstein@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857164.jpg"
            },
                {
                    "subject": "World Language",
                    "number": "1(408)366-7600 (x8905)",
                    "email/_text": "molly_guadiamos@fuhsd.org",
                    "firstName": "Molly",
                    "lastName": "Guadiamos",
                    "name": "Molly Guadiamos",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857166.jpg",
                    "email": "mailto:molly_guadiamos@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857166.jpg"
            },
                {
                    "subject": "Science",
                    "number": "1(408)366-7600 (x8844)",
                    "email/_text": "kavita_gupta@fuhsd.org",
                    "firstName": "Kavita",
                    "lastName": "Gupta",
                    "name": "Kavita Gupta",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857167.jpg",
                    "email": "mailto:kavita_gupta@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857167.jpg"
            },
                {
                    "subject": "Science",
                    "number": "1(408)366-7600 (x8879)",
                    "email/_text": "pooya_hajjarian@fuhsd.org",
                    "firstName": "Pooya",
                    "lastName": "Hajjarian",
                    "name": "Pooya Hajjarian",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857168.jpg",
                    "email": "mailto:pooya_hajjarian@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857168.jpg"
            },
                {
                    "subject": "Guidance Support",
                    "number": "1(408)366-7623",
                    "email/_text": "elaine_hamilton@fuhsd.org",
                    "firstName": "Elaine",
                    "lastName": "Hamilton",
                    "name": "Elaine Hamilton",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857169.jpg",
                    "email": "mailto:elaine_hamilton@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857169.jpg"
            },
                {
                    "subject": "Food Services Manager",
                    "number": "1(408)366-7660",
                    "email/_text": "debbie_herrera@fuhsd.org",
                    "firstName": "Debbie",
                    "lastName": "Herrera",
                    "name": "Debbie Herrera",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857170.jpg",
                    "email": "mailto:debbie_herrera@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857170.jpg"
            },
                {
                    "subject": "H-L Guidance Counselor",
                    "number": "1(408)366-7616",
                    "email/_text": "sarah_hershey@fuhsd.org",
                    "firstName": "Sarah",
                    "lastName": "Hershey",
                    "name": "Sarah Hershey",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857171.jpg",
                    "email": "mailto:sarah_hershey@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857171.jpg"
            },
                {
                    "subject": "M-Sh Assistant Principal",
                    "number": "1(408)366-7607",
                    "email/_text": "michael_hicks@fuhsd.org",
                    "firstName": "Michael",
                    "lastName": "Hicks",
                    "name": "Michael Hicks",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857172.jpg",
                    "email": "mailto:michael_hicks@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857172.jpg"
            },
                {
                    "subject": "Custodial Staff",
                    "number": "1(408)366-7633",
                    "email/_text": "noe_higuera@fuhsd.org",
                    "firstName": "Noe",
                    "lastName": "Higuera",
                    "name": "Noe Higuera",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1315636386180.jpg",
                    "email": "mailto:noe_higuera@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1315636386180.jpg"
            },
                {
                    "subject": "Social Science",
                    "number": "1(408)366-7600 (x8895)",
                    "email/_text": "robbie_hoffman@fuhsd.org",
                    "firstName": "Robbie",
                    "lastName": "Hoffman",
                    "name": "Robbie Hoffman",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857175.jpg",
                    "email": "mailto:robbie_hoffman@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857175.jpg"
            },
                {
                    "subject": "Network Support",
                    "number": "1(408)366-7663",
                    "email/_text": "bryn_horwege@fuhsd.org",
                    "firstName": "Bryn",
                    "lastName": "Horwege",
                    "name": "Bryn Horwege",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1239343742456.jpg",
                    "email": "mailto:bryn_horwege@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1239343742456.jpg"
            },
                {
                    "subject": "Front Desk",
                    "number": "1(408)366-7649",
                    "email/_text": "dianne_howard@fuhsd.org",
                    "firstName": "Dianne",
                    "lastName": "Howard",
                    "name": "Dianne Howard",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857173.jpg",
                    "email": "mailto:dianne_howard@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857173.jpg"
            },
                {
                    "subject": "World Language",
                    "number": "1(408)366-7600 (x8843)",
                    "email/_text": "keiko_howard@fuhsd.org",
                    "firstName": "Keiko",
                    "lastName": "Howard",
                    "name": "Keiko Howard",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857174.jpg",
                    "email": "mailto:keiko_howard@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857174.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8849)",
                    "email/_text": "martin_jennings@fuhsd.org",
                    "firstName": "Martin",
                    "lastName": "Jennings",
                    "name": "Martin Jennings",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857177.jpg",
                    "email": "mailto:martin_jennings@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857177.jpg"
            },
                {
                    "subject": "Art",
                    "number": "1(408)366-7600 (x8834)",
                    "email/_text": "jodi_johnson@fuhsd.org",
                    "firstName": "Jodi",
                    "lastName": "Johnson",
                    "name": "Jodi Johnson",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857179.jpg",
                    "email": "mailto:jodi_johnson@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857179.jpg"
            },
                {
                    "subject": "Science",
                    "number": "1(408)366-7600 (x8853)",
                    "email/_text": "kyle_jones@fuhsd.org",
                    "firstName": "Kyle",
                    "lastName": "Jones",
                    "name": "Kyle Jones",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857178.jpg",
                    "email": "mailto:kyle_jones@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857178.jpg"
            },
                {
                    "subject": "World Language & ELD",
                    "number": "1(408)366-7600 (x8865)",
                    "email/_text": "vivian_ju@fuhsd.org",
                    "firstName": "Vivian",
                    "lastName": "Ju",
                    "name": "Vivian Ju",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857176.jpg",
                    "email": "mailto:vivian_ju@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857176.jpg"
            },
                {
                    "subject": "Food Services",
                    "number": "1(408)366-7660",
                    "email/_text": "miaosir_kao@fuhsd.org",
                    "firstName": "Mary",
                    "lastName": "Kao",
                    "name": "Mary Kao",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857180.jpg",
                    "email": "mailto:miaosir_kao@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857180.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8848)",
                    "email/_text": "jessica_kaufman@fuhsd.org",
                    "firstName": "Jessica",
                    "lastName": "Kaufman",
                    "name": "Jessica Kaufman",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857181.jpg",
                    "email": "mailto:jessica_kaufman@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857181.jpg"
            },
                {
                    "subject": "Food Services",
                    "number": "1(408)366-7660",
                    "email/_text": "genet_kelete@fuhsd.org",
                    "firstName": "Genet",
                    "lastName": "Kelete",
                    "name": "Genet Kelete",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857182.jpg",
                    "email": "mailto:genet_kelete@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857182.jpg"
            },
                {
                    "subject": "Facilities Manager",
                    "number": "1(408)366-7633",
                    "email/_text": "chris_kenney@fuhsd.org",
                    "firstName": "Chris",
                    "lastName": "Kenney",
                    "name": "Chris Kenney",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1356612755437.jpg",
                    "email": "mailto:chris_kenney@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1356612755437.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8878)",
                    "email/_text": "joe_kim@fuhsd.org",
                    "firstName": "Joe",
                    "lastName": "Kim",
                    "name": "Joe Kim",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857183.jpg",
                    "email": "mailto:joe_kim@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857183.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8873)",
                    "email/_text": "kathleen_koch@fuhsd.org",
                    "firstName": "Kathy",
                    "lastName": "Koch",
                    "name": "Kathy Koch",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857184.jpg",
                    "email": "mailto:kathleen_koch@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857184.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8896)",
                    "email/_text": "jackie_kolbeck@fuhsd.org",
                    "firstName": "Jackie",
                    "lastName": "Kolbeck",
                    "name": "Jackie Kolbeck",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857185.jpg",
                    "email": "mailto:jackie_kolbeck@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857185.jpg"
            },
                {
                    "subject": "Registrar",
                    "number": "1(408)366-7610",
                    "email/_text": "pat_kruse@fuhsd.org",
                    "firstName": "Pat",
                    "lastName": "Kruse",
                    "name": "Pat Kruse",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857186.jpg",
                    "email": "mailto:pat_kruse@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857186.jpg"
            },
                {
                    "subject": "M-Sh Guidance Counselor",
                    "number": "1(408)366-7626",
                    "email/_text": "sylvia_lam@fuhsd.org",
                    "firstName": "Sylvia",
                    "lastName": "Lam",
                    "name": "Sylvia Lam",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857187.jpg",
                    "email": "mailto:sylvia_lam@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857187.jpg"
            },
                {
                    "subject": "Food Services",
                    "number": "1(408)366-7660",
                    "firstName": "Hung Wai",
                    "lastName": "Lee",
                    "name": "Hung Wai Lee",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857188.jpg",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857188.jpg"
            },
                {
                    "subject": "Science",
                    "number": "1(408)366-7600 (x8870)",
                    "email/_text": "lora_lerner@fuhsd.org",
                    "firstName": "Lora",
                    "lastName": "Lerner",
                    "name": "Lora Lerner",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857189.jpg",
                    "email": "mailto:lora_lerner@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857189.jpg"
            },
                {
                    "subject": "Grounds- keeper",
                    "number": "1(408)366-7633",
                    "email/_text": "paulosergio_Luis@fuhsd.org",
                    "firstName": "Sergio",
                    "lastName": "Luis",
                    "name": "Sergio Luis",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857190.jpg",
                    "email": "mailto:paulosergio_Luis@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857190.jpg"
            },
                {
                    "subject": "Site Mainte- nance",
                    "number": "1(408)366-7633",
                    "email/_text": "chi_ma@fuhsd.org",
                    "firstName": "Chi",
                    "lastName": "Ma",
                    "name": "Chi Ma",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1356612755449.jpg",
                    "email": "mailto:chi_ma@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1356612755449.jpg"
            },
                {
                    "subject": "AP Secretary",
                    "number": "1(408)366-7606",
                    "email/_text": "deb_mandac@fuhsd.org",
                    "firstName": "Deb",
                    "lastName": "Mandac",
                    "name": "Deb Mandac",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857192.jpg",
                    "email": "mailto:deb_mandac@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857192.jpg"
            },
                {
                    "subject": "Physical Education",
                    "number": "1(408)366-7600 (x8807)",
                    "email/_text": "dasha_maximovich@fuhsd.org",
                    "firstName": "Dasha",
                    "lastName": "Maximovich",
                    "name": "Dasha Maximovich",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1356612755452.jpg",
                    "email": "mailto:dasha_maximovich@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1356612755452.jpg"
            },
                {
                    "subject": "Social Science",
                    "number": "1(408)366-7600 (x8824)",
                    "email/_text": "hilary_maxwell@fuhsd.org",
                    "firstName": "Hilary",
                    "lastName": "Maxwell",
                    "name": "Hilary Maxwell",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857193.jpg",
                    "email": "mailto:hilary_maxwell@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857193.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8860)",
                    "email/_text": "kathleen_mccarty@fuhsd.org",
                    "firstName": "Kathleen",
                    "lastName": "McCarty",
                    "name": "Kathleen McCarty",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857195.jpg",
                    "email": "mailto:kathleen_mccarty@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857195.jpg"
            },
                {
                    "subject": "Science",
                    "number": "1(408)366-7600 (x8862)",
                    "email/_text": "elizabeth_mccracken@fuhsd.org",
                    "firstName": "Elizabeth",
                    "lastName": "McCracken",
                    "name": "Elizabeth McCracken",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857194.jpg",
                    "email": "mailto:elizabeth_mccracken@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857194.jpg"
            },
                {
                    "subject": "Science",
                    "number": "1(408)366-7600 (x8901)",
                    "email/_text": "michael_mccrystal@fuhsd.org",
                    "firstName": "Mike",
                    "lastName": "McCrystal",
                    "name": "Mike McCrystal",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857196.jpg",
                    "email": "mailto:michael_mccrystal@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857196.jpg"
            },
                {
                    "subject": "PAR Educator",
                    "number": "1(408)366-7600 (x8863)",
                    "email/_text": "katheryn_mcelwee@fuhsd.org",
                    "firstName": "Katheryn",
                    "lastName": "McElwee",
                    "name": "Katheryn McElwee",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1251955580388.jpg",
                    "email": "mailto:katheryn_mcelwee@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1251955580388.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8868)",
                    "email/_text": "mikki_mcmillion@fuhsd.org",
                    "firstName": "Mikki",
                    "lastName": "McMillion",
                    "name": "Mikki McMillion",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857197.jpg",
                    "email": "mailto:mikki_mcmillion@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857197.jpg"
            },
                {
                    "subject": "Student Conduct Liaison",
                    "number": "1(408)366-7661",
                    "email/_text": "thomas_michaelis@fuhsd.org",
                    "firstName": "Thomas",
                    "lastName": "Michaelis",
                    "name": "Thomas Michaelis",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857198.jpg",
                    "email": "mailto:thomas_michaelis@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857198.jpg"
            },
                {
                    "subject": "Media Library Specialist",
                    "number": "1(408)366-7619",
                    "email/_text": "jody_mitchell@fuhsd.org",
                    "firstName": "Jody",
                    "lastName": "Mitchell",
                    "name": "Jody Mitchell",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857199.jpg",
                    "email": "mailto:jody_mitchell@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857199.jpg"
            },
                {
                    "subject": "Social Science",
                    "number": "1(408)366-7600 (x8919)",
                    "email/_text": "viviana_montoya-hernandez@fuhsd.org",
                    "firstName": "Viviana",
                    "lastName": "Montoya-Hernandez",
                    "name": "Viviana Montoya-Hernandez",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857201.jpg",
                    "email": "mailto:viviana_montoya-hernandez@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857201.jpg"
            },
                {
                    "subject": "Science",
                    "number": "1(408)366-7600 (x8802)",
                    "email/_text": "supriya_moore@fuhsd.org",
                    "firstName": "Supriya",
                    "lastName": "Moore",
                    "name": "Supriya Moore",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857200.jpg",
                    "email": "mailto:supriya_moore@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857200.jpg"
            },
                {
                    "subject": "World Language",
                    "number": "1(408)366-7600 (x5867)",
                    "email/_text": "viky_morales@fuhsd.org",
                    "firstName": "Viky",
                    "lastName": "Morales",
                    "name": "Viky Morales",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857202.jpg",
                    "email": "mailto:viky_morales@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857202.jpg"
            },
                {
                    "subject": "Business",
                    "number": "1(408)366-7600 (x8883)",
                    "email/_text": "jeff_mueller@fuhsd.org",
                    "firstName": "Jeff",
                    "lastName": "Mueller",
                    "name": "Jeff Mueller",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857203.jpg",
                    "email": "mailto:jeff_mueller@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857203.jpg"
            },
                {
                    "subject": "AP Secretary",
                    "number": "1(408)366-7611",
                    "email/_text": "lisa_mueller@fuhsd.org",
                    "firstName": "Lisa",
                    "lastName": "Mueller",
                    "name": "Lisa Mueller",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857204.jpg",
                    "email": "mailto:lisa_mueller@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857204.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8869)",
                    "email/_text": "skip_mueller@fuhsd.org",
                    "firstName": "Skip",
                    "lastName": "Mueller",
                    "name": "Skip Mueller",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857205.jpg",
                    "email": "mailto:skip_mueller@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857205.jpg"
            },
                {
                    "subject": "EL Prog Assistant",
                    "number": "1(408)366-7639",
                    "email/_text": "deby_muskivitch@fuhsd.org",
                    "firstName": "Deby",
                    "lastName": "Muskivitch",
                    "name": "Deby Muskivitch",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857206.jpg",
                    "email": "mailto:deby_muskivitch@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857206.jpg"
            },
                {
                    "subject": "Paraeducator",
                    "number": "1(408)366-7622 or",
                    "number": "1(408)366-7625",
                    "email/_text": "cathy_nakamura@fuhsd.org",
                    "firstName": "Cathy",
                    "lastName": "Nakamura",
                    "name": "Cathy Nakamura",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857207.jpg",
                    "email": "mailto:cathy_nakamura@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857207.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8885)",
                    "email/_text": "vennessa_nava@fuhsd.org",
                    "firstName": "Vennessa",
                    "lastName": "Nava",
                    "name": "Vennessa Nava",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857208.jpg",
                    "email": "mailto:vennessa_nava@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857208.jpg"
            },
                {
                    "subject": "Science",
                    "number": "1(408)366-7600 (x8871)",
                    "email/_text": "mia_onodera@fuhsd.org",
                    "firstName": "Mia",
                    "lastName": "Onodera",
                    "name": "Mia Onodera",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857209.jpg",
                    "email": "mailto:mia_onodera@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857209.jpg"
            },
                {
                    "subject": "Custodial Staff",
                    "number": "1(408)366-7633",
                    "email/_text": "thomas_orsua@fuhsd.org",
                    "firstName": "Tom",
                    "lastName": "Orsua",
                    "name": "Tom Orsua",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857211.jpg",
                    "email": "mailto:thomas_orsua@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857211.jpg"
            },
                {
                    "subject": "Social Science",
                    "number": "1(408)366-7600 (x8924)",
                    "email/_text": "eric_otto@fuhsd.org",
                    "firstName": "Eric",
                    "lastName": "Otto",
                    "name": "Eric Otto",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857212.jpg",
                    "email": "mailto:eric_otto@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857212.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8918)",
                    "email/_text": "vanessa_otto@fuhsd.org",
                    "firstName": "Vanessa",
                    "lastName": "Otto",
                    "name": "Vanessa Otto",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857213.jpg",
                    "email": "mailto:vanessa_otto@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857213.jpg"
            },
                {
                    "subject": "Physical Education",
                    "number": "1(408)366-7600 (x8841)",
                    "email/_text": "lori_palfalvi@fuhsd.org",
                    "firstName": "Lori",
                    "lastName": "Palfalvi",
                    "name": "Lori Palfalvi",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1315636386170.jpg",
                    "email": "mailto:lori_palfalvi@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1315636386170.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8805)",
                    "email/_text": "jeff_payne@fuhsd.org",
                    "firstName": "Jeff",
                    "lastName": "Payne",
                    "name": "Jeff Payne",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857214.jpg",
                    "email": "mailto:jeff_payne@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857214.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8829)",
                    "email/_text": "jennifer_pazirandeh@fuhsd.org",
                    "firstName": "Jennifer",
                    "lastName": "Pazirandeh",
                    "name": "Jennifer Pazirandeh",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857215.jpg",
                    "email": "mailto:jennifer_pazirandeh@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857215.jpg"
            },
                {
                    "subject": "Social Science",
                    "number": "1(408)366-7600 (x8814)",
                    "email/_text": "pete_pelkey@fuhsd.org",
                    "firstName": "Pete",
                    "lastName": "Pelkey",
                    "name": "Pete Pelkey",
                    "picture/_source": "/uimg/image/1235051428928/1126505882599/1238938761572.jpg",
                    "email": "mailto:pete_pelkey@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1235051428928/1126505882599/1238938761572.jpg"
            },
                {
                    "subject": "Social Science",
                    "number": "1(408)366-7600 (x8875)",
                    "email/_text": "margaret_platt@fuhsd.org",
                    "firstName": "Margaret",
                    "lastName": "Platt",
                    "name": "Margaret Platt",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857216.jpg",
                    "email": "mailto:margaret_platt@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857216.jpg"
            },
                {
                    "subject": "Food Services",
                    "number": "1(408)366-7660",
                    "email/_text": "barbara_price@fuhsd.org",
                    "firstName": "Barbara",
                    "lastName": "Price",
                    "name": "Barbara Price",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1315636386112.jpg",
                    "email": "mailto:barbara_price@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1315636386112.jpg"
            },
                {
                    "subject": "Student Advocate MFT",
                    "number": "1(408)366-7638",
                    "email/_text": "richard_prinz@fuhsd.org",
                    "firstName": "Richard",
                    "lastName": "Prinz",
                    "name": "Richard Prinz",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857217.jpg",
                    "email": "mailto:richard_prinz@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857217.jpg"
            },
                {
                    "subject": "Paraeducator",
                    "number": "1(408)366-7600",
                    "email/_text": "ricardo_ramirez@fuhsd.org",
                    "firstName": "Ricardo",
                    "lastName": "Ramirez",
                    "name": "Ricardo Ramirez",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1239343742456.jpg",
                    "email": "mailto:ricardo_ramirez@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1239343742456.jpg"
            },
                {
                    "subject": "Social Science",
                    "number": "1(408)366-7600 (x8856)",
                    "email/_text": "ben_recktenwald@fuhsd.org",
                    "firstName": "Ben",
                    "lastName": "Recktenwald",
                    "name": "Ben Recktenwald",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857219.jpg",
                    "email": "mailto:ben_recktenwald@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857219.jpg"
            },
                {
                    "subject": "Print Center",
                    "number": "1(408)366-7651",
                    "email/_text": "maria_ricardo@fuhsd.org",
                    "firstName": "Maria",
                    "lastName": "Ricardo",
                    "name": "Maria Ricardo",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1385191591568.jpg",
                    "email": "mailto:maria_ricardo@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1385191591568.jpg"
            },
                {
                    "subject": "Ki-L Dean of Students",
                    "number": "1(408)366-7608",
                    "email/_text": "leslie_robledo@fuhsd.org",
                    "firstName": "Leslie",
                    "lastName": "Robledo",
                    "name": "Leslie Robledo",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857221.jpg",
                    "email": "mailto:leslie_robledo@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857221.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8892)",
                    "email/_text": "lynn_rose@fuhsd.org",
                    "firstName": "Lynn",
                    "lastName": "Rose",
                    "name": "Lynn Rose",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857222.jpg",
                    "email": "mailto:lynn_rose@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857222.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8836)",
                    "email/_text": "frank_ruskus@fuhsd.org",
                    "firstName": "Frank",
                    "lastName": "Ruskus",
                    "name": "Frank Ruskus",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857223.jpg",
                    "email": "mailto:frank_ruskus@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857223.jpg"
            },
                {
                    "subject": "Paraeducator",
                    "number": "1(408)366-7600 (x8867)",
                    "email/_text": "syvees_sazon@fuhsd.org",
                    "firstName": "Syvees",
                    "lastName": "Sazon",
                    "name": "Syvees Sazon",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857224.jpg",
                    "email": "mailto:syvees_sazon@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857224.jpg"
            },
                {
                    "subject": "Business",
                    "number": "1(408)366-7600 (x8887)",
                    "email/_text": "carl_schmidt@fuhsd.org",
                    "firstName": "Carl",
                    "lastName": "Schmidt",
                    "name": "Carl Schmidt",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857225.jpg",
                    "email": "mailto:carl_schmidt@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857225.jpg"
            },
                {
                    "subject": "Si-Z Guidance Counselor",
                    "number": "1(408)366-7614",
                    "email/_text": "shari_schussel@fuhsd.org",
                    "firstName": "Shari",
                    "lastName": "Schussel",
                    "name": "Shari Schussel",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857226.jpg",
                    "email": "mailto:shari_schussel@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857226.jpg"
            },
                {
                    "subject": "Behavioral Support Specialist",
                    "number": "1(408)366-7600",
                    "email/_text": "deedee_scott@fuhsd.org",
                    "firstName": "DeeDee",
                    "lastName": "Scott",
                    "name": "DeeDee Scott",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1239343742453.jpg",
                    "email": "mailto:deedee_scott@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1239343742453.jpg"
            },
                {
                    "subject": "Principal",
                    "number": "1(408)366-7601",
                    "email/_text": "april_scott@fuhsd.org",
                    "firstName": "April",
                    "lastName": "Scott",
                    "name": "April Scott",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857227.jpg",
                    "email": "mailto:april_scott@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857227.jpg"
            },
                {
                    "subject": "Special Education",
                    "number": "1(408)366-7644",
                    "email/_text": "ruth_seyer@fuhsd.org",
                    "firstName": "Ruth",
                    "lastName": "Seyer",
                    "name": "Ruth Seyer",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857228.jpg",
                    "email": "mailto:ruth_seyer@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857228.jpg"
            },
                {
                    "subject": "Art",
                    "number": "1(408)366-7600 (x8917)",
                    "email/_text": "jay_shelton@fuhsd.org",
                    "firstName": "Jay",
                    "lastName": "Shelton",
                    "name": "Jay Shelton",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857229.jpg",
                    "email": "mailto:jay_shelton@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857229.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8888)",
                    "email/_text": "shozo_shimazaki@fuhsd.org",
                    "firstName": "Shozo",
                    "lastName": "Shimazaki",
                    "name": "Shozo Shimazaki",
                    "picture/_source": "/uimg/image/1235051428928/1126505882599/1238938755707.jpg",
                    "email": "mailto:shozo_shimazaki@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1235051428928/1126505882599/1238938755707.jpg"
            },
                {
                    "subject": "Industrial Tech",
                    "number": "1(408)366-7600 (x8911)",
                    "email/_text": "ted_shinta@fuhsd.org",
                    "firstName": "Ted",
                    "lastName": "Shinta",
                    "name": "Ted Shinta",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857231.jpg",
                    "email": "mailto:ted_shinta@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857231.jpg"
            },
                {
                    "subject": "Paraeducator",
                    "number": "1(408)366-7600 (x8881)",
                    "email/_text": "charley_situ@fuhsd.org",
                    "firstName": "Charley",
                    "lastName": "Situ",
                    "name": "Charley Situ",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857232.jpg",
                    "email": "mailto:charley_situ@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857232.jpg"
            },
                {
                    "subject": "Science",
                    "number": "1(408)366-7600 (x8854)",
                    "email/_text": "jenna_smith@fuhsd.org",
                    "firstName": "Jenna",
                    "lastName": "Smith",
                    "name": "Jenna Smith",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857233.jpg",
                    "email": "mailto:jenna_smith@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857233.jpg"
            },
                {
                    "subject": "Custodial Staff",
                    "number": "1(408)366-7633",
                    "email/_text": "tony_sousa@fuhsd.org",
                    "firstName": "Tony",
                    "lastName": "Sousa",
                    "name": "Tony Sousa",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1356612755499.jpg",
                    "email": "mailto:tony_sousa@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1356612755499.jpg"
            },
                {
                    "subject": "Math",
                    "number": "1(408)366-7600 (x8890)",
                    "email/_text": "jon_stark@fuhsd.org",
                    "firstName": "Jon",
                    "lastName": "Stark",
                    "name": "Jon Stark",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857234.jpg",
                    "email": "mailto:jon_stark@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857234.jpg"
            },
                {
                    "subject": "Special Education",
                    "number": "1(408)366-7600 (x8816)",
                    "email/_text": "lani_stevens@fuhsd.org",
                    "firstName": "Lani",
                    "lastName": "Stevens",
                    "name": "Lani Stevens",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857235.jpg",
                    "email": "mailto:lani_stevens@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857235.jpg"
            },
                {
                    "subject": "Paraeducator",
                    "number": "1(408)366-7600 (x8847)",
                    "email/_text": "clay_stiver@fuhsd.org",
                    "firstName": "Clay",
                    "lastName": "Stiver",
                    "name": "Clay Stiver",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1356612755489.jpg",
                    "email": "mailto:clay_stiver@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1356612755489.jpg"
            },
                {
                    "subject": "Social Science",
                    "number": "1(408)366-7600 (x8915)",
                    "email/_text": "andrew_sturgill@fuhsd.org",
                    "firstName": "Andrew",
                    "lastName": "Sturgill",
                    "name": "Andrew Sturgill",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857236.jpg",
                    "email": "mailto:andrew_sturgill@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857236.jpg"
            },
                {
                    "subject": "Physical Education",
                    "number": "1(408)366-7628",
                    "email/_text": "brian_sullivan@fuhsd.org",
                    "firstName": "Brian",
                    "lastName": "Sullivan",
                    "name": "Brian Sullivan",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857237.jpg",
                    "email": "mailto:brian_sullivan@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857237.jpg"
            },
                {
                    "subject": "Physical Education",
                    "number": "1(408)366-7600 (x8855)",
                    "email/_text": "julie_sullivan@fuhsd.org",
                    "firstName": "Julie",
                    "lastName": "Sullivan",
                    "name": "Julie Sullivan",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857238.jpg",
                    "email": "mailto:julie_sullivan@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857238.jpg"
            },
                {
                    "subject": "Career Center",
                    "number": "1(408)366-7618",
                    "email/_text": "miriam_taba@fuhsd.org",
                    "firstName": "Miriam",
                    "lastName": "Taba",
                    "name": "Miriam Taba",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857239.jpg",
                    "email": "mailto:miriam_taba@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857239.jpg"
            },
                {
                    "subject": "Physical Education",
                    "number": "1(408)366-7600 (x8872)",
                    "email/_text": "matthew_tait@fuhsd.org",
                    "firstName": "Matt",
                    "lastName": "Tait",
                    "name": "Matt Tait",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857240.jpg",
                    "email": "mailto:matthew_tait@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857240.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7642",
                    "email/_text": "jireh_tanabe@fuhsd.org",
                    "firstName": "Jireh",
                    "lastName": "Tanabe",
                    "name": "Jireh Tanabe",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1356612755501.jpg",
                    "email": "mailto:jireh_tanabe@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1356612755501.jpg"
            },
                {
                    "subject": "Special Education",
                    "number": "1(408)366-7600 (x7645)",
                    "email/_text": "seema_tandon@fuhsd.org",
                    "firstName": "Seema",
                    "lastName": "Tandon",
                    "name": "Seema Tandon",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857241.jpg",
                    "email": "mailto:seema_tandon@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857241.jpg"
            },
                {
                    "subject": "Network Support",
                    "number": "1(408)366-7663",
                    "email/_text": "karl_tang@fuhsd.org",
                    "firstName": "Karl",
                    "lastName": "Tang",
                    "name": "Karl Tang",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1356612755503.jpg",
                    "email": "mailto:karl_tang@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1356612755503.jpg"
            },
                {
                    "subject": "Data Technician",
                    "number": "1(408)366-7613",
                    "email/_text": "meg_teffera@fuhsd.org",
                    "firstName": "Meg",
                    "lastName": "Teffera",
                    "name": "Meg Teffera",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1239343742453.jpg",
                    "email": "mailto:meg_teffera@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1239343742453.jpg"
            },
                {
                    "subject": "Physical Education",
                    "number": "1(408)366-7600 (x8811)",
                    "email/_text": "jeffrey_thomas@fuhsd.org",
                    "firstName": "Jeffrey",
                    "lastName": "Thomas",
                    "name": "Jeffrey Thomas",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1253164103871.jpg",
                    "email": "mailto:jeffrey_thomas@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1253164103871.jpg"
            },
                {
                    "subject": "Special Education",
                    "number": "1(408)366-7600 (x8889)",
                    "email/_text": "kathleen_tracy@fuhsd.org",
                    "firstName": "Kathleen",
                    "lastName": "Tracy",
                    "name": "Kathleen Tracy",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857242.jpg",
                    "email": "mailto:kathleen_tracy@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857242.jpg"
            },
                {
                    "subject": "Science",
                    "number": "1(408)366-7600 (x8891)",
                    "email/_text": "jeffrey_trevarthen@fuhsd.org",
                    "firstName": "Jeffrey",
                    "lastName": "Trevarthen",
                    "name": "Jeffrey Trevarthen",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857243.jpg",
                    "email": "mailto:jeffrey_trevarthen@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857243.jpg"
            },
                {
                    "subject": "Library Media Teacher",
                    "number": "1(408)366-7656",
                    "email/_text": "laura_utile@fuhsd.org",
                    "firstName": "Laura",
                    "lastName": "Utile",
                    "name": "Laura Utile",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857244.jpg",
                    "email": "mailto:laura_utile@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857244.jpg"
            },
                {
                    "subject": "English",
                    "number": "1(408)366-7600 (x8857)",
                    "email/_text": "christy_utter@fuhsd.org",
                    "firstName": "Christy",
                    "lastName": "Utter",
                    "name": "Christy Utter",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857245.jpg",
                    "email": "mailto:christy_utter@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857245.jpg"
            },
                {
                    "subject": "Special Education",
                    "number": "1(408)366-7600 (x8898)",
                    "email/_text": "scott_victorine@fuhsd.org",
                    "firstName": "Scott",
                    "lastName": "Victorine",
                    "name": "Scott Victorine",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857246.jpg",
                    "email": "mailto:scott_victorine@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857246.jpg"
            },
                {
                    "subject": "Special Education",
                    "number": "1(408)366-7600 (x8921)",
                    "email/_text": "don_vierra@fuhsd.org",
                    "firstName": "Don",
                    "lastName": "Vierra",
                    "name": "Don Vierra",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857247.jpg",
                    "email": "mailto:don_vierra@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857247.jpg"
            },
                {
                    "subject": "Paraeducator",
                    "number": "1(408)366-7600 (x8877)",
                    "email/_text": "tina_volzing@fuhsd.org",
                    "firstName": "Tina",
                    "lastName": "Volzing",
                    "name": "Tina Volzing",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857248.jpg",
                    "email": "mailto:tina_volzing@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857248.jpg"
            },
                {
                    "subject": "Paraeducator",
                    "number": "1(408)366-7600 (x8874)",
                    "email/_text": "nicole_walker@fuhsd.org",
                    "firstName": "Nicole",
                    "lastName": "Walker",
                    "name": "Nicole Walker",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1315636386129.jpg",
                    "email": "mailto:nicole_walker@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1315636386129.jpg"
            },
                {
                    "subject": "World Language",
                    "number": "1(408)366-7600 (x8903)",
                    "email/_text": "kathy_wang@fuhsd.org",
                    "firstName": "Kathy",
                    "lastName": "Wang",
                    "name": "Kathy Wang",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857249.jpg",
                    "email": "mailto:kathy_wang@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857249.jpg"
            },
                {
                    "subject": "A-G Counselor",
                    "number": "1(408)366-7615",
                    "email/_text": "kate_west@fuhsd.org",
                    "firstName": "Kate",
                    "lastName": "West",
                    "name": "Kate West",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857251.jpg",
                    "email": "mailto:kate_west@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857251.jpg"
            },
                {
                    "subject": "Si-Z Assistant Principal",
                    "number": "1(408)366-7647",
                    "email/_text": "mike_white@fuhsd.org",
                    "firstName": "Mike",
                    "lastName": "White",
                    "name": "Mike White",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1356612755512.jpg",
                    "email": "mailto:mike_white@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1356612755512.jpg"
            },
                {
                    "subject": "ASB Financial Tech",
                    "number": "1(408)366-7617",
                    "email/_text": "calvin_wong@fuhsd.org",
                    "firstName": "Calvin",
                    "lastName": "Wong",
                    "name": "Calvin Wong",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857252.jpg",
                    "email": "mailto:calvin_wong@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857252.jpg"
            },
                {
                    "subject": "Speech Therapist",
                    "number": "1(408)366-7650",
                    "email/_text": "elinor_yamauchi@fuhsd.org",
                    "firstName": "Elinor",
                    "lastName": "Yamauchi",
                    "name": "Elinor Yamauchi",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857253.jpg",
                    "email": "mailto:elinor_yamauchi@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857253.jpg"
            },
                {
                    "subject": "Paraeducator",
                    "number": "1(408)366-7600 (x8868)",
                    "email/_text": "timothy_young@fuhsd.org",
                    "firstName": "Tim",
                    "lastName": "Young",
                    "name": "Tim Young",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857254.jpg",
                    "email": "mailto:timothy_young@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857254.jpg"
            },
                {
                    "subject": "ELD Bilingual Instruct. Assistant",
                    "number": "1(408)366-7600",
                    "email/_text": "robert_yuen@fuhsd.org",
                    "firstName": "Robert",
                    "lastName": "Yuen",
                    "name": "Robert Yuen",
                    "picture/_source": "/uimg/image/1126271346116/1126505882599/1389424857257.jpg",
                    "email": "mailto:robert_yuen@fuhsd.org",
                    "picture": "http://www.mvhs.fuhsd.org/uimg/image/1126271346116/1126505882599/1389424857257.jpg"
            }
        ]
        };
        return {
            all: function () {
                return teachers;
            },
            remove: function (teacherObj) {
                teachers.results.splice(teachers.results.indexOf(teacherObj), 1);
            },
            get: function (teacherId) {
                return teachers.results[teacherId];
            }
        };
    });

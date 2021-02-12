import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Chapter.css'

// pictures 
import Logo1 from "../../assets/images/PPIA.jpg";
import Logo2 from "../../assets/images/PPIA.jpg";
import Logo3 from "../../assets/images/PPIA.jpg";

export const Data = {

    "PPIA-Pusat" : [
        {
            "name"          : "PPI-Australia",
            "presiden"      : "James Wieguna",
            "email"         : "publicrelations@ppi-austh
            "facebook"      : "@ppiaustralia (PPI-Austrlia)",
            "website"       : "http://www.ppi-australia.org/",
            "logo"          : "logo1"
        }
    ],

    "ACT" : {

        "PPIA ACT" : [
            {
                "name"          : "PPIA ACT",
                "president"     : "Stephany Mutiara Pradipta", 
                "email"         : "ppia.act@gmail.com",
                "instagram"     : "@ppia_act",
                "facebook"      : "@ppia.act.9 (PPIA Australian Capital Territory)",
                "website"       : "http://www.ppia-act.com/",
                "logo"          : "PPIA_ACT.png"
            }
        ],

            "PPIA ANU" : [
                {
                    "name"          : "Australian National University Indonesian Student Association",
                    "president"     : "Muhammad Iqbal Nur Wahid",
                    "email"         : "anu@ppi-australia.org",
                    "instagram"     : "@ppiaanu",
                    "facebook"      : "@ppiaanu (ANU Indonesian Student Association)",
                    "website"       : "http://www.anuissa.com/",
                    "logo"          : "PPIA_ANU.jpg"
                }
            ],

            "PPIA UCI" : [
                {
                    "name"          : "University of Canberra Indonesian Student Society (UCISS)",
                    "president"     : "Nabil Shidqi Parinata",
                    "email"         : "ppia.uciss@gmail.com",
                    "instagram"     : "@ppia_uc",
                    "facebook"      : "@PPIAUC (PPIA University of Canberra – UCISS)",
                    "logo"          : "PPIA_UNICANBERRA.jpg"
                }
            ]
    },
    
    "NSW" : {
        "ISA NSW" : [
            {
                "name"      : "ISA NSW",
                "email"     : "medkomppiansw@gmail.com",
                "facebook"  : "@ppiansw (ISA New South Wales)",
                "youtube"   : "PPIA New South Wales",
                "website"   : "https://www.isa-nsw.com",
                "logo"      : "PPIA_ISANSW.jpeg"
            }
        ],

            "PPIA USYD" : [
                {
                    "name"          : "PPIA USYD",
                    "email"         :"ppia.sydneyuni@gmail.com",
                    "instagram"     : "@ppiausyd",
                    "facebook"      : "@ppiausyd (PPIA University of Sydney)",
                    "logo"          : "PPIA_USYD.jpeg"
                }
            ],

            "PPIA UoW" : [
                {
                    "name"          : "PPIA University of Wollongong",
                    "email"         : "gong.ppia@gmail.com",
                    "facebook"      : "@ppiauow (PPIA University of Wollongong)",
                    "instagram"     : "@ppiauow",
                    "logo"          : "PPIA_UOW.jpeg"
                }
            ],

            "PPIA UNSW" : [
                {
                    "name"          : "PPIA UNSW", 
                    "email"         : "unsw.ppia@gmail.com",
                    "instagram"     : "@ppiaunsw",
                    "facebook"      : "@ppia.unsw (PPIA UNSW)",
                    "youtube"       : "PPIA UNSW",
                    "website"       : "http://www.ppia-unsw.org/", 
                    "logo"          : "PPIA_UNSW.jpeg"
                }
            ],

            "PPIA UTS" : [
                {
                    "name"          : "PPIA UTS",
                    "email"         : "ppia.uts@gmail.com", 
                    "email2"        : "president@ppia.activateuts.com.au",
                    "facebook"      : "@ppiauts (PPIA UTS)",
                    "instagram"     : "@ppia.uts",
                    "logo"          : "PPIA_UTS.jpeg"
                }
            ],

            "PPIA MQ" : [
                {
                    "name"          : "PPIA Macquarie Uni",
                    "email"         : "ppia.macq@gmail.com",
                    "facebook"      : "@ppiamq (PPIA Macquarie University)",
                    "instagram"     : "@ppiamq",
                    "website"       : "https://www.ppiamacquarie.com/ (expired)",
                    "logo"          : "PPIA_MACQUARIE.jpeg"
                }
            ],

            "PPIA UoN" : [
                {
                    "name"          : "PPIA University of Newcastle", 
                    "email"         : "president.ppianewcastle@gmail.com", 
                    "logo"          : "PPIA_NEWCASTLE.jpeg"
                }
            ],

            "PPIA WSU (inactive)" : [
                {
                    "name"          : "PPIA Western Sydney University",
                    "email"         : "wsu@ppi-australia.org"
                } 
            ]
    },

    "VIC" : {
        "PPIA Victoria" : [
            { 
                "name"          : "Indonesian Student Association in Victoria",
                "president"     : "Ibnurrais Nisfusyah Yani",
                "email"         : "president@ppia-vic.org",
                "instagram"     : "@ppiavic",
                "facebook"      : "@ppiavic (PPIA Victoria)",
                "website"       : "https://www.ppia-vic.org/", 
                "logo"          : "PPIA_Vic.png"
            }
        ],

            "PPIA UNIMELB" : [
                {
                    "name"          : "PPIA UNIMELB",
                    "president"     : "Hirzi Putra Laksana",
                    "email"         : "info@ppia-unimelb.org",
                    "instagram"     : "@ppia.unimelb",
                    "facebook"      : "@ppia.unimelb (PPIA Melbourne University)",
                    "website"       : "https://www.ppia-unimelb.org", 
                    "logo"          : "PPIA_UniMelb.png"

                }
            ],
            
            "PPIA Monash" : [
                {   
                    "name"          : "PPIA Monash University",
                    "president"     : "Adeline Tjendra",
                    "instagram"     : "@ppiamonash",
                    "facebook"      : "@ppiamonashuni (PPIA Monash University)",
                    "email"         : "president@ppiamonash.org",
                    "website"       : "https://www.ppiamonash.org/", 
                    "logo"          : "PPIA_MONASH.png"
                }
            ],

            "PPIA RMIT" : [
                {        
                    "name"          : "PPIA RMIT",
                    "president"     : "Nicholas Oliver",
                    "email"         : "president@ppia-rmit.com",
                    "instagram"     : "@ppiarmit",
                    "facebook"      : "@PPIARMIT (PPIA RMIT University)",
                    "website"       : "https://www.ppia-rmit.com",
                    "logo"          : "PPIA_RMIT.png"
                }
            ],

            "PPIA La Trobe" : [
                {
                    "name"          : "PPIA La Trobe University",
                    "president"     : "Adrian HK",
                    "email"         : "latrobe@ppia-australia.org",
                    "instagram"     : "@ppialatrobe",
                    "logo"          : "PPIA_LATROBE.jpg",
                }
            ],

            "PPIA Deakin University" : [
            {             
                    "name"          : "PPIA Deakin University",
                    "president"     : "Ricky Tantri",
                    "email"         : "president@ppia-deakin.org",
                    "instagram"     : "@ppiadeakin",
                    "facebook"      : "@ppiadeakinuni (PPIA Deakin)",
                    "logo"          : "PPIA_DEAKIN.jpg"
                }
            ],

            "PPIA Swinburne University" : [
                {
                    "name"          : "PPIA Swinburne",
                    "email"         : "ppia.swin@gmail.com",
                    "instagram"     : "@swinburneppia",
                    "facebook"      : "@swinburneppia (PPIA Swinburne)",
                    "website"       : "https://www.swinburneppia.com",
                    "logo"          : "PPIA_Swinburne.jpeg", 
                    "logo2"         : "PPIA_SWINBURNE2.png"
                }
            ],

            "PPIA Victoria University" : [
                {
                    "name"          : "PPIA Victoria University",
                    "president"     : "Michelle Moniaga",
                    "email"         : "vuisa.victoria@gmail.com",
                    "instagram"     : "@ppiaviu",
                    "logo"          : "PPIA_VICUNI.png",

                }
            ],

            "PPIA William Angliss TAFE" : [
                {
                    "name"          : "PPIA William Angliss",
                    "president"     : "Nathania Chandra",
                    "email"         : "president.ppiawillang@gmail.com",
                    "instagram"     : "@ppiawilliamangliss",
                    "facebook"      : "@ppiawilliamangliss (PPIA William Angliss)",
                    "logo"          : "PPIA_WILLIAM_ANGLISS.png"
                }
            ]
    },

    "QLD" : {
        "PPIA Queensland" : [
            {
                "name"          : "PPIA Queensland", 
                "president"     : "Beni Imanuel Runaweri", 
                "email"         : "ppiaqldmaster@gmail.com",
                "instagram"     : "@ppiaqueensland",
                "facebook"      : "@ppiaqldofficial (PPIA Queensland)",
                "website"       : "www.ppiaqueensland.com",
                "logo"          : "PPIA_QLD.png"
            }
        ],

            "PPIA UQ" : [
                {
                    "name"          : "PPIA UQ",
                    "email"         : "uq@ppi-australia.org"
                }
            ],

            "PPIA QUT" : [
                {
                    "name"          : "PPIA QUT",
                    "email"         : "qut@ppi-asutralia.org"
                }
            ],

            "PPIA JCU" : [
                {
                    "name"          : "Indonesian Student Association James Cook University",
                    "president"     : "Heri Setiyorini",
                    "email"         : "ppia.jcu.tc@gmail.com", 
                    "instagram"     : "@jcuisa_tsv",
                    "facebook"      : "PPIA JCU",
                    "logo"          : "PPIA_JCU.png"
                }
            ],

            "PPIA Griffith University" : [
                {
                    "name"          : "PPIA Griffith University",
                    "email"         : "griffith@ppi-australia.org"
                }
            ],

            "PPIA Bond University" : [
                {
                    "name"          : "Bond Indonesian Student Association",
                    "email"         : "bisa.student@gmail.com",
                    "instagram"     : "@bisa.student",
                    "facebook"      : "@BondIndonesianStudentAssociation (Bond Indonesian Student Association – BISA)",
                    "logo"          : "PPIA_BONDUNI.jpg"
                }
            ],

            "PPIA Youth University" : [
                {
                    "name"          : "PPIA Youth University",
                    "email"         : "youth@ppi-australia.org"
                }
            ]
    },

    "NT" : {
        "PPIA Northern Territory" : [
            {
                "name"          : "PPIANT",
                "president"     : "Vincent Nicodemus",
                "email"         : "ppia.nterritory@gmail.com",
                "facebook"      : "PPI Australia NT",
                "instagram"     : "@ppia_nt",
                "logo"          : "PPIA_NT.jpeg"
            }
        ],

            "PPIA Charles Darwin University" : [
                {
                    "name"          : "PPIA CDU",
                    "email"         : "cdu@ppi-australia.org"
                }
            ]
    },

    "WU" : {
        "PPIA Western Australia" : [
            {
                "name"          :"PPIA WU",
                "instagram"     : "@ppiawa",
                "facebook"      : "@ppiawa (PPIA Western Australia)"
            }
        ],

            "PPIA University of Western Australia" : [
                {                    
                    "name"          : "INDOSS (Indonesian Student Society)",
                    "president"     : "Ninditha Tamaulina Lingga",
                    "email"         : "indoss.uwa@gmail.com",
                    "instagram"     : "@indossppiauwa",
                    "facebook"      : "Indoss Uwa",
                    "logo"          : "PPIA_UWA.jpeg",
                }
            ],

            "PPIA Curtin University" : [
                {
                    "name"          : "PPIA CURTIN UNIVERSITY",
                    "president"     : "Amelia Mulyani",
                    "email"         : "medcomm.ppiacurtin@gmail.com", 
                    "instagram"     : "@ppiacurtin",
                    "facebook"      : "Ppia Curtin",
                    "logo"          : "PPIA_CURTINUNIVERSITY.jpeg"
                }
            ],

            "PPIA Murdoch University" : [
                {
                    "name"          : "PPIA MU",
                    "email"         : "murdochuni@ppi-australia.org"
                }
            ],
            
            "PPIA Edith Cowan University (inactive)" : [
                {
                    "name"          : "PPIA ECU",
                    "email"         : "ecu@ppi-australia.org"
                }
            ]
    },

    "SA" : {
        "PPIA South Australia" : [
            {
                "name"          : "PPIA SA",
                "facebook"      : "PPIA South Australia",
                "email"         : "sa@ppi-australia.org "
            }
        ],

            "PPIA Flinders University" : [
                {
                    "name"          : "PPIA Flinders University",
                    "president"     : "Desiani N Muliasari",
                    "instagram"     : "@ppiaflinders",
                    "facebook"      : "@PPIAflinders (PPIA Flinders)",
                    "youtube"       : "PPIA Flinders",
                    "email"         : "ppiaflinders82@gmail.com", 
                    "logo"          : "PPIA_FLINDERSUNI.png",
                }
            ],

            "PPIA University of Adelaide" : [
                {
                    "name"          : "PPIA The University of Adelaide",
                    "president"     : "Wilbert Kurniawan",
                    "email"         : "ppia.uniadelaide@gmail.com",
                    "instagram"     : "@ppiauofa",
                    "facebook"      : "@ppia.adelaide (PPIA The University of Adelaide)",
                    "website"       : "https://ppiadelaide.blogspot.com.au/", 
                    "logo"          : "PPIA_UNIADELAIDE.png"
                }
            ],

            "PPIA Universiy of South Australia" : [
                {
                    "name"          : "PPIA USA",
                    "email"         : "unisa@ppi-australia.org"
                }
            ]
    },

    "TA" : {
        "PPIA Tasmania" : [
            {
                "name"          : "Indonesian Student Association Tasmania",
                "president"     : "William Harjanto",
                "email"         : "tas@ppi-australia.org",
                "instagram"     : "@ppiatasmania",
                "facebook"      : "@ppia.tas (Indonesian Student Association Tasmania)",
                "youtube"       : "PPIA Tasmania",
                "logo"          : "PPIA_TAS.png"
            }
        ]
    }

}
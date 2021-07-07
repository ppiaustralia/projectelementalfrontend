// var Appdata = {
//     data: {
//         "image_arr": [
//             "../../assets/images/cat.jpg",
//             "../../assets/images/cat2.jpg",
//             "../../assets/images/cat3.jpg"
//         ],
//         "source_arr": [
//             {
//                 img: "../../assets/images/PPIA.jpg",
//                 title: "Australia Capitol Territory",
//                 path: "/chapter/act"
//             },
//             {
//                 img: "../../assets/images/PPIA.jpg",
//                 title: "New South Wales",
//                 path: "/chapter/nsw"
//             },
//             {
//                 img: "../../assets/images/PPIA.jpg",
//                 title: "Northern Territory ",
//                 path: "/chapter/nt"
//             },
//             {
//                 img: "../../assets/images/PPIA.jpg",
//                 title: "Queensland",
//                 path: "/chapter/qld"
//             },
//             {
//                 img: "../../assets/images/PPIA.jpg",
//                 title: "South Australia",
//                 path: "/chapter/sa"
//             },
//             {
//                 img: "../../assets/images/PPIA.jpg",
//                 title: "Tasmania",
//                 path: "/chapter/tas"
//             },
//             {
//                 img: "../../assets/images/PPIA.jpg",
//                 title: "Victoria",
//                 path: "/chapter/vic"
//             },
//             {
//                 img: "../../assets/images/PPIA.jpg",
//                 title: "Western Australia",
//                 path: "/chapter/wa"
//             }
//         ],
//         "update_arr": [
//             {
//                 img: "../../assets/images/cat.jpg",
//                 date: "24 Nov 2020",
//                 title: "Cat picture 1",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
//                 path: "/blog"
//             },
//             {
//                 img: "../../assets/images/cat2.jpg",
//                 date: "24 Nov 2020",
//                 title: "Cat picture 2",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
//                 path: "/blog"
//             },
//             {
//                 img: "../../assets/images/cat3.jpg",
//                 date: "24 Nov 2020",
//                 title: "Cat picture 3",
//                 desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
//                 path: "/blog"
//             }
//         ]
//     }
// }
// export default Appdata;

import dummy1 from "../../assets/images/cat.jpg";
import dummy2 from "../../assets/images/cat2.jpg";
import dummy3 from "../../assets/images/cat3.jpg";
import PPIA from "../../assets/images/PPIA.jpg";

export const image_arr = [
    <img class="d-block mx-auto responsive-carousel img-fluid" src={dummy1} alt='missing image'/>,
    <img class="d-block mx-auto responsive-carousel img-fluid" src={dummy2} alt='missing image'/>,
    <img class="d-block mx-auto responsive-carousel img-fluid" src={dummy3} alt='missing image'/>
];

export const source_arr = [
    {
        img: PPIA,
        title: "Australia Capitol Territory",
        path: "/chapter/act"
    },
    {
        img: PPIA,
        title: "New South Wales",
        path: "/chapter/nsw"
    },
    {
        img: PPIA,
        title: "Northern Territory ",
        path: "/chapter/nt"
    },
    {
        img: PPIA,
        title: "Queensland",
        path: "/chapter/qld"
    },
    {
        img: PPIA,
        title: "South Australia",
        path: "/chapter/sa"
    },
    {
        img: PPIA,
        title: "Tasmania",
        path: "/chapter/tas"
    },
    {
        img: PPIA,
        title: "Victoria",
        path: "/chapter/vic"
    },
    {
        img: PPIA,
        title: "Western Australia",
        path: "/chapter/wa"
    }
];

export const update_arr =[
    {
        img: dummy1,
        date: "24 Nov 2020",
        title: "Cat picture 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        path: "/blog"
    },
    {
        img: dummy2,
        date: "24 Nov 2020",
        title: "Cat picture 2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        path: "/blog"
    },
    {
        img: dummy3,
        date: "24 Nov 2020",
        title: "Cat picture 3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        path: "/blog"
    }
];

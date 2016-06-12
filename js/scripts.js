document.addEventListener("DOMContentLoaded", function () {
    $$.addDocumentEvents();
    $$.createSubjects();
});

var $$ = {};

$$.addDocumentEvents = function () {
    document.onkeydown = function (e) {
        if (e.keyCode === 8) {
            var markerMenu = document.querySelector("#marker-menu");
            if (markerMenu) {
                var subjectModel = markerMenu.model;
                subjectModel.removeMarker(markerMenu.marker);
                subjectModel.save();
            }
            e.preventDefault();
        }
        else if (e.keyCode === 27) {
            var markerMenu = document.querySelector("#marker-menu");
            if (markerMenu) {
                markerMenu.remove();
            }
        }
    };

    document.getElementById("subject-list").onchange = function () {
        session.subjects[this.value].loadSubject();
    };
};

$$.createSubjects = function () {
    var subjectData = $$.subjectData, subject;
    var loadedSubject;
    for (subject in subjectData) {
        session.subjects[subjectData[subject].id] = new Subject(subjectData[subject]);
    }
    loadedSubject = session.subjects[localStorage.loadedSubject] || session.subjects[Object.keys(session.subjects)[0]];
    loadedSubject.loadSubject();
};


$$.removeMarkerMenu = function () {
    var markerMenu = document.getElementById("marker-menu");
    if (markerMenu) { markerMenu.parentElement.removeChild(markerMenu); }  
};

$$.subjectData = [
    {
        id: "subject1",
        name: "Scott Summers",
        markers: {
            "1465744718236":{"id":1465744718236,"type":"inflammatory","top":"46.51015228426396%","left":"53.42639593908629%"},"1465744728651":{"id":1465744728651,"type":"inflammatory","top":"46.38324873096447%","left":"68.65482233502537%"},"1465745877067":{"id":1465745877067,"type":"inflammatory","top":"47.01776649746193%","left":"45.93908629441624%"},"1465745879011":{"id":1465745879011,"type":"inflammatory","top":"46.890862944162436%","left":"32.99492385786802%"},"1465745881507":{"id":1465745881507,"type":"inflammatory","top":"41.941624365482234%","left":"39.46700507614213%"},"1465745883291":{"id":1465745883291,"type":"inflammatory","top":"51.07868020304569%","left":"39.847715736040605%"},"1465745887683":{"id":1465745887683,"type":"inflammatory","top":"49.93654822335025%","left":"61.42131979695431%"},"1465745889443":{"id":1465745889443,"type":"inflammatory","top":"42.4492385786802%","left":"60.659898477157356%"}
        }
    },
    {
        id: "subject2",
        name: "Ororo Munroe",
        markers: {
            "1465745935873":{"id":1465745935873,"type":"noninflammatory","top":"46.890862944162436%","left":"46.5736040609137%"},"1465745937528":{"id":1465745937528,"type":"noninflammatory","top":"47.27157360406091%","left":"31.979695431472084%"},"1465745939112":{"id":1465745939112,"type":"noninflammatory","top":"42.70304568527919%","left":"39.340101522842644%"},"1465745940584":{"id":1465745940584,"type":"noninflammatory","top":"50.317258883248726%","left":"39.46700507614213%"},"1465745942632":{"id":1465745942632,"type":"noninflammatory","top":"43.08375634517766%","left":"60.53299492385786%"},"1465745944033":{"id":1465745944033,"type":"noninflammatory","top":"47.14467005076142%","left":"53.80710659898477%"},"1465745946057":{"id":1465745946057,"type":"noninflammatory","top":"46.890862944162436%","left":"67.76649746192894%"},"1465745947880":{"id":1465745947880,"type":"noninflammatory","top":"49.68274111675127%","left":"60.786802030456855%"}
        }
    },
    {
        id: "subject3",
        name: "Charles Xavier",
        markers: {
            "1465746052196":{"id":1465746052196,"type":"noninflammatory","top":"34.83502538071066%","left":"50.1269035532995%"},"1465746054196":{"id":1465746054196,"type":"noninflammatory","top":"26.96700507614213%","left":"59.89847715736041%"},"1465746058867":{"id":1465746058867,"type":"noninflammatory","top":"27.220812182741117%","left":"40.736040609137056%"},"1465746061723":{"id":1465746061723,"type":"noninflammatory","top":"19.987309644670052%","left":"49.619289340101524%"},"1465746068683":{"id":1465746068683,"type":"inflammatory","top":"27.4746192893401%","left":"50%"},"1465746094082":{"id":1465746094082,"type":"noninflammatory","top":"30.774111675126903%","left":"45.558375634517766%"},"1465746096338":{"id":1465746096338,"type":"noninflammatory","top":"30.64720812182741%","left":"55.45685279187818%"},"1465746099210":{"id":1465746099210,"type":"noninflammatory","top":"23.15989847715736%","left":"45.0507614213198%"},"1465746101498":{"id":1465746101498,"type":"noninflammatory","top":"23.413705583756343%","left":"55.0761421319797%"}
        }
    },
    {
        id: "subject4",
        name: "Robert Drake",
        markers: {
            "1465744952202":{"id":1465744952202,"type":"noninflammatory","top":"25.444162436548222%","left":"35.786802030456855%"},"1465744953994":{"id":1465744953994,"type":"noninflammatory","top":"15.038071065989847%","left":"48.73096446700508%"},"1465744955538":{"id":1465744955538,"type":"noninflammatory","top":"24.68274111675127%","left":"64.21319796954315%"},"1465744957082":{"id":1465744957082,"type":"noninflammatory","top":"37.753807106598984%","left":"49.619289340101524%"},"1465744959074":{"id":1465744959074,"type":"noninflammatory","top":"53.870558375634516%","left":"30.83756345177665%"},"1465744960921":{"id":1465744960921,"type":"noninflammatory","top":"52.4746192893401%","left":"69.9238578680203%"},"1465744963417":{"id":1465744963417,"type":"noninflammatory","top":"55.7741116751269%","left":"50.380710659898476%"},"1465744966233":{"id":1465744966233,"type":"noninflammatory","top":"69.86040609137056%","left":"33.756345177664976%"},"1465744967913":{"id":1465744967913,"type":"noninflammatory","top":"70.24111675126903%","left":"67.13197969543148%"},"1465744969225":{"id":1465744969225,"type":"noninflammatory","top":"76.96700507614213%","left":"49.87309644670051%"}
        }
    },
    {
        id: "subject5",
        name: "Peter Parker",
        markers: {
            "1465745094228":{"id":1465745094228,"type":"inflammatory","top":"81.28172588832487%","left":"33.24873096446701%"}
        }
    },
    {
        id: "subject6",
        name: "Mary Jane Watson",
        markers: {
            "1465745130762":{"id":1465745130762,"type":"inflammatory","top":"19.733502538071065%","left":"30.96446700507614%"},"1465745132282":{"id":1465745132282,"type":"inflammatory","top":"13.895939086294415%","left":"37.944162436548226%"},"1465745133362":{"id":1465745133362,"type":"inflammatory","top":"11.104060913705585%","left":"45.30456852791878%"},"1465745134666":{"id":1465745134666,"type":"inflammatory","top":"10.723350253807107%","left":"53.172588832487314%"},"1465745136778":{"id":1465745136778,"type":"inflammatory","top":"12.5%","left":"61.16751269035533%"},"1465745138090":{"id":1465745138090,"type":"inflammatory","top":"16.687817258883246%","left":"66.49746192893402%"},"1465745139394":{"id":1465745139394,"type":"inflammatory","top":"23.15989847715736%","left":"71.06598984771574%"},"1465745143682":{"id":1465745143682,"type":"inflammatory","top":"25.69796954314721%","left":"27.53807106598985%"},"1465745147962":{"id":1465745147962,"type":"inflammatory","top":"39.276649746192895%","left":"35.53299492385787%"},"1465745149114":{"id":1465745149114,"type":"inflammatory","top":"39.1497461928934%","left":"40.22842639593909%"},"1465745150394":{"id":1465745150394,"type":"inflammatory","top":"40.16497461928934%","left":"44.67005076142132%"},"1465745152186":{"id":1465745152186,"type":"inflammatory","top":"40.672588832487314%","left":"56.47208121827412%"},"1465745153337":{"id":1465745153337,"type":"inflammatory","top":"39.40355329949238%","left":"61.42131979695431%"},"1465745154377":{"id":1465745154377,"type":"inflammatory","top":"39.276649746192895%","left":"65.98984771573603%"},"1465745172809":{"id":1465745172809,"type":"inflammatory","top":"42.19543147208122%","left":"31.34517766497462%"},"1465745174521":{"id":1465745174521,"type":"inflammatory","top":"41.81472081218274%","left":"69.54314720812182%"}
        }
    },
    {
        id: "subject7",
        name: "Gwen Stacy",
        markers: {}
    },
    {
        id: "subject8",
        name: "Harry Osborne",
        markers: {
            "1465745227542":{"id":1465745227542,"type":"inflammatory","top":"35.97715736040609%","left":"34.390862944162436%"},"1465745229022":{"id":1465745229022,"type":"inflammatory","top":"34.58121827411168%","left":"39.213197969543145%"},"1465745230046":{"id":1465745230046,"type":"inflammatory","top":"38.00761421319797%","left":"42.51269035532995%"},"1465745231198":{"id":1465745231198,"type":"inflammatory","top":"41.56091370558376%","left":"45.558375634517766%"},"1465745233326":{"id":1465745233326,"type":"inflammatory","top":"41.81472081218274%","left":"54.69543147208121%"},"1465745234806":{"id":1465745234806,"type":"inflammatory","top":"38.13451776649746%","left":"58.629441624365484%"},"1465745236358":{"id":1465745236358,"type":"inflammatory","top":"34.454314720812185%","left":"62.56345177664975%"},"1465745237654":{"id":1465745237654,"type":"inflammatory","top":"35.97715736040609%","left":"67.00507614213198%"}
        }
    },
    {
        id: "subject9",
        name: "Tony Stark",
        markers: {
            "1465750230080":{"id":1465750230080,"type":"noninflammatory","top":"95.99730911537168%","left":"50.862204282991364%"},"1465750232144":{"id":1465750232144,"type":"noninflammatory","top":"97.57596143065366%","left":"45.40867810292634%"},"1465750240223":{"id":1465750240223,"type":"noninflammatory","top":"97.57596143065366%","left":"56.315730463056404%"}
        }
    },
    {
        id: "subject10",
        name: "Thor Odinson",
        markers: {
            "1465739675020":{"id":1465739675020,"type":"inflammatory","top":"31.68267696997625%","left":"34.34653149480699%"},"1465739679772":{"id":1465739679772,"type":"inflammatory","top":"34.17815745631137%","left":"39.110630605083124%"},"1465739681252":{"id":1465739681252,"type":"inflammatory","top":"37.58108539222289%","left":"43.76129878416221%"},"1465739682948":{"id":1465739682948,"type":"inflammatory","top":"42.572046364893126%","left":"48.29853603204424%"},"1465739684772":{"id":1465739684772,"type":"inflammatory","top":"47.22271454397221%","left":"50.567154655985256%"},"1465739686516":{"id":1465739686516,"type":"inflammatory","top":"51.53308992946014%","left":"51.24774024316756%"},"1465739688444":{"id":1465739688444,"type":"inflammatory","top":"55.16287972776577%","left":"53.40292793591153%"},"1465739690219":{"id":1465739690219,"type":"inflammatory","top":"57.65836021410088%","left":"57.5998723902024%"},"1465739691596":{"id":1465739691596,"type":"inflammatory","top":"61.288150012406504%","left":"63.384849881251995%"},"1465739692987":{"id":1465739692987,"type":"inflammatory","top":"65.25823260430329%","left":"66.44748502357236%"}
        }
    },
    {
        id: "subject11",
        name: "Natasha Romanova",
        markers: {
            "1465708785980":{"id":1465708785980,"type":"inflammatory","top":"62.32009465449344%","left":"40.394158263725785%"},"1465710657984":{"id":1465710657984,"type":"noninflammatory","top":"58.87170154686078%","left":"26.436295152040966%"},"1465710659848":{"id":1465710659848,"type":"noninflammatory","top":"58.46541253147682%","left":"73.56582093658083%"},"1465710665919":{"id":1465710665919,"type":"noninflammatory","top":"40.04697716740377%","left":"32.53063038280043%"},"1465710667551":{"id":1465710667551,"type":"noninflammatory","top":"38.01553209048395%","left":"37.81238758279197%"},"1465710668815":{"id":1465710668815,"type":"noninflammatory","top":"38.55725077766257%","left":"42.68785576739954%"},"1465710676047":{"id":1465710676047,"type":"noninflammatory","top":"39.234399136635844%","left":"55.14738557250778%"},"1465710677551":{"id":1465710677551,"type":"noninflammatory","top":"38.150961762278605%","left":"60.700002116088626%"},"1465710678983":{"id":1465710678983,"type":"noninflammatory","top":"40.04697716740377%","left":"66.38804833146412%"}
        }
    }
]
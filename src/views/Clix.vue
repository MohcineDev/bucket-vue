<template>
    <h1>clix</h1>
    <section class="clix_data">
        <div class="sponsores">
            <div>
                <ClixSponsore value="Clix" ID="clix" Label="Clix" @handleChange="e=>console.log(e)" />
                <ClixSponsore value="w4" ID="w4" Label="w4" @handleChange="e=>console.log(e)"/>
                <ClixSponsore value="sphere" ID="sphere" Label="sphere" @handleChange="e=>console.log(e)"/>
               <!--  <input type="radio" value="w4" name="sponsore" v-model="sponsores" id="w4" />
                <label for="w4"> W4</label>
                <input type="radio" value="sphere" name="sponsore" id="sphere" />
                <label for="sphere">Sphere</label>-->
            </div>
            <svg @click="resetValues" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="w-5 h-5">
                <path fill-rule="evenodd" title="refrsh all values / page"
                    d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                    clip-rule="evenodd" />
            </svg>
        </div>
        <textarea rows="20" cols="40" placeholder="past exported data here" v-model="rawData"></textarea>
        <div class="btns">

            <button class="process" @click="processTextArea">process</button>
            <button v-show="processClicked" class="generate_entities" @click="GenerateEntities"
                :disabled="disableEntitiesButton">Generate
                Entities</button>
            <button v-show="generateEntitiesClicked" class="generate_entities_bydata" @click="GenerateEntitiesBydata"
                :disabled="disableEntitiesBydataBtn">Entities By Data</button>
        </div>
        <div class="options">
            <label for="manual">
                <input type="radio" name="option" value="manual" v-model="csvOrManual" id="manual" />
                Manual</label>
            <label for="csv">
                <input type="radio" name="option" id="csv" value="csv" v-model="csvOrManual" />
                CSV</label>
        </div>
        <!-- button to show nbr leads and deploys with selected nbr lead -->
        <div v-show="generateDone" class="nbr_leads_input">
            <button id="displayLeads" :disabled="displayLeadsDisable">Leads Nbr</button>
            <input type="number" />
            <button id="displayIds" :disabled="displayIdsdisable">Display IDs</button>
        </div>
        <p class="displayLeads_txt"></p>
    </section>
    <h2 id="offerTitle">{{ offerTitle }}</h2>
    <hr>
    <section class="tables">
        <div>
            <p>entity leads and revenue </p>
           
        </div>
        <div>
            <p>deploys with more than " nbr Leads " and its revenue by mailer</p>
            <div class="nbr_leads">
                <label>Nbr Leads : </label>
                <input type="number" id="nbr_leads" max="10" min="2" v-model="minNbLeads" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="nbr_leads_btn">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </div>
        </div>
        <div>
            <p>deploy lead and revenue / mailer </p>
            <div class="min_leads">
                <label>Nbr Leads : </label>
                <input type="number" id="min_leads" max="10" min="1" v-model="allRestLeads" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="min_leads_btn">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            </div>
        </div>
    </section>
    <section class="tables_section">
        <table id="entityTable" title="entity leads and revenue ">
                <thead>
                    <tr>
                        <th>Entity ID</th>
                        <th>Entity Name</th>
                        <th>Nbr Leads</th>
                        <th>Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in entityTableValues" :key="index" v-html="item">

                    </tr>
                </tbody>
            </table>
        <table id="dataTableBest" title="deploys with more than 2 leads and its revenue by mailer ">
                <thead>
                    <tr>
                        <th>data ID</th>
                        <th>Nbr Leads</th>
                        <th>Entity ID</th>
                        <th>Revenue</th>
                        <th>Mailer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in dataTableBestData" :key="index" v-html="item">
                    </tr>
                </tbody>
            </table>
        <table id="dataTable">
                <thead>
                    <tr>
                        <th>data ID</th>
                        <th>Nbr Leads</th>
                        <th>Entity ID</th>
                        <th>Revenue</th>
                        <th>Mailer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in dataTableValues" :key="index" v-html="item">
                    </tr>
                </tbody>
            </table>
    </section>
    <section class="tables" title="mailer / revenue for ECM4, ECM5">
        <table id="mailerRevenue">
            <thead>
                <tr>
                    <th>Mailer</th>
                    <th>Revenue</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </section>
    <ul>
        <li style="text-decoration:line-through; ">replace Entity Id By its name</li>
        <li style="text-decoration:line-through; ">generate revenue by Deploy</li>
        <li style="text-decoration:line-through; ">2 radio btn for csv and manual search</li>
        <li style="text-decoration:line-through; ">add csv option</li>
        <li>replace mailer id by its name</li>
        <li>generate revenue by mailer</li>
    </ul>
    <section class="how_to">
        <h3>how to :</h3>
        <ul>
            <li>select the sponsore</li>
            <li>past the values from csv file / or Ctrl+A from the leads page and past</li>
            <li>selct the manual or csv </li>
            <li>click process to start processing the data </li>
            <li>click generate to generate the entities</li>
            <li>click entities by data to generate accessible entities to get deploys and mailers ids</li>
        </ul>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import ClixSponsore from '../components/ClixSponsore.vue'
//minimum nbr of leads by deploy to display in the table
const minNbLeads = ref(2)

//rest of leads from 1 to minNbLeads 
const allRestLeads = ref(1)

let cleanData = new Array()
let allData = []
let columnIndex = null
let CSVfileIndex = 0

const entityTableValues = ref([])
const dataTableValues = ref([])
const dataTableBestData = ref([])
// conditionally display btns
const processClicked = ref(false)
const generateEntitiesClicked = ref(false)
//generate div after everything is done
const generateDone = ref(false)

//// reffffffsssss//////
/// textarea data 
const rawData0 = ref(`hit date,"sale date","hit IP","c1","c2","c3","sales","paid",																		
2023-05-16 12:58:30,"2023-05-16 13:10:27","$24.00",																		`)
//////radio btn 


const rawData = ref(`Date,IP,C1,C2,C3,Sales,Earnings
-,-,50660_11536311_11_23145_01,trSSqWNOovQdQRSBWdBXXQWjGsXvAvDKeQXcNJWhOAnySlWyOHRRmATKdHXfrzkuUkaXVw,741,1,5
-,-,50660_11729541_11_27186_01,2SPRwelMAsPfTkFdPdiVsQfqIeiwDBrOSdlWeTXksdRFuZwVeWNXunNGmqWPqhQlu,741,1,5`)
const csvOrManual = ref('csv')
const sponsores = ref('')


const offerTitle = ref('')



//////reset all values
function resetValues(e) {
    rawData.value = ''
    entityTableValues.value = ''
    dataTableValues.value = ''
    dataTableBestData.value = ''
    processClicked.value = false
    generateEntitiesClicked.value = false
    generateDone.value = false
}



let bestDeployIDs = ''

let disableEntitiesButton = ref(true)
let disableEntitiesBydataBtn = ref(true)
let displayIdsdisable = ref(true)
let displayLeadsDisable = ref(true)
// mailerRevenue.disabled  = true

let availabelLeadsNbrs = []
// document.querySelector(".nbr_leads_input input").disabled = true

let revenueIndex = null
//rawData.value =''
const processTextArea = () => {

    if(sponsores.value ==''){
        alert('Select the sponsor!!')
        return
    }
    //set nbr leads default value
    if (minNbLeads.value > 10 || minNbLeads.value < 2) { minNbLeads.value = 2 }
    if (allRestLeads.value > 10 || allRestLeads.value < 1) { allRestLeads.value = 1 }
    console.log(csvOrManual.value + ' | ' + sponsores.value)

    cleanEntityTable()
    cleanData = new Array()
    if (!Boolean(rawData.value)) {
        alert("please enter your data!!!")

        return
    }

    //.substring(100) to exclude the title from  the condition
    else if (rawData.value.substring(100).includes('"') && csvOrManual.value === 'manual') {
        console.log("CSV")
        alert("you're using a data from csv file!!!")
        csvOrManual.value = 'csv'
        CSVfileIndex = 1
    }
    else if (rawData.value.includes('"') && csvOrManual.value === 'csv') {
        CSVfileIndex = 1
    }
    else {
        ///csvBtn.checked = false
        ///manual.checked = true
        console.log('dddddddddd')
        CSVfileIndex = 0
    }
    processClicked.value = !processClicked.value

    let splitedValue = rawData.value.split('\n')
    let trimedValue = []
    let cleanValues = []
    let dollarToSaerch = ""

    // push it if not empty 
    if (splitedValue.length >= 10) {

        //remove empty rows
        splitedValue.forEach(line => {
            if (line.trim().length > 30) {
                cleanValues.push(line)
            }
        })

        //exclude the title that includes the dollar sign // USD for w4 text

        if (sponsores.value === "w4") {
            dollarToSaerch = "USD"
            revenueIndex = 9
            /////w4 doesn't use "" double quotes to wrap the ids column
            CSVfileIndex = 0
        }
        else if (sponsores.value === "sphere") {
            revenueIndex = 6
            /////w4 doesn't use "" double quotes to wrap the ids column
            CSVfileIndex = 0
            console.log('sphere')
        }
        else {
            dollarToSaerch = "$"
        }

        //if data from sphere
        if (sponsores.value === "sphere") {
            trimedValue = cleanValues
        }
        else {
            cleanValues.forEach(str => str.substring(cleanValues[0].length / 2).includes(dollarToSaerch) ? (trimedValue.push(str), console.log('hiii')) : (null, console.log('buyy')))
        }

        ///offerTitle.value = getOfferTitle(cleanValues[0])

        allData = []


        //split each line with tab \t ==+> make tables inside allData table
        trimedValue.forEach(item => {
            csvOrManual.value === 'csv' ? allData.push(item.split(',')) : item.split('\t')

        })  
        findIDsColumn(allData[10])

        getEntity()
    }
    else alert("unable to prosses \n you must enter at least 10 rows")

}

///get offer title
const getOfferTitle = (value) => {
    //clix flow ofer title
    let wordTosearch = value.toLocaleLowerCase().search('first')

    return wordTosearch > -1 ? value.substring(0, wordTosearch)
        //w4 ofer title
        : value.toLocaleLowerCase().search('conv') > -1 ? value
            : "--"
}


let entitiesTable = []
////
let searchableDeploys = []

/////
// get leads by entity 
const getEntity = () => {
    entitiesTable = []
    searchableDeploys = []

    setTimeout(() => {
        allData.forEach(elem => {
            let entity = {
                id: null,
                count: 0,
                revenue: 0
            }
            let deploy = {
                id: null,
                count: 0,
                revenue: 0,
                entityid: null,
                mailerID: 0
            }

            let entityID = elem[columnIndex].substr(-2 - CSVfileIndex, 2)
            let deployId = elem[columnIndex].substr(elem[columnIndex].indexOf('_') + 1, 8)
            let mailerID = parseInt(elem[columnIndex].substr(18 + CSVfileIndex, 4))

            //maybe generated link i don't need it ==> can't get the data from it
            if (deployId.includes('_')) { return }
            let state = checkEntity(entityID.replace('_', ''))
            let deployState = checkDeployId(deployId)

            ///// 

            //			if(entityID == '71' || entityID == '41'|| entityID == '_9' || entityID == '19' || entityID == '76' || entityID == '97'){
            if (entityID == '71' || entityID == '41' || entityID == '19' || entityID == '97') {
                deployState.found ? (
                    searchableDeploys[deployState.index].count++,
                    searchableDeploys[deployState.index].revenue += sponsores.value === 'w4' ?
                        parseFloat(elem[revenueIndex + CSVfileIndex].substr(0 + CSVfileIndex, 5))
                        :
                        parseFloat(elem[6 + CSVfileIndex].substr(1 + CSVfileIndex, 5))
                )
                    :
                    (
                        deploy.id = deployId,
                        deploy.count = 1,
                        deploy.entityid = entityID.replace('_', ''),
                        deploy.mailerID = mailerID,

                        deploy.revenue = sponsores.value === 'w4' ?
                            parseFloat(elem[revenueIndex + CSVfileIndex].substr(0 + CSVfileIndex, 5))
                            :
                            parseFloat(elem[6 + CSVfileIndex].substr(1 + CSVfileIndex, 5)),

                        searchableDeploys.push(deploy)
                    );
            } //// end if

            state.found ? (
                entitiesTable[state.index].count++,
                entitiesTable[state.index].revenue += sponsores.value === 'w4' ?
                    parseFloat(elem[revenueIndex + CSVfileIndex].substr(0 + CSVfileIndex, 5))
                    :
                    parseFloat(elem[6 + CSVfileIndex].substr(1 + CSVfileIndex, 5))
            )
                :
                (
                    entity.id = parseInt(entityID.replace('_', '')),
                    entity.count = 1,

                    entity.revenue = sponsores.value === 'w4' ?
                        parseFloat(elem[revenueIndex + CSVfileIndex].substr(0 + CSVfileIndex, 5))
                        : sponsores.value === 'sphere' ? parseFloat(elem[revenueIndex + CSVfileIndex].substr(0 + CSVfileIndex, 5)) :
                            parseFloat(elem[6 + CSVfileIndex].substr(1 + CSVfileIndex, 5)),

                    entitiesTable.push(entity)
                );
        })

        disableEntitiesButton.value = false
        disableEntitiesBydataBtn.value = false
        //mailerRevenue.disabled = false

    }, 1500)
}

/////find the column with the id of the entity and the id of the deploy
///the only column that contains the underscore sign ' _ '
const findIDsColumn = (item) => {

    item.forEach((elem, index) => {
        if (elem.includes('_')) {
            columnIndex = index;
        }
    })
    console.log('columnIndex: ', columnIndex)
    return columnIndex
}


// check if entity already exist in the array 
function checkEntity(entityId) {
    let foundandIndex = {
        found: false,
        index: null
    }

    entitiesTable.forEach((elem, index) => {
        if (elem.id == entityId) {
            foundandIndex.found = true
            foundandIndex.index = index
        }
    })

    return foundandIndex
}

// check if deploy id already exist in the array 
function checkDeployId(deployId) {
    let foundandIndex = {
        found: false,
        index: null
    }

    searchableDeploys.forEach((elem, index) => {
        if (parseInt(elem.id) == parseInt(deployId)) {
            foundandIndex.found = true
            foundandIndex.index = index
        }
    })

    return foundandIndex
}

/// remove childs from entity and data table
const cleanEntityTable = () => {
    if (nbrvar) {
        dataTableBestData.value = []
    }
    else if (minvar) {
        dataTableValues.value = []
    }
    else {
        entityTableValues.value = []
        dataTableValues.value = []
        dataTableBestData.value = []
    }
}


///get the entity name from its id
const getEntityName = (id) => {

    const allEntitiesName = ["CMH2", "CMH3", "CMH4", "CMH5", "CMH6", "CMH7", "CMH8", "CMH9",
        "CMHF", "CMHJ", "CMHJ", "CMHW", "ECM2", "ECM3", "ECM4", "ECM5",
        "ECM6", "EMI", "EMK1", "EMK2", "EMK3", "EMS1", "EMS2", "EMS3",
        "EMS4", "EMS5", "EMT", "TSS2", "TSS3", "TSS4", "VMS2", "VMS3",
        "VMS4", "VMS5", "EMD1", "LAM", "EMD4", "EMD3", "EMS", "EMD7",
        "EMD8", "VMS1", "EMD9", "EMD10", "EMD", "EMD12", "ECM3", "EMD13",
        "EMD14", "ECM2", "EMD15", "EMD16", "TSS", "EMK1", "EMK2", "EMS2",
        "EMD17", "EMD18", "EMD19", "EMH", "EMD20", "EMI", "EMD21", "EMD22",
        "EMD23", "VMS3", "TSS2", "EMS3", "CMH 1 A", "CMH 2 A", "CMH 1 B", "CMH 2 B",
        "VMS2", "TSS3"]

    const allEntitiesID = [54, 55, 56, 57, 58, 59, 60, 62,
        64, 72, 73, 74, 22, 19, 41, 71,
        77, 34, 26, 27, 75, 9, 28, 43,
        68, 76, 67, 40, 51, 70, 50, 53,
        38, 69, 1, 3, 4, 6, 11, 12,
        13, 14, 15, 17, 18, 19,
        20, 21,
        22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
        34, 35, 36, 37, 38, 40, 43, 45, 46, 47, 48, 50, 51]

    return allEntitiesName[allEntitiesID.indexOf(id)]
}

///get mailer name
const getMailerName = (id) => {
    const allMailersName = ["o.aitsl", "h.tuza", "z.hamm", "s.hdo", "a.oukk",
        "m.fai", "m.kholl", "z.boula", "i.azzou", "i.elba",
        "m.aitalla", "y.choua", "a.tim", "baj", "a.jebou",
        'i.blid', 'o.houa', 't.saou', 'z.kbi', 'z.krhou',
        'z.elgour', 'r.beylo', 'a.hadou', 'n.kerai', 'h.bnlam',
        'a.elkarn', 'a.elhad', 'y.ouhann', 'y.bou', 'm.asemr',
        'a.boqt', 'c.talho', 'm.agouzo']

    const allMailersID = [1945, 2175, 1626, 2351, 1954,
        2792, 1951, 1949, 2348, 1950,
        2178, 2347, 2345, 2782, 2788,
        1601, 2687, 2177, 2349, 2690,
        2784, 1442, 1448, 2332, 2025,
        2138, 2789, 1595, 2783, 1944, 2415, 1435, 2497]

    return allMailersName[allMailersID.indexOf(id)]
}

let dataArray = []


function checkDataExist(data) {
    let foundandIndex = {
        found: false,
        index: null
    }

    dataArray.forEach((elem, index) => {
        if (elem == data) {
            foundandIndex.found = true
            foundandIndex.index = index
        }
    })
    return foundandIndex
}

let minvar = false
let nbrvar = false


function GenerateEntitiesBydata() {
    generateDone.value = true
    dataArray = []
    cleanData.forEach(elem => {

        let dataLeads = {
            data: '',
            count: 0
        }

        let dataState = checkDataExist(elem)
        let first_ = elem[0].substr(elem[0].indexOf('_') + 1)
        let data = first_.substring(0, first_.indexOf('_'))

        dataState.found ? (
            dataArray[dataState.index].count++
        ) : (
            dataLeads.data = data,
            dataLeads.count = 1,
            dataArray.push(dataLeads)
        )
        console.log(data)
    })
    GenerateDataTable()

    disableEntitiesBydataBtn.disabled = true

    displayIdsdisable.value = false
    displayLeadsDisable.value = false
    document.querySelector(".nbr_leads_input input").disabled = false
}

// generate table
function GenerateEntities() {
    generateEntitiesClicked.value = !generateEntitiesClicked.value

    cleanEntityTable()

    entitiesTable.length ? (

        entitiesTable.forEach((entity, i) => {
            let id = getEntityName(entity.id)

            entityTableValues.value.push(` 
                    <td>${entity.id}</td>
                    <td>${id ? id : '--'}</td>
                    <td>${entity.count}</td>
                    <td>${"$ " + Math.floor(entity.revenue)}</td>  `)
        })
    ) : null

    disableEntitiesButton.value = true
}
// generate data table , table best
function GenerateDataTable() {
    dataTableBestData.value = []
    dataTableValues.value = []

    // availabelLeadsNbrs = []
    let rwData = ''
    searchableDeploys.length ? (
        searchableDeploys.forEach(elem => {

            rwData = `<td>${elem.id}</td>
                <td class=${elem.count >= 5 ? "ff" : null}>${elem.count}</td>
                <td>${elem.entityid}</td>
                <td>${elem.revenue} $</td>
                <td> ${getMailerName(elem.mailerID) ? getMailerName(elem.mailerID) : elem.mailerID}</td>`

            if (minvar) {
                elem.count >= allRestLeads.value && elem.count < minNbLeads.value ? dataTableValues.value.push(rwData) : null

            } else if (nbrvar) {
                elem.count >= minNbLeads.value ? dataTableBestData.value.push(rwData) : null
            }
            else
                // add the row to the table based on it's nbr leads
                elem.count >= minNbLeads.value ? (
                    dataTableBestData.value.push(rwData),
                    availabelLeadsNbrs.find((i) => i == elem.count) ? null : availabelLeadsNbrs.push(elem.count)
                )
                    :
                    elem.count >= allRestLeads.value ? dataTableValues.value.push(rwData) : null

        })
    ) : null
    minvar = false
    nbrvar = false
}

// nbrLeadsBtn.onclick= ()=>{
// 	nbrvar = true
cleanEntityTable()
// 	GenerateDataTable()
// }
// minLeadsBtn.onclick= ()=> {
// 	 minvar= true
cleanEntityTable()
// 	 GenerateDataTable()
// }

cleanEntityTable()
// })
 

///display the ids with nbr leads specieifed in the input
// displayIds.addEventListener('click', ()=>{

// 	searchableDeploys.forEach(deploy => deploy.count == document.querySelector(".nbr_leads_input input").value ? bestDeployIDs += `${deploy.id}\n` : null )
// 	bestDeployIDs ?
// 		prompt(`you have ${bestDeployIDs.split('\n').length-1} deploys with this NbrLeads!!!`, bestDeployIDs)
// 	:
// 		alert('nothing found!!')
// 	bestDeployIDs = ''

// })

// displayLeads.addEventListener('click', ()=>{
// 	let leads = ''
// 	availabelLeadsNbrs.forEach(elem => leads += `${elem}  -  `)
//  	///alert(`Nbr Leads available ${leads}`)
// 	displayLeads_txt.textContent = leads
// 	console.log(availabelLeadsNbrs)
// }) 
</script>


<style scoped> 

section{
padding: 1rem;
}
h2#offerTitle {
     text-align: center;
     font-size: 17px;
     background: var(--dark);
     color: #7c3131;
     padding: 5px;
     margin-top: 0
 }


 table,
 tr,
 th,
 td {
     border: 1px solid #cde1dc;
     padding: 3px;
     text-align: center
 }

 tr:nth-child(2n+1) {
    background-color:rgb(151 154 177 / 40%);
 }

 .tables {
     display: flex;
     align-items: flex-start;
     justify-content: space-around;
     margin: 1rem 0
 }
 .tables_section{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 1rem;
    align-items: start;
 }

 table {
     box-shadow: 0 0 0 #949bcd
 }

 table:hover {
     box-shadow: 0 0 5px #f1f1f1
 }

 .btns,
 .options,
 .nbr_leads_input {
     width: 50%;
     margin: 10px auto;
     display: flex;
     justify-content: center;
 }

 .btns button,
 .nbr_leads_input button {
     width: 33%;
     padding: 5px 1rem;
     font-size: 1.1rem;
     cursor: pointer;
     background-color: #a3d1f3;
     border: 0;
 }

 .options {
     display: flex;
     align-items: center;
     justify-content: center;
 }

 .options label {
     padding: 0 1rem;
     cursor: pointer
 }

 .nbr_leads_input input {
     width: 33%;
     box-sizing: border-box;
     padding: 5px 1rem;
     font-size: 1.1rem;
     background-color: #a3d1f3;
     border-style: solid;
     border-width: 0 2px 0 2px;
     border-color: #fff;

 }

 .displayLeads_txt {
     text-align: center;
     margin: -10px 0 5px 0;
     font-size: 14px
 }

 .tables p {
     font-size: 15px;
     text-transform: capitalize;
     font-weight: 600
 }

 .nbr_leads,
 .min_leads {
     display: flex;
     align-items: center;
     margin: 1rem 0;
     justify-content: center
 }

 .nbr_leads svg,
 .min_leads svg {
     width: 25px;
     margin: 0 1rem
 }

 /* New style */
 /*


NEWWWWWWWWWWWWWWWWWW
S T Y L E 




*/
 .clix_data {
     margin: 10px;
 }

 .sponsores {
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 5px;
 }

 .sponsores>div {
     display: flex;
     align-items: center;
 }

 .sponsores label {
     display: block;
     cursor: pointer;
     width: 100px;
     background-color: (211 225 245);
     margin-right: 5px;
     text-align: center;
     border-radius: 5px;
     font-weight: 500;
     border: 1px solid transparent;
     color: var(--ui_blue);
     padding: 5px;
 }


 @keyframes resetBtn {
     0% {
         transform: rotate(0deg);
     }

     100% {
         transform: rotate(180deg);
     }
 }

 .sponsores svg {
     width: 20px;
     height: 20px;
     animation: resetBtn infinite 3s linear;
     cursor: pointer;
 }
 

 textarea {
     width: 100%;
     margin: auto;
     display: block;
     resize: none;
     border-radius: 5px;
     height: 250px;
     border: 1px solid transparent;
     outline: 0;
     box-shadow: 0 0 5px #aaa;
     padding: 5px;
     transition: border .3s;
     box-sizing: border-box;
    color:gray;
 }

 textarea:hover {
     border-color: #aaa
 }
</style>
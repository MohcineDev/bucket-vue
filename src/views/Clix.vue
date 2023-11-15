<template>
    <h1>clix</h1>
    <section class="clix_data">
        <div class="sponsores">
            <div>

            <input type="radio" value="w4" v-model="sponsores" id="w4" />
            <label for="w4"> W4</label>
            <input type="radio" value="sphere" v-model="sponsores" id="sphere" />
            <label for="sphere">Sphere</label>
        </div>

            <svg @click="resetValues" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z" clip-rule="evenodd" />
</svg>

        </div>
        <textarea rows="20" cols="40" placeholder="past exported data here" v-model="rawData"></textarea>
        <div class="btns">
            <svg id="refreshBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd"
                    d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                    clip-rule="evenodd" />
            </svg>
            <button class="process" @click="processTextArea">process</button>
            <button class="generate_entities" @click="GenerateEntities" :disabled="disableEntitiesButton">Generate
                Entities</button>
            <button class="generate_entities_bydata" @click="GenerateEntitiesBydata"
                :disabled="disableEntitiesBydataBtn">Entities By Data</button>
        </div>
        <div id="options">
            <div>
                <input type="radio" name="option" value="manual" v-model="csvOrManual" id="manual" />
                <label for="manual">Manual</label>
            </div>
            <div>
                <input type="radio" name="option" id="csv" value="csv" v-model="csvOrManual" />
                <label for="csv">CSV</label>
            </div>
        </div>
        <!-- button to show nbr leads and deploys with selected nbr lead -->
        <div class="nbr_leads_input">
            <button id="displayLeads" :disabled="displayLeadsDisable">Leads Nbr</button>
            <input type="number" />
            <button id="displayIds" :disabled="displayIdsdisable">Display IDs</button>
        </div>
        <p class="displayLeads_txt"></p>
    </section>
    <h2 id="offerTitle">{{ offerTitle }}</h2>
    <section class="tables">
        <div>
            <p>entity leads and revenue </p>
            <table id="entityTable" title="entity leads and revenue ">
                <thead>
                    <tr>
                        <th>Entity ID</th>
                        <th>Entity Name</th>
                        <th>Leads Nbr</th>
                        <th>Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in entityTableValues" :key="index" v-html="item">

                    </tr>
                </tbody>
            </table>
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
            <table id="dataTableBest" title="deploys with more than 2 leads and its revenue by mailer ">
                <thead>
                    <tr>
                        <th>data ID</th>
                        <th>Leads Nbr</th>
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
            <table id="dataTable">
                <thead>
                    <tr>
                        <th>data ID</th>
                        <th>Leads Nbr</th>
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
        </div>
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
</template>

<script setup>
import { ref } from 'vue';
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


//// reffffffsssss//////
/// textarea data 
const rawData = ref(`hit date,"sale date","hit IP","c1","c2","c3","sales","paid",																		
2023-05-16 12:58:30,"2023-05-16 13:10:27","72.191.82.22","48541_14062274_11_2070_69","rWzJrepRRPftsoTAqHqwAWZReYegALdmnNeDhFaUuceNwGkfxFQgHioaTyqQYeQAkk","69","1","$24.00",																		
2023-05-15 23:36:34,"2023-05-15 23:45:03","172.221.243.191","48541_1_11_2878_89","amYYonyUcrcrcDPMwomVjWcKmPiHqHyzazJVByDcZRcGzJu","89","1","$24.00",																		
2023-05-15 20:03:38,"2023-05-15 20:23:49","47.14.107.98","48541_1_11_2878_89","bXammpIdKFIFzUKPiQXcBTnAiIhwYAnOyjfctKCIdknsjZt","89","1","$24.00",																		
2023-05-15 18:17:46,"2023-05-15 18:26:52","98.214.5.243","48541_14057262_11_2635_69","rKGbIlkTcwfZoxtlUFvjSvVlclyIxBdjieKnqaKJtFaNTdnwlRZYbudDoqBGeoWuP","69","1","$24.00",																		
2023-05-15 14:29:35,"2023-05-15 14:36:23","108.191.68.210","48541_14068317_13_2167_94","xFFBwpTssLfYWEehepepwjFDQUocNhKLpNRJcZxfmzXrZbasTdAxcpRejUCmu","94","1","$24.00",																		
2023-05-15 13:51:41,"2023-05-15 14:00:44","174.192.65.165","48541_1_11_2878_89","xBttArjxZehsZXpFWUvNeipDWhgdEDhCSCJQzjbpRsjtoHE","89","1","$24.00",																		
2023-05-15 11:33:58,"2023-05-15 11:44:21","173.88.104.156","48541_14057304_11_2635_69","2NytwqtBcsGtksuepeoCNoWdIdxLLOwkkesLqTsKiqTAXFcBJEGfHXhVaerIeFyUK","69","1","$24.00",																		
2023-05-13 11:54:39,"2023-05-15 10:50:48","70.40.81.44","48541_14060075_11_1507_19","likTUakSqezoMlhdfKCJEajPzPJOSQWZxPETdUAzodvGWVYBaEJnYcjSAdendiAlz","19","1","$24.00",																		
2023-05-15 09:47:01,"2023-05-15 09:54:03","192.180.45.181","48541_1_11_2048_27","aAOhxyfyryNSxkfcUcNwntJDzyiBdVRMSPibnbEbdZyUpySDp","27","1","$24.00",																		
2023-05-15 07:04:54,"2023-05-15 07:21:01","73.125.161.145","48541_14011326_11_2427_53","2woGIqUzuvMMXzsepJVqIexLkOLTCqiKJFoADdTMVZfpqWapWWRAzdWVeFrsC","53","1","$24.00",																		
2023-05-15 00:40:45,"2023-05-15 00:55:06","173.90.97.127","48541_14060180_30_1180_22","2uwUudxYNkUBlhTqfdVdVqNVwPwbadTFemmCVeuFWacoeWGfzpWvIemfJuog","22","1","$24.00",																		
2023-05-15 00:36:24,"2023-05-15 00:46:15","98.203.216.14","48541_14057528_11_2541_13","lvsSLQDhZsfMgLcdcLcPFTrxBoqPviPgZJEdvOqeDOPEqjAlQmKLtnatjlV","13","1","$24.00",																		
2023-05-14 23:56:10,"2023-05-15 00:03:46","47.145.238.177","48541_14060103_11_2228_77","5ReCHxWLfwwNMALGQimolOHtQxFgylkSeGVViLKZyGJBdqOhtBchMXHQqxDQGInVO","77","1","$24.00",																		
2023-05-14 22:52:15,"2023-05-14 23:07:14","107.77.234.204","48541_14059419_11_1766_19","xoQGRjSysJFKktSZsZejwZMBIEJnuZxBhXYqupGvBTImZGFwrKLbBjRVpxBr","19","1","$24.00",																		
2023-05-14 22:44:18,"2023-05-14 22:54:33","38.133.244.211","48541_14060952_11_2836_19","5AXodxwBYeLkfUmifihtQGFCodawvGjCtLywNGBSrNomxBmXbhCnexHQtDgu","19","1","$24.00",																		
2023-05-14 21:23:27,"2023-05-14 21:34:26","72.189.224.114","48541_14060152_11_1766_19","tSTBhAeVFuggbeEWQAQDUkoCgqsHhkNiATqrFkuCYbzcDTLQsBOmPWOvANCl","19","1","$24.00",																		
2023-05-14 20:05:34,"2023-05-14 20:12:02","172.5.239.204","48541_14061619_11_2836_19","bqcvmIaDxYlHucUKJKJzbnDLHRrmfnMincAsZnEGLfvSzCPJrUNCXnUJIUip","19","1","$24.00",																		
2023-05-13 14:25:14,"2023-05-14 19:38:39","107.127.21.132","48541_14061421_11_1872_69","2GcRQJWmWBtAkBGaJPeojYGWJVJBLbQtImdzcdWCXTqwGfXbmdrofSEBAWqOIdOvXD","69","1","$24.00",																		
2023-05-13 00:13:53,"2023-05-14 18:35:46","172.56.91.66","48541_14057564_11_2541_13","lFQFsLZyezJOVsGPjdzLRaqBuIbSwaeMPpwXtPvbqtgBPefnCGCxfLeRLvjlI","13","1","$24.00",																		
2023-05-13 16:44:08,"2023-05-14 18:16:05","172.56.97.161","48541_14059129_11_2836_19","5RbYMijpfgjuODfTxYGQGhicCyVMIdtpCtLPsMtjCCbzWtBFXurpZrtpYGHrR","19","1","$24.00",																		
2023-05-13 10:53:39,"2023-05-14 18:14:24","174.215.176.233","48541_14058842_11_1766_19","lYzfFLevjvuurkrmaRdzLjdfbslNhYaUOLvoxYLUOTxKqPUfzAsrfDatzaEBZ","19","1","$24.00",																		
2023-05-14 17:57:04,"2023-05-14 18:12:11","107.213.93.84","48541_14058404_11_2608_69","lfIJgakzEbZvoeQdjLXKZfeacaqTOtgrqdVOdmYcsdpMrZrKaUXRQrqRFPtcamZli","69","1","$24.00",																		
2023-05-14 17:20:20,"2023-05-14 17:30:26","73.169.110.161","48541_14063567_11_1607_19","2QuHSqcjRpBBhSTeVePePqotjDQKseWndrzVDJmtcSCBdExfSKHQXqWPqEci","19","1","$24.00",																		
2023-05-06 14:12:04,"2023-05-14 17:27:05","172.58.188.148","48541_14005467_11_2178_71","5FYTFiZDaHsFyePtXxmoTcpiftOnKIAqVxVDiZHEziemyBNSijOffnFMViDhteHEa","71","1","$24.00",																		
2023-05-14 17:14:41,"2023-05-14 17:22:38","107.210.126.216","48541_14060987_11_2836_19","togbvDLgnXrQCIKAQAGAvAciIVsHXDOYknIybANiYstLkNoUbBJIMWuvAuim","19","1","$24.00",																		
2023-05-14 16:56:38,"2023-05-14 17:04:14","174.196.200.173","48541_14063382_13_2240_76","5NKXDGALrADTFlYifGQxYiOnZFflnxEktJKOfGDcWXAnGpcfaAsyJxDfipCTg","76","1","$24.00",																		
2023-05-14 16:41:13,"2023-05-14 16:55:50","172.124.18.66","48541_14058812_11_1766_19","xueMLpoDuDDdOaoZshOpwjMWkcutYhXBjbcHHpRvBTIFpRmsiDkRCjbepGBy","19","1","$24.00",																		`)
//////radio btn 
const csvOrManual = ref('csv')
const sponsores = ref('')


const offerTitle = ref('')

const input = document.querySelector("textarea")
const mailerRevenueTable = document.querySelector("#mailerRevenue tbody")

const refreshBtn = document.querySelector("#refreshBtn")

//////reset all values
function resetValues(e){
    rawData.value =''
    entityTableValues.value = ''
 dataTableValues.value = ''
 dataTableBestData.value = ''
}
//options
///radio btns  
const manual = document.querySelector('#manual')
//nbr leads to filter with in the table best  
const nbrLeadsBtn = document.querySelector('.nbr_leads_btn')

const minLeadsBtn = document.querySelector('.min_leads_btn')
  
const displayLeads_txt = document.querySelector('.displayLeads_txt')

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

    //set nbr leads default value
    if (minNbLeads.value > 10 || minNbLeads.value < 2) { minNbLeads.value = 2, console.log(minNbLeads.value) }
    if (allRestLeads.value > 10 || allRestLeads.value < 1) { allRestLeads.value = 1, console.log(allRestLeads.value); }

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
        csvOrManual.value === 'csv'
        CSVfileIndex = 1
    }
    else if (rawData.value.includes('"') && csvOrManual.value === 'csv') {
        CSVfileIndex = 1
    }
    else {
        ///csvBtn.checked = false
        ///manual.checked = true
        CSVfileIndex = 0
    }

    let splitedValue = rawData.value.split('\n')
    let trimedValue = []
    let cleanValues = []
    let dollarToSaerch = ""

    // push it if not empty 
    if (splitedValue.length >= 10) {
        console.log(splitedValue)
        //remove empty rows
        splitedValue.forEach(line => {
            if (line.trim().length > 30) {
                cleanValues.push(line)
            }
        })

        //exclude the title that includes the dollar sign // USD for w4 text

        if (sponsores.value === sponsores.w4) {
            dollarToSaerch = "USD"
            revenueIndex = 9
            /////w4 doesn't use "" double quotes to wrap the ids column
            CSVfileIndex = 0
        }
        else if (sponsores.value === sponsores.sphere) {
            revenueIndex = 6
            /////w4 doesn't use "" double quotes to wrap the ids column
            CSVfileIndex = 0
        }
        else {
            dollarToSaerch = "$"
        }

        //if data from sphere
        if (sponsores.value === sponsores.sphere) {
            trimedValue = cleanValues
        }
        else {
            cleanValues.forEach(str => str.substring(cleanValues[0].length / 2).includes(dollarToSaerch) ? trimedValue.push(str) : null)
        }

        offerTitle.value = getOfferTitle(cleanValues[0]),

            allData = [],
            //split each line with tab \t ==+> make tables inside allData table
            trimedValue.forEach(item => allData.push(csvOrManual.value === 'csv' ? item.split(',') : item.split('\t'))),

            findIDsColumn(allData[10]),

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
    const allMailersName = ["o.aitslim", "h.touza", "z.hammou", "s.hado", "a.oukk",
        "m.faki", "m.kholl", "z.boussela", "i.azzou", "i.elba",
        "m.aitalla", "y.choua", "a.timmi", "baj", "a.jebbou",
        'i.blilid', 'o.houra', 't.saou', 'z.kabi', 'z.karhou',
        'z.elgourc', 'r.beylo', 'a.hadou', 'n.kerai', 'h.benlam',
        'a.elkarni', 'a.elhadd', 'y.ouhann', 'y.bou', 'm.assemr',
        'a.boqt', 'c.talhao', 'm.agouzo']

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
    // availabelLeadsNbrs = []
    let rwData = ''
    searchableDeploys.length ? (
        searchableDeploys.forEach(elem => {

          rwData = `<td>${elem.id}</td>
                <td class=${elem.count >=5 ? "ff": null}>${elem.count}</td>
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

// refreshBtn.addEventListener('click', ()=>{
// 	//clean the var and inputs 
// 	offerTitle.textContent = ''
// 	input.value= ''
// 	searchableDeploys = []
// 	entitiesTable = []
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


<style scoped> h2#offerTitle {
     text-align: center;
     font-size: 17px;
     background: var(--dark);
     color: #7c3131;
     padding: 5px;
     margin-top: 0
 }
 

 .btns {
     display: flex;
     justify-content: center;
     margin: 1rem 0;
     box-shadow: 0 0 4px #dfdfdf
 }

 .btns button {
     padding: 5px 1rem;
     font-size: 1.1rem;
     width: 170px;
     cursor: pointer;
     border: 0;
     background: 0;
     background: #c7cdf7;
     transition: transform .3s
 }


 .btns button:hover {
     transform: translateY(-3px)
 }

 table,
 tr,
 th,
 td {
     border: 1px solid #cde1dc;
     padding: 5px;
     text-align: center
 }

 tr:nth-child(2n+1) {
     background: #f1f2fb
 }

 tr:hover {
     background: #f5f5f5
 }

 th {
     font-size: 18px
 }

 .tables {
     display: flex;
     align-items: flex-start;
     justify-content: space-around;
     margin: 1rem 0
 }

 table {
     box-shadow: 0 0 0 #949bcd
 }

 table:hover {
     box-shadow: 0 0 5px #f1f1f1
 }

 svg {
     width: 30px;
     height: 30px;
     align-self: center;
     display: inline;
     margin-right: 1rem;
     cursor: pointer
 }

 .btns svg {
     display: none
 }

 #options,
 .nbr_leads_input {
     display: flex;
     align-items: center;
     justify-content: center;
     margin: 1rem 0
 }

 #options div {
     padding: 0 1rem
 }

 #options label {
     cursor: pointer
 }

 .nbr_leads_input button {
     padding: 5px 1rem;
     font-size: 1.1rem;
     width: 170px;
     cursor: pointer;
     border: 0;
     background: #c7cdf7;
     transition: transform .3s
 }

 .nbr_leads_input input {
     padding: 5px 1rem;
     font-size: 1.1rem;
     width: 170px;
     border: 0;
     background: #c7cdf7;
     outline: 0;
     border-right: 2px solid white;
     border-left: 2px solid white
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
.sponsores>div{
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

 
@keyframes resetBtn{
    0%{
        transform: rotate(0deg);  
    }
    100%{
        transform: rotate(180deg) ;  
    }
}

.sponsores svg{
    width: 20px;
    height: 20px;
animation: resetBtn infinite 3s linear;
}

 .sponsores input[type=radio] {
     display: none;
 }

 input[type=radio]:checked+label {
     border-color: var(--ui_blue);
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
 }

 textarea:hover {
     border-color: #aaa
 }
</style>
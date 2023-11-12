<template>
    <h1>clix</h1>
    <section class="clix_data">
        <div class="sponsors">
            <input type="radio" name="sponsor" id="w4" />
            <label for="w4"> W4</label>
            <input type="radio" name="sponsor" id="sphere" /> 
            <label for="sphere">Sphere</label>
        </div>
        <textarea rows="20" cols="40" placeholder="past exported data here"></textarea>
        <div class="btns">
            <svg id="refreshBtn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd"
                    d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
                    clip-rule="evenodd" />
            </svg>
            <button @click="processTextArea" class="process">process</button>
            <button @click="GenerateEntities" class="generate_entities">Generate Entities</button>
            <button class="generate_entities_bydata">Entities By Data</button>
        </div>
        <div id="options">
            <div>
                <input type="radio" name="option" checked="true" id="manual" />
                <label for="manual">Manual</label>
            </div>
            <div>
                <input type="radio" name="option" id="csv" />
                <label for="csv">CSV</label>
            </div>
        </div>
        <!-- button to show nbr leads and deploys with selected nbr lead -->
        <div class="nbr_leads_input">
            <button id="displayLeads">Leads Nbr</button>
            <input type="number" />
            <button id="displayIds">Display IDs</button>
        </div>
        <p class="displayLeads_txt"></p>
    </section>
    <h2 id="offerTitle"></h2>
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
                </tbody>
            </table>
        </div>
        <div>
            <p>deploys with more than " nbr Leads " and its revenue by mailer</p>
            <div class="nbr_leads">
                <label>Nbr Leads : </label>
                <input type="number" id="nbr_leads" max="10" min="2" value="3" />
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
                </tbody>
            </table>
        </div>
        <div>
            <p>deploy lead and revenue / mailer </p>
            <div class="min_leads">
                <label>Nbr Leads : </label>
                <input type="number" id="min_leads" max="10" min="1" value="1" />
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

/* */ 
const generateEntities = document.querySelector("button.generate_entities")
const generateEntitiesBydata = document.querySelector("button.generate_entities_bydata") 

const input = document.querySelector("textarea")
const entityTable = document.querySelector("#entityTable tbody")
const dataTable = document.querySelector("#dataTable tbody")
const dataTableBest = document.querySelector("#dataTableBest tbody")
const mailerRevenueTable = document.querySelector("#mailerRevenue tbody")

const offerTitle = document.querySelector("#offerTitle")
const refreshBtn = document.querySelector("#refreshBtn")
const w4Radio = document.querySelector("#w4")
const sphereRadio = document.querySelector("#sphere")



//options
///radio btns
const csvBtn = document.querySelector('#csv')
const manual = document.querySelector('#manual') 
//nbr leads to filter with in the table best 
const nbrLeads = document.querySelector('#nbr_leads') 
const nbrLeadsBtn = document.querySelector('.nbr_leads_btn')
//minimum nbr of leads by deploy to display in the table
const minLeads = document.querySelector('#min_leads')
const minLeadsBtn = document.querySelector('.min_leads_btn')

const displayIds = document.querySelector('#displayIds')
const displayLeads = document.querySelector('#displayLeads')
const displayLeads_txt = document.querySelector('.displayLeads_txt')

let bestDeployIDs = ''

let cleanData = new Array()
let allData = [] 
let columnIndex = null
let CSVfileIndex  = 0

//generateEntities.disabled = true
//generateEntitiesBydata.disabled  =true
//mailerRevenue.disabled  = true

//displayIds.disabled = true
//displayLeads.disabled = true
let availabelLeadsNbrs = []
//document.querySelector(".nbr_leads_input input").disabled = true

let revenueIndex = null

const processTextArea = () => {  

//set nbr leads default value
	if(nbrLeads.value > 10 || nbrLeads.value < 2) nbrLeads.value = 2
	if(minLeads.value > 10 || minLeads.value < 1) minLeads.value = 1

	cleanEntityTable() 
	cleanData = new Array()
	if(!Boolean(input.value)){
		alert("nothing here\n select all (Ctrl+A) from the offer page and past it here!!")
		
		return
	}
	//.substring(100) to exclude the title from  the condition
	else if(input.value.substring(100).includes('"') && csvBtn.checked === false){
		console.log("CSV")
		alert("you're using a data from csv file!!!")
		csvBtn.checked = true
		CSVfileIndex = 1
	}
	else if(input.value.includes('"') && csvBtn.checked === true){
		CSVfileIndex = 1
	}
	else{
		///csvBtn.checked = false
		///manual.checked = true
		CSVfileIndex = 0
	}
 
	let splitedValue = input.value.split('\n')
	let trimedValue = []
	let cleanValues = []
	let dollarToSaerch = ""

	// push it if not empty 
	if(splitedValue.length >= 10){

		//remove empty rows
		splitedValue.forEach(str =>  {
			if(str.trim().length > 30){
				cleanValues.push(str)
			}
		})

		//exclude the title that includes the dollar sign // USD for w4 text
		
		if(w4Radio.checked){
			dollarToSaerch = "USD"
			revenueIndex = 9
			/////w4 doesn't use "" double quotes to wrap the ids column
			CSVfileIndex = 0 
		}
		else if(sphere.checked){
			revenueIndex = 6
			/////w4 doesn't use "" double quotes to wrap the ids column
			CSVfileIndex = 0 
		}
		else{
			dollarToSaerch ="$"
		} 

		//if data from sphere
		if(sphere.checked){
			trimedValue = cleanValues
		}
		else{ 
			cleanValues.forEach(str => str.substring(cleanValues[0].length/2).includes(dollarToSaerch) ? trimedValue.push(str) : null)
		}

		offerTitle.textContent = getOfferTitle(cleanValues[0]),
		console.log(cleanValues),
		console.log(trimedValue),

		allData = [], 
		//split each line with tab \t ==+> make tables inside allData table
		trimedValue.forEach(item => allData.push(csvBtn.checked ? item.split(',') : item.split('\t'))), 
    
		
		console.log(trimedValue),  
		console.log(allData[10]), 
		findIDsColumn(allData[10]),  

		getEntity()
	} 
	else alert("can't prosses \n you must enter at least 10 rows")
	  
}

///get offer title
const getOfferTitle =(value)=>{ 
	//clix flow ofer title
	let wordTosearch = value.toLocaleLowerCase().search('first')

	return wordTosearch > -1 ? value.substring(0, wordTosearch ) 
	//w4 ofer title
		:   value.toLocaleLowerCase().search('conv') > -1 ? value  
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
  
	setTimeout(()=>{
		allData.forEach(elem => { 
			let entity = {
				id:null,
				count:0,
				revenue:0 
			}
			let deploy = {
				id:null,
				count:0,
				revenue:0,
				entityid:null,
				mailerID:0
			}
			
			let entityID = elem[columnIndex].substr(-2 - CSVfileIndex,2)  
			let deployId = elem[columnIndex].substr(elem[columnIndex].indexOf('_')+1,8) 
			let mailerID = parseInt(elem[columnIndex].substr(18+CSVfileIndex,4))

			//maybe generated link i don't need it ==> can't get the data from it
			if (deployId.includes('_')) { return }
			let state = checkEntity(entityID.replace('_','')) 
			let deployState = checkDeployId(deployId)
			
			///// 

//			if(entityID == '71' || entityID == '41'|| entityID == '_9' || entityID == '19' || entityID == '76' || entityID == '97'){
			if(entityID == '71' || entityID == '41'||   entityID == '19'  || entityID == '97'){
				deployState.found ? (
					searchableDeploys[deployState.index].count++,
					searchableDeploys[deployState.index].revenue += w4Radio.checked ?
						parseFloat(elem[revenueIndex + CSVfileIndex].substr(0 + CSVfileIndex,5)) 
					:
						parseFloat(elem[6 + CSVfileIndex].substr(1 + CSVfileIndex,5)) 
				)
				:
				(
					deploy.id = deployId,
					deploy.count = 1,
					deploy.entityid = entityID.replace('_',''),
					deploy.mailerID = mailerID,

					deploy.revenue = w4Radio.checked ?
						parseFloat(elem[revenueIndex + CSVfileIndex].substr(0 + CSVfileIndex,5)) 
						: 
						parseFloat(elem[6 + CSVfileIndex].substr(1 + CSVfileIndex,5)),

					searchableDeploys.push(deploy)
				);
			} //// end if

			state.found ? (
				entitiesTable[state.index].count++ , 
				entitiesTable[state.index].revenue += w4Radio.checked ?
					parseFloat(elem[revenueIndex + CSVfileIndex].substr(0 + CSVfileIndex,5)) 
				: 
					parseFloat(elem[6 + CSVfileIndex].substr(1 + CSVfileIndex,5))
			) 
			:  
			(
				entity.id = parseInt(entityID.replace('_','')),
				entity.count = 1,

				entity.revenue = w4Radio.checked ?
					parseFloat(elem[revenueIndex + CSVfileIndex].substr(0 + CSVfileIndex,5)) 
				: sphere.checked ? 					parseFloat(elem[revenueIndex + CSVfileIndex].substr(0 + CSVfileIndex,5))  :
					parseFloat(elem[6 + CSVfileIndex].substr(1 + CSVfileIndex,5)),

				entitiesTable.push(entity)
			);
		}) 
 
		// generateEntities.disabled = false
		///generateEntitiesBydata.disabled  = false
	//	mailerRevenue.disabled  = false

		// generateEntities.style.cursor = "pointer"

	},1500)  
}

/////find the column with the id of the entity and the id of the deploy
///the only column that contains the underscore sign ' _ '
const findIDsColumn = (item)=>{ 

 	item.forEach((elem, index) => { 
 		if(elem.includes('_')){
			columnIndex =  index;  
		}
	})
console.log('columnIndex: ', columnIndex)
	return columnIndex
}
 

// check if entity already exist in the array 
function checkEntity(entityId){
	let foundandIndex ={
		found : false,
		index: null
	}
	
	entitiesTable.forEach((elem, index )=> {
		if(elem.id == entityId ){
			foundandIndex.found = true 
			foundandIndex.index = index
		}
	})

	return foundandIndex
}

// check if deploy id already exist in the array 
function checkDeployId(deployId){
	let foundandIndex ={
		found : false,
		index: null
	}
	
	searchableDeploys.forEach((elem, index )=> {
		if(parseInt(elem.id) == parseInt(deployId) ){
			foundandIndex.found = true 
			foundandIndex.index = index
		}
	})

	return foundandIndex
}



///get the entity name from its id
const getEntityName = (id)=>{

	const allEntitiesName = [ "CMH2", "CMH3", "CMH4", "CMH5", "CMH6", "CMH7", "CMH8", "CMH9", 
	"CMHF", "CMHJ","CMHJ", "CMHW", "ECM2", "ECM3", "ECM4", "ECM5", 
	"ECM6", "EMI", "EMK1", "EMK2", "EMK3", "EMS1", "EMS2", "EMS3",
	"EMS4", "EMS5","EMT",  "TSS2", "TSS3", "TSS4",  "VMS2", "VMS3",
	"VMS4", "VMS5", "EMD1", "LAM", "EMD4", "EMD3", "EMS", "EMD7", 
	"EMD8", "VMS1", "EMD9", "EMD10", "EMD", "EMD12", "ECM3", "EMD13", 
	"EMD14", "ECM2", "EMD15", "EMD16", "TSS", "EMK1", "EMK2", "EMS2", 
	"EMD17", "EMD18", "EMD19", "EMH", "EMD20", "EMI", "EMD21", "EMD22", 
	"EMD23", "VMS3", "TSS2",   "EMS3", "CMH 1 A", "CMH 2 A", "CMH 1 B", "CMH 2 B",
	"VMS2", "TSS3"]

	const allEntitiesID = [54,55 ,56 ,57 ,58 ,59 ,60 ,62,
	64 ,72  ,73 ,74 ,22,19 ,41, 71, 
	77, 34, 26, 27, 75, 9, 28, 43, 
	68, 76, 67, 40,51, 70,50, 53,
	38 , 69 , 1 , 3 , 4 , 6 , 11 ,12,
	 13,14,15,17,18, 19,
	 20,21,
	22,23,24,25,26, 27,28, 29, 30, 31, 32,	33,
	34,	35, 36,	37, 38,	40, 43,45,	46,	47,	48,	50,	51] 

	return allEntitiesName[allEntitiesID.indexOf(id)] 
}

///get mailer name
const getMailerName = (id)=>{
	const allMailersName = ["o.aitslim","h.touza","z.hammou","s.hado", "a.oukk",
							"m.faki" ,"m.kholl","z.boussela" ,"i.azzou" , "i.elba",
							 "m.aitalla","y.choua","a.timmi" , "baj", "a.jebbou", 
							 'i.blilid', 'o.houra','t.saou', 'z.kabi','z.karhou',
							 'z.elgourc', 'r.beylo', 'a.hadou', 'n.kerai', 'h.benlam' ,
							 'a.elkarni' , 'a.elhadd', 'y.ouhann', 'y.bou', 'm.assemr', 
							 'a.boqt', 'c.talhao', 'm.agouzo' ]

	const allMailersID = [1945,2175,1626,2351, 1954,
						 2792,1951,1949,2348,1950,
						 2178,2347,2345,2782, 2788,
						 1601,2687,2177,2349,2690,
						 2784, 1442, 1448,  2332, 2025 ,
	 2138, 2789, 1595, 2783, 1944, 2415, 1435, 2497]  

	return allMailersName[allMailersID.indexOf(id)] 
}

let dataArray = []


function checkDataExist(data){
	let foundandIndex ={
		found : false,
		index : null
	}
	
	dataArray.forEach((elem, index )=> {
		if(elem == data ){
			foundandIndex.found = true 
			foundandIndex.index = index
		}
	})
	return foundandIndex
}

let minvar = false
let nbrvar = false



// GenerateEntitiesBydata 
function GenerateEntitiesBydata(){
	dataArray = []
	cleanData.forEach(elem => {

		let dataLeads = {
			data : '',
			count : 0
		}

		let dataState = checkDataExist(elem)
		let first_ = elem[0].substr(elem[0].indexOf('_') + 1)
		let data = first_.substring(0,first_.indexOf('_'))
		
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

	//generateEntitiesBydata.disabled = true

//	displayIds.disabled = false
//	displayLeads.disabled = false
	//document.querySelector(".nbr_leads_input input").disabled = false

}

// generate table  
function GenerateEntities(){
	cleanEntityTable()
	entitiesTable.length ?(
		entitiesTable.forEach(entity => {
			let tr = document.createElement('tr')
			 
			craeteTableRow(entity.id, tr)
			craeteTableRow(getEntityName(entity.id) ? getEntityName(entity.id) :'--', tr)
			craeteTableRow(entity.count, tr)
			craeteTableRow("$ "+Math.floor(entity.revenue), tr)
			    
			entityTable.appendChild(tr)
		})

		):null 
 
	// generateEntities.disabled = true
}
// generate data table , table best
function GenerateDataTable(){
	// availabelLeadsNbrs = []
	searchableDeploys.length ?(
		searchableDeploys.forEach(elem => {
			let tr = document.createElement('tr')

		 	craeteTableRow(elem.id, tr )
			craeteTableRow(elem.count, tr ) 
			craeteTableRow(elem.entityid, tr ) 
			craeteTableRow(`${Math.floor(elem.revenue)} $`, tr )  
			craeteTableRow(getMailerName(elem.mailerID) ? getMailerName(elem.mailerID ) :  elem.mailerID, tr )  
			 
			elem.count >= 5 ? tr.style.background ='#f9f4cf' : null

			if(minvar){
				  elem.count >= minLeads.value && elem.count < nbrLeads.value  ? dataTable.appendChild(tr) : null

			} else if(nbrvar){
				elem.count >= nbrLeads.value ?  dataTableBest.appendChild(tr) : null
			}
			else  
			// add the row to the table based on it's nbr leads
				elem.count >= nbrLeads.value ?  ( 
					dataTableBest.appendChild(tr) ,
					availabelLeadsNbrs.find((i)=> i == elem.count) ? null :  availabelLeadsNbrs.push(elem.count),  
					console.log(availabelLeadsNbrs)
				)
				:
				elem.count >= minLeads.value ? dataTable.appendChild(tr) : null
 
		})

	):null   
	minvar = false
  	nbrvar = false
}

/////create table row
function craeteTableRow(value, appendTo){
 let elem = document.createElement('td')
 elem.textContent = value
 appendTo.appendChild(elem)
 return elem
}

 
//generateEntitiesBydata.onclick = ()=> GenerateEntitiesBydata()
 /*
nbrLeadsBtn.onclick= ()=>{
	nbrvar = true
	cleanEntityTable()
	GenerateDataTable()
}
minLeadsBtn.onclick= ()=> {
	 minvar= true
	 cleanEntityTable()
	 GenerateDataTable()
}

refreshBtn.addEventListener('click', ()=>{
	//clean the var and inputs 
	offerTitle.textContent = ''
	input.value= ''
	searchableDeploys = []
	entitiesTable = []
	cleanEntityTable()
})
*/

/// remove childs from entity and data table
const cleanEntityTable = () => {
	if(nbrvar){ 
		let dataTableBest_trs = dataTableBest.querySelectorAll('tr')
		dataTableBest_trs.length ?  dataTableBest_trs.forEach(tr => dataTableBest.removeChild(tr) ) : null
	}
	else if(minvar){
		let dataTable_trs = dataTable.querySelectorAll('tr')
		dataTable_trs.length ?  dataTable_trs.forEach(tr => dataTable.removeChild(tr) ) : null

	}
	else{
		let trs = entityTable.querySelectorAll('tr')
		trs.length ?  trs.forEach(tr => entityTable.removeChild(tr) ) : null

		let dataTable_trs = dataTable.querySelectorAll('tr')
		dataTable_trs.length ?  dataTable_trs.forEach(tr => dataTable.removeChild(tr) ) : null

		let dataTableBest_trs = dataTableBest.querySelectorAll('tr')
		dataTableBest_trs.length ?  dataTableBest_trs.forEach(tr => dataTableBest.removeChild(tr) ) : null
	  }
 
}

///display the ids with nbr leads specieifed in the input
/*
displayIds.addEventListener('click', ()=>{

	searchableDeploys.forEach(deploy => deploy.count == document.querySelector(".nbr_leads_input input").value ? bestDeployIDs += `${deploy.id}\n` : null )
	bestDeployIDs ?
		prompt(`you have ${bestDeployIDs.split('\n').length-1} deploys with this NbrLeads!!!`, bestDeployIDs)
	: 
		alert('nothing found!!')
	bestDeployIDs = ''

})*/
/*
displayLeads.addEventListener('click', ()=>{
	let leads = ''
	availabelLeadsNbrs.forEach(elem => leads += `${elem}  -  `)
 	///alert(`Nbr Leads available ${leads}`)
	displayLeads_txt.textContent = leads
	console.log(availabelLeadsNbrs)
})
*/
</script>


<style scoped> 
h2#offerTitle {
    text-align: center;
    font-size: 17px;
    background: var(--dark);
    color: #eee;
    padding: 5px;
    margin-top: 0
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

.clix_data{
    margin: 10px;
}
 
.sponsors {
    display: flex;
    align-items: center;
    padding: 5px; 
}

.sponsors label {
    display: block;
    cursor: pointer;
    width: 100px;
    background-color: (211 225 245);
    margin-right:5px;
    text-align: center;
    border-radius: 5px;
    font-weight: 500;
    border: 1px solid transparent;
    color: var(--ui_blue);
    padding: 5px;
}

 
input[type=radio]{
    display: none;
}
input[type=radio]:checked + label{
    border-color:var(--ui_blue);
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
}

.btns button:nth-of-type(2) {
    cursor: not-allowed
}
  
</style>
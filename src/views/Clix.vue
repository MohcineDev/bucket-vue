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
        
            <button @click="process" class="process">process</button>
            <button v-if="processClicked" @click="generate" class="generate_entities"  >Generate Entities</button>
            <button v-if="generateClicked" class="generate_entities_bydata">Entities By Data</button>
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


const processClicked = ref(false)
const generateClicked = ref(false)

function process(){
    processClicked.value = true
}
function generate(){
    generateClicked.value = true
}
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

.btns button:nth-of-type(2) {
    cursor: not-allowed
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
</style>
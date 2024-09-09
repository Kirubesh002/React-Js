<template>
    <div id="emTable">
        <p v-if="employe.length<1">No Users</p>
        <table v-else>
        <thead>
           <tr>
           <!-- <th>ID</th> -->
           <th>NAME</th>
           <th>AGE</th>
           <th>MODIFY</th>
           </tr>
        </thead>
        <tbody>
            <tr v-for="emp in employe" :key="emp.id">
                <td v-if="changes ==emp.id">
                    <input type="text" v-model="Eemp.name">
                </td>
                <!-- <td>{{ emp.id }}</td> -->
                <td v-else>{{ emp.name }}</td>
                
                <td v-if="changes ==emp.id">
                    <input type="text" v-model="Eemp.age">
                </td>
                
                <td v-else>{{ emp.age }}</td>
                
                <td v-if="changes ==emp.id">
                    <button @click="editEmp(emp)">Save</button>
                    <button @click="changes=null">Cancel</button>
                </td>
                
                <td v-else>
                    <button @click="handleEdit(emp)">Edit</button>
                    <button @click="$emit('delete:emp',emp.id)">Delete</button>
                </td>
             </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name : 'emTable',
    props : {
        employe:Array
    },
    data(){
        return{
            changes : null,
            Eemp:{
                name:'',
                age:null
            }
        }
    },
    methods : {
        handleEdit(emp){
            this.changes = emp.id
        },
        editEmp(empE){
            if(empE.name =='' || empE.age ==null){
                return;
            }
            this.$emit("edit:Eemps",empE.id,empE);
            this.changes=null;

        }
    }
}
</script>

<style scoped>
button{
    margin :0 0.5rem 0 0 ;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
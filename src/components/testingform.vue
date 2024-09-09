

<style>
.has-err{
    border: 1px solid rgb(173, 0, 0);
}
.has-success{
    color: rgb(0, 182, 0);
}
.has-failure{
    color: rgb(212, 16, 16)
}
#form{
    display: grid;
    align-content: space-between;
    align-items: center;
    justify-items: start;
    gap: 7px;
}
</style>

<template>
    <div id="form">
        <label>NAME</label>
        <input type="text"  
        v-model="user.name"
        :class ="{'has-err':submit&&invalidName}" 
        ref="firstInput"
        />
        <label>AGE</label>
        <input type="number" 
        v-model.number="user.age" min="0"
        :class ="{'has-err':submit&&invalidAge}"
        />
        <button @click="handleSubmit">save</button>
      
        <p class="has-failure" v-if="submit&&error">Please fill required fields!</p>
        <p class="has-success" v-if="success" >Employee successfully added!</p>

    </div>
</template>

<script>
export default {
    name: 'user-form',
    data() {
        return {
            submit: false,
            success: false,
            error: false,
            user: {
                name: '',
                age: null
            }
        }
    },
    methods: {
        handleSubmit() {
            this.submit = true;
            this.clearStatus()
            
            if (this.invalidName || this.invalidAge) {
                this.error = true;
                return;
            }
            this.$emit('add:user', this.user);
            this.$refs.firstInput.focus()
            this.  user = {
                name: '',
                age: null
            },
           
            this.success = true;
            this.error=false;
            this.submit=false;
        },
        clearStatus() {
            this.success = false;
            this.error = false;
        },

    },
    computed: {
        invalidName() {
            return this.user.name === ""
        },
        invalidAge() {
            return this.user.age === null
        }
    }
}
</script>

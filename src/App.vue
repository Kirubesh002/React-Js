<template>
  <h1>CRUD</h1>
  <testingform @add:user="aUser" />
  <testing :employe="em" @delete:emp="deleteEm" />
</template>

<script>
import testing from "./components/testing.vue";
import testingform from "./components/testingform.vue";
export default {
  name: "App",
  components: {
    testing,
    testingform,
  },
  data() {
    return {
      em: [
        // {id:1,name:'abc',age:11},
        // {id:2,name:'def',age:13},
        // {id:3,name:'ghi',age:15}
      ],
    };
  },
  methods: {
    async aUser(use) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "POST",
            body: JSON.stringify(use),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        );
        if (response.ok) {
          const APIdata = await response.json();
          console.log("Data Fetched Successfuly", APIdata);
          this.em = [...this.em, APIdata];
        } else {
          switch (response.status) {
            case 400:
              console.error(
                "Bad Request: The server could not understand the request due to invalid syntax."
              );
              break;
            case 401:
              console.error(
                "Unauthorized: Access is denied due to invalid credentials."
              );
              break;
            case 404:
              console.error(
                "Not Found: The server could not find the requested resource."
              );
              break;
            case 500:
              console.error(
                "Internal Server Error: The server encountered a situation it doesn't know how to handle."
              );
              break;
            default:
              console.error(
                `Unexpected error: ${response.statusText} (Status code: ${response.status})`
              );
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    deleteEm(id) {
      this.em = this.em.filter((emp) => {
        return emp.id != id;
      });
    },
    async getEmp() {
      fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
        .then((response) => response.json())
        .then((json) => console.log(json));
    },
    async modifyEmp() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(res),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
}
</style>

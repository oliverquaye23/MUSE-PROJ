<script setup>
 
</script>

<template>
    <div class="body">
        <div class="container">
    <div class="header">
        <img src="~@/assets/logo-main.png" alt="logo"> 
       <header>Login</header>
    </div>
    <form >
        <div class="inner">
            <label for="username">Username</label>
            <input type="text" placeholder="Enter your username">
            <label for="password">Password</label>
            <input type="password" placeholder="Enter your password" style="margin-bottom: 2px;">
            <h4 style="font-size: 10px;"><a href="#">forgot password?</a></h4>
            <button>login</button>
        </div>
    </form>
    <div class="bottom-text">
        <h4><a href="#">Sign Up</a></h4>
    </div>
  </div> 
</div>
  
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}

.body{
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: rgb(213, 228, 228);
    justify-content: center;
    align-items: center;
}

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    background-color: white;
    border-radius: 15px;
    box-shadow: -3px 2px 39px -1px rgba(0,0,0,0.19);
-webkit-box-shadow: -3px 2px 39px -1px rgba(0,0,0,0.19);
-moz-box-shadow: -3px 2px 39px -1px rgba(0,0,0,0.19);
}

.inner{
    display: flex;
    flex-direction: column;
    margin: 20px;
}

img{
    width: 30px;
    height: 30px;
}

.header{
    font-weight: 700;
    font-size: 30px;
}

label{
    color: rgb(153, 147, 147);
    font-size: 15px;
    margin-bottom: 10px;
}

input{
    border: none;
    border-bottom: 1.5px solid;
    border-color: black;
    font-size: 12px;
    color: black;
    margin-bottom: 10px;
}

a{
    color: rgb(121, 133, 143);
    text-decoration: none;
}

h4{
    font-size: 12px;
    margin-bottom: 10px;
    text-align: right;
}
button{
    border: none;
    background-color: black;
    color: white;
    width: 60px;
    padding: 0 10px 0 10px;
    font-size: 13px;
    margin-left: 40px;
    border-radius: 10px;
}

</style>
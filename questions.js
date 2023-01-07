 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 const firebaseConfig = {
   apiKey: "AIzaSyBsqOpDkXFG6JctrJ0AjU04i24mW_9dwSo",
   authDomain: "quizapp-98689.firebaseapp.com",
   databaseURL: "https://quizapp-98689-default-rtdb.firebaseio.com",
   projectId: "quizapp-98689",
   storageBucket: "quizapp-98689.appspot.com",
   messagingSenderId: "417604771136",
   appId: "1:417604771136:web:8ae5fbafd8da7b47b02ea5",
   measurementId: "G-MNQTKLSLBE"

 };


 // Initialize Firebase

 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const database = getDatabase();

 var option = document.getElementById('option');
 var Question = document.getElementById('Question');
 var CorrectAns = document.getElementById('CorrectAns');
 var correct = document.getElementById('correct');
 var buttons = document.getElementById('buttons');
 var array =[];
 var Options=[];
 var obj={};

 window.addOption = function(){
    Options.push(option.value);
    obj.Options=Options;
    console.log(obj)
    buttons.innerHTML += `<div class="col-md-6 my-2">
        <button type="button" class="btn btn-primary btn-lg w-100 ">${option.value}</button>
        </div>`;
        option.value="";
 }

 window.addCorrect= function(){
    obj.CorrectAns=CorrectAns.value;
    Options.push(CorrectAns.value);
    obj.Options=Options;
    buttons.innerHTML += `<div class="col-md-6 my-2">
        <button type="button" class="btn btn-primary btn-lg w-100 ">${CorrectAns.value}</button>
        </div>`;
    correct.innerHTML=" ";
    CorrectAns.value="";
 }


 window.addQuestion = function(){
    obj.Question=Question.value;
    obj.id=Math.random().toString().slice(2);
    let reference = ref(database,`question/${obj.id}/`);
    set(reference,obj);
 }


$(document).ready(function(){

    var minNumber = 100;
    var maxNumber = 150;
    var minattack = 10;
    var maxattack = 25;
    var minheath = 50;
    var maxheath = 100;
    var pc = {};
    var dp1 = {};
    var dp2 = {};
    var dp3 = {};
    var p1 = {};
    var p2 = {};
    var CP = 0;
    var defeat = [];
    var isdefeat = true;
    var audio = new Audio("assets/Audio/click.mp3");


    var Yoda = {
        name  : "Yoda",
        src: "assets/images/Yoda.gif",
        alt: "Yoda",
        HP : Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber),
        AP : 0

    };
    console.log(Yoda);

    var DV = {
        name  : "Darth Vader",
        src: "assets/images/Darth Vader.gif",
        alt: "Darth Vader",
        HP : Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber),
        AP : 0

    };
    console.log(DV);

    var emp = {
        name  : "The Emperor",
        src: "assets/images/The Emperor.gif",
        alt: "The Emperor",
        HP : Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber),
        AP : 0

    };
    console.log(emp);

    var DM = {
        name  : "Darth Maul",
        src: "assets/images/Darth Maul.gif",
        alt: "Darth Maul",
        HP : Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber),
        AP : 0

    };
    console.log(DM);

    document.getElementById("h1").textContent = Yoda.HP;
    document.getElementById("h2").textContent = DV.HP;
    document.getElementById("h3").textContent = emp.HP;
    document.getElementById("h4").textContent = DM.HP;

    //When you click on Yoda
    $("#s1").on("click", function(){
        audio.play();
        pc= Yoda;
        console.log(pc.name);
        $("#s1").hide();
        document.getElementById("mp1").textContent = pc.name;
        $("#m1").attr("src" ,pc.src);
        $("#m1").attr("alt" ,pc.alt);
        $("#ms1").css("background-color", "aliceblue");
        document.getElementById("mh1").textContent = pc.HP;

        dp1= DV;
        console.log(dp1.name);
        $("#s2").hide();
        document.getElementById("mp2").textContent = dp1.name;
        $("#m2").attr("src" ,dp1.src);
        $("#m2").attr("alt" ,dp1.alt);
        $("#ms2").css("background-color", "aliceblue");
        document.getElementById("mh2").textContent = dp1.HP;

        dp2= emp;
        console.log(dp2.name);
        $("#s3").hide();
        document.getElementById("mp3").textContent = dp2.name;
        $("#m3").attr("src" ,dp2.src);
        $("#m3").attr("alt" ,dp2.alt);
        $("#ms3").css("background-color", "aliceblue");
        document.getElementById("mh3").textContent = dp2.HP;

        dp3= DM;
        console.log(dp3.name);
        $("#s4").hide();
        document.getElementById("mp4").textContent = dp3.name;
        $("#m4").attr("src" ,dp3.src);
        $("#m4").attr("alt" ,dp3.alt);
        $("#ms4").css("background-color", "aliceblue");
        document.getElementById("mh4").textContent = dp3.HP;



    });


    //When you click on Darth Vader
    $("#s2").on("click", function(){
        audio.play();
        pc= DV;
        console.log(pc.name);
        $("#s1").hide();
        document.getElementById("mp1").textContent = pc.name;
        $("#m1").attr("src" ,pc.src);
        $("#m1").attr("alt" ,pc.alt);
        $("#ms1").css("background-color", "aliceblue");
        document.getElementById("mh1").textContent = pc.HP;

        dp1= Yoda;
        console.log(dp1.name);
        $("#s2").hide();
        document.getElementById("mp2").textContent = dp1.name;
        $("#m2").attr("src" ,dp1.src);
        $("#m2").attr("alt" ,dp1.alt);
        $("#ms2").css("background-color", "aliceblue");
        document.getElementById("mh2").textContent = dp1.HP;

        dp2= emp;
        console.log(dp2.name);
        $("#s3").hide();
        document.getElementById("mp3").textContent = dp2.name;
        $("#m3").attr("src" ,dp2.src);
        $("#m3").attr("alt" ,dp2.alt);
        $("#ms3").css("background-color", "aliceblue");
        document.getElementById("mh3").textContent = dp2.HP;

        dp3= DM;
        console.log(dp3.name);
        $("#s4").hide();
        document.getElementById("mp4").textContent = dp3.name;
        $("#m4").attr("src" ,dp3.src);
        $("#m4").attr("alt" ,dp3.alt);
        $("#ms4").css("background-color", "aliceblue");
        document.getElementById("mh4").textContent = dp3.HP;



    });


    //When you click on The Emperor
    $("#s3").on("click", function(){
        audio.play();
        pc= emp;
        console.log(pc.name);
        $("#s1").hide();
        document.getElementById("mp1").textContent = pc.name;
        $("#m1").attr("src" ,pc.src);
        $("#m1").attr("alt" ,pc.alt);
        $("#ms1").css("background-color", "aliceblue");
        document.getElementById("mh1").textContent = pc.HP;

        dp1= Yoda;
        console.log(dp1.name);
        $("#s2").hide();
        document.getElementById("mp2").textContent = dp1.name;
        $("#m2").attr("src" ,dp1.src);
        $("#m2").attr("alt" ,dp1.alt);
        $("#ms2").css("background-color", "aliceblue");
        document.getElementById("mh2").textContent = dp1.HP;

        dp2= DV;
        console.log(dp2.name);
        $("#s3").hide();
        document.getElementById("mp3").textContent = dp2.name;
        $("#m3").attr("src" ,dp2.src);
        $("#m3").attr("alt" ,dp2.alt);
        $("#ms3").css("background-color", "aliceblue");
        document.getElementById("mh3").textContent = dp2.HP;

        dp3= DM;
        console.log(dp3.name);
        $("#s4").hide();
        document.getElementById("mp4").textContent = dp3.name;
        $("#m4").attr("src" ,dp3.src);
        $("#m4").attr("alt" ,dp3.alt);
        $("#ms4").css("background-color", "aliceblue");
        document.getElementById("mh4").textContent = dp3.HP;

    });



    //When you click on Darth Maul
    $("#s4").on("click", function(){
        audio.play();
        pc= DM;
        console.log(pc.name);
        $("#s1").hide();
        document.getElementById("mp1").textContent = pc.name;
        $("#m1").attr("src" ,pc.src);
        $("#m1").attr("alt" ,pc.alt);
        $("#ms1").css("background-color", "aliceblue");
        document.getElementById("mh1").textContent = pc.HP;

        dp1= Yoda;
        console.log(dp1.name);
        $("#s2").hide();
        document.getElementById("mp2").textContent = dp1.name;
        $("#m2").attr("src" ,dp1.src);
        $("#m2").attr("alt" ,dp1.alt);
        $("#ms2").css("background-color", "aliceblue");
        document.getElementById("mh2").textContent = dp1.HP;

        dp2= DV;
        console.log(dp2.name);
        $("#s3").hide();
        document.getElementById("mp3").textContent = dp2.name;
        $("#m3").attr("src" ,dp2.src);
        $("#m3").attr("alt" ,dp2.alt);
        $("#ms3").css("background-color", "aliceblue");
        document.getElementById("mh3").textContent = dp2.HP;

        dp3= emp;
        console.log(dp3.name);
        $("#s4").hide();
        document.getElementById("mp4").textContent = dp3.name;
        $("#m4").attr("src" ,dp3.src);
        $("#m4").attr("alt" ,dp3.alt);
        $("#ms4").css("background-color", "aliceblue");
        document.getElementById("mh4").textContent = dp3.HP;

    });


    //When you select the defender you want to fight with:

    $("#ms2").on("click", function(){
        p2 = dp1;
        audio.play();
        console.log(p2.name);
        console.log(p2.HP);
        CounterAttack();
        console.log('counterattack', p2.AP);
        $("#ms2").hide();
        $("#p2").attr("src" ,p2.src);
        $("#p2").attr("alt" ,p2.alt);
        document.getElementById("DHP").textContent = p2.HP;
        document.getElementById("DAP").textContent = p2.AP;


    })

    $("#ms3").on("click", function(){
        p2 = dp2;
        audio.play();
        console.log(p2.name);
        console.log(p2.HP);
        CounterAttack();
        console.log('counterattack', p2.AP);
        $("#ms3").hide();
        $("#p2").attr("src" ,p2.src);
        $("#p2").attr("alt" ,p2.alt);
        document.getElementById("DHP").textContent = p2.HP;
        document.getElementById("DAP").textContent = p2.AP;


    })


    $("#ms1").on("click", function(){
        audio.play();
        console.log("YOU clicked me");
        p1= pc;
        console.log(p1.name);
        p1.AP = Math.floor(Math.random()*(maxattack-minattack+1)+minattack);
        $("#ms1").hide();
        $("#p1").attr("src" ,p1.src);
        $("#p1").attr("alt" ,p1.alt);
        document.getElementById("AHP").textContent = p1.HP;
        document.getElementById("AAP").textContent = p1.AP;

    })


    $("#ms4").on("click", function(){
        p2 = dp3;
        audio.play();
        console.log(p2.name);
        console.log(p2.HP);
        CounterAttack();
        console.log('counterattack', p2.AP);
        $("#ms4").hide();
        $("#p2").attr("src" ,p2.src);
        $("#p2").attr("alt" ,p2.alt);
        document.getElementById("DHP").textContent = p2.HP;
        document.getElementById("DAP").textContent = p2.AP;


    })


    $(".attack").on("click", function(){
        healthpoint();
        document.getElementById("DHP").textContent = p2.HP;
        document.getElementById("AHP").textContent = p1.HP;
        console.log(p2.HP);
        console.log(p1.HP);
        attackpoint();
        console.log(p2.AP);
        console.log(p1.AP);
        tie();
        defeated();
        newdefender();
    })







///Defining all the function at the bottom:

    //Generating CA based on Heath Points for Defenders
    function CounterAttack(){
        if(p2.HP>=125){
            p2.AP = 40;
        }
        if(p2.HP>=100 && p2.HP<125){
            p2.AP = 30;
        }
        if(p2.HP>=50 && p2.HP<100){
            arg.AP = 25;
        }
        if(p2.HP<50){
            p2.AP = 20;
        }
    }

    //Function to decrease the HP of both attacher and defender
    function healthpoint(){
        p2.HP = p2.HP - p1.AP;
        p1.HP = p1.HP - p2.AP;

    } 

    //Function to changes the Attack Power of attacher after every click

    function attackpoint(){
        p1.AP = p1.AP + Math.floor(Math.random()*(maxattack-minattack+1)+minattack);
        document.getElementById("AAP").textContent = p1.AP;

    }

    function defeated(){
        if (p1.HP <= 0 && p2.HP>0){
            alert("YOU ARE DEFEATED BY THE DEFENDERS")
            document.getElementById("AHP").textContent = 0;

            //TODO Call the reset function

            reset();
        }
    }

    function tie(){

        if((p1.HP>0 && (p2.HP-p1.AP)<=0) && p2.HP>0 && (p1.HP-p2.AP)<=0){
            alert("It's a TIE");
            document.getElementById("AHP").textContent = 0;
            document.getElementById("DHP").textContent = 0;

            reset();
        }
    }

    function newdefender(){
        if(
            (p2.HP <= 0 && p1.HP>0) 
            ){
            document.getElementById("DHP").textContent = 0;
            defeat.push(p2.name);
            console.log(defeat);
            p1.HP = p1.HP + Math.floor(Math.random()*(maxheath-minheath+1)+minheath);
            console.log(p1.AP);
            document.getElementById("AHP").textContent = p1.HP;
            $("#p2").attr("src", "");
            $("#p2").attr("alt", "");
            $("#DHP").empty();
            $("#DAP").empty();

            // if (defeat.length ==3){
            // //assigning a new defender to 
            //     p2 = dp2;
            //     console.log(p2.name);
            //     console.log(p2.HP);
            //     CounterAttack();
            //     console.log('counterattack', p2.AP);
            //     $("#ms3").hide();
            //     $("#p2").attr("src" ,p2.src);
            //     $("#p2").attr("alt" ,p2.alt);
            //     document.getElementById("DHP").textContent = p2.HP;
            //     document.getElementById("DAP").textContent = p2.AP;

            // }

            // if (defeat.length ==2){
            //     //assigning a new defender to 
            //         p2 = dp3;
    
            //         console.log(p2.name);
            //         console.log(p2.HP);
            //         CounterAttack();
            //         console.log('counterattack', p2.AP);
            //         $("#ms4").hide();
            //         $("#p2").attr("src" ,p2.src);
            //         $("#p2").attr("alt" ,p2.alt);
            //         document.getElementById("DHP").textContent = p2.HP;
            //         document.getElementById("DAP").textContent = p2.AP;
    
            // }

            if(defeat.length == 3){
                alert("YOU DEFEATED ALL THE DEFENDERS");

                //TODO Call the reset function

                reset();

            }else{
                alert("Choose another defender. You defeat all to win");
            }          
            
        }
    }


    function reset(){

        location.reload(true);

        // $("#p2").attr("src", "");
        // $("#p2").attr("alt", "");
        // $("#DHP").empty();
        // $("#DAP").empty();
        // $("#p1").attr("src", "");
        // $("#p1").attr("alt", "");
        // $("#AHP").empty();
        // $("#AAP").empty();

        // $("#s1").show();
        // $("#s2").show();
        // $("#s3").show();
        // $("#s4").show();
        
        // $("#c1").attr("src", yoda.src);
        // $("#c1").attr("alt", yoda.alt);
        // document.getElementById("h1").textContent = yoda.HP;
        // document.getElementById("1").textContent = yoda.name;
        
        // $("#c2").attr("src", DV.src);
        // $("#c2").attr("alt", DV.alt);
        // document.getElementById("h2").textContent = DV.HP;
        // document.getElementById("2").textContent = DV.name;

        // $("#c3").attr("src", emp.src);
        // $("#c3").attr("alt", emp.alt);
        // document.getElementById("h3").textContent = emp.HP;
        // document.getElementById("3").textContent = emp.name;

        // $("#c4").attr("src", DM.src);
        // $("#c4").attr("alt", DM.alt);
        // document.getElementById("h4").textContent = DM.HP;
        // document.getElementById("4").textContent = DM.name;




    }














});

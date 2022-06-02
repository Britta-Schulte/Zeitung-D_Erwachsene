PennController.ResetPrefix(null);
PennController.AddHost("https://amor.cms.hu-berlin.de/~idlsfbnd/zeitungsstudie/");
PennController.DebugOff();

Sequence("Info","Rechte","Code","Einverständniserklärung","Zustimmung","Anleitung","Counter","Trial","Meta1","Meta2");
SetCounter("Counter","inc",1);

//WILLKOMMENSSEITE & INFOBLATT
newTrial("Info",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
   
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,
    newHtml("willkommen", "information.html")
        .center()
        .print()
    ,
  
    newButton("Weiter_Alter","Ich bin über 18 Jahre. Weiter zur Aufklärug über Rechte und Wiederruf")
        .center()
        .print()
    ,
    newText("Leerzeile"," <br></p>")
        .print()
    ,
    getButton("Weiter_Alter")
        .wait()
)
    ,
//Rechte
newTrial("Rechte",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,

    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,
    newHtml("Rechte", "rechte.html")
        .center()
        .print()
    ,

    newButton("weiter","Weiter")
        .center()
        .print()
    ,
    newText("Leerzeile"," <br></p>")
        .print()
    ,
    getButton("weiter")
        .wait()
)
    ,
//EINVERSTÄNDNISERKLÄRUNG
newTrial("Einverständniserklärung",
newImage("HU","HU Logo.png")
        .size(289,65)
    ,
   
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
   ,
   newHtml("Einwilligung","einwilligung.html")
        .center()
        .print()
    ,
   
    newButton("Weiter", "Weiter")
        .center()
        .print()
    ,
    newText("Leerzeile"," <br></p>")
        .print()
    ,
    getButton("Weiter")
        .wait()
    )
,

//Zustimmung
newTrial("Zustimmung",
newImage("HU","HU Logo.png")
        .size(289,65)
    ,
   
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
   ,
   newHtml("Zustimmung","zustimmung.html")
        .center()
        .print()
    ,
    newText("Leerzeile"," <br></p>")
        .print()
    ,
   newButton("Zustimmen","Ich stimme allen eben genannten Punkten ausdrücklich zu und willige ein, das Experiment zu beginnen.")
        .center()
        .log()
        .print()
    ,    
    getButton("Zustimmen")
        .wait()
)
,
//CODE-EINGABE
newTrial("Code",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
        newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,
   
    newHtml("Code", "code.html")
        .center()
        .print()
    ,
    newCanvas("Code-Textfeld", 1, 10)
        .center()
        .print()
,
    newTextInput("Texteingabe-Code")
        .center()
        .print()
,
    newText("Leerzeile"," <br></p>")
        .center()
        .print()
,
    getTextInput("Texteingabe-Code")
        .wait()
        .settings.log("final")
,
    newText("Danke","Vielen Dank! Als nächstes folgt eine Anleitung für das Experiment. Klicken Sie bitte auf den Button.<b></p>")
        .center()
        .print()
,
    newButton("weiter","Weiter zur Anleitung")
        .center()
        .print()
,
    newText("Leerzeile"," <br></p>")
        .center()
        .print()
,
    getButton("weiter")
        .wait(getTextinput("Texteingabe-Code").test.text(/[a-z]+/))
        )
,

//Anleitung
    newTrial("Anleitung",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,
        newHtml("Anleitung","anleitung.html")
        .center()
        .print()
    ,
    newImage("Erklärbild","Erklärbild.png")
        .size(750,350)
        .print()
    ,
    newCanvas("Erklärung", 1, 10)
        .center()
        .print()
    ,
    newText("Test", "<font color=#DF0101> Probieren Sie dies hier einmal aus und geben Sie einen beliebigen Text ein. Bestätigen Sie die Eingabe mit <strong>Enter</strong>. Danach können Sie das Experiment starten.</font>")
        .center()
        .print()
    ,
    newText("Leerzeile"," <br></p>")
        .center()
        .print()
    ,
    
    newTextInput("Probe")
        .center()
        .print()
    ,
    getTextInput("Probe")
        .wait()
    ,
    
    newText("Weiter","<p><br>Klicken Sie nun bitte auf den Button, um das Experiment zu beginnen.")
        .center()
        .print()
    ,
    newButton("Weiter","Experiment beginnen")
        .center()
        .print()
        .wait()
        );

//Zeitung
Template(
    GetTable("BListenaufteilung.csv")
    .setGroupColumn( "Liste" )
    ,
    row => newTrial( "Trial" ,
        defaultImage.css("margin","1em")
        ,
        newImage("Header","BHeader.png").center().print()
        ,
        newCanvas("Top_nebeneinander","auto","auto")
            .add(420,40, newTextInput("Top_Korrektur").size(200,140) )
            .center().print()
        ,
        newImage("TopImage",row.TopImage).print( getCanvas("Top_nebeneinander") )
        ,
        newCanvas("Bottom_nebeneinander","auto","auto")
            .add(420,40, newTextInput("Bottom_Korrektur").size(200,140) )
            .center().print()
        ,
        newImage("BottomImage",row.BottomImage).print( getCanvas("Bottom_nebeneinander") )
        ,
        getTextInput("Top_Korrektur").settings.log("final")
        ,             
        getTextInput("Bottom_Korrektur").settings.log("final")
        ,             
        newButton("Weiter","Weiter").center().print().wait(getTextInput("Top_Korrektur").test.text(/[a-z]+/),getTextInput("Bottom_Korrektur").test.text(/[a-z]+/))
    )
    .log( "Group" , row.Liste  )
    .log( "TopText",row.TopImage )
    .log("BottomText",row.BottomImage)
);
    //Metadaten
    //Personenbezogene Daten Seite 1 - Alter, Geschlecht, Bildung, Sozialerstatus
newTrial("Meta1",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(230,60)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(450,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,

    newText("Meta-1", "<b>Personenbezogene Daten</b> <p>Wir brauchen einige persönliche Angaben von Ihnen. Diese werden anonymisiert gespeichert und eine spätere Zuordnung zu Ihnen wird nicht möglich sein. Bitte nehmen Sie sich beim Ausfüllen der Felder Zeit.<p>")
 //       .settings.css("text-align","justify")
        .center()
        .print()

               ,
               newCanvas("democanvas", 800,120)
               .settings.add(0,0, getText("Meta-1"))
               //.settings.center()
               .print()
               ,
               //Alter
               newDropDown("age", "Bitte eine Option ausw&auml;hlen")
               .settings.add("18" , "19" , "20", "21" , "22" , "23", "24" , "25" , "26", "27" , "28" , "29", "30" , "31", "32","33", "34" , "35", "36","37","38","39","40-50","51-60","über 61")
               .log()

               ,
               newText("agetext", "Alter:")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newCanvas("agecanvas", 1000, 40)
               .settings.add(0,0,getText("agetext"))
               .settings.add(450,2, getDropDown("age"))
               //.settings.center()
               .print()
               ,
               //Geschlecht
               newText("sex", "Geschlecht:")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newDropDown("sex", "Bitte eine Option ausw&auml;hlen")
               .settings.add("Weiblich", "M&auml;nnlich", "Divers")
               .log()
               ,
               newCanvas("sexcanvas", 1000, 40)
               .settings.add(0, 0, getText("sex"))
               .settings.add(450,3, getDropDown("sex"))
               //.settings.center()
               .print()
               ,
               //Wohnort
               newText("wohnort", "Wohnort (Stadt, Region):")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newTextInput("wohnort")

               .log()
               ,
               newCanvas("wohnortcanvas", 1000, 40)
               .settings.add(0, 0, getText("wohnort"))
               .settings.add(450,3, getTextInput("wohnort"))
               //.settings.center()
               .print()
               ,
                newText("Leerzeile"," <br></p>")
                  .center()
                .print()
                 ,
                 //aufgewachsen
            newText("aufgewachsen", "Wo sind Sie aufgewachsen?")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newTextInput("aufgewachsen")
                .log()
               //.settings.size(200,40)
               ,
               newCanvas("aufgewachsen", 1000,40)
               .settings.add(0,0, getText("aufgewachsen"))
               .settings.add(450,4,getTextInput("aufgewachsen"))
               //.settings.center()
               .print()
               ,
               newText("Leerzeile"," <br></p>")
                  .center()
                .print()
                 ,
                 //Abschluss
                newText("abschluss", "H&ouml;chster Bildungsabschluss:")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newDropDown("abschluss", "Bitte eine Option ausw&auml;hlen")
               .settings.add("kein Abschluss","Schulabschluss","Abitur oder gleichwertiger Abschluss","Studium ohne Abschluss","Bachelor","Master", "Promotion","Magister","Diplom", "Ausbildung", "Sonstige")     // MAYBE ADD QUESTIONS ABOUT DIALECT AND DOMINANT HAND
               //.settings.size(191,20)
               .log()
               ,
               newCanvas("abschlusscanvas", 1000, 40)
               .settings.add(0, 0, getText("abschluss"))
               .settings.add(470,4, getDropDown("abschluss"))
               //.settings.center()
               .print()
               ,
         //Schulbesuch
               newText("schulbesuch", "Falls Sie derzeit eine Schule besuchen, was für eine Schule besuchen Sie?")
               .settings.css("font-size", "18px")
               .settings.bold()
               ,
               newDropDown("schulbesuch", "Bitte eine Option ausw&auml;hlen")
               .settings.add("Grundschule","Integrierte Sekundarschule (ISS)","Gymnasium","Fachgymnasium","Schulausbildung bereits beendet","Sonstige")     // MAYBE ADD QUESTIONS ABOUT DIALECT AND DOMINANT HAND
               //.settings.size(191,20)
               .log()
               ,
               newCanvas("schulbesuchcanvas", 1000, 40)
               .settings.add(0, 0, getText("schulbesuch"))
               .settings.add(470,4, getDropDown("schulbesuch"))
               //.settings.center()
               .print()
               ,
               //Schule
               newText("schule","<b>Sind Sie in Deutschland zur Schule gegangen?</b><br><small>(Falls nein, wo?)</small><br><br>")
               .settings.css("font-size", "18px")

               ,
               newTextInput("schuleinput")
               .settings.size(150,40)
               .log()
               .settings.hidden()
               ,
               newText("schule_input", "")
               .settings.after(getTextInput("schuleinput"))
               ,
               newDropDown("schule",  "<br>" +"Bitte eine Option ausw&auml;hlen")
               .settings.add("Ja","Nein")
               .log()
               .settings.after(getText("schule_input"))
               .settings.callback(
                   getDropDown("schule")
                   .test.selected("Nein")
                   .success(getTextInput("schuleinput").settings.visible())

                    )
               ,
               newCanvas("schule",1000, 40)
               .settings.add(0, 0, getText("schule"))
               .settings.add(470,3, getDropDown("schule"))
               //.settings.center()
               .print()
               ,
               newCanvas("filler", 1, 20)

               .print()
               ,
               //Studium
               newText("studium","<b>Studieren Sie?</b><br><small>(Falls ja, welches Fach und Fachsemester?)</small><br><br>")
               .settings.css("font-size", "18px")

               ,
               newTextInput("studiuminput")
               .settings.size(150,40)
               .log()
               .settings.hidden()
               ,
               newText("studium_input", "")
               .settings.after(getTextInput("studiuminput"))
               ,
               newDropDown("studium",  "<br>" +"Bitte eine Option ausw&auml;hlen")
               .settings.add("Ja", "Nein")
               .log()
               .settings.after(getText("studium_input"))
               .settings.callback(
                   getDropDown("studium")
                   .test.selected("Ja")
                   .success(getTextInput("studiuminput").settings.visible(

                   )) )
               ,
               newCanvas("studium", 1000, 40)
               .settings.add(0, 0, getText("studium"))
               .settings.add(500,3, getDropDown("studium"))
               //.settings.center()
               .print()
               ,
               newCanvas("filler", 1, 20)
               .print()
               ,
    newButton("continue", "Weiter")
               .settings.css("font-family", "calibri").settings.css("font-size", "12px")
               //.settings.center()
               .log()
               .center()
               .print()
               .wait(
            newFunction('dummy', ()=>true).test.is(true)
            // age
            .and( getDropDown("age").test.selected()
                    .failure( newText('errorage', "<br>Bitte Alter angeben.").color("red") .center().print() )
            // sex
            ).and( getDropDown("sex").test.selected()
                    .failure( newText('errorsex', "<br>Bitte Geschlecht angeben.").color("red") .center().print() )
             // abschluss
            ) .and( getDropDown("abschluss").test.selected()
                    .failure( newText('errorabschluss', "<br>Bitte höchsten Abschluss angeben.").color("red") .center().print() )

            ).and( getDropDown("studium").test.selected()
                   .failure( newText('errorstudium', "<br>Bitte Studium angeben.").color("red") .center().print() )
             ).and( getDropDown("schule").test.selected()
                   .failure( newText('errorschule', "<br>Bitte Land der Beschulung angeben.").color("red") .center().print() )

            ).and(
             getTextInput("wohnort").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("wohnorter","<br>Bitte Wohnort angeben")
                   .settings.color("red")
                   .center()
                   .print())
                ).and(
             getTextInput("aufgewachsen").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("aufgewachsener","<br>Bitte angeben, wo Sie aufgewachsen sind.")
                   .settings.color("red")
                   .center()
                   .print())

            )  )
               ,
               getDropDown("age").wait("first")
               ,
               getDropDown("sex").wait("first")
               ,
                getDropDown("studium").wait("first")
               ,
               getDropDown("abschluss").wait("first")
  )
  ,
  //Metadaten 2: Sprachbiographie
newTrial("Meta2",
    newImage("HU","HU Logo.png")
         .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(230,60)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(450,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,
       newText("SprachenMutter","<b>Welche Sprachen spricht/sprach Ihre Mutter im Alltag?</b><br>Bitte sortieren und mit der am besten gesprochenen Sprache beginnen.")
 //       .center()
        .print()
,
    newCanvas("SprachenMutter", 1, 10)
        .center()
        .print()
,
    newTextInput("SprachenMutter")
 //       .center()
        .size(600,80)
        .print()
,
    getTextInput("SprachenMutter")
        .log("final")
,
newText("Leerzeile"," <br></p>")
    .center()
    .print()
,
    newText("SprachenVater","<b>Welche Sprachen spricht/sprach Ihr Vater im Alltag?</b><br> Bitte sortieren und mit der am besten gesprochenen Sprache beginnen.")
  //      .center()
        .print()
,
    newCanvas("SprachenVater", 1, 10)
//        .center()
        .print()
,
    newTextInput("SprachenVater")
//        .center()
        .size(600,80)
        .print()
,
    getTextInput("SprachenVater")
        .log("final")
               ,
               newText("Leerzeile"," <br></p>")
                 .center()
                .print()
                 ,
       newText("SprachenSelbst","<b>Welche Sprachen sprechen Sie selbst im Alltag?</b><br> Mit wem und in welchen Situationen? Bitte sortieren und mit der am häufigsten gesprochenen Sprache beginnen.")
 //       .center()
        .print()
,
    newCanvas("SprachenSelbst", 1, 10)
 //       .center()
        .print()
,
    newTextInput("SprachenSelbst")
  //      .center()
        .size(600,80)
        .print()
,
    getTextInput("SprachenSelbst")
        .log("final")
    ,
 newText("Leerzeile"," <br></p>")
                 .center()
                .print()
                 ,

 newText("Dialekt","<b>Sprechen Sie einen Dialekt?</b><br> Mit wem und in welchen Situationen?")
//        .center()
        .print()
,
    newCanvas("Dialekt", 1, 10)
 //       .center()
        .print()
,

    newTextInput("Dialekt")
 //       .center()
 .size(600,80)
        .print()
,
    getTextInput("Dialekt")
        .log("final")
,

newText("Leerzeile"," <br></p>")
                 .center()
                .print()
                 ,
newText("Email","<b>Dürften wir Sie in Zukunft erneut kontaktieren?</b><br>Wenn ja, bitte Emailadresse angeben.<br>Die Angabe der Kontaktdaten ist freiwillig. Um Anonymität zu gewährleisten, wird diese Angabe getrennt vom ausgefüllten Fragebogen archiviert.")
//        .center()
        .print()
,
    newCanvas("Email", 1, 10)
 //       .center()
        .print()
,

    newTextInput("Email")
 //       .center()
        .size(600,80)
        .print()
,
    getTextInput("Email")
        .log("final")
,
newText("Leerzeile"," <br></p>")
                 .center()
                .print()
                 ,

    newButton("Ende", "Experiment beenden und Daten abschicken")
               .settings.css("font-family", "calibri").settings.css("font-size", "18px")
               //.settings.center()
               .log()
               .center()
               .print()
               .wait(
            newFunction('dummy', ()=>true).test.is(true)
                .and(
             getTextInput("SprachenMutter").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("errormutter","<br>Bitte Sprachen der Mutter angeben")
                   .settings.color("red")
                   .center()
                   .print()
                   )
                ).and(
             getTextInput("SprachenVater").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("errorvater","<br>Bitte Sprachen des Vaters angeben.")
                   .settings.color("red")
                   .center()
                   .print()
                   )
                ).and(
             getTextInput("SprachenSelbst").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("errorselbst","<br>Bitte angeben, welche Sprachen Sie sprechen.")
                   .settings.color("red")
                   .center()
                   .print()
                   )
            ).and(
             getTextInput("Dialekt").test.text(/^.+/) // testing if at least one digit was written in the input box
                .failure(
                   newText("errordialekt","<br>Bitte Dialekt angeben.")
                   .settings.color("red")
                   .center()
                   .print())
            ) 

            )
 )
,
// Send results manually
SendResults("send");

newTrial("Final",
         newText("<p>Vielen Dank f&uuml;r Ihre Teilnahme! Die Studie ist hiermit beendet. </p>")
            .settings.css("font-family","times new roman") .settings.css("font-size", "18px")
            .settings.center()
            .print()
        ,

        newText ("<p>Sie können das Fenster jetzt schließen.")
            .settings.css("font-family","times new roman") .settings.css("font-size", "18px")
            .settings.center()
            .print()
        ,
        newButton("void", "")
            .wait()


   );

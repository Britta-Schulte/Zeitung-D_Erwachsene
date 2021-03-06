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
        newButton("Weiter","Weiter").center().print().wait()
    )
    .log( "Group" , row.Liste  )
    .log( "TopText",row.TopImage )
    .log("BottomText",row.BottomImage)
);
    //Metadaten
newTrial("Meta1",
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
    newText("Meta-1", "<p>Vielen Dank für die Teilnahme!<br></p>Nun ben&ouml;tigen wir noch biographische Informationen. Bitte beantworten Sie die Fragen in den Textfeldern und best&auml;tigen wie gehabt mit <b>Enter</b>. Falls Sie mehr Platz ben&ouml;tigen sollten, k&ouml;nnen Sie das Textfeld an seiner rechten unteren Ecke anklicken, gedr&uuml;ckt halten und gr&ouml;ßer ziehen.")
        .center()
        .print()
,
    newText("Kommentare","<br><b>Ist Ihnen etwas aufgefallen oder haben Sie Kommentare?</b></p>")
        .center()
        .print()
,
    newTextInput("weitereKommentare")
        .center()
        .print()
,
    getTextInput("weitereKommentare").settings.log("final")
,
    newText("Geburtsjahr","<p>In welchem Jahr sind Sie geboren?")
        .center()
        .print()
,
    newCanvas("Geburtsjahr", 1, 10)
        .center()
        .print()
,
    newTextInput("Geburtsjahr")
        .center()
        .print()
,
    getTextInput("Geburtsjahr")
        .settings.log("final")
,
    newText("Geschlecht","<p>Geschlecht:")
        .center()
        .print()
,
    newCanvas("Geschlecht", 1, 10)
        .center()
        .print()
,
    newTextInput("Geschlecht")
        .center()
        .print()
,
    getTextInput("Geschlecht")
        .settings.log("final")
,
    newText("Geburtsort", "<p>Geburtsort (Stadt, Region):")
        .center()
        .print()
,
    newCanvas("Geburtsort", 1, 10)
        .center()
        .print()
,
    newTextInput("Geburtsort")
        .center()
        .print()
,
    getTextInput("Geburtsort")
        .settings.log("final")
,
    newText("Aufgewachsen","<p>Wo sind Sie aufgewachsen?")
        .center()
        .print()
,
    newCanvas("Aufgewachsen", 1, 10)
        .center()
        .print()
,
    newTextInput("Aufgewachsen")
        .center()
        .print()
,
    getTextInput("Aufgewachsen")
        .settings.log("final")
,    
    newText("Wohnort","<p>Wohnort (Stadt, Region):")
        .center()
        .print()
,
    newCanvas("Wohnort", 1, 10)
        .center()
        .print()
,
    newTextInput("Wohnort")
        .center()
        .print()
,
    getTextInput("Wohnort")
        .settings.log("final")
,       
newText("Bildungsabschluss","<p>Was ist Ihr höchster Bildungsabschluss")
        .center()
        .print()
,
    newCanvas("Bildungsabschluss", 1, 10)
        .center()
        .print()
,
    newTextInput("Bildungsabschluss")
        .center()
        .print()
,
    getTextInput("Bildungsabschluss")
        .settings.log("final")
,
     newText("Studium","Falls Sie studieren: Welches Fach?")
        .center()
        .print()
,
    newCanvas("Studium", 1, 10)
        .center()
        .print()
,
    newTextInput("Studium")
        .center()
        .print()
,
    getTextInput("Studium")
        .settings.log("final")
,
 newText("Semester","In welchem Fachsemester sind Sie?")
        .center()
        .print()
,
    newCanvas("Semester", 1, 10)
        .center()
        .print()
,
    newTextInput("Semester")
        .center()
        .print()
,
    getTextInput("Semester")
        .settings.log("final")
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
//Metadaten2
newTrial("Meta2",
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
    newText("SprachenMutter","<p>Welche Sprachen spricht/sprach Ihre Mutter? Bitte sortieren und mit der am besten gesprochenen Sprache beginnen.")
        .center()
        .print()
,
    newCanvas("SprachenMutter", 1, 10)
        .center()
        .print()
,
    newTextInput("SprachenMutter")
        .center()
        .print()
,
    getTextInput("SprachenMutter")
        .settings.log("final")
,
    newText("SprachenVater","<p>Welche Sprachen spricht/sprach Ihr Vater? Bitte sortieren und mit der am besten gesprochenen Sprache beginnen.")
        .center()
        .print()
,
    newCanvas("SprachenVater", 1, 10)
        .center()
        .print()
,
    newTextInput("SprachenVater")
        .center()
        .print()
,
    getTextInput("SprachenVater")
        .settings.log("final")
,
    newText("SprachenSelbst","<p>Welche Sprachen sprechen Sie selbst im Alltag? Mit wem und in welchen Situationen? Bitte sortieren und mit der am häufigsten gesprochenen Sprache beginnen.")
        .center()
        .print()
,
    newCanvas("SprachenSelbst", 1, 10)
        .center()
        .print()
,
    newTextInput("SprachenSelbst")
        .center()
        .print()
,
    getTextInput("SprachenSelbst")
        .settings.log("final")
       
,
 newText("Dialekt","Sprechen Sie einen Dialekt? Mit wem und in welchen Situationen?")
        .center()
        .print()
,
    newCanvas("Dialekt", 1, 10)
        .center()
        .print()
,
    newTextInput("Dialekt")
        .center()
        .print()
,
    getTextInput("Dialekt")
        .settings.log("final")
,        
    newText("Danke","<p>Vielen Dank f&uuml;r Ihre Teilnahme! Dürfen wir Sie in Zukunft erneut kontaktieren? Wenn ja, geben Sie bitte ihre E-Mailadresse in das Textfeld ein. Wenn nein, lassen Sie das Textfeld bitte einfach frei. <br><p>Die Angabe der Kontaktdaten ist freiwillig. Um Anonymität zu gewährleisten, wird diese Angabe getrennt vom ausgefüllten Fragebogen archiviert.")
        .center()
        .print()
,
    newTextInput("Kontaktinfo")
        .center()
        .print()
,
    getTextInput("Kontaktinfo")
        .settings.log("final")
,
    newText("Leerzeile","<br>")
        .print()
,
    newButton("Ende","Ergebnisse abschicken und beenden")
        .center()
        .print()
        .wait()
);

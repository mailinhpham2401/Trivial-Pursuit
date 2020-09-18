var app = angular.module("quizApp", []);

console.log("called");

app.directive("quiz", function (
  quizFactory,
  quizFactory2,
  quizFactory3,
  quizFactory4,
  quizFactory5,
  quizFactory6
) {
  return {
    restrict: "AE",
    scope: {},
    templateUrl: "template.html",
    link: function (scope) {
      // Projektmanagement
      scope.start = function () {
        scope.id = 0;
        scope.quizOver = false;
        scope.inProgress = true;
        scope.getQuestion();
      };

      scope.reset = function () {
        scope.inProgress = false;
      };

      scope.getQuestion = function () {
        var q = quizFactory.getQuestion(scope.id);
        if (q) {
          scope.question = q.question;
          scope.options = q.options;
          scope.answer = q.answer;
          scope.answerMode = true;
        } else {
          scope.quizOver = true;
        }
      };

      scope.checkAnswer = function () {
        if (!$("input[name=answer]:checked").length) return;

        var ans = $("input[name=answer]:checked").val();

        if (ans == scope.options[scope.answer]) {
          scope.correctAns = true;
        } else {
          scope.correctAns = false;
        }

        scope.answerMode = false;
      };

      scope.nextQuestion = function () {
        scope.id++;
        scope.getQuestion();
      };

      scope.reset();

      //AV-Technik
      scope.start2 = function () {
        scope.id = 0;
        scope.quizOver2 = false;
        scope.inProgress2 = true;
        scope.getQuestion2();
      };

      scope.reset2 = function () {
        scope.inProgress2 = false;
      };

      scope.getQuestion2 = function () {
        var q = quizFactory2.getQuestion2(scope.id);
        if (q) {
          scope.question2 = q.question2;
          scope.options2 = q.options2;
          scope.answer2 = q.answer2;
          scope.answerMode2 = true;
        } else {
          scope.quizOver2 = true;
        }
      };

      scope.checkAnswer2 = function () {
        if (!$("input[name=answer2]:checked").length) return;

        var ans = $("input[name=answer2]:checked").val();

        if (ans == scope.options2[scope.answer2]) {
          scope.correctAns2 = true;
        } else {
          scope.correctAns2 = false;
        }

        scope.answerMode2 = false;
      };

      scope.nextQuestion2 = function () {
        scope.id++;
        scope.getQuestion2();
      };

      scope.reset2();

      //Informatik
      scope.start3 = function () {
        scope.id = 0;
        scope.quizOver3 = false;
        scope.inProgress3 = true;
        scope.getQuestion3();
      };

      scope.reset3 = function () {
        scope.inProgress3 = false;
      };

      scope.getQuestion3 = function () {
        var q = quizFactory3.getQuestion3(scope.id);
        if (q) {
          scope.question3 = q.question3;
          scope.options3 = q.options3;
          scope.answer3 = q.answer3;
          scope.answerMode3 = true;
        } else {
          scope.quizOver3 = true;
        }
      };

      scope.checkAnswer3 = function () {
        if (!$("input[name=answer3]:checked").length) return;

        var ans = $("input[name=answer3]:checked").val();

        if (ans == scope.options3[scope.answer3]) {
          scope.correctAns3 = true;
        } else {
          scope.correctAns3 = false;
        }

        scope.answerMode3 = false;
      };

      scope.nextQuestion3 = function () {
        scope.id++;
        scope.getQuestion3();
      };

      scope.reset3();

      //Medienrecht
      scope.start4 = function () {
        scope.id = 0;
        scope.quizOver4 = false;
        scope.inProgress4 = true;
        scope.getQuestion4();
      };

      scope.reset4 = function () {
        scope.inProgress4 = false;
      };

      scope.getQuestion4 = function () {
        var q = quizFactory4.getQuestion4(scope.id);
        if (q) {
          scope.question4 = q.question4;
          scope.options4 = q.options4;
          scope.answer4 = q.answer4;
          scope.answerMode4 = true;
        } else {
          scope.quizOver4 = true;
        }
      };

      scope.checkAnswer4 = function () {
        if (!$("input[name=answer4]:checked").length) return;

        var ans = $("input[name=answer4]:checked").val();

        if (ans == scope.options4[scope.answer4]) {
          scope.correctAns4 = true;
        } else {
          scope.correctAns4 = false;
        }

        scope.answerMode4 = false;
      };

      scope.nextQuestion4 = function () {
        scope.id++;
        scope.getQuestion4();
      };

      scope.reset4();

      //Mediengestaltung
      scope.start5 = function () {
        scope.id = 0;
        scope.quizOver5 = false;
        scope.inProgress5 = true;
        scope.getQuestion5();
      };

      scope.reset5 = function () {
        scope.inProgress5 = false;
      };

      scope.getQuestion5 = function () {
        var q = quizFactory5.getQuestion5(scope.id);
        if (q) {
          scope.question5 = q.question5;
          scope.options5 = q.options5;
          scope.answer5 = q.answer5;
          scope.answerMode5 = true;
        } else {
          scope.quizOver5 = true;
        }
      };

      scope.checkAnswer5 = function () {
        if (!$("input[name=answer5]:checked").length) return;

        var ans = $("input[name=answer5]:checked").val();

        if (ans == scope.options5[scope.answer5]) {
          scope.correctAns5 = true;
        } else {
          scope.correctAns5 = false;
        }

        scope.answerMode5 = false;
      };

      scope.nextQuestion5 = function () {
        scope.id++;
        scope.getQuestion5();
      };

      scope.reset5();

      //Englisch
      scope.start6 = function () {
        scope.id = 0;
        scope.quizOver6 = false;
        scope.inProgress6 = true;
        scope.getQuestion6();
      };

      scope.reset6 = function () {
        scope.inProgress6 = false;
      };

      scope.getQuestion6 = function () {
        var q = quizFactory6.getQuestion6(scope.id);
        if (q) {
          scope.question6 = q.question6;
          scope.options6 = q.options6;
          scope.answer6 = q.answer6;
          scope.answerMode6 = true;
        } else {
          scope.quizOver6 = true;
        }
      };

      scope.checkAnswer6 = function () {
        if (!$("input[name=answer6]:checked").length) return;

        var ans = $("input[name=answer6]:checked").val();

        if (ans == scope.options6[scope.answer6]) {
          scope.correctAns6 = true;
        } else {
          scope.correctAns6 = false;
        }

        scope.answerMode6 = false;
      };

      scope.nextQuestion6 = function () {
        scope.id++;
        scope.getQuestion6();
      };

      scope.reset6();
    },
  };
});

app.factory("quizFactory", function () {
  var questions = [
    {
      question: "Wofür steht das „A“ in der SMARTen Zielsetzung?",
      options: ["Ausgeglichen", "Alternativen", "Attraktiv", "Anteile"],
      answer: 2,
    },
    {
      question: "Ein Projekt",
      options: [
        "Kann eine wiederkehrende Aufgabe sein",
        "Beinhaltet immer das Risiko des Scheiterns",
        "Grenzt sich kaum vom normalen Tagesgeschäft ab ",
        "Ist nur zeitlich begrenzt",
      ],
      answer: 1,
    },
    {
      question: "Das Pflichtenheft beinhaltet die wesentlichen Fragen?",
      options: [
        "Wie und womit?",
        "Was und warum?",
        "Was und wofür?",
        "Wer und womit?",
      ],
      answer: 0,
    },
    {
      question:
        "Was sind die vier Zieldimensionen (Teilziele), die immer gleichermaßen erreicht werden müssen?",
      options: [
        "Zeit, Kosten, Qualität und Umfang",
        "Personal, Qualität, Zeit und Umfang",
        "Zeit, Kosten, Qualität und Aufwand",
        "Eigentlich sind es nur Drei: Zeit, Kosten und Qualität",
      ],
      answer: 3,
    },
    {
      question: "Welche der folgenden Phasenmodelle gibt es nicht?",
      options: [
        "Integriertes Phasenmodell",
        "V-Modell",
        "Paralleles Phasenmodell",
        "Iteratives Phasenmodell",
      ],
      answer: 0,
    },
    {
      question: "Welche der Aussagen trifft nicht zu?",
      options: [
        "Stakeholder sind Personen oder Parteien, die von einem Projektergebnis oder -verlauf betroffen sind",
        "Ein Projekt nach dem iterativen Phasenmodell kann besonders zeitaufwendig sein",
        "Eine Matrixorganisation ist eine Mischung aus integriertem und autonomen Projektmanagement",
        "Der Meilensteinplan ergibt sich im Anschluss an die Vorgangsliste",
      ],
      answer: 3,
    },
    {
      question: "Was ist keine grundlegende Aufgabe des Projektleiters?",
      options: [
        "Planung der Ressourcen",
        "Angebotserstellung",
        "Qualifizierung und Ausbildung der Mitarbeiter",
        "Festlegung des Projektauftrags",
      ],
      answer: 3,
    },
    {
      question:
        "Welche der folgenden Angaben gehört nicht in die Darstellung eines Arbeitspakets?",
      options: [
        "Fertigstellung in %",
        "Verantwortung",
        "Betroffene Stakeholder",
        "Aktualisierungsstand",
      ],
      answer: 2,
    },
    {
      question:
        "Womit wird der Wissensstand und die Fähigkeiten aller Projektbeteiligten überprüft?",
      options: [
        "Pflichtenheft",
        "Qualifizierungsmatrix",
        "Vorgangsliste",
        "Stakeholder-Management",
      ],
      answer: 1,
    },
    {
      question:
        "Die längste Abfolge voneinander abhängiger Arbeitspakete heißt",
      options: [
        "Gantt-Diagramm",
        "Zeitstrahl",
        "Kritischer Weg",
        "Linienstruktur",
      ],
      answer: 2,
    },
    {
      question: "Wer trägt die Verantwortung für das Risikomanagement?",
      options: [
        "Projektteam",
        "Auftragsgeber",
        "Steuerkreis",
        "Projektleitung",
      ],
      answer: 3,
    },
    {
      question:
        "Welche ist keine einschätzbare Risikodimension bei Betrachtung des Risikomanagements?",
      options: [
        "Eintrittswahrscheinlichkeit",
        "Erkennungswahrscheinlichkeit",
        "Impact (Maß der Auswirkung)",
        "Möglicher Zeitpunkt des Auftretens eines Risikos",
      ],
      answer: 3,
    },
    {
      question:
        "Wenn die Linienstruktur beibehalten bleibt und der Schwerpunkt der Teambeteiligten bei den bisherigen Tätigkeiten im Unternehmen bleibt, dann ist die Rede von",
      options: [
        "integriertem Projektmanagement",
        "autonomem Projektmanagement",
        "qualitativem Projektmanagement",
        "einer Matrixorganisation",
      ],
      answer: 0,
    },
    {
      question:
        "Welche der folgenden Punkte ist der Projektinitiierung und nicht dem Projektplan zuzuordnen?",
      options: [
        "VMI Matrix",
        "Qualifizierungskonzept",
        "Meilensteinplan",
        "Risikomanagement",
      ],
      answer: 1,
    },
    {
      question: "Die Meilensteintrendanalyse gehört als Controlling-Instrument",
      options: [
        "Zur Projektinitiierung",
        "Zum Projektplan",
        "Zur Projektrealisierung",
        "Zum Projektabschluss",
      ],
      answer: 2,
    },
    {
      question:
        "Für welchen der folgenden Punkte trägt nicht die Projektleitung die Verantwortung?",
      options: [
        "Qualifizierungskonzept",
        "Meilensteinplan",
        "Organisatorische Einbindung des Projekts in das Unternehmen",
        "Kick-Off-Workshop",
      ],
      answer: 2,
    },
    {
      question: "Woran scheitern Projekte am häufigsten?",
      options: [
        "Fehlerhafte Zielbeschreibung",
        "Mangel an Personal",
        "Unternehmen gehen insolvent",
        "Zu viele Arbeitspakete",
      ],
      answer: 0,
    },
    {
      question:
        "Wofür steht im Zusammenhang mit Projektmanagement die Abkürzung VMI?",
      options: [
        "Verantwortlichkeit, Mitarbeit, Interesse",
        "Vorgangsliste, Meilensteinplan, (Projekt-)Initiierung",
        "Verantwortlichkeit, Mitarbeit, Informiert halten",
        "Vorgehen, Messbar, Interesse",
      ],
      answer: 2,
    },
    {
      question: "Wozu dient die Delphi-Methode?",
      options: [
        "Zur Aufwandsschätzung auf Grundlage der Arbeitspakete",
        "Zum Überprüfen der Fähigkeiten aller Projektbeteiligten",
        "Zur Behebung möglicher Ressourcen- und Kapazitätsmängel",
        "Zum Identifizieren von Stakeholdern",
      ],
      answer: 0,
    },
    {
      question: "Worauf bezieht sich das „Magische Dreieck“?",
      options: [
        "Auf die drei Zieldimensionen Zeit, Kosten, Qualität",
        "Auf die Absprache zwischen Auftraggeber, Projektleitung und Projektteam",
        "Auf den Zusammenhang zwischen Meilensteinplan, Projektstrukturplan und Vorgangsliste",
        "Auf die drei wesentlichsten Kriterien, die ein Projekt ausmachen",
      ],
      answer: 0,
    },
    {
      question:
        "Wofür steht die Farbe Schwarz üblicherweise bei der Arbeitspaket-Feinplanung?",
      options: [
        "Arbeitspaket ist komplett fertiggestellt",
        "Arbeitspaket wurde noch nicht angefangen",
        "Arbeitspaket ist noch am Laufen, aber schon Schwierigkeiten bei der Einhaltung der vorgegebenen Zeit",
        "Farbe gibt es standardmäßig gar nicht",
      ],
      answer: 0,
    },
    {
      question:
        "Wie viele Projektmitglieder können Hauptverantwortliche für ein einzelnes Arbeitspaket sein?",
      options: [
        "Maximal Zwei",
        "Immer nur Einer",
        "Das ist unbegrenzt",
        "Der Verantwortliche für jedes Arbeitspaket ist immer der Projektleiter",
      ],
      answer: 1,
    },
    {
      question:
        "Welcher dieser „Projektbestandteile“ muss theoretisch nur einmal erstellt und während des Projekts nicht ständig aktualisiert werden?",
      options: [
        "Meilensteintrendanalyse",
        "Projektstrukturplan",
        "Arbeitspaket-Feinplanung",
        "Vorgangsliste",
      ],
      answer: 1,
    },
    {
      question:
        "Wie nennt man die Projekte, bei der neue Produkte oder Dienstleistungen und ein neues Geschäftsmodell entwickelt werden?",
      options: [
        "Veränderungsprojekte",
        "Aufbauprojekte",
        "Entwicklungsprojekte",
        "Innovationsprojekte",
      ],
      answer: 2,
    },
    {
      question:
        "Wie nennt man die Linie in der Risikomatrix, durch die gekennzeichnet wird, welche Risikofaktoren besonders im Auge behalten werden müssen?",
      options: [
        "Interventionslinie",
        "Top-Down-Linie",
        "Bottom-Up-Linie",
        "Iterative Linie",
      ],
      answer: 0,
    },
  ];

  return {
    getQuestion: function (id) {
      if (id < questions.length) {
        return questions[id];
      } else {
        return false;
      }
    },
  };
});

app.factory("quizFactory2", function () {
  var questions2 = [
    {
      question2: "Wozu dient in der Kameratechnik der Fokus?",
      options2: [
        "Regulierung wie viel Licht ins Objektiv fällt",
        "Legt die Größe des Schärfebereichs im Bild fest",
        "Zeigt Kanten im Bild an",
        "Welcher Entfernungsbereich vor der Linse scharf abgebildet wird",
      ],
      answer2: 3,
    },
    {
      question2: "Was bedeutet Phasendrehung?",
      options2: [
        "Das Signal löscht sich aus",
        "Das Signal ist um 180° gedreht",
        "Das Signal ist an der Abszisse gespiegelt",
        "Das Signal kommt zurück",
      ],
      answer2: 2,
    },
    {
      question2:
        "Welche Kelvinzahl spricht typischerweise für eine Kunstlichtquelle?",
      options2: ["5600K", "3200K", "4300K", "6000K"],
      answer2: 1,
    },
    {
      question2: "Welche dieser Mikrofonrichtcharakteristiken gibt es nicht?",
      options2: ["Hyperniere", "Keule", "Herz", "Kugel"],
      answer2: 2,
    },
    {
      question2: "Was zeichnet einen Dichroitischen Spiegel aus?",
      options2: [
        "Absorbiert bestimmte Wellenlängen",
        "Lässt gespiegelte Objekte dunkler erscheinen",
        "Spiegelt Licht ohne Verlust",
        "Reflektiert bestimmte Wellenlängen",
      ],
      answer2: 3,
    },
    {
      question2: "Welche Aussage über eine Rechteckschwingung ist falsch?",
      options2: [
        "Sie werden genutzt, um digitale Signale zu übertragen",
        "Für eine Synthese werden unendlich viele Sinuskomponenten benötigt",
        "Besetzt das ganze Frequenzspektrum",
        "Kann mehrere analoge Audiosignale gleichzeitig übertragen",
      ],
      answer2: 3,
    },
    {
      question2: "Welche Aussage über das Auflagemaß ist falsch?",
      options2: [
        "Fotokameras brauchen Auflagemaß",
        "Ist die letzte Linse des Objektivs",
        "Sichert konstante Bildschärfe im gesamten Zoombereich",
        "Regelt Abstand zwischen Objektiv und Bildwandler",
      ],
      answer2: 1,
    },
    {
      question2: "Welche Aussage über den Shelving Filter ist falsch?",
      options2: [
        "Wird auch Hochpassfilter genannt",
        "Senkt Frequenzen ab",
        "Hebt Frequenzen an",
        "Wird auch Kuhschwanzfilter genannt",
      ],
      answer2: 0,
    },
    {
      question2: "Die Zapfen im Auge",
      options2: [
        "Schalten sich je nach Farbe um",
        "Sorgen nachts für den Hell-/Dunkelkontras",
        "Sind in geringerer Anzahl vorhanden als Stäbchen",
        "Sind für rot besonders empfindlich",
      ],
      answer2: 2,
    },
    {
      question2: "Die subtraktiven Farbmischung",
      options2: [
        "Ist gut für selbstleuchtende Quellen",
        "Wird im Tintenstrahldrucker eingesetzt",
        "Ergibt sich aus den Grundfarben Rot, Grün Blau",
        "Ergibt in Kombination aller Farben Weiß",
      ],
      answer2: 1,
    },
    {
      question2: "Die Aufnahme mit einem CMOS-Sensor",
      options2: [
        "Erzeugt leider ein Smearing ",
        "Hat weniger Dynamik als das menschliche Auge",
        "Lässt sich gleichzeitig mit der Belichtung auslesen",
        "Rauscht stärker als ein CCD Sensor",
      ],
      answer2: 2,
    },
    {
      question2: "Der Klinkenstecker",
      options2: [
        "Kann keine Stereosignale übertragen",
        "Kann verschiedene Größen haben",
        "Ist für Kopfhörer eher untypisch",
        "Kann keine symmetrischen Signale übertragen",
      ],
      answer2: 1,
    },
    {
      question2: "Was bedeutet PCM?",
      options2: [
        "Professional Codec Management",
        "Private Chat Mode",
        "Pulse Code Modulation",
        "Phase Cancellation Muffling",
      ],
      answer2: 2,
    },
    {
      question2: "Was ist Aliasing?",
      options2: [
        "Störsignal durch Überabtastung",
        "Störsignal durch Unterabtastung",
        "Signalverfälschung durch falsche Mikrofonpositionierung",
        "Signalverfälschung durch falsche Kamerapositionierung",
      ],
      answer2: 1,
    },
    {
      question2: "Wofür steht RLE?",
      options2: [
        "Really Loud Emitter",
        "Raw Lighting Encoder",
        "Run Length Encoding",
        "Redundancy Loop Effect",
      ],
      answer2: 2,
    },
    {
      question2:
        "Welche Aussage über digitale Videoaufzeichnung auf Band ist falsch?",
      options2: [
        "Nur wenige Schreibzyklen möglich",
        "Konstante Datenrate zwingend erforderlich",
        "Große Datenvolumina",
        "Robustes Medium",
      ],
      answer2: 0,
    },
    {
      question2: "Welche Aussage über HDTV ist falsch?",
      options2: [
        "Einheitliches Format",
        "Bildausschnitt entspricht menschlichem Gesichtsfeld",
        "Digitale Übertragung weniger störanfällig",
        "Bildformat näher am Kinobild",
      ],
      answer2: 0,
    },
    {
      question2:
        "Welchen Vorteil hat die Videosignalaufzeichnung auf einen optischen Träger?",
      options2: [
        "Hohe Datensicherheit",
        "Physisch unempfindlich",
        "Variable Datenrate",
        "Sehr hohe Kapazität",
      ],
      answer2: 2,
    },
    {
      question2: "Wofür steht SDTV?",
      options2: [
        "Superior Detail Television",
        "Standard Definition Television",
        "Specialized Data Transfer Vehicle",
        "Scene of Detailed Texture Variety",
      ],
      answer2: 1,
    },
    {
      question2: "Wie funktioniert Amplitudenmodulation? (AM)",
      options2: [
        "Pegelunterschiede werden anhand von einstellbaren Parametern reduziert",
        "Lautstärkeunterschiede werden durch aktives Mikrofonhandling kontrolliert",
        "Durch adaptive Vorverstärkung werden Pegelverluste bei langen Funkstrecken vermieden",
        "Pegelverlauf des Audiosignals wird der Amplitude der Trägerschwingung aufgeprägt",
      ],
      answer2: 3,
    },
    {
      question2: "Welche Aussage zum Filmton ist falsch?",
      options2: [
        "Das Mikrofon darf nicht zu sehen sein",
        "So viel Originalton wie möglich aufnehmen",
        "Möglichst ungerichtete Mikrofone verwenden",
        "Möglichst ungerichtete Mikrofone verwenden",
      ],
      answer2: 2,
    },
    {
      question2: "Was ist ein VU-Meter?",
      options2: [
        "Ein reaktionsschnelles Anzeigegerät, das Pegelspitzen anzeigt",
        "Ein träges Anzeigegerät, das den Durchschnittspegel anzeigt",
        "Ein Messgerät, das Stereokompatibilität beurteilen lässt",
        "Ein Messgerät, das Monokompatibilität beurteilen lässt",
      ],
      answer2: 1,
    },
    {
      question2: "Wofür wird MIDI unter anderem verwendet?",
      options2: [
        "Zur Übertragung musikalischer Audiosignale in jeder beliebigen Tonhöhe",
        "Zur zeitgleichen Steuerung von mehreren elektronischen Klangerzeugungsgeräten",
        "Zur Übertragung von Daten wie Tonhöhe oder Anschlagstärke an beliebige Musikinstrumente",
        "Zum Austausch von Steuersignalen mit variabler Datenrate",
      ],
      answer2: 1,
    },
    {
      question2: "Was ist mit „Overhead“ gemeint?",
      options2: [
        "Pegelreserve bei Audiogeräten, um Clipping zu vermeiden",
        "Festgelegte Mindesthöhe von Beschallungs- und Bühnenelementen",
        "Deckenlautsprecher für realistischen Raumklang im Dolby-Atmos-Standard",
        "Mikrofonierung für den Gesamtklang, zum Beispiel bei Schlagzeug oder Chören",
      ],
      answer2: 3,
    },
    {
      question2: "Was ist Physical Modeling?",
      options2: [
        "Komplexes mathematisches Modell von realen Musikinstrumenten",
        "Physikalische Klangerzeugung durch Elemente realer Musikinstrumente",
        "Erzeugung von 3D-Modellen anhand realer Eingabewerte",
        "Algorithmusgesteuerte Manupulation von 3D-Modellen auf Basis physikalischer Gesetze",
      ],
      answer2: 0,
    },
  ];

  return {
    getQuestion2: function (id) {
      if (id < questions2.length) {
        return questions2[id];
      } else {
        return false;
      }
    },
  };
});

app.factory("quizFactory3", function () {
  var questions3 = [
    {
      question3:
        "Auf welchem Zahlensystem basiert die Informatik hauptsächlich?",
      options3: [
        "Dezimalsystem",
        "Binärsystem",
        "Hexadezimalsystem",
        "Oktalsystem",
      ],
      answer3: 1,
    },
    {
      question3: "Welche der folgenden „Zahlen“ ist gleich „16“ (Dezimal)?",
      options3: [
        "10000 (Dual)",
        "1011 (Dual)",
        "0A1F (Hexadezimal)",
        "16 (Oktal)",
      ],
      answer3: 0,
    },
    {
      question3: "Die von Neumann-Rechner-Architektur",
      options3: [
        "Ist ein Konzept für Rechner, die über Lochkarten gesteuert werden",
        "Bindet Rechner an ein bestimmtes Programm",
        "Erlaubt die universelle Nutzung von Rechnern",
        "Ist ein in der Informatik überholtes Konzept",
      ],
      answer3: 2,
    },
    {
      question3:
        "Aus welchen Komponenten besteht die CPU eines Computers? (Schematisch)",
      options3: [
        "BUS-System und GUI",
        "I/O-Unit und Memory",
        "Arithmetic Logic Unit (ALU) und Control Unit (CU)",
        "Speicherwerk und Steuerwerk",
      ],
      answer3: 2,
    },
    {
      question3: "Ein Treiber",
      options3: [
        "Ist eine kleine Software, die Schnittstellen bereitstellt",
        "Koordiniert das Multitasking",
        "Erkennt Grundroutinen und lädt das Betriebssystem von der Festplatte",
        "Übernimmt Speicherprozesse",
      ],
      answer3: 0,
    },
    {
      question3: "Das Steuerwerk (Control Unit) eines von Neumann-Rechners",
      options3: [
        "Dient zur Kommunikation zwischen den einzelnen Komponenten eines Rechners",
        "Steuert die Ein- und Ausgabe von Daten zum Anwender/ anderen Systemen",
        "Führt Rechenoperationen und logische Verknüpfungen durch",
        "Interpretiert die Anweisungen eines Programms und regelt die Befehlsabfolge",
      ],
      answer3: 3,
    },
    {
      question3:
        "Welcher der folgenden Beispiele ist in der Programmiersprache JavaScript zulässig?",
      options3: ["7up", "For", "Ruf%", "Anz_Studenten"],
      answer3: 3,
    },
    {
      question3: "Der Vergleichsoperator „==“ ist",
      options3: [
        "TRUE, wenn Werte gleich sind, sonst FALSE",
        "Nur dann TRUE, wenn Wert und Typ gleich sind",
        "TRUE, wenn Werte ungleich sind, sonst FALSE",
        "TRUE, wenn der linke Wert größer als der Rechte ist, sonst FALSE",
      ],
      answer3: 0,
    },
    {
      question3: "Was ist ein Zeichensatz?",
      options3: [
        "Eine andere Bezeichnung für ein Array",
        "Daten vom Typ STRING",
        "Eine Routine des Betriebssystems",
        "Eine Tabelle, die einem Textzeichen einen Byte-Wert zuordnet",
      ],
      answer3: 3,
    },
    {
      question3:
        "Welcher der folgenden Kompressionsvorgänge arbeitet nicht verlustfrei?",
      options3: [
        "Run-Lenght-Encoding (RLE)",
        "Huffman-Codierung",
        "DPCM",
        "Lempel-Ziv-Welch-Algorithmus",
      ],
      answer3: 2,
    },
    {
      question3: "Was ist keine Aufgabe eines Betriebssystems?",
      options3: [
        "Speicherverwaltung",
        "Prozessorverwaltung",
        "Redundanzverwaltung",
        "Benutzer- und Rechteverwaltung",
      ],
      answer3: 2,
    },
    {
      question3:
        "Welcher Teil der URL „www.imn.htwk-leipzig.de“ ist die sogenannte „Top-Level-Domain“?",
      options3: ["www", "imn", "htwk-leipzig", "de"],
      answer3: 3,
    },
    {
      question3:
        "Mit welchem SQL-Sprachkonstrukt erfolgt die Abfrage von Daten aus einer Datenbank?",
      options3: ["SELECT FROM", "INSERT INTO", "DELETE FROM", "UPDATE"],
      answer3: 0,
    },
    {
      question3: "Ein Array",
      options3: [
        "Ist eine Folge einzelner Zeichen",
        "Zeigt auf einen Speicherbereich, der Daten enthält",
        "Beinhaltet mehrere gleichartig strukturierte Daten, die hintereinander gespeichert werden",
        "Hat entweder den Wert TRUE oder FALSE",
      ],
      answer3: 2,
    },
    {
      question3:
        "Mit welcher Tastenkombination öffnet man im Betriebssystem „Windows 10“ die Eingabeaufforderung?",
      options3: [
        "Windows + R",
        "STRG + C",
        "ALT + F4, dann ENTER",
        "STRG + ALT + ENTF",
      ],
      answer3: 0,
    },
    {
      question3:
        "Welche der folgenden Programmiersprachen ist eine Prozedurale?",
      options3: ["JAVA", "C++", "Ruby", "C"],
      answer3: 3,
    },
    {
      question3: "Was bewirkt der CMD-Befehl „mkdir“?",
      options3: [
        "Löscht den Inhalt des Bildschirms",
        "Zeigt innerhalb des aktuellen Verzeichnisses alle Ordner und Dateien an",
        "Gibt den Inhalt einer Datei seitenweise aus",
        "Erstellt ein neues Verzeichnis am angegebenen Pfad",
      ],
      answer3: 3,
    },
    {
      question3: "IMAP ist",
      options3: [
        "Ein Netzwerkprotokoll, das Netzwerkdateisysteme für E-Mails bereitstellt",
        "Eine eindeutige Adresse für jeden Nutzer eines IT-Netzwerks",
        "Eine asymmetrische Verschlüsselungsmethode",
        "Ein Netz von vielen DNS-Servern",
      ],
      answer3: 0,
    },
    {
      question3: "Welche Aussage ist richtig?",
      options3: [
        "Maschinensprachen liegt als Textdatei vor und kann kommentiert werden",
        "Maschinensprachen nutzen einen stärkeren Abstraktionsgrad und sind deshalb einfacher zu programmieren",
        "Maschinensprachbefehle sind binäre Dateien, die der Prozessor als Anweisung versteht",
        "Maschinensprachen benötigen einen Compiler sowie einen Interpreter",
      ],
      answer3: 2,
    },
    {
      question3: "Welche Aussage ist richtig?",
      options3: [
        "Bei RAID 0 wird der Speicherplatz der einzelnen Festplatten addiert",
        "Bei RAID 1 werden zwei Festplatten zur Ausfallsicherheit verwendet",
        "roBei RAID 5 wird der Inhalt der ersten Festplatte auf alle anderen gespiegeltsa",
        "Bei RAID 10 gibt es nur eine einzige Festplatte zur Datensicherung",
      ],
      answer3: 0,
    },
    {
      question3: "Welche Aussage ist richtig?",
      options3: [
        "Bei der asymmetrischen Verschlüsselung wird nur ein einziger Schlüssel benutzt",
        "Der DATA ENCRYPTION STANDARD (DES) ist ein asymmetrisches Verschlüsselungsverfahren",
        "Für die asymmetrische Verschlüsselung benötigt man einen Private Key und einen Public Key",
        "Der Public Key dient zur Decodierung einer Nachricht",
      ],
      answer3: 2,
    },
    {
      question3: "Ein Trojaner ist",
      options3: [
        "Ein sich selbst verbreitendes kleines Programm, dass schadhafte Veränderungen am Betriebssystem oder anderer Software vornehmen kann",
        "Eine Schadsoftware, die als nützliche Anwendung getarnt ist, aber im Hintergrund unbemerkt andere Funktionen erfüllt",
        "Ein Schadprogramm, dass sich über Netzwerke, E-Mails oder Wechseldatenträger verbreitet, ohne notwendigerweise Dateien zu infizieren",
        "Der Versuch, über gefälschte Webseiten oder Emails an persönliche Daten eines Internet-Nutzers zu gelangen",
      ],
      answer3: 1,
    },
    {
      question3: "Graphic Processing Units (GPU)",
      options3: [
        "Können Daten nicht parallel verarbeiten",
        "Versuchen die Ausführung eines Threads zu beschleunigen",
        "Führen auf unterschiedliche Daten zu einem Zeitpunkt die identische Instruktion aus",
        "Haben nur einen sehr geringen Datendurchsatz",
      ],
      answer3: 2,
    },
    {
      question3: "Welche Aussage ist richtig?",
      options3: [
        "Der Insertation-Sortieralgorithmus benötigt viel zusätzlichen Speicherplatz",
        "Das Grundprinzip des Bubble-Sortieralgorithmus ist das Sortieren durch Einfügen",
        "Der Insertation-Sort eignet sich besonders für kleine Datenmengen bzw. das Einfügen von Elementen in eine bereits sortierte Liste",
        "Beim Bubble-Sort wird jedes Element mit seinem Vorgänger verglichen",
      ],
      answer3: 2,
    },
    {
      question3: "Welches der folgenden Programme ist kein Quelltexteditor?",
      options3: [
        "Visual Studio Code",
        "Sublime Text",
        "Fruity Loops",
        "Eclipse",
      ],
      answer3: 2,
    },
  ];
  return {
    getQuestion3: function (id) {
      if (id < questions3.length) {
        return questions3[id];
      } else {
        return false;
      }
    },
  };
});

app.factory("quizFactory4", function () {
  var questions4 = [
    {
      question4:
        "Unter welchen Artikel des Grundgesetztes fällt die Meinungsfreiheit?",
      options4: ["Artikel 1", "Artikel 4", "Artikel 6", "Artikel 5"],
      answer4: 3,
    },
    {
      question4:
        "Bezieht sich der Schutzbereich der Meinungsfreiheit für eine Meinung ebenso auf eine Tatsache?",
      options4: [
        "Ja, da sich Meinungen uns Tatsachen mitunter vermischen",
        "Nein, der Schutzbereich gilt ausschließlich für Meinungen",
        "Ja, weil eine Tatsache eine Meinung ist",
        "Nein, weil nicht jede Äußerung eine Meinung ist",
      ],
      answer4: 0,
    },
    {
      question4:
        "In welchem Fall kann nicht gegen die Kunstfreiheit vorgegangen werden?",
      options4: [
        "Kollidieren der Grundrechte",
        "Angriff auf Persönlichkeitsrecht",
        "Bildnis der Zeitgeschichte",
        "Jugendschutz",
      ],
      answer4: 2,
    },
    {
      question4: "Was ist kein Anspruch bei einer Persönlichkeitsverletzung?",
      options4: [
        "Öffentliche Entschuldigung",
        "Strafanzeige",
        "Unterlassungserklärung",
        "Schadensersatz",
      ],
      answer4: 0,
    },
    {
      question4:
        "Wann ist eine Bildnis-Veröffentlichung, ohne Einstimmung des Betroffenen,zulässig?",
      options4: [
        "Bilder von Personen im Urlaub",
        "Person als Mittelpunkt vor einer Sehenswürdigkeit",
        "Fotos von Personen beim Einkauf von intimen Produkten",
        "Person als Beiwerk einer Landschaft",
      ],
      answer4: 3,
    },
    {
      question4:
        "Was ist in Bezug auf das Gegendarstellungsrecht nicht richtig?",
      options4: [
        "Gegendarstellung darf nicht wertend sein",
        "Anspruch gilt auch, wenn Betroffener kein Interesse hat",
        "Gegendarstellung muss unverzüglich geschehen",
        "Nicht anwendbar bei wahrheitsgetreuen Berichten aus EU-Parlament",
      ],
      answer4: 1,
    },
    {
      question4:
        "Welche Menschenwürde ist bei einem Rundfunkbeitrag zu schützen?",
      options4: [
        "Des Zuschauers",
        "Zuschauer und Abgebildeten",
        "Des Abgebildeten",
        "Des Produzenten",
      ],
      answer4: 2,
    },
    {
      question4:
        "Ab wann muss ein Streaming-Angebot als Rundfunk eingestuft werden?",
      options4: [
        "Bereits bei weniger als 500 potenzielle gleichzeitige Nutzer",
        "Sobald es linear (nur von einer Seite aus steuerbar) abrufbar ist",
        "Ebenso wenn nur die Familie Zugriff hat",
        "Auch bei nicht journalistischredaktionellem Inhalt",
      ],
      answer4: 1,
    },
    {
      question4: "Was ist kein Werbegrundsatz?",
      options4: [
        "Politische Werbung ist erlaubt",
        "Keine Verhaltensweisen die Gesundheit gefährden",
        "Irreführungsverbot",
        "Alkoholwerbung in Grenzen",
      ],
      answer4: 0,
    },
    {
      question4: "Welche geschäftliche Handlung ist unlauter?",
      options4: [
        "Vergleichende Werbung",
        "Preisangaben",
        "Verwendung von Gütezeichen mit Genehmigung",
        "Werbung, die Informationen enthält",
      ],
      answer4: 0,
    },
    {
      question4: "Wer muss für eine Werbeerkennbarkeit sorgen?",
      options4: [
        "Niemand",
        "Influencer",
        "Private Fernsehsender",
        "Alle Telemedien",
      ],
      answer4: 3,
    },
    {
      question4: "Ab wann ist vergleichenden Werbung unlauter?",
      options4: [
        "Wenn sie objektiv ist",
        "Wenn Waren verunglimpft werden",
        "Wenn der Ruf nicht beeinträchtigt wird",
        "Wenn sie nicht subjektiv ist",
      ],
      answer4: 1,
    },
    {
      question4: "Welche ist keine Methode der Persuasion von Robert Cialdini?",
      options4: [
        "Differenzierung",
        "Soziale Bewährtheit",
        "Reziprozität",
        "Autorität",
      ],
      answer4: 0,
    },
    {
      question4:
        "Bei welcher Art von Medien ist die gesetzliche Grundlage für den Jugendschutz das Jugendschutzgesetz (JuSchG)?",
      options4: [
        "Sogenannte Schriften",
        "Telemedien",
        "Trägermedien",
        "Rundfunk",
      ],
      answer4: 2,
    },
    {
      question4:
        "Was ist im Jugendschutz unter einem relativen Verbot zu verstehen?",
      options4: [
        "Verbreitung ist generell untersagt",
        "Verbreitung gegenüber Minderjährigen ist untersagt",
        "Etablierung von Wahrnehmungshindernissen",
        "Verbreitung gegenüber bis 16-jährigen ist untersagt",
      ],
      answer4: 1,
    },
    {
      question4:
        "Wann ist es verboten, verfassungsfeindliche Kennzeichen/Propagandamittel öffentlich zu verwenden?",
      options4: [
        "Bei staatsbürgerlicher Aufklärung",
        "Bei Berichterstattungen über die Geschichte",
        "In Kunst, Wissenschaft, Forschung und Lehre",
        "Zu Werbezwecken",
      ],
      answer4: 3,
    },
    {
      question4:
        "In welche Stufe der Jugendgefährdung ist der Tatbestand entwicklungsgefährdende Inhalte einzuordnen?",
      options4: ["Stufe 4", "Stufe 6", "Stufe 5", "Stufe 7"],
      answer4: 2,
    },
    {
      question4:
        "Unter welcher weiteren Fallgruppe der Jugendgefährdung fällt die Hauptanklage bei Bushidos Album „Sonny Black“?",
      options4: [
        "Propagierung/Verherrlichung von Drogen",
        "Diskriminierung von Menschengruppen",
        "Verherrlichung exzessiven Alkoholkonsums",
        "Nahelegen selbstschädigenden Verhaltens",
      ],
      answer4: 1,
    },
    {
      question4: "In welchem Zeitraum dürfen FSK 16-Inhalte im TV laufen?",
      options4: [
        "Den ganzen Tag über",
        "Von 22 Uhr bis 6 Uhr",
        "Von 20 Uhr bis 6 Uhr",
        "Von 23 Uhr bis 6 Uhr",
      ],
      answer4: 1,
    },
    {
      question4:
        "Wann darf man einen Ausschnitt eines anderen Beitrages, ohne Erlaubnis des Produzenten verwenden?",
      options4: [
        "Für die Zusammenstellung eines „Best-Of“",
        "Bei großen Samstagabend Sendungen",
        "Wenn ein inhaltlich neues und selbstständiges Werk entsteht",
        "Darf nie ohne Erlaubnis verwendet werden",
      ],
      answer4: 2,
    },
    {
      question4:
        "Wann ist ein Soziales Netzwerk dazu verpflichtet einen Beitrag zu löschen?",
      options4: [
        "Wenn es sich um einen nachgewiesen rechtswidrigen Beitrag handelt",
        "Auf Wunsch eines Nutzers, ohne Benennung des Grundes",
        "Nie",
        "Nur bei Wunschäußerung einer in der Öffentlichkeit stehenden Person",
      ],
      answer4: 0,
    },
    {
      question4:
        "Mit was für einer Strafe ist zu rechnen, wenn man ein unerlaubtes öffentliches Glücksspiel bewirbt?",
      options4: [
        "Nur Geldstrafe",
        "Freiheitsstrafe bis zu einem Jahr oder Geldstrafe",
        "Freiheitsstrafe bis zu zwei Jahren",
        "Keine Strafe, da man nicht der Veranstalter ist",
      ],
      answer4: 1,
    },
    {
      question4:
        "Welches Bundesland hat sein eigenes Gesetz über Glücksspiele?",
      options4: [
        "Sachsen",
        "Schleswig-Hollstein",
        "Mecklenburg-Vorpommern",
        "Saarland",
      ],
      answer4: 1,
    },
    {
      question4: "Was zählt nicht zu den Anforderungen für ein TV-Gewinnspiel?",
      options4: [
        "Gebühr von mind. 1€",
        "Gebot der Transparenz",
        "Darf nicht irreführend sein",
        "Teilnehmerschutz",
      ],
      answer4: 0,
    },
    {
      question4:
        "Wann trägt ein Diensteanbieter keine Haftung, wenn es um rechtswidrigen Inhalt geht?",
      options4: [
        "Für eigenen Inhalten",
        "Für alle Inhalte",
        "Für Inhalte, wo er nur den Zugang verschafft",
        "Für gespeicherte Inhalte",
      ],
      answer4: 2,
    },
  ];

  return {
    getQuestion4: function (id) {
      if (id < questions4.length) {
        return questions4[id];
      } else {
        return false;
      }
    },
  };
});

app.factory("quizFactory5", function () {
  var questions5 = [
    {
      question5: "Was beinhaltet der Medienbegriff nach Lankau?",
      options5: [
        "Inhalt, Funktion und Form",
        "Art, Verwendung und Gestaltung",
        "Design, Farbe und Nutzen",
        "Medium, Schrift und Technik",
      ],
      answer5: 0,
    },
    {
      question5:
        "Von wem ist das Kommunikationsmodell mit den Bestandteilen Informationsquelle Transmitter, Störungsquelle, Empfänger und Ziel?",
      options5: [
        "Shannon und Fano",
        "Shannon und Weaver",
        "Huffman",
        "Kandinsky",
      ],
      answer5: 1,
    },
    {
      question5: "Was ist unter dem Begriff Multimodalität zu verstehen?",
      options5: [
        "Verwendung mehrerer Designvorschriften",
        "Verwendung mehrerer Medien",
        "Verwendung von Formgestaltung",
        "Verwendung mehrerer Sinneswahrnehmungen",
      ],
      answer5: 3,
    },
    {
      question5: "Was ist eine Marketingstrategie?",
      options5: ["ABS", "CD", "AIDA", "TUI"],
      answer5: 2,
    },
    {
      question5: "Als was kann ein Symbol in Erscheinung treten?",
      options5: [
        "Sympathisant und Symphonie",
        "Signifikant und Signifikat",
        "Text und Lied",
        "Bilderbuch und Bild",
      ],
      answer5: 1,
    },
    {
      question5:
        "Was zeichnet das Symbolsystem Text im Gegensatz zum Symbolsystem Bild aus?",
      options5: [
        "Diskrete Symbole und abstrakte Darstellung",
        "Kontinuierliche Symbole und abstrakte Darstellung",
        "Diskrete Symbole und analoge Darstellung",
        "Analoge Symbole und abstrakte Darstellung",
      ],
      answer5: 0,
    },
    {
      question5: "Welche Arten von Bildern gibt es?",
      options5: [
        "Realistisch und unrealistisch",
        "Unrealistisch und unlogisch",
        "Logisch und unlogisch",
        "Realistisch und logisch ",
      ],
      answer5: 3,
    },
    {
      question5: "Welche Zeigefunktion hat ein Stadtplan?",
      options5: [
        "Einfach nur was zu sehen ist",
        "Transferleistung",
        "Story erzählen",
        "Meta-Informationen",
      ],
      answer5: 1,
    },
    {
      question5:
        "Welche weiteren Primärfunktionen gibt es zu der Zeigefunktion?",
      options5: [
        "Führungsfunktion und Dekorationsfunktion",
        "Steuerungsfunktion und Erscheinungsfunktion",
        "Situierungsfunktion und Konstruktionsfunktion",
        "Kompetenzfunktion und Wahrnehmungsfunktion",
      ],
      answer5: 2,
    },
    {
      question5: "Was ist in der Formgestaltung das kleinste atomare Element?",
      options5: ["Kreis", "Komma", "Punkt", "Strich"],
      answer5: 2,
    },
    {
      question5:
        "Wie wirken Objekte, welche sich in der Mitte oder Unten in einem Bild befinden?",
      options5: [
        "Dynamisch und unruhig",
        "Unbewegt und ruhig",
        "Unbewegt und unruhig",
        "Dynamisch und ruhig",
      ],
      answer5: 1,
    },
    {
      question5:
        "Aus welchem Grundkonflikt entstehen laut Bauer neue Schriften?",
      options5: [
        "Einfache Schreibweise und gute Lesbarkeit",
        "Einfache Schreibweise und schnelles Schreiben",
        "Schnelles Schreiben und gute Lesbarkeit",
        "Gute Lesbarkeit und Schönheit der Schrift",
      ],
      answer5: 0,
    },
    {
      question5: "In welcher Epoche entstand die Antiqua?",
      options5: [
        "Mittelalter - Gotik",
        "Klassizismus",
        "Barock",
        "Renaissance",
      ],
      answer5: 3,
    },
    {
      question5: "Was ist „normales Sehen“?",
      options5: [
        "Bewusst wahrnehmend",
        "Differenziert ganzheitlich wahrnehmend",
        "Nicht gewichtet",
        "Erkennend",
      ],
      answer5: 3,
    },
    {
      question5: "Was kann man über das „gestalterisches Sehen“ sagen?",
      options5: [
        "Rein identifizierend",
        "Auf Erkennen ästhetischer Merkmale geschult",
        "Anfällig für optische Täuschungen",
        "Auf Informationsaufnahme fixiert",
      ],
      answer5: 1,
    },
    {
      question5: "Welche Aussage über Gestaltgesetze ist richtig?",
      options5: [
        "Nicht nur auf gestalterische Detailprobleme ausgerichtet",
        "Nicht widerspruchsfrei",
        "Keine Gesetze im mathematischen Sinne",
        "Nicht vollständig",
      ],
      answer5: 2,
    },
    {
      question5:
        "Bei welchem Gestaltgesetz werden nicht vorhandene Teile einer erkannten Figur Von der menschlichen Wahrnehmung ergänzt?",
      options5: [
        "Figur-Grund-Beziehung",
        "Gesetz der Geschlossenheit",
        "Gesetz der Erfahrung",
        "Gesetz der Nähe",
      ],
      answer5: 1,
    },
    {
      question5:
        "Was gehört zu den positiven Merkmalen der absoluten Harmonie?",
      options5: [
        "Vermittelt Gefühl von Ruhe",
        "Verdeutlicht Aussage der Darstellung",
        "Ermöglicht Gewichtung einzelner dargestellter Elemente",
        "Lenkt Aufmerksamkeit des Betrachters",
      ],
      answer5: 0,
    },
    {
      question5: "Was gehört zu den negativen Merkmalen der Hierarchie?",
      options5: [
        "Nichtbeachtung oder Ablehnung der Designaussage möglich",
        "Nichtbeachtung oder Ablehnung der Designaussage möglich",
        "Eindruck von Starre",
        "Lenkt keine Aufmerksamkeit",
      ],
      answer5: 0,
    },
    {
      question5:
        "Was gehört nicht zu den Gemeinsamkeiten der Modelle von Engelkamp und Pavio?",
      options5: [
        "Verbales und nonverbales System",
        "Bildmarken und Wortmarken",
        "Querverbindungen",
        "Verknüpfung von oben nach unten",
      ],
      answer5: 3,
    },
    {
      question5: "Was ist kein visuelles Merkmal?",
      options5: ["Bewegung", "Geschwindigkeit", "Größe", "Form"],
      answer5: 1,
    },
    {
      question5:
        "Unter welchen Verarbeitungsschritt, bei der Informationsverarbeitung, fällt der Punkt: alles was sich im direkten Umfeld befindet?",
      options5: [
        "Zentrale Verarbeitung",
        "Speicherung",
        "Periphere Verarbeitung",
        "Analoge Verarbeitung",
      ],
      answer5: 2,
    },
    {
      question5: "Was davon ist eine Proposition?",
      options5: [
        "Hans Otto",
        "Hans sieht Otto",
        "Grüne Ideen schlafen hektisch",
        "Hans‘ Ideen Otto hektisch",
      ],
      answer5: 1,
    },
    {
      question5: "Wie lautet die Ziel-Plan-Struktur?",
      options5: [
        "Ziel-Plan-Handlung Konsequenz",
        "Ziel-Plan-Handlung Befriedigung",
        "Ziel-Plan-Überdenken-Handlung",
        "Ziel-Plan-Idee-Konsequenz",
      ],
      answer5: 0,
    },
    {
      question5: "Was bildet die Basis der Farberlebnispyramide?",
      options5: [
        "Persönliches Verhältnis",
        "Assoziation",
        "Kollektives Bewusstsein",
        "Biologische Reaktion",
      ],
      answer5: 3,
    },
  ];

  return {
    getQuestion5: function (id) {
      if (id < questions5.length) {
        return questions5[id];
      } else {
        return false;
      }
    },
  };
});

app.factory("quizFactory6", function () {
  var questions6 = [
    {
      question6: "Ein sogenannter „preamp“ ist ein",
      options6: ["Akkord", "Mischpult", "Mikrofon-Vorverstärker", "Bandgerät"],
      answer6: 2,
    },
    {
      question6: "Das englische Wort für Verzögerung ist",
      options6: ["delay", "oscillation", "loudness", "overtone"],
      answer6: 0,
    },
    {
      question6: "Without any evidences“ meint dasselbe wie",
      options6: ["distinguished", "unfounded", "disagreeable", "distorted"],
      answer6: 1,
    },
    {
      question6: "Welchen Gegenstand bezeichnet das Wort „tripod“?",
      options6: ["Tonangel", "Kopfhörer", "Mikrofonhalterung", "Stativ"],
      answer6: 3,
    },
    {
      question6: "Wie heißt ein Mikrofon mit Kugelcharakteristik?",
      options6: [
        "cardioid mic",
        "shotgun mic",
        "omni-directional mic",
        "lavalier mic",
      ],
      answer6: 2,
    },
    {
      question6: "„OMG“ („Oh my god“) ist ein Beispiel für",
      options6: ["acronym", "abbreviation", "asterisk", "meme"],
      answer6: 0,
    },
    {
      question6:
        "A spoken presentation to persuade someone to use or buy your creative idea is a",
      options6: ["commissioning brief", "pitch", "talk", "carnet"],
      answer6: 1,
    },
    {
      question6: "Was ist das Gegenteil von „tilt“?",
      options6: ["pan", "big", "on demand", "live"],
      answer6: 0,
    },
    {
      question6:
        "Was ist eine andere Bezeichnung für das Verfahren „Chromakey“?",
      options6: ["overlay", "spill", "green screen", "transition"],
      answer6: 2,
    },
    {
      question6: "Was bedeutet „made-to-scale“?",
      options6: [
        "Maßstabgetreu",
        "Für jeden zugänglich",
        "Auf dem Original basierend",
        "Die Bezeichnung hat keine tiefgründige Bedeutung",
      ],
      answer6: 0,
    },
    {
      question6: "„Films may be dubbed“. Was bedeutet das für die Filme?",
      options6: [
        "Sie können fortgesetzt werden",
        "Sie können synchronisiert werden",
        "Sie können vor Ort gedreht werden",
        "Sie können mit guten Stunts ausgestattet sein",
      ],
      answer6: 1,
    },
    {
      question6:
        "Was ist der „shutter-release button“ bei einer Spiegelreflexkamera?",
      options6: [
        "Auslöser",
        "Taste für den Blitz",
        "Zoom-Button",
        "Funktionswählrad",
      ],
      answer6: 0,
    },
    {
      question6: "Was ist die richtige Übersetzung für Urhebergesetz?",
      options6: [
        "trademark law",
        "injunction law",
        "intellectual property law",
        "copyright law",
      ],
      answer6: 3,
    },
    {
      question6:
        "Das Gegenteil von „tangible“ ist „intangible“ und das bedeutet",
      options6: ["unbewusst", "unbefugt", "immateriell", "unabhängig"],
      answer6: 2,
    },
    {
      question6: "Als Szenen- bzw. Bühnenbildner ist man",
      options6: [
        "art director",
        "screenplay director",
        "production manager",
        "camera operator",
      ],
      answer6: 0,
    },
    {
      question6: "Was ist das Gegenteil von Zeitlupe",
      options6: ["run motion", "fast motion", "good motion", "slow motion"],
      answer6: 1,
    },
    {
      question6: "„Exposure“-Einstellungen bedeutet Änderungen bei der",
      options6: ["Brennweite", "Schärfe", "Kameraperspektive", "Belichtung"],
      answer6: 3,
    },
    {
      question6:
        "Wie nennt man eine kleine Rolle, die mit einem berühmten Schauspieler oder einer berühmten Schauspielerin besetzt ist?",
      options6: ["insert", "actor/actress", "cameo", "best boy/best girl"],
      answer6: 2,
    },
    {
      question6: "Was bedeutet das englische Wort „footage“?",
      options6: [
        "Filmmaterial",
        "Nachsynchronisation",
        "Handlung",
        "Requisiten",
      ],
      answer6: 0,
    },
    {
      question6: "Als „walk-on“ ist man",
      options6: [
        "Verantwortlich für die Requisiten",
        "Ein Assistent der Regie",
        "Ein Statist",
        "Für die laufende Kamera verantwortlich",
      ],
      answer6: 2,
    },
    {
      question6:
        "Wie werden Filme bezeichnet, die die Vorgeschichte von bereits gelaufenen Filmen erzählen?",
      options6: ["playwright", "prequel", "sequel", "looping"],
      answer6: 1,
    },
    {
      question6:
        "Welche der folgenden Übersetzungen passt zu dem Wort „score“?",
      options6: ["Spielstand", "Torerfolg", "Filmmusik", "Alle Drei Antworte"],
      answer6: 3,
    },
    {
      question6: "Eine Großaufnahme ist im Englischen ein",
      options6: [
        "medium shot",
        "establishing shot",
        "close-up",
        "tracking shot",
      ],
      answer6: 2,
    },
    {
      question6:
        "Welche Tätigkeit verbirgt sich hinter dem „screenplay writer“?",
      options6: [
        "Aufnahmeleiter",
        "Hauptproduzent",
        "Kostümbildner",
        "Drehbuchautor",
      ],
      answer6: 3,
    },
    {
      question6:
        "Was bezeichnet eine sehr kleine explosive Ladung, um beispielsweise einen Schuss zu simulieren?",
      options6: ["props", "shot", "squib", "dolly"],
      answer6: 2,
    },
  ];

  return {
    getQuestion6: function (id) {
      if (id < questions6.length) {
        return questions6[id];
      } else {
        return false;
      }
    },
  };
});

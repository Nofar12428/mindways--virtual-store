function RadioChange(radioId, imgId) {
    // הסתרת כל התמונות המחוברות לכפתורי הרדיו
    var images = document.getElementsByClassName('imgRadios'); // images אוספים את כל האלמנטים עם המחלקה אימג'רדיוס לתוך מערך
    for (var i = 0; i < images.length; i++) { //  'imgRadios' לולאה על כל האלמנטים עם המחלקה 
        images[i].style.display = 'none'; // 'none'הסתרת כל התמונות על ידי שינוי התצוגה ל 
    }
    // הצגת התמונה המתאימה לפי כפתור הרדיו שנבחר
    var rad = document.getElementById(radioId); // ID קבלת האלמנט של כפתור הרדיו לפי  
    var img = document.getElementById(imgId); //ID קבלת האלמנט של התמונה לפי  
    if (rad.checked) { // בדיקה אם כפתור הרדיו נבחר
        img.style.display = 'block'; // 'block' הצגת התמונה המתאימה על ידי שינוי סגנון התצוגה ל
    }
    handleSubmit(); //  לעדכון מצב כפתור השליחה handleSubmit קריאה לפונקציה
}

function handleSubmit() {
    // בדיקת בחירת כפתורי הרדיו
    var radios = document.getElementsByName('radios'); //   'rasdios' אוספים את כל האלמנטים עם השם 'radios' לתוך מערך
    var radioChecked = false; // משתנה לבדיקה אם כפתור רדיו נבחר
    for (var i = 0; i < radios.length; i++) {// 'rasdios' לולאה על כל האלמנטים בשם 
        if (radios[i].checked) { // בדיקה אם כפתור הרדיו נבחר
            radioChecked = true; //true אם כפתור רדיו נבחר, קביעת כפתור הרדיו ל  
        }
    }

    // ספירת כמות הצ'קבוקסים שנבחרו
    var checkboxes = document.getElementsByName('options'); // 'options' אוספים את כל האלמנטים עם השם 'checkbox' לתוך מערך
    var checkboxesChecked = 0; // הגדרה ראשונית לפני קביעת מספר הצ'קבוקסים שנבחרו
    for (var i = 0; i < checkboxes.length; i++) { //'options' לולאה על כל האלמנטים עם השם 
        if (checkboxes[i].checked) { // בדיקה אם ישנו צ'קבוקס נבחר
            checkboxesChecked++; // באחד checkboxesChecked הגדלת המשתנה 
        }
    }
    // הפעלת או נטרול כפתור השליחה בהתאם למילוי השדות הנדרשים
    var submitButton = document.getElementById('submit1'); // קבלת האלמנט כפתור השליחה כפי שהוא
    var textInput = document.getElementById('details').value.trim(); //   קבלת הערך של שדה ההערות- רק בעל משמעות
    if (textInput != "" && radioChecked == true && checkboxesChecked > 1) { //   בדיקה אם כל השדות מלאים כפי שצריך- אם קיים ערך בתיבת הטקסט ונמצא אלמנט אחד בשם רדיוס שנבחר על ידי המשתמש ובנוסף נמצא כי נבחר יותר מאלמנט אחד שהשם שלו הוא אפשרויות  
        submitButton.disabled = false; // הפעלת כפתור השליחה אם כל התנאים מתקיימים
    } else {
        submitButton.disabled = true; // נטרול כפתור השליחה אם אחד מהתנאים לא מתקיים
    }
}

function submitMsg() {// פונקציה האחראית למצוא את כל פרטי ההזמנה שנבחרו על ידי המשתמש והכנסתם לתוך חלונית הקופצץ בסיום ההזמנה
    var textInput = document.getElementById('details').value; // קבלת הערך של שדה ההערות

    // מציאת הוויטמין שנבחר
    var radios = document.getElementsByName('radios'); // 'rasdios' אוספים את כל האלמנטים עם השם 'radios' לתוך מערך
    var selectedRadioValue; // משתנה לאחסון הערך של הוויטמין שנבחר
    for (var i = 0; i < radios.length; i++) { //'rasdios' לולאה על כל האלמנטים שנמצאו עם השם 
        if (radios[i].checked) { // בדיקה אם ואיזה כפתור רדיו נבחר
            selectedRadioValue = radios[i].nextElementSibling.alt; //'radios' קבלת הערך של האלמנט הבא (התמונה) ואחסונו במערך 
        }
    }

    // מציאת הפרחים שנבחרו
    var checkboxes = document.getElementsByName('options'); //'options' אוספים את כל האלמנטים עם השם 'options' לתוך מערך
    var selectedCheckboxesValues = []; // מערך לאחסון הערכים של הפרחים שנבחרו
    for (var i = 0; i < checkboxes.length; i++) { //'options'  לולאה על כל האלמנטים שנמצאו עם השם
        if (checkboxes[i].checked) { // בדיקה אם ואיזה צ'קבוקס נבחר
            selectedCheckboxesValues.push(checkboxes[i].nextElementSibling.alt); // קבלת הערך של האלמנט הבא (התמונה) והוספתו למערך
        }
    }

    // יצירת מחרוזת עם הפריטים המופרדים בפסיקים 
    var selectedCheckboxesText = ""; // משתנה לאחסון המחרוזת הסופית
    for (var i = 0; i < selectedCheckboxesValues.length; i++) { // לולאה על כל הערכים במערך
        selectedCheckboxesText += selectedCheckboxesValues[i]; // הוספת הערך הנוכחי למחרוזת
        if (i < selectedCheckboxesValues.length - 1) { // בדיקה אם לא מדובר באלמנט האחרון
            selectedCheckboxesText += ", "; // הוספת פסיק ורווח אחרי הערך הנוכחי
        }
    }

    // יצירת הודעה עם הפרטים שנבחרו
    var message = 'ההזמנה נקלטה.\n' + // התחלת המחרוזת עם שורה ראשונה
        'הויטמין שנבחר: ' + selectedRadioValue + '\n' + // הוספת שורה עם סוג הוויטמין שנבחר
        'הפרחים שנבחרו: ' + selectedCheckboxesText + '\n' + // הוספת שורה עם צמחי המרפא שנבחרו
        'הערות נוספות: ' + textInput; //  הוספת הערות שנכתבו על ידי המשתמש בתיבת הטקסט 

    // הצגת ההודעה
    alert(message); // הצגת המחרוזת שנבנתה בחלון הודעה שתקפוץ בסיום הזמנה
}

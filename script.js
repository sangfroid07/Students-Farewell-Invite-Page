document.addEventListener('DOMContentLoaded', function() {
    const rollNumberSelect = document.getElementById('rollNumber');

    for (let i = 1; i <= 40; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        rollNumberSelect.appendChild(option);
    }

    document.getElementById('rollNumberForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const rollNumber = document.getElementById('rollNumber').value;
        const section = document.getElementById('section').value.toUpperCase();
        const studentName = getStudentName(section, rollNumber);

        if (studentName) {
            const poem = `
                === ✭ ===  ✭ === ✭ ===<br><br>
                Roses are red, Violets are blue;<br>
                As you bid farewell,Remember, we cherish you.<br>
                Cherish the moments, The laughter, the tears;<br>
                As you step forward,To new frontiers.<br><br>
                Through the halls you’ve walked, With friends by your side;<br>
                May your journey ahead, Be a glorious ride.<br>
                Goodbye is not forever, It's just a simple pause;<br>
                For every ending is, A new beginning's cause...<br><br>
                𝑭𝒂𝒓𝒆𝒘𝒆𝒍𝒍, ${studentName}!<br>
                <br>
                === ✭ ===  ✭ === ✭ ===`;

            const end = `<br>
                𝑱𝒖𝒏𝒊𝒐𝒓𝒔 𝑷𝒓𝒐𝒅𝒖𝒄𝒕𝒊𝒐𝒏 presents to you,<br>
                a short introductory video,<br>
                hope you like it!`;

            const farewellMessage = `${poem}<br><br>${end}`;
            document.getElementById('message').innerHTML = farewellMessage;
            document.getElementById('farewellVideo').src = "https://www.youtube.com/embed/YOUR_VIDEO_ID";

            // Fade out input container and fade in message container
            const inputContainer = document.getElementById('inputContainer');
            const messageContainer = document.getElementById('messageContainer');

            inputContainer.classList.add('fade-out');
            setTimeout(function() {
                inputContainer.style.display = 'none';
                messageContainer.style.display = 'block';
                messageContainer.classList.add('fade-in');
            }, 500); // Match this duration with the CSS transition time
        } else {
            alert('Student not found. Please try again.');
        }
    });
});

function getStudentName(section, rollNumber) {
    const students = {
        "A": {
            "1": "Ahana Samanta",
            "14": "Arkonil Sarkar",
            "16": "Arpan Maity",
        },
        "B": {
            "1": "Boudi",
        }
    };

    return students[section] ? students[section][rollNumber] : null;
}
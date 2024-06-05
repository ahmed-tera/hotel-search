document.addEventListener('DOMContentLoaded', function() {
    const governorates = ["Cairo", "Alexandria", "Giza", "Luxor", "Aswan", "Hurghada", "Sharm El-Sheikh"];
    const hotels = {
        "Cairo": ["Fairmont", "Kempinski", "Conrad", "Four Seasons"],
        "Alexandria": ["Hotel1 Alexandria", "Hotel2 Alexandria"],
        "Giza": ["Hotel1 Giza", "Hotel2 Giza"],
        "Luxor": ["Hotel1 Luxor", "Hotel2 Luxor"],
        "Aswan": ["Hotel1 Aswan", "Hotel2 Aswan"],
        "Hurghada": ["Fairmont Hurghada", "Kempinski Hurghada"],
        "Sharm El-Sheikh": ["Four Seasons Sharm", "Kempinski Sharm"]
    };

    const governorateSelect = document.getElementById('governorate');
    const hotelSelect = document.getElementById('hotel');

    // ملء المحافظات
    governorates.forEach(gov => {
        const option = document.createElement('option');
        option.value = gov;
        option.textContent = gov;
        governorateSelect.appendChild(option);
    });

    // تحديث قائمة الفنادق بناءً على المحافظة المختارة
    governorateSelect.addEventListener('change', function() {
        const selectedGovernorate = governorateSelect.value;
        hotelSelect.innerHTML = ''; // إفراغ قائمة الفنادق

        if (hotels[selectedGovernorate]) {
            hotels[selectedGovernorate].forEach(hotel => {
                const option = document.createElement('option');
                option.value = hotel;
                option.textContent = hotel;
                hotelSelect.appendChild(option);
            });
        }
    });

    // إضافة محافظة جديدة
    document.getElementById('add-governorate').addEventListener('click', function() {
        const newGovernorate = prompt("Enter the name of the new governorate:");
        if (newGovernorate) {
            governorates.push(newGovernorate);
            const option = document.createElement('option');
            option.value = newGovernorate;
            option.textContent = newGovernorate;
            governorateSelect.appendChild(option);
            hotels[newGovernorate] = [];
        }
    });

    // إضافة فندق جديد
    document.getElementById('add-hotel').addEventListener('click', function() {
        const selectedGovernorate = governorateSelect.value;
        if (selectedGovernorate) {
            const newHotel = prompt(`Enter the name of the new hotel in ${selectedGovernorate}:`);
            if (newHotel) {
                hotels[selectedGovernorate].push(newHotel);
                const option = document.createElement('option');
                option.value = newHotel;
                option.textContent = newHotel;
                hotelSelect.appendChild(option);
            }
        } else {
            alert("Please select a governorate first.");
        }
    });
});

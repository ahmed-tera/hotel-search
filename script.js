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
});

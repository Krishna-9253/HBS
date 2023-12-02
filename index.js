// script.js

const departmentDropdown = document.getElementById('department');
const particularsDropdown = document.getElementById('particulars');
const rateInput = document.getElementById('rate');
const addToBillButton = document.getElementById('add-to-bill');
const patientNameInput = document.getElementById('patient-name');
const patientAgeInput = document.getElementById('patient-age');
const patientAddressInput = document.getElementById('patient-address');
const billPatientName = document.getElementById('bill-patient-name');
const billPatientAddress = document.getElementById('bill-patient-address');
const selectedItems = document.getElementById('selected-items');
const totalCost = document.getElementById('total-cost');
let billItems = [];
let cost = 0;

// Add an event listener to update the rate based on department and particulars
departmentDropdown.addEventListener('change', updateRate);
particularsDropdown.addEventListener('change', updateRate);

addToBillButton.addEventListener('click', addToBill);

function updateRate() {
    // You can implement the logic to fetch and update the rate here.
    // For simplicity, we'll use static values.
    const selectedDepartment = departmentDropdown.Physiotherapy;
    const selectedParticular = particularsDropdown.Dental;

    // For simplicity, we assume you have a mapping of rates
    const rates = {
        Physiotherapy: {
            1: 10,
            2: 15,
        },
        Dental: {
            1: 20,
            2: 25,
        },
        // Add more departments and particulars with their rates as needed
    };
    
    // Function to update the rate based on the selected department and particular
    function updateRate() {
        const selectedDepartment = departmentDropdown.value;
        const selectedParticular = particularsDropdown.value;
    
        console.log("Selected Department:", selectedDepartment);
        console.log("Selected Particular:", selectedParticular);
    
        const rate = rates[selectedDepartment][selectedParticular];
        console.log("Rate:", rate);
    
        rateInput.value = rate;
    }
    
}

function addToBill() {
    const selectedDepartment = departmentDropdown.value;
    const selectedParticular = particularsDropdown.value;
    const selectedRate = rateInput.value;

    billItems.push({
        department: selectedDepartment,
        particular: selectedParticular,
        rate: selectedRate
    });

    // Update the bill section
    const listItem = document.createElement('li');
    listItem.innerText = `${selectedDepartment} - ${selectedParticular} - Rs.${selectedRate}`;
    selectedItems.appendChild(listItem);

    // Update the total cost
    cost += parseFloat(selectedRate);
    totalCost.innerText = cost;

    // Clear department and particulars selection
    departmentDropdown.value = '';
    particularsDropdown.value = '';
    rateInput.value = '';
}

// Update patient name in the bill section
patientNameInput.addEventListener('input', function() {
    billPatientName.innerText = patientNameInput.value;
});
    
patientNameInput.addEventListener('input', function() {
    billPatientAddress.innerText = patientAddressInput.value;
});
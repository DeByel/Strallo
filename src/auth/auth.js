const steps = Array.from(document.querySelectorAll('.auth-step'));
const stepDots = Array.from(document.querySelectorAll('.auth-step-dot'));
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('registerForm');
const formMessage = document.getElementById('formMessage');
const studentFields = document.getElementById('studentFields');
const teacherFields = document.getElementById('teacherFields');
const roleInputs = document.querySelectorAll('input[name="role"]');

let currentStep = 0;

function updateStep() {
    steps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep);
    });

    stepDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentStep);
    });

    backBtn.classList.toggle('hidden', currentStep === 0);
    nextBtn.classList.toggle('hidden', currentStep === steps.length - 1);
    submitBtn.classList.toggle('hidden', currentStep !== steps.length - 1);
}

function updateRoleFields() {
    const selectedRole = document.querySelector('input[name="role"]:checked')?.value || 'aluno';
    studentFields.classList.toggle('hidden', selectedRole !== 'aluno');
    teacherFields.classList.toggle('hidden', selectedRole !== 'professor');
}

backBtn.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep -= 1;
        updateStep();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep += 1;
        updateStep();
        updateRoleFields();
    }
});

roleInputs.forEach((input) => {
    input.addEventListener('change', updateRoleFields);
});

updateStep();
updateRoleFields();

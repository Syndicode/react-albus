import createWizardComponent from './components/createWizardComponent';

const Step = createWizardComponent('Step');
const WithWizard = createWizardComponent('WithWizard');

export { Step, WithWizard };
export Wizard from './components/Wizard';
export Steps from './components/Steps';
export withWizard from './withWizard';
export wizardShape from './wizardShape';

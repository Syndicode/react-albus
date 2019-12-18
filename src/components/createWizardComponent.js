import PropTypes from 'prop-types';
import renderCallback from '../utils/renderCallback';

const createWizardComponent = name => {
  const WizardComponent = (props, { wizard: { init, ...wizard } }) =>
    renderCallback(props, wizard);

  WizardComponent.contextTypes = {
    wizard: PropTypes.object,
  };

  WizardComponent.displayName = name;

  return WizardComponent;
};

export default createWizardComponent;

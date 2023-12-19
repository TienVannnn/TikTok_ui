import PropTypes from 'prop-types';

function Menu(props) {
    return <nav>{props.children}</nav>;
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Menu;

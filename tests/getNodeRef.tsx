export default ($wrapperComponent, $indentricator) => ($indentricator ? $wrapperComponent.find($indentricator).getDOMNode() : $wrapperComponent.getDOMNode());

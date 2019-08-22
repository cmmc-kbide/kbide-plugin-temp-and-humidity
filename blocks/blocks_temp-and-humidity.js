Blockly.Blocks['ky_015_temp_humid_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-015 TEMPERATURE & HUMIDITY");
    this.appendValueInput("KY_015_TEMP_HUMID_PIN")
        .setCheck("Number")
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
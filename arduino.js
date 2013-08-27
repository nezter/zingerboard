/*************************************************************************
* ArduGate JavaScript binding
* Distributed under GPL v2.0
* Copyright (c) 2012 Stanley Huang <stanleyhuangyc@gmail.com>
* All rights reserved.
*************************************************************************/


var CMD_EEPROM_WRITE = 0x20;
var CMD_EEPROM_READ = 0x21;

EEPROM=new Object();

EEPROM.read = function (addr)
{
	return SendCommand(CMD_EEPROM_READ, decimalToHex(addr, 4));
}

EEPROM.write = function (addr, byte)
{
	var args = decimalToHex(addr, 4) + " " + decimalToHex(byte, 2);
	return SendCommand(CMD_EEPROM_WRITE, args);
}

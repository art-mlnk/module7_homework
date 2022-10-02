function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.plugged = false;
  }
  ElectricalAppliance.prototype.plugIn = function() {
    this.plugged = true;
  }
  ElectricalAppliance.prototype.getPowerUsed = function() {
    return this.plugged ? this.power : 0;
  }
  const lamp = new ElectricalAppliance('lamp', 40);
  const pc = new ElectricalAppliance('pc', 1000);
  lamp.plugIn();
  pc.plugIn();
  console.log(lamp.getPowerUsed() + pc.getPowerUsed());
class ElectricalAppliance
{
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.plugged = false;
  }
  plugIn()
  {
    this.plugged = true;
  }
  getPowerUsed()
  {
    return this.plugged ? this.power : 0;
  }
}
const lamp = new ElectricalAppliance('lamp', 40);
const pc = new ElectricalAppliance('pc', 1000);
lamp.plugIn();
pc.plugIn();
console.log(lamp.getPowerUsed() + pc.getPowerUsed());
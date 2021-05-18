import { MeasureCategory } from "./measureCategory";

export class MeasureType {
    public externalInsulationOfSolidWall: string = "External Insulation of Solid Wall";
    public internalInsulationOfSolidWall: string = "Internal Insulation of Solid Wall";
    public externalInsulationOfCavityWall: string = "External Insulation of Cavity Wall";
    public internalInsulationOfCavityWall: string = "Internal Insulation of Cavity Wall";
    public cavityWallInsulation0040: string = "Cavity wall insulation (0.040)";
    public cavityWallInsulation0033: string = "Cavity wall insulation (0.033)";
    public cavityWallInsulation0027: string = "Cavity wall insulation (0.027)";
    public cavityWallInsulationPartialFill: string = "Cavity wall insulation - Partial fill";
    public partyCavityWallInsulation: string = "Party cavity wall insulation";
    public loftInsulationGreaterThan100: string = "Loft insulation where there is greater than 100mm pre-existing insulation";
    public loftInsulationLessThanEqualTo100: string = "Loft insulation where there is less than or equal to 100mm pre-existing insulation";
    public flatRoofInsulation: string = "Flat roof insulation ";
    public draughtProofing: string = "Draught proofing";
    public externalDoorsGreaterThan60: string = "Higher performance external doors with greater than 60% glazing area";
    public externalDoorsLessThanEqualTo100: string = "Higher performance external doors with less than or equal to 60% glazing area";
    public parkHomeInsulationFloor: string = "Park home insulation - floor";
    public parkHomeInsulationRoof: string = "Park home insulation - roof";
    public parkHomeInsulationWall: string = "Park home insulation - wall";
    public roomInRoofInsulationInstalled: string = "Room-in-roof insulation insulated";
    public roomInRoofInsulationUninstalled: string = "Room-in-roof insulation uninsulated";
    public underFloorInsulation: string = "Under floor insulation";
    public solidFloorInsulation: string = "Solid floor insulation";
    public windowGlazingImprovedDoubleGlazing: string = "Window glazing - improved double glazing";
    public windowGlazingSingleToDouble: string = "Window glazing - single to double";
    public brokenBoilerReplacementNoPreExistingHeatingControls: string = "Broken replacement - no pre-existing heating controls";
    public brokenBoilerReplacementPreExistingHeatingControls: string = "Broken replacement - pre-existing heating controls";
    public firstTimeCentralHeating: string = "First time central heating (FTCH)";
    public repairNoPreExistingHeatingControls: string = "Repair - no pre-existing heating controls";
    public repairPreExistingHeatingControls: string = "Repair - pre-existing heating controls";
    public upgradeNoPreExistingHeatingControls: string = "Upgrade - no pre-existing heating controls";
    public upgradePreExistingHeatingControls: string = "Upgrade - pre-existing heating controls";
    public eshBrokenReplacementFanStorage: string = "Broken replacement - fan storage";
    public eshBrokenReplacementHighHeatRetention: string = "Broken replacement - high heat retention";
    public eshRepairFanStorage: string = "Repair - fan storage";
    public eshRepairHighHeatRetention: string = "Repair - high heat retention";
    public eshUpgradeFanStorage: string = "Upgrade - fan storage";
    public eshUpgradeHighHeatRetention: string = "Upgrade - high heat retention";
    public DistrictHeatingSystemNewConnection: string = "New connection";
    public DistrictHeatingSystemCHPUpgrade: string = "CHP upgrade";
    public DistrictHeatingSystemHeatMeters: string = "Heat meters";
    public OtherHeatingHeatingControls: string = "Heating controls";
    public OtherHeatingSmartThermostatPreExistingProgrammer: string = "Smart thermostat (pre-existing programmer and room thermostat)";
    public OtherHeatingSmartThermostatNoPreExistingProgrammer: string = "Smart thermostat (no pre-existing programmer and room thermostat)";
    public OtherHeatingTRV: string = "TRV";
    public OtherHeatingCompensationPreExistingHeatingControls: string = "Compensation (pre-existing heating controls)";
    public OtherHeatingCompensationNoPreExistingHeatingControls: string = "Compensation (no pre-existing heating controls)";
    public SolarPV: string = "Solar PV";

    
    measureCategory: MeasureCategory = new MeasureCategory();

    public getMeasureTypeCat(measureType: string) {
        var catG = new Map<string, string>();
        catG.set("External Insulation of Solid Wall", "EWI_solid_a_b");
        catG.set("Internal Insulation of Solid Wall", "IWI_solid_a_b");
        catG.set("External Insulation of Cavity Wall", "EWI_cavity_a_b");
        catG.set("Internal Insulation of Cavity Wall", "IWI_cavity_a_");
        catG.set("Cavity wall insulation (0.040)", "CWI_0.040");
        catG.set("Cavity wall insulation (0.033)", "CWI_0.033");
        catG.set("Cavity wall insulation (0.027)", "CWI_0.027");
        catG.set("Cavity wall insulation - Partial fill", "CWI_partial_fill");
        catG.set("Party cavity wall insulation", "PWI_Cavity");
        catG.set("Loft insulation where there is greater than 100mm pre-existing insulation", "LI_greater100");
        catG.set("Loft insulation where there is less than or equal to 100mm pre-existing insulation", "LI_lessequal100");
        catG.set("Flat roof insulation ", "FRI");
        catG.set("Draught proofing", "DP");
        catG.set("Higher performance external doors with greater than 60% glazing area", "HPED_greater_60");
        catG.set("Higher performance external doors with less than or equal to 60% glazing area", "HPED_less_60");
catG.set("Park home insulation - floor", "PHI_floor");
catG.set("Park home insulation - roof", "PHI_roof");
catG.set("Park home insulation - wall", "PHI_wall");
catG.set("Room-in-roof insulation insulated", "RIRI_res_in");
catG.set("Room-in-roof insulation uninsulated", "RIRI_res_unin");
catG.set("Under floor insulation", "UFI");
catG.set("Solid floor insulation", "SFI");
catG.set("Window glazing - improved double glazing", "WG_improveddouble");
catG.set("Window glazing - single to double", "WG_singletodouble");
catG.set("Broken replacement - no pre-existing heating controls", "B_Broken_[walltype]_nopreHCs");
catG.set("Broken replacement - pre-existing heating controls", "B_Broken_[walltype]_preHCs");
catG.set("First time central heating (FTCH)", "B_First_time_CH_[walltype]");
catG.set("Repair - no pre-existing heating controls", "B_Repair_[walltype]_nopreHCs_2");
catG.set("Repair - pre-existing heating controls", "B_Repair_[walltype]_preHCs_2");
catG.set("Upgrade - no pre-existing heating controls", "B_Upgrade_[walltype]_nopreHCs");
catG.set("Upgrade - pre-existing heating controls", "B_Upgrade_[walltype]_preHCs");
catG.set("Broken replacement - fan storage", "ESH_Broken_fan_[walltype]");
catG.set("Broken replacement - high heat retention", "ESH_Broken_HHR_[walltype]");
catG.set("Repair - fan storage", "ESH_Repair_fan_[walltype]_2");
catG.set("Repair - high heat retention", "ESH_Repair_HHR_[walltype]_2");
catG.set("Upgrade - fan storage", "ESH_Upgrades_fan_[walltype]");
catG.set("Upgrade - high heat retention", "ESH_Upgrades_HHR_[walltype]");
catG.set("New connection", "DHS_new_connection");
catG.set("CHP upgrade", "DHS_CHP_upgrade");
catG.set("Heat meters", "DHS_heat_meters");
catG.set("Heating controls", "Heating_controls_[walltype]");
catG.set("Smart thermostat (pre-existing programmer and room thermostat)", "Smarttherm_[walltype]_preP&RT");
catG.set("Smart thermostat (no pre-existing programmer and room thermostat)", "Smarttherm_[walltype]_nopreP&RT");
catG.set("TRV", "TRV_[walltype]_smarttherm");
catG.set("Compensation (pre-existing heating controls)", "Compensation_[walltype]_preHCs");
catG.set("Compensation (no pre-existing heating controls)", "Compensation_[walltype]_nopreHCs");
catG.set("Solar PV", "Solar_PV");

        return catG.get(measureType);
    }

    public getMeasureType(measureCategory: string) {
        switch(measureCategory) {
            case this.measureCategory.externalInternalWallInsulation:
                return this.getExternalInternalWallInsulationMeasureTypes();
            case this.measureCategory.cavityWallInsulation:
                return this.getCavityWallInsulationMeasureTypes();
            case this.measureCategory.loftInsulation:
                return this.getLoftInsulationMeasureTypes();
            case this.measureCategory.otherInsulation:
                return this.getOtherInsulationMeasureTypes();
            case this.measureCategory.boiler:
                return this.getBoilerMeasureTypes();
            case this.measureCategory.esh:
                return this.getESHMeasureTypes();
            case this.measureCategory.districtHeatingSystem:
                return this.getDistrictHeatingSystemMeasureTypes();
            case this.measureCategory.otherHeating:
                return this.getOtherHeatingMeasureTypes();
            case this.measureCategory.microGeneration:
                return this.getMicroGenerationMeasureTypes();
        }
        return [];
    }
    
    public getExternalInternalWallInsulationMeasureTypes() {
        return [this.externalInsulationOfSolidWall, 
            this.internalInsulationOfSolidWall, 
            this.externalInsulationOfCavityWall, 
            this.internalInsulationOfCavityWall]
    }

    public getCavityWallInsulationMeasureTypes() {
        return [this.cavityWallInsulation0040, 
            this.cavityWallInsulation0033, 
            this.cavityWallInsulation0027, 
            this.cavityWallInsulationPartialFill]
    }

    public getLoftInsulationMeasureTypes() {
        return [this.loftInsulationGreaterThan100, 
            this.loftInsulationLessThanEqualTo100]
    }

    public getOtherInsulationMeasureTypes() {
        return [this.flatRoofInsulation, 
            this.draughtProofing, 
            this.externalDoorsGreaterThan60, 
            this.externalDoorsLessThanEqualTo100, 
            this.parkHomeInsulationFloor, 
            this.parkHomeInsulationRoof, 
            this.parkHomeInsulationWall, 
            this.roomInRoofInsulationInstalled, 
            this.roomInRoofInsulationUninstalled, 
            this.underFloorInsulation, 
            this.solidFloorInsulation, 
            this.windowGlazingImprovedDoubleGlazing, 
            this.windowGlazingSingleToDouble]
    }

    public getBoilerMeasureTypes() {
        return [this.brokenBoilerReplacementNoPreExistingHeatingControls, 
            this.brokenBoilerReplacementPreExistingHeatingControls, 
            this.firstTimeCentralHeating, 
            this.repairNoPreExistingHeatingControls, 
            this.repairPreExistingHeatingControls, 
            this.upgradeNoPreExistingHeatingControls, 
            this.upgradePreExistingHeatingControls]
    }

    public getESHMeasureTypes() {
        return [this.eshBrokenReplacementFanStorage, 
            this.eshBrokenReplacementHighHeatRetention, 
            this.eshRepairFanStorage, 
            this.eshRepairHighHeatRetention, 
            this.eshUpgradeFanStorage, 
            this.eshUpgradeHighHeatRetention]
    }

    public getDistrictHeatingSystemMeasureTypes() {
        return [this.DistrictHeatingSystemNewConnection, 
            this.DistrictHeatingSystemCHPUpgrade, 
            this.DistrictHeatingSystemHeatMeters]
    }

    public getOtherHeatingMeasureTypes() {
        return [this.OtherHeatingHeatingControls, 
            this.OtherHeatingSmartThermostatPreExistingProgrammer, 
            this.OtherHeatingSmartThermostatNoPreExistingProgrammer, 
            this.OtherHeatingTRV, 
            this.OtherHeatingCompensationPreExistingHeatingControls, 
            this.OtherHeatingCompensationNoPreExistingHeatingControls]
    }

    public getMicroGenerationMeasureTypes() {
       return [this.SolarPV]; 
    }
}
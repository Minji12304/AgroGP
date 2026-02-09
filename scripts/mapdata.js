var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#232320",
    
    //State defaults
    state_description: "State description",
    state_color: "#f6f6ea",
    state_hover_color: "#f1a926",
    state_url: "",
    border_size: "1.5",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "circle",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-3",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    VEA: {
      name: "Distrito Capital",
      inactive: "yes"
    },
    VEB: {
      name: "Anzoátegui",
      inactive: "yes"
    },
    VEC: {
      name: "Apure",
      inactive: "yes"
    },
    VED: {
      name: "Aragua",
      inactive: "yes"
    },
    VEE: {
      name: "Barinas",
      inactive: "yes"
    },
    VEF: {
      name: "Bolívar",
      inactive: "yes"
    },
    VEG: {
      name: "Carabobo",
      inactive: "yes"
    },
    VEH: {
      name: "Cojedes",
      hover_color: "#ffe5ac",
      description: "Es uno de los 23 estados de Venezuela, ubicado en la región central-noroeste, caracterizado por sus extensos paisajes llaneros y clima cálido.",
      color: "#f1a926"
    },
    VEI: {
      name: "Falcón",
      inactive: "yes"
    },
    VEJ: {
      name: "Guárico",
      inactive: "yes"
    },
    VEK: {
      name: "Lara",
      inactive: "yes"
    },
    VEL: {
      name: "Mérida",
      inactive: "yes"
    },
    VEM: {
      name: "Miranda",
      inactive: "yes"
    },
    VEN: {
      name: "Monagas",
      inactive: "yes"
    },
    VEO: {
      name: "Nueva Esparta",
      inactive: "yes"
    },
    VEP: {
      name: "Portuguesa",
      inactive: "yes"
    },
    VER: {
      name: "Sucre",
      inactive: "yes"
    },
    VES: {
      name: "Táchira",
      inactive: "yes"
    },
    VET: {
      name: "Trujillo",
      inactive: "yes"
    },
    VEU: {
      name: "Yaracuy",
      inactive: "yes"
    },
    VEV: {
      name: "Zulia",
      inactive: "yes"
    },
    VEW: {
      name: "Dependencias Federales",
      inactive: "yes"
    },
    VEX: {
      name: "La Guaira",
      inactive: "yes"
    },
    VEY: {
      name: "Delta Amacuro",
      inactive: "yes"
    },
    VEZ: {
      name: "Amazonas",
      inactive: "yes"
    }
  },
  locations: {
    "0": {
      name: "Pao de San Juan Bautista",
      lat: "9.38278",
      lng: "-68.11528",
      color: "#add5db",
      description: "El Pao fue fundado el 24 de junio de 1661 por Fray Pedro de Berja y es considerado la ciudad primogénita del estado Cojedes. Su nombre proviene de las aves indígenas Paoaci, Pao y Pauí, pertenecientes a los pueblos caribes, quienes llamaban “Paují” a esta ave de plumaje negro brillante, copete amarillo y gran presencia en la región durante esa época."
    }
  },
  labels: {
    VEA: {
      name: "Distrito Capital",
      parent_id: "VEA"
    },
    VEB: {
      name: "Anzoátegui",
      parent_id: "VEB"
    },
    VEC: {
      name: "Apure",
      parent_id: "VEC"
    },
    VED: {
      name: "Aragua",
      parent_id: "VED"
    },
    VEE: {
      name: "Barinas",
      parent_id: "VEE"
    },
    VEF: {
      name: "Bolívar",
      parent_id: "VEF"
    },
    VEG: {
      name: "Carabobo",
      parent_id: "VEG"
    },
    VEH: {
      name: "Cojedes",
      parent_id: "VEH"
    },
    VEI: {
      name: "Falcón",
      parent_id: "VEI"
    },
    VEJ: {
      name: "Guárico",
      parent_id: "VEJ"
    },
    VEK: {
      name: "Lara",
      parent_id: "VEK"
    },
    VEL: {
      name: "Mérida",
      parent_id: "VEL"
    },
    VEM: {
      name: "Miranda",
      parent_id: "VEM"
    },
    VEN: {
      name: "Monagas",
      parent_id: "VEN"
    },
    VEO: {
      name: "Nueva Esparta",
      parent_id: "VEO"
    },
    VEP: {
      name: "Portuguesa",
      parent_id: "VEP"
    },
    VER: {
      name: "Sucre",
      parent_id: "VER"
    },
    VES: {
      name: "Táchira",
      parent_id: "VES"
    },
    VET: {
      name: "Trujillo",
      parent_id: "VET"
    },
    VEU: {
      name: "Yaracuy",
      parent_id: "VEU"
    },
    VEV: {
      name: "Zulia",
      parent_id: "VEV"
    },
    VEW: {
      name: "Dependencias Federales",
      parent_id: "VEW"
    },
    VEX: {
      name: "La Guaira",
      parent_id: "VEX"
    },
    VEY: {
      name: "Delta Amacuro",
      parent_id: "VEY"
    },
    VEZ: {
      name: "Amazonas",
      parent_id: "VEZ"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};
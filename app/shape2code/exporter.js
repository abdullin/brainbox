var json=[
  {
    "type": "shape_designer.figure.ExtPolygon",
    "id": "deca748f-5f68-724b-54a1-a8aae5ce28c8",
    "x": 7946.870000000001,
    "y": 7870.25,
    "width": 106.25999999999931,
    "height": 259.5,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "baseClass": "draw2d.SetFigure",
      "code": "/**\n * by 'Draw2D Shape Designer'\n *\n * Custom JS code to tweak the standard behaviour of the generated\n * shape. add your custome code and event handler here.\n *\n *\n */\ntestShape = testShape.extend({\n\n    init: function(attr, setter, getter){\n         this._super(attr, setter, getter);\n\n         // your special code here\n    },\n\n    /**\n     *  Called by the simulator for every calculation\n     *  loop\n     *  @required\n     **/\n    calculate:function()\n    {\n        this.getOutputPorts().each(function(index,port){\n            port.setValue(hardware.raspi.get(port.getName()));\n        });\n    },\n\n\n    /**\n     *  Called if the simulation mode is starting\n     *  @required\n     **/\n    onStart:function()\n    {\n    },\n\n    /**\n     *  Called if the simulation mode is stopping\n     *  @required\n     **/\n    onStop:function()\n    {\n    },\n    \n    getRequiredHardware: function(){\n      return {\n        raspi: true,\n        arduino: false\n      }\n    }\n    \n});",
      "name": "Rectangle",
      "markdown": "# Raspberry Pi Input \n\n## About the GPIO of the raspi\nThe Raspberry Pi provides Input/Outport ports \nintended to control or monitor other devices and \nsubsystem modules. These `GPIO` (general purpose I/O) \nsignals on the 2x13 header pins on the RPi motherboad \ninclude SPI, I2C, serial UART, 3V3 and 5V power.\n\n## Interaction\nYou can control these GPIO pins on the raspi. Just install `brainbox` \non your RaspberryPi.\n\n## Install\n\n```\nsudo npm install -g brainbox\n````\n\nThis takes a while on a raspbery B+ 2 but should success.\n\n## Start the server on the raspi\nafter this you can start the BrainBox server on the raspberry\nwith\n\n```\nbrainbox \n```\n\n## Connect with the browser\n\nAfter this the BrainBox echos the url on the console \nhow to connect with your browser to your Hardware.\n\nNow you can drive the GPIO pins on raspi with the `brainbox`\n\n",
      "type": "Output",
      "direction": 1
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#FFFFFF",
    "color": "#303030",
    "stroke": 1,
    "radius": 2,
    "dasharray": null,
    "vertices": [
      {
        "x": 8039.670000000001,
        "y": 7916.25
      },
      {
        "x": 8053.13,
        "y": 7916.25
      },
      {
        "x": 8053.13,
        "y": 7870.25
      },
      {
        "x": 7948.13,
        "y": 7870.25
      },
      {
        "x": 7948.13,
        "y": 7916.25
      },
      {
        "x": 7946.870000000001,
        "y": 8129.75
      },
      {
        "x": 8039.670000000001,
        "y": 8129.75
      },
      {
        "x": 8039.670000000001,
        "y": 7916.25
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "bb6288f8-25aa-e53b-0457-e8c1135fe7bf",
    "x": 7951.3036,
    "y": 7876.25,
    "width": 58.015625,
    "height": 21.015625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "Input GPIO",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 18,
    "fontColor": "#BD2466",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyCircle",
    "id": "901b96e7-19ba-81f5-9c02-8599dbd64c2b",
    "x": 7969.540060244196,
    "y": 7923.148874999999,
    "width": 31,
    "height": 33,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Circle"
    },
    "cssClass": "shape_designer_figure_PolyCircle",
    "ports": [],
    "bgColor": "#000000",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "918554d3-5d1a-c476-655d-56fcaa50e03f",
    "x": 7979.482960244197,
    "y": 7920.524625,
    "width": 11.141120000000228,
    "height": 9.830400000000736,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#000000",
    "color": "#303030",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "vertices": [
      {
        "x": 7990.624080244197,
        "y": 7930.355025000001
      },
      {
        "x": 7979.482960244197,
        "y": 7930.355025000001
      },
      {
        "x": 7979.482960244197,
        "y": 7920.524625
      },
      {
        "x": 7990.624080244197,
        "y": 7920.524625
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "8355e815-33ab-61ee-3f40-fcddb68252fb",
    "x": 7977.311161552356,
    "y": 7950.003398649999,
    "width": 14.171798691840195,
    "height": 8.837371771443031,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 5,
    "dasharray": null,
    "vertices": [
      {
        "x": 7977.311161552356,
        "y": 7951.571208564317
      },
      {
        "x": 7984.630710458294,
        "y": 7950.003398649999
      },
      {
        "x": 7991.091265905031,
        "y": 7951.356166496962
      },
      {
        "x": 7991.482960244196,
        "y": 7956.303634930122
      },
      {
        "x": 7984.053463514596,
        "y": 7958.840770421442
      },
      {
        "x": 7978.2784686625255,
        "y": 7956.303634930122
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "b76f1f2c-4b36-c11e-9972-def4e0c60dc3",
    "x": 7988.013072980197,
    "y": 7912.088599607998,
    "width": 18.986734080001952,
    "height": 14.457275392001975,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#6B8E23",
    "color": "#000000",
    "stroke": 2,
    "radius": 4,
    "dasharray": null,
    "vertices": [
      {
        "x": 8000.603734582848,
        "y": 7926.545875
      },
      {
        "x": 7988.555884649639,
        "y": 7926.1914468740015
      },
      {
        "x": 7988.013072980197,
        "y": 7917.391013914051
      },
      {
        "x": 7992.845446555991,
        "y": 7913.263411753026
      },
      {
        "x": 7998.7515619557835,
        "y": 7912.088599607998
      },
      {
        "x": 8006.999807060199,
        "y": 7913.12098328975
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyCircle",
    "id": "ec0bfd07-0974-75a8-cec7-26676326f4a1",
    "x": 7979.482960244197,
    "y": 7939.850275,
    "width": 11,
    "height": 11,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Circle"
    },
    "cssClass": "shape_designer_figure_PolyCircle",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 0,
    "dasharray": null,
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyCircle",
    "id": "53a44861-b93e-277a-7230-2b3117b59744",
    "x": 7985.902460244197,
    "y": 7931.570425,
    "width": 8,
    "height": 9,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Circle"
    },
    "cssClass": "shape_designer_figure_PolyCircle",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyCircle",
    "id": "7504563b-fb58-e81a-db91-58deaba8e0ff",
    "x": 7977.402460244197,
    "y": 7931.070425,
    "width": 8,
    "height": 9,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Circle"
    },
    "cssClass": "shape_designer_figure_PolyCircle",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "3237a6cf-13dd-a5b8-66e1-b80c8de4e3c2",
    "x": 7967.3355686625255,
    "y": 7911.545875,
    "width": 22,
    "height": 15,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#6B8E23",
    "color": "#000000",
    "stroke": 2,
    "radius": 10,
    "dasharray": null,
    "vertices": [
      {
        "x": 7986.0855686625255,
        "y": 7923.099929054054
      },
      {
        "x": 7978.085568662524,
        "y": 7926.545875
      },
      {
        "x": 7973.398068662526,
        "y": 7924.721550675675
      },
      {
        "x": 7970.2105686625255,
        "y": 7920.870199324323
      },
      {
        "x": 7967.3355686625255,
        "y": 7913.370199324323
      },
      {
        "x": 7979.0855686625255,
        "y": 7911.545875
      },
      {
        "x": 7989.3355686625255,
        "y": 7915.599929054053
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "d5ded4b5-5027-e1f6-f52e-39fddae0735b",
    "x": 7969.3355686625255,
    "y": 7939.850275,
    "width": 10,
    "height": 13,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 7970.462084578694,
        "y": 7939.850275
      },
      {
        "x": 7978.760839186436,
        "y": 7943.888405734331
      },
      {
        "x": 7979.3355686625255,
        "y": 7951.638459498454
      },
      {
        "x": 7973.827888886355,
        "y": 7952.850275
      },
      {
        "x": 7969.3355686625255,
        "y": 7948.6511697432325
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "a6b803b8-ba32-d0ee-99cd-468538588d7e",
    "x": 7990.726501398583,
    "y": 7941.460641348286,
    "width": 9.717104971893605,
    "height": 11.453381035394159,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 7992.600557192048,
        "y": 7943.60769425824
      },
      {
        "x": 8000.443606370477,
        "y": 7941.460641348286
      },
      {
        "x": 8000.298016378347,
        "y": 7943.264958350651
      },
      {
        "x": 7998.982960244197,
        "y": 7951.358609498454
      },
      {
        "x": 7990.726501398583,
        "y": 7952.91402238368
      },
      {
        "x": 7990.958645200359,
        "y": 7949.917507969794
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "46ff341a-d7c2-bc18-3345-bedc33f4d125",
    "x": 7993.482960244197,
    "y": 7929.070425,
    "width": 10,
    "height": 13,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 7994.609476160365,
        "y": 7929.070425
      },
      {
        "x": 8002.908230768107,
        "y": 7933.108555734331
      },
      {
        "x": 8003.482960244197,
        "y": 7940.858609498454
      },
      {
        "x": 7997.9752804680265,
        "y": 7942.070425
      },
      {
        "x": 7993.482960244197,
        "y": 7937.8713197432335
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "0c9eb891-48b8-4dd8-6403-65c1415ee66b",
    "x": 7987.402460244197,
    "y": 7923.148874999999,
    "width": 10,
    "height": 9,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 7988.528976160365,
        "y": 7923.148874999999
      },
      {
        "x": 7996.827730768107,
        "y": 7925.94450396992
      },
      {
        "x": 7997.402460244197,
        "y": 7931.309925806621
      },
      {
        "x": 7991.8947804680265,
        "y": 7932.148874999999
      },
      {
        "x": 7987.402460244197,
        "y": 7929.241802129929
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "8ac7f75a-c167-c3fd-f699-09791f3926af",
    "x": 7967.3355686625255,
    "y": 7928.070425,
    "width": 10.456062674948043,
    "height": 13.944892805120617,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 7974.560938139015,
        "y": 7928.070425
      },
      {
        "x": 7977.7916313374735,
        "y": 7931.76495835065
      },
      {
        "x": 7975.703481090042,
        "y": 7940.459904919893
      },
      {
        "x": 7969.33680785467,
        "y": 7942.0153178051205
      },
      {
        "x": 7967.3355686625255,
        "y": 7932.748151139074
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.PolyRect",
    "id": "bca87bbc-9e34-23f4-0521-dd7f67ea13cd",
    "x": 7975.58743561313,
    "y": 7922.148874999999,
    "width": 12.081641637145367,
    "height": 8.429496729600942,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Rectangle"
    },
    "cssClass": "shape_designer_figure_PolyRect",
    "ports": [],
    "bgColor": "#B3003B",
    "color": "#000000",
    "stroke": 1,
    "radius": 9,
    "dasharray": null,
    "vertices": [
      {
        "x": 7983.684328147938,
        "y": 7922.148874999999
      },
      {
        "x": 7987.669077250275,
        "y": 7924.26837976911
      },
      {
        "x": 7984.647334132353,
        "y": 7929.256555262895
      },
      {
        "x": 7975.58743561313,
        "y": 7930.5783717296
      },
      {
        "x": 7976.669077250275,
        "y": 7923.458034893415
      }
    ],
    "blur": 0,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.SizeFilter"
      },
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.FillColorFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "c0263337-e446-a1b8-226f-5f6e1f745a14",
    "x": 8035.3036,
    "y": 7935.39,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_9",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "7ac95f2b-2bf2-9095-1b66-2cb7610b497d",
    "x": 8035.3036,
    "y": 7960.75,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_10",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "949fa180-3319-426e-6e55-97b70b13e790",
    "x": 8035.3036,
    "y": 7984.530425,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_11",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "e80701b4-989b-0afa-6008-0c8ef4f6f890",
    "x": 8035.3036,
    "y": 8008.501174999999,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_12",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "aa559daf-c4e6-ce1f-8a08-ee57d79ba884",
    "x": 8035.3036,
    "y": 8031.324875,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_13",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "898639f4-8b79-0ade-8c2d-a52dff31ec59",
    "x": 8035.3036,
    "y": 8056.25,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_14",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "9cdc2f58-fd29-f4be-84fe-7821b0f308dd",
    "x": 8035.3036,
    "y": 8080.657625,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_15",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtPort",
    "id": "d73d3576-a22c-bddf-3ab8-483ca609ed41",
    "x": 8035.3036,
    "y": 8103.742324999999,
    "width": 10,
    "height": 10,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "gpo_16",
      "type": "Output",
      "direction": 1,
      "fanout": 20
    },
    "cssClass": "shape_designer_figure_ExtPort",
    "ports": [],
    "bgColor": "#37B1DE",
    "color": "#1B1B1B",
    "stroke": 1,
    "dasharray": null,
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FanoutFilter"
      },
      {
        "name": "shape_designer.filter.PortDirectionFilter"
      },
      {
        "name": "shape_designer.filter.PortTypeFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "7ca5348b-49eb-c647-9dab-dbdd367e16ae",
    "x": 8013.540060244196,
    "y": 7927.850275,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "9",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "1c732687-3e0d-e704-2336-227e44ffd521",
    "x": 8008.443606370476,
    "y": 7953.25,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "10",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "2019df10-90de-85f7-0e60-faa206ef4b27",
    "x": 8009.443606370476,
    "y": 7977.108875,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "11",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "25ea6ffd-20ec-f93a-d843-4a19a5a0d3ee",
    "x": 8009.540060244196,
    "y": 8000.108875,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "12",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "1270a0bf-b14f-6758-2285-d77af15c92f6",
    "x": 8009.540060244196,
    "y": 8023.483275,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "13",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "a9871042-ca1e-3c83-b2c3-65ca4da07dcc",
    "x": 8009.443606370476,
    "y": 8047.251375,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "14",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "016f18ce-21b7-efa2-9902-ea72cbb588d4",
    "x": 8010.443606370476,
    "y": 8073.25,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "15",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLabel",
    "id": "bdfb8591-d3bf-900f-2695-eecf93b3d536",
    "x": 8010.443606370476,
    "y": 8095.803749999999,
    "width": 28.328125,
    "height": 21.390625,
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Label"
    },
    "cssClass": "shape_designer_figure_ExtLabel",
    "ports": [],
    "bgColor": "none",
    "color": "#1B1B1B",
    "stroke": 0,
    "radius": 0,
    "dasharray": null,
    "text": "16",
    "outlineStroke": 0,
    "outlineColor": "none",
    "fontSize": 16,
    "fontColor": "#080808",
    "fontFamily": null,
    "editor": "LabelInplaceEditor",
    "filters": [
      {
        "name": "shape_designer.filter.PositionFilter"
      },
      {
        "name": "shape_designer.filter.FontSizeFilter"
      },
      {
        "name": "shape_designer.filter.FontColorFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLine",
    "id": "1ab2ef18-5dba-f3e5-a43d-6f32a31efdc8",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Line"
    },
    "cssClass": "shape_designer_figure_ExtLine",
    "stroke": 1,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.VertexSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 8000.733852052199,
        "y": 7918.722252279998
      },
      {
        "x": 7997.6208920522,
        "y": 7920.406003191999
      },
      {
        "x": 7995.076260244197,
        "y": 7923.799457272002
      }
    ],
    "router": "draw2d.layout.connection.VertexRouter",
    "radius": 2,
    "filters": [
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  },
  {
    "type": "shape_designer.figure.ExtLine",
    "id": "3c3dfd1c-cb05-2bb9-f82b-4d515d365750",
    "alpha": 1,
    "angle": 0,
    "userData": {
      "name": "Line"
    },
    "cssClass": "shape_designer_figure_ExtLine",
    "stroke": 1,
    "color": "#000000",
    "outlineStroke": 0,
    "outlineColor": "none",
    "policy": "draw2d.policy.line.VertexSelectionFeedbackPolicy",
    "vertex": [
      {
        "x": 7984.262820244197,
        "y": 7922.295275000001
      },
      {
        "x": 7981.992653204197,
        "y": 7919.158722039998
      },
      {
        "x": 7977.843437972195,
        "y": 7916.290604536
      }
    ],
    "router": "draw2d.layout.connection.VertexRouter",
    "radius": 4,
    "filters": [
      {
        "name": "shape_designer.filter.StrokeFilter"
      },
      {
        "name": "shape_designer.filter.RadiusFilter"
      }
    ]
  }
];
var pkg='draw2d_circuit_hardware_RaspiINPUT';
app.fileNew();

var reader = new draw2d.io.json.Reader();
reader.unmarshal(app.view,json);

var code = null;
var img  = null;
var customCode=app.getConfiguration("code");
var markdown = app.getConfiguration("markdown");
markdown = markdown?markdown:"";
var writer = new shape_designer.FigureWriter();
try {
    writer.marshal(app.view, pkg, function (js) {
        code = js;
        try {
            eval(js);
        }
        catch (exc) {
            console.log("Error in shape code. \nRemove error and try it again:\n\n>>    " + exc);
            throw exc;
        }
        var splash = $(
            '<div class="overlay-scale">' +
            '<div id="test_canvas">' +
            '</div>' +
            '<div>');

        // fadeTo MUSS leider sein. Man kann mit raphael keine paper.text elemente einfügen
        // wenn das canvas nicht sichtbar ist. In diesen Fall mach ich das Canvas "leicht" sichtbar und raphael ist
        // zufrieden.
        $("body").append(splash);
        var canvas = new draw2d.Canvas("test_canvas");
        var test = eval("new "+pkg+"()");
        canvas.add(test, 400, 160);
        canvas.commonPorts.each(function (i, p) {
            p.setVisible(false);
        });

        canvas.getBoundingBox = function () {
            var xCoords = [];
            var yCoords = [];
            this.getFigures().each(function (i, f) {
                var b = f.getBoundingBox();
                xCoords.push(b.x, b.x + b.w);
                yCoords.push(b.y, b.y + b.h);
            });
            var minX = Math.min.apply(Math, xCoords);
            var minY = Math.min.apply(Math, yCoords);
            var width = Math.max(10, Math.max.apply(Math, xCoords) - minX);
            var height = Math.max(10, Math.max.apply(Math, yCoords) - minY);

            return new draw2d.geo.Rectangle(minX, minY, width, height);
        };

        new draw2d.io.png.Writer().marshal(canvas, function (imageDataUrl, base64) {
            img = base64;
            splash.remove();
        }, canvas.getBoundingBox().scale(10, 10));
    });
}
catch(e){
    console.log(e);
    code="";
    img="";
}



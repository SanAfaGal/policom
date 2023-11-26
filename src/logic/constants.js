import availableComputerImage from '../assets/pc-green.svg'
import reservedComputerImage from '../assets/pc-red.svg'

export const COMPUTER_STATE = {
    false: availableComputerImage,
    true: reservedComputerImage
}

export const USER = {
    "student": 'Student',
    "teacher": 'Teacher'
}

// Data fetch
export const jsonComputers = {
    "computers": [
        {
            "id": "HP-",
            "room": 201,
            "reserved": null,
            "features": {
                "brand": "HP",
                "model": "Pavilion 15",
                "processor": "Intel Core i5",
                "ram": "8GB",
                "storage": "256GB SSD"
            }
        },
        {
            "id": "DE-",
            "room": 202,
            "reserved": null,
            "features": {
                "brand": "Dell",
                "model": "Inspiron 14",
                "processor": "AMD Ryzen 7",
                "ram": "16GB",
                "storage": "512GB SSD"
            }
        },
        {
            "id": "LE-",
            "room": 203,
            "reserved": null,
            "features": {
                "brand": "Lenovo",
                "model": "IdeaPad 3",
                "processor": "Intel Core i3",
                "ram": "4GB",
                "storage": "1TB HDD"
            }
        },
        {
            "id": "AS-",
            "room": 204,
            "reserved": null,
            "features": {
                "brand": "Asus",
                "model": "VivoBook S14",
                "processor": "AMD Ryzen 5",
                "ram": "8GB",
                "storage": "512GB SSD"
            }
        },
        {
            "id": "MI-",
            "room": 205,
            "reserved": null,
            "features": {
                "brand": "Microsoft",
                "model": "Surface Laptop 4",
                "processor": "Intel Core i7",
                "ram": "16GB",
                "storage": "512GB SSD"
            }
        },
        {
            "id": "AC-",
            "room": 206,
            "reserved": null,
            "features": {
                "brand": "Acer",
                "model": "Swift 3",
                "processor": "AMD Ryzen 7",
                "ram": "12GB",
                "storage": "1TB SSD"
            }
        },
        {
            "id": "LG-",
            "room": 207,
            "reserved": null,
            "features": {
                "brand": "LG",
                "model": "Gram 17",
                "processor": "Intel Core i5",
                "ram": "16GB",
                "storage": "512GB SSD"
            }
        },
        {
            "id": "SA-",
            "room": 208,
            "reserved": null,
            "features": {
                "brand": "Samsung",
                "model": "Galaxy Book Flex",
                "processor": "Intel Core i7",
                "ram": "16GB",
                "storage": "512GB SSD"
            }
        },
        {
            "id": "TO-",
            "room": 209,
            "reserved": null,
            "features": {
                "brand": "Toshiba",
                "model": "Portégé X30L-G",
                "processor": "Intel Core i7",
                "ram": "16GB",
                "storage": "512GB SSD"
            }
        },
        {
            "id": "DD-",
            "room": 211,
            "reserved": null,
            "features": {
                "brand": "Dell",
                "model": "XPS 13",
                "processor": "Intel Core i7",
                "ram": "32GB",
                "storage": "1TB SSD"
            }
        }
    ]
}

// Data fetch
export const jsonRooms = {
  "rooms": [
    {
      "id": 201,
      "capacity": 30,
      "reserved": null,
      "availability": [
        { "start": 8, "end": 10, "available": true },
        { "start": 10, "end": 12, "available": true },
        { "start": 12, "end": 14, "available": false },
        { "start": 14, "end": 16, "available": false },
        { "start": 16, "end": 18, "available": true },
        { "start": 18, "end": 20, "available": false }
      ],
      "software": [
        "Visual Studio Code",
        "Eclipse",
        "IntelliJ IDEA",
        "MATLAB",
        "Git",
        "Microsoft Office",
        "Python (con Anaconda)",
        "Java Development Kit (JDK)",
        "C/C++ Compilers",
        "MySQL Workbench"
      ]
    },
    {
      "id": 202,
      "capacity": 25,
      "reserved": null,
      "availability": [
        { "start": 8, "end": 10, "available": false },
        { "start": 10, "end": 12, "available": true },
        { "start": 12, "end": 14, "available": true },
        { "start": 14, "end": 16, "available": true },
        { "start": 16, "end": 18, "available": true },
        { "start": 18, "end": 20, "available": false }
      ],
      "software": [
        "Adobe Creative Cloud",
        "CorelDRAW",
        "Sketch",
        "Figma",
        "Blender",
        "AutoCAD",
        "Microsoft Office"
      ]
    },
    {
      "id": 203,
      "capacity": 20,
      "reserved": null,
      "availability": [
        { "start": 8, "end": 10, "available": false },
        { "start": 10, "end": 12, "available": false },
        { "start": 12, "end": 14, "available": true },
        { "start": 14, "end": 16, "available": false },
        { "start": 16, "end": 18, "available": true },
        { "start": 18, "end": 20, "available": true }
      ],
      "software": [
        "SPSS",
        "R",
        "Microsoft Excel",
        "STATA",
        "NVivo",
        "Microsoft Office",
        "Google Earth"
      ]
    },
    {
      "id": 204,
      "capacity": 35,
      "reserved": null,
      "availability": [
        { "start": 8, "end": 10, "available": true },
        { "start": 10, "end": 12, "available": false },
        { "start": 12, "end": 14, "available": true },
        { "start": 14, "end": 16, "available": false },
        { "start": 16, "end": 18, "available": true },
        { "start": 18, "end": 20, "available": true }
      ],
      "software": [
        "Multisim",
        "MATLAB",
        "Xilinx ISE",
        "LTspice",
        "AutoCAD Electrical",
        "SolidWorks Electrical",
        "Microsoft Office"
      ]
    },
    {
      "id": 205,
      "capacity": 40,
      "reserved": null,
      "availability": [
        { "start": 8, "end": 10, "available": false },
        { "start": 10, "end": 12, "available": true },
        { "start": 12, "end": 14, "available": true },
        { "start": 14, "end": 16, "available": false },
        { "start": 16, "end": 18, "available": true },
        { "start": 18, "end": 20, "available": false }
      ],
      "software": [
        "Electronic Health Record (EHR) Systems",
        "SPSS",
        "MATLAB",
        "Microsoft Office (con plantillas médicas)",
        "ImageJ",
        "OpenClinica"
      ]
    },
    {
      "id": 206,
      "capacity": 28,
      "reserved": null,
      "availability": [
        { "start": 8, "end": 10, "available": true },
        { "start": 10, "end": 12, "available": true },
        { "start": 12, "end": 14, "available": false },
        { "start": 14, "end": 16, "available": false },
        { "start": 16, "end": 18, "available": true },
        { "start": 18, "end": 20, "available": true }
      ],
      "software": [
        "ArcGIS",
        "QGIS",
        "R",
        "MATLAB",
        "Microsoft Office",
        "Google Earth Pro"
      ]
    },
    {
      "id": 207,
      "capacity": 22,
      "reserved": null,
      "availability": [
        { "start": 8, "end": 10, "available": true },
        { "start": 10, "end": 12, "available": true },
        { "start": 12, "end": 14, "available": false },
        { "start": 14, "end": 16, "available": true },
        { "start": 16, "end": 18, "available": false },
        { "start": 18, "end": 20, "available": false }
      ],
      "software": [
        "Adobe Premiere Pro",
        "Adobe Audition",
        "Final Cut Pro",
        "Avid Media Composer",
        "Adobe InCopy",
        "Microsoft Office"
      ]
    },
    {
      "id": 208,
      "capacity": 18,
      "reserved": null,
      "availability": [
        { "start": 8, "end": 10, "available": false },
        { "start": 10, "end": 12, "available": false },
        { "start": 12, "end": 14, "available": false },
        { "start": 14, "end": 16, "available": true },
        { "start": 16, "end": 18, "available": true },
        { "start": 18, "end": 20, "available": true }
      ],
      "software": [
        "AutoCAD",
        "Revit",
        "SketchUp",
        "Rhino",
        "Lumion",
        "Adobe Creative Cloud",
        "Microsoft Office"
      ]
    },
    {
      "id": 209,
      "capacity": 15,
      "reserved": null,
      "availability": [
        { "start": 8, "end": 10, "available": false },
        { "start": 10, "end": 12, "available": false },
        { "start": 12, "end": 14, "available": false },
        { "start": 14, "end": 16, "available": false },
        { "start": 16, "end": 18, "available": true },
        { "start": 18, "end": 20, "available": true }
      ],
      "software": [
        "Microsoft Excel",
        "Tableau",
        "SAP",
        "QuickBooks",
        "Stata",
        "R",
        "Microsoft Office"
      ]
    },
    {
      "id": 211,
      "capacity": 30,
      "reserved": null,
      "availability": [
        { "start": 8, "end": 10, "available": true },
        { "start": 10, "end": 12, "available": false },
        { "start": 12, "end": 14, "available": false },
        { "start": 14, "end": 16, "available": true },
        { "start": 16, "end": 18, "available": false },
        { "start": 18, "end": 20, "available": true }
      ],
      "software": [
        "R",
        "IBM SPSS Statistics",
        "NVivo",
        "Microsoft Excel",
        "Microsoft Office",
        "Atlas.ti",
        "Qualtrics"
      ]
    }
  ]
}

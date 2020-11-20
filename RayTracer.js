// Final Project: Ray Tracing
// Names: Nick Scrivanich - ns1284, David Bradshaw - dab635, Benjamin Jones - bj723
// Goal: Build a ray tracer

// create a canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

// width and height of final image
const WIDTH = window.screen.width;
const HEIGHT = window.screen.height;
const aspectRatio = WIDTH / HEIGHT;

// size the canvas to your desired image
canvas.width = WIDTH;
canvas.height = HEIGHT;

// get the imageData and pixel array from the canvas
var imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
var data = imgData.data;

// basis vectors
var X = new Vector(1, 0, 0);
var Y = new Vector(0, 1, 0);
var Z = new Vector(0, 0, 1);

// origin
var O = new Vector(0, 0, 0);

const ambientLight = 0.2;

// add colors
var green = new Color(0.5, 1.0, 0.5, 0.3);

//---------------------------------ADDFIELDS TO HTML---------------------------------------------------------------------------------//
function addFields_lights() {
    //SOURCE: https://stackoverflow.com/questions/14853779/adding-input-elements-dynamically-to-form
    //regular expresion for only numbers 0-10
    var regTest = RegExp(/^[0-9]\d*$/);

    // Number of inputs to create
    var number = parseInt(document.getElementById("lightSources").value);

    //check the user input for amount of lights
    if (number < 0 || number > 10 || !regTest.test(number)) {
        alert("ERROR: Input invalid for number of lights");
    }
    else {
        // Container <div> where dynamic content will be placed
        var container = document.getElementById("containerLights");
        // Clear previous contents of the container
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        //Prompt user for input for the X value of the light sources. Then give the X value an id for getElementByID()
        for (i = 0; i < number; i++) {
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "text";
            input.name = "lightSources" + (i + 1);
            input.id = "lightSourcesX" + (i + 1);
            input.placeholder = "Position X of Light Source  " + (i + 1) + ": ";
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }

        //Prompt user for input for the Y value of the light sources. Then give the Y value an id for getElementByID()
        container.appendChild(document.createElement("br"));
        for (i = 0; i < number; i++) {
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "text";
            input.name = "lightSources" + (i + 1);
            input.id = "lightSourcesY" + (i + 1);
            input.placeholder = "Position Y of Light Source  " + (i + 1) + ": ";
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }

        //Prompt user for input for the Z value of the light sources. Then give the X value an id for getElementByID()
        container.appendChild(document.createElement("br"));
        for (i = 0; i < number; i++) {
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "text";
            input.name = "lightSources" + (i + 1);
            input.id = "lightSourcesZ" + (i + 1);
            input.placeholder = "Position Z of Light Source  " + (i + 1) + ": ";
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }

        //Prompt user for input for the r value of the light color. Then give the r value an id for getElementByID()
        container.appendChild(document.createElement("br"));
        for (i = 0; i < number; i++) {
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "text";
            input.name = "lightSources" + (i + 1);
            input.id = "lightColorsR" + (i + 1);
            input.placeholder = "Value r of Light Color  " + (i + 1) + ": ";
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }

        //Prompt user for input for the g value of the light color. Then give the g value an id for getElementByID()
        container.appendChild(document.createElement("br"));
        for (i = 0; i < number; i++) {
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "text";
            input.name = "lightSources" + (i + 1);
            input.id = "lightColorsG" + (i + 1);
            input.placeholder = "Value g of Light Color  " + (i + 1) + ": ";
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }

        //Prompt user for input for the b value of the light color. Then give the b value an id for getElementByID()
        container.appendChild(document.createElement("br"));
        for (i = 0; i < number; i++) {
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "text";
            input.name = "lightSources" + (i + 1);
            input.id = "lightColorsB" + (i + 1);
            input.placeholder = "Value b of Light Color  " + (i + 1) + ": ";
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }
    }
}

function addFields_spheres() {
    //regular expresion for only numbers 0-10
    var regTest = RegExp(/^[0-9]\d*$/);

    // Number of inputs to create
    var number = parseInt(document.getElementById("numSpheres").value);

    //check user input for spheres.
    if (number < 0 || number > 10 || !regTest.test(number)) {
        alert("ERROR: Input invalid for number of spheres.");
    }
    else {
        // Container <div> where dynamic content will be placed
        var container = document.getElementById("containerSphere");
        // Clear previous contents of the container
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        //Prompt user for input for the X value of the sphere. Then give the X value an id for getElementByID()
        for (i = 0; i < number; i++) {
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");

            input.type = "text";
            input.name = "Spheres" + (i + 1);
            input.id = "spheresX" + (i + 1);
            input.placeholder = "Position X of Spheres  " + (i + 1) + ": ";
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }

        //Prompt user for input for the Y value of the Spheres. Then give the Y value an id for getElementByID()
        container.appendChild(document.createElement("br"));
        for (i = 0; i < number; i++) {
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "text";
            input.name = "Spheres" + (i + 1);
            input.id = "spheresY" + (i + 1);
            input.placeholder = "Position Y of Spheres  " + (i + 1) + ": ";
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }

        //Prompt user for input for the Z value of the Spheres. Then give the X value an id for getElementByID()
        container.appendChild(document.createElement("br"));
        for (i = 0; i < number; i++) {
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "text";
            input.name = "Spheres" + (i + 1);
            input.id = "spheresZ" + (i + 1);
            input.placeholder = "Position Z of Spheres  " + (i + 1) + ": ";
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }

        //Prompt user for input for the r value of the Sphere color. Then give the r value an id for getElementByID()
        container.appendChild(document.createElement("br"));
        for (i = 0; i < number; i++) {
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "text";
            input.name = "Spheres" + (i + 1);
            input.id = "spheresR" + (i + 1);
            input.placeholder = "Value r of Sphere Color  " + (i + 1) + ": ";
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }

        //Prompt user for input for the g value of the Sphere color. Then give the g value an id for getElementByID()
        container.appendChild(document.createElement("br"));
        for (i = 0; i < number; i++) {
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "text";
            input.name = "Spheres" + (i + 1);
            input.id = "spheresG" + (i + 1);
            input.placeholder = "Value g of Sphere Color  " + (i + 1) + ": ";
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }

        //Prompt user for input for the b value of the Sphere color. Then give the b value an id for getElementByID()
        container.appendChild(document.createElement("br"));
        for (i = 0; i < number; i++) {
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "text";
            input.name = "Spheres" + (i + 1);
            input.id = "spheresB" + (i + 1);
            input.placeholder = "Value b of Sphere Color  " + (i + 1) + ": ";
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }

        //Prompt user for input for the s value of the Sphere color. Then give the b value an id for getElementByID()
        container.appendChild(document.createElement("br"));
        for (i = 0; i < number; i++) {
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "text";
            input.name = "Spheres" + (i + 1);
            input.id = "spheresS" + (i + 1);
            input.placeholder = "Value s of Sphere Color  " + (i + 1) + ": ";
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }

        //Prompt user for input for the radisu of the Sphere. Then give the radius an id for getElementByID()
        container.appendChild(document.createElement("br"));
        for (i = 0; i < number; i++) {
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            input.type = "text";
            input.name = "Spheres" + (i + 1);
            input.id = "spheresRadius" + (i + 1);
            input.placeholder = "Radius of the Sphere  " + (i + 1) + ": ";
            container.appendChild(input);
            // Append a line break 
            container.appendChild(document.createElement("br"));
        }
    }
}
//-----------------------------------------------------------------------------------------------------------------------------------//

//------------------------------------LIGHTS------------------------------------------------------//
function create_lights() {
    var lights = [];

    var regTestDec = RegExp(/^-?(0|[0-9]\d*)(\.\d+)?$/);
    //get number of light sources for loop
    var number = parseInt(document.getElementById("lightSources").value);
    for (i = 0; i < number; i++) {
        var lightPosX = parseFloat(document.getElementById("lightSourcesX" + (i + 1)).value);
        var lightPosY = parseFloat(document.getElementById("lightSourcesY" + (i + 1)).value);
        var lightPosZ = parseFloat(document.getElementById("lightSourcesZ" + (i + 1)).value);
        //check for correct input for each x,y,z light position
        if (!regTestDec.test(lightPosX) || !regTestDec.test(lightPosY) || !regTestDec.test(lightPosZ)) {
            throw alert("ERROR: Input invalid for X, Y, or Z value for light position");
        }
        else {
            var lightColorR = parseFloat(document.getElementById("lightColorsR" + (i + 1)).value);
            var lightColorG = parseFloat(document.getElementById("lightColorsG" + (i + 1)).value);
            var lightColorB = parseFloat(document.getElementById("lightColorsB" + (i + 1)).value);
            //check for correct input for each r,g,b light color
            if (lightColorR < 0.0 || lightColorR > 1 || lightColorG < 0.0 || lightColorG > 1 || lightColorB < 0.0 || lightColorB > 1 ||
                !regTestDec.test(lightColorR) || !regTestDec.test(lightColorG) || !regTestDec.test(lightColorB)) {
                throw alert("ERROR: Input invalid for R, G, or B value for light color");
            }
            else {
                var lightColor = new Color(lightColorR, lightColorG, lightColorB);
                var lightPos = new Vector(lightPosX, lightPosY, lightPosZ);
                var light1 = new Light(lightPos, lightColor);

                lights.push(light1);
            }
        }
    }


    return lights;
}
//------------------------------------------------------------------------------------------------//

//--------------OBJECTS---------------------------------------------------------------------------//
function create_objects() {
    var floorColor = new Color(0, 0, 0, 0, true);

    var objects = [];

    var regTestDec = RegExp(/^-?(0|[0-9]\d*)(\.\d+)?$/);
    //get number of sphers for for loop
    var number = parseInt(document.getElementById("numSpheres").value);
    for (i = 0; i < number; i++) {
        var spherePosX = parseFloat(document.getElementById("spheresX" + (i + 1)).value);
        var spherePosY = parseFloat(document.getElementById("spheresY" + (i + 1)).value);
        var spherePosZ = parseFloat(document.getElementById("spheresZ" + (i + 1)).value);
        //check input for x, y, and z of sphere position
        if (!regTestDec.test(spherePosX) || !regTestDec.test(spherePosY) || !regTestDec.test(spherePosZ)) {
            throw alert("ERROR: Input invalid for X, Y, or Z value for sphere position");
        }
        else {
            var sphereColorR = parseFloat(document.getElementById("spheresR" + (i + 1)).value);
            var sphereColorG = parseFloat(document.getElementById("spheresG" + (i + 1)).value);
            var sphereColorB = parseFloat(document.getElementById("spheresB" + (i + 1)).value);
            var sphereColorS = parseFloat(document.getElementById("spheresS" + (i + 1)).value);
            //Check if all input for R,G,B,S is correct.
            if (sphereColorR < 0.0 || sphereColorR > 1 || sphereColorG < 0.0 || sphereColorG > 1 || sphereColorB < 0.0 || sphereColorB > 1 ||
                sphereColorS < 0.0 || sphereColorS > 1 || !regTestDec.test(sphereColorR) || !regTestDec.test(sphereColorG) || !regTestDec.test(sphereColorB) ||
                !regTestDec.test(sphereColorS)) {
                throw alert("ERROR: Input invalid for R, G, B, or S for sphere color");
            }
            else {
                var sphereRadius = parseFloat(document.getElementById("spheresRadius" + (i + 1)).value);
                //check for input of sphere radius 
                if (sphereRadius < 0.0 || !regTestDec.test(sphereRadius)) {
                    throw alert("ERROR: Input invalid for sphere radius");
                }
                else {
                    // sphere position
                    var spherePos = new Vector(spherePosX, spherePosY, spherePosZ);

                    var sphereColor = new Color(sphereColorR, sphereColorG, sphereColorB, sphereColorS);

                    // create spheres NEED TO ADD RADIUS OPTION 
                    var sphere = new Sphere(spherePos, sphereRadius, sphereColor);

                    objects.push(sphere);
                }
            }
        }
    }
    //always push floor into objects to create the floor. 
    var floor = new Plane(new Vector(0, 0, 0), Y, floorColor);
    objects.push(floor);

    return objects;
}
//------------------------------------------------------------------------------------------------//

//-----------------------------------------------------RAYTRACE--------------------------------------------------------------------------------------------//
function rayTrace() {
    var regTest = RegExp(/^[0-9]\d*$/);
    var regTestDec = RegExp(/^-?(0|[1-9]\d*)(\.\d+)?$/);

    //Number of inputs
    var number_lights = parseInt(document.getElementById("lightSources").value);
    //Number of inputs
    var number_spheres = parseInt(document.getElementById("numSpheres").value);

    //check the user input for amount of lights
    if (number_lights < 0 || number_lights > 10 || number_spheres < 0 || number_spheres > 10 || !regTest.test(number_lights) || !regTest.test(number_spheres)) {
        alert("ERROR: Input invalid for number of lights or spheres");
    }
    else {
        var objects = create_objects();

        //grab values from html for camera position
        cameraPositionX = parseFloat(document.getElementById('cameraPositionX').value);
        cameraPositionY = parseFloat(document.getElementById('cameraPositionY').value);
        cameraPositionZ = parseFloat(document.getElementById('cameraPositionZ').value);
        //check input of x,y,z of camera position
        if (!regTestDec.test(cameraPositionX) || !regTestDec.test(cameraPositionY) || !regTestDec.test(cameraPositionZ)) {
            alert("ERROR: Input invalid for X, Y, or Z value for Camera Position");
        }
        else {
            var cameraPosition = new Vector(cameraPositionX, cameraPositionY, cameraPositionZ);

            TargetPositionX = parseFloat(document.getElementById('targetPostionX').value);
            TargetPositionY = parseFloat(document.getElementById('targetPostionY').value);
            TargetPositionZ = parseFloat(document.getElementById('targetPostionX').value);
            //check input of x,y,z of target position
            if (!regTestDec.test(TargetPositionX) || !regTestDec.test(TargetPositionY) || !regTestDec.test(TargetPositionZ)) {
                alert("ERROR: Input invalid for X, Y, or Z value for Target Position");
            }
            else {
                var target = new Vector(TargetPositionX, TargetPositionY, TargetPositionZ);

                // vector between camera position and position to look at
                var diffVec = new Vector(target.subtract(cameraPosition));

                // forwad vector of camera
                var cameraForward = diffVec.unit();

                // right vector of the camera
                var cameraRight = cameraForward.cross(Y).unit();

                // up vector of camera
                var cameraUp = cameraRight.cross(cameraForward);

                //create camera with its coordinate frame
                var camera = new Camera(cameraPosition, cameraForward, cameraRight, cameraUp, Math.PI / 8, aspectRatio);


                // manipulate pixel elements
                for (var x = 0; x < WIDTH; x++) {
                    for (var y = 0; y < HEIGHT; y++) {

                        // start firing rays where the origin of the ray is the camera's origin.
                        // translate pixel coordinate so it is in the range of [-1, 1]
                        var u = (2.0 * x) / WIDTH - 1.0;
                        var v = (-2.0 * y) / HEIGHT + 1.0;
                        //console.log(u + " " + v)

                        // shoot the ray
                        var ray = camera.shootRay(u, v);

                        var intersections = [];

                        // loop through all objects defined in the scene and determine if there is an intersection with the current ray
                        objects.forEach(function (o) {

                            intersections.push(o.findIntersection(ray));
                        });


                        // find closest intersection to the camera, this is analogous to a z buffer
                        var firstObjectIndex = findFirstObject(intersections);




                        var pos = (y * WIDTH + x) * 4; // position in buffer based on x and y
                        if (firstObjectIndex == -1) {
                            // This pixel did not hit an object
                            data[pos] = 0;           // some R value [0, 255]
                            data[pos + 1] = 0;           // some G value
                            data[pos + 2] = 0;           // some B value
                            data[pos + 3] = 255;             // set alpha channel

                        }
                        else {
                            // get point of intersection and direction vectors
                            var intersectPosition = ray.origin.add(ray.direction.multiply(intersections[firstObjectIndex]))
                            var intersectDirection = ray.direction;

                            var colorIntersect = colorAt(intersectPosition, intersectDirection, firstObjectIndex);


                            //var color = objects[firstObjectIndex].color;
                            data[pos] = colorIntersect.red * 255;           // some R value [0, 255]
                            data[pos + 1] = colorIntersect.green * 255;           // some G value
                            data[pos + 2] = colorIntersect.blue * 255;           // some B value
                            data[pos + 3] = 255;
                        }


                    }
                }
                document.documentElement.style.overflow = 'hidden';

                // put the modified pixels back on the canvas
                ctx.putImageData(imgData, 0, 0);

                // create a new img object
                var image = new Image();

                // set the img.src to the canvas data url
                image.src = canvas.toDataURL();

                // append the new img object to the page
                document.body.replaceWith(image);
            }
        }
    }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------//

//----------------Functions-------------------------

// returns the index of the closest object to the camera
function findFirstObject(intersections) {
    var minValue;
    if (intersections.length < 1) {
        return -1;
    }
    else if (intersections.length == 1) {
        if (intersections[0] > 0) {
            return 0;
        }
        else {
            return -1;
        }
    }
    else {

        var max = -1;
        intersections.forEach(function (num) {
            if (max < num) {
                max = num;
            }
        });

        if (max > 0) {
            for (var i = 0; i < intersections.length; i++)
                if (intersections[i] > 0 && intersections[i] <= max) {
                    max = intersections[i];
                    minValue = i;

                }

            return minValue;
        }
        else {
            return -1;
        }


    }
}

// Shading
function colorAt(intersectPosition, intersectDirection, firstObjectIndex) {

    var lights = create_lights();
    var objects = create_objects();

    // color of the closest object 
    var objectColor = objects[firstObjectIndex].color;


    // normal vector of the closest object 
    var objectNormal = objects[firstObjectIndex].getNormalAt(intersectPosition);

    // check if we hit the floor
    if (objectColor.checkered) {

        var squareValue = Math.floor(intersectPosition.z) + Math.floor(intersectPosition.x);
        // This will make a 1 X 1 checkerboard patter on the floor
        if ((squareValue % 2) == 0) {
            objectColor = new Color(0, 0, 0, 0, true)
        }
        else {
            objectColor = new Color(1, 1, 1, 0, true)
        }

    }


    // factor in the ambient light coefficient
    var finalColor = objectColor.scaleColor(ambientLight);

    if (objectColor.specular > 0 && objectColor.specular <= 1) {
        // calculate reflection ray: reflection direction = I - 2(I . n)n 
        var objNorm = objectNormal.unit();
        var incident = intersectDirection.unit();
        var d = objNorm.dot(incident);
        var norm2 = d * 2;
        var reflectionDir = incident.subtract(objNorm.multiply(norm2));

        var reflectionRay = new Ray(intersectPosition, reflectionDir);
        var reflectIntersections = [];


        // check to see what the reflection ray intersects with
        for (var i = 0; i < objects.length; i++) {
            reflectIntersections.push(objects[i].findIntersection(reflectionRay));
        }

        // get the first intersection from the z buffer
        var firstReflectIndex = findFirstObject(reflectIntersections);

        // check if there was an intersection at all
        if (firstReflectIndex != -1) {
            // there was, so get position of intersection
            var reflectIntersectionPosition = intersectPosition.add(reflectionDir.multiply(reflectIntersections[firstReflectIndex]));

            // get the color of reflection by calling this function recursively
            var reflectedColor = colorAt(reflectIntersectionPosition, reflectionRay.direction, firstReflectIndex)

            // add reflected color to final color scaled by the reflectivity of the current object color
            finalColor = finalColor.addColor(reflectedColor.scaleColor(objectColor.specular))



        }

    }






    for (var j = 0; j < lights.length; j++) {


        // get the direction of the light
        var lightDirection = (lights[j].position.subtract(intersectPosition)).unit();

        // angle of intesection point and light
        var cosAngle = objectNormal.dot(lightDirection);


        if (cosAngle > 0) { // intersection point is in view of the light

            var shadow = false;

            var distanceToLight = (lights[j].position.subtract(intersectPosition)).length();


            // create a new ray from the interesection point to the light source and check if anything is blocking it
            var shadowRay = new Ray(intersectPosition, (lights[j].position.subtract(intersectPosition)).unit())

            var secondaryIntersections = [];

            for (var i = 0; i < objects.length && !shadow; i++) {
                secondaryIntersections.push(objects[i].findIntersection(shadowRay))
            }

            for (let curIntersection of secondaryIntersections) {

                // if an intersection is smaller than the distance to the light source, then there is something in the way
                if (curIntersection <= distanceToLight && curIntersection >= 0) {
                    shadow = true;

                    break;
                }
            }

            if (!shadow) {

                finalColor = finalColor.addColor(objectColor.multiplyColor(lights[j].color).scaleColor(cosAngle))

                // apply specular component if viable
                if (objectColor.specular > 0 && objectColor.specular <= 1) {

                    var d = objectNormal.dot(intersectDirection.negative())
                    var scalar1 = objectNormal.multiply(d);
                    var a = scalar1.add(intersectDirection);
                    var scalar2 = a.multiply(2);
                    var s = scalar2.subtract(intersectDirection);
                    var reflectDirection = s.unit();

                    var specular = reflectDirection.dot(lightDirection);
                    // add the specular spot
                    if (specular > 0) {
                        specular = Math.pow(specular, 10)
                        finalColor = finalColor.addColor(lights[j].color.scaleColor(specular * objectColor.specular))
                    }


                }

            }




        }



    }

    return finalColor;
}
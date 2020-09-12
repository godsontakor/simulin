//Calculate cuttings volume

function VolCut(D, L, W) {
    var diameter = D.value;
    var l = L.value
    var wash = W.value
    var Vc = Math.round(0.000971 * diameter * diameter * l * wash)
    return Vc

}

// VOLUME OF DILUTUION FOR CASES
function VolD(Vi, ki, ks, X, Vc) {
    var ki = parseFloat(document.getElementById('Initial-conc-drilled-solids').value)
    var Vi = parseFloat(document.getElementById('Initial Volume').value)
    var ks = parseFloat(document.getElementById('max-vol-drilled-solids').value)
    var X = parseFloat(document.getElementById('X').value)
    var Vc = parseFloat(document.getElementById('cutvolume').value)

    return Math.floor((((1 - ks) / ks) * (1 - X) * Vc - (Vi + ((ki / ks) * Vi))))
}


//Total Volume

function Vtotal(Vi, Vc, Vd) {
    var Vi = parseFloat(document.getElementById('Initial Volume').value)
    var Vc = parseFloat(document.getElementById('cutvolume').value)
    var Vd = parseFloat(document.getElementById('dilution-volume').value)
    return Math.floor((Vi + Vc + Vd))


}

//Volume of waste solids

function Vsweet(X, Vc, Y) {
    var X = parseFloat(document.getElementById('X').value)
    var Vc = parseFloat(document.getElementById('cutvolume').value)
    var Y = parseFloat(document.getElementById('Y').value)

    return (X * Vc * (1 + Y))
}


// Volume of liquid waste
function Lwaste(Vt, Vf, Vc, Vsw) {
    var Vt = parseFloat(document.getElementById('vol-solids/liquids-disposed').value)
    var Vf = parseFloat(document.getElementById('final volume').value)
    var Vc = parseFloat(document.getElementById('cutvolume').value)
    var Vsw = parseFloat(document.getElementById('vol-wet-solids').value)
    return (Vt - (Vf + Vc + Vsw))

}
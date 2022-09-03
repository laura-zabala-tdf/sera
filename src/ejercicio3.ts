let posicion: number = Number(prompt("ingrese la posicion"));
if (posicion === 1) {
  console.log("medalla de oro");
} else {
  if (posicion === 2) {
    console.log("medalla de plata");
  } else {
    if (posicion === 3) {
      console.log("medalla de bronce");
    } else {
      console.log("mención de participación");
    }
  }
}

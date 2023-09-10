"use client";
import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

const Tableau = ({ data }) => {
  console.log("TABLEAU", data);
  const svgRef = useRef();

  useEffect(() => {
    // Définissez la largeur et la hauteur de votre graphique.
    const width = 300;
    const height = 300;

    // Sélectionnez l'élément SVG en utilisant la référence useRef.
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("overflow", "visible");

    // Convertissez les dates en objets JavaScript Date.
    data.forEach((d) => {
      d.date = new Date(d.date);
    });

    // Créez une échelle pour l'axe x (dates).
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date)) // Utilisez d3.extent() pour obtenir la plage des dates
      .range([5, width - 5]); // Plage de pixels

    // Créez une échelle pour l'axe y (valeurs numériques).
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.valeur)]) // Plage de données numériques
      .range([height - 3, 0]); // Inversez la plage pour afficher les valeurs plus élevées en haut.

    // Créez un groupe (g) pour dessiner le graphique.
    const g = svg.append("g");

    // Dessinez un axe x en bas du graphique avec des valeurs au format "yyyy-mm-dd".
    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    // Dessinez un axe y sur le côté gauche du graphique avec des valeurs.
    g.append("g").call(d3.axisLeft(yScale));

    // Créez une fonction générale pour générer la ligne en fonction des données.
    const line = d3
      .line()
      .x((d) => xScale(d.date)) // Utilisez l'objet Date pour la position en x
      .y((d) => yScale(d.valeur)); // Position en y en fonction de la valeur

    // Dessinez la ligne en utilisant les données.
    g.append("path")
      .datum(data)
      .attr("fill", "none") // Remplissage nul pour une ligne
      .attr("stroke", "blue") // Couleur de la ligne (à personnaliser)
      .attr("stroke-width", 2) // Épaisseur de la ligne (à personnaliser)
      .attr("d", line); // Génère la ligne en utilisant la fonction line
  }, [data]);

  return (
    <div className="m-4">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Tableau;

"use client";
import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

const Tableau = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Définit la largeur et la hauteur du graphique.
    const width = 300;
    const height = 300;

    // Sélectionne l'élément SVG en utilisant la référence useRef.
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("overflow", "visible");

    // Convertit les dates en objets JavaScript Date.
    data.forEach((d) => {
      d.date = new Date(d.date);
    });

    // Créé une échelle pour l'axe x (dates).
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date)) // Utilise d3.extent() pour obtenir la plage des dates
      .range([5, width - 5]); // Plage de pixels

    // Créé une échelle pour l'axe y (valeurs numériques).
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.valeur)]) // Plage de données numériques
      .range([height - 3, 0]); // Inverse la plage pour afficher les valeurs plus élevées en haut.

    // Créé un groupe (g) pour dessiner le graphique.
    const g = svg.append("g");

    // Dessine un axe x en bas du graphique avec des valeurs au format "yyyy-mm-dd".

    const xAxisFormat = d3.timeFormat("%Y");

    const startDate = d3.min(data, (d) => d.date);
    const endDate = d3.max(data, (d) => d.date);

    g.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(
        d3
          .axisBottom(xScale)
          .tickValues([startDate, endDate]) // Utilise les dates de début et de fin
          .tickFormat(xAxisFormat)
      );

    // Dessine un axe y sur le côté gauche du graphique avec des valeurs.
    g.append("g").call(d3.axisLeft(yScale));

    // Créeé une fonction générale pour générer la ligne en fonction des données.
    const line = d3
      .line()
      .x((d) => xScale(d.date)) // Utilise l'objet Date pour la position en x
      .y((d) => yScale(d.valeur)); // Position en y en fonction de la valeur

    // Dessine la ligne en utilisant les données.
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

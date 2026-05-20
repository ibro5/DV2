document.addEventListener("DOMContentLoaded", function () {
  const charts = [
    {
      id: "#vis01",
      spec: "01_ai_readiness_snapshot_bar.vg.json"
    },
    {
      id: "#vis02",
      spec: "02_readiness_gap_dumbbell.vg.json"
    },
    {
      id: "#vis03",
      spec: "03_training_waffle.vg.json"
    },
    {
      id: "#vis04",
      spec: "04_worker_concerns_bar.vg.json"
    },
    {
      id: "#vis05",
      spec: "05_training_need_vs_offered_grouped_bar.vg.json"
    },
    {
      id: "#vis06",
      spec: "06_top_ai_tools_bar.vg.json"
    },
    {
      id: "#vis07",
      spec: "07_generation_proficiency_bar.vg.json"
    },
    {
      id: "#vis08",
      spec: "08_ai_skill_proficiency_dotplot.vg.json"
    },
    {
      id: "#vis09",
      spec: "09_genai_use_by_group_ranked_bar.vg.json"
    },
    {
      id: "#vis10",
      spec: "10_genai_use_types_bar.vg.json"
    },
    {
      id: "#vis11",
      spec: "11_digital_inclusion_state_map.vg.json"
    },
    {
      id: "#vis12",
      spec: "12_digital_inclusion_state_ranking.vg.json"
    }
  ];

  const options = {
    actions: false,
    renderer: "canvas"
  };

  charts.forEach(function (chart) {
    const container = document.querySelector(chart.id);

    if (!container) {
      console.warn("Missing chart container:", chart.id);
      return;
    }

    vegaEmbed(chart.id, chart.spec, options)
      .then(function (result) {
        // The Vega view is available as result.view if needed.
        // You do not need to do anything here for the chart to appear.
      })
      .catch(function (error) {
        console.error("Error loading chart:", chart.spec, error);

        container.innerHTML =
          "<p style='color:#9f1239; background:#fff1f2; border:1px solid #fecdd3; padding:12px; border-radius:8px; font-family:Arial;'>" +
          "Could not load chart: " +
          chart.spec +
          "</p>";
      });
  });
});
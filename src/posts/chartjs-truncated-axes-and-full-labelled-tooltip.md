---
title: ChartJS - Truncated axes and full labelled tooltip
status: draft
date: 2020-04-01T11:58:25.789Z
---
Source = <https://stackoverflow.com/questions/44396737/how-to-shorten-chart-js-label>

Add this to options for the chart:\
`            tooltips: {`

`                enabled: true,`

`                mode: 'label',`

`                callbacks: {`

`                    title: function(tooltipItems, data) {`

`                        var idx = tooltipItems[0].index;`

`                        return 'Placement:\n' + data.labels[idx];`

`                    },`

`                    label: function(tooltipItems, data) {`

`                        return tooltipItems.value;`

`                    }`

`                }`

`            },`

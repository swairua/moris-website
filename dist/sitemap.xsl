<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="3.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sitemap">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap — Moris Enterprises</title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; color: #333; }
          h1 { color: #20b2aa; font-size: 24px; margin-bottom: 4px; }
          p.subtitle { color: #666; font-size: 14px; margin-top: 0; }
          table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
          th { background: #20b2aa; color: #fff; padding: 10px 14px; text-align: left; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
          td { padding: 10px 14px; border-bottom: 1px solid #eee; font-size: 13px; }
          tr:hover td { background: #f0fdfa; }
          a { color: #20b2aa; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .badge { display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 11px; font-weight: 600; }
          .badge-1-0 { background: #dcfce7; color: #166534; }
          .badge-0-9 { background: #dbeafe; color: #1e40af; }
          .badge-0-8 { background: #fef9c3; color: #854d0e; }
          .stats { display: flex; gap: 16px; margin: 16px 0; flex-wrap: wrap; }
          .stat-card { background: #fff; border-radius: 8px; padding: 14px 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); flex: 1; min-width: 120px; text-align: center; }
          .stat-value { font-size: 28px; font-weight: 700; color: #20b2aa; }
          .stat-label { font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 2px; }
          .footer { margin-top: 16px; font-size: 12px; color: #999; text-align: center; }
        </style>
      </head>
      <body>
        <h1>Sitemap — Moris Enterprises</h1>
        <p class="subtitle">https://morisentreprises.com</p>

        <div class="stats">
          <div class="stat-card">
            <div class="stat-value"><xsl:value-of select="count(//sitemap:url)"/></div>
            <div class="stat-label">Total URLs</div>
          </div>
          <div class="stat-card">
            <div class="stat-value"><xsl:value-of select="count(//sitemap:url[contains(sitemap:loc, '/products/')])"/></div>
            <div class="stat-label">Product Pages</div>
          </div>
          <div class="stat-card">
            <div class="stat-value"><xsl:value-of select="count(//sitemap:url[sitemap:priority='1.0'])"/></div>
            <div class="stat-label">Priority 1.0</div>
          </div>
        </div>

        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
            <th>Change Frequency</th>
            <th>Priority</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <xsl:sort select="sitemap:priority" data-type="number" order="descending"/>
            <tr>
              <td><a href="{sitemap:loc}" target="_blank"><xsl:value-of select="sitemap:loc"/></a></td>
              <td><xsl:value-of select="sitemap:lastmod"/></td>
              <td><xsl:value-of select="sitemap:changefreq"/></td>
              <td>
                <span class="badge">
                  <xsl:attribute name="class">
                    <xsl:text>badge-</xsl:text>
                    <xsl:value-of select="translate(sitemap:priority, '.', '-')"/>
                  </xsl:attribute>
                  <xsl:value-of select="sitemap:priority"/>
                </span>
              </td>
            </tr>
          </xsl:for-each>
        </table>

        <div class="footer">
          Generated: <xsl:value-of select="current-dateTime()"/> |
          <a href="https://morisentreprises.com">Moris Enterprises</a>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { media } from "sanity-plugin-media";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemas";

const hiddenDocTypes = (listItem) =>
  !["site_settings", "donation_settings"].includes(listItem.getId());

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title("Content Manager")
          .items([
            S.listItem()
              .title("Site Settings")
              .child(
                S.editor()
                  .schemaType("site_settings")
                  .documentId("site_settings")
              ),
            // Add a visual divider (optional)

            S.divider(),
            ...S.documentTypeListItems().filter(hiddenDocTypes),
          ]);
        // return dataStructure(S, context);
      },
    }),
    media(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});

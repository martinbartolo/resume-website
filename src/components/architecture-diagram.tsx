"use client";

import {
  Background,
  BackgroundVariant,
  type Edge,
  Handle,
  type Node,
  type NodeProps,
  Position,
  ReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

type BaseNodeData = {
  label: string;
  sublabel?: string;
};

const handleClass = "!border-none !bg-transparent";

function BrowserNode({ data }: NodeProps<Node<BaseNodeData>>) {
  return (
    <div className="bg-card border-border rounded-lg border px-5 py-2.5 text-center shadow-sm">
      <p className="text-foreground text-xs font-medium">{data.label}</p>
      <Handle
        type="source"
        position={Position.Bottom}
        className={handleClass}
      />
    </div>
  );
}

function CoreNode({ data }: NodeProps<Node<BaseNodeData>>) {
  return (
    <div className="bg-card border-border rounded-lg border px-6 py-3 text-center shadow-sm">
      <Handle type="target" position={Position.Top} className={handleClass} />
      <p className="text-foreground text-sm font-semibold">{data.label}</p>
      {data.sublabel && (
        <p className="text-muted-foreground mt-1 text-[10px]">
          {data.sublabel}
        </p>
      )}
      <Handle
        type="source"
        position={Position.Bottom}
        className={handleClass}
      />
    </div>
  );
}

function ServiceNode({ data }: NodeProps<Node<BaseNodeData>>) {
  return (
    <div className="bg-card border-border rounded-lg border px-4 py-2 text-center shadow-sm">
      <Handle type="target" position={Position.Top} className={handleClass} />
      <p className="text-foreground text-xs font-medium">{data.label}</p>
      {data.sublabel && (
        <p className="text-muted-foreground text-[10px]">{data.sublabel}</p>
      )}
      <Handle
        type="source"
        position={Position.Bottom}
        className={handleClass}
      />
    </div>
  );
}

// Leaf node — only receives, no outgoing edges
function LeafNode({ data }: NodeProps<Node<BaseNodeData>>) {
  return (
    <div className="bg-card border-border rounded-lg border px-4 py-2 text-center shadow-sm">
      <Handle type="target" position={Position.Top} className={handleClass} />
      <p className="text-foreground text-xs font-medium">{data.label}</p>
      {data.sublabel && (
        <p className="text-muted-foreground text-[10px]">{data.sublabel}</p>
      )}
    </div>
  );
}

const nodeTypes = {
  browser: BrowserNode,
  core: CoreNode,
  service: ServiceNode,
  leaf: LeafNode,
};

// 4-column layout:
// Col 1 (Auth): Better Auth
// Col 2 (Data): tRPC → Prisma → PostgreSQL
// Col 3 (Processing & Storage): Inngest → FFmpeg, Sharp, Supabase Storage
// Col 4 (External APIs): PayPal, YouTube, Resend

const COL_1 = 0;
const COL_2 = 180;
const COL_3 = 370;
const COL_4 = 590;
const NODE_W = 140;

const nodes: Node<BaseNodeData>[] = [
  // Top
  {
    id: "browser",
    type: "browser",
    position: { x: 300, y: 0 },
    data: { label: "Client / Browser" },
    draggable: false,
  },
  {
    id: "nextjs",
    type: "core",
    position: { x: 210, y: 75 },
    data: {
      label: "Next.js on Vercel",
    },
    style: { width: 305 },
    draggable: false,
  },

  // Column 1 — Auth
  {
    id: "betterauth",
    type: "service",
    position: { x: COL_1, y: 215 },
    data: {
      label: "Better Auth",
      sublabel: "Email · Google OAuth · Sessions",
    },
    style: { width: NODE_W },
    draggable: false,
  },

  // Column 2 — Data
  {
    id: "trpc",
    type: "service",
    position: { x: COL_2, y: 215 },
    data: { label: "tRPC", sublabel: "Typesafe API Layer" },
    style: { width: NODE_W },
    draggable: false,
  },
  {
    id: "prisma",
    type: "service",
    position: { x: COL_2, y: 330 },
    data: { label: "Prisma ORM", sublabel: "Database Access" },
    style: { width: NODE_W },
    draggable: false,
  },
  {
    id: "postgresql",
    type: "service",
    position: { x: COL_1 + 90, y: 445 },
    data: { label: "PostgreSQL", sublabel: "PgBouncer · Supabase" },
    style: { width: NODE_W },
    draggable: false,
  },

  // Column 3 — Processing & Storage
  {
    id: "inngest",
    type: "service",
    position: { x: COL_3, y: 215 },
    data: { label: "Inngest", sublabel: "Durable Workflows" },
    style: { width: NODE_W },
    draggable: false,
  },
  {
    id: "ffmpeg",
    type: "leaf",
    position: { x: COL_3 - 10, y: 340 },
    data: { label: "FFmpeg", sublabel: "Audio / Video" },
    style: { width: 105 },
    draggable: false,
  },
  {
    id: "sharp",
    type: "leaf",
    position: { x: COL_3 + 100, y: 340 },
    data: { label: "Sharp", sublabel: "Images" },
    style: { width: 105 },
    draggable: false,
  },
  {
    id: "supabase",
    type: "leaf",
    position: { x: 270, y: 445 },
    data: { label: "Supabase Storage", sublabel: "Files & Assets" },
    style: { width: NODE_W },
    draggable: false,
  },

  // Column 4 — External APIs
  {
    id: "paypal",
    type: "service",
    position: { x: COL_4, y: 215 },
    data: { label: "PayPal PPCP", sublabel: "Payments · Webhooks" },
    style: { width: NODE_W },
    draggable: false,
  },
  {
    id: "youtube",
    type: "leaf",
    position: { x: COL_4, y: 340 },
    data: { label: "YouTube API", sublabel: "Video Upload" },
    style: { width: NODE_W },
    draggable: false,
  },
  {
    id: "resend",
    type: "leaf",
    position: { x: COL_4, y: 445 },
    data: { label: "Resend", sublabel: "Email Delivery" },
    style: { width: NODE_W },
    draggable: false,
  },
];

const edges: Edge[] = [
  // Browser → Next.js
  { id: "e-browser-nextjs", source: "browser", target: "nextjs" },

  // Next.js → Column tops
  { id: "e-nextjs-betterauth", source: "nextjs", target: "betterauth" },
  { id: "e-nextjs-trpc", source: "nextjs", target: "trpc" },
  { id: "e-nextjs-inngest", source: "nextjs", target: "inngest" },
  { id: "e-nextjs-paypal", source: "nextjs", target: "paypal" },
  {
    id: "e-nextjs-supabase",
    source: "nextjs",
    target: "supabase",
    type: "smoothstep",
  },

  // Auth → Database (adjacent column hop)
  {
    id: "e-betterauth-postgresql",
    source: "betterauth",
    target: "postgresql",
    type: "smoothstep",
  },

  // Data chain (within column)
  { id: "e-trpc-prisma", source: "trpc", target: "prisma" },
  { id: "e-prisma-postgresql", source: "prisma", target: "postgresql" },

  // Processing (within column)
  { id: "e-inngest-ffmpeg", source: "inngest", target: "ffmpeg" },
  { id: "e-inngest-sharp", source: "inngest", target: "sharp" },
  { id: "e-inngest-supabase", source: "inngest", target: "supabase" },

  // Processing → External APIs (adjacent column hops)
  { id: "e-inngest-youtube", source: "inngest", target: "youtube" },
  { id: "e-inngest-resend", source: "inngest", target: "resend" },
];

export function ArchitectureDiagram() {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={{
          type: "bezier",
          style: {
            stroke: "var(--muted-foreground)",
            strokeWidth: 1.5,
            strokeOpacity: 0.35,
          },
        }}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          color="var(--muted-foreground)"
          style={{ opacity: 0.15 }}
        />
      </ReactFlow>
    </div>
  );
}

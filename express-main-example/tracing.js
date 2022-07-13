// Require the AppSignal config
const { appsignal } = require("./appsignal");
// Require the AppSignal OpenTelemetry SpanProcessor
const { SpanProcessor } = require("@appsignal/nodejs");

// Require OpenTelemetry
const opentelemetry = require("@opentelemetry/sdk-node");
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');

// Add the MySQLInstrumentation import
const { MySQL2Instrumentation } = require('@opentelemetry/instrumentation-mysql2');
// Import the necessary instrumentation
// This will be done in the next steps

// Configure OpenTelemetry to instrument specific libraries
const sdk = new opentelemetry.NodeSDK({
  // Configure the desired instrumentations here, as described in the next steps
  instrumentations: [
        MySQL2Instrumentation
  ]
});

sdk.start()

const tracer = new NodeTracerProvider();
// Configure OpenTelemetry to use the AppSignal SpanProcessor.
// This will transform the OpenTelemetry trace data to AppSignal trace data.
tracer.addSpanProcessor(new SpanProcessor(appsignal));
tracer.register();

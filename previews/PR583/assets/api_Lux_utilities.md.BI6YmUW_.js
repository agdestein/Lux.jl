import { _ as _export_sfc, c as createElementBlock, o as openBlock, a4 as createStaticVNode } from "./chunks/framework.DaOHJ_jj.js";
const __pageData = JSON.parse('{"title":"Utilities","description":"","frontmatter":{},"headers":[],"relativePath":"api/Lux/utilities.md","filePath":"api/Lux/utilities.md","lastUpdated":null}');
const _sfc_main = { name: "api/Lux/utilities.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="Utilities" tabindex="-1">Utilities <a class="header-anchor" href="#Utilities" aria-label="Permalink to &quot;Utilities {#Utilities}&quot;">​</a></h1><h2 id="Index" tabindex="-1">Index <a class="header-anchor" href="#Index" aria-label="Permalink to &quot;Index {#Index}&quot;">​</a></h2><ul><li><a href="#Lux.StatefulLuxLayer"><code>Lux.StatefulLuxLayer</code></a></li><li><a href="#Lux.cpu"><code>Lux.cpu</code></a></li><li><a href="#Lux.disable_stacktrace_truncation!"><code>Lux.disable_stacktrace_truncation!</code></a></li><li><a href="#Lux.f16"><code>Lux.f16</code></a></li><li><a href="#Lux.f32"><code>Lux.f32</code></a></li><li><a href="#Lux.f64"><code>Lux.f64</code></a></li><li><a href="#Lux.foldl_init"><code>Lux.foldl_init</code></a></li><li><a href="#Lux.gpu"><code>Lux.gpu</code></a></li><li><a href="#Lux.istraining"><code>Lux.istraining</code></a></li><li><a href="#Lux.multigate"><code>Lux.multigate</code></a></li></ul><h2 id="Device-Management-/-Data-Transfer" tabindex="-1">Device Management / Data Transfer <a class="header-anchor" href="#Device-Management-/-Data-Transfer" aria-label="Permalink to &quot;Device Management / Data Transfer {#Device-Management-/-Data-Transfer}&quot;">​</a></h2><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Lux.cpu" href="#Lux.cpu">#</a> <b><u>Lux.cpu</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cpu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span></code></pre></div><p>Transfer <code>x</code> to CPU.</p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>This function has been deprecated. Use <a href="/previews/PR583/api/Accelerator_Support/LuxDeviceUtils#LuxDeviceUtils.cpu_device"><code>cpu_device</code></a> instead.</p></div><p><a href="https://github.com/LuxDL/Lux.jl/blob/d8f571b7cb1de7f0549ef60dc5b47b087b7de914/src/deprecated.jl#L2-L10" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Lux.gpu" href="#Lux.gpu">#</a> <b><u>Lux.gpu</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">gpu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span></code></pre></div><p>Transfer <code>x</code> to GPU determined by the backend set using <a href="/previews/PR583/api/Accelerator_Support/LuxDeviceUtils#LuxDeviceUtils.gpu_backend!"><code>Lux.gpu_backend!</code></a>.</p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>This function has been deprecated. Use <a href="/previews/PR583/api/Accelerator_Support/LuxDeviceUtils#LuxDeviceUtils.gpu_device"><code>gpu_device</code></a> instead. Using this function inside performance critical code will cause massive slowdowns due to type inference failure.</p></div><p><a href="https://github.com/LuxDL/Lux.jl/blob/d8f571b7cb1de7f0549ef60dc5b47b087b7de914/src/deprecated.jl#L17-L27" target="_blank" rel="noreferrer">source</a></p></div><br><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>For detailed API documentation on Data Transfer check out the <a href="/previews/PR583/api/Accelerator_Support/LuxDeviceUtils#LuxDeviceUtils-API">LuxDeviceUtils.jl</a></p></div><h2 id="Weight-Initialization" tabindex="-1">Weight Initialization <a class="header-anchor" href="#Weight-Initialization" aria-label="Permalink to &quot;Weight Initialization {#Weight-Initialization}&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>For API documentation on Initialization check out the <a href="/previews/PR583/api/Building_Blocks/WeightInitializers#WeightInitializers-API">WeightInitializers.jl</a></p></div><h2 id="Miscellaneous-Utilities" tabindex="-1">Miscellaneous Utilities <a class="header-anchor" href="#Miscellaneous-Utilities" aria-label="Permalink to &quot;Miscellaneous Utilities {#Miscellaneous-Utilities}&quot;">​</a></h2><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Lux.foldl_init" href="#Lux.foldl_init">#</a> <b><u>Lux.foldl_init</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">foldl_init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(op, x)</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">foldl_init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(op, x, init)</span></span></code></pre></div><p>Exactly same as <code>foldl(op, x; init)</code> in the forward pass. But, gives gradients wrt <code>init</code> in the backward pass.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/d8f571b7cb1de7f0549ef60dc5b47b087b7de914/src/utils.jl#L162-L168" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Lux.istraining" href="#Lux.istraining">#</a> <b><u>Lux.istraining</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">istraining</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Val{training}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">istraining</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(st</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NamedTuple</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Returns <code>true</code> if <code>training</code> is <code>true</code> or if <code>st</code> contains a <code>training</code> field with value <code>true</code>. Else returns <code>false</code>.</p><p>Method undefined if <code>st.training</code> is not of type <code>Val</code>.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/d8f571b7cb1de7f0549ef60dc5b47b087b7de914/src/utils.jl#L2-L10" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Lux.multigate" href="#Lux.multigate">#</a> <b><u>Lux.multigate</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">multigate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">AbstractArray</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Val{N}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Split up <code>x</code> into <code>N</code> equally sized chunks (along dimension <code>1</code>).</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/d8f571b7cb1de7f0549ef60dc5b47b087b7de914/src/utils.jl#L68-L72" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="Updating-Floating-Point-Precision" tabindex="-1">Updating Floating Point Precision <a class="header-anchor" href="#Updating-Floating-Point-Precision" aria-label="Permalink to &quot;Updating Floating Point Precision {#Updating-Floating-Point-Precision}&quot;">​</a></h2><p>By default, Lux uses Float32 for all parameters and states. To update the precision simply pass the parameters / states / arrays into one of the following functions.</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Lux.f16" href="#Lux.f16">#</a> <b><u>Lux.f16</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">f16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(m)</span></span></code></pre></div><p>Converts the <code>eltype</code> of <code>m</code> <em>floating point</em> values to <code>Float16</code>. Recurses into structs marked with <code>Functors.@functor</code>.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/d8f571b7cb1de7f0549ef60dc5b47b087b7de914/src/utils.jl#L212-L217" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Lux.f32" href="#Lux.f32">#</a> <b><u>Lux.f32</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">f32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(m)</span></span></code></pre></div><p>Converts the <code>eltype</code> of <code>m</code> <em>floating point</em> values to <code>Float32</code>. Recurses into structs marked with <code>Functors.@functor</code>.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/d8f571b7cb1de7f0549ef60dc5b47b087b7de914/src/utils.jl#L212-L217" target="_blank" rel="noreferrer">source</a></p></div><br><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Lux.f64" href="#Lux.f64">#</a> <b><u>Lux.f64</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">f64</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(m)</span></span></code></pre></div><p>Converts the <code>eltype</code> of <code>m</code> <em>floating point</em> values to <code>Float64</code>. Recurses into structs marked with <code>Functors.@functor</code>.</p><p><a href="https://github.com/LuxDL/Lux.jl/blob/d8f571b7cb1de7f0549ef60dc5b47b087b7de914/src/utils.jl#L212-L217" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="Stateful-Layer" tabindex="-1">Stateful Layer <a class="header-anchor" href="#Stateful-Layer" aria-label="Permalink to &quot;Stateful Layer {#Stateful-Layer}&quot;">​</a></h2><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Lux.StatefulLuxLayer" href="#Lux.StatefulLuxLayer">#</a> <b><u>Lux.StatefulLuxLayer</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">StatefulLuxLayer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(model, ps, st; st_fixed_type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Val</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>This is not a Lux.AbstractExplicitLayer</p></div><p>A convenience wrapper over Lux layers which stores the parameters and states internally. Most users should not be using this version. This comes handy when Lux internally uses the <code>@compact</code> to construct models and in SciML codebases where propagating state might involving <a href="https://github.com/JuliaLang/julia/issues/15276" target="_blank" rel="noreferrer"><code>Box</code>ing</a>.</p><p>For a motivating example, see the Neural ODE tutorial.</p><p><strong>Arguments</strong></p><ul><li><p><code>model</code>: A Lux layer</p></li><li><p><code>ps</code>: The parameters of the layer. This can be set to <code>nothing</code>, if the user provides the parameters on function call</p></li><li><p><code>st</code>: The state of the layer</p></li></ul><p><strong>Keyword Arguments</strong></p><ul><li><code>st_fixed_type</code>: If <code>Val(true)</code>, then the type of the <code>state</code> is fixed, i.e., <code>typeof(last(model(x, ps, st))) == st</code>. If this is not the case, then <code>st_fixed_type</code> must be set to <code>Val(false)</code>. If <code>st_fixed_type</code> is set to <code>Val(false)</code>, then type stability is not guaranteed.</li></ul><p><strong>Inputs</strong></p><ul><li><p><code>x</code>: The input to the layer</p></li><li><p><code>ps</code>: The parameters of the layer. Optional, defaults to <code>s.ps</code></p></li></ul><p><strong>Outputs</strong></p><ul><li><code>y</code>: The output of the layer</li></ul><p><a href="https://github.com/LuxDL/Lux.jl/blob/d8f571b7cb1de7f0549ef60dc5b47b087b7de914/src/helpers/stateful.jl#L1-L37" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="Truncated-Stacktraces" tabindex="-1">Truncated Stacktraces <a class="header-anchor" href="#Truncated-Stacktraces" aria-label="Permalink to &quot;Truncated Stacktraces {#Truncated-Stacktraces}&quot;">​</a></h2><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Lux.disable_stacktrace_truncation!" href="#Lux.disable_stacktrace_truncation!">#</a> <b><u>Lux.disable_stacktrace_truncation!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">disable_stacktrace_truncation!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; disable</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Bool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>An easy way to update <code>TruncatedStacktraces.VERBOSE</code> without having to load it manually.</p><p>Effectively does <code>TruncatedStacktraces.VERBOSE[] = disable</code></p><p><a href="https://github.com/LuxDL/Lux.jl/blob/d8f571b7cb1de7f0549ef60dc5b47b087b7de914/src/deprecated.jl#L38-L44" target="_blank" rel="noreferrer">source</a></p></div><br>', 32);
const _hoisted_33 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_33);
}
const utilities = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  utilities as default
};

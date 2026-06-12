"use strict";
const N5_BRIDGE_PATHS = [
    "C:/modding/dumpers/ac_bridge.js",
    "C:\\modding\\dumpers\\ac_bridge.js",
    "./ac_bridge.js",
    "ac_bridge.js"
];

function n5ReadBridgeText(path) {
    if (typeof File === "undefined") throw new Error("Frida File API missing");
    if (typeof File.readAllText === "function") return File.readAllText(path);
    const file = new File(path, "r");
    try {
        if (typeof file.readText === "function") return file.readText();
        const chunks = [];
        let total = 0;
        while (true) {
            const bytes = file.readBytes(16384);
            if (!bytes || bytes.byteLength === 0) break;
            const chunk = new Uint8Array(bytes);
            chunks.push(chunk);
            total += chunk.length;
            if (chunk.length < 16384) break;
        }
        const merged = new Uint8Array(total);
        let offset = 0;
        for (const chunk of chunks) { merged.set(chunk, offset); offset += chunk.length; }
        if (typeof TextDecoder !== "undefined") return new TextDecoder("utf-8").decode(merged);
        let text = "";
        for (let i = 0; i < merged.length; i += 4096) text += String.fromCharCode.apply(null, merged.slice(i, i + 4096));
        return decodeURIComponent(escape(text));
    } finally {
        try { file.close(); } catch (_) {}
    }
}

function n5LoadSeparateBridge() {
    if (typeof Il2Cpp !== "undefined" && Il2Cpp && Il2Cpp.perform && Il2Cpp.$config) return;
    let lastError = null;
    for (const path of N5_BRIDGE_PATHS) {
        try {
            const source = n5ReadBridgeText(path);
            (0, eval)(source);
            if (typeof Il2Cpp !== "undefined" && Il2Cpp && Il2Cpp.perform && Il2Cpp.$config) {
                console.log("[N5] loaded separate bridge: " + path);
                return;
            }
            lastError = new Error("bridge loaded but Il2Cpp was not initialized");
        } catch (e) {
            lastError = e;
        }
    }
    throw new Error("[N5] failed to load ac_bridge.js: " + lastError);
}

n5LoadSeparateBridge();
const N5_IL2CPP_SYMBOLS = {
Il2Cpp.$config.exports = {
	il2cpp_init: () => Il2Cpp.module.findExportByName("rMNVufdfVZu"),
	il2cpp_init_utf16: () => Il2Cpp.module.findExportByName("oGNDx_ScXCe"),
	il2cpp_shutdown: () => Il2Cpp.module.findExportByName("sCNueOLjBP_"),
	il2cpp_set_config_dir: () => Il2Cpp.module.findExportByName("oGLcyQfoYQC"),
	il2cpp_set_data_dir: () => Il2Cpp.module.findExportByName("OdDSfjgTtZB"),
	il2cpp_set_temp_dir: () => Il2Cpp.module.findExportByName("VVGmodnrBQp"),
	il2cpp_set_commandline_arguments: () => Il2Cpp.module.findExportByName("UkOLgcWptIN"),
	il2cpp_set_commandline_arguments_utf16: () => Il2Cpp.module.findExportByName("oaFoqZiytTd"),
	il2cpp_set_config_utf16: () => Il2Cpp.module.findExportByName("LYGDeAMFtJQ"),
	il2cpp_set_config: () => Il2Cpp.module.findExportByName("JAFNkIA_LNs"),
	il2cpp_set_memory_callbacks: () => Il2Cpp.module.findExportByName("PdGLDtKriDf"),
	il2cpp_memory_pool_set_region_size: () => Il2Cpp.module.findExportByName("WQOMYVstVMG"),
	il2cpp_memory_pool_get_region_size: () => Il2Cpp.module.findExportByName("zvQAHSPUJdV"),
	il2cpp_get_corlib: () => Il2Cpp.module.findExportByName("KHsCqaFb_Kc"),
	il2cpp_add_internal_call: () => Il2Cpp.module.findExportByName("VvpEeCpoFeR"),
	il2cpp_resolve_icall: () => Il2Cpp.module.findExportByName("hajlwDwkIa_"),
	il2cpp_alloc: () => Il2Cpp.module.findExportByName("uHCFgKlerCa"),
	il2cpp_free: () => Il2Cpp.module.findExportByName("HxfqvPwsBuF"),
	il2cpp_array_class_get: () => Il2Cpp.module.findExportByName("WfVYDjGcqXq"),
	il2cpp_array_length: () => Il2Cpp.module.findExportByName("yRFdIhgzyqs"),
	il2cpp_array_get_byte_length: () => Il2Cpp.module.findExportByName("jECsWEoepzp"),
	il2cpp_array_new: () => Il2Cpp.module.findExportByName("HoxkGJVQjNq"),
	il2cpp_array_new_specific: () => Il2Cpp.module.findExportByName("FammoeJmKyW"),
	il2cpp_array_new_full: () => Il2Cpp.module.findExportByName("FdBwlcWYWAF"),
	il2cpp_bounded_array_class_get: () => Il2Cpp.module.findExportByName("WxWbZvjuDud"),
	il2cpp_array_element_size: () => Il2Cpp.module.findExportByName("wgDiKwXUZkx"),
	il2cpp_assembly_get_image: () => Il2Cpp.module.findExportByName("diqzc_lwpjq"),
	il2cpp_class_for_each: () => Il2Cpp.module.findExportByName("KzAKeOSyPht"),
	il2cpp_class_enum_basetype: () => Il2Cpp.module.findExportByName("UkYuwpPDbjp"),
	il2cpp_class_is_inited: () => Il2Cpp.module.findExportByName("oUbSXGp_huF"),
	il2cpp_class_is_generic: () => Il2Cpp.module.findExportByName("HqUnjiNacQF"),
	il2cpp_class_is_inflated: () => Il2Cpp.module.findExportByName("bLBLyz__cUl"),
	il2cpp_class_is_assignable_from: () => Il2Cpp.module.findExportByName("YSWTzPXiNuf"),
	il2cpp_class_is_subclass_of: () => Il2Cpp.module.findExportByName("PvkXYsMvtVg"),
	il2cpp_class_has_parent: () => Il2Cpp.module.findExportByName("DqGHFOecody"),
	il2cpp_class_from_il2cpp_type: () => Il2Cpp.module.findExportByName("iFKzkqLwIgk"),
	il2cpp_class_from_name: () => Il2Cpp.module.findExportByName("ThlwdAonO_F"),
	il2cpp_class_from_system_type: () => Il2Cpp.module.findExportByName("MmtxrpWbgBp"),
	il2cpp_class_get_element_class: () => Il2Cpp.module.findExportByName("ndzLtnFFigj"),
	il2cpp_class_get_events: () => Il2Cpp.module.findExportByName("ryavgkQTksq"),
	il2cpp_class_get_fields: () => Il2Cpp.module.findExportByName("L_rSKqYVcmP"),
	il2cpp_class_get_nested_types: () => Il2Cpp.module.findExportByName("HbrTXpcsQdp"),
	il2cpp_class_get_interfaces: () => Il2Cpp.module.findExportByName("JcBeczAFiEq"),
	il2cpp_class_get_properties: () => Il2Cpp.module.findExportByName("EnwGm_jfQQj"),
	il2cpp_class_get_property_from_name: () => Il2Cpp.module.findExportByName("yrMfrcfuqTp"),
	il2cpp_class_get_field_from_name: () => Il2Cpp.module.findExportByName("wzlKWctMZMP"),
	il2cpp_class_get_methods: () => Il2Cpp.module.findExportByName("xnUYijJuNQm"),
	il2cpp_class_get_method_from_name: () => Il2Cpp.module.findExportByName("mrtTU_RDDVY"),
	il2cpp_class_get_name: () => Il2Cpp.module.findExportByName("rNPwnoakdOi"),
	il2cpp_type_get_name_chunked: () => Il2Cpp.module.findExportByName("LBPJWLITtdf"),
	il2cpp_class_get_namespace: () => Il2Cpp.module.findExportByName("vUPSYEQzzXz"),
	il2cpp_class_get_parent: () => Il2Cpp.module.findExportByName("UfexoRfySYB"),
	il2cpp_class_get_declaring_type: () => Il2Cpp.module.findExportByName("bbLERHZymBq"),
	il2cpp_class_instance_size: () => Il2Cpp.module.findExportByName("WwVxXrVqEbs"),
	il2cpp_class_num_fields: () => Il2Cpp.module.findExportByName("SUnszXoQQaQ"),
	il2cpp_class_is_valuetype: () => Il2Cpp.module.findExportByName("CkRwBcvKXTt"),
	il2cpp_class_value_size: () => Il2Cpp.module.findExportByName("wAENnFTZocz"),
	il2cpp_class_is_blittable: () => Il2Cpp.module.findExportByName("UMudoVByqDB"),
	il2cpp_class_get_flags: () => Il2Cpp.module.findExportByName("LzgkrjeRiGU"),
	il2cpp_class_is_abstract: () => Il2Cpp.module.findExportByName("gYHCsQagZOo"),
	il2cpp_class_is_interface: () => Il2Cpp.module.findExportByName("OVhzGbPTMln"),
	il2cpp_class_array_element_size: () => Il2Cpp.module.findExportByName("ZmZkcoJFsMg"),
	il2cpp_class_from_type: () => Il2Cpp.module.findExportByName("kRLGIFxBLeq"),
	il2cpp_class_get_type: () => Il2Cpp.module.findExportByName("cUGBomDAJwB"),
	il2cpp_class_get_type_token: () => Il2Cpp.module.findExportByName("DWXG_squOLB"),
	il2cpp_class_has_attribute: () => Il2Cpp.module.findExportByName("YiNAlNFEBIU"),
	il2cpp_class_has_references: () => Il2Cpp.module.findExportByName("TzdaonpHFEL"),
	il2cpp_class_is_enum: () => Il2Cpp.module.findExportByName("LKUzoutQcvh"),
	il2cpp_class_get_image: () => Il2Cpp.module.findExportByName("fCeRvWOaGbe"),
	il2cpp_class_get_assemblyname: () => Il2Cpp.module.findExportByName("xlQDjuigzlc"),
	il2cpp_class_get_rank: () => Il2Cpp.module.findExportByName("aWmcjoqAUBw"),
	il2cpp_class_get_data_size: () => Il2Cpp.module.findExportByName("qpkRpMLUyJx"),
	il2cpp_class_get_static_field_data: () => Il2Cpp.module.findExportByName("xkkiaPdMlTU"),
	il2cpp_stats_dump_to_file: () => Il2Cpp.module.findExportByName("cTpdrzaiQSj"),
	il2cpp_stats_get_value: () => Il2Cpp.module.findExportByName("JrZTEuUY_eR"),
	il2cpp_domain_get: () => Il2Cpp.module.findExportByName("KFZkHVjFbCn"),
	il2cpp_domain_assembly_open: () => Il2Cpp.module.findExportByName("tLNEnOdExYz"),
	il2cpp_domain_get_assemblies: () => Il2Cpp.module.findExportByName("KdiBlgWJPKH"),
	il2cpp_raise_exception: () => Il2Cpp.module.findExportByName("BfuSSBhMxVL"),
	il2cpp_exception_from_name_msg: () => Il2Cpp.module.findExportByName("QIzCtHgcilV"),
	il2cpp_get_exception_argument_null: () => Il2Cpp.module.findExportByName("sNp_wfhqrst"),
	il2cpp_format_exception: () => Il2Cpp.module.findExportByName("VZtlqHKLHwT"),
	il2cpp_format_stack_trace: () => Il2Cpp.module.findExportByName("EOyBMiwZDPw"),
	il2cpp_unhandled_exception: () => Il2Cpp.module.findExportByName("SrEQyosZXhZ"),
	il2cpp_native_stack_trace: () => Il2Cpp.module.findExportByName("ylqtfpyzlRn"),
	il2cpp_field_get_flags: () => Il2Cpp.module.findExportByName("OpIMORImenk"),
	il2cpp_field_get_from_reflection: () => Il2Cpp.module.findExportByName("xFVCjBSNcjk"),
	il2cpp_field_get_name: () => Il2Cpp.module.findExportByName("_DkvYgNiXiV"),
	il2cpp_field_get_parent: () => Il2Cpp.module.findExportByName("JrTsmLMgtYw"),
	il2cpp_field_get_object: () => Il2Cpp.module.findExportByName("ENpcqMtvfFM"),
	il2cpp_field_get_offset: () => Il2Cpp.module.findExportByName("gNxWMcBgVxu"),
	il2cpp_field_get_type: () => Il2Cpp.module.findExportByName("Ikdb_OIJtVE"),
	il2cpp_field_get_value: () => Il2Cpp.module.findExportByName("JBzPNMDhPVW"),
	il2cpp_field_get_value_object: () => Il2Cpp.module.findExportByName("kOAhNtslSAO"),
	il2cpp_field_has_attribute: () => Il2Cpp.module.findExportByName("PYldEkmnduH"),
	il2cpp_field_set_value: () => Il2Cpp.module.findExportByName("uVMJXDeztkw"),
	il2cpp_field_static_get_value: () => Il2Cpp.module.findExportByName("eUrcbJwe_Bc"),
	il2cpp_field_static_set_value: () => Il2Cpp.module.findExportByName("ggexGZmyofD"),
	il2cpp_field_set_value_object: () => Il2Cpp.module.findExportByName("QaYZCCFdFfB"),
	il2cpp_field_is_literal: () => Il2Cpp.module.findExportByName("DbluhBonIft"),
	il2cpp_gc_collect: () => Il2Cpp.module.findExportByName("RkpLONskKrd"),
	il2cpp_gc_collect_a_little: () => Il2Cpp.module.findExportByName("_xqYrctfDFZ"),
	il2cpp_gc_start_incremental_collection: () => Il2Cpp.module.findExportByName("ISIXaSsvTFN"),
	il2cpp_gc_disable: () => Il2Cpp.module.findExportByName("wPStgiWplIz"),
	il2cpp_gc_enable: () => Il2Cpp.module.findExportByName("QfFObsocF_e"),
	il2cpp_gc_is_disabled: () => Il2Cpp.module.findExportByName("zwucqaykNNB"),
	il2cpp_gc_set_mode: () => Il2Cpp.module.findExportByName("MttpJClgixU"),
	il2cpp_gc_get_max_time_slice_ns: () => Il2Cpp.module.findExportByName("fbcFzFViCNJ"),
	il2cpp_gc_set_max_time_slice_ns: () => Il2Cpp.module.findExportByName("ckNAYoTjMxx"),
	il2cpp_gc_is_incremental: () => Il2Cpp.module.findExportByName("RmmwTHGMEed"),
	il2cpp_gc_get_used_size: () => Il2Cpp.module.findExportByName("gCTGQJUyOFs"),
	il2cpp_gc_get_heap_size: () => Il2Cpp.module.findExportByName("CfaMbdZqSxX"),
	il2cpp_gc_wbarrier_set_field: () => Il2Cpp.module.findExportByName("AvILeDnBXNR"),
	il2cpp_gc_has_strict_wbarriers: () => Il2Cpp.module.findExportByName("UrxHFhOJvjS"),
	il2cpp_gc_set_external_allocation_tracker: () => Il2Cpp.module.findExportByName("epEtmQRwQWL"),
	il2cpp_gc_set_external_wbarrier_tracker: () => Il2Cpp.module.findExportByName("tLBlrhVYlOX"),
	il2cpp_gc_foreach_heap: () => Il2Cpp.module.findExportByName("BGpIbakjiPh"),
	il2cpp_stop_gc_world: () => Il2Cpp.module.findExportByName("QpRDUbAphJD"),
	il2cpp_start_gc_world: () => Il2Cpp.module.findExportByName("cacTSvdJVWg"),
	il2cpp_gc_alloc_fixed: () => Il2Cpp.module.findExportByName("XKbRAGuKZZE"),
	il2cpp_gc_free_fixed: () => Il2Cpp.module.findExportByName("cOlVksgzCMK"),
	il2cpp_gchandle_new: () => Il2Cpp.module.findExportByName("qkRPa_Audif"),
	il2cpp_gchandle_new_weakref: () => Il2Cpp.module.findExportByName("bSGqObtyKrw"),
	il2cpp_gchandle_get_target: () => Il2Cpp.module.findExportByName("OsrXvLSzyjs"),
	il2cpp_gchandle_free: () => Il2Cpp.module.findExportByName("siDqGKLoczK"),
	il2cpp_gchandle_foreach_get_target: () => Il2Cpp.module.findExportByName("GPLoLynUuCp"),
	il2cpp_object_header_size: () => Il2Cpp.module.findExportByName("DEnGLgXifka"),
	il2cpp_array_object_header_size: () => Il2Cpp.module.findExportByName("RFaaFbRsh_S"),
	il2cpp_offset_of_array_length_in_array_object_header: () => Il2Cpp.module.findExportByName("AzixOEZNLlg"),
	il2cpp_offset_of_array_bounds_in_array_object_header: () => Il2Cpp.module.findExportByName("WnewJrbFJDx"),
	il2cpp_allocation_granularity: () => Il2Cpp.module.findExportByName("ENiV_ntCCli"),
	il2cpp_unity_liveness_allocate_struct: () => Il2Cpp.module.findExportByName("UdMwNeHFEwk"),
	il2cpp_unity_liveness_calculation_from_root: () => Il2Cpp.module.findExportByName("rvOqfqCUHrK"),
	il2cpp_unity_liveness_calculation_from_statics: () => Il2Cpp.module.findExportByName("riHRAjeXSJM"),
	il2cpp_unity_liveness_finalize: () => Il2Cpp.module.findExportByName("NSMBjkbGqHY"),
	il2cpp_unity_liveness_free_struct: () => Il2Cpp.module.findExportByName("JmYO_ZNWHOM"),
	il2cpp_method_get_return_type: () => Il2Cpp.module.findExportByName("WDeRxAaLeDS"),
	il2cpp_method_get_declaring_type: () => Il2Cpp.module.findExportByName("DPAWHgIxwkW"),
	il2cpp_method_get_name: () => Il2Cpp.module.findExportByName("zGdwd__onfl"),
	il2cpp_method_get_from_reflection: () => Il2Cpp.module.findExportByName("jQyDXPrNlLV"),
	il2cpp_method_get_object: () => Il2Cpp.module.findExportByName("kKFatZXMYYJ"),
	il2cpp_method_is_generic: () => Il2Cpp.module.findExportByName("_nzgaYoUicW"),
	il2cpp_method_is_inflated: () => Il2Cpp.module.findExportByName("cMOWWuyIJKs"),
	il2cpp_method_is_instance: () => Il2Cpp.module.findExportByName("GCvKJsnUuBI"),
	il2cpp_method_get_param_count: () => Il2Cpp.module.findExportByName("PbsOWItWGkH"),
	il2cpp_method_get_param: () => Il2Cpp.module.findExportByName("uoFCEysLjLH"),
	il2cpp_method_get_class: () => Il2Cpp.module.findExportByName("zRoNHGzysqk"),
	il2cpp_method_has_attribute: () => Il2Cpp.module.findExportByName("CzdMgRgI_Jr"),
	il2cpp_method_get_flags: () => Il2Cpp.module.findExportByName("LAHgRPhhKaV"),
	il2cpp_method_get_token: () => Il2Cpp.module.findExportByName("fmVb_ePVYzx"),
	il2cpp_method_get_param_name: () => Il2Cpp.module.findExportByName("DhUZkRhYPrG"),
	il2cpp_property_get_flags: () => Il2Cpp.module.findExportByName("AyokonomaKy"),
	il2cpp_property_get_get_method: () => Il2Cpp.module.findExportByName("_qXFdzOBdXv"),
	il2cpp_property_get_set_method: () => Il2Cpp.module.findExportByName("ZcDgmCgvUUF"),
	il2cpp_property_get_name: () => Il2Cpp.module.findExportByName("vkIkyyeIyQx"),
	il2cpp_property_get_parent: () => Il2Cpp.module.findExportByName("IiEqjXRhclm"),
	il2cpp_object_get_class: () => Il2Cpp.module.findExportByName("swBuvBkMphH"),
	il2cpp_object_get_size: () => Il2Cpp.module.findExportByName("bDriTVdhhhu"),
	il2cpp_object_get_virtual_method: () => Il2Cpp.module.findExportByName("lkpbaDROIWp"),
	il2cpp_object_new: () => Il2Cpp.module.findExportByName("LUIRLXAAlhY"),
	il2cpp_object_unbox: () => Il2Cpp.module.findExportByName("mGnfBuiLFdt"),
	il2cpp_value_box: () => Il2Cpp.module.findExportByName("HmtaLslkfiT"),
	il2cpp_monitor_enter: () => Il2Cpp.module.findExportByName("RmirxCGaZWh"),
	il2cpp_monitor_try_enter: () => Il2Cpp.module.findExportByName("pKnEszWaHwX"),
	il2cpp_monitor_exit: () => Il2Cpp.module.findExportByName("gLIJinKQWjt"),
	il2cpp_monitor_pulse: () => Il2Cpp.module.findExportByName("WJRijpcuKYe"),
	il2cpp_monitor_pulse_all: () => Il2Cpp.module.findExportByName("zsdKGECWAgK"),
	il2cpp_monitor_wait: () => Il2Cpp.module.findExportByName("jdeioGZ_Gzo"),
	il2cpp_monitor_try_wait: () => Il2Cpp.module.findExportByName("_WNpwMEQadc"),
	il2cpp_runtime_invoke: () => Il2Cpp.module.findExportByName("JASQXFOEwkM"),
	il2cpp_runtime_invoke_convert_args: () => Il2Cpp.module.findExportByName("HFoekVxsvQd"),
	il2cpp_runtime_class_init: () => Il2Cpp.module.findExportByName("PGSpaUDoaRN"),
	il2cpp_runtime_object_init: () => Il2Cpp.module.findExportByName("gpnKFdONSaZ"),
	il2cpp_runtime_object_init_exception: () => Il2Cpp.module.findExportByName("FwhpgaIgBtx"),
	il2cpp_runtime_unhandled_exception_policy_set: () => Il2Cpp.module.findExportByName("hqRsSsykgCK"),
	il2cpp_string_length: () => Il2Cpp.module.findExportByName("MSsxSgvyulR"),
	il2cpp_string_chars: () => Il2Cpp.module.findExportByName("fyCwwgNDkpA"),
	il2cpp_string_new: () => Il2Cpp.module.findExportByName("pugqdQrOFqz"),
	il2cpp_string_new_len: () => Il2Cpp.module.findExportByName("KfDhYOOtLwo"),
	il2cpp_string_new_utf16: () => Il2Cpp.module.findExportByName("UINRfyfGbtd"),
	il2cpp_string_new_wrapper: () => Il2Cpp.module.findExportByName("IUHwpcWll_x"),
	il2cpp_string_intern: () => Il2Cpp.module.findExportByName("fZMJszMeDjy"),
	il2cpp_string_is_interned: () => Il2Cpp.module.findExportByName("FEbPYmrDiLR"),
	il2cpp_thread_current: () => Il2Cpp.module.findExportByName("RGfpHTIyPgf"),
	il2cpp_thread_attach: () => Il2Cpp.module.findExportByName("ZgVBVGLrzYK"),
	il2cpp_thread_detach: () => Il2Cpp.module.findExportByName("ikgQolMyYJa"),
	il2cpp_is_vm_thread: () => Il2Cpp.module.findExportByName("rtRidvTAfzq"),
	il2cpp_current_thread_walk_frame_stack: () => Il2Cpp.module.findExportByName("kqvfxZEnjDE"),
	il2cpp_thread_walk_frame_stack: () => Il2Cpp.module.findExportByName("tVaWZLQktU_"),
	il2cpp_current_thread_get_top_frame: () => Il2Cpp.module.findExportByName("pWkzM_rCYpE"),
	il2cpp_thread_get_top_frame: () => Il2Cpp.module.findExportByName("SOcsWeTeZLZ"),
	il2cpp_current_thread_get_frame_at: () => Il2Cpp.module.findExportByName("oXaxxtbrShy"),
	il2cpp_thread_get_frame_at: () => Il2Cpp.module.findExportByName("yEZcRvdhzbd"),
	il2cpp_current_thread_get_stack_depth: () => Il2Cpp.module.findExportByName("WTzd_gnGLFs"),
	il2cpp_thread_get_stack_depth: () => Il2Cpp.module.findExportByName("otiLagrDFNT"),
	il2cpp_override_stack_backtrace: () => Il2Cpp.module.findExportByName("MgaNAPNuYng"),
	il2cpp_type_get_object: () => Il2Cpp.module.findExportByName("hQXtbNkRCtH"),
	il2cpp_type_get_type: () => Il2Cpp.module.findExportByName("xzQ_oFfVJfM"),
	il2cpp_type_get_class_or_element_class: () => Il2Cpp.module.findExportByName("JydqJfxjTev"),
	il2cpp_type_get_name: () => Il2Cpp.module.findExportByName("CUeYHAUujlZ"),
	il2cpp_type_is_byref: () => Il2Cpp.module.findExportByName("ngnvhtcMvqz"),
	il2cpp_type_get_attrs: () => Il2Cpp.module.findExportByName("SwhOQhYXIAY"),
	il2cpp_type_equals: () => Il2Cpp.module.findExportByName("CKx_YSgZNfA"),
	il2cpp_type_get_assembly_qualified_name: () => Il2Cpp.module.findExportByName("uAgDoTXmxGd"),
	il2cpp_type_get_reflection_name: () => Il2Cpp.module.findExportByName("RMXGhDxiVBG"),
	il2cpp_type_is_static: () => Il2Cpp.module.findExportByName("CnRfYJiTIXu"),
	il2cpp_type_is_pointer_type: () => Il2Cpp.module.findExportByName("VR_ioMSQeqj"),
	il2cpp_image_get_assembly: () => Il2Cpp.module.findExportByName("qCMbNIeAVZT"),
	il2cpp_image_get_name: () => Il2Cpp.module.findExportByName("dZEBiJPVExn"),
	il2cpp_image_get_filename: () => Il2Cpp.module.findExportByName("cIonIjpgKmy"),
	il2cpp_image_get_entry_point: () => Il2Cpp.module.findExportByName("dxfQnHhTYFy"),
	il2cpp_image_get_class_count: () => Il2Cpp.module.findExportByName("VyvQjZasOPW"),
	il2cpp_image_get_class: () => Il2Cpp.module.findExportByName("OEOowyBBZOU"),
	il2cpp_capture_memory_snapshot: () => Il2Cpp.module.findExportByName("zsRevDOJJST"),
	il2cpp_free_captured_memory_snapshot: () => Il2Cpp.module.findExportByName("dxUxyDvWlwJ"),
	il2cpp_set_find_plugin_callback: () => Il2Cpp.module.findExportByName("UqLqbryCAMn"),
	il2cpp_register_log_callback: () => Il2Cpp.module.findExportByName("QdyzyqyVqX_"),
	il2cpp_debugger_set_agent_options: () => Il2Cpp.module.findExportByName("HMEHOMJUFXM"),
	il2cpp_is_debugger_attached: () => Il2Cpp.module.findExportByName("PsRiNuhoHj_"),
	il2cpp_register_debugger_agent_transport: () => Il2Cpp.module.findExportByName("WjTQnoAkEcU"),
	il2cpp_debug_foreach_method: () => Il2Cpp.module.findExportByName("kfRuwJjwiMK"),
	il2cpp_debug_get_method_info: () => Il2Cpp.module.findExportByName("RYVzwPIdnir"),
	il2cpp_unity_install_unitytls_interface: () => Il2Cpp.module.findExportByName("UkOtKKybALV"),
	il2cpp_custom_attrs_from_class: () => Il2Cpp.module.findExportByName("WUrYvAhbMTC"),
	il2cpp_custom_attrs_from_method: () => Il2Cpp.module.findExportByName("yolMBqDkFcV"),
	il2cpp_custom_attrs_from_field: () => Il2Cpp.module.findExportByName("MvnUSNOGPgL"),
	il2cpp_custom_attrs_get_attr: () => Il2Cpp.module.findExportByName("CBFsOtCsvUu"),
	il2cpp_custom_attrs_has_attr: () => Il2Cpp.module.findExportByName("QJzmZJFCyes"),
	il2cpp_custom_attrs_construct: () => Il2Cpp.module.findExportByName("PFdLsy_jhBE"),
	il2cpp_custom_attrs_free: () => Il2Cpp.module.findExportByName("hhyMhVdNmrl"),
	il2cpp_class_set_userdata: () => Il2Cpp.module.findExportByName("MSuZbibgjVb"),
	il2cpp_class_get_userdata_offset: () => Il2Cpp.module.findExportByName("Kr_kyWZLuuT"),
	il2cpp_set_default_thread_affinity: () => Il2Cpp.module.findExportByName("lRqkMKu_nkZ"),
	il2cpp_unity_set_android_network_up_state_func: () => Il2Cpp.module.findExportByName("ZrgYRAubgea"),
};
Il2Cpp.$config.exports = N5_IL2CPP_SYMBOLS;
console.log("[N5] applied ac.js IL2CPP symbols: " + Object.keys(N5_IL2CPP_SYMBOLS).length);

function QuestDih() {
    Il2Cpp.perform(() => {
    const AppUtils = Il2Cpp
        .domain
        .assembly("AnimalCompany")
        .image
        .class("AnimalCompany.AppUtils");

    const method = AppUtils.method("CalculatePhotonAppVersion");

    console.log("Switching Servers");

    method.implementation = function () {
        const spoofed = "1c_Me5YW57a_qotzdRfl";

        console.log(
            `Servers Are Swapped`
        );

        return Il2Cpp.string(spoofed);
    };
});
}

QuestDih();

const itemIDs=['item_ac_cola','item_alien_cube','item_alphablade','item_ampbattery','item_ampbattery_mega','item_anti_gravity_grenade','item_apple','item_arena_pistol','item_arena_shotgun','item_arrow','item_arrow_bomb','item_arrow_heart','item_arrow_lightbulb','item_arrow_teleport','item_axe','item_backpack','item_backpack_black','item_backpack_fish','item_backpack_green','item_backpack_large_base','item_backpack_large_basketball','item_backpack_large_clover','item_backpack_monkey','item_backpack_pink','item_backpack_realistic','item_backpack_small_base','item_backpack_space','item_backpack_white','item_backpack_with_flashlight','item_bait_beetle','item_bait_fly','item_bait_glowworm','item_bait_magmar_ball','item_bait_mouse_trap','item_bait_sardine','item_bait_shell','item_bait_starfish','item_bait_wallet','item_balloon','item_balloon_heart','item_bamboo_fishing_rod','item_banana','item_banana_chips','item_baseball_bat','item_basic_fishing_rod','item_batterycell_hydra','item_beans','item_big_cup','item_bighead_larva','item_bloodlust_vial','item_blox_cube','item_blox_moon','item_blox_sphere','item_blox_star','item_blox_triangle','item_boombox','item_boombox_fishing','item_boombox_neon','item_boomerang','item_box_fan','item_brain_chunk','item_brainslug_blue','item_brainslug_green','item_brainslug_pink','item_broccoli_grenade','item_broccoli_shrink_grenade','item_broom','item_broom_halloween','item_bubble_gun','item_bubble_staff','item_burrito','item_butcherpipe','item_butcherspear','item_butchersword','item_calculator','item_cardboard_box','item_cardboard_dragon_body','item_cardboard_dragon_head','item_carrot','item_ceo_plaque','item_chakra','item_clapper','item_cluster_grenade','item_coconut_shell','item_cola','item_cola_large','item_company_ration','item_company_ration_heal','item_cracker','item_crate','item_crossbow','item_crossbow_heart','item_crowbar','item_cube_frame','item_cubetrident','item_cuboid_anomaly','item_cutie_dead','item_d20','item_deadmans_draw','item_deadmans_draw_card','item_deadmans_draw_card_comedy_drama','item_deadmans_draw_comedy_drama','item_demon_sword','item_disc','item_disposable_camera','item_dragons_claw','item_drill','item_drill_fists','item_drill_galaxy','item_drill_neon','item_dwarven_hammer','item_dynamite','item_dynamite_cube','item_easter_egg','item_egg','item_egg_easter_blue','item_egg_easter_red','item_egg_easter_yellow','item_electrical_tape','item_energy_axe','item_energy_sword_dual','item_energy_sword_green','item_energy_sword_red','item_eraser','item_eye_googly','item_film_reel','item_finger_board','item_fish_anglerfish','item_fish_big_shark','item_fish_boomfish','item_fish_boot','item_fish_bottled_message','item_fish_carp','item_fish_chewna','item_fish_clam_hookshot','item_fish_cowfish','item_fish_crappie','item_fish_crispie','item_fish_cube','item_fish_diamond_jade_koi','item_fish_dollar_bill','item_fish_dragonfish','item_fish_fishsword','item_fish_ghost_sword','item_fish_gold_fish','item_fish_hydracarp','item_fish_irontusk','item_fish_kissy','item_fish_license_plate','item_fish_magma_carp','item_fish_nebula_fish','item_fish_nutfish','item_fish_pufferfish','item_fish_rainbow_trout','item_fish_redacted','item_fish_rotten_fish','item_fish_salmon','item_fish_salmonster','item_fish_scaldfish','item_fish_seahorse','item_fish_seamine','item_fish_shellfish_shield','item_fish_spicy_salmon','item_fish_teeth','item_fish_triclops','item_fish_tuna','item_fish_yellowcake','item_fishing_terminal_bait_button','item_flamethrower','item_flamethrower_skull','item_flamethrower_skull_ruby','item_flaregun','item_flashbang','item_flashlight','item_flashlight_galaxy','item_flashlight_mega','item_flashlight_red','item_flipflop_realistic','item_floppy3','item_floppy5','item_football','item_four_leaf_clover','item_four_leaf_clover_gold','item_four_leaf_radar','item_friend_launcher','item_frying_pan','item_fungi_blue','item_fungi_red','item_gameboy','item_glitched_banana','item_glowing_fishing_rod','item_glowstick','item_goldbar','item_goldcoin','item_goop','item_goopfish','item_grappling_hook','item_great_sword','item_great_sword_galaxy','item_grenade','item_grenade_gold','item_grenade_launcher','item_guided_boomerang','item_gyroid_anomaly','item_hammer_candy_cane','item_harddrive','item_hatchet','item_hawaiian_drum','item_heart_chunk','item_heart_gun','item_heartchocolatebox','item_hh_key','item_hookshot','item_hookshot_galaxy','item_hookshot_sword','item_hot_cocoa','item_hoverpad','item_hoverpad_galaxy','item_hydra','item_impulse_grenade','item_jetpack','item_joystick','item_joystick_inv_y','item_katana_big','item_katana_medium','item_keycard','item_lance','item_landmine','item_landmine_bee','item_lantern_cny','item_large_banana','item_lava_fishing_rod','item_love_grenade','item_mage_pirate_sword','item_mannequin_arm','item_mannequin_arm_left','item_mannequin_arm_right','item_mannequin_head','item_mannequin_leg','item_mannequin_leg_left','item_mannequin_leg_right','item_mannequin_torso','item_marshmallow_bunny_bomb','item_megaphone','item_metal_ball','item_metal_ball_easter','item_metal_ball_xmas','item_metal_plate','item_metal_plate_small','item_metal_plate_xmas','item_metal_rod','item_metal_rod_curved','item_metal_rod_easter','item_metal_rod_small','item_metal_rod_xmas','item_metal_triangle','item_midipad','item_midipad_animal','item_mining_laser','item_mining_laser_orange','item_module_gun_1','item_module_gun_2','item_module_gun_3','item_module_hull_1','item_module_hull_2','item_module_hull_3','item_module_joust_1','item_module_joust_2','item_module_joust_3','item_module_laser_1','item_module_laser_2','item_module_laser_3','item_module_tether_1','item_module_tractor_beam_1','item_momboss_box','item_moneygun','item_moonhorror_key','item_moonrock','item_moonrock_cheesy','item_moonrock_friend','item_motor','item_mountain_key','item_mug','item_needle','item_nut','item_nut_drop','item_ogre_hands','item_orange','item_ore_copper_l','item_ore_copper_m','item_ore_copper_s','item_ore_gold_l','item_ore_gold_m','item_ore_gold_s','item_ore_hell','item_ore_silver_l','item_ore_silver_m','item_ore_silver_s','item_painting_canvas','item_paperpack','item_pelican_case','item_pennant_spring','item_pickaxe','item_pickaxe_cny','item_pickaxe_cube','item_pickaxe_realistic','item_pickaxe_realistic_galaxy','item_pickaxe_spacedwarf','item_pinata_bat','item_pineapple','item_pipe','item_pistol_dragon','item_plank','item_plank_easter','item_plate_round','item_plunger','item_pogostick','item_police_baton','item_popcorn','item_portable_safe_zone','item_portable_teleporter','item_prismatic_anomaly','item_prop_scanner','item_pumpkin_bomb','item_pumpkin_pie','item_pumpkinjack','item_pumpkinjack_small','item_pyramidal_anomaly','item_quest_gy_skull','item_quest_gy_skull_special','item_quest_hlal_brain','item_quest_hlal_eyeball','item_quest_hlal_flesh','item_quest_hlal_heart','item_quest_key_graveyard','item_quest_vhs','item_quest_vhs_backlots','item_quest_vhs_basement','item_quest_vhs_cave','item_quest_vhs_circus_day','item_quest_vhs_circus_ext','item_quest_vhs_circus_fac','item_quest_vhs_dam_facility','item_quest_vhs_dam_servers','item_quest_vhs_dark_forest','item_quest_vhs_eden','item_quest_vhs_forest','item_quest_vhs_foundation','item_quest_vhs_graveyard','item_quest_vhs_haunted_house','item_quest_vhs_hell','item_quest_vhs_lab','item_quest_vhs_lake','item_quest_vhs_lobby','item_quest_vhs_megalodon','item_quest_vhs_megalodon_lake','item_quest_vhs_mines','item_quest_vhs_moon','item_quest_vhs_moon_horror_rocket','item_quest_vhs_mountain','item_quest_vhs_mountainbot','item_quest_vhs_mountainshack','item_quest_vhs_mountainvault','item_quest_vhs_obsidianhalls','item_quest_vhs_odd_core','item_quest_vhs_office','item_quest_vhs_office_basement','item_quest_vhs_powerplant_microwave','item_quest_vhs_powerplant_reactorcore','item_quest_vhs_powerplant_security','item_quest_vhs_powerplant_supportfacility','item_quest_vhs_sandbox','item_quest_vhs_sewers','item_quest_vhs_vhs-core','item_quiver','item_quiver_heart','item_radiation_gun','item_radioactive_broccoli','item_radioactive_fishing_rod','item_randombox_mobloot_big','item_randombox_mobloot_medium','item_randombox_mobloot_small','item_randombox_mobloot_weapons','item_randombox_mobloot_weapons_big','item_randombox_mobloot_zombie','item_rare_card','item_remote_controller','item_repair_wrench','item_revolver','item_revolver_ammo','item_revolver_gold','item_ring_buoy','item_ringmaster_staff','item_robo_monke','item_robot_arm_left','item_robot_arm_left_galaxy','item_robot_arm_right','item_robot_arm_right_galaxy','item_robot_head','item_rope','item_rpg','item_rpg_ammo','item_rpg_ammo_egg','item_rpg_ammo_shoe','item_rpg_ammo_spear','item_rpg_cny','item_rpg_easter','item_rpg_shoe','item_rpg_smshr','item_rpg_spear','item_rubberducky','item_ruby','item_saddle','item_salmoncannon','item_sawblade','item_sawblade_launcher','item_scanner','item_scissors','item_server_pad','item_shadowboss_key','item_shield','item_shield_bones','item_shield_candy_cane','item_shield_galaxy','item_shield_police','item_shield_viking_1','item_shield_viking_2','item_shield_viking_3','item_shield_viking_4','item_shotgun','item_shotgun_ammo','item_shotgun_gold','item_shotgun_sawed','item_shotgun_viper','item_shovel','item_shredder','item_shrinking_broccoli','item_skipole','item_skishoe','item_skishoe_2','item_skishoe_3','item_skishoe_4','item_snail_friend','item_snowball','item_snowboard','item_snowboard_2','item_snowboard_3','item_snowboard_4','item_snowboard_auto','item_snowboard_galaxy','item_spear_candy_cane','item_special_fishing_rod','item_special_fishing_rod_radar_part','item_special_fishing_rod_with_radar','item_stapler','item_stash_grenade','item_steel_beam','item_steel_beam_xmas','item_stellarsword_blue','item_stellarsword_gold','item_stellate_anomaly','item_stick_armbones','item_stick_bone','item_sticker_dispenser','item_sticky_dynamite','item_stinky_cheese','item_stopwatch','item_tablet','item_tapedispenser','item_tele_grenade','item_tele_pearl','item_teleport_dagger','item_teleport_gun','item_teleport_gun_galaxy','item_theremin','item_timebomb','item_toilet_paper','item_toilet_paper_mega','item_toilet_paper_roll_empty','item_token_circus','item_trampoline','item_treestick','item_tripwire_explosive','item_trophy','item_truss','item_truss_easter','item_truss_small','item_truss_xmas','item_turkey_leg','item_turkey_whole','item_ukulele','item_ukulele_gold','item_umbrella','item_umbrella_clover','item_umbrella_squirrel','item_unidentified','item_upsidedown_loot','item_uranium_chunk_l','item_uranium_chunk_m','item_uranium_chunk_s','item_viking_hammer','item_viking_hammer_twilight','item_war_fan','item_wheelhandle','item_wheelhandle_big','item_whoopie','item_wireframe_cube','item_wireframe_gun','item_wood_log','item_wood_pallet','item_wood_pallet_easter','item_wyrmpiercer','item_zipline_gun','item_zombie_meat'],prefabList=['Blackhole','blackhole','Arena','ArenaDefault','ArenaGame','ArenaGamemanager','ArenaMap','InflatedBalloon','InflatedHeartBalloon','ChristmasBox','ChristmasBoxManager','RPGRocket','RPGRocketEgg','RPGRocketSpear','item_randombox_base','StickyAnchor','SpawnableZipline','NetLootSpawnGroup','Vehicle_Buggy','NetPlayer','NetSpectator','TeleportationManager','FlareGunProjectile','AutoDestroyItem_DeadBody_Poop','AutoDestroyItem_DeadBody_Splash','AutoDestroyItem_Splash (0)','AutoDestroyItem_Splash (1)','AutoDestroyItem_Splash (2)','AutoDestroyItem_Splash (3)','AutoDestroyItem_Splash (4)','AutoDestroyItem_Splash (5)','SpaceshipTeleporter','MazeManager','ThunderController','SlenderMonster','ItemSellingMachineController','Landmine','LeaderBoardMonsterKill','GiantRockObject','HordeMobController','HordeMobLobbyHandler','LongAisleController','Duplicator','HH_LockedDoor','HingedDoorNetworked','ScaffoldTrap','Pillar_Arched_Broken_01','RuinTower_FloatingPlatform','RuinTower_FloatingSmall','Shipwheel','TeleportMachine','FourLeafQuest_FourLeafSpawner','EasterEgg_QuestSpawner','RadarPartSpawner','SimpleKeypadDoor','GiantController_GraveyardBoss_backup','MetaCameraControls','GrenadeProjectile','LaserMirror','mom_pillow','RiggedPlank','SharkScareTriggerObject','Uvula','BaitShopButton_Spawner','NetworkedLever_SecretLeft','CoreTeleporter','LaserSource','LaserSink','grababble_fish_paper_message','AutoDestroyItem_OilSplatter','AutoDestroyItem_Splash0','AutoDestroyItem_Splash1','AutoDestroyItem_Splash2','AutoDestroyItem_Splash3','AutoDestroyItem_Splash4','AutoDestroyItem_Splash5','BarrelBeansDynamic','BarrelBeansStatic','BarrelExplodingDynamic','BarrelExplodingStatic','BarrelOilDynamic','BarrelOilStatic','Basketball','BigBanana','BigHatchdoorNetObject','BigWheelhandleSpawner','BonfireController','BrainPowerPlug','ChoppableTreeManager','ClawMachineNetObject','DiggableGrave','DummyPlayerTarget','DummyTarget','EscherToyBlockObject','FortuneTellerNet','FuelCanisterNetObject','FuelCanisterSpawner','GenericWorldItemSpawner','GiantRockObject_Fire','GreenscreenNET','HatchdoorGrabHandle','HatchdoorNetObject','HellAltar','KeypadDoorNetObject','LakePineapple_Spawner','LockedDoor_KeySpawner','LockedShippingContainer_Quest','LogQuestItemSpawner','LootLantern','Mausoleum_01','MimicSpawner_CemeteryTile1','MimicSpawner_CemeteryTile3','MomToyBlockObject','MomToyBlockObject_DisappearOnDrop','MovieTheater','Net','NetGameTimeManager','NetMobSpawnGroup','RamEventNet','remote_controller_receiver','RobotDogRPG','SkiRaceController','Snail_Spawner','Spawner_Key','TubeMonster'],mobIDs=['AnglerController','AnglerMadController','ArmstrongController','ArmstrongMadController','BansheeController','BigHeadController','BigSharkController','BlobController','BombController','BomberController','BomberFlashbangController','BomberMadController','ChickenController','CutieController','CystController','EdenZombieController','EvilEyeController','EvilEyePinataController','EvilEyePinataLargeController','FakeGorillaController','FlyingSwarmController','ForestMobController','GiantController','GiantGreenController','GiantThrower','GiantThrowerController','Giant_GreenController','GraveyardBossController','GreenGiantController','Green_GiantController','HeartController','LankyController','MimicController','NextBotController','NextBotStaticController','PhantomController','PolypMassController','PrototypeSlenderController','PuppetController','RedGreenController','RedGreenMadController','RingmasterController','RobotDogController','SegwayController','ShadowBossController','ShadowController','SkinwalkerController','SlimeyController','SpiderCaveController','SpiderController','YanWormController','YangWormController','YinWormController','YinYanWormController','YingWormController','YingYangWormController'],VFXTypes= {
    'None':0xff,'MuzzleFlash_Shotgun':0x0,'MuzzleFlash_FlareGun':0x1,'CrateBreak':0x2,'MuzzleFlash_SmallGun':0x3,'MuzzleFlash_GoldRevolver':0x4,'MuzzleFlash_DragonPistol':0x5,'MuzzleFlash_ViperShotgun':0x6,'GlassBreak':0x7,'MuzzleFlash_Hydra':0x8,'Explosion_FlareGun':0x20,'Explosion_Coins':0x21,'Explosion_Nuts':0x22,'Explosion_Keys':0x23,'Explosion_Balloon':0x24,'Explosion_TeleGrenadeSrc':0x25,'Player_Touch_Lava':0x26,'Portal_Teleport':0x27,'Explosion_Coins_Vertical':0x28,'Autumn_Leaves_Burst':0x29,'Explosion_Feathers':0x2a,'Explosion_Popcorn':0x2b,'Electricity_Small':0x2c,'Impact_Snowball':0x41,'Impact_GoldRevolver':0x42,'Impact_MeleeHit':0x43,'Impact_BigGroundHit':0x44,'Impact_MeleeHit_CriticalSmall':0x45,'Impact_MeleeHit_CriticalLarge':0x46,'Impact_MeleeHit_AoE':0x47,'Impact_WaterSplash':0x48,'Research_ZiplineAttachDetach':0x60,'Research_Purchase1RP':0x61,'Research_Purchase5RP':0x62,'Research_Purchase10RP':0x63,'Research_PurchaseRPBundle':0x64,'Rope_ZiplineAttachDetach':0x6e,'MeatExplosion_1':0x80,'MeatExplosion_2':0x81,'MeatExplosion_Headshot':0x82,'ServerRoomSplash_Small':0xa0,'ServerRoomSplash_Big':0xa1,'RAMActivationSparks':0xa2,'GreenBlink':0xaa,'ConfettiBurst':0xae,'Ethereal_Void':0xb4,'MomBoss_NailBreak':0xb5,'MidAirJump_Fart':0xb6,'FuelExplosion':0xb7,'HeartBurst':0xb8,'EatingLoop':0xb9,'SmileyBurst':0xba
},
TeleTarget={
    Lobby_DefaultSpawn:0,Lobby_Teleporter:1,Lab_RespawnTube:2,OldLobby_Scary:3,ResearchWorldEntry:4,InsideStash:7,UndergroundHookshotRoom:8,Office_Skydome:9,RingmasterGameRoom:10,Lobby_SkiLift:11,FishTank_Interior:12,FishTank_WayBack:13,Arena_RedSpawn:16,Arena_BlueSpawn:17,Arena_Lobby:18,BetweenLobbyLoading:19,MoonCrashSite:20,Arena_SpectatorSpawn:21,Dam_LobbyDrama:30,Dam_Pier:31,Dam_CrackEntrance:32,Dam_CrackLanding:33,Dam_PipesCrossing:34,Dam_Diving:35,Dam_ServerRooms:36,Dam_BeforeBrain:37,Dam_LoadingScreen:38,Studios_Greenscreen:48,Studios_City:49,Studios_Podcast:50,Studios_Streamer:51,Studios_News:52,Circus_Exterior:60,Circus_InteriorPlinth:61,Circus_InteriorChangeover:62,Circus_Escher_1:63,Circus_Escher_Puzzle:64,Circus_Escher_2:65,Circus_Void:66,Circus_DaycareTeleport:67,Circus_BossRoom:68,HH_Foyer:70,GY_Entrance:80,GY_Middle:81,GY_Summoning:82,Mine_DropTunnel:90,Mine_Hell:91,Office_Lobby:100,Office_Duplicator:101,PowerPlant_Security:102,PowerPlant_Control:103,PowerPlant_Core:104,PowerPlant_Entrance:105,PowerPlant_Silo1:106,PowerPlant_Silo2:107,PowerPlant_Turbine:108,PowerPlant_Microwave:109,Ski_Top:128,Ski_ChallengeStart:129,Ski_ChallengeCP1:130,Ski_ChallengeCP2:131,Ski_ChallengeCP3:132,Ski_Midpoint:133,Ski_Bottom:134,Ski_Credits:135,Ski_Vault:136,Ski_WinterHouse:137,Megalodon_Entrance:140,Megalodon_MidBelly:141,Megalodon_LoreRoom:142,Megalodon_EndLake:143,Megalodon_HeartRoom:144,PirateShip:170,Fishing_Forest:200,Fishing_Foundation:201,Underbelly_JumpingPuzzle:220,Underbelly_BigHeadPipes:221,Underbelly_Foundation:222,Dig_Sandbox:239,Dig_ObsidianHalls:240,Dig_ObsidianBoss:241,Dig_Eden:242,Dig_Eden_Underbelly:243,Dig_Eden_Facility:244,Dig_The_Pit:245,Dig_Earth_Core_Top:246,Dig_Earth_Core:247,Dig_Moon_Core:248,Moon_Rocket_Exterior:251,Moon_Rocket_InteriorStart:252,Moon_Rocket_InteriorEnd:253,Moon_Rocket_AirlocksA:254,Moon_Rocket_AirlocksB:255,Smiley_Start:260
},
mapIDs=Object.entries(TeleTarget).map(([_name,_id])=>({name:_name,id:_id}));
const version='2.0';

let n5AccentColor=[0.0,1.0,0.42,1.0];
function n5ToHex(r,g,b){ return '#'+[r,g,b].map(x=>Math.round(Math.min(1,x)*255).toString(16).padStart(2,'0')).join(''); }

function n5GetMenuName(){
    const _theme=n5ThemeKeys[n5ThemeIndex%n5ThemeKeys.length];
    return '<b><color=#ffffff>N5</color><color=#9b7cff>.</color><color=#d9ccff>exe</color></b>  <color=#8f7cff>OWNER</color>  <color=#b7a8e8>[ '+_theme+' ]</color>';
}
let menuName='<b><color=#ffffff>N5</color><color=#9b7cff>.</color><color=#d9ccff>exe</color></b>  <color=#8f7cff>OWNER</color>';
let rpcAlertMsg='',rpcAlertExpiry=0,rpcAlertObj=null,rpcAlertLastShown='';

const n5RpcBlocks = {
    ApplyBuff:  true,
    AddForce:   true,
    Teleport:   true,
    Stinky:     true,
    Stun:       true,
    SetColor:   true,
    KickPlayer: true,
};

let _n5RpcOverlayObj=null, _n5RpcOverlayText=null, _n5RpcOverlayLastMsg='';
let n5SoundLoading=false;
let menu=null,reference=null,referenceCollider=null,buttonClickDelay=-0x38*0x1+-0x11f6+-0x917*-0x2,LerpMenu=!![],menuscale=0x188f*-0x1+0xd32+0xb5d*0x1+0.9,righthand=![],deltaTime=0x5c*-0x59+0x10fa*0x2+-0x1f8,time=0xb81+-0x925+0x2*-0x12e,stashDupeEnabled=![],stashDupe=![],itemIndex=-0x5*-0x226+-0x9*-0x24d+-0x61*0x53,itemGunDelay=-0x11*-0x76+-0x24fc+0x5b*0x52,mobIndex=0x1fe3*0x1+-0x506+-0xd*0x211,prefabIndex=-0x7c5*0x5+0x1*0x228b+0x44e,mobGunDelay2=-0x1*-0x961+0x1*-0x22f5+0x1994*0x1,flySpeed=-0x1*0x4c7+-0x159e+0x1a79,bgColor=[0.04,0.0,0.1,0.92],textColor=[0.0,1.0,0.35,1.0],buttonColor=[0.08,0.0,0.18,0.82],buttonPressedColor=[0.55,0.0,1.0,1.0],currentNotification='',notifactionResetTime=-0x1fe*-0x2+-0x38+0x1*-0x3c4,currentCategory=0xe92+-0x22c2+-0x143*-0x10,currentPage=-0x8e1*0x3+-0x1ba8+0x364b,hueVal=0x3e*0x4f+-0x74*-0x6+-0x15da,satVal=0x16c1+-0x3*0x374+0xa7*-0x13,tagGunDelay=-0x1*-0x229d+-0x18b8+-0x9e5,frameCount=-0x1dac+0x4*-0x2f0+-0x1*-0x296c,leftPrimary=![],leftSecondary=![],rightPrimary=![],rightSecondary=![],leftGrab=![],rightGrab=![],leftTrigger=![],rightTrigger=![],leftStick=![],rightStick=![],InfAmmo=![],n5ShotgunNoCooldown=![],n5GiveawayBagDelay=0,n5ArenaSpamDelay=0,ejectDupeAmount=-0x1c62+-0x88f*0x1+0x24f3,ejectDupeIndex=0x4*0x8b7+0x231*0xb+0x3af7*-0x1;
let n5InfiniteHoverpadBattery=false;

let _n5FlatCache=null,_n5FlatDirty=true;

let _n5MenuLastCat=-1,_n5MenuLastPage=-1;
let _n5MenuAnim=0,_n5MenuAnimTarget=0,_n5MenuAnimKick=0,_n5MenuClickBounce=0,_n5MenuClosing=false,_n5MenuBaseScale=null;
let _n5LastMenuWanted=false;

let _n5PCMode         = false;
let _n5PCMenuOpen     = false;
let _n5PCMenuSelector = 0;
let _n5PCYaw          = 0;
let _n5PCPitch        = 0;
let _n5PCFlyEnabled   = false;
let _n5PCLastCursorX  = -1;
let _n5PCLastCursorY  = -1;
let _n5PCRmbWasDown   = false;
let _n5PCQWasDown     = false;
let _n5PCEscWasDown   = false;
let _n5PCUpWasDown    = false;
let _n5PCDownWasDown  = false;
let _n5PCEnterWasDown = false;
let _n5PCLeftWasDown  = false;
let _n5PCRightWasDown = false;
let _n5PC5WasDown     = false;
let _n5GAKS  = null;
let _n5GCP   = null;
let _n5PCPoint= Memory.alloc(8);
function _n5FindExport(_moduleName,_exportName){
    try{if(Module.findExportByName)return Module.findExportByName(_moduleName,_exportName);}catch(_){}
    try{if(Module.getExportByName)return Module.getExportByName(_moduleName,_exportName);}catch(_){}
    try{if(Module.findGlobalExportByName)return Module.findGlobalExportByName(_exportName);}catch(_){}
    try{if(Module.getGlobalExportByName)return Module.getGlobalExportByName(_exportName);}catch(_){}
    try{
        const _m=Process.getModuleByName(_moduleName);
        try{if(_m.findExportByName)return _m.findExportByName(_exportName);}catch(_){}
        try{if(_m.getExportByName)return _m.getExportByName(_exportName);}catch(_){}
    }catch(_){}
    return null;
}
function _n5PCInitWin32() {
    try {
        const _user32 = _n5FindExport('user32.dll', 'GetAsyncKeyState');
        if (_user32) _n5GAKS = new NativeFunction(_user32, 'int', ['int']);
        const _gcp   = _n5FindExport('user32.dll', 'GetCursorPos');
        if (_gcp)    _n5GCP  = new NativeFunction(_gcp,   'bool', ['pointer']);
        if (_n5GAKS) console.log('[N5 PC] Win32 input ready. Press Q to enter PC mode.');
    } catch(_e) { console.error('[N5 PC] Win32 init failed:', _e); }
}
function _n5KeyDown(vk) {
    if (!_n5GAKS) return false;
    try { return (_n5GAKS(vk) & 0x8000) !== 0; } catch(_) { return false; }
}
const _VK_Q      = 0x51;
const _VK_W      = 0x57;
const _VK_A      = 0x41;
const _VK_S      = 0x53;
const _VK_D      = 0x44;
const _VK_ESCAPE = 0x1B;
const _VK_LBUTTON= 0x01;
const _VK_RBUTTON= 0x02;
const _VK_MBUTTON= 0x04;
const _VK_RETURN = 0x0D;
const _VK_SPACE  = 0x20;
const _VK_SHIFT  = 0x10;
const _VK_UP     = 0x26;
const _VK_DOWN   = 0x28;
const _VK_LEFT   = 0x25;
const _VK_RIGHT  = 0x27;
const _VK_5      = 0x35;

let _n5InputBuf=null;

let _n5ToastHandler=null,_n5ToastCtx=null,_n5ToastClass=null;

const N5_THEMES={
    'Default':  {bg:[0.03,0.0,0.12,0.95], btn:[0.07,0.0,0.22,0.85], btnOn:[0.3,0.0,0.7,0.97],  text:[0.0,1.0,0.42,1.0],  gun:[0.0,1.0,0.42,0.9],  pulse:false},
    'Galaxy':   {bg:[0.01,0.0,0.10,0.97], btn:[0.04,0.0,0.18,0.92], btnOn:[0.4,0.05,0.8,0.97], text:[0.7,0.35,1.0,1.0],  gun:[0.7,0.35,1.0,0.9],  pulse:true },
    'Rainbow':  {bg:[0.03,0.0,0.12,0.95], btn:[0.07,0.0,0.22,0.85], btnOn:[0.3,0.0,0.7,0.97],  text:[1.0,1.0,1.0,1.0],   gun:[1.0,1.0,1.0,0.9],   pulse:true },
    'Blood Red':{bg:[0.10,0.0,0.0,0.96],  btn:[0.22,0.0,0.0,0.90],  btnOn:[0.9,0.0,0.05,0.97], text:[1.0,0.15,0.1,1.0],  gun:[1.0,0.15,0.1,0.9],  pulse:true },
    'Ocean':    {bg:[0.0,0.04,0.13,0.96], btn:[0.0,0.08,0.25,0.90], btnOn:[0.0,0.5,0.95,0.97], text:[0.0,0.82,1.0,1.0],  gun:[0.0,0.82,1.0,0.9],  pulse:false},
    'Gold':     {bg:[0.10,0.06,0.0,0.96], btn:[0.18,0.12,0.0,0.90], btnOn:[0.75,0.5,0.0,0.97], text:[1.0,0.88,0.0,1.0],  gun:[1.0,0.88,0.0,0.9],  pulse:true },
    'Ice':      {bg:[0.0,0.06,0.15,0.95], btn:[0.04,0.12,0.25,0.90],btnOn:[0.25,0.6,0.95,0.97],text:[0.75,0.92,1.0,1.0], gun:[0.75,0.92,1.0,0.9], pulse:false},
    'Neon':     {bg:[0.0,0.0,0.07,0.97],  btn:[0.0,0.06,0.13,0.92], btnOn:[0.0,0.95,1.0,0.97], text:[0.0,1.0,1.0,1.0],   gun:[0.0,1.0,1.0,0.9],   pulse:true },
    'Sunset':   {bg:[0.12,0.03,0.06,0.96],btn:[0.24,0.06,0.06,0.90],btnOn:[0.95,0.35,0.0,0.97],text:[1.0,0.55,0.12,1.0], gun:[1.0,0.55,0.12,0.9], pulse:true },
    'Matrix':   {bg:[0.0,0.06,0.0,0.97],  btn:[0.0,0.10,0.0,0.92],  btnOn:[0.0,0.75,0.0,0.97], text:[0.0,1.0,0.0,1.0],   gun:[0.0,1.0,0.0,0.9],   pulse:false},
    'Midnight': {bg:[0.02,0.02,0.10,0.97],btn:[0.06,0.06,0.20,0.92],btnOn:[0.25,0.25,0.95,0.97],text:[0.55,0.55,1.0,1.0],gun:[0.55,0.55,1.0,0.9], pulse:false},
    'Toxic':    {bg:[0.02,0.08,0.0,0.96], btn:[0.05,0.13,0.0,0.90], btnOn:[0.35,0.95,0.0,0.97],text:[0.65,1.0,0.0,1.0],  gun:[0.65,1.0,0.0,0.9],  pulse:true },
    'Fire':     {bg:[0.12,0.02,0.0,0.96], btn:[0.25,0.06,0.0,0.90], btnOn:[1.0,0.45,0.0,0.97], text:[1.0,0.65,0.0,1.0],  gun:[1.0,0.65,0.0,0.9],  pulse:true },
    'Void':     {bg:[0.012,0.014,0.026,0.988], btn:[0.052,0.056,0.082,0.94], btnOn:[0.16,0.42,0.72,0.985], text:[0.74,0.9,1.0,1.0], gun:[0.34,0.78,1.0,0.94],  pulse:true },
    'Snow':     {bg:[0.09,0.10,0.12,0.94],btn:[0.14,0.16,0.20,0.90],btnOn:[0.65,0.75,0.9,0.97],text:[0.92,0.97,1.0,1.0], gun:[0.92,0.97,1.0,0.9],  pulse:false},
    'Cyber':    {bg:[0.0,0.0,0.04,0.98],  btn:[0.0,0.0,0.10,0.94],  btnOn:[1.0,0.0,0.5,0.97],  text:[1.0,0.0,0.6,1.0],   gun:[1.0,0.0,0.6,0.9],   pulse:true },
    'Jade':     {bg:[0.0,0.07,0.05,0.96], btn:[0.0,0.13,0.09,0.90], btnOn:[0.0,0.8,0.55,0.97], text:[0.0,1.0,0.65,1.0],  gun:[0.0,1.0,0.65,0.9],  pulse:false},
    'Sakura':   {bg:[0.10,0.0,0.06,0.95], btn:[0.20,0.0,0.12,0.90], btnOn:[1.0,0.2,0.55,0.97], text:[1.0,0.55,0.75,1.0], gun:[1.0,0.55,0.75,0.9], pulse:true },
};
const n5ThemeKeys=Object.keys(N5_THEMES);
const N5_DEFAULT_THEME_INDEX = Math.max(0, n5ThemeKeys.indexOf('Void'));
let n5ThemeIndex=N5_DEFAULT_THEME_INDEX,n5MenuScale=1.0,n5PulsePhase=0,n5RainbowPhase=0;

let _n5LastThemeKey=null,_n5LastItemIdx=-1,_n5LastMobIdx=-1,_n5LastPrefabIdx=-1,_n5LastVfxIdx=-1;


const n5ItemDisplay    = {buttonText:'ITEM: ...',   isTogglable:false, enabled:false};
const n5MobDisplay     = {buttonText:'MOB: ...',    isTogglable:false, enabled:false};
const n5PrefabDisplay  = {buttonText:'PREFAB: ...',  isTogglable:false, enabled:false};


const n5VFXDisplay = {buttonText:'>>> VFX: None', isTogglable:false, enabled:false};
let vfxIndex = 0;
let vfxKeys = Object.keys(VFXTypes).filter(k=>k!=='None');
const n5VisualAssetTypes={
    'Asset_ArenaOreMined':3,'Asset_BubbleStream':5,'Asset_BulletTrace':7,'Asset_CoinEarn':9,
    'Asset_ElectricityArc':11,'Asset_ElectricitySurface':12,'Asset_FartTag':14,'Asset_FishEarn':15,
    'Asset_FlyingDustParticles':16,'Asset_GhostReviveText':17,'Asset_HealthBurst':20,
    'Asset_HellGigaSiphon':22,'Asset_HellSiphon':23,'Asset_NutEarn':26,'Asset_OreBreak':27,
    'Asset_OreHit':28,'Asset_PlayerHitTest':31,'Asset_PowerPlugSparks':32,'Asset_ProximityHeal':33,
    'Asset_RadiationAmbience':35,'Asset_RAMActivation':36,'Asset_RamBreakdown':37,
    'Asset_ReactorCoreAmbience':38,'Asset_RPEarn':39,'Asset_SnowstormAmbience':42,
    'Asset_SwimBubbles':43,'Asset_VFX_SpiderBlood':45,'Asset_VoxelBreak':47,'Asset_WoosterSplash':48
};
const n5VisualAssetKeys=Object.keys(n5VisualAssetTypes);
for(const _vak of n5VisualAssetKeys)VFXTypes[_vak]=1000+n5VisualAssetTypes[_vak];
vfxKeys=Object.keys(VFXTypes).filter(k=>k!=='None');


let orbitAllEnabled = false;
let orbitPhase = 0;
let orbitSpeed = 0.35;
const n5Names = ['hi','epstein','hellen keller','garfield','woostergames','<color=red>OWNER</color>','<color=blue>N5</color>','<color=yellow>mcdonalds</color>','<color=green>Donald Trump</color>','<color=blue>MrBeast</color>','<color=blue>GunyahJohnVR</color>', 'unknown', 'porn enjoyer', '???', 'unknown'];
let n5NameIndex = 0;


let disableDangerousPrefabs = false;
let _n5OrbitSnowBalls=null,_n5OrbitSnowHues=null,_n5OrbitSnowScales=null;
let n5OrbitFuckeryObjects = [];
let n5OrbitFuckeryOrbiters = [];
let n5TowerOrbitObjects = [];
let n5TowerOrbitOrbiters = [];
let n5OrbitFuckeryPrefabName = 'AnglerController';
let n5OrbitFuckeryRadius = 6.5;
let n5OrbitFuckeryCount = 16;
let n5OrbitFuckeryShootDelay = 0;
let allowAllContainers=false;
let n5ArenaStartStopSpam=false,n5ArenaStartStopDelay=0,n5ServerAudioId=420,n5ServerAudioDelay=0,n5ProjectileIndex=0,n5ProjectileSwapEnabled=false,n5FlarePrefabImpactEnabled=false,n5FlarePrefabDelay=0,n5LeftPlatform=null,n5RightPlatform=null,n5FlareImpactSeen=new Set(),n5FlareProjectileSeen={};
let n5BagDropDupeEnabled=false,n5NoBackpackRemoveEnabled=false,n5NeverDespawnItems=false,n5NeverDespawnHookInstalled=false,n5InfiniteGunStats=false,n5BagDropDupeAmount=3,n5BagDropDupeDelay=0,n5BagDropDupeValues=[1,2,3,5,10,15,25,50],n5BagDropDupeIndex=2;
let n5NeverDespawnDelay=0,n5GunStatsDelay=0,n5ItemForceDelay=0,n5VoxelNukeDelay=0,n5PickupGunDelay=0,n5NoRecoilEnabled=false,n5HeldValueAmount=999999;
let n5ShopUnlockEnabled=false,n5CosmeticOwnEnabled=false,n5NoSpendEnabled=false,n5VendingBypassEnabled=false,n5BlueprintAbuseEnabled=false,n5DevSpoofEnabled=false,n5GoodShitHooksInstalled=false;
let n5InfFartEnabled=false,n5InfFartDelay=0,n5InfiniteJetpackEnabled=false,n5InfiniteJetpackDelay=0,n5TimebombSpamDelay=0;
let n5RigDupeDelay=0,n5RigSpasmEnabled=false,n5RigSpamDelay=0,n5RigSpasmBase=null;
let n5BuffId=0,n5BuffSpam=false,n5BuffSpamDelay=0,n5WorldSpamDelay=0,n5MachineSpamDelay=0,n5TeleSpamDelay=0,n5UserIndex=0,n5MapIndex=0,n5AutoKickAllDelay=0,n5RandomSpawnConfig=true,n5SellingSpasm=false,n5ToiletSpam=false,n5SellAmountSpam=false,_n5OutgoingKick=false;
const n5ProjectilePrefabs=['FlareGunProjectile','RPGRocket','RPGRocketSpear','RPGRocketEgg','GrenadeProjectile','RobotDogRPG','Landmine','InflatedBalloon','InflatedHeartBalloon'];
const dangerousPrefabs = ['NetPlayer','NetSpectator'];


let vfxGunDelay = 0;
let joystickFlyEnabled = false;
let platformSpawnDelay = 0;
let allItemsGunDelay = 0;
let allMobsGunDelay = 0;
let allPrefabsGunDelay = 0;

let n5ControlledPrefab = null;
let n5ControlPrefabEnabled = false;
let n5ControlPrefabVel = [0,0,0];
let n5BecomePrefabObj = null;
let n5BecomePrefabEnabled = false;
let n5HeldPrefabObj = null;
let n5HeldPrefabTransform = null;
let n5HeldPrefabEnabled = false;
let n5HeldPrefabName = '';
let n5LarpPrefabObj = null;
let n5LarpPrefabEnabled = false;
let n5LarpPrefabName = '';
let n5HelixSpawnDelay = 0;
const n5QuiverSlots = Array(15).fill(null).map((_,i)=>'item_snowball');
let n5QuiverSlotIndex = 0;
let n5SidebarPanel = null;
let n5SidebarText = null;
let n5SpeedBoostEnabled = false;
let n5SuperJumpEnabled = false;
let n5BigHandsEnabled = false;
let n5GodModeEnabled = false;
let n5GodModeHookSet = false;
let n5BetterGodModeEnabled = false;
let n5BetterGodModeHookSet = false;
let n5FullbrightEnabled = false;
let n5FullbrightHookSet = false;
let n5AutoReviveSelfEnabled = false;
let n5AutoReviveSelfDelay = 0;
let n5ReviveSelfHookSet = false;
let n5FreezeAllEnabled = false;
let n5AntiKickEnabled = false;
let n5ItemRainEnabled = false;
let n5ItemRainDelay = 0;
let n5CloneSelfDelay = 0;
let n5NetMirrorClone=null;
let n5NetMirrorCloneGo=null;
let n5NetMirrorCloneTf=null;
let n5NetMirrorCloneEnabled=false;
let n5NetMirrorCloneOffset=1.35;
let n5ServerNetClone=null;
let n5ServerNetCloneTf=null;
let n5ServerNetCloneEnabled=false;
let n5StrafeFlyEnabled = false;
let n5BlueprintFiles = [];
let n5BlueprintIndex = 0;
let n5BlueprintGunDelay = 0;
let n5GoopSpamDelay = 0;
let n5BlueprintQueue = [];


const N5_PRESET_SLOTS = 5;
const n5PresetSaveItems = Array.from({length:N5_PRESET_SLOTS}, (_,i)=>({buttonText:'Save Slot '+(i+1), isTogglable:false, enabled:false}));
const n5PresetLoadItems = Array.from({length:N5_PRESET_SLOTS}, (_,i)=>({buttonText:'Load Slot '+(i+1), isTogglable:false, enabled:false}));

function n5Hue2RGB(h){const i=Math.floor(h*6),f=h*6-i,q=1-f,t=f;switch(i%6){case 0:return[1,t,0];case 1:return[q,1,0];case 2:return[0,1,t];case 3:return[0,q,1];case 4:return[t,0,1];case 5:return[1,0,q];}return[1,1,1];}

function n5UpdateTheme(dt){
    n5PulsePhase+=dt*2.5; n5RainbowPhase+=dt*0.8;
    const k=n5ThemeKeys[n5ThemeIndex%n5ThemeKeys.length];
    const t=N5_THEMES[k];
    const p=t.pulse?(Math.sin(n5PulsePhase)*0.5+0.5):1.0;
    if(k==='Rainbow'){
        const [r,g,b]=n5Hue2RGB(n5RainbowPhase%1);
        textColor=[r,g,b,1]; gunColor=[r,g,b,0.9];
        const [r2,g2,b2]=n5Hue2RGB((n5RainbowPhase+0.5)%1);
        bgColor=[r2*0.15,g2*0.15,b2*0.15,0.92]; buttonColor=[r2*0.22,g2*0.22,b2*0.22,0.88];
        buttonPressedColor=[r2*0.8,g2*0.8,b2*0.8,0.95];
    } else if(k==='Galaxy'){
        const s=Math.sin(n5RainbowPhase*0.5);
        bgColor=[t.bg[0]+s*0.02,t.bg[1],t.bg[2]+s*0.04,t.bg[3]];
        buttonColor=[t.btn[0]+s*0.04,t.btn[1],t.btn[2]+s*0.08,t.btn[3]];
        buttonPressedColor=[t.btnOn[0]*p,t.btnOn[1]*p,t.btnOn[2]*p,t.btnOn[3]];
        textColor=[t.text[0]+s*0.1,t.text[1],t.text[2]+s*0.2,1]; gunColor=textColor.slice(0,3).concat([0.9]);
    } else {

        if(k !== _n5LastThemeKey){
            bgColor=t.bg.slice(); buttonColor=t.btn.slice();
            textColor=t.text.slice(); gunColor=t.gun.slice();
            _n5LastThemeKey=k;
        }
        const _soft=0.82+(p*0.18);
        buttonPressedColor[0]=t.btnOn[0]*_soft; buttonPressedColor[1]=t.btnOn[1]*_soft;
        buttonPressedColor[2]=t.btnOn[2]*_soft; buttonPressedColor[3]=t.btnOn[3];
    }
    menuscale=0.9*n5MenuScale;
    menuName=n5GetMenuName();

    const _ap=0.5+0.5*Math.sin(n5PulsePhase*1.5);
    n5AccentColor[0]=textColor[0]+(_ap*(1.0-textColor[0]));
    n5AccentColor[1]=textColor[1]+(_ap*(1.0-textColor[1]));
    n5AccentColor[2]=textColor[2]+(_ap*(1.0-textColor[2]));
    n5AccentColor[3]=1.0;

    if(itemIndex!==_n5LastItemIdx){ n5ItemDisplay.buttonText='>>> ITEM: '+itemIDs[itemIndex]; _n5LastItemIdx=itemIndex; }
    if(mobIndex!==_n5LastMobIdx){ n5MobDisplay.buttonText='>>> MOB:  '+mobIDs[mobIndex]; _n5LastMobIdx=mobIndex; }
    if(prefabIndex!==_n5LastPrefabIdx){ n5PrefabDisplay.buttonText='>>> PREFAB: '+prefabList[prefabIndex]; _n5LastPrefabIdx=prefabIndex; }
    if(vfxKeys&&vfxKeys.length){
        const _vi=vfxIndex%vfxKeys.length;
        if(_vi!==_n5LastVfxIdx){ n5VFXDisplay.buttonText='>>> VFX: '+vfxKeys[_vi]+' (0x'+VFXTypes[vfxKeys[_vi]].toString(16)+')'; _n5LastVfxIdx=_vi; }
    }
}


function n5PresetPath(slot){ return '/sdcard/N5Presets/preset_'+(slot+1)+'.json'; }
function n5PresetExists(slot){
    try { Java.perform(()=>{});
        const f=Java.use('java.io.File').$new(n5PresetPath(slot));
        return f.exists();
    } catch(e){ return false; }
}
function n5SavePreset(slot){
    try {
        Java.perform(function(){
            const File=Java.use('java.io.File');
            File.$new('/sdcard/N5Presets').mkdirs();
            const fw=Java.use('java.io.FileWriter').$new(n5PresetPath(slot),false);
            fw.write(JSON.stringify({
                itemIndex:itemIndex, mobIndex:mobIndex, prefabIndex:prefabIndex,
                theme:n5ThemeIndex, scale:n5MenuScale
            }));
            fw.flush(); fw.close();
        });
        currentNotification='Saved to Slot '+(slot+1); notifactionResetTime=time+3;
    } catch(e){ currentNotification='Save failed: '+e; notifactionResetTime=time+3; }
}
function n5LoadPreset(slot){
    try {
        let loaded=null;
        Java.perform(function(){
            const File=Java.use('java.io.File');
            const f=File.$new(n5PresetPath(slot));
            if(!f.exists()){currentNotification='Slot '+(slot+1)+' empty'; notifactionResetTime=time+3; return;}
            const sb=Java.use('java.lang.StringBuilder').$new();
            const br=Java.use('java.io.BufferedReader').$new(Java.use('java.io.FileReader').$new(f));
            let line;
            while((line=br.readLine())!==null) sb.append(line);
            br.close();
            loaded=JSON.parse(sb.toString());
        });
        if(loaded){
            itemIndex=loaded.itemIndex||0; mobIndex=loaded.mobIndex||0; prefabIndex=loaded.prefabIndex||0;
            n5ThemeIndex=(typeof loaded.theme==='number')?loaded.theme:N5_DEFAULT_THEME_INDEX; n5MenuScale=loaded.scale||1.0;
            currentNotification='Loaded Slot '+(slot+1); notifactionResetTime=time+3;
        }
    } catch(e){ currentNotification='Load failed: '+e; notifactionResetTime=time+3; }
}

function n5GetLocalPlayer(){
    try { return _0x126eec['method'](_0x476e10['vQatN'])['invoke'](); } catch(_e){ return null; }
}

function n5InstallGodModeHook(){
    if(n5GodModeHookSet)return true;
    try{
        let _n5MaxHealthSetter=null;
        let _n5NetPlayerCls=null;
        for(const _asm of Il2Cpp.domain.assemblies){
            try{_n5NetPlayerCls=_asm.image.class('AnimalCompany.NetPlayer');}catch(_){}
            if(_n5NetPlayerCls)break;
            try{_n5NetPlayerCls=_asm.image.class('NetPlayer');}catch(_){}
            if(_n5NetPlayerCls)break;
        }
        if(_n5NetPlayerCls){
            try{_n5MaxHealthSetter=_n5NetPlayerCls['method']('set_maxHealth',1);}catch(_){}
        }
        if(!_n5MaxHealthSetter){
            for(const _asm of Il2Cpp.domain.assemblies){
                try{
                    for(const _klass of _asm.image.classes){
                        try{
                            const _m=_klass.method('set_maxHealth',1);
                            if(_m){_n5MaxHealthSetter=_m;break;}
                        }catch(_){}
                    }
                }catch(_){}
                if(_n5MaxHealthSetter)break;
            }
        }
        if(!_n5MaxHealthSetter)throw new Error('set_maxHealth(StatePrimitive`1 value) not found');
        _n5MaxHealthSetter['implementation']=function(_value){
            try{
                if(n5GodModeEnabled){
                    try{if(this['method']('get_IsMine')['invoke']())return;}catch(_){}
                    try{if(this['method']('get_isMine')['invoke']())return;}catch(_){}
                    if(!_n5NetPlayerCls)return;
                }
            }catch(_){}
            return this['method']('set_maxHealth',1)['invoke'](_value);
        };
        n5GodModeHookSet=true;
        return true;
    }catch(_e){
        console.error('[N5 GodMode set_maxHealth hook]',_e);
        return false;
    }
}

function n5IsLocalPlayerController(_self){
    try{
        const _pc=n5GetPlayerControllerInstance();
        return _pc&&_self&&_pc['handle']&&_self['handle']&&_pc['handle'].equals(_self['handle']);
    }catch(_){}
    return true;
}

function n5InstallBetterGodModeHook(){
    if(n5BetterGodModeHookSet)return true;
    let _ok=false;
    try{
        const _pcCls=Il2Cpp.domain.assembly('AnimalCompany').image.class('AnimalCompany.PlayerController');
        const _blockVoid=(_name,_argc)=>{
            try{
                const _m=_pcCls.method(_name,_argc);
                _m.implementation=function(){
                    if((n5BetterGodModeEnabled||n5GodModeEnabled)&&n5IsLocalPlayerController(this))return;
                    return this.method(_name,_argc).invoke(...arguments);
                };
                _ok=true;
            }catch(_){}
        };
        _blockVoid('PlayerHit',6);
        _blockVoid('PlayerHit',4);
        _blockVoid('PlayerStun',4);
        _blockVoid('ForcePlayerStun',2);
        _blockVoid('SubtractPlayerHealthButNotDie',1);
        _blockVoid('SubtractPlayerHealth',1);
        _blockVoid('Die',0);
        _blockVoid('PlayerDie',3);
        try{
            const _deathFx=_pcCls.method('PlayerDeathEffect');
            _deathFx.implementation=function(){
                if((n5BetterGodModeEnabled||n5GodModeEnabled)&&n5IsLocalPlayerController(this))return;
                return this.method('PlayerDeathEffect').invoke();
            };
            _ok=true;
        }catch(_){}
    }catch(_e){console.error('[N5 BetterGodMode PlayerController]',_e);}
    try{
        const _npCls=Il2Cpp.domain.assembly('AnimalCompany').image.class('AnimalCompany.NetPlayer');
        const _hook=(_name,_argc)=>{
            try{
                const _m=_npCls.method(_name,_argc);
                _m.implementation=function(){
                    if(n5BetterGodModeEnabled||n5GodModeEnabled){
                        try{if(this.method('get_IsMine').invoke())return;}catch(_){}
                        try{if(this.method('get_isMine').invoke())return;}catch(_){}
                    }
                    return this.method(_name,_argc).invoke(...arguments);
                };
                _ok=true;
            }catch(_){}
        };
        _hook('RPC_PlayerHit',3);
        _hook('RPC_PlayerHit',6);
        _hook('RPC_PlayerStun',4);
        try{
            const _rpcDie=_npCls.method('RPC_DoPlayerDie',1);
            _rpcDie.implementation=function(isDie){
                if((n5BetterGodModeEnabled||n5GodModeEnabled)&&isDie){
                    try{this.method('set_isDie').invoke(false);}catch(_){}
                    try{n5ReviveSelf();}catch(_){}
                    return;
                }
                return this.method('RPC_DoPlayerDie',1).invoke(isDie);
            };
            _ok=true;
        }catch(_){}
    }catch(_e2){console.error('[N5 BetterGodMode NetPlayer]',_e2);}
    n5BetterGodModeHookSet=_ok;
    return _ok;
}

function n5KeepAliveSelf(){
    try{
        const _pc=n5GetPlayerControllerInstance();
        if(_pc&&!_pc['handle']['isNull']()){
            try{_pc.field('_isDie').value=false;}catch(_){}
            try{_pc.field('_isInvincible').value=true;}catch(_){}
            try{_pc.field('_maxHealth').value=100;}catch(_){}
            try{_pc.field('<healthLost>k__BackingField').value=0;}catch(_){}
            try{_pc.method('AddPlayerHealth').invoke(999);}catch(_){}
            try{if(_pc.method('get_isDead').invoke())n5ReviveSelf();}catch(_){}
        }
    }catch(_){}
    try{
        const _lp=n5GetLocalNetPlayerSafe();
        if(_lp&&!_lp['handle']['isNull']()){
            try{_lp.method('set_isDie').invoke(false);}catch(_){}
            try{_lp.method('set_isInvincible').invoke(true);}catch(_){}
        }
    }catch(_){}
}

function n5SetFullbrightAmbient(_value){
    try{
        const RenderSettings=Il2Cpp.domain.assembly('UnityEngine.CoreModule').image.class('UnityEngine.RenderSettings');
        const _floatValue=(Il2Cpp.floating?Il2Cpp.floating(_value):_value);
        const _apply=()=>{
            try{RenderSettings.method('set_fog').invoke(false);}catch(_){}
            try{RenderSettings.method('set_fogDensity').invoke(0.0);}catch(_){}
            try{RenderSettings.method('set_reflectionIntensity').invoke(_floatValue);}catch(_){}
            try{
                const _colorCls=Il2Cpp.domain.assembly('UnityEngine.CoreModule').image.class('UnityEngine.Color');
                RenderSettings.method('set_ambientLight').invoke(_colorCls.method('get_white').invoke());
                return;
            }catch(_){}
            try{RenderSettings.method('set_ambientLight').invoke([_value,_value,_value,1.0]);}catch(_){}
        };
        try{
            if(Il2Cpp.scheduleOnThread)return Il2Cpp.scheduleOnThread(function(){try{_apply();}catch(_){}});
        }catch(_){}
        _apply();
    }catch(_e){console.error('[N5 Fullbright ambient]',_e);}
}

function n5InstallFullbrightHook(){
    if(n5FullbrightHookSet)return true;
    try{
        const EnvLightingUtils=Il2Cpp.domain.assembly('AnimalCompany').image.class('AnimalCompany.EnvironmentLightingUtils');
        const _envLighting=EnvLightingUtils.method('TryGetEnvironmentVolumeLighting');
        _envLighting.implementation=function(position,mainLightIntensity,spookiness){
            if(n5FullbrightEnabled)return false;
            return this.method('TryGetEnvironmentVolumeLighting').invoke(position,mainLightIntensity,spookiness);
        };
        const _objLighting=EnvLightingUtils.method('TryGetObjectLighting');
        _objLighting.implementation=function(position,normal,meshRenderer,mainLightIntensity,spookiness,indirectLuminance){
            if(n5FullbrightEnabled)return false;
            return this.method('TryGetObjectLighting').invoke(position,normal,meshRenderer,mainLightIntensity,spookiness,indirectLuminance);
        };
        try{
            const _indirect=EnvLightingUtils.method('GetIndirectLuminance');
            _indirect.implementation=function(position,normal,meshRenderer){
                if(n5FullbrightEnabled)return 1.0;
                return this.method('GetIndirectLuminance').invoke(position,normal,meshRenderer);
            };
        }catch(_){}
        n5FullbrightHookSet=true;
        return true;
    }catch(_e){
        console.error('[N5 Fullbright hook]',_e);
        return false;
    }
}

function n5GetPlayerControllerInstance(){
    try{
        const _pcCls=Il2Cpp.domain.assembly('AnimalCompany').image.class('AnimalCompany.PlayerController');
        return _pcCls.method('get_instance').invoke();
    }catch(_e){return null;}
}

function n5GetLocalNetPlayerSafe(){
    try{
        const _npCls=Il2Cpp.domain.assembly('AnimalCompany').image.class('AnimalCompany.NetPlayer');
        return _npCls.method('get_localPlayer').invoke();
    }catch(_e){}
    try{return n5GetLocalPlayer();}catch(_){}
    return null;
}

function n5NullOrDead(_o){
    try{return !_o||(_o['handle']&&_o['handle']['isNull']&&_o['handle']['isNull']())||(_o['isNull']&&_o['isNull']());}catch(_){}
    return !_o;
}

function n5GetGameObject(_o){
    try{return _o.method('get_gameObject').invoke();}catch(_){}
    return null;
}

function n5SetObjEnabled(_o,_v){
    try{_o.method('set_enabled').invoke(!!_v);return true;}catch(_){}
    try{_o.field('enabled').value=!!_v;return true;}catch(_){}
    return false;
}

function n5DestroyNetMirrorClone(){
    try{
        if(!n5NullOrDead(n5NetMirrorCloneGo))_0x1f7740.method('Destroy',1).invoke(n5NetMirrorCloneGo);
    }catch(_e){console.error('[N5 MirrorClone destroy]',_e);}
    n5NetMirrorClone=null;
    n5NetMirrorCloneGo=null;
    n5NetMirrorCloneTf=null;
}

function n5InstantiateGameObject(_srcGo){
    try{return _0x1f7740.method('Instantiate',1).inflate(_0x4464ae).invoke(_srcGo);}catch(_){}
    try{return _0x1f7740.method('Instantiate',1).invoke(_srcGo);}catch(_){}
    try{
        const _pos=_0xc4cf2f(_srcGo).method('get_position').invoke();
        const _rot=_0xc4cf2f(_srcGo).method('get_rotation').invoke();
        return _0x1f7740.method('Instantiate',3).inflate(_0x4464ae).invoke(_srcGo,_pos,_rot);
    }catch(_){}
    try{
        const _pos=_0xc4cf2f(_srcGo).method('get_position').invoke();
        const _rot=_0xc4cf2f(_srcGo).method('get_rotation').invoke();
        return _0x1f7740.method('Instantiate',3).invoke(_srcGo,_pos,_rot);
    }catch(_){}
    return null;
}

function n5GetComponentByName(_go,_className){
    try{
        const _cls=Il2Cpp.domain.assembly('AnimalCompany').image.class(_className);
        return _go.method('GetComponent',1).inflate(_cls).invoke();
    }catch(_){}
    try{
        const _cls=Il2Cpp.domain.assembly('PhotonVoice.Fusion').image.class(_className);
        return _go.method('GetComponent',1).inflate(_cls).invoke();
    }catch(_){}
    try{
        const _cls=Il2Cpp.domain.assembly('Fusion.Runtime').image.class(_className);
        return _go.method('GetComponent',1).inflate(_cls).invoke();
    }catch(_){}
    return null;
}

function n5TfmPosWithOffset(_tf,_xoff){
    try{
        const _p=_tf.method('get_position').invoke();
        return [Number(_p[0]||0)+_xoff,Number(_p[1]||0),Number(_p[2]||0)];
    }catch(_){}
    return null;
}

function n5PositionBesideSelf(_xoff){
    try{
        const _lp=n5GetLocalNetPlayerSafe();
        if(!n5NullOrDead(_lp)){
            const _tf=_0xc4cf2f(_lp);
            const _p=n5TfmPosWithOffset(_tf,_xoff);
            if(_p)return _p;
        }
    }catch(_){}
    try{
        const _p=n5GetSafeSelfPosition();
        if(_p)return [Number(_p[0]||0)+_xoff,Number(_p[1]||0),Number(_p[2]||0)];
    }catch(_){}
    return [_xoff,0,0];
}

function n5MirrorTransformTree(_srcTf,_dstTf,_xoff,_depth=0,_budget={n:0}){
    if(!_srcTf||!_dstTf||_depth>9||_budget.n>260)return;
    _budget.n++;
    try{
        const _p=n5TfmPosWithOffset(_srcTf,_xoff);
        if(_p)_dstTf.method('set_position').invoke(_p);
    }catch(_){}
    try{_dstTf.method('set_rotation').invoke(_srcTf.method('get_rotation').invoke());}catch(_){}
    try{_dstTf.method('set_localScale').invoke(_srcTf.method('get_localScale').invoke());}catch(_){}
    let _c=0,_dc=0;
    try{_c=_srcTf.method('get_childCount').invoke()|0;}catch(_){}
    try{_dc=_dstTf.method('get_childCount').invoke()|0;}catch(_){}
    const _lim=Math.min(_c,_dc,64);
    for(let _i=0;_i<_lim;_i++){
        try{
            const _s=_srcTf.method('GetChild',1).invoke(_i);
            const _d=_dstTf.method('GetChild',1).invoke(_i);
            n5MirrorTransformTree(_s,_d,_xoff,_depth+1,_budget);
        }catch(_){}
    }
}

function n5StopServerNetPlayerClone(){
    try{if(n5ServerNetClone)n5DespawnPrefabObj(n5ServerNetClone);}catch(_){}
    n5ServerNetClone=null;
    n5ServerNetCloneTf=null;
    n5ServerNetCloneEnabled=false;
}

function n5SpawnServerNetPlayerClone(){
    try{
        if(time<n5CloneSelfDelay){currentNotification='Clone cooldown';notifactionResetTime=time+1;return false;}
        n5CloneSelfDelay=time+1.5;
        const _src=n5GetLocalNetPlayerSafe();
        const _pos=n5PositionBesideSelf(n5NetMirrorCloneOffset);
        let _rot=_0x554b79;
        try{if(!n5NullOrDead(_src))_rot=_0xc4cf2f(_src).method('get_rotation').invoke();}catch(_){}
        const _obj=_0x5b9456('NetPlayer',_pos,_rot);
        if(!_obj||(_obj.handle&&_obj.handle.isNull&&_obj.handle.isNull())){currentNotification='Server NetPlayer spawn failed';notifactionResetTime=time+2;return false;}
        n5ServerNetClone=_obj;
        n5ServerNetCloneTf=n5GetSpawnedObjectTransform(_obj);
        try{if(n5ServerNetCloneTf)n5ServerNetCloneTf.method('set_position').invoke(_pos);}catch(_){}
        try{n5DisablePrefabCollisions(_obj);}catch(_){}
        currentNotification='Server NetPlayer clone spawned beside you';notifactionResetTime=time+2;
        return true;
    }catch(_e){console.error('[N5 ServerNetClone spawn]',_e);currentNotification='Server clone error';notifactionResetTime=time+2;}
    return false;
}

function n5UpdateServerNetPlayerClone(){
    if(!n5ServerNetCloneEnabled)return;
    try{
        if(!n5ServerNetClone||n5NullOrDead(n5ServerNetClone)){
            n5ServerNetClone=null;n5ServerNetCloneTf=null;
            n5SpawnServerNetPlayerClone();
            return;
        }
        if(!n5ServerNetCloneTf)n5ServerNetCloneTf=n5GetSpawnedObjectTransform(n5ServerNetClone);
        if(!n5ServerNetCloneTf)return;
        const _src=n5GetLocalNetPlayerSafe();
        const _pos=n5PositionBesideSelf(n5NetMirrorCloneOffset);
        try{n5ServerNetCloneTf.method('set_position').invoke(_pos);}catch(_){}
        try{if(!n5NullOrDead(_src))n5ServerNetCloneTf.method('set_rotation').invoke(_0xc4cf2f(_src).method('get_rotation').invoke());}catch(_){}
    }catch(_e){console.error('[N5 ServerNetClone update]',_e);}
}

function n5MirrorCloneVoiceState(_src,_clone){
    try{_clone.field('<voiceVolume>k__BackingField').value=_src.field('<voiceVolume>k__BackingField').value;}catch(_){}
    try{_clone.field('_voiceFalloffDistance').value=_src.field('_voiceFalloffDistance').value;}catch(_){}
    try{_clone.field('_scaledVoiceFalloffDistance').value=_src.field('_scaledVoiceFalloffDistance').value;}catch(_){}
    try{_clone.field('_specialVoice').value=_src.field('_specialVoice').value;}catch(_){}
    try{_clone.field('voiceNetworkObject').value=_src.field('voiceNetworkObject').value;}catch(_){}
    try{_clone.field('_recorder').value=_src.field('_recorder').value;}catch(_){}
    try{_clone.field('_speaker').value=_src.field('_speaker').value;}catch(_){}
    try{
        const _srcVoice=_src.field('voiceNetworkObject').value;
        const _cloneVoice=_clone.field('voiceNetworkObject').value;
        if(_srcVoice&&_cloneVoice&&!n5NullOrDead(_srcVoice)&&!n5NullOrDead(_cloneVoice)){
            try{_cloneVoice.field('<RecorderInUse>k__BackingField').value=_srcVoice.method('get_RecorderInUse').invoke();}catch(_){}
            try{_cloneVoice.field('<SpeakerInUse>k__BackingField').value=_srcVoice.method('get_SpeakerInUse').invoke();}catch(_){}
        }
    }catch(_){}
}

function n5CreateNetMirrorClone(){
    try{
        const _src=n5GetLocalNetPlayerSafe();
        if(n5NullOrDead(_src)){currentNotification='No local NetPlayer yet';notifactionResetTime=time+2;return false;}
        const _srcGo=n5GetGameObject(_src);
        if(n5NullOrDead(_srcGo)){currentNotification='Local NetPlayer GO missing';notifactionResetTime=time+2;return false;}
        n5DestroyNetMirrorClone();
        const _cloneGo=n5InstantiateGameObject(_srcGo);
        if(n5NullOrDead(_cloneGo)){currentNotification='NetPlayer clone failed';notifactionResetTime=time+2;return false;}
        n5NetMirrorCloneGo=_cloneGo;
        try{_cloneGo.method('set_name').invoke(Il2Cpp.string('N5 Full NetPlayer Mirror Clone'));}catch(_){}
        try{_cloneGo.method('SetActive').invoke(true);}catch(_){}
        n5NetMirrorCloneTf=_0xc4cf2f(_cloneGo);
        n5NetMirrorClone=n5GetComponentByName(_cloneGo,'AnimalCompany.NetPlayer');
        if(n5NullOrDead(n5NetMirrorClone))n5NetMirrorClone=n5GetComponentByName(_cloneGo,'NetPlayer');
        n5MirrorCloneVoiceState(_src,n5NetMirrorClone||_src);
        for(const _name of ['Fusion.NetworkObject','Fusion.NetworkTransform','Fusion.NetworkRigidbody','Photon.Voice.Fusion.VoiceNetworkObject']){
            try{
                const _c=n5GetComponentByName(_cloneGo,_name);
                if(_c&&!n5NullOrDead(_c))n5SetObjEnabled(_c,false);
            }catch(_){}
        }
        try{n5MirrorTransformTree(_0xc4cf2f(_src),n5NetMirrorCloneTf,n5NetMirrorCloneOffset);}catch(_){}
        return true;
    }catch(_e){console.error('[N5 MirrorClone create]',_e);}
    return false;
}

function n5UpdateNetMirrorClone(){
    if(!n5NetMirrorCloneEnabled)return;
    try{
        const _src=n5GetLocalNetPlayerSafe();
        if(n5NullOrDead(_src))return;
        if(n5NullOrDead(n5NetMirrorCloneGo)||n5NullOrDead(n5NetMirrorCloneTf)){
            if(time<n5CloneSelfDelay)return;
            n5CloneSelfDelay=time+1.5;
            n5CreateNetMirrorClone();
            return;
        }
        n5MirrorTransformTree(_0xc4cf2f(_src),n5NetMirrorCloneTf,n5NetMirrorCloneOffset);
        if(n5NetMirrorClone&&!n5NullOrDead(n5NetMirrorClone))n5MirrorCloneVoiceState(_src,n5NetMirrorClone);
    }catch(_e){console.error('[N5 MirrorClone update]',_e);}
}

function n5IsSelfDead(){
    try{const _pc=n5GetPlayerControllerInstance();if(_pc&&!_pc['handle']['isNull']())return !!_pc.method('get_isDead').invoke();}catch(_){}
    try{const _lp=n5GetLocalNetPlayerSafe();if(_lp&&!_lp['handle']['isNull']())return !!_lp.method('get_isDie').invoke();}catch(_){}
    return false;
}

function n5VecNum(_p,_i,_f){
    try{
        let _v=_p[_i];
        if((_v===undefined||_v===null)&&_p['field'])_v=_p['field'](_f)['value'];
        return Number(_v||0);
    }catch(_){return 0;}
}

function n5IsGoodPosition(_p){
    try{
        if(!_p)return false;
        const _x=n5VecNum(_p,0,'x'),_y=n5VecNum(_p,1,'y'),_z=n5VecNum(_p,2,'z');
        if(!isFinite(_x)||!isFinite(_y)||!isFinite(_z))return false;
        if(Math.abs(_x)+Math.abs(_y)+Math.abs(_z)<0.01)return false;
        if(Math.abs(_x)>100000||Math.abs(_y)>100000||Math.abs(_z)>100000)return false;
        return true;
    }catch(_){return false;}
}

function n5GetSafeSelfPosition(){
    try{
        const _p=_0xc4cf2f(_0x33fb14).method(_0x476e10['YApVv']).invoke();
        if(n5IsGoodPosition(_p))return _p;
    }catch(_){}
    try{
        const _pc=n5GetPlayerControllerInstance();
        if(_pc&&!_pc['handle']['isNull']()){
            const _p=_0xc4cf2f(_pc).method(_0x476e10['YApVv']).invoke();
            if(n5IsGoodPosition(_p))return _p;
        }
    }catch(_){}
    try{
        const _lp=n5GetLocalNetPlayerSafe();
        if(_lp&&!_lp['handle']['isNull']()){
            const _p=_0xc4cf2f(_lp).method(_0x476e10['YApVv']).invoke();
            if(n5IsGoodPosition(_p))return _p;
        }
    }catch(_){}
    try{
        const _p=_0x35ade8.method(_0x476e10['YApVv']).invoke();
        if(n5IsGoodPosition(_p))return _p;
    }catch(_){}
    return null;
}

function n5RestoreSelfPosition(_pos){
    if(!n5IsGoodPosition(_pos))return false;
    let _ok=false;
    try{
        const _pc=n5GetPlayerControllerInstance();
        if(_pc&&!_pc['handle']['isNull']()){
            try{_0xc4cf2f(_pc).method(_0x476e10['ZKeBc']).invoke(_pos);_ok=true;}catch(_){}
        }
    }catch(_){}
    try{
        const _lp=n5GetLocalNetPlayerSafe();
        if(_lp&&!_lp['handle']['isNull']()){
            try{_0xc4cf2f(_lp).method(_0x476e10['ZKeBc']).invoke(_pos);_ok=true;}catch(_){}
        }
    }catch(_){}
    return _ok;
}

function n5InstallReviveSelfHook(){
    if(n5ReviveSelfHookSet)return true;
    let _ok=false;
    try{
        const _pcCls=Il2Cpp.domain.assembly('AnimalCompany').image.class('AnimalCompany.PlayerController');
        try{
            const _die=_pcCls.method('Die');
            _die.implementation=function(){
                if(n5AutoReviveSelfEnabled){
                    try{n5ReviveSelf();}catch(_){}
                    return;
                }
                return this.method('Die').invoke();
            };
            _ok=true;
        }catch(_){}
        try{
            const _playerDie=_pcCls.method('PlayerDie');
            _playerDie.implementation=function(killSound,hitName,fromKillTrigger){
                if(n5AutoReviveSelfEnabled){
                    try{n5ReviveSelf();}catch(_){}
                    return;
                }
                return this.method('PlayerDie').invoke(killSound,hitName,fromKillTrigger);
            };
            _ok=true;
        }catch(_){}
    }catch(_e){console.error('[N5 Revive hook PlayerController]',_e);}
    try{
        const _npCls=Il2Cpp.domain.assembly('AnimalCompany').image.class('AnimalCompany.NetPlayer');
        const _rpcDie=_npCls.method('RPC_DoPlayerDie');
        _rpcDie.implementation=function(isDie){
            if(n5AutoReviveSelfEnabled&&isDie){
                try{this.method('set_isDie').invoke(false);}catch(_){}
                try{n5ReviveSelf();}catch(_){}
                return this.method('RPC_DoPlayerDie').invoke(false);
            }
            return this.method('RPC_DoPlayerDie').invoke(isDie);
        };
        _ok=true;
    }catch(_e2){console.error('[N5 Revive hook NetPlayer]',_e2);}
    n5ReviveSelfHookSet=_ok;
    return _ok;
}

function n5ReviveSelf(){
    let _ok=false;
    const _keepPos=n5GetSafeSelfPosition();
    try{
        const _pc=n5GetPlayerControllerInstance();
        if(_pc&&!_pc['handle']['isNull']()){
            try{_pc.method('CancelReviveInvincibility').invoke();}catch(_){}
            try{_pc.method('RealiveWithHealth').invoke(100);_ok=true;}catch(_){}
            try{_pc.method('Revive').invoke();_ok=true;}catch(_){}
            try{_pc.method('AddPlayerHealth').invoke(999);}catch(_){}
            try{_pc.field('_isDie').value=false;_ok=true;}catch(_){}
            try{_pc.field('_isInvincible').value=true;}catch(_){}
            try{_pc.field('_maxHealth').value=100;}catch(_){}
            try{_pc.field('<healthLost>k__BackingField').value=0;}catch(_){}
            try{_pc.field('<healthHealed>k__BackingField').value=100;}catch(_){}
            try{_pc.method('UpdateReviving').invoke(false);}catch(_){}
            try{_pc.field('_deathCoroutine').value=null;}catch(_){}
            try{n5RestoreSelfPosition(_keepPos);}catch(_){}
        }
    }catch(_e){console.error('[N5 ReviveSelf PlayerController]',_e);}
    try{
        const _lp=n5GetLocalNetPlayerSafe();
        if(_lp&&!_lp['handle']['isNull']()){
            try{_lp.method('set_isDie').invoke(false);_ok=true;}catch(_){}
            try{_lp.method('set_isInvincible').invoke(true);}catch(_){}
            try{_lp.method('set_isControllingBody').invoke(true);}catch(_){}
            try{_lp.method('HandleLocalPlayerDie').invoke(false);}catch(_){}
            try{_lp.method('RPC_DoPlayerDie').invoke(false);_ok=true;}catch(_){}
            try{n5RestoreSelfPosition(_keepPos);}catch(_){}
        }
    }catch(_e2){console.error('[N5 ReviveSelf NetPlayer]',_e2);}
    if(_ok){
        try{currentNotification='Revive Self sent';notifactionResetTime=time+2;}catch(_){}
    }
    return _ok;
}

function n5ReviveFullHealth(){
    const _ok=n5ReviveSelf();
    try{
        const _pc=n5GetPlayerControllerInstance();
        if(_pc&&!_pc['handle']['isNull']()){
            try{_pc.method('RealiveWithHealth').invoke(100);}catch(_){}
            try{_pc.method('AddPlayerHealth').invoke(999);}catch(_){}
            try{_pc.field('_maxHealth').value=100;}catch(_){}
            try{_pc.field('<healthLost>k__BackingField').value=0;}catch(_){}
            try{_pc.field('<healthHealed>k__BackingField').value=100;}catch(_){}
            try{_pc.field('_isInvincible').value=true;}catch(_){}
        }
    }catch(_e){console.error('[N5 ReviveFullHealth]',_e);}
    try{currentNotification=_ok?'Revived full health':'Revive full health sent';notifactionResetTime=time+2;}catch(_){}
    return true;
}

function n5GetLocalPosition(){
    try{
        const _safe=n5GetSafeSelfPosition();
        if(n5IsGoodPosition(_safe))return _safe;
    }catch(_){}
    const _lp = n5GetLocalPlayer();
    if(!_lp || _lp['handle']['isNull']()) return null;
    return _0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
}

const n5MobIdByName={
    Unidentified:0,Angler:1,AnglerController:1,AnglerMad:2,AnglerMadController:2,Armstrong:3,ArmstrongController:3,ArmstrongMad:4,ArmstrongMadController:4,
    Banshee:5,BansheeController:5,Bomb:6,BombController:6,Bomber:7,BomberController:7,BomberFlashbang:8,BomberFlashbangController:8,BomberMad:9,BomberMadController:9,
    Chicken:10,ChickenController:10,Cyst:11,CystController:11,FakeGorilla:12,FakeGorillaController:12,BigHead:13,BigHeadController:13,RedGreen:14,RedGreenController:14,
    Phantom:15,PhantomController:15,EvilEye:16,EvilEyeController:16,GiantThrower:17,GiantThrowerController:17,RedGreenMad:18,RedGreenMadController:18,
    Spider:19,SpiderController:19,FlyingSwarm:20,FlyingSwarmController:20,NextBot:21,NextBotController:21,Segway:22,SegwayController:22,
    NextBotStatic:23,NextBotStaticController:23,EvilEyePinata:24,EvilEyePinataController:24,EvilEyePinataLarge:25,EvilEyePinataLargeController:25,
    Lanky:26,LankyController:26,Blob:27,BlobController:27,Cutie:28,CutieController:28,SpiderCave:29,SpiderCaveController:29,ForestMob:30,ForestMobController:30,
    Mimic:31,MimicController:31,GraveyardBoss:32,GraveyardBossController:32,GiantController_GraveyardBoss:32,Ringmaster:33,RingmasterController:33,
    Puppet:34,PuppetController:34,PolypMass:35,PolypMassController:35,RobotDog:36,RobotDogController:36,Shadow:37,ShadowController:37,
    Heart:38,HeartController:38,HeartMobController:38,Slimey:39,SlimeyController:39,ShadowBoss:40,ShadowBossController:40,BigShark:41,BigSharkController:41,
    EdenZombie:42,EdenZombieController:42,Skinwalker:43,SkinwalkerController:43,YinWorm:44,YinWormController:44,YangWorm:45,YangWormController:45,
    ArmstrongSpace:46,Smiley:47
};
const n5MobNameById={0:'Unidentified',1:'Angler',2:'AnglerMad',3:'Armstrong',4:'ArmstrongMad',5:'Banshee',6:'Bomb',7:'Bomber',8:'BomberFlashbang',9:'BomberMad',10:'Chicken',11:'Cyst',12:'FakeGorilla',13:'BigHead',14:'RedGreen',15:'Phantom',16:'EvilEye',17:'GiantThrower',18:'RedGreenMad',19:'Spider',20:'FlyingSwarm',21:'NextBot',22:'Segway',23:'NextBotStatic',24:'EvilEyePinata',25:'EvilEyePinataLarge',26:'Lanky',27:'Blob',28:'Cutie',29:'SpiderCave',30:'ForestMob',31:'Mimic',32:'GraveyardBoss',33:'Ringmaster',34:'Puppet',35:'PolypMass',36:'RobotDog',37:'Shadow',38:'Heart',39:'Slimey',40:'ShadowBoss',41:'BigShark',42:'EdenZombie',43:'Skinwalker',44:'YinWorm',45:'YangWorm',46:'ArmstrongSpace',47:'Smiley'};
const n5MobAliases={GiantController:'GiantThrower',GiantGreenController:'GiantThrower',Giant_GreenController:'GiantThrower',GreenGiantController:'GiantThrower',Green_GiantController:'GiantThrower',YanWormController:'YangWorm',YingWormController:'YinWorm',YinYanWormController:'YinWorm',YingYangWormController:'YinWorm',PrototypeSlenderController:'Shadow'};
function n5AnimalCompanyImage(){
    return Il2Cpp['domain']['assembly']('AnimalCompany')['image'];
}
function n5GetMobEnumField(_name){
    try{
        const _mobIdClass=n5AnimalCompanyImage()['class']('AnimalCompany.MobID');
        return _mobIdClass['field'](_name)['value'];
    }catch(_){}
    return null;
}
function n5ResolveMobID(_mobId){
    if(typeof _mobId==='number'){
        const _enumName=n5MobNameById[_mobId|0];
        return _enumName?n5GetMobEnumField(_enumName):null;
    }
    const _name=String(_mobId||'').replace(/^mob_prefab\//,'');
    const _trimmed=_name.replace(/Controller$/,'').replace(/_?Controller$/,'');
    const _candidates=[_name,n5MobAliases[_name],_trimmed,n5MobAliases[_trimmed]].filter(Boolean);
    for(const _candidate of _candidates){
        const _enumVal=n5GetMobEnumField(_candidate);
        if(_enumVal!==null)return _enumVal;
        if(Object.prototype.hasOwnProperty.call(n5MobIdByName,_candidate)){
            const _enumName=n5MobNameById[n5MobIdByName[_candidate]|0];
            const _mapped=_enumName?n5GetMobEnumField(_enumName):null;
            if(_mapped!==null)return _mapped;
        }
    }
    return null;
}
let n5MobValidatorBypassEnabled=false,n5BeforeMobSpawnDelegate=null,n5BeforeMobSpawnDelegateClass=null;
function n5EnableMobValidatorBypass(){
    if(n5MobValidatorBypassEnabled)return;
    try{
        n5AnimalCompanyImage()['class']('AnimalCompany.MobSpawnValidator')['method']('IsMobAllowed',1)['implementation']=()=>true;
        n5MobValidatorBypassEnabled=true;
    }catch(_e){console.error('[N5 MobValidatorBypass]',_e);}
}
function n5GetBeforeMobSpawnDelegate(){
    if(n5BeforeMobSpawnDelegate)return n5BeforeMobSpawnDelegate;
    try{
        n5BeforeMobSpawnDelegateClass=Il2Cpp['domain']['assembly']('Fusion.Runtime')['image']['class']('Fusion.NetworkRunner')['tryNested']('OnBeforeSpawned');
        const _validator=n5AnimalCompanyImage()['class']('AnimalCompany.MobSpawnValidator');
        n5BeforeMobSpawnDelegate=Il2Cpp['delegate'](n5BeforeMobSpawnDelegateClass,(_runner,_networkObject)=>{
            try{
                if(!_networkObject||(_networkObject['handle']&&_networkObject['handle']['isNull']()))return;
                const _networkId=_networkObject['method']('get_Id')['invoke']();
                _validator['method']('AddAllowMob',1)['invoke'](_networkId);
            }catch(_e){console.error('[N5 BeforeMobSpawn]',_e);}
        });
    }catch(_e){console.error('[N5 BeforeMobSpawn delegate]',_e);n5BeforeMobSpawnDelegate=null;}
    return n5BeforeMobSpawnDelegate;
}
try{for(const _n5Mob of ['Bomb','ArmstrongSpace','Smiley'])if(Array.isArray(mobIDs)&&mobIDs.indexOf(_n5Mob)<0)mobIDs.push(_n5Mob);}catch(_){}

function n5SpawnItemAt(_itemId, _pos, _rot){
    try {
        const PrefabGen = _0xa03cc7['class']('AnimalCompany.PrefabGenerator');
        const _sid=String(_itemId||'').replace(/^item_prefab\//,'');
        const _ids=[_sid];
        if(_sid.indexOf('item_')===0)_ids.push(_sid.substring(5));
        _ids.push('item_prefab/'+_sid);
        for(const _id of _ids){
            try{
                PrefabGen['method']('SpawnItemAsync',4)['overload'](
                    'System.String',
                    'UnityEngine.Vector3',
                    'UnityEngine.Quaternion',
                    'Fusion.NetworkObjectSpawnDelegate'
                )['invoke'](Il2Cpp['string'](_id), _pos, _rot || _0x554b79, _0x2f880d);
                return true;
            }catch(_){}
        }
        return false;
    } catch(_e){
        console.error('[N5 SpawnItemAt]', _e);
        return false;
    }
}

function n5SpawnMobAt(_mobId, _pos, _rot){
    try {
        n5EnableMobValidatorBypass();
        const PrefabGen = n5AnimalCompanyImage()['class']('AnimalCompany.PrefabGenerator');
        const _beforeMobSpawn=n5GetBeforeMobSpawnDelegate();
        const _resolved=n5ResolveMobID(_mobId);
        if(_resolved===null){
            const _name=String(_mobId||'').replace(/^mob_prefab\//,'');
            const _fb=_0x5b9456(_name,_pos,_rot||_0x554b79)||_0x5b9456('mob_prefab/'+_name,_pos,_rot||_0x554b79);
            return !!_fb;
        }
        try{
            PrefabGen['method']('SpawnMobAsync',6)['overload'](
                'AnimalCompany.MobID',
                'UnityEngine.Vector3',
                'UnityEngine.Quaternion',
                'Fusion.NetworkRunner.OnBeforeSpawned',
                'Fusion.NetworkObjectSpawnDelegate',
                'System.String'
        )['invoke'](_resolved, _pos, _rot || _0x554b79, _beforeMobSpawn, _0x2f880d, Il2Cpp['string']('mod'));
            return true;
        }catch(_directErr){}
        try{
            PrefabGen['method']('SpawnMob',4)['invoke'](_resolved,_pos,_rot||_0x554b79,_0x2f880d);
            return true;
        }catch(_syncErr){}
        try{
            PrefabGen['method']('SpawnMob',5)['invoke'](_resolved,_pos,_rot||_0x554b79,_0x2f880d,Il2Cpp['string']('mod'));
            return true;
        }catch(_syncNamedErr){}
        try{
            PrefabGen['method']('SpawnMobNearbyAsync',6)['overload'](
                'AnimalCompany.MobID',
                'UnityEngine.Vector3',
                'System.Single',
                'Fusion.NetworkRunner.OnBeforeSpawned',
                'Fusion.NetworkObjectSpawnDelegate',
                'System.String'
            )['invoke'](_resolved, _pos, 8.0, _beforeMobSpawn, _0x2f880d, Il2Cpp['string']('mod'));
            return true;
        }catch(_nearbyErr){}
        PrefabGen['method']('SpawnMobNearbyPlayerAsync',5)['overload'](
            'AnimalCompany.MobID',
            'System.Single',
            'Fusion.NetworkRunner.OnBeforeSpawned',
            'Fusion.NetworkObjectSpawnDelegate',
            'System.String'
        )['invoke'](_resolved, 8.0, _beforeMobSpawn, _0x2f880d, Il2Cpp['string']('mod'));
        return true;
    } catch(_e){
        try{
            const _name=String(_mobId||'').replace(/^mob_prefab\//,'');
            const _fb=_0x5b9456(_name,_pos,_rot||_0x554b79)||_0x5b9456('mob_prefab/'+_name,_pos,_rot||_0x554b79);
            return !!_fb;
        }catch(_e2){
            console.error('[N5 SpawnMobAt]', _e, _e2);
            return false;
        }
    }
}

function n5ClearOrbitFuckery(){
    for(const _obj of n5OrbitFuckeryObjects){
        if(!_obj) continue;
        try {
            const _runner = _obj['method']('get_Runner')['invoke']();
            if(_runner && !_runner['isNull']()) _runner['method']('Despawn')['invoke'](_obj);
        } catch(_e){
            try { _0xc4cf2f(_obj)['method'](_0x476e10['ZKeBc'])['invoke']([0,-99999,0]); } catch(_e2){}
        }
    }
    n5OrbitFuckeryObjects = [];
    n5OrbitFuckeryOrbiters = [];
}

function n5RunPrefabOrbit(_prefabName, _count, _radius, _height){
    try {
        const _center = _0xa03cc7['class']('AnimalCompany.PlayerController')['method']('get_instance')['invoke']()['method']('get_head')['invoke']();
        if(!_center || _center['handle']['isNull']()) return;
        if(n5OrbitFuckeryObjects.length < _count || n5OrbitFuckeryPrefabName !== _prefabName){
            n5ClearOrbitFuckery();
            n5OrbitFuckeryPrefabName = _prefabName;
            n5OrbitFuckeryCount = _count;
            n5OrbitFuckeryRadius = _radius;
            const _centerPos = _center['method']('get_position')['invoke']();
            for(let _i=0; _i<_count; _i++){
                const _angle = Math.PI * 2 / 8 * _i;
                const _offset = _0xe4d316['alloc']();
                _offset['method']('.ctor')['overload']('System.Single','System.Single','System.Single')['invoke'](Math.cos(_angle)*_radius, _height, Math.sin(_angle)*_radius);
                const _spawnPos = _0xe4d316['method']('op_Addition')['invoke'](_centerPos, [_offset['field']('x')['value'], _offset['field']('y')['value'], _offset['field']('z')['value']]);
                const _obj = _0x5b9456(_prefabName, _spawnPos, _0x4088e6['method']('get_identity')['invoke']());
                if(!_obj) continue;
                n5OrbitFuckeryObjects.push(_obj);
                try {
                    const _tf = _obj['method']('get_gameObject')['invoke']()['method']('get_transform')['invoke']();
                    n5OrbitFuckeryOrbiters.push({ transform:_tf, angle:_angle });
                } catch(_e){}
            }
        }
        const _pos = _center['method']('get_position')['invoke']();
        const _dt = _0x5be904['method']('get_deltaTime')['invoke']();
        for(const _orb of n5OrbitFuckeryOrbiters){
            try {
                _orb.angle += 1.5 * _dt;
                const _offset = _0xe4d316['alloc']();
                _offset['method']('.ctor')['overload']('System.Single','System.Single','System.Single')['invoke'](Math.cos(_orb.angle)*_radius, _height, Math.sin(_orb.angle)*_radius);
                const _newPos = _0xe4d316['method']('op_Addition')['invoke'](_pos, [_offset['field']('x')['value'], _offset['field']('y')['value'], _offset['field']('z')['value']]);
                _orb.transform['method']('set_position')['invoke'](_newPos);
            } catch(_e){}
        }
    } catch(_e){ console.error('[N5 PrefabOrbit]', _e); }
}

function n5ClearTowerOrbit(){
    for(const _obj of n5TowerOrbitObjects){
        try{if(_obj)n5DespawnPrefabObj(_obj);}catch(_){}
    }
    n5TowerOrbitObjects=[];
    n5TowerOrbitOrbiters=[];
}

function n5RunSellingTowerOrbit(){
    try{
        const _heights=[-3.3,0.0,3.3],_per=24,_radius=5.6;
        if(n5TowerOrbitObjects.length<(_heights.length*_per)){
            n5ClearTowerOrbit();
            const _center=n5GetSafeSelfPosition()||_0x35ade8.method(_0x476e10['YApVv']).invoke();
            for(const _h of _heights){
                for(let _i=0;_i<_per;_i++){
                    const _angle=(Math.PI*2/_per)*_i;
                    const _pos=[(_center[0]||0)+Math.cos(_angle)*_radius,(_center[1]||0)+_h,(_center[2]||0)+Math.sin(_angle)*_radius];
                    const _obj=_0x5b9456('ItemSellingMachineController',_pos,_0x554b79);
                    if(!_obj)continue;
                    n5TowerOrbitObjects.push(_obj);
                    const _tf=n5GetSpawnedObjectTransform(_obj);
                    if(_tf)n5TowerOrbitOrbiters.push({transform:_tf,angle:_angle,height:_h});
                }
            }
        }
        const _center=n5GetSafeSelfPosition()||_0x35ade8.method(_0x476e10['YApVv']).invoke();
        for(const _orb of n5TowerOrbitOrbiters){
            try{
                _orb.angle+=0.95*(deltaTime||0.016);
                const _pos=[(_center[0]||0)+Math.cos(_orb.angle)*_radius,(_center[1]||0)+_orb.height,(_center[2]||0)+Math.sin(_orb.angle)*_radius];
                _orb.transform.method(_0x476e10['ZKeBc']).invoke(_pos);
            }catch(_){}
        }
    }catch(_e){console.error('[N5 SellingTowerOrbit]',_e);}
}

function n5KickPlayerObject(_player){
    if(!_player || _player['handle']['isNull']()) return false;
    try {
        const _rpc = _0xa03cc7['class']('AnimalCompany.NetSessionRPCs');
        const _inst = _rpc['field']('_instance')['value'];
        const _uid = _player['field']('_userID')['value'];
        _n5OutgoingKick=true;
        try {
            try { if(_inst) _inst['method']('RPC_KickPlayer')['invoke'](_uid); } catch(_e1){}
            try { _rpc['method']('KickPlayer')['invoke'](_uid); } catch(_e2){}
        } finally {
            _n5OutgoingKick=false;
        }
        return true;
    } catch(_e){
        console.error('[N5 KickPlayer]', _e);
        _n5OutgoingKick=false;
        return false;
    }
}










const N5_SOUNDS = [
    {name:'3h6nv4', url:'https://files.catbox.moe/3h6nv4.mp3'},
];

let n5MediaPlayer = null;
let n5SoundVolume = 1.0;
let n5SoundLoop   = false;
let _n5LoadedIdx  = -1;
let _n5TmpPath    = null;


function n5LoadWebSound(index, onDone) {
    const entry = N5_SOUNDS[index];
    if(!entry){ onDone&&onDone(false); return; }
    if(n5SoundLoading){ currentNotification='Already loading...'; notifactionResetTime=time+2; return; }
    n5SoundLoading = true;
    try {
        Java.perform(() => {
            try {
                const ActivityThread = Java.use('android.app.ActivityThread');
                const ctx = ActivityThread.currentApplication().getApplicationContext();
                const tmpPath = ctx.getCacheDir().getAbsolutePath() + '/n5sound_' + index + '.mp3';
                const Thread = Java.use('java.lang.Thread');
                const WorkerCls = Java.registerClass({
                    name: 'n5.SoundLoader' + (Date.now() % 100000),
                    implements: [Java.use('java.lang.Runnable')],
                    methods: { run: function(){
                        try {
                            const conn = Java.cast(
                                Java.use('java.net.URL').$new(entry.url).openConnection(),
                                Java.use('java.net.HttpURLConnection'));
                            conn.setConnectTimeout(10000);
                            conn.setReadTimeout(30000);
                            conn.setRequestMethod('GET');
                            conn.connect();
                            if(conn.getResponseCode() < 200 || conn.getResponseCode() >= 300){
                                conn.disconnect(); n5SoundLoading=false; onDone&&onDone(false); return;
                            }
                            const ins = conn.getInputStream();
                            const buf = Java.array('byte', new Array(8192).fill(0));
                            const fos = Java.use('java.io.FileOutputStream').$new(tmpPath);
                            let n; while((n = ins.read(buf)) !== -1) fos.write(buf, 0, n);
                            fos.flush(); fos.close(); ins.close(); conn.disconnect();
                            console.log('[Sound] Downloaded: ' + tmpPath);
                            _n5TmpPath = tmpPath;
                            try { if(n5MediaPlayer){ n5MediaPlayer.stop(); n5MediaPlayer.release(); n5MediaPlayer=null; } } catch(_){}
                            const mp = Java.use('android.media.MediaPlayer').$new();
                            mp.setDataSource(tmpPath);
                            mp.prepare();
                            mp.setVolume(n5SoundVolume, n5SoundVolume);
                            mp.setLooping(n5SoundLoop);
                            n5MediaPlayer = mp;
                            n5SoundLoading = false;
                            onDone&&onDone(true);
                        } catch(e){ console.error('[Sound] load err:', e); n5SoundLoading=false; onDone&&onDone(false); }
                    }}
                });
                Thread.$new(WorkerCls.$new()).start();
            } catch(e){ console.error('[Sound] Java.perform err:', e); n5SoundLoading=false; onDone&&onDone(false); }
        });
    } catch(e){ console.error('[Sound] Java.perform err:', e); n5SoundLoading=false; onDone&&onDone(false); }
}


function n5PlaySound() {
    if(!n5MediaPlayer){ currentNotification='Load a sound first'; notifactionResetTime=time+2; return; }
    try {
        Java.perform(() => {
            try {
                n5MediaPlayer.seekTo(0);
                n5MediaPlayer.start();
            } catch(e){ console.error('[Sound] play err:', e); }
        });
    } catch(e){}
}

function n5StopSound() {
    if(!n5MediaPlayer) return;
    try { Java.perform(() => { try { n5MediaPlayer.stop(); n5MediaPlayer.prepare(); } catch(_){} }); } catch(e){}
}


function n5SetVoiceInject(en) {
    if(!en){
        currentNotification='Voice inject off'; notifactionResetTime=time+2;

        try { Il2Cpp.perform(()=>{ _n5GetRecorder(rec=>{ if(rec){ try{rec.method('set_SourceType').invoke(0);}catch(_){} } }); }); } catch(_){}
        return;
    }
    if(!_n5TmpPath){ currentNotification='Load a sound first!'; notifactionResetTime=time+3; return; }
    currentNotification='Decoding for voice...'; notifactionResetTime=time+10;
    try {
        Java.perform(() => {
            const Thread = Java.use('java.lang.Thread');
            const WorkerCls = Java.registerClass({
                name: 'n5.VoiceDecodeWorker' + (Date.now()%100000),
                implements: [Java.use('java.lang.Runnable')],
                methods: { run: function(){
                    try {
                        const ME = Java.use('android.media.MediaExtractor');
                        const MC = Java.use('android.media.MediaCodec');
                        const BI = Java.use('android.media.MediaCodec$BufferInfo');
                        const me = ME.$new();
                        me.setDataSource(_n5TmpPath);
                        let trackIdx=-1, sampleRate=44100, channels=2, mime='audio/mpeg';
                        for(let i=0;i<me.getTrackCount();i++){
                            const fmt=me.getTrackFormat(i);
                            const m=fmt.getString('mime');
                            if(m&&m.startsWith('audio/')){ trackIdx=i; mime=m;
                                try{sampleRate=fmt.getInteger('sample-rate');}catch(_){}
                                try{channels=fmt.getInteger('channel-count');}catch(_){}
                                break; }
                        }
                        if(trackIdx<0){ console.error('[Voice] No audio track'); return; }
                        me.selectTrack(trackIdx);
                        const fmt=me.getTrackFormat(trackIdx);
                        const mc=MC.createDecoderByType(mime);
                        mc.configure(fmt,null,null,0); mc.start();
                        const info=BI.$new();
                        const pcm=[]; let eos=false, safety=0;
                        while(!eos&&safety<100000){
                            safety++;
                            const ii=mc.dequeueInputBuffer(5000);
                            if(ii>=0){ const ib=mc.getInputBuffer(ii); ib.clear(); const sz=me.readSampleData(ib,0);
                                if(sz<0) mc.queueInputBuffer(ii,0,0,0,4);
                                else{ mc.queueInputBuffer(ii,0,sz,me.getSampleTime(),0); me.advance(); } }
                            const oi=mc.dequeueOutputBuffer(info,5000);
                            if(oi>=0){ const fl=info.flags.value,off=info.offset.value,sz=info.size.value;
                                if((fl&4)!==0) eos=true;
                                else if(sz>0){ const ob=mc.getOutputBuffer(oi); ob.position(off); ob.limit(off+sz);
                                    const bs=Java.array('byte',new Array(sz).fill(0)); ob.get(bs);
                                    for(let b=0;b<bs.length;b++) pcm.push(bs[b]); }
                                mc.releaseOutputBuffer(oi,false); }
                        }
                        mc.stop(); mc.release(); me.release();
                        const numSamples=Math.floor(pcm.length/2);
                        if(numSamples===0){ console.error('[Voice] 0 samples'); return; }
                        const floats=new Float32Array(numSamples);
                        for(let i=0;i<numSamples;i++){ const lo=pcm[i*2]&0xFF,hi=pcm[i*2+1]; floats[i]=((hi<<8)|lo)/32768.0; }
                        console.log('[Voice] Decoded '+numSamples+' samples');
                        Il2Cpp.perform(()=>{
                            try {
                                const acCls=Il2Cpp.domain.assembly('UnityEngine.AudioModule').image.class('UnityEngine.AudioClip');
                                const clip=acCls.method('Create',5).invoke(Il2Cpp.string('n5voice'),Math.floor(numSamples/channels),channels,sampleRate,false);
                                if(!clip||clip.isNull()){ console.error('[Voice] clip null'); return; }
                                const arr=Il2Cpp.array(Il2Cpp.corlib.class('System.Single'),numSamples);
                                arr.elements.writeByteArray(new Uint8Array(floats.buffer));
                                clip.method('SetData',2).invoke(arr,0);

                                _n5GetRecorder(rec=>{
                                    if(!rec){ currentNotification=' Photon Recorder not found'; notifactionResetTime=time+3; return; }
                                    console.log('[Voice] Injecting into recorder...');


                                    let srcSet=false;
                                    for(const v of [1,2,0]){
                                        try{ rec.method('set_SourceType').invoke(v); console.log('[Voice] set_SourceType('+v+') OK'); srcSet=true; break; }
                                        catch(e){ console.log('[Voice] set_SourceType('+v+') failed: '+e); }
                                    }
                                    try{ rec.method('set_AudioClip').invoke(clip); console.log('[Voice] set_AudioClip OK'); }
                                    catch(e){ console.error('[Voice] set_AudioClip failed: '+e); }
                                    try{ rec.method('set_Loop').invoke(true); console.log('[Voice] set_Loop OK'); }
                                    catch(e){ console.log('[Voice] set_Loop failed: '+e); }
                                    try{ rec.method('set_TransmitEnabled').invoke(true); console.log('[Voice] set_TransmitEnabled OK'); }
                                    catch(e){ console.log('[Voice] set_TransmitEnabled failed: '+e); }

                                    try{ rec.method('RestartRecording').invoke(); console.log('[Voice] RestartRecording OK'); }
                                    catch(_){}
                                    currentNotification=' Voice inject ON'; notifactionResetTime=time+3;
                                });
                            } catch(e2){ console.error('[Voice] clip err:', e2); }
                        });
                    } catch(e){ console.error('[Voice] decode err:', e); }
                }}
            });
            Thread.$new(WorkerCls.$new()).start();
        });
    } catch(e){ console.error('[Voice] Java.perform err:', e); }
}


let _n5RecorderClassCache = null;
function _n5GetRecorder(cb) {
    let recCls = _n5RecorderClassCache;
    if(!recCls){
        const namesToTry = ['Photon.Voice.Unity'];
        for(const asm of Il2Cpp.domain.assemblies){
            for(const n of namesToTry){
                try{ recCls=asm.image.class(n); if(recCls){ break; } }catch(_){}
            }
            if(recCls) break;
        }
        if(!recCls){
            console.error('[Voice] Recorder class not found in any assembly');
            cb(null); return;
        }
        _n5RecorderClassCache = recCls;
        console.log('[Voice] Recorder class found and cached');
    }
    const objCls=Il2Cpp.domain.assembly('UnityEngine.CoreModule').image.class('UnityEngine.Object');
    const inst=objCls.method('FindObjectOfType',1).inflate(recCls).invoke(false);
    if(!inst||inst.isNull()){
        console.error('[Voice] Recorder instance not found in scene');
        cb(null); return;
    }
    cb(inst);
}

function n5PollUWR() {}


function _0x291a(_0x40366e,_0x4ae335) {
    _0x40366e=_0x40366e-197;
    const _0x419f2e=_0x592c();
    let _0x1ba3a9=_0x419f2e[_0x40366e];
    return _0x1ba3a9;
}
const ejectDupeValues=[0x16f*0x8+-0xb2*0x10+-0x57,0x2655+0x1047+-0x369a,0x214f+-0x25d9*0x1+-0x48f*-0x1,0xd*0x60+-0x17bb+0x2b3*0x7,-0x18d*-0x1+0x3fd*-0x7+0x1a72,0x502*-0x2+0x1c12+0x70*-0x29,-0x153f+0x1*-0x1b6e+-0x30df*-0x1,-0x18d*-0x14+0x2437+0xf1*-0x47];
let _n5WlPruneTimer=0;
let scaleVal=-0x1392+0xfb3+-0x3df*-0x1,jellyVal=0,cachedItems=null,backpackDupe=![],lagGunDelay=-0x25e8*-0x1+-0x11*0x9+-0x254f,mobGunDelay=-0x5fb+-0xa7d+0x1078,idGunDelay=0x1e74+0x201d*0x1+0x13*-0x34b,whitelist=[],netplrs=[],whitelistDisintegrateDelays= {
},
whitelistGunRe=![],sellingmachineSpawns=[],presentSpawns=[],devModeHookSet=![],GunPointer=null,GunLine=null,gunColor=[0.0,1.0,0.35,0.9],soundFileIndex=0x2167*-0x1+0x1*0x5bf+0x1*0x1ba8,previousSoundKey=![];
let orbiters = [];
let orbitprefabs = [];
function _0x592c() {
    const _0x1fd10a=['lla_clover','stol','e.Rigidbod','Exit\x20Movem','uZRqq','ccrlx','RefreshIte','BansheeCon','item_rpg_a','Exit\x20Other','any.SFXMan','to\x20cycle\x20r','l\x20items\x20in','tes\x20player','icalSmall','HNwtw','GTdJ_SwTmd','BJqkN','SrfSb','[LateUpdat','Coins','FlyingSwar','Invisible\x20','item_shrin','Research_Z','ack_with_f','ransform','_instance','Infinite\x20a','gun\x20pointe','HtMuuInFFI','wpbwJ','item_upsid','Mob:\x20','zBSLzWqciE','th\x20random\x20','ACbPx','_bone','startsWith','mdRTM','ysTrVSBkzT','ISFoi','_xt_zaGofT','tQrURUVKsT','GUULy','eringModul','bkUbcuphCA','get_LocalP','Spawns\x20sel','IwzyQLOTyX','se_grenade','ClXpUemcUr','any.NetPla','\x20(dont\x20ski','item_umbre','ServerRoom','zuDvN','IZRQv','HordeMobLo','vFJQf','yYEnS','OnBeforeSp','_fingerVie','\x20Arms','neView','MmpKN','ves_Burst','edcaL','set_enable','ZsFdS','EogvXHzAJy','ng\x20machine','hed_Broken','ton','Universal\x20','GZTQqAUKph','bpvPzxpdry','ojectile','hPTEO','oli','aternion','mods','o\x20pointer','tor','vDAaf','g\x20your\x20sta','vUcNQ','pawn\x20error','_cameraTra','wwKEr','active_bro','rQVgV','amQmJ','light_mega','rated\x20near','Rainbow\x20He','wOtby','ZkJGRsVNTG','NextBotCon','JvTJW','32olsEDH','item_urani','uLWZU','isGeneric','EUfAf','AWKOUQQPVq','parameterC','flat','\x20right\x20han','OPe_ldKekY','Other\x20play','dJpMD','eGun','item_rpg','orHSV','e_meat','aJRYRrzVHE','eLdQE','QQOa_vUelD','Spawns\x20a\x20S','ors','GiantContr','bfioC','yqfMkAGPij','zITYt','Quaternion','ent','item_hh_ke','TextMinSiz','EjectItem','TrWEY','FJpeU','op_Additio','e.UI.Graph','item_cardb','e.Physics','g_pan','\x20Held\x20Item','GKqqHnriYO','STAOa','Oculus.Pla','loadGun','aLocomotio','ack_large_','invoke','Destroy','item_nut','Spawns\x20mob','e.XR.Commo','EvilEyeCon','ZBNJL','qswjV','hod','RfFMX','item_paint','CKKZE','bEquP','any.Grabba','OPMue','<playerSca','0|2|5|6|1|','ozQVhggSGi','rUQQNmEgNV','item_turke','t\x20grip\x20to\x20','spawnNetwo','CjWXd','neControll','assembly','eport','BVXBQSsxCU','_Fart','FlareGun','workRunner','xFdfl','LjsNU','yDXGz','erTerminal','e.CoreModu','item_ogre_','NLHJH','AddCompone','d\x20Duper\x20er','Fusion.Rea','ZKMIoGYxQp','_chunk','uwChI','get_active','NetLootSpa','MtVJr','any.ArenaG','u\x20back\x20to\x20','mwXyj','rAeaq','fCVNbcmCRS','Spawn\x20Mob\x20','vCPZz','yMBQI','tXRNode','RAMActivat','MidAirJump','IOwcG','HOdGC','ansform','ab\x20at\x20righ','item_fryin','A_pHBBIsNR','any.Elevat','jyUWX','otzMiUDyZc','2|4|3|1|0|','jcLYt','set_text','any.Gorill','exports','YApVv','get_hasAmm','Hold\x20grip\x20','e.UIModule','UPDrY','kWNSW','olor=grey>','ry.','awned','eeHit_AoE','nAE_RgVaqW','set_useWor','wHSFNzIbMj','FIcve','Slerp','h_SmallGun','bleObject','urn','yHOvg','returned\x20n','oMfjL','get_isLoad','gun\x20mods\x20c','hkeJGH_i_x','random','tion','king_brocc','dRevolver','sKSos','FcmTD','eam','osition','DzTBa','LVBav','used\x20with\x20','WATGmhPIWa','e.Renderer','ject','wGoFA','gIHTF','ZfVVA','Unlocks\x20al','cGJHPEuVKM','\x20the\x20room.','item_clapp','Nuts','BoGfl','all\x20player','t\x20player\x20t','qCzPa','category.','item_arrow','wYiiV','item_zipli','dSZQx','XNNcjNJoYY','XpAfDeZxNN',']</color>\x20','pRxna','nsform','hoever\x20you','XygRT','Lets\x20you\x20e','item_compa','\x20at\x20your\x20r','Rainbow\x20Al','Feathers','LMtKj','qrjbQTRQyM','@NextPage','item_clust','gjAjh','FfZRg','CIeoQ','NIntI','JBkaJ','SetActive','qTups','ect','_DRUgexbby','fulad','[ENABLE]\x20','_pistol','hlFOObCxLN','d\x20Duper','Spawn\x20poop','item_tele_','CHfNs','ategory.','Portal_Tel','lDmfy','\x20found:\x20','LateUpdate','ipline','any.FlareG','rror:\x20','HDCTx','Returns\x20to','hlHeYhXnkd','hPIXXMsDyI','Longererer','mmo_egg','injack_sma','troller','Electricit','czDGi','_heart','set_alignm','Exit\x20Setti','YQAmG','uMsSo','ne_gun','map','item_baseb','onCount','mMiDx','VXfzs','\x20error:','GmfnB','ot_weapons','item_egg','bPDqw','CydZZ','hpWLbUxjQj','large','rducky','hkSyN','Duplicator','EsIlc','ot_medium','AnglerCont','6|5','KsPWj','nothing\x20ye','RCynW','item_radio','un_ammo','QsNAd','mqTvgMdHJe','icRaycaste','YWcQGHBlEP','[MENU]\x20New','item_cola_','Vehicle_Bu','FSoXy','lable','vUuIy','YYnGhrpdPZ','heal','any.Networ','_config','ite','ime','Rapid\x20fire','AZFbczzoNt','NcyfD','GOEAp','mlCnr','NextBotSta','000ff>MENU','efab\x20at\x20yo','oUVci','ynluQ','inter\x20with','ld\x20grip\x20+\x20','IzTqPNEoLQ','light','vMzVyKwlJZ','gRTnAajVHX','IjPBK','fiBOoHXOjz','CvRiU','miGTvEHybN','Eoiim_AZKx','set_font','KAggX','oHJQkjtxvk','PrefabTabl','age','tinky','nnOEy','erer','nvsZB','y>[</color','cAbGj','GetEnumera','ical','item_shotg','fGcqg','BGTMU','rst','iplineAtta','perform','sition.','XQYIQ','oli_shrink','XdPuvHsNIL','item_table','85cLWCHZ','_gun','utton','my\x20very\x20sk','set','hVgCaXWvpQ','ykhMfBAanX','item_shred','RVszv','p\x20to\x20go\x20ba','DbPzj','MZfFV','BpGwN','ft\x20hand\x20wi','IJDhe','XtnBN','jbuPOjmDxN','mscorlib','item_plung','get_Count','WwiDvosNkb','Misc','JGXBn','substring','xFlUJaARRa','IhdCri_dBn','op\x20prefab\x20','SNsOx','lhGVz','error','ticControl','e.Font','uff','wJVCE','idded\x20menu','Spawned:\x20','qoaFnIv_lz','ion_Headsh','hot_sword','get_materi','Hold\x20trigg','lYkMe','RhZfj','item_brocc','RPC_UseJet','Disintegra','WaitForRes','tkgxf','Spawn\x20Pref','ebDhR','item_goldb','ot_big','EvFrr','DtSku','xppKc','QQcZx','MoveNext','lver','UKxFn','SchWF','op_Subtrac','xXVXljANVI','oHAfR','od\x20not\x20fou','ureWX','XNrbp','OnTriggerE','oBcVc','OuNfV','t\x20hand.','atZbg','b\x20Stuff','ieSHm','JDQif','VbxNI','RqRBv','GwoVFsCHAP','FuelExplos','ld\x20Item','rnFwP','FoOfk','main','_tYgdxgprv','yHEdd','WHFrfWMWIc','e.GameObje','syFVWSUrdI','ispenser','_banana','Hand\x20spawn','um_chunk_l','urchase1RP','TP\x20ALL\x20Gun','FloatingSm','kaWqJ','uWKdC','pjqCopNUKF','bow_heart','item_ballo','frUDt','eeHit_Crit','owkuk','any.Revolv','UnityEngin','item_banan','any','clover','TQNch','ager','GwINctDoso','oUMhG','aHdZiwOCZv','NgUXi','ck.','item_snowb','tach','EKExN','ingField','Lmwax','h_GoldRevo','QTXqM','jzBRMtEq_L','ncoyv','set_name','JTaDa','item_big_c','lloon','b:\x20','vQatN','@Disconnec','\x20item.','item_glows','><color=#8','e.Quaterni','primary2DA','list\x20mods','VrZnq','vjzRb','t_paper','cmsiw','ed:\x20','item_flare','get_itemID','isbRH','item_scann','int','alloc','item_crack','aded','bind','Vector3','Whitelist\x20','an_case','zFoqP','nkPOg','t_paper_me','HOowifuhVZ','ValueType','Crgyy','_01','Controller','Item\x20mods','TBCJz','ldSpace','aGSAx','Find','I_hWtrioFh','headCollid','Impact_Fla','sh\x20(4)','PmWsx','set_colorS','unts.','SsSSPWkjTE','NNYTUWoqoH','ZPxAz','ZpsQccDQIT','jMFpp','UTTsg','ccoli','ld\x20B).','svKvcEfHaV','StickyAnch','WxggD','FqfXT','WwPaK','e.Resource','readU8','workObject','ine','AnimalComp','hbangContr','get_Curren','isLoaded','er_grenade','lNVQOucxMQ','gOCqt','yUnRFgzbi_','bYtZSvHbel','on_heart','wyifY','Long\x20Arms','item_there','Stinkies\x20w','zZSghTNUYA','cLyfd','_devModeOn','item_lance','Pillar_Arc','item_flash','ms\x20in\x20your','rashChuteV','AajWa','LongAisleC','kDnKS','get_transf','Mob\x20hand\x20s','Shoots\x20sel','ver_gold','SegwayCont','NMIrbICjdQ','get_Item','e\x20prefab\x20t','item_ore_g','h_FlareGun','tform','all\x20items.','kLGRU','any.ItemVe','JdRnB','TryGetFeat','orm','item_zombi','hToYRrhhak','e.Material','DirBm','cFdMf','e.Object','IthlcwwLZn','\x20any\x20item\x20','GetCompone','Longer\x20Arm','SpawnItem','ull:\x20','ataControl','CDBrt','uZcgq','ory.','e\x20amount:\x20','wSMXB','e\x20item\x20ID.','RInAn','uXViU','item_dispo','item\x20mods\x20','yYsGy','ld\x20grip,\x20p','Stash\x20Dupe','qWRUu','jdGtWGyIId','d\x20Item','ab\x20where\x20y','any.Ziplin','bvsHUUiAt_','set_fontSt','CHtbw','crease\x20hue','set_startW','UEKyQ','rjuEq','QoLobDClDI','Splash_Sma','nrqXT','te\x20Gun','nHAklgjVGZ','_lightbulb','g_hammer','lSYZL','sYyWr','RAwWF','VAjOx','rms','odifier','ny_ration_','old_s','_shotgun','dZwFeDiq_M','OjNwK','lyyzS','isTogglabl','bfnsC','uration\x20He','GroundHit','XvLBG','RKJdK','rkPrefab\x20e','item_apple','string','d_viking_4','h_DragonPi','sYrWh','LzNzX','parameters','oli_grenad','shes\x20error','e.Collider','hbOcyjdQqd','llingMachi','\x20of\x20held\x20i','\x20to\x20gun\x20po','chocolateb','hLOTh','QYFjq','PEQIp','PxRjI','AnNTs','ephcDjBzTT','GIxQV','avlli','lla','isArray','HH_LockedD','ygESk','ijSuS','Hold\x20A\x20to\x20','ntroller','o\x20spawn.\x20H','SXxsO','r\x20hand\x20des','uMIkA','RkDyB','Teleportat','identityQu','longer\x20arm','qNTul','set_endCol','OytTV','secondaryB','QcdsO','item_anti_','item_keyca','V_ScUCwdpq','xZvmMCFBBI','ceil','primaryBut','dvkTr','BvlLf','item_landm','QU_jdcv_Cd','BHGRV','get_Descri','_grenade','Key','buwGY','any.Player','ZLKxUZqNXH','triggerBut','oNfLg','LL\x20VFX\x20(ho','item_dynam','rZazEijkHg','set_loaded','item_whoop','qvpcbr_KLg','YqqIM','FdGtT','set_localP','sh\x20(2)','ASbmz','ZcrPL','PVIvxIOwHg','y_cheese','TxPkM','item_ruby','item_rpg_s','orManager','rTNDm','Exit\x20Misc','Gives\x20you\x20','gPbOlxktgY','dqoMf','item_pipe','item_pelic','DshB_ZYKjb','item_polic','sable_came','tgun','hXWTf','e_baton','Custom\x20Sca','fab','any.RPG','op_Multipl','LoUSE','WuvDS','xPfzf','Spawns\x20a\x20D','ANEeJ','get_localS','y_dynamite','call','sh\x20(1)','CCqaC','o\x20gun\x20poin','Exit\x20Gun\x20m','qYaouBrhAv','\x20all\x20VFX','GsekQ','ell','UOrln','mNBvp','rop','kfEGstMnME','Devices','VpJwS','gun','eft','GPtnG','ycMCUIuWYU','item_rpg_e','ter\x20with\x20A','item:','NqJfX','any.Partic','ted\x20neares','wnGroup','get_gameOb','log','overloads','ger','kJXXM','oCtpfBkJiu','sform','jUxxw','r\x20mods','1|6|4|5|2|','eadBody_Po','OBaD_WoCVQ','ver_ammo','MrmgQ','tem.','get_isHamm','tIVui','bjJZnlOUpD','SGQmV','buttonText','!!\x20v','sUpKbJpRJe','artBalloon','mbox_moblo','rightHandT','item_pogos','MeshPro','player\x20mod','mXMjO','eNOCkRBPOF','jREgu','OLUcg','hands','type','BomberCont','get_name','</color><c','GreenBlink','times\x20usin','Cycles\x20thr','set_displa','zENly','BAzzc','eSrc','EDrfY','qQmYx','cher\x20error','tALqcCccli','saSSG','set_colorH','ureValue','item_vikin','item_quive','iwKYOzMiIN','a_YbWBvtSb','HZCjb','qltPS','ZqQpU','fmjXF','dQoScrzRzk','ZOiTU','eGvDq','d_viking_3','Longerer\x20A','qJPdV','r\x20hands\x20po','opper_m','pack','gxDwgDGKgX','e.UI.Canva','erCocked','e.Time','dYxYI','Mob\x20spawn\x20','HandleTrig','ICSPz','ny_ration','get_IsMine','CL_xDXxBTk','vbaeB','domain','bteOE','cjSlUMxIX_','value','KXvoZIvxel','r_heart','DcOJiOinGj','$config','KsNte','s\x20to\x20your\x20','sLQwt','ers\x20to\x20fly','XkLGr','mBXDr','vfsAm','oneVector','edown_loot','item_ore_h','SpiderCont','base','ack_white','HAqgE','item_boomb','item_prefa','ack_small_','Toggleable','bubEt','Impact_Big','increase,\x20','any.StashM','item_toile','10IVBVhT','playerIDTo','any.ItemSe','ack_black','ntInParent','basketball','AddForce','ConfettiBu','SQDToIllnn','rOelS','ough\x20prese','adControll','dSktnoqsJV','cULYi','TeleGrenad','ryYfpAIQdF','ionSparks','ZrusN','oNlfk','get_localP','MAX_SAFE_I','fields','ovoclvSxgG','Gvuap','cucnJ','wuKLiRbdQo','ngs','tulfmNDzoU','fXUix','Prefab\x20Gun','\x20Other\x20Pla','eleporter','get_loaded','amFqjvJPyL','urchase10R','odule','oDoVfntklI','HordeMobCo','item_cross','Change\x20Ite','uPcrt','NGveq','ct\x20Dupe\x20Am','CfiJb','Xo_WLcnXYr','CLgNC','CKuTn','HaQtP','OHOaHiGmhv','yItem_Spla','ion_1','ONmEw','nvWMXDPdpL','mob_prefab','yle','\x20eject\x20dup','BomberMadC','grip\x20to\x20de','RPGRocket','xe_cube','get_runner','mmo_spear','le\x20of\x20held','SCgpOgkFuR','SpaceshipT','itbOh','ite_cube','ion_2','item_large','e.BoxColli','Item\x20spawn','ilBreak','btQorhwVua','izVoi','gerUse','old_l','SDpKB','Spawn','get','LLhUbOtwlY','iyj_cSOXlN','set_startC','AnglerMadC','FsYCF','UwpQl','WxNkX','jDEWdnXpqI','ScaffoldTr','ZxRfO','YeICc','zCgFjfxPmG','e.PhysicsM','Impact_Mel','egUoS','a_bat','sfDjj','BsHtpKGsqT','COZrPUWlCN','KaeSB','znBSL','Ldety','eVice','Balloon','InflatedHe','um_chunk_m','Splash_Big','Random\x20Han','isNull','PijQq','FPkLf','set_sizeDe','held\x20in\x20le','VpQAP','Custom\x20sat','uzhlw','get_rotati','rCgZK','Lerp','Turns\x20you\x20','ZqFAL','toolTip','nUsages','lvzqRptUKS','e.RectTran','kySgG','pcxdQ','uipzP','item_picka','ox_neon','ilver_s','Field','UEILM','FJAPkZtaPF','SQMee','NSFer','any.Prefab','4|0|3|1|5|','plashes\x20pr','UAvks','ack_pink','jEocR','roller','item_pinat','TBMeeqhQqa','item_pumpk','sh\x20(5)','UhsCU','nlhSi','IokHqPSCbW','go\x20down','ZEINj','DespawnIfN','sDZcS','ot_small','Euler','opper_s','ecessary','pegZK','nsMcs','Spawn\x20retu','movement\x20m','lator','Infinite\x20A','TCFCh','LrZpEZdLBN','runner\x20nul','NetSpectat','ption','config\x20(Ho','UOInc','\x20main\x20menu','nDCMw','koqqs','d_bones','gMachineCo','le>k__Back','lForceVelo','ip\x20+\x20B).','hLWKIWelVF','temKiller','RPC_SetCol','h_ViperSho','u_hwlhLQFY','pmblJ','tton.','ajDTO','nORQm','4|3','undle','ject\x20more\x20','yZKGS','hasvalue','ight\x20hand\x20','item_timeb','fJzdg','Coins_Vert','e.Canvas','ygcbw','icalLarge','sdfbr','item_mug','toString','iWOif','set_localS','item_jetpa','get__curre','jSKhc','PoVUL','FklDlKFSuc','CreateZStr','ian_drum','item_troph','Piovm','NmKJA','\x20Spawned\x20','JNYOP','aDTEz','mMjpDPBopQ','get_view','zrvhyqSZOV','forEach','KyBCHwjfSy','BomberFlas','XFOXBqhgVz','Impact_Sno','ndex:\x20','Fusion.Net','ggy','sOSgt','wilight','HBjxx','beLbR','qbymt','RPC_TagAsS','zXXqP','wtDgq','Player_Tou','mXFeC','Mode','qeUIz','BaLveM_VvJ','ysugx','IJdAK','_itemAncho','sEmwP','SetPositio','1.0.0','bow','shNPV','d_viking_2','RPGRocketS','qIYaR','System.Nul','at\x20your\x20po','item_hawai','cIgmb','mUojT','UI/Default','MeatExplos','iew','JrZXs','cPixelsPer','\x20+\x20B).','vdpQ_pLfyl','e.XR.Input','min','g_hammer_t','UYimSJxubp','itVwD','fMNiJgKilB','vGJLd','mmo','e\x20mob\x20to\x20s','RaycastAll','wEXdobhpzg','RedGreenMa','eline/Unli','Rocket\x20Lau','tdeSU','yCdEu','CDJgn','pdSNt','dSPlMlkzUe','achine.Sta','nYihKtykBk','ms\x20where\x20y','vFQqx','7|0|3','oller','olOElzYvPO','GTnCs','class','dMonsterKi','rKCqBdPLqk','neAttachDe','3|4|2|1|0','rbtsG','in_pie','e.UI.Text','ThunderCon','ods','GvlcC','ysFgC','CiTel','MomBoss_Na','mControlle','nTwOU','mnMDs','1|0|2|3|4','CvvKF','qtNkl','item_crowb','ive','SuupE','Opens\x20sett','XnAck','uKaRt','Gun','gunPointer','old_m','b\x20error:\x20','grip\x20to\x20go','uQvjr','Arial.ttf','xJODdGHheC','TdDEc','er_dispens','426192yNFtYN','onNetworki','item_arena','GywiG','findExport','leManager','wdbsQ','sh\x20(0)','@GlobalRet','Body_Poop','formSettin','tZREq','Exit\x20Playe','kManager','item_sciss','dlYvp','iBVau','RwyBa','XTWeaGDqCD','get_ammoLo','bject','sh.','n\x20\x27','nTtyY','FloatingPl','qvRsA','RPC_Player','ount','bTbZVOExln','all_bat','wning\x20cate','Exit\x20Item\x20','yers.','Spoof\x20ur\x20n','OQyyF','jPXUq','op_Divisio','enade','enableMeth','Change\x20Mob','YjIvRdaYJJ','DdyGO','EKgxZrubnb','get_positi','OQjDm','gOGux','Opens\x20the\x20','4|0|3|2|1','svJNs','RuinTower_','oid','wdgEyO_wnB','GdlZuDTNQp','EOXvpahofq','e.TextRend','zFjJA','fWdEN','all','xisClick','Spawn\x20Poop','PhantomCon','uexuDtkfdO','leftHandTr','t\x20dupe\x20amo','field','NlEpkPWGiP','nNHgt','ZLaAPprnys','item_shiel','yhReC','nter','Fusion.Run','tNkhl','\x20right\x20gri','item_tripw','\x20grip,\x20pul','wtUSUdaHkC','y_leg','item_impul','AXkgbcQxal','RPC_PlayVF','FPIGs','qwAqQ','spawn\x20meth','xmgGA','item_hooks','ApQeU','Spawning\x20c','C_XPtGJvRT','ZcqGduYlCE','iIMgaSFnmi','AutoDestro','Unlqj','get_forwar','Generator','Player\x20mod','DqBSp','Fdboq','Gun\x20mods','SpawnableZ','DVnqu','MazeManage','4|0|2|1|5|','old\x20right\x20','lashlight','bbyHandler','Cisel','JhRIq','ncher','GNXcvOApUl','ipaJN','stYEa','ChickenCon','vmyoEMyOAy','dHctoJwaWW','ack_green','enabled','JrvAG','uTbxE','ItemSellin','item_ore_c','nQzkQuL_ca','LDdpr','m\x20ID','PJAbCKzlDs','item_rubbe','nmoBZ','sh\x20(3)','BGmZg','Popcorn','mbox_base','pMOpX','WTlRF','item_rpg_c','GBtXF','OKHYz','Unit','Zzuyo','rzWxrKNIbB','ainbow\x20on\x20','ataLargeCo','kHandy','WvbgP','AddExterna','item_backp','get_instan','oxManager','ntRunner','BZCHiNQbwu','os_KcuLfmk','XJGsg','XtUBy','shMachineT','JUUvG','\x20Disinteg','SpawnPrefa','ChristmasB','YWuFU','l\x20trigger)','grenade','VHWzp','ire_explos','PreviousPa','VRaOu','wIoQl','jIcjhCenpW','dControlle','EICZf','set_shader','crease\x20sca','kydgN','inflate','e.XRModule','image','item_box_f','LoSCC','ings.','enhsW','e.Componen','gVTYPXdShv','BxIhz','layer','opper_l','28546GANcvY','RPGRocketE','Stun','qSgEN','HpeJd','ZyrgntjulE','ule','ray','yqDHf','isPrimitiv','eeHit','icgLAGdlgh','Ixelf','olor','State','\x20Players','wYrAP','ZKeBc','set_endWid','DCPcY','e.Vector3','EPqKB','Self','YEtTY','hSKsleovlZ','random\x20All','GBQHN','isValueTyp','RPC_AddFor','tFit','ame\x20to\x20hi','LeaderBoar','MdbSA','item_paper','RPC_Telepo','View','_sources','ion','ofEOijrnuL','set_rotati','pawn.\x20Hold','WHQTd','Rapid\x20Fire','HMLmM','Prefab\x20not','KQBKfRewdS','item_trees','LBcxbXe_Vb','WTTxg','XmSpt','bOeJEOyxoq','Teleports\x20','awn\x20error:','any.Jetpac','bodyCollid','SPUZO','Changes\x20th','GzjoEkiksl','yqzdi','YoDUM','ueDiE','QIAXF','Distance','Exit\x20Prefa','module','mAIPj','uyrgn','CrateBreak','item_grena','oor','jhmHU','beNCO','d\x20(hold\x20gr','System.Obj','EVAzO','NTEGER','Spawn\x20Spla','urchase5RP','rned\x20null:','ryNLRlkR_P','DUbXlQpEvZ','d_police','ZUTqE','omb','gory.','item_stink','lkoZK','ou\x20aim\x20(ho','MPZmC','zVPHi','idth','WDhXx','EvilEyePin','ack','Research_P','content','iYafP','zeroVector','pDSKFZLmWf','xAXPE','Spawned\x20mo','dmXgr','kdemC','test\x20categ','Prefab:\x20','get__ammoL','Spawn\x20Item','item_revol','GetDeviceA','NeMHI','ZBqmm','DYYOX','ROVVx','avtYB','XBDpI','LbcGm','trigger\x20bu','ontroller','nCOmN','item_rope','set_scaleM','CreatePrim','GrvDC','ur\x20positio','Spawns\x20ite','gripButton','bLACt','RedGreenCo','<Instance>','Render\x20Pip','ilver_m','slice','rEFtT','ing\x20mods','wnmyw','jfopoHsUqR','chDetach','pUqkT','wFpuT','item_stapl','QLGvF','CystContro','KWbslDwLTT','XOVnG','vkWwE','VIJib','error:\x20','jAvkk','qfjXb','DmuFQ','set_isTrig','s\x20category','invisible.','cale','d_viking_1','r).','Unity.Text','75292aDgGTu','_armbones','bdQaQ','yItem_Dead','xfcpq','urchaseRPB','bleItem','zUTTG','set_positi','floor','gtCGXbYMQh','mJLCUsRiku','BHtWjOdDdk','UGkgO','Resource','handle','\x20the\x20vendi','h_Shotgun','NetPlayer','cRLnB','plLGAEiVmD','VSvlDJyHZp','Explosion_','set_fontSi','GuONFYeCm_','e.Shader','item_crate','set_render','toLowerCas','Stinky\x20Gun','jwqEb','wball','BXyhI','nDBEmNKlZj','injack','ler','FBxzu','vNyql','qUqHy','Mob\x20gun\x20sp','PVAUF','_qdpU_AKUm','quITzbnLXr','item_nut_d','mWTHQ','get_time','nvcfi','Spawn\x20fail','includes','SBWkx','ods\x20catego','te\x20gun\x20err','ynbGE','prefab\x20spa','crHvwUrAIu','item_flopp','RocketLaun','bang','random\x20Hel','boolean','s\x20Gun','vatiI','efab','@PreviousP','zqSIL','ameManager','BPbnC','AwmmxUYGoS','<color=gre','Pizza\x20menu','iQbAQ','implementa','eZCMu','get_point','TextForBes','HLFWS','UrDiH','equals','WGmxp','uYAQj','\x20back.','item_ukule','wbsysyTytg','BpzgF','KNqbEifAex','NextPage','Change\x20Pre','op_Equalit','wZoUe','ch_Lava','item_hover','\x20Hold\x20righ','disableMet','FlareGunPr','pear','bevhZ','npcErVsago','CdBQN','length','sELqL','get_collid','triPL','LtKnW','ing_canvas','TvGpYtVlkU','QlcUr','sByType','ElkkU','RPC_ApplyB','ot_zombie','FakeGorill','mkqJb','le\x20Held\x20It','evVTaLMmUA','dZcjg','e.UI','e.LineRend','der','OsJFT','\x20Items','xyerPqExZG','rfJijagNoY','SetParent','pad','MYNkf','Rope_Zipli','ver','ArmstrongM','get_deltaT','the\x20main\x20c','BqshU','e]\x20Error\x20i','PlayerRef','l\x20Items','Impact_Gol','[DISABLE]\x20','BVoXVFxsTM','set_layer','NCDDm','XBgVREirNL','UdBMu','tform.Plat','oaapFusFVK','item_heart','Landmine','yer','NXIVI','item_cola','458901RBRuXE','FLCTo','Oulwf','VtOvPLgTjh','gLKhfXwdlI','Movement\x20m','ztUXXGKZww','\x20aim\x20(hold','GetHandInt','oard_box','BombContro','matic','zbXmh','Fsjtd','Disconnect','FuqyM','ror:','MuzzleFlas','pKees','1084307lmBeGL','JZQOO','ZpbXB','set_resize','acYFS','any.AutoRe','item_rando','isStatic','IcjKObGwwj','AxFaOsHKbH','or:','Exit\x20Spawn','unlock\x20all','FindObject','Spawn\x20spla','prnYe','\x20nearest\x20t','hAgDp','SfaKK','lYbRI','HingedDoor','ires.','any.Comput','CsCnK','HaOrKUOZTz','OBrPWMTHSL','ieHQpFhBiS','Dupe\x20item\x20','ArmstrongC','prefab\x20nul','(hold\x20grip','filter','get_grabba','sScaler','tick','tjfTT','item_taped','Spawning','UrykY','Settings','ndingMachi','Hpgcv','atform','pYJyE','InflatedBa','UhwEm','yeIkz','nRnDVqbNqt','failed:\x20','uokiD','DqBYH','Autumn_Lea','InsVouSxaH','time','ISUIb','y_Small','ionManager','ReCyV','xkGEj','reference','BAUGioZzXk','any.Shotgu','set_color','lNtEs','FdHMz','aturation','misc\x20categ','Spawn\x20Mob','set_isKine','kzaidMQyHx','set_dynami','Networked','clXJBtUTTZ','Gzkrs','um_chunk_s','regun','rybdc','BCEea','DBpsM','\x20where\x20you','k__Backing','city','kHibNPCUwv','hqQgl','Keys','JSpiZ','yName','gxgAPIdRXe','nTNZb','vuzIZ','Ujcsu','Exit\x20White','PhotonFusi','CiZQy','QLUlY','y_whole','xScEb','wnFlags','jNvKk','xe_cny','XJNtT','ltime','GiantRockO','ent\x20mods','eractor','Uclmp','NetworkSpa','split','GeneratePr','qSThl','2110qzWSXg','aWvGj','rEkKG','PZXxzlXmxZ','uGxWu','item_footb','itive','lMNyg','New\x20item\x20i','any.ArenaI','\x20ID','lta','qnHxF','e.AudioMod','method','OgOfv','t_paper_ro','eKlhh','_isUsed','hot','s\x20you\x20from','light_red','LdzTO','Ukmho','item_ore_s','trigger).','LkCRQ','LBUba','Ethereal_V','aControlle','PrefabGun\x20','ibwFxxRrBh','Fly','tVmEXnlULm','ll_empty','get_Values','ZHVdlteiKM','GlobalRetu','OnPlayerLe','item_stick','GUkDRIavEI','HwdeS','name','tcYql','aLHRk_jVcF','shes','UvQrZ','get_player','isEnum','cyaxg','828153cxBwSs','LOnFi_cCHF','eqJdZUROfx','ult','ByName','aster','fJwbHyParG','Custom\x20hue','EvbOE','cEdkO','5632vOxYOk','JQevr','GetBuiltin','ull\x20trigge','item_disc','VNacg_BYqu','GaUGd','est\x20player','le_gold','item_stash','zNWFQ','NiwpP','UnErC','krjlzCxlEg','ller','NumVQ','oJqAc','Change\x20Eje','ected\x20pref','yCch_WWxiA','item_calcu','item_saddl','Returns\x20yo','Prefab\x20Stu','ilver_l','gravity_gr','er\x20mods','RhBIr'];
    _0x592c=function() {
        return _0x1fd10a;
    };
    return _0x592c();
}
const loadedBundles= {
},
loadedObjects= {
};
let _n5MenuBooted=false,_n5MenuBootAttempts=0,_n5MenuReadySince=0;
function _n5StateValue(_p){
    if(!_p)return null;
    try{return _p['method']('get_Value')['invoke']();}catch(_){}
    try{return _p['field']('value')['value'];}catch(_){}
    try{return _p['field']('_value')['value'];}catch(_){}
    return null;
}
function _n5MenuCanBoot(){
    try{
        const _now=Date.now();
        const _ac=Il2Cpp['domain']['assembly']('AnimalCompany')['image'];
        try{
            const _state=_ac['class']('AnimalCompany.App')['method']('get_state')['invoke']();
            if(!_state||(_state['handle']&&_state['handle']['isNull']()))return false;
            const _loading=_state['method']('get_loadingScreen')['invoke']();
            if(_loading&&(!_loading['handle']||!_loading['handle']['isNull']())){
                const _err=''+(_n5StateValue(_loading['method']('get_errorStatus')['invoke']())||'');
                if(_err&&_err!=='null')return false;
            }
        }catch(_){}
        const _gl=_ac['class']('AnimalCompany.GorillaLocomotion');
        let _inst=null;
        try{_inst=_gl['field']('<Instance>k__BackingField')['value'];}catch(_){}
        if(!_inst||(_inst['handle']&&_inst['handle']['isNull']())){
            try{
                const _obj=Il2Cpp['domain']['assembly']('UnityEngine.CoreModule')['image']['class']('UnityEngine.Object');
                _inst=_obj['method']('FindObjectOfType',1)['inflate'](_gl)['invoke'](false);
                if(_inst&&(!_inst['handle']||!_inst['handle']['isNull']())){
                    try{_gl['field']('<Instance>k__BackingField')['value']=_inst;}catch(_){}
                }
            }catch(_){}
        }
        if(!_inst||(_inst['handle']&&_inst['handle']['isNull']()))return false;
        const _head=_inst['field']('headCollider')['value'];
        if(!_head||(_head['handle']&&_head['handle']['isNull']()))return false;
        if(!_n5MenuReadySince)_n5MenuReadySince=_now;
        return (_now-_n5MenuReadySince)>5000;
    }catch(_){return false;}
}
function _n5BootMenu(){
Il2Cpp['perform'](()=> {
    if(_n5MenuBooted)return;
    if(!_n5MenuCanBoot()){
        if((_n5MenuBootAttempts++%5)===0)console.log(_n5MenuReadySince?'[N5] player rig found; waiting for scene to settle before menu boot...':'[N5] waiting for loading screen/player rig before menu boot...');
        setTimeout(_n5BootMenu,1000);
        return;
    }
    _n5MenuBooted=true;
    _n5PCInitWin32();

    let _n5AuthPassed = true;
    let _n5AuthChecked = true;

    const _0x240047=_0x291a,_0x476e10= {
        'iBVau':'Destroy','BGTMU':'GetComponent','sLQwt':'GetComponentInParent','qwAqQ':'AddComponent','JvTJW':'get_transform','qTups':'get_IsMine','czDGi':function(_0x2a88f5,_0x23ce62) {
            return _0x2a88f5===_0x23ce62;
        },
        'sYrWh':function(_0x55186b,_0x443a29,_0x2a2b21,_0x6f8af6) {
            return _0x55186b(_0x443a29,_0x2a2b21,_0x6f8af6);
        },
        'MPZmC':function(_0x105a12,_0x3ea5e0,_0x5436b4) {
            return _0x105a12(_0x3ea5e0,_0x5436b4);
        },
        'BPbnC':'hasvalue','DzTBa':'value','CDBrt':function(_0x292501,_0x13fcc8) {
            return _0x292501(_0x13fcc8);
        },
        'wwKEr':function(_0x4628e8,_0x2b72d7) {
            return _0x4628e8(_0x2b72d7);
        },
        'ysFgC':'boolean','NSFer':function(_0x4e3372,_0x179e17) {
            return _0x4e3372 instanceof _0x179e17;
        },
        'UnErC':function(_0x54a34b,_0x5c972e) {
            return _0x54a34b===_0x5c972e;
        },
        'WTTxg':'_instance','RhZfj':'get_runner','kWNSW':'_config','cULYi':'PrefabTable','LVBav':'_sources','lMNyg':'get_Count','kdemC':function(_0x327a67,_0x2a51ed) {
            return _0x327a67<_0x2a51ed;
        },
        'XJNtT':'get_Item','uWKdC':'get_Description','NmKJA':'WaitForResult','vFQqx':'Spawn','RwyBa':function(_0x1bc083,_0x2f313f) {
            return _0x1bc083!==_0x2f313f;
        },
        'NeMHI':'Fusion.NetworkObject','ROVVx':'System.Nullable','QlcUr':'Vector3','yYEnS':'Quaternion','FuqyM':'PlayerRef','EvbOE':'OnBeforeSpawned','qswjV':'NetworkSpawnFlags','xPfzf':function(_0x52c7a4,_0x23b91d,_0x466ff5) {
            return _0x52c7a4(_0x23b91d,_0x466ff5);
        },
        'uTbxE':function(_0x411b94,_0xc92c93,_0x1729d9,_0x299635) {
            return _0x411b94(_0xc92c93,_0x1729d9,_0x299635);
        },
        'pUqkT':function(_0x1623a9,_0x5b81b0) {
            return _0x1623a9(_0x5b81b0);
        },
        'mAIPj':function(_0x419875,_0x332b6e) {
            return _0x419875+_0x332b6e;
        },
        'rOelS':'spawnNetworkPrefab error: ','KsNte':'get_view','pdSNt':'_fingerViews','sELqL':'op_Subtraction','YApVv':'get_position','ZOiTU':'op_Addition','vQatN':'get_localPlayer','uXViU':'RPC_Teleport','nnOEy':function(_0x451291,_0x2fec00) {
            return _0x451291(_0x2fec00);
        },
        'uzhlw':function(_0x4801fe,_0x496a96) {
            return _0x4801fe==_0x496a96;
        },
        'edcaL':function(_0x444a38,_0x387d50) {
            return _0x444a38+_0x387d50;
        },
        'VrZnq':function(_0x3a9549,_0x56848f) {
            return _0x3a9549&&_0x56848f;
        },
        'LtKnW':function(_0x5d468a) {
            return _0x5d468a();
        },
        'NcyfD':'CreatePrimitive','nORQm':'set_enabled','ZPxAz':'get_material','frUDt':'set_shader','mlCnr':'set_color','iYafP':'set_isTrigger','CdBQN':function(_0x34ccf4,_0x5cd35e) {
            return _0x34ccf4!=_0x5cd35e;
        },
        'WHQTd':'SetParent','ZKeBc':'set_position','yqzdi':'set_rotation','AnNTs':'set_localScale','lYkMe':function(_0xd792ef,_0x34f357,_0x41a0f0) {
            return _0xd792ef(_0x34f357,_0x41a0f0);
        },
        'xmgGA':function(_0x1b6e5c,_0x215460,_0x21f115,_0x225493,_0x1b7972,_0x833eb2,_0x14725e) {
            return _0x1b6e5c(_0x215460,_0x21f115,_0x225493,_0x1b7972,_0x833eb2,_0x14725e);
        },
        'oMfjL':'set_text','xfcpq':'set_font','wYrAP':'set_fontSize','NIntI':'set_fontStyle','yYsGy':'set_alignment','YQAmG':'set_resizeTextForBestFit','wnmyw':'set_resizeTextMinSize','wIoQl':function(_0x16d149,_0x58016c,_0x5d2cbc) {
            return _0x16d149(_0x58016c,_0x5d2cbc);
        },
        'hAgDp':'set_sizeDelta','sDZcS':'Euler','uyrgn':'UnityEngine.CoreModule','TdDEc':'UnityEngine.Renderer','nTNZb':function(_0x261728,_0x2d1d4f) {
            return _0x261728-_0x2d1d4f;
        },
        'qtNkl':function(_0x2c07e9,_0x5d454b) {
            return _0x2c07e9*_0x5d454b;
        },
        'FSoXy':function(_0x468500,_0x4fb6cf) {
            return _0x468500(_0x4fb6cf);
        },
        'DmuFQ':'set_name','ACbPx':function(_0x435973,_0x2b8ac9) {
            return _0x435973+_0x2b8ac9;
        },
        'lNtEs':function(_0x54564c,_0x30db1e,_0xc08f8d,_0x226f62,_0x4c74bc,_0x5f4040) {
            return _0x54564c(_0x30db1e,_0xc08f8d,_0x226f62,_0x4c74bc,_0x5f4040);
        },
        'WTlRF':function(_0x2ec720,_0x437784,_0x3f1245) {
            return _0x2ec720(_0x437784,_0x3f1245);
        },
        'mXMjO':function(_0xedcbdb,_0x2093f9,_0x554072,_0x5cce1b,_0x54b8c8,_0x35ba37,_0xb58883) {
            return _0xedcbdb(_0x2093f9,_0x554072,_0x5cce1b,_0x54b8c8,_0x35ba37,_0xb58883);
        },
        'EVAzO':function(_0x1ae99e,_0x62debc) {
            return _0x1ae99e(_0x62debc);
        },
        'BqshU':function(_0x5ef850,_0xd9d11b) {
            return _0x5ef850(_0xd9d11b);
        },
        'zUTTG':function(_0xd7f12f,_0xd8cbff,_0x9dddf) {
            return _0xd7f12f(_0xd8cbff,_0x9dddf);
        },
        'SuupE':function(_0x25434c,_0x5da2ba,_0x348f28) {
            return _0x25434c(_0x5da2ba,_0x348f28);
        },
        'sdfbr':function(_0x5e6bc6,_0xfaf7c7,_0x1979e4) {
            return _0x5e6bc6(_0xfaf7c7,_0x1979e4);
        },
        'pRxna':function(_0xf9bc98,_0xdf7c28,_0x17c935) {
            return _0xf9bc98(_0xdf7c28,_0x17c935);
        },
        'fmjXF':'set_renderMode','jSKhc':'set_dynamicPixelsPerUnit','wJVCE':function(_0x51d603,_0x1f7618) {
            return _0x51d603+_0x1f7618;
        },
        'lYbRI':function(_0x2d00b1,_0x492700) {
            return _0x2d00b1+_0x492700;
        },
        'XkLGr':function(_0x56c1c5,_0x136330) {
            return _0x56c1c5>_0x136330;
        },
        'uMsSo':function(_0x43da13,_0x53c783,_0x39e91e,_0x28d2c4,_0x4bea78,_0xdd44d8,_0x4dc5a1,_0x8fffe5) {
            return _0x43da13(_0x53c783,_0x39e91e,_0x28d2c4,_0x4bea78,_0xdd44d8,_0x4dc5a1,_0x8fffe5);
        },
        'RInAn':function(_0x451996,_0x61eb60) {
            return _0x451996(_0x61eb60);
        },
        'JdRnB':'@Disconnect','gjAjh':'Disconnect','ijSuS':'@GlobalReturn','zXXqP':function(_0x22b0f1,_0x249396) {
            return _0x22b0f1(_0x249396);
        },
        'wpbwJ':'@PreviousPage','jhmHU':function(_0x1801d7,_0x43131a,_0x504767) {
            return _0x1801d7(_0x43131a,_0x504767);
        },
        'ynluQ':function(_0x45851f,_0x4852ee,_0x5f3967,_0x3c60e4,_0x3e04a8,_0x2eee11) {
            return _0x45851f(_0x4852ee,_0x5f3967,_0x3c60e4,_0x3e04a8,_0x2eee11);
        },
        'bteOE':function(_0x170ef5,_0x47fa38) {
            return _0x170ef5(_0x47fa38);
        },
        'rEFtT':'@NextPage','CjWXd':function(_0x2b19fc,_0x4dc457,_0x3f7495) {
            return _0x2b19fc(_0x4dc457,_0x3f7495);
        },
        'rybdc':function(_0x40938b,_0x9cd235,_0x8cf604) {
            return _0x40938b(_0x9cd235,_0x8cf604);
        },
        'prnYe':function(_0x2fbbaf,_0x4f9a3d) {
            return _0x2fbbaf*_0x4f9a3d;
        },
        'BGmZg':'op_Multiply','qCzPa':'get_localScale','CiTel':'<playerScale>k__BackingField','qSThl':'1|0|2|3|4','UEKyQ':function(_0x51848e,_0x4bb9de) {
            return _0x51848e(_0x4bb9de);
        },
        'FLCTo':'set_localPosition','XtUBy':'set_layer','cLyfd':'set_isKinematic','itVwD':'get_forward','WGmxp':'op_Division','RVszv':function(_0x27a514,_0x505304) {
            return _0x27a514||_0x505304;
        },
        'BAzzc':'RaycastAll','BpzgF':'Distance','avlli':'get_point','nvcfi':function(_0x5d1012,_0x3ea316) {
            return _0x5d1012<_0x3ea316;
        },
        'uPcrt':'op_Equality','BCEea':function(_0x3afefe,_0x57bda6,_0x10d83f,_0x2e07b6,_0xd8f144,_0x2ee476) {
            return _0x3afefe(_0x57bda6,_0x10d83f,_0x2e07b6,_0xd8f144,_0x2ee476);
        },
        'mkqJb':'SetActive','owkuk':function(_0x3c59df,_0x2ec561,_0x39285d) {
            return _0x3c59df(_0x2ec561,_0x39285d);
        },
        'vUcNQ':function(_0xc05c50,_0x5b2cb8,_0x95e963,_0x12c9c6,_0x30df17,_0x125b9d) {
            return _0xc05c50(_0x5b2cb8,_0x95e963,_0x12c9c6,_0x30df17,_0x125b9d);
        },
        'mNBvp':function(_0x20451f,_0x213595,_0x333aaa) {
            return _0x20451f(_0x213595,_0x333aaa);
        },
        'ZqQpU':'get_gameObject','HZCjb':'set_startColor','ElkkU':'set_endColor','rnFwP':'set_startWidth','SfaKK':'set_endWidth','dvkTr':'set_positionCount','Ldety':'set_useWorldSpace','RqRBv':'SetPosition','EDrfY':function(_0x7d669f,_0x2278ae) {
            return _0x7d669f<_0x2278ae;
        },
        'PmWsx':function(_0x5356f5,_0x970bc2) {
            return _0x5356f5/_0x970bc2;
        },
        'JSpiZ':function(_0x5c96bf,_0x5025d4) {
            return _0x5c96bf-_0x5025d4;
        },
        'kaWqJ':'Lerp','OgOfv':function(_0x13ea64,_0x4f197) {
            return _0x13ea64-_0x4f197;
        },
        'SBWkx':function(_0x4c76b4,_0x5d799d) {
            return _0x4c76b4*_0x5d799d;
        },
        'XnAck':function(_0x55e099,_0x5891ae) {
            return _0x55e099(_0x5891ae);
        },
        'YqqIM':'get_rotation','bEquP':function(_0x4f339b,_0x29f5ea) {
            return _0x4f339b*_0x29f5ea;
        },
        'mwXyj':'Slerp','CydZZ':'1|6|4|5|2|7|0|3','yCdEu':function(_0x533b50,_0x5ee3be) {
            return _0x533b50!==_0x5ee3be;
        },
        'oHAfR':function(_0x1bfd5f,_0x2819f5) {
            return _0x1bfd5f!==_0x2819f5;
        },
        'WxggD':'get__currentRunner','VXfzs':'get_instance','FBxzu':'OnPlayerLeft','VIJib':'get_LocalPlayer','yhReC':function(_0x2fbfb1,_0x2bdf29) {
            return _0x2fbfb1-_0x2bdf29;
        },
        'vbaeB':function(_0x28b263,_0x3ef368) {
            return _0x28b263/_0x3ef368;
        },
        'zFoqP':function(_0x471395,_0x54c13d) {
            return _0x471395<_0x54c13d;
        },
        'QcdsO':function(_0x17afe4,_0x20ce2e) {
            return _0x17afe4-_0x20ce2e;
        },
        'YEtTY':function(_0xcaa28f,_0x86f843) {
            return _0xcaa28f/_0x86f843;
        },
        'hXWTf':function(_0x28c43a,_0x11566f) {
            return _0x28c43a%_0x11566f;
        },
        'HaQtP':function(_0x55c1f8,_0xaf4412) {
            return _0x55c1f8+_0xaf4412;
        },
        'vFJQf':function(_0x24c671,_0x1566fc,_0x5afc4d) {
            return _0x24c671(_0x1566fc,_0x5afc4d);
        },
        'cRLnB':'<color=grey>[</color><color=#00ff59>MENU</color><color=grey>]</color> ','jEocR':'New item index: ','PijQq':function(_0x142bb2,_0x4bdace) {
            return _0x142bb2%_0x4bdace;
        },
        'Oulwf':function(_0x591a96,_0x46677a) {
            return _0x591a96%_0x46677a;
        },
        'FsYCF':'<color=grey>[</color><color=#00ff59>MENU</color><color=grey>]</color> Mob: ','SDpKB':'_devModeOn','bfnsC':'RefreshItems','LoSCC':'set_displayName','YeICc':'AddForce','ZrusN':function(_0x26358c,_0x2a7626) {
            return _0x26358c(_0x2a7626);
        },
        'ONmEw':function(_0x375036,_0x16f241) {
            return _0x375036(_0x16f241);
        },
        'ZBNJL':function(_0x83036e,_0x130003) {
            return _0x83036e(_0x130003);
        },
        'BHGRV':function(_0x5896e7,_0xd80254) {
            return _0x5896e7(_0xd80254);
        },
        'svJNs':function(_0x4bc4fe,_0x2de76a) {
            return _0x4bc4fe(_0x2de76a);
        },
        'rTNDm':function(_0x569fc6,_0x23eea9) {
            return _0x569fc6(_0x23eea9);
        },
        'gOGux':'get_playerView','oNfLg':'_cameraTransform','wGoFA':function(_0x38103e,_0x3db0d7) {
            return _0x38103e(_0x3db0d7);
        },
        'MdbSA':'GetHandInteractor','qNTul':'_itemAnchor','NumVQ':'get_grabbableObject','ysugx':function(_0x444bd,_0x2f5c64) {
            return _0x444bd>_0x2f5c64;
        },
        'nCOmN':function(_0x6b1e5d,_0xcdb8ea) {
            return _0x6b1e5d<_0xcdb8ea;
        },
        'GBtXF':'set_colorHue','JUUvG':function(_0x492577,_0x3c13b6) {
            return _0x492577>_0x3c13b6;
        },
        'ueDiE':'set_colorSaturation','KAggX':function(_0xc246db,_0x35e097) {
            return _0xc246db>_0x35e097;
        },
        'atZbg':function(_0x1ff3e6,_0x55b9ad) {
            return _0x1ff3e6<_0x55b9ad;
        },
        'LoUSE':'set_scaleModifier','BxIhz':function(_0x2dd712,_0xebffa6) {
            return _0x2dd712<_0xebffa6;
        },
        'pcxdQ':'4|0|3|2|1','UOInc':function(_0x12888e,_0x2eef38) {
            return _0x12888e>_0x2eef38;
        },
        'wSMXB':function(_0x53aeda,_0x3558cc) {
            return _0x53aeda>_0x3558cc;
        },
        'kJXXM':'3|4|2|1|0','PxRjI':function(_0x48fb37,_0x5bab92) {
            return _0x48fb37>_0x5bab92;
        },
        'Ixelf':function(_0x33524a,_0x3134c5) {
            return _0x33524a==_0x3134c5;
        },
        'AajWa':'FindObjectsByType','jREgu':function(_0x367435,_0x7dd12d) {
            return _0x367435!=_0x7dd12d;
        },
        'XtnBN':'4|0|3|1|5|2','IOwcG':function(_0x567a21,_0x2262d4) {
            return _0x567a21>_0x2262d4;
        },
        'OLUcg':function(_0x3eea73,_0x190e2e) {
            return _0x3eea73>_0x190e2e;
        },
        'yeIkz':function(_0x2f4b5b,_0x14bcf2) {
            return _0x2f4b5b>_0x14bcf2;
        },
        'FPkLf':'4|0|2|1|5|3','EvFrr':function(_0x4edf31,_0x3b17a8) {
            return _0x4edf31>_0x3b17a8;
        },
        'BpGwN':function(_0x53b55b,_0x27ea54) {
            return _0x53b55b>_0x27ea54;
        },
        'PoVUL':'0|2|5|6|1|4|3','DqBSp':function(_0x2ca5f0,_0x2a186a) {
            return _0x2ca5f0>_0x2a186a;
        },
        'ZcrPL':function(_0x21fb20,_0x246116) {
            return _0x21fb20>_0x246116;
        },
        'wyifY':function(_0x3e8c4f,_0x18ff53) {
            return _0x3e8c4f>_0x18ff53;
        },
        'RAwWF':'2|4|3|1|0|6|5','MmpKN':function(_0x5ed0bb,_0x286a9b) {
            return _0x5ed0bb+_0x286a9b;
        },
        'yHEdd':function(_0x56c438,_0x44d423) {
            return _0x56c438==_0x44d423;
        },
        'GywiG':function(_0x101788,_0x5d35ed) {
            return _0x101788%_0x5d35ed;
        },
        'nNHgt':function(_0x1f9617,_0x87ec15) {
            return _0x1f9617!=_0x87ec15;
        },
        'FcmTD':function(_0x42cf8c,_0x5bd08f) {
            return _0x42cf8c<_0x5bd08f;
        },
        'cucnJ':'GeneratePrefab','ZxRfO':'Spawn poop error:','Cisel':function(_0x548e0e,_0x104f58) {
            return _0x548e0e(_0x104f58);
        },
        'OsJFT':'Spawn splashes error:','uZRqq':'SpawnItem','ieSHm':function(_0x5092b6,_0x83c1f4) {
            return _0x5092b6+_0x83c1f4;
        },
        'tdeSU':'item_prefab/','lkoZK':function(_0x22f670,_0x3ec543,_0xa3549e) {
            return _0x22f670(_0x3ec543,_0xa3549e);
        },
        'CCqaC':'Spawn returned null:\x20','hLOTh':function(_0x58ad46,_0x1d6c32,_0x9c59e2) {
            return _0x58ad46(_0x1d6c32,_0x9c59e2);
        },
        'lSYZL':'Spawned: ','bLACt':'Hand spawn error:','ynbGE':function(_0x3f6b4c,_0x5b516c,_0x522f1d) {
            return _0x3f6b4c(_0x5b516c,_0x522f1d);
        },
        'HBjxx':'Spawn failed: ','DVnqu':function(_0x437b94,_0x133b0e) {
            return _0x437b94+_0x133b0e;
        },
        'XBDpI':function(_0x2077d7,_0x1f7833) {
            return _0x2077d7*_0x1f7833;
        },
        'Hpgcv':function(_0x28ee06,_0x5a5dc5) {
            return _0x28ee06+_0x5a5dc5;
        },
        'dJpMD':function(_0x1606a2,_0x480e4c) {
            return _0x1606a2-_0x480e4c;
        },
        'saSSG':'item_treestick','egUoS':'get_itemID','beLbR':function(_0x4b03ca,_0x555e5c,_0x1f5330) {
            return _0x4b03ca(_0x555e5c,_0x1f5330);
        },
        'oBcVc':function(_0x71cf42,_0x239f7d,_0x500d15) {
            return _0x71cf42(_0x239f7d,_0x500d15);
        },
        'TrWEY':'AddExternalForceVelocity','SchWF':'Random Hand Duper error:','MtVJr':function(_0x5cd5b5) {
            return _0x5cd5b5();
        },
        'ZUTqE':function(_0x218cc6,_0x560584) {
            return _0x218cc6>_0x560584;
        },
        'rQVgV':function(_0x6201ac,_0x2aef7f,_0x3b5097) {
            return _0x6201ac(_0x2aef7f,_0x3b5097);
        },
        'aDTEz':function(_0x21fd0a,_0x4f6c3f) {
            return _0x21fd0a+_0x4f6c3f;
        },
        'CKKZE':' Spawned item:','mdRTM':function(_0x474080,_0x3a5bad) {
            return _0x474080+_0x3a5bad;
        },
        'uipzP':'Item spawn error:','nDCMw':function(_0x4b82a9,_0x46227e) {
            return _0x4b82a9+_0x46227e;
        },
        'DbPzj':'mob_prefab/','CvRiU':function(_0x45b76c,_0x371281,_0x33c45c) {
            return _0x45b76c(_0x371281,_0x33c45c);
        },
        'FfZRg':function(_0x239697,_0x2eb27e) {
            return _0x239697+_0x2eb27e;
        },
        'vUuIy':'Mob spawn returned null: ','KsPWj':function(_0x1865db,_0x41646c) {
            return _0x1865db+_0x41646c;
        },
        'JrvAG':'Spawned mob: ','rEkKG':'Mob hand spawn error:','beNCO':function(_0x1ac624,_0x2facef) {
            return _0x1ac624+_0x2facef;
        },
        'mMiDx':'Mob spawn failed: ','mnMDs':function(_0x35051e) {
            return _0x35051e();
        },
        'nmoBZ':function(_0x573c24,_0x48aa91) {
            return _0x573c24+_0x48aa91;
        },
        'eVice':function(_0x5c7735,_0x5c34e5) {
            return _0x5c7735+_0x5c34e5;
        },
        'oJqAc':function(_0x3a62df,_0x212c9d,_0x4dea56) {
            return _0x3a62df(_0x212c9d,_0x4dea56);
        },
        'qWRUu':function(_0x3bae5d,_0x204ed7) {
            return _0x3bae5d+_0x204ed7;
        },
        'BvlLf':function(_0x14779b,_0x290825) {
            return _0x14779b+_0x290825;
        },
        'wZoUe':'Mob gun spawn error:','HpeJd':function(_0xa164,_0x5cc89c) {
            return _0xa164+_0x5cc89c;
        },
        'GOEAp':function(_0x28dba1,_0x1ea5e6) {
            return _0x28dba1+_0x1ea5e6;
        },
        'VpJwS':function(_0x61f19,_0x222c6b) {
            return _0x61f19(_0x222c6b);
        },
        'ajDTO':'playerIDToNetPlayer','Gzkrs':'get_Values','UhwEm':'GetEnumerator','tcYql':'MoveNext','UdBMu':'get_Current','KaeSB':function(_0x28468b,_0x1e8d2f) {
            return _0x28468b(_0x1e8d2f);
        },
        'shNPV':function(_0xe1154,_0x2b316a) {
            return _0xe1154(_0x2b316a);
        },
        'JQevr':'RPC_PlayVFX','GvlcC':'RPC_AddForce','uKaRt':'RPC_SetColorHSV','xkGEj':'Disintegrated nearest player to pointer','gIHTF':' Disintegrated nearest player to gun pointer with all VFX','Crgyy':'Disintegrate gun error:','OuNfV':'TP ALL Gun error:','HMLmM':function(_0x250ea2,_0x2f115d,_0x3e0b97) {
            return _0x250ea2(_0x2f115d,_0x3e0b97);
        },
        'uYAQj':'get_collider','jcLYt':function(_0x12a73f,_0x12fea2) {
            return _0x12a73f>_0x12fea2;
        },
        'mUojT':function(_0x11bfb6,_0x8ed15c) {
            return _0x11bfb6(_0x8ed15c);
        },
        'vatiI':'RPC_TagAsStinky','UrDiH':'[MENU] New eject dupe amount: ','Ukmho':'HandleTriggerUse','CDJgn':function(_0x3d7e77,_0x4dc700) {
            return _0x3d7e77+_0x4dc700;
        },
        'vuzIZ':function(_0x4efca9,_0x14e05b) {
            return _0x4efca9%_0x14e05b;
        },
        'VbxNI':function(_0x1d3160,_0x417622) {
            return _0x1d3160+_0x417622;
        },
        'Ujcsu':'Prefab: ','RhBIr':function(_0x9f54d6,_0x478c95) {
            return _0x9f54d6===_0x478c95;
        },
        'nvsZB':function(_0x279d1f,_0x8fc43b) {
            return _0x279d1f instanceof _0x8fc43b;
        },
        'LMtKj':function(_0x4bba3e,_0x4b5726) {
            return _0x4bba3e===_0x4b5726;
        },
        'jyUWX':function(_0x262b13,_0x41b815) {
            return _0x262b13(_0x41b815);
        },
        'QQcZx':'runner null','VRaOu':function(_0x34c896,_0x2c43d4) {
            return _0x34c896<_0x2c43d4;
        },
        'nrqXT':'prefab null','WuvDS':'spawn method not found','UPDrY':function(_0x27fb87,_0xa5325e) {
            return _0x27fb87(_0xa5325e);
        },
        'dYxYI':function(_0x53b80b,_0x4886a0) {
            return _0x53b80b+_0x4886a0;
        },
        'RfFMX':'Prefab not found: ','wdbsQ':function(_0x580670,_0x35467a) {
            return _0x580670+_0x35467a;
        },
        'HwdeS':'SpawnPrefab error: ','vGJLd':function(_0x45308f,_0x57fc68) {
            return _0x45308f===_0x57fc68;
        },
        'IJdAK':function(_0x14d14a,_0x53cd98) {
            return _0x14d14a(_0x53cd98);
        },
        'rAeaq':function(_0x261dc4,_0x2b5846) {
            return _0x261dc4 instanceof _0x2b5846;
        },
        'cyaxg':function(_0xbe8720,_0x44590c) {
            return _0xbe8720+_0x44590c;
        },
        'mXFeC':function(_0x4eddac,_0x22eff4) {
            return _0x4eddac<_0x22eff4;
        },
        'ISFoi':function(_0x5bc7e0,_0x1d5094,_0x3db467) {
            return _0x5bc7e0(_0x1d5094,_0x3db467);
        },
        'uwChI':function(_0x148b3d,_0x47fda0) {
            return _0x148b3d(_0x47fda0);
        },
        'wFpuT':'PrefabGun error: ','ANEeJ':function(_0x1ad8e4,_0x585006) {
            return _0x1ad8e4===_0x585006;
        },
        'CLgNC':function(_0x143f0e,_0x56a78a) {
            return _0x143f0e===_0x56a78a;
        },
        'UKxFn':function(_0x21775e,_0x538fa0) {
            return _0x21775e===_0x538fa0;
        },
        'wOtby':function(_0x565936,_0x410c3) {
            return _0x565936(_0x410c3);
        },
        'WvbgP':function(_0x4810be,_0x1d9e11,_0x251066) {
            return _0x4810be(_0x1d9e11,_0x251066);
        },
        'jUxxw':function(_0x576479,_0x5dacd9) {
            return _0x576479(_0x5dacd9);
        },
        'ReCyV':'RocketLauncher error:\x20','LdzTO':'get_name','tNkhl':function(_0x3fb849,_0x2e2345) {
            return _0x3fb849>_0x2e2345;
        },
        'JhRIq':function(_0x2e0f3d,_0xcda0b3) {
            return _0x2e0f3d==_0xcda0b3;
        },
        'LbcGm':function(_0x2db2fd,_0x1eeff9) {
            return _0x2db2fd-_0x1eeff9;
        },
        'sEmwP':'get_time','iQbAQ':function(_0x4cd421,_0x4dad1c) {
            return _0x4cd421>_0x4dad1c;
        },
        'HAqgE':function(_0x3ea690,_0x2344b9) {
            return _0x3ea690+_0x2344b9;
        },
        'uokiD':function(_0x4afb17,_0x5b094c) {
            return _0x4afb17(_0x5b094c);
        },
        'GUULy':function(_0x16fb3a) {
            return _0x16fb3a();
        },
        'XNrbp':function(_0x596c91,_0x155705,_0x3cdbec) {
            return _0x596c91(_0x155705,_0x3cdbec);
        },
        'JBkaJ':'[ENABLE] ','zITYt':function(_0xc5bfc0,_0x20bcef) {
            return _0xc5bfc0===_0x20bcef;
        },
        'CsCnK':function(_0x1715b5,_0x3487ac,_0x4588f1) {
            return _0x1715b5(_0x3487ac,_0x4588f1);
        },
        'LBUba':'[DISABLE] ','tIVui':function(_0x43f8d4,_0x3a9200) {
            return _0x43f8d4===_0x3a9200;
        },
        'NGveq':function(_0x4a8434,_0x2ca5b3) {
            return _0x4a8434===_0x2ca5b3;
        },
        'eLdQE':'OnTriggerEnter','TQNch':'GetDeviceAtXRNode','ureWX':'TryGetFeatureValue','OQjDm':'primaryButton','uLWZU':'secondaryButton','zVPHi':'gripButton','triPL':'triggerButton','LjsNU':function(_0x2d3c52,_0x127790) {
            return _0x2d3c52!==_0x127790;
        },
        'GTnCs':'primary2DAxisClick','EICZf':function(_0x1cbf51,_0x424730) {
            return _0x1cbf51!==_0x424730;
        },
        'DtSku':function(_0x2f06cd,_0x4d21f4) {
            return _0x2f06cd!==_0x4d21f4;
        },
        'fJzdg':'get_deltaTime','Uclmp':function(_0x3bd778,_0x20c703) {
            return _0x3bd778&&_0x20c703;
        },
        'zbXmh':function(_0x1c1a11,_0x52e0fe) {
            return _0x1c1a11&&_0x52e0fe;
        },
        'VHWzp':function(_0x487764,_0x36f641) {
            return _0x487764!=_0x36f641;
        },
        'uMIkA':function(_0x238fc5) {
            return _0x238fc5();
        },
        'ZEINj':function(_0x1ffde5,_0x4da347) {
            return _0x1ffde5(_0x4da347);
        },
        'oUVci':function(_0x30e618,_0xca0f9) {
            return _0x30e618==_0xca0f9;
        },
        'izVoi':function(_0x3da291,_0x122a46) {
            return _0x3da291!=_0x122a46;
        },
        'VpQAP':function(_0x375b8f,_0x3fc0d7) {
            return _0x375b8f(_0x3fc0d7);
        },
        'FdHMz':function(_0x23c2dc,_0x41f73d) {
            return _0x23c2dc==_0x41f73d;
        },
        'JDQif':function(_0x55e98a) {
            return _0x55e98a();
        },
        'zFjJA':'get_activeSelf','jMFpp':function(_0xb17ed,_0x65ced6) {
            return _0xb17ed!=_0x65ced6;
        },
        'Piovm':function(_0x1b3706,_0x27aede) {
            return _0x1b3706(_0x27aede);
        },
        'mBXDr':'AnimalCompany.ArenaItemKiller','ZqFAL':'DespawnIfNecessary','RkDyB':'get_hasAmmo','QTXqM':'get_ammoLoaded','buwGY':'get_isHammerCocked','NqJfX':'get_isLoaded','ygcbw':'get__ammoLeft','hqQgl':'get_loadedState','fWdEN':'isLoaded','IjPBK':'set_loadedState','dmXgr':'RPC_UseJetpack','wtDgq':'_isUsed','RCynW':'EjectItem','UGkgO':'RPC_ApplyBuff','ZpbXB':'RPC_PlayerStun','EsIlc':'AnimalCompany.NetPlayer','jNvKk':'AnimalCompany','XvLBG':'UnityEngine.PhysicsModule','UOrln':'UnityEngine.UIModule','CKuTn':'UnityEngine.UI','hkSyN':'UnityEngine.TextRenderingModule','ZfVVA':'Fusion.Runtime','XygRT':'Fusion.Realtime','UTTsg':'Unity.TextMeshPro','yZKGS':'UnityEngine.XRModule','NLHJH':'UnityEngine.AudioModule','LzNzX':'Oculus.Platform','Unlqj':'PhotonFusionNetworking','cEdkO':'Oculus.Platform.PlatformSettings','nTwOU':'AnimalCompany.GorillaLocomotion','IJDhe':'AnimalCompany.ItemVendingMachineView','itbOh':'AnimalCompany.ElevatorManager','iWOif':'AnimalCompany.ArenaGameManager','SQMee':'AnimalCompany.GrabbableObject','nsMcs':'AnimalCompany.ItemSellingMachineController','JGXBn':'AnimalCompany.PrefabGenerator','uZcgq':'AnimalCompany.GrabbableItem','rjuEq':'AnimalCompany.PlayerController','kDnKS':'AnimalCompany.SFXManager','oUMhG':'AnimalCompany.NetworkManager','zNWFQ':'AnimalCompany.ComputerTerminalKey','bfioC':'UnityEngine.XR.InputDevices','qnHxF':'UnityEngine.XR.CommonUsages','QIAXF':'UnityEngine.GameObject','DCPcY':'UnityEngine.Object','vCPZz':'UnityEngine.Vector3','kLGRU':'UnityEngine.Quaternion','DYYOX':'UnityEngine.Time','MrmgQ':'UnityEngine.Resources','qfjXb':'UnityEngine.Material','enhsW':'UnityEngine.Shader','ipaJN':'UnityEngine.RectTransform','qUqHy':'UnityEngine.LineRenderer','BJqkN':'UnityEngine.BoxCollider','UhsCU':'UnityEngine.Collider','yMBQI':'UnityEngine.Rigidbody','GsekQ':'UnityEngine.Physics','qbymt':'UnityEngine.Component','PEQIp':'AnimalCompany.ParticleManager','UEILM':'UnityEngine.Canvas','koqqs':'UnityEngine.UI.CanvasScaler','pYJyE':'UnityEngine.UI.GraphicRaycaster','rbtsG':'UnityEngine.UI.Text','GrvDC':'UnityEngine.Font','stYEa':'<Instance>k__BackingField','TBCJz':'Find','WxNkX':'Universal Render Pipeline/Unlit','UrykY':'UI/Default','vkWwE':'zeroVector','cAbGj':'oneVector','lhGVz':'identityQuaternion','dqoMf':'leftHandTransform','gOCqt':'rightHandTransform','vfsAm':'headCollider','jAvkk':'bodyCollider','nkPOg':'GetBuiltinResource','ICSPz':'Arial.ttf','XmSpt':'Fusion.NetworkRunner','Fsjtd':'mscorlib','Fdboq':'System.Object','ncoyv':'Settings','DqBYH':'Opens settings.','vDAaf':'Movement mods','FPIGs':'Opens the player mods category.','LkCRQ':'Player mods','FdGtT':'Opens the movement mods category.','CHtbw':'Other player mods','CfiJb':'Opens the test category.','tZREq':'Item mods','yqDHf':'Opens the item mods category.','ASbmz':'Spawning','FqfXT':'Opens the Spawning category.','qSgEN':'Gun mods','OjNwK':'Opens the gun mods category.','uGxWu':'Misc','FoOfk':'Opens the misc category.','NCDDm':'Prefab Stuff','IZRQv':'Opens the prefab spawning category.','Gvuap':'Disconnects you from the room.','Zzuyo':'PreviousPage','tkgxf':'NextPage','FIcve':'GlobalReturn','CvvKF':'Returns you back to the main category.','fXUix':'Exit Settings','WDhXx':'Change Item ID','vjzRb':'Changes the item ID. Hold right grip to go down','QLGvF':'Change Mob ID','STAOa':'Changes the mob to spawn. Hold right grip to go back.','SNsOx':'unlock all','GBQHN':'Unlocks all items in the vending machine.','SrfSb':'Spoof ur name to hi','acYFS':'Exit Movement mods','qltPS':'Fly','oNlfk':'Hold triggers to fly where your hands point','qIYaR':'Long Arms','ebDhR':'Gives you longer arms.','EKExN':'Longer Arms','zENly':'Longerer Arms','xAXPE':'Longererer Arms','XOVnG':'Exit Player mods','nlhSi':'Invisible Toggleable','GPtnG':'Turns you invisible.','CHfNs':'Exit Other Players','JTaDa':'Whitelist mods','rCgZK':'Exit Item mods','SPUZO':'Custom hue Held Item','kySgG':'Hold A to increase, grip to decrease scale of held item.','aWvGj':'Custom saturation Held Item','GaUGd':'Custom Scale Held Item','HLFWS':'Rainbow Held Item','YoDUM':'Hold A to increase, grip to decrease hue of held item.','dlYvp':'Rainbow All Items','lDmfy':'Hold grip to cycle rainbow on all items.','HDCTx':'random Held Item','FJpeU':'random All Items','GmfnB':'Exit Spawning mods','eGvDq':'Spawn Poop','BoGfl':'Spawns a DeadBody_Poop prefab at your position.','bevhZ':'Spawn Splashes','uQvjr':'Spawns a Splashes prefab at your position.','wYiiV':'Spawn Items','qvRsA':'Spawns items in your right hand (hold grip + B).','MYNkf':'Random Hand Duper','bubEt':'Dupe item held in left hand with random config (Hold B).','TCFCh':'Spawn Items Gun','EUfAf':'Spawns items where you aim (hold grip, pull trigger).','pMOpX':'Spawn Mob','sfDjj':'Spawns mob at your right hand (hold grip + B).','SXxsO':'Spawn Mob Gun','ygESk':'Spawns mob where you aim (hold grip, pull trigger).','PVAUF':'Exit Gun mods','xScEb':'Disintegrate Gun','TxPkM':'Disintegrates player nearest to gun pointer with ALL VFX (hold grip, pull trigger)','WwPaK':'TP ALL Gun','cFdMf':'Teleports all players to your gun pointer.','jPXUq':'Stinky Gun','ZsFdS':'Stinkies whoever your hand desires.','ApQeU':'Exit Misc','MZfFV':'Stash Dupe','eKlhh':'Lets you eject more times using your stash.','ZBqmm':'Change Eject Dupe Amount','bPDqw':'Cycles through preset dupe amounts.','CiZQy':'Infinite Ammo','SGQmV':'Infinite ammo','zuDvN':'Rapid Fire','NiwpP':'Rapid fire any item used with trigger button.','xFdfl':'Exit Whitelist mods','eZCMu':'Returns to Other Players.','fulad':'nothing yet','Lmwax':'Exit Prefab Stuff','pKees':'Returns to main menu.','OPMue':'Change Prefab','isbRH':'Changes the prefab to spawn. Hold right grip to go back.','DdyGO':'Spawn Prefab','lyyzS':'Spawns selected prefab at right hand.','tjfTT':'Prefab Gun','HOdGC':'Shoots selected prefab where you aim (hold grip + trigger).','hPTEO':'Rocket Launcher','ccrlx':'OnLateUpdate','sYyWr':'AnimalCompany.FlareGun','QYFjq':'AnimalCompany.Revolver','xppKc':'AnimalCompany.ZiplineGun','QLUlY':'AnimalCompany.Shotgun','NXIVI':'AnimalCompany.RPG','dZcjg':'AnimalCompany.AutoReloadGun','cmsiw':'AnimalCompany.JetpackHandy','XQYIQ':'AnimalCompany.StashMachine.StashMachineTrashChuteView','aGSAx':function(_0x3c4270) {
            return _0x3c4270();
        }
    },
    _0x1235b5= {
        'AnimalCompany':Il2Cpp['domain']['assembly'](_0x476e10['jNvKk'])['image'],'UnityEngine.CoreModule':Il2Cpp['domain']['assembly'](_0x476e10['uyrgn'])['image'],'UnityEngine.PhysicsModule':Il2Cpp['domain']['assembly'](_0x476e10['XvLBG'])['image'],'UnityEngine.UIModule':Il2Cpp['domain']['assembly'](_0x476e10['UOrln'])['image'],'UnityEngine.UI':Il2Cpp['domain']['assembly'](_0x476e10['CKuTn'])['image'],'UnityEngine.TextRenderingModule':Il2Cpp['domain']['assembly'](_0x476e10['hkSyN'])['image'],'PhotonFusionNetworking':Il2Cpp['domain']['assembly'](_0x476e10['ZfVVA'])['image'],'PhotonFusionNetworkingRealtime':Il2Cpp['domain']['assembly'](_0x476e10['XygRT'])['image'],'Unity.TextMeshPro':Il2Cpp['domain']['assembly'](_0x476e10['UTTsg'])['image'],'UnityEngine.XRModule':Il2Cpp['domain']['assembly'](_0x476e10['yZKGS'])['image'],'UnityEngine.AudioModule':Il2Cpp['domain']['assembly'](_0x476e10['NLHJH'])['image'],'Oculus.Platform':Il2Cpp['domain']['assembly'](_0x476e10['LzNzX'])['image']
    },
    _0xa03cc7=_0x1235b5[_0x476e10['jNvKk']],_0x428c96=_0x1235b5[_0x476e10['uyrgn']],_0x1447aa=_0x1235b5[_0x476e10['XvLBG']],_0x3dd734=_0x1235b5[_0x476e10['CKuTn']],_0x45df0a=_0x1235b5[_0x476e10['UOrln']],_0x8fef9f=_0x1235b5[_0x476e10['hkSyN']],_0x5ce213=_0x1235b5[_0x476e10['Unlqj']],_0x111854=_0x1235b5[_0x476e10['UTTsg']],_0x3122b4=_0x1235b5[_0x476e10['yZKGS']],_0x4259f7=_0x1235b5[_0x476e10['NLHJH']],_0x2acbd1=_0x1235b5[_0x476e10['LzNzX']]['class'](_0x476e10['cEdkO']),_0x2f5cd1=_0xa03cc7['class'](_0x476e10['nTwOU']),_0x126eec=_0xa03cc7['class'](_0x476e10['EsIlc']),_0x178e96=_0xa03cc7['class'](_0x476e10['IJDhe']),_0xde9c99=_0xa03cc7['class'](_0x476e10['itbOh']),_0x353082=_0xa03cc7['class'](_0x476e10['iWOif']),_0x3e7a10=_0xa03cc7['class'](_0x476e10['SQMee']),_0x3b69e3=_0xa03cc7['class'](_0x476e10['nsMcs']),_0x1e0b92=_0xa03cc7['class'](_0x476e10['JGXBn']),_0xaf18fa=_0xa03cc7['class'](_0x476e10['uZcgq']),_0xd2baad=_0xa03cc7['class'](_0x476e10['rjuEq']),_0x97c8f0=_0xa03cc7['class'](_0x476e10['SQMee']),_0x40792d=_0xa03cc7['class'](_0x476e10['kDnKS']),_0x27fe45=_0xa03cc7['class'](_0x476e10['oUMhG']),_0x73884e=_0xa03cc7['class'](_0x476e10['zNWFQ']),_0x1aa095=_0x3122b4['class'](_0x476e10['bfioC']),_0x26833e=_0x3122b4['class'](_0x476e10['qnHxF']),_0x4464ae=_0x428c96['class'](_0x476e10['QIAXF']),_0x1f7740=_0x428c96['class'](_0x476e10['DCPcY']),_0xe4d316=_0x428c96['class'](_0x476e10['vCPZz']),_0x4088e6=_0x428c96['class'](_0x476e10['kLGRU']),_0x5be904=_0x428c96['class'](_0x476e10['DYYOX']),_0x50b70c=_0x428c96['class'](_0x476e10['MrmgQ']),_0x529494=_0x428c96['class'](_0x476e10['qfjXb']),_0x10def1=_0x428c96['class'](_0x476e10['TdDEc']),_0x541969=_0x428c96['class'](_0x476e10['enhsW']),_0x5ecf1d=_0x428c96['class'](_0x476e10['ipaJN']),_0x261aab=_0x428c96['class'](_0x476e10['qUqHy']),_0x2a57e3=_0x1447aa['class'](_0x476e10['BJqkN']),_0x44c8fe=_0x1447aa['class'](_0x476e10['UhsCU']),_0x1d3a80=_0x1447aa['class'](_0x476e10['yMBQI']),_0x58eca4=_0x1447aa['class'](_0x476e10['GsekQ']),_0x602a9f=_0x428c96['class'](_0x476e10['qbymt']),_0x46d178=_0xa03cc7['class'](_0x476e10['PEQIp']),_0x1e90c3=_0x46d178,_0x2b2aa3=_0x45df0a['class'](_0x476e10['UEILM']),_0x26d1eb=_0x3dd734['class'](_0x476e10['koqqs']),_0x1f4de3=_0x3dd734['class'](_0x476e10['pYJyE']),_0x1c8d47=_0x3dd734['class'](_0x476e10['rbtsG']),_0x3d5ee4=_0x8fef9f['class'](_0x476e10['GrvDC']),_0x199f18=_0x2f5cd1['field'](_0x476e10['stYEa'])['value'],_0x479011=_0x541969['method'](_0x476e10['TBCJz'])['invoke'](Il2Cpp['string'](_0x476e10['WxNkX'])),_0x41b7a8=_0x541969['method'](_0x476e10['TBCJz'])['invoke'](Il2Cpp['string'](_0x476e10['UrykY'])),_0x4c14b4=_0xe4d316['field'](_0x476e10['vkWwE'])['value'],_0x268d36=_0xe4d316['field'](_0x476e10['cAbGj'])['value'],_0x554b79=_0x4088e6['field'](_0x476e10['lhGVz'])['value'],_0x28a850=_0x199f18['field'](_0x476e10['dqoMf'])['value'],_0x35ade8=_0x199f18['field'](_0x476e10['gOCqt'])['value'],_0x33fb14=_0x199f18['field'](_0x476e10['vfsAm'])['value'],_0x376315=_0x199f18['field'](_0x476e10['jAvkk'])['value'],_0x79991c=_0x50b70c['method'](_0x476e10['nkPOg'],-0xe9a+0xff8+-0x1*0x15d)['inflate'](_0x3d5ee4)['invoke'](Il2Cpp['string'](_0x476e10['ICSPz']));
    function _0x5a6201(_0x49e82b) {
        const _0x1f4ea7=_0x240047;
        _0x1f7740['method'](_0x476e10['iBVau'],-0x210d*-0x1+-0xb4d*-0x2+-0x37a6)['invoke'](_0x49e82b);
    }
    function _0x2e156d(_0x15fc2a,_0x38fe80) {
        const _0x5f2579=_0x240047;
        return _0x15fc2a['method'](_0x476e10['BGTMU'],0x1d7a+0x24c4+-0x423d)['inflate'](_0x38fe80)['invoke']();
    }
    function _0x35440f(_0xef5211,_0x215f34) {
        const _0x4b6219=_0x240047;
        return _0xef5211['method'](_0x476e10['sLQwt'],0x5df+-0xd*0x10e+0x7d7)['inflate'](_0x215f34)['invoke']();
    }
    function _0x225333(_0x2e8190,_0xe5b42e) {
        const _0x43ec26=_0x240047;
        return _0x2e8190['method'](_0x476e10['qwAqQ'],-0x236e+-0x15bf+-0xd*-0x466)['inflate'](_0xe5b42e)['invoke']();
    }
    function _0xc4cf2f(_0x489a9a) {
        const _0x54fc5f=_0x240047;
        return _0x489a9a['method'](_0x476e10['JvTJW'])['invoke']();
    }
    function _0x197b01(_0x497b9d) {
        const _0x5ea4a4=_0x240047;
        return _0x497b9d['method'](_0x476e10['qTups'])['invoke']();
    }
    const _0x1ce6f9=Il2Cpp['domain']['assembly'](_0x476e10['ZfVVA'])['image']['class'](_0x476e10['XmSpt']),_0x2f880d=Il2Cpp['reference'](Il2Cpp['domain']['assembly'](_0x476e10['Fsjtd'])['image']['class'](_0x476e10['Fdboq'])['alloc']());
    let _0x594aca=null,_0x43c60b='',_0x4bfb9a=0x1*-0x221b+0x2482+-0x7b*0x5;
    function _0x5b9456(_0x3aae4b,_0x29ce9f,_0x3f89bc) {
        const _0x1c801d=_0x240047,_0xe76780= {
            'zqSIL':_0x476e10['BPbnC'],'UvQrZ':function(_0x28ca62,_0x3c4b57) {
                const _0x13f1b8=_0x1c801d;
                return _0x476e10['czDGi'](_0x28ca62,_0x3c4b57);
            },
            'qeUIz':_0x476e10['DzTBa'],'sKSos':function(_0x471753,_0x10ae15) {
                const _0x5b01e2=_0x1c801d;
                return _0x476e10['CDBrt'](_0x471753,_0x10ae15);
            },
            'HNwtw':function(_0x5dfdd9,_0x837615) {
                const _0x309907=_0x1c801d;
                return _0x476e10['wwKEr'](_0x5dfdd9,_0x837615);
            },
            'pegZK':_0x476e10['ysFgC'],'OytTV':function(_0x34a451,_0x14532f) {
                const _0x26210a=_0x1c801d;
                return _0x476e10['NSFer'](_0x34a451,_0x14532f);
            },
            'mWTHQ':function(_0x5d4187,_0x4ca16a) {
                const _0x258817=_0x1c801d;
                return _0x476e10['UnErC'](_0x5d4187,_0x4ca16a);
            }
        };
        try {
            const _0x2d10e7=_0x1e0b92['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['RhZfj'])['invoke']();
            if(!_0x2d10e7||_0x2d10e7['isNull']())return null;
            const _0x16016f=_0x2d10e7['field'](_0x476e10['kWNSW'])['value']['field'](_0x476e10['cULYi'])['value']['field'](_0x476e10['LVBav'])['value'],_0x46a069=_0x16016f['method'](_0x476e10['lMNyg'])['invoke']();
            for(let _0x413121=-0x17*-0xeb+0x1453+-0x2970;
            _0x476e10['kdemC'](_0x413121,_0x46a069);
            _0x413121++) {
                try {
                    const _0x56eceb=_0x16016f['method'](_0x476e10['XJNtT'])['invoke'](_0x413121),_0x2601ac=_0x56eceb['method'](_0x476e10['uWKdC'])['invoke']()['toString']();
                    if(_0x2601ac['includes'](_0x3aae4b)) {
                        const _0x3ae1cd=_0x56eceb['method'](_0x476e10['NmKJA'])['invoke']();
                        if(!_0x3ae1cd||_0x3ae1cd['isNull']())return null;
                        const _0x3b1b06=_0x4de2ae=> {
                            const _0x561fa9=_0x1c801d;
                            if(_0x4de2ae['class']['isEnum']||_0x4de2ae['isPrimitive'])return 0x5*-0xc1+-0x1*-0xc01+0x1f*-0x44;
                            if(!_0x4de2ae['class']['isValueType'])return _0x2f880d;
                            const _0x45578b=_0x4de2ae['class']['fields']['filter'](_0x2e6729=>!_0x2e6729['isStatic']);
                            if(_0x476e10['czDGi'](_0x45578b['length'],0x1b*-0xf8+-0xeb*0xe+0x2702))return-0x1b6e+0x319+-0x1855*-0x1;
                            return _0x45578b['map'](_0x442d04=>_0x3b1b06(_0x442d04['type']));
                        },
                        _0x320f35=(_0xaf4be1,_0x4a2687,_0x484cbb)=> {
                            const _0x3d81a0=_0x1c801d,_0x4b8fcd=_0xaf4be1['class']['fields']['filter'](_0x166321=>!_0x166321['isStatic']);
                            return _0x4b8fcd['map'](_0xfb09a6=> {
                                const _0x239a49=_0x3d81a0,_0x38bd48=_0xfb09a6['name']['toLowerCase']();
                                if(_0x38bd48['includes'](_0xe76780['zqSIL']))return _0x4a2687?-0x1f43*-0x1+0x2616+-0x4558:0x1*0x116b+0x6b2+0x181d*-0x1;
                                if(_0xe76780['UvQrZ'](_0x38bd48,_0xe76780['qeUIz']))return _0x4a2687?_0x484cbb:_0xe76780['sKSos'](_0x3b1b06,_0xfb09a6['type']);
                                return _0xe76780['HNwtw'](_0x3b1b06,_0xfb09a6['type']);
                            }
                            );
                        },
                        _0x5ae6aa=(_0x282c53,_0x51f1dd)=> {
                            const _0x3e865b=_0x1c801d;
                            if(_0xe76780['UvQrZ'](typeof _0x51f1dd,_0xe76780['pegZK']))return _0x51f1dd?-0xe*-0x141+0x14*-0x144+-0x7c3*-0x1:-0x854+0x3*-0x448+0x152c;
                            if(_0xe76780['OytTV'](_0x51f1dd,Il2Cpp['ValueType'])) {
                                const _0x48e4d2=_0x282c53['class']['fields']['filter'](_0x2d354e=>!_0x2d354e['isStatic']);
                                if(_0xe76780['mWTHQ'](_0x48e4d2['length'],-0x237+-0x1*-0x1222+-0xfeb))return-0x2e1+-0xe8*0x18+-0x1e5*-0xd;
                                return _0x48e4d2['map'](_0x55a127=>_0x5ae6aa(_0x55a127['type'],_0x55a127['bind'](_0x51f1dd)['value']));
                            }
                            if(Array['isArray'](_0x51f1dd))return _0x51f1dd['map'](_0x29b9d3=>_0x5ae6aa(_0x282c53,_0x29b9d3));
                            return _0x51f1dd;
                        },
                        _0x25e38b=(_0x5586db,_0xe0fad9)=> {
                            const _0x5e252c=_0x1c801d;
                            return _0x476e10['sYrWh'](_0x320f35,_0x5586db,!![],_0x476e10['MPZmC'](_0x5ae6aa,_0xe0fad9['type'],_0xe0fad9));
                        };
                        let _0x1a1a69=null;
                        for(const _0x583044 of _0x2d10e7['method'](_0x476e10['vFQqx'])['overloads']()) {
                            if(_0x476e10['RwyBa'](_0x583044['parameterCount'],0x1087+-0x1ea2+-0x1*-0xe21)||_0x583044['isGeneric'])continue;
                            const _0x5f09f4=_0x583044['parameters'];
                            if(_0x5f09f4[-0x234b+-0x2458+0x47a3]['type']['name']['includes'](_0x476e10['NeMHI'])&&_0x5f09f4[0x2fe*-0xd+-0x1a32+0x4119]['type']['name']['startsWith'](_0x476e10['ROVVx'])&&_0x5f09f4[-0x249c+-0x24a2+-0x11*-0x44f]['type']['name']['includes'](_0x476e10['QlcUr'])&&_0x5f09f4[-0x2286+-0x761*-0x1+0x1b27]['type']['name']['startsWith'](_0x476e10['ROVVx'])&&_0x5f09f4[0x17d5+0x3c*0x33+0x23c7*-0x1]['type']['name']['includes'](_0x476e10['yYEnS'])&&_0x5f09f4[0xd1c+0x1397+-0x20b0]['type']['name']['startsWith'](_0x476e10['ROVVx'])&&_0x5f09f4[-0x109f+0x1693+0x5f1*-0x1]['type']['name']['includes'](_0x476e10['FuqyM'])&&_0x5f09f4[-0x751*-0x4+0x70*-0x13+-0x14f0]['type']['name']['includes'](_0x476e10['EvbOE'])&&_0x5f09f4[-0x79b+0x255*-0x3+0x13*0xc5]['type']['name']['includes'](_0x476e10['qswjV'])) {
                                _0x1a1a69=_0x583044;
                                break;
                            }
                        }
                        if(!_0x1a1a69)return null;
                        const _0x11bbee=_0x476e10['MPZmC'](_0x25e38b,_0x1a1a69['parameters'][-0x61*-0x2b+-0x982+-0x1c*0x3e]['type'],_0x29ce9f),_0x3bbab5=_0x476e10['xPfzf'](_0x25e38b,_0x1a1a69['parameters'][-0x1d1e+-0x319+0x1*0x2039]['type'],_0x3f89bc),_0x54a4c1=_0x476e10['uTbxE'](_0x320f35,_0x1a1a69['parameters'][0x24ab+0x68*-0xe+0x2*-0xf7c]['type'],![],_0x476e10['wwKEr'](_0x3b1b06,_0x1a1a69['parameters'][0x2*0xbe3+-0x1*0x16af+0xc*-0x17]['type'])),_0x522a90=_0x1a1a69['parameters'][0x137e*-0x2+0xc22+-0x16a*-0x13]['type']['class']['isValueType']?_0x476e10['pUqkT'](_0x3b1b06,_0x1a1a69['parameters'][-0x2*0xeb7+0x50d+0x1865]['type']):_0x2f880d;
                        return _0x1a1a69['bind'](_0x2d10e7)['invoke'](_0x3ae1cd,_0x11bbee,_0x3bbab5,_0x54a4c1,_0x522a90,-0x1577+0x13*0x1a5+0x4*-0x272);
                    }
                }
                catch(_0x3cde78) {
                }
            }
        }
        catch(_0x55272d) {
            console['error'](_0x476e10['mAIPj'](_0x476e10['rOelS'],_0x55272d));
        }
        return null;
    }
    function n5SpawnItemAt(_itemId, _pos, _rot){
        try {
            const PrefabGen = _0xa03cc7['class']('AnimalCompany.PrefabGenerator');
            const _sid=String(_itemId||'').replace(/^item_prefab\//,'');
            const _ids=[_sid];
            if(_sid.indexOf('item_')===0)_ids.push(_sid.substring(5));
            _ids.push('item_prefab/'+_sid);
            for(const _id of _ids){
                try{
                    PrefabGen['method']('SpawnItemAsync',4)['overload'](
                        'System.String',
                        'UnityEngine.Vector3',
                        'UnityEngine.Quaternion',
                        'Fusion.NetworkObjectSpawnDelegate'
                    )['invoke'](Il2Cpp['string'](_id), _pos, _rot || _0x554b79, _0x2f880d);
                    return true;
                }catch(_){}
            }
            return false;
        } catch(_e){
            console.error('[N5 SpawnItemAt scoped]', _e);
            return false;
        }
    }
    function n5SpawnItemObjectAt(_itemId, _pos, _rot){
        try{
            const _id=String(_itemId||'').replace(/^item_prefab\//,'');
            let _obj=null;
            try{_obj=_0x1e0b92['method'](_0x476e10['uZRqq'],4)['invoke'](Il2Cpp['string']('item_prefab/'+_id),_pos,_rot||_0x554b79,_0x2f880d);}catch(_){}
            if(!_obj||(_obj['handle']&&_obj['handle']['isNull']())){
                try{_obj=_0x5b9456('item_prefab/'+_id,_pos,_rot||_0x554b79);}catch(_){}
            }
            if(!_obj||(_obj['handle']&&_obj['handle']['isNull']()))return null;
            return _obj;
        }catch(_e){console.error('[N5 SpawnItemObjectAt scoped]',_e);return null;}
    }
    function n5SpawnItemSyncAt(_itemId,_pos,_rot){
        try{
            const _id=String(_itemId||'').replace(/^item_prefab\//,'');
            const _ids=[_id];
            if(_id.indexOf('item_')===0)_ids.push(_id.substring(5));
            _ids.push('item_prefab/'+_id);
            const PrefabGen=_0xa03cc7['class']('AnimalCompany.PrefabGenerator');
            let _obj=null;
            for(const _tryId of _ids){
                try{
                    const _pref=PrefabGen['method']('GetItemPrefab',1)['invoke'](Il2Cpp['string'](_tryId));
                    if(_pref&&!_pref['handle']['isNull']()){
                        _obj=PrefabGen['method']('SpawnItem',4)['overload']('AnimalCompany.GrabbableItemPrefab','UnityEngine.Vector3','UnityEngine.Quaternion','Fusion.OnBeforeSpawned')['invoke'](_pref,_pos,_rot||_0x554b79,_0x2f880d);
                    }
                }catch(_){}
                if(_obj&&(!_obj['handle']||!_obj['handle']['isNull']()))break;
                try{_obj=PrefabGen['method']('SpawnItem',4)['overload']('System.String','UnityEngine.Vector3','UnityEngine.Quaternion','Fusion.OnBeforeSpawned')['invoke'](Il2Cpp['string'](_tryId),_pos,_rot||_0x554b79,_0x2f880d);}catch(_){}
                if(_obj&&(!_obj['handle']||!_obj['handle']['isNull']()))break;
            }
            return _obj&&(!_obj['handle']||!_obj['handle']['isNull']())?_obj:null;
        }catch(_e){console.error('[N5 SpawnItemSyncAt]',_e);return null;}
    }
    function n5SpawnConfiguredItemAt(_itemId,_pos,_rot){
        const _obj=n5SpawnItemSyncAt(_itemId,_pos,_rot)||n5SpawnItemObjectAt(_itemId,_pos,_rot);
        if(_obj){
            if(n5RandomSpawnConfig)n5ApplyRandomItemConfig(_obj);
            return _obj;
        }
        return n5SpawnItemAt(_itemId,_pos,_rot||_0x554b79)?true:null;
    }
    function n5FreezeSpawnedObject(_obj,_pos){
        if(!_obj||_obj===true)return false;
        try{
            const _tf=n5GetSpawnedObjectTransform(_obj);
            if(_tf&&!_tf['isNull']()){
                try{_tf['method'](_0x476e10['ZKeBc'])['invoke'](_pos);}catch(_){}
            }
        }catch(_){}
        try{
            const _go=_obj['method'](_0x476e10['ZqQpU'])['invoke']();
            if(!_go||_go['isNull']())return false;
            try{
                const _cols=_go['method']('GetComponentsInChildren',1)['inflate'](_0x44c8fe)['invoke'](true);
                for(let _i=0;_cols&&_i<_cols['length'];_i++){
                    try{
                        const _c=_cols['get'](_i);
                        if(_c&&!_c['handle']['isNull']()){
                            try{_c['method'](_0x476e10['iYafP'])['invoke'](true);}catch(_){}
                            try{_c['method']('set_enabled')['invoke'](false);}catch(_){}
                        }
                    }catch(_){}
                }
            }catch(_){}
            try{
                const _rbs=_go['method']('GetComponentsInChildren',1)['inflate'](_0x1d3a80)['invoke'](true);
                for(let _i=0;_rbs&&_i<_rbs['length'];_i++){
                    try{
                        const _rb=_rbs['get'](_i);
                        if(_rb&&!_rb['handle']['isNull']()){
                            try{_rb['method']('set_velocity')['invoke']([0,0,0]);}catch(_){}
                            try{_rb['method']('set_angularVelocity')['invoke']([0,0,0]);}catch(_){}
                            try{_rb['method']('set_useGravity')['invoke'](false);}catch(_){}
                            try{_rb['method']('set_detectCollisions')['invoke'](false);}catch(_){}
                            try{_rb['method']('set_isKinematic')['invoke'](true);}catch(_){}
                        }
                    }catch(_){}
                }
            }catch(_){}
            return true;
        }catch(_){return false;}
    }
    function n5SpawnHellOreAt(_pos,_rot){
        const _obj=n5SpawnConfiguredItemAt('item_ore_hell',_pos,_rot||_0x554b79);
        n5FreezeSpawnedObject(_obj,_pos);
        return _obj;
    }
    function n5SpawnContainerItemAt(_itemId,_pos,_rot){
        const _obj=n5SpawnItemSyncAt(_itemId,_pos,_rot)||n5SpawnItemObjectAt(_itemId,_pos,_rot);
        if(_obj)return _obj;
        try{n5SpawnItemAt(_itemId,_pos,_rot||_0x554b79);}catch(_){}
        return null;
    }
    function n5WindowsDocumentsPath(){
        try{
            const _env=Il2Cpp.corlib.class('System.Environment');
            const _up=n5ManagedString(_env['method']('GetEnvironmentVariable',1)['invoke'](Il2Cpp.string('USERPROFILE')));
            if(_up&&_up!=='null'&&_up!=='undefined')return _up.replace(/[\\\/]+$/,'')+'\\Documents';
        }catch(_){}
        try{
            const _env=Il2Cpp.corlib.class('System.Environment');
            const _sf=_env['nested']('SpecialFolder')['field']('MyDocuments')['value'];
            const _doc=n5ManagedString(_env['method']('GetFolderPath',1)['invoke'](_sf));
            if(_doc&&_doc!=='null'&&_doc!=='undefined')return _doc;
        }catch(_){}
        return 'C:\\Users\\Public\\Documents';
    }
    function n5EnsureBlueprintDir(){
        const _dir=n5WindowsDocumentsPath()+'\\bp';
        try{
            const _dirCls=Il2Cpp.corlib.class('System.IO.Directory');
            if(!_dirCls['method']('Exists',1)['invoke'](Il2Cpp.string(_dir)))_dirCls['method']('CreateDirectory',1)['invoke'](Il2Cpp.string(_dir));
        }catch(_e){console.error('[N5 Blueprint mkdir]',_e);}
        return _dir;
    }
    function n5BlueprintDirs(){
        const _win=n5EnsureBlueprintDir();
        return [
            _win,
            '/sdcard/Documents/bp',
            '/sdcard/Download/bp',
            '/storage/emulated/0/Documents/bp',
            '/storage/emulated/0/Download/bp'
        ];
    }
    function n5ManagedString(_s){
        try{if(_s&&typeof _s.content==='string')return _s.content;}catch(_){}
        try{if(_s&&_s['content'])return String(_s['content']);}catch(_){}
        return String(_s);
    }
    function n5ReadTextFile(_path){
        let _txt=null;
        try{
            const _fileCls=Il2Cpp.corlib.class('System.IO.File');
            if(!_fileCls['method']('Exists',1)['invoke'](Il2Cpp.string(_path)))return null;
            _txt=n5ManagedString(_fileCls['method']('ReadAllText',1)['invoke'](Il2Cpp.string(_path)));
        }catch(_e){console.error('[N5 Blueprint read]',_e);}
        return _txt;
    }
    function n5RefreshBlueprintFiles(){
        const _out=[];
        try{
            const _dirCls=Il2Cpp.corlib.class('System.IO.Directory');
            const _pathCls=Il2Cpp.corlib.class('System.IO.Path');
            const _dirs=n5BlueprintDirs();
            for(const _dir of _dirs){
                try{
                    if(!_dirCls['method']('Exists',1)['invoke'](Il2Cpp.string(_dir)))continue;
                    const _files=_dirCls['method']('GetFiles',2)['invoke'](Il2Cpp.string(_dir),Il2Cpp.string('*.json'));
                    for(let _i=0;_files&&_i<_files.length;_i++){
                        try{
                            const _entry=_files.get?_files.get(_i):_files[_i];
                            const _path=n5ManagedString(_entry);
                            if(!_path||_path.indexOf('.json')<0)continue;
                            const _name=n5ManagedString(_pathCls['method']('GetFileName',1)['invoke'](Il2Cpp.string(_path)));
                            _out.push({name:_name,path:_path});
                        }catch(_){}
                    }
                    if(_out.length>0)break;
                }catch(_){}
            }
            if(_out.length===0){
                const _fileCls=Il2Cpp.corlib.class('System.IO.File');
                const _direct=n5EnsureBlueprintDir()+'\\blueprint example.json';
                try{
                    if(_fileCls['method']('Exists',1)['invoke'](Il2Cpp.string(_direct)))_out.push({name:'blueprint example.json',path:_direct});
                }catch(_){}
            }
        }catch(_e){console.error('[N5 Blueprint scan]',_e);}
        n5BlueprintFiles=_out;
        return _out;
    }
    function n5VecAdd(_a,_b){return [(_a[0]||0)+(_b[0]||0),(_a[1]||0)+(_b[1]||0),(_a[2]||0)+(_b[2]||0)];}
    function n5ScaleVec(_a,_s){return [(_a[0]||0)*_s,(_a[1]||0)*_s,(_a[2]||0)*_s];}
    function n5BlueprintVec(_v){
        if(Array.isArray(_v))return [_v[0]||0,_v[1]||0,_v[2]||0];
        if(_v&&typeof _v==='object')return [_v.x||0,_v.y||0,_v.z||0];
        return [0,0,0];
    }
    function n5BlueprintQuat(_q){
        if(!_q)return _0x554b79;
        if(Array.isArray(_q)){
            try{const _qq=_0x4088e6['alloc']();_qq['method']('.ctor')['overload']('System.Single','System.Single','System.Single','System.Single')['invoke'](_q[0]||0,_q[1]||0,_q[2]||0,(_q.length>3?_q[3]:1)||0);return _qq;}catch(_){return [_q[0]||0,_q[1]||0,_q[2]||0,(_q.length>3?_q[3]:1)||0];}
        }
        if(typeof _q==='object'){
            try{const _qq=_0x4088e6['alloc']();_qq['method']('.ctor')['overload']('System.Single','System.Single','System.Single','System.Single')['invoke'](_q.x||0,_q.y||0,_q.z||0,('w'in _q?_q.w:1)||0);return _qq;}catch(_){return [_q.x||0,_q.y||0,_q.z||0,('w'in _q?_q.w:1)||0];}
        }
        return _0x554b79;
    }
    function n5ApplyBlueprintItemConfig(_obj,_cfg){
        if(!_obj||!_cfg)return;
        try{
            let _go=_obj;
            try{_go=_obj['method'](_0x476e10['ZqQpU'])['invoke']();}catch(_){}
            let _gi=null;
            try{_gi=_go['method'](_0x476e10['BGTMU'],1)['inflate'](_0xaf18fa)['invoke']();}catch(_){}
            if(!_gi||(_gi['handle']&&_gi['handle']['isNull']()))try{_gi=_obj['method'](_0x476e10['BGTMU'],1)['inflate'](_0xaf18fa)['invoke']();}catch(_){}
            if(_gi&&(!_gi['handle']||!_gi['handle']['isNull']())){
                if(typeof _cfg.scaleModifier==='number')try{_gi['method'](_0x476e10['LoUSE'])['invoke'](_cfg.scaleModifier);}catch(_){}
                if(typeof _cfg.colorHue==='number')try{_gi['method'](_0x476e10['GBtXF'])['invoke'](_cfg.colorHue);}catch(_){}
                if(typeof _cfg.colorSaturation==='number')try{_gi['method'](_0x476e10['ueDiE'])['invoke'](_cfg.colorSaturation);}catch(_){}
            }
        }catch(_){}
    }
    function n5SpawnBlueprintNode(_node,_origin,_scale,_countObj){
        const _cfg=_node.item||_node;
        const _id=String((_cfg&&_cfg.itemID)||_node.itemID||'item_backpack_green').replace(/^item_prefab\//,'');
        const _local=Array.isArray(_node.pos)?_node.pos:[0,0,0];
        const _rot=Array.isArray(_node.rot)?_node.rot:_0x554b79;
        const _pos=n5VecAdd(_origin,n5ScaleVec(_local,_scale));
        if(n5SpawnItemAt(_id,_pos,_rot))_countObj.count++;
        const _kids=Array.isArray(_node.stuckChildren)?_node.stuckChildren:[];
        for(const _kid of _kids)n5SpawnBlueprintNode(_kid,_pos,_scale,_countObj);
        return true;
    }
    function n5QueueBlueprintNode(_node,_origin,_scale,_queue){
        const _cfg=_node.item||_node;
        const _id=String((_cfg&&_cfg.itemID)||_node.itemID||'item_backpack_green').replace(/^item_prefab\//,'');
        const _local=n5BlueprintVec(_node.pos||_node.position||_node.localPosition);
        const _rot=n5BlueprintQuat(_node.rot||_node.rotation||_node.localRotation);
        const _pos=n5VecAdd(_origin,n5ScaleVec(_local,_scale));
        _queue.push({id:_id,pos:_pos,rot:_rot,cfg:_cfg});
        const _kids=Array.isArray(_node.stuckChildren)?_node.stuckChildren:(Array.isArray(_node.children)?_node.children:[]);
        for(const _kid of _kids)n5QueueBlueprintNode(_kid,_pos,_scale,_queue);
    }
    function n5ProcessBlueprintQueue(){
        if(!n5BlueprintQueue||n5BlueprintQueue.length===0)return;
        let _spawned=0;
        while(n5BlueprintQueue.length>0&&_spawned<8){
            const _n=n5BlueprintQueue.shift();
            try{
                const _obj=n5SpawnItemSyncAt(_n.id,_n.pos,_n.rot)||n5SpawnItemObjectAt(_n.id,_n.pos,_n.rot);
                if(_obj)n5ApplyBlueprintItemConfig(_obj,_n.cfg);
                else n5SpawnItemAt(_n.id,_n.pos,_n.rot);
                _spawned++;
            }catch(_){}
        }
        if(n5BlueprintQueue.length===0){currentNotification='Blueprint finished';notifactionResetTime=time+2;}
    }
    function n5BlueprintGunOrigin(){
        try{
            const _g=_0x22649c(),_p=_g&&_g['point'];
            if(_p)return _p;
        }catch(_){}
        try{
            const _rh=_0x199f18['field'](_0x476e10['gOCqt'])['value']||_0x35ade8;
            const _hp=_rh['method'](_0x476e10['YApVv'])['invoke']();
            const _hf=_rh['method'](_0x476e10['itVwD'])['invoke']();
            return n5VecAdd(_hp,n5ScaleVec(_hf,1.5));
        }catch(_){}
        return n5LocalPlayerPos?n5LocalPlayerPos():[0,0,0];
    }
    function n5SpawnBlueprintFile(_path,_originOverride=null){
        try{
            const _raw=n5ReadTextFile(_path);
            if(!_raw){currentNotification='Blueprint file not found';notifactionResetTime=time+3;return;}
            const _bp=JSON.parse(_raw);
            const _items=Array.isArray(_bp.items)?_bp.items:[_bp];
            const _origin=_originOverride||n5BlueprintGunOrigin();
            const _queue=[];
            for(const _it of _items)n5QueueBlueprintNode(_it,_origin,0.025,_queue);
            n5BlueprintQueue=_queue;
            currentNotification='Blueprint queued: '+_queue.length+' items';notifactionResetTime=time+3;
        }catch(_e){currentNotification='Blueprint spawn failed';notifactionResetTime=time+3;console.error('[N5 Blueprint spawn]',_e);}
    }
    function n5SelectedBlueprintFile(){
        const _files=n5BlueprintFiles.length?n5BlueprintFiles:n5RefreshBlueprintFiles();
        if(!_files.length)return null;
        n5BlueprintIndex=((n5BlueprintIndex%_files.length)+_files.length)%_files.length;
        return _files[n5BlueprintIndex];
    }
    function n5RunBlueprintGun(){
        if(!rightGrab||!rightTrigger||time<n5BlueprintGunDelay)return;
        n5BlueprintGunDelay=time+0.45;
        const _file=n5SelectedBlueprintFile();
        if(!_file){currentNotification='No blueprint jsons in '+n5EnsureBlueprintDir();notifactionResetTime=time+3;return;}
        n5SpawnBlueprintFile(_file.path,n5BlueprintGunOrigin());
    }
    function n5AddItemObjectToContainer(_itemObj,_container){
        try{
            if(!_itemObj||(_itemObj['handle']&&_itemObj['handle']['isNull']())||!_container||_container['handle']['isNull']())return false;
            let _go=_itemObj;
            try{_go=_itemObj['method'](_0x476e10['ZqQpU'])['invoke']();}catch(_){}
            let _gi=null,_ig=null;
            for(const _target of [_go,_itemObj]){
                if(!_target||(_target['handle']&&_target['handle']['isNull']()))continue;
                if(!_gi||(_gi['handle']&&_gi['handle']['isNull']()))try{_gi=_target['method'](_0x476e10['BGTMU'],1)['inflate'](_0xaf18fa)['invoke']();}catch(_){}
                if(!_ig||(_ig['handle']&&_ig['handle']['isNull']()))try{_ig=_target['method'](_0x476e10['BGTMU'],1)['inflate'](_0x3e7a10)['invoke']();}catch(_){}
            }
            const _addObj=(_gi&&(!_gi['handle']||!_gi['handle']['isNull']()))?_gi:_ig;
            if(!_addObj||(_addObj['handle']&&_addObj['handle']['isNull']()))return false;
            for(const _obj of [_gi,_ig,_addObj]){
                if(!_obj||(_obj['handle']&&_obj['handle']['isNull']()))continue;
                try{_obj['method']('set_allowAddToBag')['invoke'](true);}catch(_){}
                try{_obj['field']('_allowAddToBag')['value']=true;}catch(_){}
                try{_obj['method']('set_allowAddToQuiver')['invoke'](true);}catch(_){}
                try{_obj['field']('_allowAddToQuiver')['value']=true;}catch(_){}
                try{_obj['method']('set_disableAutoDespawnTimer')['invoke'](true);}catch(_){}
                try{_obj['field']('_disableAutoDespawnTimer')['value']=true;}catch(_){}
            }
            for(const _m of ['AddToBagInternal','AddToContainerInternal','AttachToContainer','SetContainer','TryAddToBag']){
                try{_addObj['method'](_m)['invoke'](_container);return true;}catch(_){}
            }
            for(const _m of ['TryAddItem','TryToDrop','CheckToAddItem','HandleTryToDrop','AddItem','Add','InsertItem','AddGrabbable','TryAddGrabbable']){
                try{const _r=_container['method'](_m)['invoke'](_addObj);if(_r===undefined||_r)return true;}catch(_){}
                if(_gi&&(!_gi['handle']||!_gi['handle']['isNull']()))try{const _r=_container['method'](_m)['invoke'](_gi);if(_r===undefined||_r)return true;}catch(_){}
                if(_ig&&(!_ig['handle']||!_ig['handle']['isNull']()))try{const _r=_container['method'](_m)['invoke'](_ig);if(_r===undefined||_r)return true;}catch(_){}
            }
            try{
                const _itemTf=_go&&(!_go['handle']||!_go['handle']['isNull']())?_go['method'](_0x476e10['JvTJW'])['invoke']():_0xc4cf2f(_itemObj);
                const _conTf=_container['method'](_0x476e10['JvTJW'])['invoke']();
                const _base=_conTf['method'](_0x476e10['YApVv'])['invoke']();
                const _off=[(Math.random()-0.5)*0.18,0.08+Math.random()*0.18,(Math.random()-0.5)*0.18];
                _itemTf['method']('SetParent')['invoke'](_conTf,true);
                _itemTf['method'](_0x476e10['ZKeBc'])['invoke']([(_base[0]||0)+_off[0],(_base[1]||0)+_off[1],(_base[2]||0)+_off[2]]);
                try{
                    const _rb=_go['method'](_0x476e10['BGTMU'],1)['inflate'](_0x1d3a80)['invoke']();
                    if(_rb&&!_rb['handle']['isNull']()){_rb['method'](_0x476e10['cLyfd'])['invoke'](true);try{_rb['method']('set_useGravity')['invoke'](false);}catch(_){}}
                }catch(_){}
                try{
                    const _cols=_go['method']('GetComponentsInChildren',1)['inflate'](_0x44c8fe)['invoke'](true);
                    for(let _ci=0;_cols&&_ci<_cols['length'];_ci++){try{const _c=_cols['get'](_ci);if(_c&&!_c['handle']['isNull']())_c['method']('set_enabled')['invoke'](false);}catch(_){}}
                }catch(_){}
                return true;
            }catch(_){}
            return false;
        }catch(_e){return false;}
    }
    function n5GetGameplayItemId(_obj){
        if(!_obj||(_obj['handle']&&_obj['handle']['isNull']()))return '';
        const _read=(v)=>{try{return v&&v['content']?String(v['content']):String(v||'');}catch(_){return '';}};
        try{const _id=_read(_obj['method']('get_itemID')['invoke']());if(_id)return _id;}catch(_){}
        try{const _id=_read(_obj['method']('get_id')['invoke']());if(_id)return _id;}catch(_){}
        try{const _id=_read(_obj['field']('_itemID')['value']);if(_id)return _id;}catch(_){}
        try{const _data=_obj['method']('get_itemData')['invoke']();const _id=_read(_data['method']('get_id')['invoke']());if(_id)return _id;}catch(_){}
        return '';
    }
    function n5IsContainerItemObject(_obj){
        const _id=n5GetGameplayItemId(_obj).replace(/^item_prefab\//,'').toLowerCase();
        return _id.indexOf('item_quiver')===0||_id.indexOf('item_backpack')===0;
    }
    function n5GetContainerFromItem(_obj){
        if(!_obj||(_obj['handle']&&_obj['handle']['isNull']()))return null;
        try{
            let _go=_obj;
            try{_go=_obj['method'](_0x476e10['ZqQpU'])['invoke']();}catch(_){}
            const _names=[
                'AnimalCompany.IGrabbableObjectContainer',
                'AnimalCompany.GrabbableObjectContainer',
                'AnimalCompany.GrabbableItemContainer',
                'AnimalCompany.ItemContainer',
                'AnimalCompany.BackpackContainer',
                'AnimalCompany.QuiverContainer',
                'AnimalCompany.Quiver',
                'AnimalCompany.BackpackItem',
                'AnimalCompany.Bag',
                'AnimalCompany.GrabbableBag',
                'AnimalCompany.GrabbableObjectDropHandler'
            ];
            for(const _name of _names){
                let _cls=null;
                if(!_cls)try{_cls=_0xa03cc7['class'](_name);}catch(_){}
                if(!_cls)continue;
                const _targets=[_obj,_go];
                for(const _t of _targets){
                    if(!_t||(_t['handle']&&_t['handle']['isNull']()))continue;
                    try{const _c=_t['method'](_0x476e10['BGTMU'],1)['inflate'](_cls)['invoke']();if(_c&&!_c['handle']['isNull']())return _c;}catch(_){}
                    try{const _c=_t['method']('GetComponentInChildren',1)['inflate'](_cls)['invoke'](true);if(_c&&!_c['handle']['isNull']())return _c;}catch(_){}
                    try{const _c=_t['method']('GetComponentInParent',1)['inflate'](_cls)['invoke']();if(_c&&!_c['handle']['isNull']())return _c;}catch(_){}
                }
            }
        }catch(_e){console.error('[N5 GetContainer]',_e);}
        return null;
    }
    function n5SpawnModdedQuiverAt(_pos,_id=itemIDs[itemIndex],_count=15){
        try{
            const _q=n5SpawnContainerItemAt('item_quiver',_pos,_0x554b79)||n5SpawnContainerItemAt('item_quiver_heart',_pos,_0x554b79);
            if(!_q){currentNotification='quiver spawn failed';notifactionResetTime=time+2;return false;}
            try{const _qc=n5GetContainerFromItem(_q);if(_qc){try{_qc['method']('set_capacity')['invoke'](18);}catch(_){}try{_qc['field']('_capacity')['value']=18;}catch(_){}}}catch(_){}
            n5ApplyRandomItemConfig(_q);
            const _con=n5GetContainerFromItem(_q);
            let _filled=0;
            const _fwd=_0x35ade8['method'](_0x476e10['itVwD'])['invoke']();
            const _right=_0x35ade8['method']('get_right')['invoke']();
            for(let _i=0;_i<_count;_i++){
                const _off=[
                    (_pos[0]||0)+(_right[0]||0)*(((_i%5)-2)*0.05)+(_fwd[0]||0)*0.04,
                    (_pos[1]||0)+0.05+Math.floor(_i/5)*0.05,
                    (_pos[2]||0)+(_right[2]||0)*(((_i%5)-2)*0.05)+(_fwd[2]||0)*0.04
                ];
                const _it=n5SpawnContainerItemAt(_id,_off,_0x554b79);
                if(!_it)continue;
                n5ApplyRandomItemConfig(_it);
                if(_con&&n5AddItemObjectToContainer(_it,_con))_filled++;
            }
            currentNotification='Modded quiver '+_filled+'/'+_count+' '+_id;notifactionResetTime=time+3;
            return true;
        }catch(_e){console.error('[N5 ModdedQuiver]',_e);currentNotification='modded quiver failed';notifactionResetTime=time+2;return false;}
    }
    function n5PlayVFXAt(_type,_pos,_rot=_0x554b79){
        try{
            const _v=(_type|0);
            if(_v>=1000)return n5PlayVisualAssetAt(_v-1000,_pos,_rot);
            const _runner=_0x40792d['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['WxggD'])['invoke']();
            try{_0x1e90c3['method']('Play',5)['overload']('AnimalCompany.NetworkVFXType','UnityEngine.Vector3','UnityEngine.Quaternion','System.Nullable`1<UnityEngine.Color32>','System.Single')['invoke'](_v,_pos,_rot,null,100.0);return true;}catch(_){}
            try{_0x1e90c3['method']('PlayLocal',5)['overload']('AnimalCompany.NetworkVFXType','UnityEngine.Vector3','UnityEngine.Quaternion','System.Nullable`1<UnityEngine.Color32>','System.Single')['invoke'](_v,_pos,_rot,null,100.0);}catch(_){}
            try{_0x1e90c3['method'](_0x476e10['JQevr'],5)['overload']('Fusion.NetworkRunner','AnimalCompany.NetworkVFXType','UnityEngine.Vector3','UnityEngine.Quaternion','System.Single')['invoke'](_runner,_v,_pos,_rot,100.0);return true;}catch(_){}
            try{_0x1e90c3['method'](_0x476e10['JQevr'],3)['invoke'](_runner,_v,_pos,_rot);return true;}catch(_){}
            try{_0x1e90c3['method'](_0x476e10['JQevr'],1)['invoke'](_runner,_v,_pos,_rot);return true;}catch(_){}
            try{return n5PlayVisualAssetAt(n5NetworkVFXToAsset(_v),_pos,_rot);}catch(_){}
        }catch(_e){console.error('[N5 VFX]',_e);}
        return false;
    }
    function n5NetworkVFXToAsset(_type){
        if(_type===0x2)return 47;
        if(_type===0x26)return 23;
        if(_type===0x2c)return 11;
        if(_type===0xa2)return 36;
        if(_type===0xb8)return 20;
        if(_type===0xb7)return 32;
        if(_type>=0x80&&_type<=0x82)return 45;
        if(_type===0x48)return 48;
        return 31;
    }
    function n5PlayVisualAssetAt(_assetId,_pos,_rot=_0x554b79){
        try{
            const _asset=_0xa03cc7['class']('AnimalCompany.EnumExtension_VisualEffectAsset')['method']('GetObject')['invoke'](_assetId|0);
            if(!_asset||(_asset['isNull']&&_asset['isNull']()))return false;
            const _go=_0x4464ae['method']('CreatePrimitive')['invoke'](3);
            try{_go['method']('set_name')['invoke'](Il2Cpp['string']('N5_VFX_'+(_assetId|0)));}catch(_){}
            const _tf=_0xc4cf2f(_go);
            try{_tf['method']('set_position')['invoke'](_pos);}catch(_){}
            try{_tf['method']('set_rotation')['invoke'](_rot);}catch(_){}
            try{_tf['method']('set_localScale')['invoke']([0.01,0.01,0.01]);}catch(_){}
            try{const _col=_0x2e156d(_go,_0x44c8fe);if(_col)_0x5a6201(_col);}catch(_){}
            try{const _rend=_0x2e156d(_go,_0x10def1);if(_rend)_0x5a6201(_rend);}catch(_){}
            const _vfxtype=Il2Cpp['domain']['assembly']('UnityEngine.VFXModule')['image']['class']('UnityEngine.VFX.VisualEffect');
            const _vfx=_0x225333(_go,_vfxtype);
            _vfx['method']('set_visualEffectAsset')['invoke'](_asset);
            try{_vfx['method']('Reinit')['invoke']();}catch(_){}
            try{_vfx['method']('Play')['invoke']();}catch(_){}
            try{_0x1f7740['method']('Destroy',2)['invoke'](_go,8.0);}catch(_){}
            return true;
        }catch(_e){console.error('[N5 VisualAssetVFX]',_e);}
        return false;
    }
    function n5PlayServerAudioAt(_sfxId,_pos){
        try{
            const _id=(_sfxId|0)&0x7fff;
            const _mgr=_0x40792d;
            let _played=false;
            try{_mgr['method']('PlaySFXLocal',5)['overload']('System.Int16','UnityEngine.Vector3','System.Single','System.Single','System.Single')['invoke'](_id,_pos,1.0,0.0,1.0);_played=true;}catch(_){}
            try{_mgr['method']('PlaySFXLocal',5)['overload']('System.Int16','UnityEngine.Vector3','System.Single','System.Single','System.Single')['invoke'](_id,n5LocalPlayerPos(),1.0,0.0,1.0);_played=true;}catch(_){}
            try{
                const _runner=_mgr['method']('get__currentRunner')['invoke']();
                _mgr['method']('RPC_PlaySFX')['invoke'](_runner,_id,1,_pos,1.0);
                _played=true;
            }catch(_rpcErr){}
            try{_mgr['method']('PlaySFXNetworked',4)['overload']('System.Int16','UnityEngine.Vector3','System.Single','AnimalCompany.AreaGroupID')['invoke'](_id,_pos,1.0,1);_played=true;}catch(_){}
            return _played;
        }catch(_e){console.error('[N5 ServerAudio]',_e);}
        return false;
    }
    function n5RunServerAudioGrip(){
        if(!rightGrab||time<n5ServerAudioDelay)return;
        n5ServerAudioDelay=time+0.18;
        try{const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();n5PlayServerAudioAt(n5ServerAudioId,_pos);}catch(_){}
    }
    function n5CreateGripPlatform(_isRight){
        let _obj=_isRight?n5RightPlatform:n5LeftPlatform;
        if(!_obj||(_obj['isNull']&&_obj['isNull']())){
            _obj=_0x4464ae['method']('CreatePrimitive')['invoke'](3);
            try{_obj['method']('set_layer')['invoke'](3);}catch(_){}
            try{const _rb=_obj['method'](_0x476e10['qwAqQ'],1)['inflate'](_0x1d3a80)['invoke']();_rb['method'](_0x476e10['cLyfd'])['invoke'](true);_rb['method']('set_useGravity')['invoke'](false);}catch(_){}
            try{const _mat=_obj['method'](_0x476e10['BGTMU'],1)['inflate'](_0x10def1)['invoke']()['method'](_0x476e10['ZPxAz'])['invoke']();_mat['method'](_0x476e10['frUDt'])['invoke'](_0x41b7a8);_mat['method'](_0x476e10['mlCnr'])['invoke'](_isRight?[1,0.4,0.2,0.9]:[0.2,0.6,1,0.9]);}catch(_){}
            if(_isRight)n5RightPlatform=_obj;else n5LeftPlatform=_obj;
        }
        return _obj;
    }
    function n5UpdateGripPlatforms(){
        for(const _side of [false,true]){
            const _grab=_side?rightGrab:leftGrab,_hand=_side?_0x35ade8:_0x28a850;
            const _obj=_side?n5RightPlatform:n5LeftPlatform;
            if(!_grab){try{if(_obj)_obj['method'](_0x476e10['mkqJb'])['invoke'](false);}catch(_){}continue;}
            try{
                const _p=_hand['method'](_0x476e10['YApVv'])['invoke']();
                const _rot=_hand['method'](_0x476e10['YqqIM'])['invoke']();
                const _plat=n5CreateGripPlatform(_side);
                const _tf=_plat['method'](_0x476e10['JvTJW'])['invoke']();
                _tf['method'](_0x476e10['ZKeBc'])['invoke']([(_p[0]||0),(_p[1]||0)-0.16,(_p[2]||0)]);
                try{_tf['method'](_0x476e10['yqzdi'])['invoke'](_rot);}catch(_){}
                try{_tf['method']('set_localScale')['invoke']([0.45,0.05,0.45]);}catch(_){}
                _plat['method'](_0x476e10['mkqJb'])['invoke'](true);
            }catch(_e){console.error('[N5 Platforms]',_e);}
        }
    }
    function n5DestroyGripPlatforms(){for(const _p of [n5LeftPlatform,n5RightPlatform])try{if(_p)_0x5a6201(_p);}catch(_){}n5LeftPlatform=null;n5RightPlatform=null;}
    function n5LaunchItemObject(_itemObj,_dir,_power){
        if(!_itemObj)return false;
        try{
            const _go=_itemObj['method'](_0x476e10['ZqQpU'])['invoke']();
            if(_go&&!_go['isNull']()){
                let _rb=null;
                try{_rb=_go['method'](_0x476e10['BGTMU'],1)['inflate'](_0x1d3a80)['invoke']();}catch(_){}
                if((!_rb||_rb['handle']['isNull']())&&_go){
                    try{_rb=_go['method']('GetComponentInChildren',1)['inflate'](_0x1d3a80)['invoke']();}catch(_){}
                }
                if(_rb&&!_rb['handle']['isNull']()){
                    try{_rb['method']('set_isKinematic')['invoke'](false);}catch(_){}
                    try{_rb['method']('set_detectCollisions')['invoke'](true);}catch(_){}
                    _rb['method'](_0x476e10['YeICc'],2)['invoke'](_0xe4d316['method'](_0x476e10['BGmZg'],2)['invoke'](_dir,_power),1);
                    return true;
                }
            }
        }catch(_){}
        try{_itemObj['method'](_0x476e10['GvlcC'])['invoke'](_0xe4d316['method'](_0x476e10['BGmZg'],2)['invoke'](_dir,_power));return true;}catch(_){}
        return false;
    }
    function n5SpawnMobAt(_mobId, _pos, _rot){
        try {
            n5EnableMobValidatorBypass();
            const PrefabGen = _0xa03cc7['class']('AnimalCompany.PrefabGenerator');
            const _beforeMobSpawn=n5GetBeforeMobSpawnDelegate();
            const _resolved=n5ResolveMobID(_mobId);
            if(_resolved===null){
                const _name=String(_mobId||'').replace(/^mob_prefab\//,'');
                const _fb=_0x5b9456(_name,_pos,_rot||_0x554b79)||_0x5b9456('mob_prefab/'+_name,_pos,_rot||_0x554b79);
                return !!_fb;
            }
            try{
                PrefabGen['method']('SpawnMobAsync',6)['overload'](
                    'AnimalCompany.MobID',
                    'UnityEngine.Vector3',
                    'UnityEngine.Quaternion',
                    'Fusion.NetworkRunner.OnBeforeSpawned',
                    'Fusion.NetworkObjectSpawnDelegate',
                    'System.String'
                )['invoke'](_resolved, _pos, _rot || _0x554b79, _beforeMobSpawn, _0x2f880d, Il2Cpp['string']('mod'));
                return true;
            }catch(_directErr){}
            try{
                PrefabGen['method']('SpawnMob',4)['invoke'](_resolved,_pos,_rot||_0x554b79,_0x2f880d);
                return true;
            }catch(_syncErr){}
            try{
                PrefabGen['method']('SpawnMob',5)['invoke'](_resolved,_pos,_rot||_0x554b79,_0x2f880d,Il2Cpp['string']('mod'));
                return true;
            }catch(_syncNamedErr){}
            try{
                PrefabGen['method']('SpawnMobNearbyAsync',6)['overload'](
                    'AnimalCompany.MobID',
                    'UnityEngine.Vector3',
                    'System.Single',
                    'Fusion.NetworkRunner.OnBeforeSpawned',
                    'Fusion.NetworkObjectSpawnDelegate',
                    'System.String'
                )['invoke'](_resolved, _pos, 8.0, _beforeMobSpawn, _0x2f880d, Il2Cpp['string']('mod'));
                return true;
            }catch(_nearbyErr){}
            PrefabGen['method']('SpawnMobNearbyPlayerAsync',5)['overload'](
                'AnimalCompany.MobID',
                'System.Single',
                'Fusion.NetworkRunner.OnBeforeSpawned',
                'Fusion.NetworkObjectSpawnDelegate',
                'System.String'
            )['invoke'](_resolved, 8.0, _beforeMobSpawn, _0x2f880d, Il2Cpp['string']('mod'));
            return true;
        } catch(_e){
            try{
                const _name=String(_mobId||'').replace(/^mob_prefab\//,'');
                const _fb=_0x5b9456(_name,_pos,_rot||_0x554b79)||_0x5b9456('mob_prefab/'+_name,_pos,_rot||_0x554b79);
                return !!_fb;
            }catch(_e2){
                console.error('[N5 SpawnMobAt scoped]', _e, _e2);
                return false;
            }
        }
    }
    function n5ClearOrbitFuckery(){
        for(const _obj of n5OrbitFuckeryObjects){
            if(!_obj) continue;
            try {
                const _runner = _obj['method']('get_Runner')['invoke']();
                if(_runner && !_runner['isNull']()) _runner['method']('Despawn')['invoke'](_obj);
            } catch(_e){
                try { _0xc4cf2f(_obj)['method'](_0x476e10['ZKeBc'])['invoke']([0,-99999,0]); } catch(_e2){}
            }
        }
        n5OrbitFuckeryObjects = [];
        n5OrbitFuckeryOrbiters = [];
    }
    function n5RunPrefabOrbit(_prefabName, _count, _radius, _height){
        try {
            const _center = _0xa03cc7['class']('AnimalCompany.PlayerController')['method']('get_instance')['invoke']()['method']('get_head')['invoke']();
            if(!_center || _center['handle']['isNull']()) return;
            if(n5OrbitFuckeryObjects.length < _count || n5OrbitFuckeryPrefabName !== _prefabName){
                n5ClearOrbitFuckery();
                n5OrbitFuckeryPrefabName = _prefabName;
                const _centerPos = _center['method']('get_position')['invoke']();
                for(let _i=0; _i<_count; _i++){
                    const _angle = Math.PI * 2 / 8 * _i;
                    const _offset = _0xe4d316['alloc']();
                    _offset['method']('.ctor')['overload']('System.Single','System.Single','System.Single')['invoke'](Math.cos(_angle)*_radius, _height, Math.sin(_angle)*_radius);
                    const _spawnPos = _0xe4d316['method']('op_Addition')['invoke'](_centerPos, [_offset['field']('x')['value'], _offset['field']('y')['value'], _offset['field']('z')['value']]);
                    const _obj = _0x5b9456(_prefabName, _spawnPos, _0x4088e6['method']('get_identity')['invoke']());
                    if(!_obj) continue;
                    n5OrbitFuckeryObjects.push(_obj);
                    try {
                        const _tf = _obj['method']('get_gameObject')['invoke']()['method']('get_transform')['invoke']();
                        n5OrbitFuckeryOrbiters.push({ transform:_tf, angle:_angle });
                    } catch(_e){}
                }
            }
            const _pos = _center['method']('get_position')['invoke']();
            const _dt = _0x5be904['method']('get_deltaTime')['invoke']();
            for(const _orb of n5OrbitFuckeryOrbiters){
                try {
                    _orb.angle += 1.5 * _dt;
                    const _offset = _0xe4d316['alloc']();
                    _offset['method']('.ctor')['overload']('System.Single','System.Single','System.Single')['invoke'](Math.cos(_orb.angle)*_radius, _height, Math.sin(_orb.angle)*_radius);
                    const _newPos = _0xe4d316['method']('op_Addition')['invoke'](_pos, [_offset['field']('x')['value'], _offset['field']('y')['value'], _offset['field']('z')['value']]);
                    _orb.transform['method']('set_position')['invoke'](_newPos);
                } catch(_e){}
            }
        } catch(_e){ console.error('[N5 PrefabOrbit scoped]', _e); }
    }
    function n5ClearTowerOrbit(){
        for(const _obj of n5TowerOrbitObjects){
            try{if(_obj)n5DespawnPrefabObj(_obj);}catch(_){}
        }
        n5TowerOrbitObjects=[];
        n5TowerOrbitOrbiters=[];
    }
    function n5RunSellingTowerOrbit(){
        try{
            const _center=_0xa03cc7['class']('AnimalCompany.PlayerController')['method']('get_instance')['invoke']()['method']('get_head')['invoke']();
            if(!_center||_center['handle']['isNull']())return;
            const _heights=[-3.3,0.0,3.3],_per=24,_radius=5.6;
            if(n5TowerOrbitObjects.length<(_heights.length*_per)){
                n5ClearTowerOrbit();
                const _centerPos=_center['method']('get_position')['invoke']();
                for(const _h of _heights){
                    for(let _i=0;_i<_per;_i++){
                        const _angle=(Math.PI*2/_per)*_i;
                        const _offset=_0xe4d316['alloc']();
                        _offset['method']('.ctor')['overload']('System.Single','System.Single','System.Single')['invoke'](Math.cos(_angle)*_radius,_h,Math.sin(_angle)*_radius);
                        const _spawnPos=_0xe4d316['method']('op_Addition')['invoke'](_centerPos,[_offset['field']('x')['value'],_offset['field']('y')['value'],_offset['field']('z')['value']]);
                        const _obj=_0x5b9456('ItemSellingMachineController',_spawnPos,_0x4088e6['method']('get_identity')['invoke']());
                        if(!_obj)continue;
                        n5TowerOrbitObjects.push(_obj);
                        try{
                            const _tf=_obj['method']('get_gameObject')['invoke']()['method']('get_transform')['invoke']();
                            n5TowerOrbitOrbiters.push({transform:_tf,angle:_angle,height:_h});
                        }catch(_){}
                    }
                }
            }
            const _pos=_center['method']('get_position')['invoke']();
            const _dt=_0x5be904['method']('get_deltaTime')['invoke']();
            for(const _orb of n5TowerOrbitOrbiters){
                try{
                    _orb.angle+=0.95*_dt;
                    const _offset=_0xe4d316['alloc']();
                    _offset['method']('.ctor')['overload']('System.Single','System.Single','System.Single')['invoke'](Math.cos(_orb.angle)*_radius,_orb.height,Math.sin(_orb.angle)*_radius);
                    const _newPos=_0xe4d316['method']('op_Addition')['invoke'](_pos,[_offset['field']('x')['value'],_offset['field']('y')['value'],_offset['field']('z')['value']]);
                    _orb.transform['method']('set_position')['invoke'](_newPos);
                }catch(_){}
            }
        }catch(_e){console.error('[N5 SellingTowerOrbit scoped]',_e);}
    }
    function n5DisablePrefabCollisions(_obj){
        if(!_obj || (_obj['handle']&&_obj['handle']['isNull']())) return;
        try{
            const _go=_obj['method'](_0x476e10['ZqQpU'])['invoke']();
            if(!_go || _go['isNull']()) return;
            try{
                const _cols=_go['method']('GetComponentsInChildren',1)['inflate'](_0x44c8fe)['invoke'](true);
                for(let _i=0;_cols&&_i<_cols['length'];_i++){
                    try{
                        const _c=_cols['get'](_i);
                        if(_c&&!_c['handle']['isNull']()){
                            try{_c['method']('set_enabled')['invoke'](false);}catch(_){}
                            try{_c['method'](_0x476e10['iYafP'])['invoke'](true);}catch(_){}
                        }
                    }catch(_){}
                }
            }catch(_){}
            try{
                const _rbs=_go['method']('GetComponentsInChildren',1)['inflate'](_0x1d3a80)['invoke'](true);
                for(let _i=0;_rbs&&_i<_rbs['length'];_i++){
                    try{
                        const _rb=_rbs['get'](_i);
                        if(_rb&&!_rb['handle']['isNull']()){
                            try{_rb['method']('set_isKinematic')['invoke'](true);}catch(_){}
                            try{_rb['method']('set_detectCollisions')['invoke'](false);}catch(_){}
                        }
                    }catch(_){}
                }
            }catch(_){}
        }catch(_e){console.error('[N5 DisablePrefabCollisions scoped]',_e);}
    }
    function n5GetSpawnedObjectTransform(_obj){
        if(!_obj)return null;
        try{
            const _go=_obj['method'](_0x476e10['ZqQpU'])['invoke']();
            if(_go&&!_go['isNull']())return _go['method'](_0x476e10['JvTJW'])['invoke']();
        }catch(_){}
        try{return _obj['method'](_0x476e10['JvTJW'])['invoke']();}catch(_){}
        try{return _0xc4cf2f(_obj);}catch(_){}
        return null;
    }
    function n5DespawnPrefabObj(_obj){
        if(!_obj) return;
        try{
            const _runner=_0x1e0b92['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['RhZfj'])['invoke']();
            try{if(_runner&&!_runner['isNull']())_runner['method']('Despawn',1)['invoke'](_obj);}
            catch(_){try{_0xc4cf2f(_obj)['method'](_0x476e10['ZKeBc'])['invoke']([0,-99999,0]);}catch(_2){}}
        }catch(_){try{_0xc4cf2f(_obj)['method'](_0x476e10['ZKeBc'])['invoke']([0,-99999,0]);}catch(_2){}}
    }
    function n5HandForwardPose(_dist=0.55){
        const _hand=_0x199f18['field'](_0x476e10['gOCqt'])['value']||_0x35ade8;
        const _hp=_hand['method'](_0x476e10['YApVv'])['invoke']();
        const _hf=_hand['method'](_0x476e10['itVwD'])['invoke']();
        const _hr=_hand['method'](_0x476e10['YqqIM'])['invoke']();
        return {hand:_hand,pos:[(_hp[0]||0)+(_hf[0]||0)*_dist,(_hp[1]||0)+(_hf[1]||0)*_dist,(_hp[2]||0)+(_hf[2]||0)*_dist],forward:_hf,rot:_hr};
    }
    function n5StartHeldPrefab(_prefabName){
        try{
            if(disableDangerousPrefabs&&dangerousPrefabs.indexOf(_prefabName)>=0){currentNotification='Dangerous prefab blocked';notifactionResetTime=time+2;return;}
            n5DespawnPrefabObj(n5HeldPrefabObj);
            n5HeldPrefabObj=null;n5HeldPrefabTransform=null;n5HeldPrefabEnabled=true;n5HeldPrefabName=_prefabName;
            const _pose=n5HandForwardPose(0.55);
            const _obj=_0x5b9456(_prefabName,_pose.pos,_pose.rot);
            if(_obj){
                n5HeldPrefabObj=_obj;
                n5HeldPrefabTransform=n5GetSpawnedObjectTransform(_obj);
                n5DisablePrefabCollisions(_obj);
                n5UpdateHeldPrefab();
                currentNotification='Holding prefab: '+_prefabName;notifactionResetTime=time+2;
            }else{currentNotification='Hold prefab retrying: '+_prefabName;notifactionResetTime=time+2;}
        }catch(_e){console.error('[N5 HoldPrefab start]',_e);}
    }
    function n5StopHeldPrefab(){
        n5DespawnPrefabObj(n5HeldPrefabObj);
        n5HeldPrefabObj=null;n5HeldPrefabTransform=null;n5HeldPrefabEnabled=false;n5HeldPrefabName='';
        currentNotification='Stopped holding prefab';notifactionResetTime=time+2;
    }
    function n5UpdateHeldPrefab(){
        if(!n5HeldPrefabEnabled)return;
        try{
            if(!n5HeldPrefabObj||n5HeldPrefabObj['handle']['isNull']()){
                const _nm=n5HeldPrefabName;
                n5HeldPrefabObj=null;n5HeldPrefabTransform=null;
                if(_nm){
                    const _pose=n5HandForwardPose(0.55);
                    const _obj=_0x5b9456(_nm,_pose.pos,_pose.rot);
                    if(_obj){
                        n5HeldPrefabObj=_obj;
                        n5HeldPrefabTransform=n5GetSpawnedObjectTransform(_obj);
                        try{n5DisablePrefabCollisions(_obj);}catch(_){}
                    }
                }
                return;
            }
            if(!n5HeldPrefabTransform){
                n5HeldPrefabTransform=n5GetSpawnedObjectTransform(n5HeldPrefabObj);
            }
            if(!n5HeldPrefabTransform)return;
            const _hand=_0x199f18['field'](_0x476e10['gOCqt'])['value']||_0x35ade8;
            const _hp=_hand['method'](_0x476e10['YApVv'])['invoke']();
            const _hf=_hand['method'](_0x476e10['itVwD'])['invoke']();
            const _hr=_hand['method'](_0x476e10['YqqIM'])['invoke']();
            const _pos=[(_hp[0]||0)+(_hf[0]||0)*0.28,(_hp[1]||0)+(_hf[1]||0)*0.28,(_hp[2]||0)+(_hf[2]||0)*0.28];
            n5HeldPrefabTransform['method'](_0x476e10['ZKeBc'])['invoke'](_pos);
            try{n5HeldPrefabTransform['method'](_0x476e10['yqzdi'])['invoke'](_hr);}catch(_){}
            try{n5DisablePrefabCollisions(n5HeldPrefabObj);}catch(_){}
        }catch(_e){n5HeldPrefabObj=null;n5HeldPrefabTransform=null;}
    }
    function n5StartLarpPrefab(_prefabName){
        try{
            if(disableDangerousPrefabs&&dangerousPrefabs.indexOf(_prefabName)>=0){currentNotification='Dangerous prefab blocked';notifactionResetTime=time+2;return;}
            n5DespawnPrefabObj(n5LarpPrefabObj);
            const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
            if(!_lp){currentNotification='no local player';notifactionResetTime=time+2;return;}
            const _pos=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
            const _obj=_0x5b9456(_prefabName,_pos,_0x554b79);
            if(_obj){
                n5LarpPrefabObj=_obj;n5LarpPrefabEnabled=true;n5LarpPrefabName=_prefabName;
                n5DisablePrefabCollisions(_obj);
                currentNotification='Larping as: '+_prefabName;notifactionResetTime=time+3;
            }else{currentNotification='Larp spawn failed';notifactionResetTime=time+2;}
        }catch(_e){console.error('[N5 LarpPrefab start]',_e);}
    }
    function n5StopLarpPrefab(){
        n5DespawnPrefabObj(n5LarpPrefabObj);
        n5LarpPrefabObj=null;n5LarpPrefabEnabled=false;n5LarpPrefabName='';
        currentNotification='Stopped larping';notifactionResetTime=time+2;
    }
    function n5UpdateLarpPrefab(){
        if(!n5LarpPrefabEnabled||!n5LarpPrefabObj)return;
        try{
            if(n5LarpPrefabObj['handle']['isNull']()){n5LarpPrefabObj=null;n5LarpPrefabEnabled=false;return;}
            const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
            if(!_lp)return;
            const _pos=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
            const _rot=_0xc4cf2f(_lp)['method'](_0x476e10['YqqIM'])['invoke']();
            const _tf=_0xc4cf2f(n5LarpPrefabObj);
            _tf['method'](_0x476e10['ZKeBc'])['invoke'](_pos);
            try{_tf['method'](_0x476e10['yqzdi'])['invoke'](_rot);}catch(_){}
        }catch(_e){n5LarpPrefabObj=null;n5LarpPrefabEnabled=false;}
    }
    function n5KickPlayerObject(_player){
        if(!_player || _player['handle']['isNull']()) return false;
        try {
            const _rpc = _0xa03cc7['class']('AnimalCompany.NetSessionRPCs');
            const _inst = _rpc['field']('_instance')['value'];
            const _uid = _player['field']('_userID')['value'];
            _n5OutgoingKick=true;
            try {
                try { if(_inst) _inst['method']('RPC_KickPlayer')['invoke'](_uid); } catch(_e1){}
                try { _rpc['method']('KickPlayer')['invoke'](_uid); } catch(_e2){}
            } finally {
                _n5OutgoingKick=false;
            }
            return true;
        } catch(_e){
            console.error('[N5 KickPlayer scoped]', _e);
            _n5OutgoingKick=false;
            return false;
        }
    }
    function n5GetPlayerUserId(_rig){
        try{const _s=n5ValueString(_rig['method']('get_userID')['invoke']());if(_s&&_s!=='null'&&_s!=='???'&&_s!=='[object Object]')return _s;}catch(_){}
        try{const _s=n5ValueString(_rig['field']('_userID')['value']);if(_s&&_s!=='null'&&_s!=='???'&&_s!=='[object Object]')return _s;}catch(_){}
        try{const _s=n5ValueString(_rig['field']('userID')['value']);if(_s&&_s!=='null'&&_s!=='???'&&_s!=='[object Object]')return _s;}catch(_){}
        try{const _pid=_rig['method']('get_playerID')['invoke']();return 'pid:'+_pid;}catch(_){}
        return '';
    }
    function n5ValueString(_v){
        try{if(_v&&typeof _v.content==='string')return _v.content;}catch(_){}
        try{if(_v&&_v['value']!==undefined)return n5ValueString(_v['value']);}catch(_){}
        try{if(_v&&_v['method'])return n5ValueString(_v['method']('get_Value')['invoke']());}catch(_){}
        try{const _m=n5ManagedString(_v);if(_m&&_m!=='???'&&_m!=='null'&&_m!=='undefined'&&_m!=='[object Object]')return _m;}catch(_){}
        try{if(_v&&_v['toString'])return String(_v['toString']());}catch(_){}
        return String(_v||'');
    }
    function n5GetPlayerDisplayName(_rig){
        try{const _s=n5ValueString(_rig['method']('get_displayName')['invoke']());if(_s&&_s!=='null'&&_s!=='???'&&_s!=='[object Object]')return _s;}catch(_){}
        try{const _s=n5ValueString(_rig['field']('cache_displayName')['value']);if(_s&&_s!=='null'&&_s!=='???'&&_s!=='[object Object]')return _s;}catch(_){}
        try{const _s=n5ValueString(_rig['field']('_displayName')['value']);if(_s&&_s!=='null'&&_s!=='???'&&_s!=='[object Object]')return _s;}catch(_){}
        try{const _s=n5ValueString(_rig['field']('displayName')['value']);if(_s&&_s!=='null'&&_s!=='???'&&_s!=='[object Object]')return _s;}catch(_){}
        const _uid=n5GetPlayerUserId(_rig);
        return _uid?('Player '+_uid.slice(0,8)):'Unknown';
    }
    function n5CollectionToArray(_col){
        const _out=[];
        if(!_col||(_col['handle']&&_col['handle']['isNull']()))return _out;
        let _vals=_col;
        try{_vals=_col['method']('get_Values')['invoke']();}catch(_){}
        try{_vals=_col['field']('Values')['value'];}catch(_){}
        try{
            const _en=_vals['method']('GetEnumerator')['invoke']();
            while(_en['method']('MoveNext')['invoke']()){
                let _cur=_en['method']('get_Current')['invoke']();
                try{_cur=_cur['method']('get_Value')['invoke']();}catch(_){}
                try{if(_cur&&_cur['field']){const _v=_cur['field']('value')['value'];if(_v)_cur=_v;}}catch(_){}
                if(_cur&&(!_cur['handle']||!_cur['handle']['isNull']()))_out.push(_cur);
            }
        }catch(_){}
        if(_out.length===0){
            let _len=0;
            try{_len=_vals['length'];}catch(_){}
            try{if(!_len)_len=_vals['method']('get_Count')['invoke']();}catch(_){}
            try{if(!_len)_len=_vals['method']('get_Length')['invoke']();}catch(_){}
            for(let _i=0;_i<_len;_i++){
                let _v=null;
                try{_v=_vals.get?_vals.get(_i):null;}catch(_){}
                try{if(!_v)_v=_vals['method']('get_Item')['invoke'](_i);}catch(_){}
                try{if(!_v)_v=_vals['method']('GetValue')['invoke'](_i);}catch(_){}
                if(!_v)try{_v=_vals[_i];}catch(_){}
                if(_v&&(!_v['handle']||!_v['handle']['isNull']()))_out.push(_v);
            }
        }
        return _out;
    }
    function n5AllNetPlayers(){
        const _out=[];
        const _push=_pl=>{try{if(_pl&&(!_pl['handle']||!_pl['handle']['isNull']()))_out.push(_pl);}catch(_){}};
        try{
            const _net=_0xa03cc7['class']('AnimalCompany.NetPlayer');
            for(const _src of [
                ()=>_net['method']('get_spawnedPlayers')['invoke'](),
                ()=>_net['field']('_spawnedPlayers')['value'],
                ()=>_net['field']('playerIDToNetPlayer')['value']
            ]){
                try{for(const _pl of n5CollectionToArray(_src()))_push(_pl);}catch(_){}
            }
            try{_push(_net['method']('get_localPlayer')['invoke']());}catch(_){}
        }catch(_){}
        try{
            const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
            while(_en['method'](_0x476e10['tcYql'])['invoke']())_push(_en['method'](_0x476e10['UdBMu'])['invoke']());
        }catch(_){}
        try{for(const _pl of n5FindAllClass('AnimalCompany.NetPlayer'))_push(_pl);}catch(_e){}
        const _dedup=[],_seen=new Set();
        for(const _pl of _out){
            let _key='';
            try{_key=n5GetPlayerUserId(_pl)||String(_pl['handle']||_pl);}catch(_){_key=String(_pl);}
            if(_seen.has(_key))continue;
            _seen.add(_key);_dedup.push(_pl);
        }
        return _dedup;
    }
    function n5RefreshUsersCategory(){
        try{
            const _players=n5AllNetPlayers();
            if(n5UserIndex>=_players.length)n5UserIndex=Math.max(0,_players.length-1);
            _0x8d3cef[33]=n5BuildUsersCategory();
            _0x564127=new Map();
            _0x8d3cef['flat']()['forEach'](_b=>_0x564127['set'](_b['buttonText'],_b));
            _n5MenuLastCat=-1;_n5MenuLastPage=-1;_n5FlatDirty=true;
            currentNotification='Users refreshed: '+_players.length;notifactionResetTime=time+2;
            return _players.length;
        }catch(_e){console.error('[N5 RefreshUsers]',_e);currentNotification='Users refresh failed';notifactionResetTime=time+2;return 0;}
    }
    function n5SelectedUser(){
        const _players=n5AllNetPlayers();
        if(_players.length===0)return null;
        n5UserIndex=((n5UserIndex%_players.length)+_players.length)%_players.length;
        return _players[n5UserIndex];
    }
    function n5IsLocalPlayer(_rig){
        try{return !!_rig['method'](_0x476e10['qTups'])['invoke']();}catch(_){}
        try{return !!_rig['method']('get_IsMine')['invoke']();}catch(_){}
        try{return !!_rig['property']('IsMine')['value'];}catch(_){}
        return false;
    }
    function n5AllRemoteUsers(){
        const _out=[];
        for(const _pl of n5AllNetPlayers()){
            try{
                if(!_pl||(_pl['handle']&&_pl['handle']['isNull']())||n5IsLocalPlayer(_pl))continue;
                _out.push(_pl);
            }catch(_){}
        }
        return _out;
    }
    function n5ForUsers(_users,_fn){
        let _ok=0;
        for(const _u of _users){
            try{if(_fn(_u))_ok++;}catch(_e){console.error('[N5 Users action]',_e);}
        }
        return _ok;
    }
    function n5GetPlayerPosition(_u){
        if(!_u||(_u['handle']&&_u['handle']['isNull']()))return null;
        try{const _t=_0xc4cf2f(_u);if(_t&&!_t['isNull']())return _t['method'](_0x476e10['YApVv'])['invoke']();}catch(_){}
        try{const _ar=_u['field']('avatarRoot')['value'];if(_ar&&!_ar['isNull']())return _ar['method'](_0x476e10['YApVv'])['invoke']();}catch(_){}
        try{const _b=_u['field']('body')['value'];if(_b&&!_b['isNull']())return _b['method'](_0x476e10['YApVv'])['invoke']();}catch(_){}
        try{return _u['method'](_0x476e10['JvTJW'])['invoke']()['method'](_0x476e10['YApVv'])['invoke']();}catch(_){}
        return null;
    }
    function n5TeleportUserToPosition(_u,_pos){
        if(!_u||!_pos||(_u['handle']&&_u['handle']['isNull']()))return false;
        let _ok=false;
        try{_u['method']('Teleport',1)['invoke'](_pos);_ok=true;}catch(_){}
        try{_u['method']('RPC_Teleport',1)['invoke'](_pos);_ok=true;}catch(_){}
        try{_u['method']('set_n_position')['invoke'](_pos);_ok=true;}catch(_){}
        try{const _t=_0xc4cf2f(_u);if(_t&&!_t['isNull']()){_t['method'](_0x476e10['ZKeBc'])['invoke'](_pos);_ok=true;}}catch(_){}
        try{const _ar=_u['field']('avatarRoot')['value'];if(_ar&&!_ar['isNull']()){_ar['method'](_0x476e10['ZKeBc'])['invoke'](_pos);_ok=true;}}catch(_){}
        try{const _b=_u['field']('body')['value'];if(_b&&!_b['isNull']()){_b['method'](_0x476e10['ZKeBc'])['invoke'](_pos);_ok=true;}}catch(_){}
        return _ok;
    }
    function n5TeleTargetValue(_value){
        if(typeof _value==='number')return _value;
        try{if(typeof _value.value==='number')return _value.value;}catch(_){}
        try{if(typeof _value.value__==='number')return _value.value__;}catch(_){}
        const _parsed=Number(_value);
        return Number.isFinite(_parsed)?_parsed:-1;
    }
    function n5FindTeleTargetPosition(_targetID){
        try{
            for(const _target of n5FindAllClass('AnimalCompany.TeleportTarget')){
                if(!_target||(_target['handle']&&_target['handle']['isNull']()))continue;
                let _id=-1;
                try{_id=n5TeleTargetValue(_target['field']('target')['value']);}catch(_){}
                if(_id!==_targetID)continue;
                const _tf=_0xc4cf2f(_target);
                if(_tf&&!_tf['isNull']())return _tf['method'](_0x476e10['YApVv'])['invoke']();
            }
        }catch(_e){console.error('[Map target position]',_e);}
        return null;
    }
    function teleportTo(targetID){
        try{
            const _teleClass=_0xa03cc7['class']('AnimalCompany.TeleportTarget');
            let _found=false;
            try{_found=!!_teleClass['method']('TryTeleport',1)['invoke'](targetID);}catch(_){}
            if(!_found){
                const _pos=n5FindTeleTargetPosition(targetID);
                if(_pos){
                    try{
                        const _pc=_0xa03cc7['class']('AnimalCompany.PlayerController')['method']('get_instance')['invoke']();
                        if(_pc&&(!_pc['handle']||!_pc['handle']['isNull']())){_pc['method']('Teleport',1)['invoke'](_pos);_found=true;}
                    }catch(_){}
                }
            }
            currentNotification=_found?'Teleported!':'Target not in scene';
            notifactionResetTime=time+2;
            return _found;
        }catch(_e){currentNotification='Tele failed: '+_e;notifactionResetTime=time+3;return false;}
    }
    function n5TeleportUserToMap(_u,_targetID){
        const _pos=n5FindTeleTargetPosition(_targetID);
        return _pos?n5TeleportUserToPosition(_u,_pos):false;
    }
    function n5TeleportSelectedUserToMe(_u){
        const _p=n5LocalPlayerPos();
        return n5TeleportUserToPosition(_u,[(_p[0]||0)+0.6,(_p[1]||0)+0.05,(_p[2]||0)+0.6]);
    }
    function n5TeleportMeToSelectedUser(_u){
        const _p=n5GetPlayerPosition(_u);
        if(!_p)return false;
        let _ok=false;
        try{
            const _pc=_0xa03cc7['class']('AnimalCompany.PlayerController')['method']('get_instance')['invoke']();
            if(_pc&&!_pc['handle']['isNull']()){try{_pc['method']('Teleport',1)['invoke'](_p);_ok=true;}catch(_){}}
        }catch(_){}
        try{
            const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
            if(_lp&&(!_lp['handle']||!_lp['handle']['isNull']()))_ok=n5TeleportUserToPosition(_lp,[(_p[0]||0)+0.6,(_p[1]||0)+0.05,(_p[2]||0)+0.6])||_ok;
        }catch(_){}
        try{_0xc4cf2f(_0x33fb14)['method'](_0x476e10['ZKeBc'])['invoke']([(_p[0]||0)+0.6,(_p[1]||0)+0.05,(_p[2]||0)+0.6]);_ok=true;}catch(_){}
        return _ok;
    }
    function n5KickAllUsers(_notify=false){
        if(time<n5AutoKickAllDelay)return 0;
        n5AutoKickAllDelay=time+0.18;
        const _count=n5ForUsers(n5AllRemoteUsers(),_u=>n5KickPlayerObject(_u));
        if(_notify||_count>0){currentNotification='Kick spam all: '+_count;notifactionResetTime=time+1.5;}
        return _count;
    }
    function n5SetPlayerScale(_rig,_delta){
        if(!_rig||(_rig['handle']&&_rig['handle']['isNull']()))return false;
        try{
            let _cur=1.0;
            try{_cur=_rig['method']('get_playerScale')['invoke']();}catch(_){}
            try{if(!_cur)_cur=_rig['field']('_playerScale')['value'];}catch(_){}
            const _pm=Math.max(0.15,Math.min(5.0,(_cur||1)+_delta));
            try{_rig['method']('set_playerScale')['invoke'](_pm);}catch(_){}
            try{_rig['field']('_playerScale')['value']=_pm;}catch(_){}
            try{_rig['method']('CopyBackingFieldsToState')['invoke'](true);}catch(_){}
            const _tf=_0xc4cf2f(_rig);
            let _s=null;
            try{_s=_tf['method'](_0x476e10['qCzPa'])['invoke']();}catch(_){try{_s=_tf['method']('get_localScale')['invoke']();}catch(_e){}}
            const _base=(_s&&typeof _s[0]==='number')?_s:[1,1,1];
            const _m=Math.max(0.15,Math.min(5.0,(_base[0]||1)+_delta));
            _tf['method'](_0x476e10['AnNTs'])['invoke']([_m,_m,_m]);
            return true;
        }catch(_e){console.error('[N5 UserScale]',_e);return false;}
    }
    function n5SetPlayerScaleExact(_rig,_scale){
        if(!_rig||(_rig['handle']&&_rig['handle']['isNull']()))return false;
        try{
            const _pm=Math.max(0.15,Math.min(5.0,_scale));
            try{_rig['method']('set_playerScale')['invoke'](_pm);}catch(_){}
            try{_rig['field']('_playerScale')['value']=_pm;}catch(_){}
            try{_rig['method']('CopyBackingFieldsToState')['invoke'](true);}catch(_){}
            const _tf=_0xc4cf2f(_rig);
            _tf['method'](_0x476e10['AnNTs'])['invoke']([_pm,_pm,_pm]);
            return true;
        }catch(_e){console.error('[N5 UserScaleExact]',_e);return false;}
    }
    function n5ShakePlayerScreen(_rig){
        if(!_rig||(_rig['handle']&&_rig['handle']['isNull']()))return false;
        let _ok=false;
        try{_rig['method']('ShakeScreen',5)['invoke'](1.6,0.05,0.25,45.0,0.85);_ok=true;}catch(_){}
        try{_rig['method']('RPC_ShakeScreen',5)['invoke'](1.6,0.05,0.25,45.0,0.85);_ok=true;}catch(_){}
        if(!_ok){
            try{
                const _p=_0xc4cf2f(_rig)['method'](_0x476e10['YApVv'])['invoke']();
                const _tf=_0xc4cf2f(_rig);
                for(let _i=0;_i<5;_i++){
                    const _o=[(Math.random()-0.5)*0.35,(Math.random()-0.5)*0.2,(Math.random()-0.5)*0.35];
                    _tf['method'](_0x476e10['ZKeBc'])['invoke']([(_p[0]||0)+_o[0],(_p[1]||0)+_o[1],(_p[2]||0)+_o[2]]);
                }
                _ok=true;
            }catch(_){}
        }
        return _ok;
    }
    function n5StunUser(_rig){
        if(!_rig||(_rig['handle']&&_rig['handle']['isNull']()))return false;
        let _ok=false;
        try{_rig['method']('ForcePlayerStun',2)['invoke'](2.0,true);_ok=true;}catch(_){}
        try{_rig['method']('RPC_PlayerStun',4)['invoke'](_0xc4cf2f(_rig)['method'](_0x476e10['YApVv'])['invoke'](),999.0,2.0,0);_ok=true;}catch(_){}
        try{_rig['method']('PlayerStun',4)['invoke'](_0xc4cf2f(_rig)['method'](_0x476e10['YApVv'])['invoke'](),999.0,2.0,0);_ok=true;}catch(_){}
        return _ok;
    }
    function n5ApplyBuffToPlayer(_rig,_id){
        if(!_rig||(_rig['handle']&&_rig['handle']['isNull']()))return false;
        try{_rig['method']('RPC_ApplyBuff')['invoke'](_id);return true;}catch(_){}
        try{_rig['method']('ApplyBuff')['invoke'](_id);return true;}catch(_){}
        try{const _bc=_rig['method']('GetComponent',1)['inflate'](_0xa03cc7['class']('AnimalCompany.PlayerBuffController'))['invoke']();if(_bc&&!_bc['handle']['isNull']()){_bc['method']('ActivateBuff')['invoke'](_id);return true;}}catch(_){}
        return false;
    }
    function n5SetVoiceVolumeForRig(_rig,_volume){
        try{
            const _pid=_rig['method']('get_playerID')['invoke']();
            _0xa03cc7['class']('AnimalCompany.PlayerVoiceUtility')['method']('SetPlayerVolume')['invoke'](_pid,_volume);
            return true;
        }catch(_e){console.error('[N5 VoiceVolume]',_e);return false;}
    }
    function n5WriteTextFile(_path,_txt){
        try{
            const _dirCls=Il2Cpp.corlib.class('System.IO.Directory');
            const _pathCls=Il2Cpp.corlib.class('System.IO.Path');
            const _fileCls=Il2Cpp.corlib.class('System.IO.File');
            const _dir=n5ManagedString(_pathCls['method']('GetDirectoryName',1)['invoke'](Il2Cpp.string(_path)));
            if(_dir&&!_dirCls['method']('Exists',1)['invoke'](Il2Cpp.string(_dir)))_dirCls['method']('CreateDirectory',1)['invoke'](Il2Cpp.string(_dir));
            _fileCls['method']('WriteAllText',2)['invoke'](Il2Cpp.string(_path),Il2Cpp.string(_txt));
            return true;
        }catch(_e){console.error('[N5 WriteFile]',_e);return false;}
    }
    function n5SaveLobbyUsers(){
        try{
            const _players=n5AllNetPlayers().map((_pl,_i)=>({
                index:_i,
                id:n5GetPlayerUserId(_pl),
                name:n5GetPlayerDisplayName(_pl),
                isLocal:(()=>{try{return !!_pl['method'](_0x476e10['qTups'])['invoke']();}catch(_){return false;}})(),
                whitelisted:n5WhitelistHas(_pl),
                appearingOffline:(()=>{try{return !!_pl['field']('appearOffline')['value'];}catch(_){try{return !!_pl['method']('get_appearOffline')['invoke']();}catch(_e){return null;}}})()
            }));
            const _d=new Date(),_pad=_n=>String(_n).padStart(2,'0');
            const _stamp=_d.getFullYear()+'-'+_pad(_d.getMonth()+1)+'-'+_pad(_d.getDate())+'_'+_pad(_d.getHours())+'-'+_pad(_d.getMinutes())+'-'+_pad(_d.getSeconds());
            const _path='C:\\Users\\fucky\\Documents\\lobby saves\\lobby saves('+_stamp+').json';
            const _ok=n5WriteTextFile(_path,JSON.stringify({savedAt:_d.toISOString(),playerCount:_players.length,players:_players},null,2));
            currentNotification=_ok?'Lobby saved: '+_players.length+' users':'Lobby save failed';notifactionResetTime=time+4;
            return _ok;
        }catch(_e){currentNotification='Lobby save failed';notifactionResetTime=time+2;console.error('[N5 SaveLobby]',_e);return false;}
    }
    function n5GetRightFingers(_rig){
        try{
            const _view=_rig['method'](_0x476e10['KsNte'])['invoke']();
            if(!_view||_view['isNull']())return null;
            const _fingerViews=_view['field'](_0x476e10['pdSNt'])['value'];
            if(!_fingerViews||_fingerViews['isNull']()||_fingerViews['length']<2)return null;
            return _fingerViews['get'](1);
        }catch(_){return null;}
    }
    function n5WhitelistHas(_rig){
        const _uid=n5GetPlayerUserId(_rig);
        if(!_uid)return false;
        for(let _i=0;_i<whitelist.length;_i++){
            const _w=whitelist[_i];
            if(!_w||(_w['handle']&&_w['handle']['isNull']()))continue;
            if(n5GetPlayerUserId(_w)===_uid)return true;
        }
        return false;
    }
    function n5WhitelistAdd(_rig){
        if(!_rig||(_rig['handle']&&_rig['handle']['isNull']())||_rig['method'](_0x476e10['qTups'])['invoke']())return false;
        if(n5WhitelistHas(_rig))return false;
        whitelist.push(_rig);
        return true;
    }
    function n5WhitelistRemove(_rig){
        const _uid=n5GetPlayerUserId(_rig);
        if(!_uid)return false;
        const _next=[];
        let _removed=false;
        for(let _i=0;_i<whitelist.length;_i++){
            const _w=whitelist[_i];
            if(!_w||(_w['handle']&&_w['handle']['isNull']()))continue;
            if(n5GetPlayerUserId(_w)===_uid){_removed=true;continue;}
            _next.push(_w);
        }
        whitelist=_next;
        return _removed;
    }
    function n5WhitelistAllPlayers(){
        let _added=0;
        try{
            const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
            while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                if(n5WhitelistAdd(_pl))_added++;
            }
        }catch(_e){console.error('[WL all]',_e);}
        currentNotification='Whitelist all: +'+_added+' ('+whitelist.length+' total)';notifactionResetTime=time+3;
    }
    function n5WhitelistFist(_rig){
        try{
            const _f=n5GetRightFingers(_rig);
            if(!_f||_f['isNull']())return false;
            return _f['field']('_indexValue')['value']>0.8&&_f['field']('_middleValue')['value']>0.8&&_f['field']('_thumbValue')['value']>0.8;
        }catch(_){return false;}
    }
    function n5WhitelistedPlayers(){
        const _list=[];
        for(let _i=0;_i<whitelist.length;_i++){
            const _w=whitelist[_i];
            if(!_w||(_w['handle']&&_w['handle']['isNull']()))continue;
            _list.push(_w);
        }
        return _list;
    }
    function n5GetRigHand(_rig,_right=true){
        try{return _rig['field'](_right?'handRight':'handLeft')['value'];}catch(_){return null;}
    }
    function n5SetObjectVelocity(_obj,_dir,_power){
        if(!_obj)return false;
        try{
            let _go=null;
            try{_go=_obj['method'](_0x476e10['ZqQpU'])['invoke']();}catch(_){}
            if(!_go||_go['isNull']())_go=_obj;
            let _rb=null;
            try{_rb=_go['method'](_0x476e10['BGTMU'],1)['inflate'](_0x1d3a80)['invoke']();}catch(_){}
            if((!_rb||_rb['handle']['isNull']())&&_go){try{_rb=_go['method']('GetComponentInChildren',1)['inflate'](_0x1d3a80)['invoke']();}catch(_){}}
            if(_rb&&!_rb['handle']['isNull']()){
                try{_rb['method']('set_isKinematic')['invoke'](false);}catch(_){}
                try{_rb['method']('WakeUp')['invoke']();}catch(_){}
                const _vel=_0xe4d316['method'](_0x476e10['BGmZg'],2)['invoke'](_dir,_power);
                try{_rb['method']('set_linearVelocity')['invoke'](_vel);return true;}catch(_){}
                try{_rb['method']('set_velocity')['invoke'](_vel);return true;}catch(_){}
                try{_rb['method'](_0x476e10['YeICc'],2)['invoke'](_vel,1);return true;}catch(_){}
            }
        }catch(_){}
        return false;
    }
    function n5WhitelistSpawnPrefabFromHand(_prefab,_hand,_power){
        if(!_hand)return null;
        const _pos=_hand['method'](_0x476e10['YApVv'])['invoke']();
        const _rot=_hand['method'](_0x476e10['YqqIM'])['invoke']();
        const _obj=_0x5b9456(_prefab,_pos,_rot);
        if(_obj&&_power>0)n5SetObjectVelocity(_obj,_hand['method'](_0x476e10['itVwD'])['invoke'](),_power);
        return _obj;
    }
    function n5WhitelistSpawnItemFromHand(_item,_hand,_power){
        if(!_hand)return null;
        const _obj=n5SpawnItemObjectAt(_item,_hand['method'](_0x476e10['YApVv'])['invoke'](),_hand['method'](_0x476e10['YqqIM'])['invoke']());
        if(_obj&&_power>0)n5SetObjectVelocity(_obj,_hand['method'](_0x476e10['itVwD'])['invoke'](),_power);
        return _obj;
    }
    function n5NormVec(_v,_power){
        const _x=Number((_v&&(_v[0]!==undefined?_v[0]:(_v.field?_v.field('x').value:0)))||0);
        const _y=Number((_v&&(_v[1]!==undefined?_v[1]:(_v.field?_v.field('y').value:0)))||0);
        const _z=Number((_v&&(_v[2]!==undefined?_v[2]:(_v.field?_v.field('z').value:0)))||0);
        const _m=Math.sqrt(_x*_x+_y*_y+_z*_z)||1;
        return [(_x/_m)*_power,(_y/_m)*_power,(_z/_m)*_power];
    }
    function n5WhitelistFlyPlayer(_rig){
        try{
            const _hand=n5GetRigHand(_rig,true)||n5GetRigHand(_rig,false);
            if(!_hand)return false;
            const _force=n5NormVec(_hand['method'](_0x476e10['itVwD'])['invoke'](),Math.max(0.15,flySpeed*0.018));
            try{_rig['method']('RPC_AddForce')['invoke'](_force);return true;}catch(_){}
            try{_rig['method']('RPC_AddForce')['invoke'](_force,1);return true;}catch(_){}
            try{_rig['method'](_0x476e10['GvlcC'],3)['invoke'](_force);return true;}catch(_){}
        }catch(_){}
        return false;
    }
    function n5RunWhitelistedFist(_cooldown,_fn){
        if(time<tagGunDelay)return;
        tagGunDelay=time+_cooldown;
        const _list=n5WhitelistedPlayers();
        for(let _i=0;_i<_list.length;_i++){
            const _rig=_list[_i];
            try{if(n5WhitelistFist(_rig))_fn(_rig);}catch(_){}
        }
    }
    function _0x1d11a1(_0x191b94) {
        const _0xa9a5d9=_0x240047;
        try {
            const _0x3101f0=_0x191b94['method'](_0x476e10['KsNte'])['invoke']();
            if(!_0x3101f0||_0x3101f0['isNull']())return null;
            const _0x848620=_0x3101f0['field'](_0x476e10['pdSNt'])['value'];
            if(!_0x848620||_0x848620['isNull']()||_0x476e10['kdemC'](_0x848620['length'],0x1013*-0x1+-0x25b5+0x195*0x22))return null;
            return _0x848620['get'](1);
        }
        catch(_0x32c41a) {
            return null;
        }
    }
    function _0x1d0574(_0x15d002) {
        const _0x4981d8=_0x240047;
        return _0x15d002=_0xe4d316['method'](_0x476e10['sELqL'],-0x13f*-0xb+-0x1*0x1271+0x4be)['invoke'](_0x15d002,_0x476e10['wwKEr'](_0xc4cf2f,_0x376315)['method'](_0x476e10['YApVv'])['invoke']()),_0x15d002=_0xe4d316['method'](_0x476e10['ZOiTU'],-0x7be+-0x2*0x12a1+0x2d02)['invoke'](_0x15d002,_0x476e10['wwKEr'](_0xc4cf2f,_0x199f18)['method'](_0x476e10['YApVv'])['invoke']()),_0x15d002;
    }
    function _0x279f6c(_0x3952bd) {
        const _0x3c4ef1=_0x240047,_0x5c470d=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
        if(!_0x5c470d)return;
        _0x5c470d['method'](_0x476e10['uXViU'])['invoke'](_0x476e10['nnOEy'](_0x1d0574,_0x3952bd));
    }
    function _0x3dddf7(_0x462011='',_0x497ba0=!![],_0x4ab92a=0xc9e+-0x255e+0x18c5) {
        const _0x56b1f0=_0x240047,_0x229f48=_0x476e10['uzhlw'](currentNotification,_0x462011);
        notifactionResetTime=_0x476e10['edcaL'](time,_0x4ab92a),currentNotification=_0x462011;
        if(_0x476e10['VrZnq'](_0x497ba0,!_0x229f48))_0x476e10['LtKnW'](_0x421954);
    }
    function _0xb7e991(_0x2cd7fe=_0x4c14b4,_0x4d21cb=_0x554b79,_0x5c5998=_0x268d36,_0x176878=0x1a3c+0x1*0x17b9+-0x1*0x31f2,_0x4ad8dc=[0x1*0x2d5+0x5e3*-0x2+-0x8f2*-0x1,0x230b*-0x1+0x7b5+0x1b57,0x104c+-0x11f*0x19+-0x2*-0x5de,0x1fc3+0x7be+-0x2780],_0x46e441=null,_0x29efd7=![]) {
        const _0x1f3a28=_0x240047,_0x42c31e=_0x4464ae['method'](_0x476e10['NcyfD'])['invoke'](_0x176878),_0x123343=_0x476e10['MPZmC'](_0x2e156d,_0x42c31e,_0x10def1);
        if(_0x476e10['uzhlw'](_0x4ad8dc[0x6*0xe8+-0x2265+0x1cf8],-0x31e+0x13*0x112+0x26*-0x74))_0x123343['method'](_0x476e10['nORQm'])['invoke'](![]);
        else {
            const _0x19d57e=_0x123343['method'](_0x476e10['ZPxAz'])['invoke']();
            _0x19d57e['method'](_0x476e10['frUDt'])['invoke'](_0x479011),_0x19d57e['method'](_0x476e10['mlCnr'])['invoke'](_0x4ad8dc);
        }
        const _0x546a80=_0x476e10['xPfzf'](_0x2e156d,_0x42c31e,_0x44c8fe);
        !_0x546a80['isNull']()&&(_0x29efd7?(_0x546a80['method'](_0x476e10['nORQm'])['invoke'](!![]),_0x546a80['method'](_0x476e10['iYafP'])['invoke'](!![])):_0x546a80['method'](_0x476e10['iYafP'])['invoke'](!![]));
        const _0xf5c67=_0x476e10['pUqkT'](_0xc4cf2f,_0x42c31e);
        if(_0x476e10['CdBQN'](_0x46e441,null))_0xf5c67['method'](_0x476e10['WHQTd'],0x1567+-0x3*-0x92f+-0x166*0x23)['invoke'](_0x46e441,![]);
        return _0xf5c67['method'](_0x476e10['ZKeBc'])['invoke'](_0x2cd7fe),_0xf5c67['method'](_0x476e10['yqzdi'])['invoke'](_0x4d21cb),_0xf5c67['method'](_0x476e10['AnNTs'])['invoke'](_0x5c5998),_0x42c31e;
    }
    function _0x41a4cf(_0x1f073c,_0x327557='',_0x42df87=[-0x9ad*0x2+0x1ebe+-0x35*0x37,-0x6f7*-0x1+-0x185f+0x1*0x1169,-0x2297+-0x1f1d*-0x1+0x37b,0x1*0x106f+0x1b7c+-0x2bea],_0x5320e5=_0x4c14b4,_0x5150d8=_0x268d36) {
        const _0x566cd8=_0x240047,_0x1ed3e2=_0x476e10['lYkMe'](_0x225333,_0x476e10['xmgGA'](_0xb7e991,_0x4c14b4,_0x554b79,_0x268d36,-0xfc9*-0x1+-0x684+-0x4f*0x1e,[-0x3*0x533+0x26a1+-0x43*0x58,-0x2399*-0x1+-0x2553+0x1ba,0x1*-0x986+-0x1914+0xce*0x2b,-0xc3f+0x1af0+0x1*-0xeb1],_0x476e10['pUqkT'](_0xc4cf2f,_0x1f073c)),_0x1c8d47);
        _0x1ed3e2['method'](_0x476e10['oMfjL'])['invoke'](Il2Cpp['string'](_0x327557)),(_0x79991c&&!_0x79991c['isNull']()&&_0x1ed3e2['method'](_0x476e10['xfcpq'])['invoke'](_0x79991c)),_0x1ed3e2['method'](_0x476e10['wYrAP'])['invoke'](1),_0x1ed3e2['method'](_0x476e10['mlCnr'])['invoke'](_0x42df87),_0x1ed3e2['method'](_0x476e10['NIntI'])['invoke'](2),_0x1ed3e2['method'](_0x476e10['yYsGy'])['invoke'](4),_0x1ed3e2['method'](_0x476e10['YQAmG'])['invoke'](!![]),_0x1ed3e2['method'](_0x476e10['wnmyw'])['invoke'](0);
        const _0x82d156=_0x476e10['wIoQl'](_0x2e156d,_0x1ed3e2,_0x5ecf1d);
        _0x82d156['method'](_0x476e10['hAgDp'])['invoke'](_0x5150d8),_0x82d156['method'](_0x476e10['ZKeBc'])['invoke'](_0x5320e5),_0x82d156['method'](_0x476e10['yqzdi'])['invoke'](_0x4088e6['method'](_0x476e10['sDZcS'])['invoke'](0x76d*-0x1+-0x1*0x10f4+0x1915*0x1,-0xd*-0x67+-0x637*0x5+0x1a32,-0x1019+-0x4e*-0x52+-0x889));
    }
    function _0x4a823a(_0x364ffe,_0x2ad69e) {
        const _0x19ffd4=_0x240047,_0x2bf72c=Il2Cpp['domain']['assembly'](_0x476e10['uyrgn'])['image']['class'](_0x476e10['TdDEc']),_0xf1eab5=_0x476e10['MPZmC'](_0x2e156d,_0x364ffe,_0x2bf72c);
        if(!_0xf1eab5)return;
        const _0x55b628=_0xf1eab5['method'](_0x476e10['ZPxAz'])['invoke']();
        _0x55b628['method'](_0x476e10['mlCnr'])['invoke'](_0x2ad69e['enabled']?buttonPressedColor:buttonColor);
    }
    function _0x421954() {
        const _0x5e788d=_0x240047;
        _0x476e10['CdBQN'](menu,null)&&(_0x1f7740['method'](_0x476e10['iBVau'],-0x1374+0x766*-0x3+0x29a7)['invoke'](menu),menu=null);
    }
    let _0x4cf435=![],_0xbf68d3=null,_0x3edbd5=null,_0x49110b=null;
    let _n5MenuRebuildLock=false;
    let _n5BtnLastClickTime=0;
    const _n5BtnDebounce=0.08;
    function _0x1ab2e6() {
        const _0x1c13ee=_0x240047,_0x3d7a43= {
            'LDdpr':function(_0x7f2ce3,_0x1b5be8,_0x62b1f1,_0x235de4,_0x1373f1,_0x24b59c,_0x3218f1) {
                const _0x38cda7=_0x291a;
                return _0x476e10['xmgGA'](_0x7f2ce3,_0x1b5be8,_0x62b1f1,_0x235de4,_0x1373f1,_0x24b59c,_0x3218f1);
            },
            'XJGsg':function(_0x4c0a22,_0x1883ea) {
                const _0xbf32ed=_0x291a;
                return _0x476e10['nTNZb'](_0x4c0a22,_0x1883ea);
            },
            'bdQaQ':function(_0x2f503a,_0x3e0cca) {
                const _0x2b8050=_0x291a;
                return _0x476e10['qtNkl'](_0x2f503a,_0x3e0cca);
            },
            'JNYOP':function(_0x3274e8,_0x381df5) {
                const _0x26b837=_0x291a;
                return _0x476e10['FSoXy'](_0x3274e8,_0x381df5);
            },
            'qQmYx':_0x476e10['DmuFQ'],'OKHYz':function(_0x2d57b0,_0x43213b) {
                const _0xe95fad=_0x1c13ee;
                return _0x476e10['ACbPx'](_0x2d57b0,_0x43213b);
            },
            'vNyql':function(_0x248a38,_0x1d4236,_0x39bd75) {
                const _0x3a6aea=_0x1c13ee;
                return _0x476e10['MPZmC'](_0x248a38,_0x1d4236,_0x39bd75);
            },
            'amQmJ':function(_0x4abdef,_0x206182,_0xbc538e) {
                const _0x4c332e=_0x1c13ee;
                return _0x476e10['xPfzf'](_0x4abdef,_0x206182,_0xbc538e);
            },
            'QsNAd':_0x476e10['iYafP'],'JZQOO':function(_0x206e7b,_0x56fd39,_0x80fa8b,_0x465411,_0x14fdcd,_0xaf2860) {
                const _0x474816=_0x1c13ee;
                return _0x476e10['lNtEs'](_0x206e7b,_0x56fd39,_0x80fa8b,_0x465411,_0x14fdcd,_0xaf2860);
            },
            'NgUXi':function(_0xa1c283,_0x5c9adf) {
                const _0x171593=_0x1c13ee;
                return _0x476e10['nTNZb'](_0xa1c283,_0x5c9adf);
            }
        };

        if(menu!=null){ try{ _0x476e10['pUqkT'](_0x5a6201,_0x476e10['WTlRF'](_0x2e156d,menu,_0x2a57e3)); }catch(_){} menu=null; }
        menu=_0x476e10['lNtEs'](_0xb7e991,_0x4c14b4,_0x554b79,[-0x2bb*-0x6+0x7*-0x2d7+0x37f+0.1,0xaab+0x1*-0x76d+0xa6*-0x5+0.3,-0x17ff*0x1+-0x1*-0x1591+0x2*0x137+0.3825],-0x6*0x1c9+0x3*0xb44+-0x1713,[-0x1983+-0x1*0x1402+0x10f*0x2b,-0x1db5+-0x247+0x1ffc,0x1*-0x12af+0x26f0+-0x1441,0x1*0x1bb6+0x2e*0x9f+-0x3848]);
        const _0x384732=_0x476e10['mXMjO'](_0xb7e991,[0x12*-0x19c+-0x35*-0x97+-0x1*0x24b+0.1,0x614*-0x1+-0x7e2*0x2+0x6*0x3a4,-0x1*-0x21e5+-0x11*0x32+-0x1*0x1e93],_0x554b79,[-0x3b*0x63+-0x1c0+-0x1891*-0x1+0.1,-0xef+0x1*-0x1b79+0x1c69,0x1153+0x2387+-0x34d9],0x7*-0x43f+-0x10c5*0x1+-0x94d*-0x5,bgColor,_0x476e10['EVAzO'](_0xc4cf2f,menu));
        _0x476e10['BqshU'](_0x5a6201,_0x476e10['xPfzf'](_0x2e156d,_0x384732,_0x2a57e3));
        const _0x5b623b=_0x476e10['mXMjO'](_0xb7e991,_0x4c14b4,_0x554b79,_0x268d36,-0x1*-0x1a5f+0x771+-0x21cd,[-0x359*0x5+-0x8e8*-0x1+-0x5*-0x191,-0x1*-0x1632+-0x11*-0x115+-0x2897*0x1,-0x17db+-0x185f+-0x2*-0x181d,0x43*-0x2+0x1bfa+-0x1b74],_0x476e10['BqshU'](_0xc4cf2f,menu)),_0xe5a63f=_0x476e10['zUTTG'](_0x225333,_0x5b623b,_0x2b2aa3);
        _0x476e10['wwKEr'](_0x5a6201,_0x476e10['SuupE'](_0x2e156d,_0x5b623b,_0x2a57e3));
        const _0xff93fa=_0x476e10['sdfbr'](_0x225333,_0x5b623b,_0x26d1eb);
        _0x476e10['pRxna'](_0x225333,_0x5b623b,_0x1f4de3),_0xe5a63f['method'](_0x476e10['fmjXF'])['invoke'](2),_0xff93fa['method'](_0x476e10['jSKhc'])['invoke'](1000),_0x476e10['lNtEs'](_0x41a4cf,_0x5b623b,(()=>{
    const _pg=currentPage+1;
    const _mp=Math.max(1,Math.ceil(_0x8d3cef[currentCategory].length/8));
    const _acH=n5ToHex(n5AccentColor[0],n5AccentColor[1],n5AccentColor[2]);
    const _sep='<color=#526071>  |  </color>';
    const _pgStr='<color='+_acH+'><b>PAGE '+_pg+'/'+_mp+'</b></color>';
    return menuName+_sep+_pgStr;
})(),[1,1,1,1],[0x220a+-0x2*0x1309+0xc*0x56+0.11,-0x3*-0xc8a+-0x5*-0x1f9+0x8f*-0x55,-0x144c+-0x17e*0x1a+-0x1f*-0x1e8+0.175],[0x1fec+0x1ab*0xe+0x3745*-0x1,0x128+-0x130c*0x1+0x11e4+0.1]);
        if(_0x476e10['XkLGr'](time,notifactionResetTime))currentNotification='';
        _0x476e10['lNtEs'](_0x41a4cf,_0x5b623b,(()=>{
    if(!currentNotification) return '';
    const _acH=n5ToHex(n5AccentColor[0],n5AccentColor[1],n5AccentColor[2]);
    let _n=currentNotification;
    if(_n.indexOf('<color')>=0||_n.indexOf('<b>')>=0) return _n;
    if(_n.startsWith('')||_n.startsWith('')||_n.startsWith('')||_n.startsWith(''))
        return '<color='+_acH+'><b>'+_n+'</b></color>';
    if(_n.startsWith('')||_n.startsWith('')||_n.startsWith(''))
        return '<color=#ff5555><b>'+_n+'</b></color>';
    if(_n.startsWith('')||_n.startsWith('BLOCKED'))
        return '<color=#ff88ff><b>'+_n+'</b></color>';
    return '<color='+_acH+'> '+_n+'</color>';
})(),textColor,[0x189c+-0xe09+-0xa93+0.11,0x7d1+-0x11*0x1bf+0x2*0xaef,-0x163+0x105c+-0xef9+0.275],[0x203d+-0x13+-0x2029,0x21*-0x99+-0x18d8+0x2c91+0.1]);
        const _0xfdad78=_0x476e10['xmgGA'](_0xb7e991,[0x962+0x1*-0x1652+0xcf0+0.1,0,0.225],_0x554b79,[0x23f8*-0x1+-0x2170+0x4568+0.09,0.9,0.08],0x1328+-0x26d3+-0x2*-0x9d7,buttonColor,_0x476e10['FSoXy'](_0xc4cf2f,menu),!![]);
        _0xfdad78['method'](_0x476e10['DmuFQ'])['invoke'](Il2Cpp['string'](_0x476e10['JdRnB'])),_0x476e10['SuupE'](_0x225333,_0xfdad78,_0x73884e),_0x476e10['lYkMe'](_0x2e156d,_0xfdad78,_0x2a57e3)['method'](_0x476e10['iYafP'])['invoke'](!![]),_0x476e10['lNtEs'](_0x41a4cf,_0x5b623b,(()=>{const _acH=n5ToHex(n5AccentColor[0],n5AccentColor[1],n5AccentColor[2]);return '<color='+_acH+'></color> <color=#ff5555><b>'+_0x476e10['gjAjh']+'</b></color>\n<size=9><color='+_acH+'>ITEM:</color> '+itemIDs[itemIndex]+'\n<color='+_acH+'>PREFAB:</color> '+prefabList[prefabIndex]+'</size>';})(),textColor,[0x203*-0x1+-0x52c*0x1+0x265*0x3+0.11,0,0.225],[0xca3*-0x3+0x17f3*-0x1+0x3ddd,0x4e8+0xe2b+-0x1313+0.1]);
        const _0x834bb0=_0x476e10['xmgGA'](_0xb7e991,[0x962+0x1*-0x1652+0xcf0+0.1,-(-0x22ad+-0xd47+0x24*0x155+0.175),-(-0x8c+0x6*-0x26d+0x2*0x78d+0.225)],_0x554b79,[0x23f8*-0x1+-0x2170+0x4568+0.09,-0x1e0a+-0x1*0x881+-0x268b*-0x1+0.09,-0x218b+0x1837+0x954+0.09],0x1328+-0x26d3+-0x2*-0x9d7,buttonColor,_0x476e10['FSoXy'](_0xc4cf2f,menu));
        _0x834bb0['method'](_0x476e10['DmuFQ'])['invoke'](Il2Cpp['string'](_0x476e10['ijSuS'])),_0x476e10['SuupE'](_0x225333,_0x834bb0,_0x73884e),_0x476e10['lYkMe'](_0x2e156d,_0x834bb0,_0x2a57e3)['method'](_0x476e10['iYafP'])['invoke'](!![]),_0x476e10['lNtEs'](_0x41a4cf,_0x5b623b,'<',textColor,[0x203*-0x1+-0x52c*0x1+0x265*0x3+0.11,-(0xf*0x26b+0x1684+-0x3ac9*0x1+0.175),-(-0x19d0+-0x671+0x167*0x17+0.225)],[0xca3*-0x3+0x17f3*-0x1+0x3ddd,0x4e8+0xe2b+-0x1313+0.1]);
        {
            const _0x50be99=_0x476e10['xmgGA'](_0xb7e991,[0x1a9d+-0x1e91+-0x2c*-0x17+0.1,0.2,0],_0x554b79,[-0x1eb2*-0x1+-0x1*0x258d+0x2d*0x27+0.09,0.2,0.9],0x151*0x1b+-0x2372*0x1+-0x16,buttonColor,_0x476e10['bteOE'](_0xc4cf2f,menu));
            _0x50be99['method'](_0x476e10['DmuFQ'])['invoke'](Il2Cpp['string'](_0x476e10['wpbwJ'])),_0x476e10['CjWXd'](_0x225333,_0x50be99,_0x73884e),_0x476e10['rybdc'](_0x2e156d,_0x50be99,_0x2a57e3)['method'](_0x476e10['iYafP'])['invoke'](!![]),_0x476e10['lNtEs'](_0x41a4cf,_0x5b623b,'<',textColor,[0x203*-0x1+-0x52c*0x1+0x265*0x3+0.11,0.2,0],[0xca3*-0x3+0x17f3*-0x1+0x3ddd,0x4e8+0xe2b+-0x1313+0.1]);
        }
        {
            const _0x7789d=_0x476e10['xmgGA'](_0xb7e991,[0x1a9d+-0x1e91+-0x2c*-0x17+0.1,-(0x78+-0xa4*-0x3b+-0x2644+0.2),-0x1af4+-0x21ef+0x4af*0xd],_0x554b79,[-0x1eb2*-0x1+-0x1*0x258d+0x2d*0x27+0.09,-0x3*-0x3f5+-0x775+-0x46a+0.2,0x21c0+0xd27+-0x2ee7+0.9],0x151*0x1b+-0x2372*0x1+-0x16,buttonColor,_0x476e10['bteOE'](_0xc4cf2f,menu));
            _0x7789d['method'](_0x476e10['DmuFQ'])['invoke'](Il2Cpp['string'](_0x476e10['rEFtT'])),_0x476e10['CjWXd'](_0x225333,_0x7789d,_0x73884e),_0x476e10['rybdc'](_0x2e156d,_0x7789d,_0x2a57e3)['method'](_0x476e10['iYafP'])['invoke'](!![]),_0x476e10['lNtEs'](_0x41a4cf,_0x5b623b,'>',textColor,[-0x1*0x1f49+-0x1939+0x1*0x3882+0.11,-(-0x173e+-0x2380+0x1*0x3abe+0.2),0x133f+-0xd55+-0x2f5*0x2],[-0x2338+-0x650+0x2989,0x2ba+0x1467+-0x1f*0xbf+0.1]);
        }
        let _0x5dd0d9=0x1b49+-0x1acf+0x3d*-0x2;
        const _0x2f164f=_0x8d3cef[currentCategory]['slice'](_0x476e10['prnYe'](currentPage,-0x1*0x19a8+-0x6c7*0x2+0x273e))['slice'](0x2415+0x1766+-0x3b7b,0x6e3+0xd*-0xf1+-0x1*-0x562);
        _0x2f164f['forEach'](_0x8eacf2=> {
            const _0x1efe69=_0x1c13ee,_0x3178cd=_0x3d7a43['LDdpr'](_0xb7e991,[0x86*-0x40+0x953+0x182d+0.105,0x1d0c+0xfc4+-0x2cd0,_0x3d7a43['XJGsg'](-0x1fd*-0x5+-0x38e+-0x663+0.13,_0x3d7a43['bdQaQ'](_0x5dd0d9,-0x1*0x10ce+0x3*0xa43+0xdfb*-0x1+0.04))],_0x554b79,[0x1d0c+-0x1*0x1837+-0x4d5+0.09,0xe*-0x84+0x8*-0x151+-0x8e0*-0x2+0.9,-0x1*-0x188c+-0x25d5+-0xb3*-0x13+0.08],-0x69e+0x1125+-0xa84*0x1,buttonColor,_0x3d7a43['JNYOP'](_0xc4cf2f,menu));
            _0x3178cd['method'](_0x3d7a43['qQmYx'])['invoke'](Il2Cpp['string'](_0x3d7a43['OKHYz']('@',_0x8eacf2['buttonText']))),_0x3d7a43['vNyql'](_0x225333,_0x3178cd,_0x73884e),_0x3d7a43['amQmJ'](_0x2e156d,_0x3178cd,_0x2a57e3)['method'](_0x3d7a43['QsNAd'])['invoke'](!![]),_0x3d7a43['JZQOO'](_0x41a4cf,_0x5b623b,(()=>{
    const _raw=String(_0x8eacf2['buttonText']||'');
    const _acH=n5ToHex(n5AccentColor[0],n5AccentColor[1],n5AccentColor[2]);
    const _txtH=n5ToHex(textColor[0],textColor[1],textColor[2]);
    const _sel=(_n5PCMode&&_n5PCMenuOpen&&_0x5dd0d9===_n5PCMenuSelector);
    const _pre=_sel?'<color='+_acH+'><b>> </b></color>':'';
    if(_raw.indexOf('<color')>=0) return _raw;
    if(_0x8eacf2['isTogglable']){
        return _0x8eacf2['enabled']
            ? _pre+'<b><color='+_acH+'>'+_raw+'</color></b>  <color=#7dffcf><b>ON</b></color>'
            : _pre+'<color=#d9e6f4>'+_raw+'</color>  <color=#718094>OFF</color>';
    }
    if(_raw.startsWith('<<')||_raw.includes('Back')) return _pre+'<color=#aebbd0>'+_raw+'</color>';
    if(_raw.includes('->')||_raw.startsWith('>>')) return _pre+'<b><color='+_acH+'>'+_raw+'</color></b>';
    return _pre+'<color='+_txtH+'>'+_raw+'</color>';
})(),textColor,[-0x441+0x785+-0x344+0.11,-0xdab*0x2+0x68*0xd+0x160e,_0x3d7a43['NgUXi'](0x1da*-0x1+-0x1d2e+0x7c2*0x4+0.13,_0x3d7a43['bdQaQ'](_0x5dd0d9,-0xb7*0x2b+-0xe2c*0x2+-0x3b15*-0x1+0.04))],[0x1a7*-0xc+0x5a*-0x1d+0x1e07,-0x58f*0x3+0x2318+-0x126b+0.1]),_0x3d7a43['vNyql'](_0x4a823a,_0x3178cd,_0x8eacf2),_0x5dd0d9++;
        }
        ),_0x476e10['nnOEy'](_0xc4cf2f,menu)['method'](_0x476e10['AnNTs'])['invoke'](_0xe4d316['method'](_0x476e10['BGmZg'])['invoke'](_0xe4d316['method'](_0x476e10['BGmZg'])['invoke'](_0x476e10['EVAzO'](_0xc4cf2f,menu)['method'](_0x476e10['qCzPa'])['invoke'](),_0x199f18['field'](_0x476e10['CiTel'])['value']),menuscale));

    }
    function _0x17df8c() {
        const _0x5cb805=_0x240047,_0x574d35=_0x476e10['qSThl']['split']('|');
        let _0x1af221=-0x2100+0x1447+-0xcb9*-0x1;
        while(!![]) {
            switch(_0x574d35[_0x1af221++]) {
                case'0':referenceCollider=_0x476e10['rybdc'](_0x2e156d,reference,_0x44c8fe);
                continue;
                case'1':righthand?reference=_0x476e10['xmgGA'](_0xb7e991,_0x4c14b4,_0x554b79,[0xa8e+0x19a9+-0x2437+0.01,-0x12b5*-0x1+-0x145c+0x1a7+0.01,0xa21+0x1a0d+0x242e*-0x1+0.01],0x20a1*-0x1+-0xd99*-0x2+0x56f*0x1,bgColor,_0x28a850):reference=_0x476e10['xmgGA'](_0xb7e991,_0x4c14b4,_0x554b79,[0x302+-0x7c3+0x4c1+0.01,0x18fc+-0x1a3*0x1+0x1*-0x1759+0.01,-0xc*0x1c6+-0x24a2+-0x6*-0x9a7+0.01],0x491+0xb*0x2bd+0x5c8*-0x6,bgColor,_0x35ade8);
                continue;
                case'2':_0x476e10['UEKyQ'](_0xc4cf2f,reference)['method'](_0x476e10['FLCTo'])['invoke']([0x93b+0xb*0x85+0x779*-0x2+0.01,-(0x25*0x88+0x216c+-0x3514+0.117),-0x1a7b+0xa4d+0x102e+0.05]);
                continue;
                case'3':reference['method'](_0x476e10['XtUBy'])['invoke'](2);
                continue;
                case'4':_0x476e10['lYkMe'](_0x225333,reference,_0x1d3a80)['method'](_0x476e10['cLyfd'])['invoke'](!![]);
                continue;
            }
            break;
        }
    }
    function n5ManagedArrayLength(_arr){
        if(!_arr)return 0;
        try{if(typeof _arr['length']==='number')return _arr['length'];}catch(_){}
        try{if(typeof _arr['get_Length']==='function')return _arr['get_Length']();}catch(_){}
        try{if(_arr['method'])return _arr['method']('get_Length')['invoke']();}catch(_){}
        try{if(_arr['field'])return _arr['field']('Length')['value'];}catch(_){}
        return 0;
    }
    function n5ManagedArrayGet(_arr,_i){
        if(!_arr)return null;
        try{if(_arr.get)return _arr.get(_i);}catch(_){}
        try{if(_arr['method'])return _arr['method']('GetValue')['invoke'](_i);}catch(_){}
        try{return _arr[_i];}catch(_){}
        return null;
    }
    // --- Dabeans-style cached Physics overloads (prevents per-frame re-resolution that causes phasing) ---
    let _n5physRayAll4=null,_n5physRayOut5=null;
    function _n5ensurePhysicsOverloads(){
        if(!_n5physRayAll4){
            try{_n5physRayAll4=_0x58eca4['method']('RaycastAll')['overload']('UnityEngine.Vector3','UnityEngine.Vector3','System.Single','System.Int32');}catch(_){_n5physRayAll4=null;}
        }
        if(!_n5physRayOut5){
            try{_n5physRayOut5=_0x58eca4['method']('Raycast')['overload']('UnityEngine.Vector3','UnityEngine.Vector3','UnityEngine.RaycastHit&','System.Single','System.Int32');}catch(_){_n5physRayOut5=null;}
        }
    }
    function n5RayHitDistance(_hit,_origin){
        try{
            const _d=_hit['method']('get_distance')['invoke']();
            if(typeof _d==='number'&&isFinite(_d))return _d;
        }catch(_){}
        try{return _0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_hit['method'](_0x476e10['avlli'])['invoke'](),_origin);}catch(_){}
        return Infinity;
    }
    function _0x22649c(_0x50299f=null) {
        const _0x108063=_0x240047,_0x15c8ef=(_0x50299f===null||_0x50299f===undefined)?-1:_0x50299f;
        let _0x5a3846=_0x35ade8['method'](_0x476e10['YApVv'])['invoke'](),_0x4b17be=_0x35ade8['method'](_0x476e10['itVwD'])['invoke']();
        if(_n5PCMode){
            try{
                const _cam=_0x428c96['class']('UnityEngine.Camera')['method']('get_main')['invoke']();
                if(_cam&&!_cam['isNull']()){
                    const _ct=_0xc4cf2f(_cam);
                    if(_ct&&!_ct['isNull']()){
                        _0x5a3846=_ct['method'](_0x476e10['YApVv'])['invoke']();
                        _0x4b17be=_ct['method'](_0x476e10['itVwD'])['invoke']();
                    }
                }
            }catch(_){}
        }
        const _0x42cce5=_0xe4d316['method'](_0x476e10['BGmZg'],2)['invoke'](_0x4b17be,0.08),_0x6b8be1=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_0x5a3846,_0x42cce5);
        let _0xec75ea=Infinity,_0x244934=null;
        const _0x242b5d=(_0x4517e9,_0x3a4578)=>{
            try{
                if(!_0x4517e9||(_0x4517e9['isNull']&&_0x4517e9['isNull']()))return true;
                const _0x563d94=n5RayHitDistance(_0x3a4578,_0x5a3846);
                if(_0x563d94<0.08)return true;
                const _ct=_4517e9=>{try{return _4517e9['method']('get_transform')['invoke']();}catch(_){return null;}};
                const _tr=_ct(_0x4517e9);
                if(_tr){
                    for(const _skip of [menu,reference,_0x3edbd5,_0x49110b]){
                        if(!_skip)continue;
                        try{const _st=_0xc4cf2f(_skip);if(_st&&_tr['method']('IsChildOf')['invoke'](_st))return true;}catch(_){}
                    }
                }
            }catch(_){}
            return false;
        };
        // Use cached overloads (Dabeans-style) to prevent per-frame re-resolution that causes phasing
        _n5ensurePhysicsOverloads();
        try{
            let _0x48f6d9=null;
            if(_n5physRayAll4){
                try{_0x48f6d9=_n5physRayAll4['invoke'](_0x6b8be1,_0x4b17be,512.0,_0x15c8ef);}catch(_){_0x48f6d9=null;}
            }
            if(!_0x48f6d9){
                try{_0x48f6d9=_0x58eca4['method']('RaycastAll')['overload']('UnityEngine.Vector3','UnityEngine.Vector3','System.Single','System.Int32')['invoke'](_0x6b8be1,_0x4b17be,512.0,_0x15c8ef);}catch(_){_0x48f6d9=_0x58eca4['method']('RaycastAll')['overload']('UnityEngine.Vector3','UnityEngine.Vector3','System.Single','System.Int32','UnityEngine.QueryTriggerInteraction')['invoke'](_0x6b8be1,_0x4b17be,512.0,_0x15c8ef,2);}
            }
            let _0x4f1c1a=n5ManagedArrayLength(_0x48f6d9);
            for(let _0x3e482b=0;_0x3e482b<_0x4f1c1a;_0x3e482b++){
                try{
                    let _0x3a4578=n5ManagedArrayGet(_0x48f6d9,_0x3e482b);
                    if(!_0x3a4578||(_0x3a4578['isNull']&&_0x3a4578['isNull']()))continue;
                    const _0x4517e9=_0x3a4578['method']('get_collider')['invoke']();
                    if(!_0x4517e9||(_0x4517e9['isNull']&&_0x4517e9['isNull']()))continue;
                    if(_0x242b5d(_0x4517e9,_0x3a4578))continue;
                    const _0x563d94=n5RayHitDistance(_0x3a4578,_0x5a3846);
                    if(_0x563d94>=0.08&&_0x563d94<_0xec75ea){_0x244934=_0x3a4578;_0xec75ea=_0x563d94;}
                }catch(_){}
            }
        }catch(_){}
        if(!_0x244934){
            try{
                const _0x3638c5=Il2Cpp['alloc'](128);
                // Use cached overload (Dabeans-style) - prevents re-resolution causing gun phasing
                const _0x3a789c=_n5physRayOut5||_0x58eca4['method']('Raycast')['overload']('UnityEngine.Vector3','UnityEngine.Vector3','UnityEngine.RaycastHit&','System.Single','System.Int32');
                if(_0x3a789c['invoke'](_0x6b8be1,_0x4b17be,_0x3638c5,512.0,_0x15c8ef)){
                    const _0x2e3b04=Il2Cpp['reference'](_0x3638c5);
                    try{const _0x4517e9=_0x2e3b04['method']('get_collider')['invoke']();if(_0x242b5d(_0x4517e9,_0x2e3b04))throw new Error('self ray hit');}catch(_skip){throw _skip;}
                    const _0x563d94=n5RayHitDistance(_0x2e3b04,_0x5a3846);
                    if(_0x563d94>=0.08)_0x244934=_0x2e3b04;
                }
            }catch(_){}
        }
        let _0x4f0626;
        if(_0x4cf435&&_0xbf68d3){
            _0x4f0626=_0x476e10['RInAn'](_0xc4cf2f,_0xbf68d3)['method'](_0x476e10['YApVv'])['invoke']();
        } else if(_0x244934){
            _0x4f0626=_0x244934['method'](_0x476e10['avlli'])['invoke']();
        } else {
            _0x4f0626=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_0x5a3846,_0xe4d316['method'](_0x476e10['BGmZg'])['invoke'](_0x4b17be,5));
        }
        if(_0xe4d316['method'](_0x476e10['uPcrt'])['invoke'](_0x4f0626,_0x4c14b4)) {
            const _0x5bf8f7=_0xe4d316['method'](_0x476e10['BGmZg'])['invoke'](_0x4b17be,0x1cd4+0x199*0x1+0x13*-0x17f);
            _0x4f0626=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_0x5a3846,_0x5bf8f7);
        }
        _0x476e10['uzhlw'](_0x3edbd5,null)&&(_0x3edbd5=_0x476e10['BCEea'](_0xb7e991,_0x4f0626,_0x554b79,[0x1aff*0x1+-0x1*0x1311+-0xa*0xcb+0.1,0x1b6+0x2485+-0x263b*0x1+0.1,-0x135c+0x3*0xab1+0x1d1*-0x7+0.1],-0x1224+-0x200a+0x3*0x10ba,[0x7eb+-0x1322+0xb38,0x3*0x4e1+0x183*-0x19+-0x1729*-0x1,0x1089*-0x2+-0x156+0x1*0x2269,-0x12ee+0x16df+0x1c*-0x24]));
        _0x3edbd5['method'](_0x476e10['mkqJb'])['invoke'](!![]);
        const _0x2cddde=_0x476e10['BqshU'](_0xc4cf2f,_0x3edbd5);
        _0x2cddde['method'](_0x476e10['ZKeBc'])['invoke'](_0x4f0626);
        const _0x4f5402=_0x476e10['MPZmC'](_0x2e156d,_0x3edbd5,_0x10def1),_0x24580f=_0x4f5402['method'](_0x476e10['ZPxAz'])['invoke']();
        _0x24580f['method'](_0x476e10['frUDt'])['invoke'](_0x41b7a8);
        const _0x465c8b=_0x476e10['RVszv'](_0x4cf435,rightTrigger)?buttonPressedColor:buttonColor;
        _0x24580f['method'](_0x476e10['mlCnr'])['invoke'](_0x465c8b);
        let _0xe8e4bd=_0x476e10['owkuk'](_0x2e156d,_0x3edbd5,_0x44c8fe);
        try{
            if(!_0xe8e4bd||(_0xe8e4bd['handle']&&_0xe8e4bd['handle']['isNull']()))_0xe8e4bd=_0x225333(_0x3edbd5,_0x2a57e3);
            if(_0xe8e4bd&&(!_0xe8e4bd['handle']||!_0xe8e4bd['handle']['isNull']())){
                try{_0xe8e4bd['method'](_0x476e10['nORQm'])['invoke'](true);}catch(_){}
                try{_0xe8e4bd['method'](_0x476e10['iYafP'])['invoke'](true);}catch(_){}
                try{_0xe8e4bd['method']('set_size')['invoke']([0.16,0.16,0.16]);}catch(_){}
            }
        }catch(_collErr){console.error('[N5 GunLib collider]',_collErr);}
        if(_0x476e10['uzhlw'](_0x49110b,null)) {
            const _0xcbb072=_0x476e10['vUcNQ'](_0xb7e991,_0x4c14b4,_0x554b79,_0x268d36,-0x19c8+-0x305*0x1+-0x1*-0x1ccd,[0x9f5+-0xaf*-0x29+0x25fc*-0x1,0x1748+0x40+0x3ec*-0x6,-0xa06+0x1*-0xae3+0x14e9*0x1,-0x1265+0x1278*0x2+0x65*-0x2f]);
            _0x49110b=_0x476e10['mNBvp'](_0x225333,_0xcbb072,_0x261aab);
        }
        else _0x49110b['method'](_0x476e10['ZqQpU'])['invoke']()['method'](_0x476e10['mkqJb'])['invoke'](!![]);
        const _0xbeaabe=_0x49110b['method'](_0x476e10['ZPxAz'])['invoke']();
        _0xbeaabe['method'](_0x476e10['frUDt'])['invoke'](_0x41b7a8),_0x49110b['method'](_0x476e10['HZCjb'])['invoke'](gunColor),_0x49110b['method'](_0x476e10['ElkkU'])['invoke'](gunColor);
        const _0xd4bbbc=0x1179+-0x1ed+-0xf8c+0.025;
        _0x49110b['method'](_0x476e10['rnFwP'])['invoke'](_0xd4bbbc),_0x49110b['method'](_0x476e10['SfaKK'])['invoke'](_0xd4bbbc),_0x49110b['method'](_0x476e10['dvkTr'])['invoke'](2),_0x49110b['method'](_0x476e10['Ldety'])['invoke'](!![]),_0x49110b['method'](_0x476e10['RqRBv'])['invoke'](-0xe7a+0xc*-0x45+0x11b6,_0x5a3846),_0x49110b['method'](_0x476e10['RqRBv'])['invoke'](-0x13*0x32+0x192d+-0x1576,_0x4f0626);
        if(_0x476e10['RVszv'](rightTrigger,_0x4cf435)) {
            const _0x5bcb82=0x1*0x1b41+0xb93+0x1365*-0x2;
            _0x49110b['method'](_0x476e10['dvkTr'])['invoke'](_0x5bcb82),_0x49110b['method'](_0x476e10['RqRBv'])['invoke'](-0xa5c+-0x1*-0x1723+-0xcc7,_0x5a3846);
            for(let _0x40234c=-0x1e10+-0x16c+0x1f7d*0x1;
            _0x476e10['EDrfY'](_0x40234c,_0x476e10['nTNZb'](_0x5bcb82,-0x4b*-0x9+0x32b*0x8+-0x1bfa));
            _0x40234c++) {
                const _0x37cdb2=_0x476e10['PmWsx'](_0x40234c,_0x476e10['JSpiZ'](_0x5bcb82,0x5*-0xd+0xd*0x61+-0x4ab)),_0x4eb4b9=_0xe4d316['method'](_0x476e10['kaWqJ'])['invoke'](_0x5a3846,_0x4f0626,_0x37cdb2),_0x5cf6d1=Math['random']();
                let _0x180a5e=_0x4c14b4;
                _0x476e10['XkLGr'](_0x5cf6d1,-0xb57*0x1+0xb20*0x2+0x39*-0x31+0.75)&&(_0x180a5e=[_0x476e10['OgOfv'](_0x476e10['qtNkl'](Math['random'](),-0xdaf*-0x2+0xd1e*-0x2+-0x122+0.2),-0x1167+0x1fae+-0xe47+0.1),_0x476e10['JSpiZ'](_0x476e10['qtNkl'](Math['random'](),0xa82+0x31*-0x2b+0x1*-0x247+0.2),-0x7d+0x3*-0x3bd+-0x4*-0x2ed+0.1),_0x476e10['OgOfv'](_0x476e10['SBWkx'](Math['random'](),0x1698+-0x5*-0x626+-0x1aab*0x2+0.2),0xaf*0x4+0x17*-0xdf+0x114d+0.1)]);
                const _0x204e08=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_0x4eb4b9,_0x180a5e);
                _0x49110b['method'](_0x476e10['RqRBv'])['invoke'](_0x40234c,_0x204e08);
            }
            _0x49110b['method'](_0x476e10['RqRBv'])['invoke'](_0x476e10['JSpiZ'](_0x5bcb82,0x283*0x4+0x1282+-0x1c8d),_0x4f0626);
        }
        const _0x2d86bb={
            'isNull':()=>false,
            'method':(_name,..._args)=>{
                if(_0x244934)return _0x244934['method'](_name,..._args);
                if(_name===_0x476e10['avlli']||_name==='get_point')return {'invoke':()=>_0x4f0626};
                return {'invoke':()=>null};
            },
            'raw':_0x244934||null
        };
        return {
            'ray':_0x2d86bb,'gunPointer':_0x3edbd5,'point':_0x4f0626,'endPosition':_0x4f0626
        };
    }
    function _0x40c67f() {
        const _0x1956d2=_0x240047,_0xd36c0b=_0x476e10['XnAck'](_0xc4cf2f,menu);
        let _0x161a65,_0x1ee16c;
        righthand?(_0x161a65=_0x35ade8['method'](_0x476e10['YApVv'])['invoke'](),_0x1ee16c=_0x35ade8['method'](_0x476e10['YqqIM'])['invoke'](),_0x1ee16c=_0x4088e6['method'](_0x476e10['BGmZg'])['invoke'](_0x1ee16c,_0x4088e6['method'](_0x476e10['sDZcS'])['invoke'](0x1*0xec8+-0x3*-0xcf2+0x1acf*-0x2,-0x1401+-0x1*0xda+0x14db,-0x116f*-0x1+-0x1*-0x1132+-0xc1*0x2d))):(_0x161a65=_0x28a850['method'](_0x476e10['YApVv'])['invoke'](),_0x1ee16c=_0x28a850['method'](_0x476e10['YqqIM'])['invoke']());
        if(LerpMenu) {
            const _0x6a5aa0=_0xd36c0b['method'](_0x476e10['YApVv'])['invoke'](),_0xdf476a=_0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_0x6a5aa0,_0x4c14b4);
            _0x476e10['EDrfY'](_0xdf476a,-0x3*-0xaee+0x3*0x535+-0x3068)?(_0xd36c0b['method'](_0x476e10['ZKeBc'])['invoke'](_0x161a65),_0xd36c0b['method'](_0x476e10['yqzdi'])['invoke'](_0x1ee16c)):(_0xd36c0b['method'](_0x476e10['ZKeBc'])['invoke'](_0xe4d316['method'](_0x476e10['kaWqJ'])['invoke'](_0x6a5aa0,_0x161a65,_0x476e10['bEquP'](deltaTime,0xf15+0x295*-0xe+0xd*0x1a0))),_0xd36c0b['method'](_0x476e10['yqzdi'])['invoke'](_0x4088e6['method'](_0x476e10['mwXyj'])['invoke'](_0xd36c0b['method'](_0x476e10['YqqIM'])['invoke'](),_0x1ee16c,_0x476e10['bEquP'](deltaTime,-0x735*-0x3+-0x1f65+0x9d5*0x1))));
        }
        else _0xd36c0b['method'](_0x476e10['ZKeBc'])['invoke'](_0x161a65),_0xd36c0b['method'](_0x476e10['yqzdi'])['invoke'](_0x1ee16c);
    }
    function n5EaseMenu(_x){
        _x=Math.max(0,Math.min(1,_x));
        return 1-Math.pow(1-_x,3);
    }
    function n5ApplyMenuAnimation(_wanted){
        try{
            if(!menu)return false;
            const _tf=_0xc4cf2f(menu);
            if(!_tf||_tf['isNull']())return false;
            if(!_n5MenuBaseScale){
                try{_n5MenuBaseScale=_tf['method'](_0x476e10['qCzPa'])['invoke']();}catch(_){_n5MenuBaseScale=[menuscale,menuscale,menuscale];}
            }
            _n5MenuAnim=_wanted?Math.min(1,_n5MenuAnim+(deltaTime*18)):Math.max(0,_n5MenuAnim-(deltaTime*18));
            _n5MenuAnimTarget=_wanted?1:0;
            const _open=n5EaseMenu(_n5MenuAnim);
            if(_n5MenuClickBounce>0)_n5MenuClickBounce=Math.max(0,_n5MenuClickBounce-(deltaTime*18));
            const _bounce=(_n5MenuClickBounce>0)?(1.0-0.16*Math.sin(_n5MenuClickBounce*Math.PI)):1.0;
            const _scale=Math.max(0.01,_open*_bounce);
            try{_tf['method'](_0x476e10['AnNTs'])['invoke'](_0xe4d316['method'](_0x476e10['BGmZg'])['invoke'](_n5MenuBaseScale,_scale));}catch(_){}
            _n5MenuClosing=false;
            _n5LastMenuWanted=_wanted;
            try{menu['method'](_0x476e10['mkqJb'])['invoke'](!!_wanted);}catch(_){}
            return _wanted||_n5MenuAnim>0.01;
        }catch(_e){return true;}
    }
    function _n5PCPositionMenuAtHead() {
        if (!menu) return;
        const _menuTf = _0xc4cf2f(menu);
        if (!_menuTf || _menuTf['isNull']()) return;
        let _headTf = null;
        try{
            const _cam=_0x428c96['class']('UnityEngine.Camera')['method']('get_main')['invoke']();
            if(_cam&&!_cam['isNull']()) _headTf=_0xc4cf2f(_cam);
        }catch(_){}
        if (!_headTf || _headTf['isNull']()) _headTf = _0xc4cf2f(_0x33fb14);
        if (!_headTf || _headTf['isNull']()) return;
        const _headPos = _headTf['method'](_0x476e10['YApVv'])['invoke']();
        const _yawR    = _n5PCYaw * Math.PI / 180;
        const _fwdX    = Math.sin(_yawR);
        const _fwdZ    = Math.cos(_yawR);
        const _offset  = [_fwdX * 1.15, -0.10, _fwdZ * 1.15];
        const _targetPos = _0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_headPos, _offset);
        const _menuRot   = _0x4088e6['method'](_0x476e10['sDZcS'])['invoke'](-90, _n5PCYaw + 90, 0);
        if (LerpMenu) {
            const _cur  = _menuTf['method'](_0x476e10['YApVv'])['invoke']();
            const _dist = _0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_cur, _0x4c14b4);
            if (_dist > 5) {
                _menuTf['method'](_0x476e10['ZKeBc'])['invoke'](_targetPos);
                _menuTf['method'](_0x476e10['yqzdi'])['invoke'](_menuRot);
            } else {
                _menuTf['method'](_0x476e10['ZKeBc'])['invoke'](_0xe4d316['method'](_0x476e10['kaWqJ'])['invoke'](_cur, _targetPos, deltaTime * 8));
                _menuTf['method'](_0x476e10['yqzdi'])['invoke'](_0x4088e6['method'](_0x476e10['mwXyj'])['invoke'](_menuTf['method'](_0x476e10['YqqIM'])['invoke'](), _menuRot, deltaTime * 8));
            }
        } else {
            _menuTf['method'](_0x476e10['ZKeBc'])['invoke'](_targetPos);
            _menuTf['method'](_0x476e10['yqzdi'])['invoke'](_menuRot);
        }
    }
    class _0x3d4c89 {
        constructor(_0x40e3b6) {
            const _0x19bc01=_0x240047,_0x3c2a22=_0x476e10['CydZZ']['split']('|');
            let _0x10426f=-0x931+-0x1052+-0x3a5*-0x7;
            while(!![]) {
                switch(_0x3c2a22[_0x10426f++]) {
                    case'0':this['toolTip']=_0x476e10['RwyBa'](_0x38aa66=_0x40e3b6['toolTip'],null)&&_0x476e10['RwyBa'](_0x38aa66,void 0)?_0x38aa66:null;
                    continue;
                    case'1':var _0x373d67,_0x38aa66,_0x590d4a;
                    continue;
                    case'2':this['disableMethod']=_0x40e3b6['disableMethod'];
                    continue;
                    case'3':this['enabled']=_0x476e10['RwyBa'](_0x590d4a=_0x40e3b6['enabled'],null)&&_0x476e10['yCdEu'](_0x590d4a,void 0)?_0x590d4a:![];
                    continue;
                    case'4':this['method']=_0x40e3b6['method'];
                    continue;
                    case'5':this['enableMethod']=_0x40e3b6['enableMethod'];
                    continue;
                    case'6':this['buttonText']=_0x40e3b6['buttonText'];
                    continue;
                    case'7':this['isTogglable']=_0x476e10['yCdEu'](_0x373d67=_0x40e3b6['isTogglable'],null)&&_0x476e10['oHAfR'](_0x373d67,void 0)?_0x373d67:!![];
                    continue;
                }
                break;
            }
        }
    }
    function n5BuildBlueprintCategory(){
        const _buttons=[new _0x3d4c89({
            'buttonText':'<< Back','isTogglable':false,'toolTip':'back',
            'method':()=>{currentCategory=0;currentPage=0;}
        }),new _0x3d4c89({
            'buttonText':'Refresh Blueprints','isTogglable':false,'toolTip':'reload json blueprints',
            'method':()=>{
                const _files=n5RefreshBlueprintFiles();
                _0x8d3cef[25]=n5BuildBlueprintCategory();
                _0x564127=new Map();
                _0x8d3cef['flat']()['forEach'](_b=>_0x564127['set'](_b['buttonText'],_b));
                currentNotification='Blueprints: '+_files.length;notifactionResetTime=time+2;
                _n5MenuLastCat=-1;
            }
        }),new _0x3d4c89({
            'buttonText':'BP< Prev','isTogglable':false,'toolTip':'previous blueprint for Blueprint Gun',
            'method':()=>{const _files=n5BlueprintFiles.length?n5BlueprintFiles:n5RefreshBlueprintFiles();if(!_files.length){currentNotification='No blueprint jsons';notifactionResetTime=time+2;return;}n5BlueprintIndex=((n5BlueprintIndex-1)+_files.length)%_files.length;currentNotification='Blueprint: '+_files[n5BlueprintIndex].name;notifactionResetTime=time+2;}
        }),new _0x3d4c89({
            'buttonText':'BP> Next','isTogglable':false,'toolTip':'next blueprint for Blueprint Gun',
            'method':()=>{const _files=n5BlueprintFiles.length?n5BlueprintFiles:n5RefreshBlueprintFiles();if(!_files.length){currentNotification='No blueprint jsons';notifactionResetTime=time+2;return;}n5BlueprintIndex=(n5BlueprintIndex+1)%_files.length;currentNotification='Blueprint: '+_files[n5BlueprintIndex].name;notifactionResetTime=time+2;}
        }),new _0x3d4c89({
            'buttonText':'Blueprint Gun','isTogglable':true,'toolTip':'hold right grip and trigger to spawn selected blueprint at pointer',
            'method':()=>{n5RunBlueprintGun();}
        })];
        const _files=n5BlueprintFiles.length?n5BlueprintFiles:n5RefreshBlueprintFiles();
        if(!_files.length){
            _buttons.push(new _0x3d4c89({
                'buttonText':'No JSONs Found','isTogglable':false,'toolTip':'put json files in Documents/bp',
                'method':()=>{currentNotification='Put blueprints in '+n5EnsureBlueprintDir();notifactionResetTime=time+3;}
            }));
        }else{
            for(const _file of _files){
                _buttons.push(new _0x3d4c89({
                    'buttonText':'BP: '+_file.name.replace(/\.json$/i,''),
                    'isTogglable':false,
                    'toolTip':'spawn '+_file.name+' at gun pointer',
                    'method':()=>{n5SpawnBlueprintFile(_file.path,n5BlueprintGunOrigin());}
                }));
            }
        }
        return _buttons;
    }
    function n5RandomItemConfig(){
        return {
            scaleModifier:Math.floor(Math.random()*256)-128,
            colorHue:Math.floor(Math.random()*255)-127,
            colorSaturation:Math.floor(Math.random()*148)-20
        };
    }
    function n5ApplyItemVisualConfig(_obj,_hue,_sat,_scale){
        try{
            let _go=_obj;
            try{_go=_obj['method'](_0x476e10['ZqQpU'])['invoke']();}catch(_){}
            const _targets=[];
            for(const _t of [_obj,_go]){
                if(!_t||(_t['handle']&&_t['handle']['isNull']()))continue;
                _targets.push(_t);
                try{const _gbo=_t['method'](_0x476e10['BGTMU'],1)['inflate'](_0x97c8f0)['invoke']();if(_gbo&&!_gbo['handle']['isNull']())_targets.push(_gbo);}catch(_){}
                try{const _gi=_t['method'](_0x476e10['BGTMU'],1)['inflate'](_0xaf18fa)['invoke']();if(_gi&&!_gi['handle']['isNull']())_targets.push(_gi);}catch(_){}
                try{const _ig=_t['method'](_0x476e10['BGTMU'],1)['inflate'](_0x3e7a10)['invoke']();if(_ig&&!_ig['handle']['isNull']())_targets.push(_ig);}catch(_){}
            }
            for(const _target of _targets){
                try{_target['method']('set_colorHue')['invoke'](_hue|0);}catch(_){}
                try{_target['method'](_0x476e10['GBtXF'])['invoke'](_hue|0);}catch(_){}
                try{_target['field']('colorHue')['value']=_hue|0;}catch(_){}
                try{_target['method']('set_colorSaturation')['invoke'](_sat|0);}catch(_){}
                try{_target['method'](_0x476e10['ueDiE'])['invoke'](_sat|0);}catch(_){}
                try{_target['field']('colorSaturation')['value']=_sat|0;}catch(_){}
                try{_target['method']('set_scaleModifier')['invoke'](_scale|0);}catch(_){}
                try{_target['method'](_0x476e10['LoUSE'])['invoke'](_scale|0);}catch(_){}
                try{_target['field']('scaleModifier')['value']=_scale|0;}catch(_){}
                try{_target['method']('set_allowAddToBag')['invoke'](true);}catch(_){}
                try{_target['field']('_allowAddToBag')['value']=true;}catch(_){}
                try{_target['method']('set_allowAddToQuiver')['invoke'](true);}catch(_){}
                try{_target['field']('_allowAddToQuiver')['value']=true;}catch(_){}
                try{_target['method']('set_disableAutoDespawnTimer')['invoke'](true);}catch(_){}
                try{_target['field']('_disableAutoDespawnTimer')['value']=true;}catch(_){}
            }
        }catch(_e){console.error('[N5 ApplyItemVisualConfig]',_e);}
    }
    function n5ApplyRandomItemConfig(_obj){
        const _cfg=n5RandomItemConfig();
        n5ApplyBlueprintItemConfig(_obj,_cfg);
        n5ApplyItemVisualConfig(_obj,_cfg.colorHue,_cfg.colorSaturation,_cfg.scaleModifier);
        try{
            let _go=_obj;
            try{_go=_obj['method'](_0x476e10['ZqQpU'])['invoke']();}catch(_){}
            let _ig=null;
            try{_ig=_go['method'](_0x476e10['BGTMU'],1)['inflate'](_0x3e7a10)['invoke']();}catch(_){}
            if(!_ig||(_ig['handle']&&_ig['handle']['isNull']()))try{_ig=_obj['method'](_0x476e10['BGTMU'],1)['inflate'](_0x3e7a10)['invoke']();}catch(_){}
            if(_ig&&(!_ig['handle']||!_ig['handle']['isNull']())){
                try{_ig['method']('set_disableAutoDespawnTimer')['invoke'](true);}catch(_){}
                try{_ig['field']('_disableAutoDespawnTimer')['value']=true;}catch(_){}
                try{_ig['method']('set_allowAddToBag')['invoke'](true);}catch(_){}
                try{_ig['field']('_allowAddToBag')['value']=true;}catch(_){}
            }
        }catch(_){}
    }
    function n5ApplyRainbowItemConfig(_obj){
        try{
            const _h=Math.floor(((time*96)+(frameCount*3))%255)-127;
            const _s=90+Math.floor(((Math.sin(time*3.0)+1)*0.5)*37);
            const _scale=Math.floor(((Math.sin(time*2.1)+1)*0.5)*32)-8;
            n5ApplyItemVisualConfig(_obj,_h,_s,_scale);
        }catch(_e){console.error('[N5 RainbowItemConfig]',_e);}
    }
    function n5RightHandPose(_dist=0.45){
        const _hand=_0x199f18['field'](_0x476e10['gOCqt'])['value']||_0x35ade8;
        const _hp=_hand['method'](_0x476e10['YApVv'])['invoke']();
        const _hf=_hand['method'](_0x476e10['itVwD'])['invoke']();
        return {hand:_hand,pos:n5VecAdd(_hp,n5ScaleVec(_hf,_dist)),forward:_hf,rot:_hand['method'](_0x476e10['YqqIM'])['invoke']()};
    }
    function n5SelfSpawnPose(_dist=1.0,_height=0.65){
        let _base=n5GetSafeSelfPosition();
        let _tf=null;
        try{_tf=_0xc4cf2f(_0x33fb14);}catch(_){}
        if(!_tf||(_tf['isNull']&&_tf['isNull']())){
            try{const _pc=n5GetPlayerControllerInstance();if(_pc&&!_pc['handle']['isNull']())_tf=_0xc4cf2f(_pc);}catch(_){}
        }
        if(!_base){
            try{_base=_tf.method(_0x476e10['YApVv']).invoke();}catch(_){}
        }
        if(!n5IsGoodPosition(_base)){
            try{_base=_0x35ade8.method(_0x476e10['YApVv']).invoke();}catch(_){}
        }
        let _f=[0,0,1],_r=[1,0,0],_u=[0,1,0],_rot=_0x554b79;
        try{_f=_tf.method(_0x476e10['itVwD']).invoke();}catch(_){}
        try{_r=_tf.method('get_right').invoke();}catch(_){}
        try{_u=_tf.method('get_up').invoke();}catch(_){}
        try{_rot=_tf.method(_0x476e10['YqqIM']).invoke();}catch(_){}
        const _pos=[
            n5VecNum(_base,0,'x')+n5VecNum(_f,0,'x')*_dist+n5VecNum(_u,0,'x')*_height,
            n5VecNum(_base,1,'y')+n5VecNum(_f,1,'y')*_dist+n5VecNum(_u,1,'y')*_height,
            n5VecNum(_base,2,'z')+n5VecNum(_f,2,'z')*_dist+n5VecNum(_u,2,'z')*_height
        ];
        return {pos:_pos,forward:_f,right:_r,up:_u,rot:_rot};
    }
    function n5SpawnGiveawayBag(_launch=true){
        try{
            const _pose=n5RightHandPose(0.55);
            const _bags=['item_backpack_large_base','item_backpack','item_backpack_green','item_backpack_small_base','item_backpack_white','item_pelican_case','item_quiver','item_quiver_heart'];
            const _bagId=_bags[Math.floor(Math.random()*_bags.length)];
            const _bag=n5SpawnContainerItemAt(_bagId,_pose.pos,_pose.rot||_0x554b79);
            if(!_bag){currentNotification='Giveaway bag failed';notifactionResetTime=time+2;return false;}
            n5ApplyRandomItemConfig(_bag);
            const _con=n5GetContainerFromItem(_bag);
            let _filled=0;
            for(let _i=0;_i<15;_i++){
                const _id=itemIDs[Math.floor(Math.random()*itemIDs.length)];
                const _off=[(_pose.pos[0]||0)+(Math.random()-0.5)*0.25,(_pose.pos[1]||0)+0.05+Math.random()*0.2,(_pose.pos[2]||0)+(Math.random()-0.5)*0.25];
                const _it=n5SpawnContainerItemAt(_id,_off,_0x554b79);
                if(!_it)continue;
                n5ApplyRandomItemConfig(_it);
                if(_con&&n5AddItemObjectToContainer(_it,_con))_filled++;
            }
            if(_launch)n5LaunchItemObject(_bag,_pose.forward,22);
            currentNotification='Giveaway bag: '+_filled+'/15';notifactionResetTime=time+3;
            return true;
        }catch(_e){currentNotification='Giveaway failed';notifactionResetTime=time+2;console.error('[N5 Giveaway Bag]',_e);return false;}
    }
    function n5ArenaManagerCall(_name,_arg){
        try{
            const _cls=_0xa03cc7['class']('AnimalCompany.ArenaGameManager');
            if(_arg===undefined)_cls['method'](_name)['invoke']();
            else _cls['method'](_name)['invoke'](_arg);
            currentNotification='Arena: '+_name;notifactionResetTime=time+2;
            return true;
        }catch(_e){currentNotification='Arena '+_name+' failed';notifactionResetTime=time+2;console.error('[N5 Arena]',_name,_e);return false;}
    }
    function n5RunArenaStartStopSpam(){
        if(!n5ArenaStartStopSpam||time<n5ArenaStartStopDelay)return;
        n5ArenaStartStopDelay=time+0.18;
        try{
            const _cls=_0xa03cc7['class']('AnimalCompany.ArenaGameManager');
            try{_cls['method']('StartGame')['invoke']();}catch(_){}
            try{_cls['method']('EndGame')['invoke']();}catch(_){}
        }catch(_e){console.error('[N5 Arena StartStop Spam]',_e);}
    }
    function n5MomBoss(){
        try{
            const _cls=_0xa03cc7['class']('AnimalCompany.MomBossController');
            let _inst=null;
            try{_inst=_cls['field']('_instance')['value'];}catch(_){}
            if(!_inst||(_inst['isNull']&&_inst['isNull']()))try{_inst=_0x1f7740['method']('FindObjectOfType',0)['inflate'](_cls)['invoke']();}catch(_){}
            return _inst&&(!_inst['handle']||!_inst['handle']['isNull']())?_inst:null;
        }catch(_){return null;}
    }
    function n5MomBossCall(_method,..._args){
        try{
            const _m=n5MomBoss();
            if(!_m){currentNotification='Mom Boss not found';notifactionResetTime=time+2;return false;}
            _m['method'](_method)['invoke'](..._args);
            currentNotification='MomBoss: '+_method;notifactionResetTime=time+2;
            return true;
        }catch(_e){currentNotification='MomBoss '+_method+' failed';notifactionResetTime=time+2;console.error('[N5 MomBoss]',_method,_e);return false;}
    }
    function n5SpawnMomBossAtHand(){
        try{
            const _pose=n5RightHandPose(1.2);
            return n5SpawnMomBossAt(_pose.pos,_pose.rot);
        }catch(_e){console.error('[N5 SpawnMomBoss]',_e);}
        currentNotification='Mom spawn failed';notifactionResetTime=time+2;return false;
    }
    function n5SpawnMomBossAt(_pos,_rot=_0x554b79){
        try{
            const _names=['MomBossController','mom_pillow','item_momboss_box','MomToyBlockObject'];
            for(const _n of _names){const _o=String(_n).startsWith('item_')?n5SpawnItemObjectAt(_n,_pos,_rot):_0x5b9456(_n,_pos,_rot);if(_o){currentNotification='Mom spawn: '+_n;notifactionResetTime=time+2;return true;}}
        }catch(_e){console.error('[N5 SpawnMomBossAt]',_e);}
        currentNotification='Mom spawn failed';notifactionResetTime=time+2;return false;
    }
    function n5MomBossSetField(_field,_value){
        try{const _m=n5MomBoss();if(!_m)return false;_m['field'](_field)['value']=_value;currentNotification='Mom '+_field+' = '+_value;notifactionResetTime=time+2;return true;}catch(_e){console.error('[N5 Mom field]',_field,_e);return false;}
    }
    let n5ShadowBossPhase=0,n5ShadowBossSpamDelay=0;
    function n5ShadowBoss(){
        try{
            const _cls=_0xa03cc7['class']('AnimalCompany.ShadowBoss.ShadowBossController');
            let _inst=null;
            try{_inst=_0x1f7740['method']('FindObjectOfType',0)['inflate'](_cls)['invoke']();}catch(_){}
            return _inst&&(!_inst['handle']||!_inst['handle']['isNull']())?_inst:null;
        }catch(_){return null;}
    }
    function n5AllShadowBosses(){
        let _all=[];
        try{_all=n5FindAllClass('AnimalCompany.ShadowBoss.ShadowBossController');}catch(_){}
        return _all&&_all.length?_all:[n5ShadowBoss()].filter(Boolean);
    }
    function n5SpawnShadowBossAt(_pos,_rot=_0x554b79){
        try{
            if(n5SpawnMobAt('ShadowBossController',_pos,_rot)||n5SpawnMobAt('ShadowBoss',_pos,_rot)||_0x5b9456('ShadowBossController',_pos,_rot)||_0x5b9456('mob_prefab/ShadowBossController',_pos,_rot)){
                currentNotification='Shadow Boss spawned';notifactionResetTime=time+2;return true;
            }
        }catch(_e){console.error('[N5 ShadowBoss spawn]',_e);}
        currentNotification='Shadow Boss spawn failed';notifactionResetTime=time+2;return false;
    }
    function n5SpawnShadowBossAtHand(){
        const _pose=n5RightHandPose(1.4);
        return n5SpawnShadowBossAt(_pose.pos,_pose.rot||_0x554b79);
    }
    function n5ShadowBossCall(_methods,..._args){
        let _count=0;
        for(const _b of n5AllShadowBosses()){
            for(const _m of _methods){
                try{_b['method'](_m)['invoke'](..._args);_count++;break;}catch(_){}
            }
        }
        currentNotification='ShadowBoss calls: '+_count;notifactionResetTime=time+2;
        return _count;
    }
    function n5ShadowBossSetFields(_fields){
        let _count=0;
        for(const _b of n5AllShadowBosses()){
            let _did=false;
            for(const _k of Object.keys(_fields)){
                try{_b['field'](_k)['value']=_fields[_k];_did=true;}catch(_){}
                try{_b['method']('set_'+_k)['invoke'](_fields[_k]);_did=true;}catch(_){}
            }
            if(_did)_count++;
        }
        currentNotification='ShadowBoss fields: '+_count;notifactionResetTime=time+2;
        return _count;
    }
    function n5ShadowBossToMe(){
        const _pos=n5LocalPlayerPos();
        let _count=0;
        for(const _b of n5AllShadowBosses()){
            try{_0xc4cf2f(_b)['method'](_0x476e10['ZKeBc'])['invoke'](_pos);_count++;}catch(_){}
            try{_b['field']('__laserTargetPos')['value']=_pos;}catch(_){}
            try{_b['field']('__diveBombTargetPos')['value']=_pos;}catch(_){}
        }
        currentNotification='ShadowBoss to me: '+_count;notifactionResetTime=time+2;
    }
    function n5ShadowBossTargetHand(){
        const _pose=n5RightHandPose(0.9);
        n5ShadowBossSetFields({'__laserTargetPos':_pose.pos,'__diveBombTargetPos':_pose.pos,'__smiteMoveStartPos':_pose.pos});
    }
    function n5ShadowBossNextPhase(){
        n5ShadowBossPhase=(n5ShadowBossPhase+1)%12;
        n5ShadowBossSetFields({'__phase':n5ShadowBossPhase,'_previousPhase':n5ShadowBossPhase});
        n5ShadowBossCall(['HandlePhaseChanged']);
        n5ShadowBossCall(['CopyBackingFieldsToState'],true);
    }
    function n5ShadowBossSmiteZone(){
        let _count=0;
        try{
            const _boss=n5ShadowBoss();
            const _data=(_boss&&_boss['method'])?_boss['method']('get_bossData')['invoke']():null;
            const _center=n5LocalPlayerPos();
            for(const _z of n5FindAllClass('AnimalCompany.ShadowBoss.SmiteZone')){
                try{_z['method']('Activate')['invoke'](_center,_data,8.0,time);_count++;}catch(_){}
            }
        }catch(_e){console.error('[N5 ShadowBoss smite zone]',_e);}
        currentNotification='Smite zones: '+_count;notifactionResetTime=time+2;
    }
    function n5RunShadowBossLaserSpam(){
        if(time<n5ShadowBossSpamDelay)return;
        n5ShadowBossSpamDelay=time+0.65;
        n5ShadowBossTargetHand();
        n5ShadowBossCall(['StartLaserFire']);
        n5ShadowBossCall(['UpdateLaserFire']);
        n5ShadowBossCall(['ApplyLaserDamage']);
    }
    function n5BuildShadowBossCategory(){
        return [new _0x3d4c89({'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main','method':()=>{currentCategory=0;currentPage=0;}}),
        new _0x3d4c89({'buttonText':'Spawn Shadow Boss','isTogglable':false,'toolTip':'spawn ShadowBossController at right hand','method':()=>{n5SpawnShadowBossAtHand();}}),
        new _0x3d4c89({'buttonText':'Shadow Boss To Me','isTogglable':false,'toolTip':'teleport live ShadowBossController to you','method':()=>{n5ShadowBossToMe();}}),
        new _0x3d4c89({'buttonText':'Target Right Hand','isTogglable':false,'toolTip':'set laser, dive, and smite target fields to your right hand','method':()=>{n5ShadowBossTargetHand();}}),
        new _0x3d4c89({'buttonText':'Phase +','isTogglable':false,'toolTip':'cycles dumped __phase/_previousPhase backing fields','method':()=>{n5ShadowBossNextPhase();}}),
        new _0x3d4c89({'buttonText':'Setup/Authority','isTogglable':false,'toolTip':'calls Setup and HandleStateAuthorityChanged','method':()=>{n5ShadowBossCall(['Setup']);n5ShadowBossCall(['HandleStateAuthorityChanged']);}}),
        new _0x3d4c89({'buttonText':'Fill Shell','isTogglable':false,'toolTip':'calls FillShell or sets _shellFilled true','method':()=>{if(!n5ShadowBossCall(['FillShell','HandleShellFilled']))n5ShadowBossSetFields({'__shellFilled':true});}}),
        new _0x3d4c89({'buttonText':'Clear Shell','isTogglable':false,'toolTip':'calls ClearShell or sets _shellFilled false','method':()=>{if(!n5ShadowBossCall(['ClearShell']))n5ShadowBossSetFields({'__shellFilled':false});}}),
        new _0x3d4c89({'buttonText':'Force Stun','isTogglable':false,'toolTip':'calls RPC_Stun and maxes _stunAccumulation','method':()=>{n5ShadowBossSetFields({'__stunAccumulation':9999.0,'__accumulatedVulnerableDamage':32767});n5ShadowBossCall(['RPC_Stun'],8.0)||n5ShadowBossCall(['StartStunned']);}}),
        new _0x3d4c89({'buttonText':'Start Smite','isTogglable':false,'toolTip':'calls StartSmite then HandleSmiteChargeComplete','method':()=>{n5ShadowBossCall(['StartSmite']);n5ShadowBossCall(['HandleSmiteChargeComplete']);}}),
        new _0x3d4c89({'buttonText':'Activate Smite Zone','isTogglable':false,'toolTip':'activates live SmiteZone objects around you','method':()=>{n5ShadowBossSmiteZone();}}),
        new _0x3d4c89({'buttonText':'Start Dive Bomb','isTogglable':false,'toolTip':'sets dive target then calls StartDiveBomb/UpdateDiveBomb','method':()=>{n5ShadowBossTargetHand();n5ShadowBossCall(['StartDiveBomb']);n5ShadowBossCall(['UpdateDiveBomb']);}}),
        new _0x3d4c89({'buttonText':'Land Dive Bomb','isTogglable':false,'toolTip':'calls DiveBombLand','method':()=>{n5ShadowBossCall(['DiveBombLand']);}}),
        new _0x3d4c89({'buttonText':'Fire Laser','isTogglable':false,'toolTip':'sets laser target then calls StartLaserFire/ApplyLaserDamage','method':()=>{n5ShadowBossTargetHand();n5ShadowBossCall(['StartLaserFire']);n5ShadowBossCall(['ApplyLaserDamage']);}}),
        new _0x3d4c89({'buttonText':'Laser Spam','isTogglable':true,'toolTip':'keeps firing laser at your right hand target','enableMethod':()=>{n5ShadowBossSpamDelay=0;},'method':()=>{n5RunShadowBossLaserSpam();}}),
        new _0x3d4c89({'buttonText':'Kill Shadow Boss','isTogglable':false,'toolTip':'calls ForceDie/SetDying on live ShadowBossController','method':()=>{n5ShadowBossCall(['ForceDie']);n5ShadowBossCall(['SetDying'],true);}})];
    }
    function n5HookReturn(_cls,_name,_flag,_value,_argc=-1){
        try{
            const _m=_argc>=0?_cls['method'](_name,_argc):_cls['method'](_name);
            _m['implementation']=function(){
                if(_flag())return (typeof _value==='function')?_value.apply(this,arguments):_value;
                return this['method'](_name,_argc)['invoke'](...arguments);
            };
            return true;
        }catch(_){return false;}
    }
    function n5HookVoid(_cls,_name,_flag,_argc=-1,_before=null){
        try{
            const _m=_argc>=0?_cls['method'](_name,_argc):_cls['method'](_name);
            _m['implementation']=function(){
                if(_flag()){
                    try{if(_before)_before.apply(this,arguments);}catch(_){}
                    return;
                }
                return this['method'](_name,_argc)['invoke'](...arguments);
            };
            return true;
        }catch(_){return false;}
    }
    function n5SetStatePrimitiveValue(_p,_v){
        if(!_p)return false;
        try{_p['method']('set_Value',1)['invoke'](_v);return true;}catch(_){}
        try{_p['method']('SetValue',1)['invoke'](_v);return true;}catch(_){}
        try{_p['field']('value')['value']=_v;return true;}catch(_){}
        try{_p['field']('_value')['value']=_v;return true;}catch(_){}
        return false;
    }
    function n5PatchStatePrimitiveGetter(_obj,_getter,_v){
        try{return n5SetStatePrimitiveValue(_obj['method'](_getter)['invoke'](),_v);}catch(_){}
        return false;
    }
    function n5PatchAllStateObjects(_className,_patcher){
        let _count=0;
        try{
            for(const _o of n5FindAllClass(_className)){
                try{if(_patcher(_o))_count++;}catch(_){}
            }
        }catch(_){}
        return _count;
    }
    function n5ForceShopStates(){
        let _count=0;
        _count+=n5PatchAllStateObjects('AnimalCompany.GameplayItemState',_it=>{
            let _ok=false;
            for(const _g of ['get_price','get_unlockPrice','get_value'])_ok=!!n5PatchStatePrimitiveGetter(_it,_g,0)||_ok;
            for(const _g of ['get_isUnlocked','get_unlockDependenciesSatisfied'])_ok=!!n5PatchStatePrimitiveGetter(_it,_g,true)||_ok;
            for(const _g of ['get_unlockable'])_ok=!!n5PatchStatePrimitiveGetter(_it,_g,true)||_ok;
            return _ok;
        });
        _count+=n5PatchAllStateObjects('AnimalCompany.ItemVendingMachineView',_v=>{
            let _ok=false;
            try{_v['field']('_devModeOn')['value']=true;_ok=true;}catch(_){}
            try{_v['method']('RefreshItems')['invoke']();_ok=true;}catch(_){}
            return _ok;
        });
        _count+=n5PatchAllStateObjects('AnimalCompany.ItemVendingMachineV3Mediator',_v=>{
            try{_v['field']('_devModeEnabled')['value']=true;return true;}catch(_){}
            return false;
        });
        currentNotification='Shop states patched: '+_count;notifactionResetTime=time+2;
        return _count;
    }
    function n5ForceCosmeticStates(){
        const _count=n5PatchAllStateObjects('AnimalCompany.AvatarItemState',_it=>{
            let _ok=false;
            for(const _g of ['get_showInShop','get_isOwned','get_canPurchaseDirectly','get_isCompatibleWithCurrentApp'])_ok=!!n5PatchStatePrimitiveGetter(_it,_g,true)||_ok;
            for(const _g of ['get_hardPrice','get_origPrice','get_discount','get_finalPrice'])_ok=!!n5PatchStatePrimitiveGetter(_it,_g,0)||_ok;
            return _ok;
        });
        currentNotification='Cosmetics patched: '+_count;notifactionResetTime=time+2;
        return _count;
    }
    function n5ForceDevSpoof(){
        let _count=0;
        _count+=n5PatchAllStateObjects('AnimalCompany.UserState',_u=>n5PatchStatePrimitiveGetter(_u,'get_isDeveloper',true));
        _count+=n5PatchAllStateObjects('AnimalCompany.UserInventoryState',_u=>n5PatchStatePrimitiveGetter(_u,'get_devOwnAllAvatarItemsOverride',true));
        _count+=n5PatchAllStateObjects('AnimalCompany.NetworkedLootManager',_m=>{try{_m['field']('_isDeveloper')['value']=true;return true;}catch(_){return false;}});
        _count+=n5PatchAllStateObjects('AnimalCompany.PlayerWatchState',_w=>{try{_w['field']('<sideMenu>k__BackingField')['value']=4;return true;}catch(_){return false;}});
        currentNotification='Dev spoof patched: '+_count;notifactionResetTime=time+2;
        return _count;
    }
    function n5InstallGoodShitHooks(){
        if(n5GoodShitHooksInstalled)return true;
        let _hooks=0;
        try{
            const _gameplay=_0xa03cc7['class']('AnimalCompany.GameplayItemState');
            for(const _m of ['get_isPurchasable','get_isResearchable','get_isProduct'])if(n5HookReturn(_gameplay,_m,()=>n5ShopUnlockEnabled,true))_hooks++;
            for(const _m of ['get_allowSaving','get_allowBlueprintSaving','get_canBeSavedToLoadoutTemplate'])if(n5HookReturn(_gameplay,_m,()=>n5BlueprintAbuseEnabled,true))_hooks++;
            if(n5HookReturn(_gameplay,'get_maxInBlueprint',()=>n5BlueprintAbuseEnabled,999))_hooks++;
        }catch(_e){console.error('[N5 GoodShit] GameplayItemState hooks failed:',_e);}
        try{
            const _gm=_0xa03cc7['class']('AnimalCompany.GameManager');
            if(n5HookReturn(_gm,'TrySpendMoney',()=>n5NoSpendEnabled,true,1))_hooks++;
            if(n5HookReturn(_gm,'TrySpendFishy',()=>n5NoSpendEnabled,true,1))_hooks++;
        }catch(_e){console.error('[N5 GoodShit] GameManager hooks failed:',_e);}
        try{
            const _vend=_0xa03cc7['class']('AnimalCompany.ItemVendingMachineView');
            if(n5HookReturn(_vend,'get__isPurchaseLimited',()=>n5VendingBypassEnabled,false,0))_hooks++;
            if(n5HookVoid(_vend,'HandleIsDeveloperChanged',()=>n5VendingBypassEnabled,-1,function(){try{this['field']('_devModeOn')['value']=true;}catch(_){}}))_hooks++;
            try{
                const _refresh=_vend['method']('RefreshItems');
                _refresh['implementation']=function(){
                    if(n5VendingBypassEnabled)try{this['field']('_devModeOn')['value']=true;}catch(_){}
                    return this['method']('RefreshItems')['invoke']();
                };
                _hooks++;
            }catch(_){}
        }catch(_e){console.error('[N5 GoodShit] Vending hooks failed:',_e);}
        try{
            const _v3=_0xa03cc7['class']('AnimalCompany.ItemVendingMachineV3Mediator');
            if(n5HookReturn(_v3,'IsPurchaseLimited',()=>n5VendingBypassEnabled,false,1))_hooks++;
            if(n5HookVoid(_v3,'HandleDevModeChanged',()=>n5VendingBypassEnabled,1,function(){try{this['field']('_devModeEnabled')['value']=true;}catch(_){}}))_hooks++;
        }catch(_e){console.error('[N5 GoodShit] V3 hooks failed:',_e);}
        try{
            const _cheat=_0xa03cc7['class']('AnimalCompany.CheatDetectorManager');
            for(const _m of ['HandleUserIsDeveloperChanged','VerifyDeveloperStatusCmd','OnUpdate'])if(n5HookVoid(_cheat,_m,()=>n5DevSpoofEnabled))_hooks++;
        }catch(_e){console.error('[N5 GoodShit] CheatDetector hooks failed:',_e);}
        n5GoodShitHooksInstalled=true;
        console.log('[N5 GoodShit] hooks installed:',_hooks);
        return true;
    }
    function n5BuildGoodShitCategory(){
        return [new _0x3d4c89({'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main','method':()=>{currentCategory=0;currentPage=0;}}),
        new _0x3d4c89({'buttonText':'God Shop','isTogglable':true,'toolTip':'forces item purchasable/researchable/unlocked and patches visible states','enableMethod':()=>{n5ShopUnlockEnabled=true;n5InstallGoodShitHooks();n5ForceShopStates();},'disableMethod':()=>{n5ShopUnlockEnabled=false;},'method':()=>{n5ForceShopStates();}}),
        new _0x3d4c89({'buttonText':'Own All Cosmetics','isTogglable':true,'toolTip':'forces avatar shop visible, owned, compatible, and free','enableMethod':()=>{n5CosmeticOwnEnabled=true;n5ForceCosmeticStates();},'disableMethod':()=>{n5CosmeticOwnEnabled=false;},'method':()=>{n5ForceCosmeticStates();}}),
        new _0x3d4c89({'buttonText':'No Spend','isTogglable':true,'toolTip':'GameManager.TrySpendMoney/TrySpendFishy always succeeds','enableMethod':()=>{n5NoSpendEnabled=true;n5InstallGoodShitHooks();},'disableMethod':()=>{n5NoSpendEnabled=false;},'method':()=>{currentNotification='No spend: '+(n5NoSpendEnabled?'on':'off');notifactionResetTime=time+2;}}),
        new _0x3d4c89({'buttonText':'Vending Dev Bypass','isTogglable':true,'toolTip':'dev-mode vending plus purchase-limit bypass for old and v3 machines','enableMethod':()=>{n5VendingBypassEnabled=true;n5InstallGoodShitHooks();n5ForceShopStates();},'disableMethod':()=>{n5VendingBypassEnabled=false;},'method':()=>{n5ForceShopStates();}}),
        new _0x3d4c89({'buttonText':'Blueprint Abuse','isTogglable':true,'toolTip':'allows saving/loadout/blueprint checks and bumps max blueprint count','enableMethod':()=>{n5BlueprintAbuseEnabled=true;n5InstallGoodShitHooks();},'disableMethod':()=>{n5BlueprintAbuseEnabled=false;},'method':()=>{currentNotification='Blueprint abuse: '+(n5BlueprintAbuseEnabled?'on':'off');notifactionResetTime=time+2;}}),
        new _0x3d4c89({'buttonText':'Dev Spoof Stack','isTogglable':true,'toolTip':'developer/user inventory/watch spoof plus cheat detector no-op','enableMethod':()=>{n5DevSpoofEnabled=true;n5InstallGoodShitHooks();n5ForceDevSpoof();},'disableMethod':()=>{n5DevSpoofEnabled=false;},'method':()=>{n5ForceDevSpoof();}}),
        new _0x3d4c89({'buttonText':'Patch Everything','isTogglable':false,'toolTip':'one-shot state patch for shop, cosmetics, vending, and dev spoof','method':()=>{n5InstallGoodShitHooks();n5ForceShopStates();n5ForceCosmeticStates();n5ForceDevSpoof();}})];
    }
    function n5LaunchSelectedProjectile(){
        if(!rightGrab||!rightTrigger||time<n5OrbitFuckeryShootDelay)return;
        n5OrbitFuckeryShootDelay=time;
        try{
            const _pose=n5RightHandPose(0.35),_name=n5ProjectilePrefabs[n5ProjectileIndex%n5ProjectilePrefabs.length];
            const _obj=_0x5b9456(_name,_pose.pos,_pose.rot);
            if(_obj)n5LaunchItemObject(_obj,_pose.forward,35);
        }catch(_e){console.error('[N5 ProjectileLauncher]',_e);}
    }
    function n5FlarePrefabFallback(){
        if(!n5FlarePrefabImpactEnabled||!rightTrigger||time<n5FlarePrefabDelay)return;
        n5FlarePrefabDelay=time+0.75;
        try{
            const _g=_0x22649c(),_p=_g['point'];
            if(_p)_0x5b9456(prefabList[prefabIndex],_p,_0x554b79);
        }catch(_e){console.error('[N5 FlarePrefabFallback]',_e);}
    }
    function n5ArenaOreBurst(){
        try{
            const _cls=_0xa03cc7['class']('AnimalCompany.ArenaOreSpawner');
            const _sp=_0x1f7740['method']('FindObjectOfType',0)['inflate'](_cls)['invoke']();
            if(_sp&&!_sp['handle']['isNull']()){
                try{_sp['method']('InitGame')['invoke']();}catch(_){}
                try{_sp['method']('SpawnGold')['invoke'](50);}catch(_){}
                try{_sp['method']('SpawnEmerald')['invoke'](50);}catch(_){}
                currentNotification='Arena ores spawned';notifactionResetTime=time+2;
                return true;
            }
        }catch(_e){console.error('[N5 Arena OreSpawner]',_e);}
        try{
            const _pose=n5RightHandPose(1.0),_ores=['item_ore_gold_l','item_ore_gold_m','item_ore_gold_s','item_ore_hell','item_ruby','item_uranium_chunk_l'];
            for(let _i=0;_i<24;_i++){
                const _a=Math.PI*2*_i/24,_r=0.65+Math.random()*0.5;
                n5SpawnConfiguredItemAt(_ores[_i%_ores.length],[(_pose.pos[0]||0)+Math.cos(_a)*_r,(_pose.pos[1]||0)+Math.random()*0.45,(_pose.pos[2]||0)+Math.sin(_a)*_r],_0x554b79);
            }
            currentNotification='Fallback arena ores spawned';notifactionResetTime=time+2;
            return true;
        }catch(_e2){currentNotification='Arena ores failed';notifactionResetTime=time+2;return false;}
    }
    function n5ArenaItemBurst(_atGun=false){
        try{
            const _g=_atGun?_0x22649c():null;
            const _base=(_g&&_g['point'])?_g['point']:n5RightHandPose(1.0).pos;
            const _ids=['item_arena_pistol','item_arena_shotgun','item_shotgun_ammo','item_revolver_ammo','item_ore_gold_l','item_ore_gold_m','item_ore_gold_s','item_ore_hell','item_ruby','item_randombox_mobloot_weapons','item_randombox_mobloot_weapons_big'];
            let _spawned=0;
            for(let _i=0;_i<36;_i++){
                const _a=Math.PI*2*_i/36,_r=0.35+(_i%6)*0.11;
                const _p=[(_base[0]||0)+Math.cos(_a)*_r,(_base[1]||0)+0.04*_i,(_base[2]||0)+Math.sin(_a)*_r];
                if(n5SpawnConfiguredItemAt(_ids[_i%_ids.length],_p,_0x554b79))_spawned++;
            }
            currentNotification='Arena items: '+_spawned;notifactionResetTime=time+2;
            return _spawned>0;
        }catch(_e){console.error('[N5 ArenaItemBurst]',_e);currentNotification='Arena item burst failed';notifactionResetTime=time+2;return false;}
    }
    function n5SpamArenaStuff(){
        if(time<n5ArenaSpamDelay)return;
        n5ArenaSpamDelay=time+0.25;
        const _pose=n5RightHandPose(1.2);
        const _things=['Arena','ArenaDefault','ArenaGame','ArenaGamemanager','ArenaMap','ItemSellingMachineController','item_randombox_base'];
        const _name=_things[Math.floor(Math.random()*_things.length)];
        if(String(_name).startsWith('item_'))n5SpawnItemAt(_name,_pose.pos,_0x554b79);
        else _0x5b9456(_name,_pose.pos,_0x554b79);
    }
    function n5LocalPlayerPos(){
        try{
            const _safe=n5GetSafeSelfPosition();
            if(n5IsGoodPosition(_safe))return _safe;
        }catch(_){}
        try{
            const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
            if(_lp&&(!_lp['handle']||!_lp['handle']['isNull']()))return _0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
        }catch(_){}
        try{return _0xc4cf2f(_0x33fb14)['method'](_0x476e10['YApVv'])['invoke']();}catch(_){}
        return _0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
    }
    function n5SpawnRigDupeAt(_pos,_count=1){
        let _spawned=0;
        try{
            for(let _i=0;_i<_count;_i++){
                const _a=Math.PI*2*(_i/Math.max(1,_count)),_r=_count>1?0.45+0.12*_i:0;
                const _p=[(_pos[0]||0)+Math.cos(_a)*_r,(_pos[1]||0)+0.05,(_pos[2]||0)+Math.sin(_a)*_r];
                const _o=_0x5b9456('NetPlayer',_p,_0x554b79)||_0x5b9456('NetSpectator',_p,_0x554b79);
                if(_o)_spawned++;
            }
        }catch(_e){console.error('[N5 RigDupe]',_e);}
        currentNotification='Rig dupe: '+_spawned+'/'+_count;notifactionResetTime=time+2;
        return _spawned>0;
    }
    function n5RigDupeMe(_count=1){
        if(time<n5RigDupeDelay){currentNotification='Rig dupe cooldown';notifactionResetTime=time+1;return false;}
        n5RigDupeDelay=time+0.35;
        return n5SpawnRigDupeAt(n5LocalPlayerPos(),_count);
    }
    function n5RigDupeGun(){
        if(!rightGrab||!rightTrigger||time<n5RigDupeDelay)return;
        n5RigDupeDelay=time+0.2;
        const _g=_0x22649c(),_p=_g['point']||n5LocalPlayerPos();
        n5SpawnRigDupeAt(_p,1);
    }
    function n5RigSpam(){
        if(time<n5RigSpamDelay)return;
        n5RigSpamDelay=time+0.12;
        const _p=n5LocalPlayerPos();
        const _o=[(_p[0]||0)+(Math.random()-0.5)*2.5,(_p[1]||0)+Math.random()*1.5,(_p[2]||0)+(Math.random()-0.5)*2.5];
        n5SpawnRigDupeAt(_o,1);
    }
    function n5RunRigSpasm(){
        if(!n5RigSpasmEnabled)return;
        try{
            if(!n5RigSpasmBase){
                n5RigSpasmBase={
                    rh:_0x35ade8['method'](_0x476e10['YApVv'])['invoke'](),
                    lh:_0x28a850['method'](_0x476e10['YApVv'])['invoke'](),
                    head:_0xc4cf2f(_0x33fb14)['method'](_0x476e10['YApVv'])['invoke']()
                };
            }
            const _j=0.18+Math.random()*0.2;
            const _rnd=()=>[(Math.random()-0.5)*_j,(Math.random()-0.5)*_j,(Math.random()-0.5)*_j];
            const _add=(_a,_b)=>[(_a[0]||0)+(_b[0]||0),(_a[1]||0)+(_b[1]||0),(_a[2]||0)+(_b[2]||0)];
            _0x35ade8['method'](_0x476e10['ZKeBc'])['invoke'](_add(n5RigSpasmBase.rh,_rnd()));
            _0x28a850['method'](_0x476e10['ZKeBc'])['invoke'](_add(n5RigSpasmBase.lh,_rnd()));
            _0xc4cf2f(_0x33fb14)['method'](_0x476e10['ZKeBc'])['invoke'](_add(n5RigSpasmBase.head,_rnd()));
            const _s=0.7+Math.random()*1.6;
            _0x35ade8['method'](_0x476e10['AnNTs'])['invoke']([_s,2.0-_s,0.6+Math.random()]);
            _0x28a850['method'](_0x476e10['AnNTs'])['invoke']([2.0-_s,_s,0.6+Math.random()]);
        }catch(_e){console.error('[N5 RigSpasm]',_e);}
    }
    function n5StopRigSpasm(){
        try{
            _0x35ade8['method'](_0x476e10['AnNTs'])['invoke']([1,1,1]);
            _0x28a850['method'](_0x476e10['AnNTs'])['invoke']([1,1,1]);
            if(n5RigSpasmBase){
                try{_0x35ade8['method'](_0x476e10['ZKeBc'])['invoke'](n5RigSpasmBase.rh);}catch(_){}
                try{_0x28a850['method'](_0x476e10['ZKeBc'])['invoke'](n5RigSpasmBase.lh);}catch(_){}
                try{_0xc4cf2f(_0x33fb14)['method'](_0x476e10['ZKeBc'])['invoke'](n5RigSpasmBase.head);}catch(_){}
            }
        }catch(_){}
        n5RigSpasmBase=null;
    }
    function n5FindAllClass(_className){
        try{
            const _cls=_0xa03cc7['class'](_className);
            const _arr=_0x1f7740['method']('FindObjectsOfType',0)['inflate'](_cls)['invoke']();
            const _out=[];
            let _len=0;
            try{if(_arr&&typeof _arr['length']==='number')_len=_arr['length'];}catch(_){}
            try{if(!_len&&_arr&&_arr['method'])_len=_arr['method']('get_Length')['invoke']();}catch(_){}
            for(let _i=0;_i<_len;_i++){
                try{let _o=null;try{_o=_arr.get?_arr.get(_i):null;}catch(_e){}try{if(!_o&&_arr['method'])_o=_arr['method']('GetValue')['invoke'](_i);}catch(_e){}if(!_o)_o=_arr[_i];if(_o&&(!_o['handle']||!_o['handle']['isNull']()))_out.push(_o);}catch(_){}
            }
            return _out;
        }catch(_){return [];}
    }
    function n5KillOneMob(_mob){
        if(!_mob||(_mob['handle']&&_mob['handle']['isNull']()))return false;
        let _ok=false;
        const _pos=(()=>{try{return _mob['method'](_0x476e10['JvTJW'])['invoke']()['method'](_0x476e10['YApVv'])['invoke']();}catch(_){return n5LocalPlayerPos();}})();
        try{
            const _src=_0xa03cc7['class']('AnimalCompany.DamageSourceInfo')['method']('get_LocalPlayer')['invoke']();
            const _target=_0xa03cc7['class']('AnimalCompany.DamageTargetInfo')['method']('get_Default')['invoke']();
            _mob['method']('Hit',6)['invoke'](2147483647,2,_pos,[0,99999,0],_src,_target);
            _ok=true;
        }catch(_){}
        if(!_ok){
            try{_mob['method']('Hit',6)['invoke'](2147483647,2,_pos,[0,99999,0],null,null);_ok=true;}catch(_){}
        }
        try{_mob['method']('set_n_health')['invoke'](0);_ok=true;}catch(_){}
        try{_mob['field']('_n_health')['value']=0;_ok=true;}catch(_){}
        try{_mob['method']('set_n_isDie')['invoke'](true);_ok=true;}catch(_){}
        try{_mob['field']('_n_isDie')['value']=true;_ok=true;}catch(_){}
        try{_mob['method']('set_n_status')['invoke'](8);_ok=true;}catch(_){}
        for(const _km of ['RPC_Hit','Die','Kill','RPC_Die','RPC_Kill','Death','OnDeath','KillMob','DieInstantly']){
            try{_mob['method'](_km)['invoke'](2147483647);_ok=true;break;}catch(_){}
            try{_mob['method'](_km)['invoke']();_ok=true;break;}catch(_){}
        }
        if(!_ok){
            try{_mob['method'](_0x476e10['GvlcC'],3)['invoke']([0,99999,0]);_ok=true;}catch(_){}
        }
        if(!_ok){
            try{_0x1f7740['method'](_0x476e10['iBVau'],1)['invoke'](_mob['method'](_0x476e10['ZqQpU'])['invoke']());_ok=true;}catch(_){}
        }
        return _ok;
    }
    function n5KillAllMobsNow(){
        let _count=0;
        try{
            for(const _horde of n5FindAllClass('AnimalCompany.HordeMobController')){
                try{_horde['method']('KillAllMobs',1)['invoke'](true);_count++;continue;}catch(_){}
                try{_horde['method']('RPC_Reset')['invoke']();_count++;continue;}catch(_){}
                try{_horde['method']('Reset')['invoke']();_count++;}catch(_){}
            }
        }catch(_e){console.error('[N5 KillAllMobs horde]',_e);}
        try{
            const _mobs=n5FindAllClass('AnimalCompany.MobController');
            for(const _mob of _mobs){
                try{if(n5KillOneMob(_mob))_count++;}catch(_e){console.error('[N5 KillOneMob]',_e);}
            }
        }catch(_e){console.error('[N5 KillAllMobs base]',_e);}
        return _count;
    }
    function n5CallMethodsOnAll(_className,_methods,..._args){
        let _count=0;
        for(const _o of n5FindAllClass(_className)){
            for(const _m of _methods){
                try{_o['method'](_m)['invoke'](..._args);_count++;break;}catch(_){}
            }
        }
        return _count;
    }
    function n5SetFieldsOnAll(_className,_fields){
        let _count=0;
        for(const _o of n5FindAllClass(_className)){
            let _did=false;
            for(const _k of Object.keys(_fields)){
                try{_o['field'](_k)['value']=_fields[_k];_did=true;}catch(_){}
                try{_o['method']('set_'+_k)['invoke'](_fields[_k]);_did=true;}catch(_){}
            }
            if(_did)_count++;
        }
        return _count;
    }
    function n5PlayNightAlarmSound(){
        let _count=0;
        for(const _watch of n5FindAllClass('AnimalCompany.PlayerWatch')){
            try{_watch['method']('RPC_PlayNightAlarm')['invoke']();_count++;continue;}catch(_){}
            try{_watch['method']('PlayNightAlarm')['invoke']();_count++;}catch(_){}
        }
        for(const _cls of ['AnimalCompany.NetPlayer','AnimalCompany.GameTimeManager']){
            for(const _o of n5FindAllClass(_cls)){
                try{_o['method']('PlayNightAlarm')['invoke']();_count++;}catch(_){}
            }
        }
        try{
            const _gtm=_0xa03cc7['class']('AnimalCompany.GameTimeManager');
            let _inst=null;
            try{_inst=_gtm['field']('_instance')['value'];}catch(_){}
            if(_inst&&(!_inst['handle']||!_inst['handle']['isNull']())){try{_inst['method']('PlayNightAlarm')['invoke']();_count++;}catch(_){}}
        }catch(_){}
        if(!_count){
            try{if(n5PlayServerAudioAt(422,n5LocalPlayerPos()))_count++;}catch(_){}
        }
        currentNotification='Night alarm calls: '+_count;notifactionResetTime=time+2;
        return _count;
    }
    function n5ToggleAllBoomboxes(){
        let _count=0;
        for(const _bb of n5FindAllClass('AnimalCompany.Boombox')){
            try{_bb['method']('RPC_ToggleOnOff')['invoke']();_count++;continue;}catch(_){}
            try{_bb['method']('set_isOn')['invoke'](!(_bb['method']('get_isOn')['invoke']()));_count++;}catch(_){}
        }
        currentNotification='Boombox toggles: '+_count;notifactionResetTime=time+2;
        return _count;
    }
    function n5PopAllBalloons(){
        let _count=0;
        for(const _b of n5FindAllClass('AnimalCompany.Balloon')){
            try{_b['method']('Pop')['invoke']();_count++;continue;}catch(_){}
            try{_b['method']('RPC_Pop')['invoke']();_count++;continue;}catch(_){}
            try{_b['method']('PopInternal')['invoke']();_count++;}catch(_){}
        }
        for(const _bp of n5FindAllClass('AnimalCompany.BalloonPopable')){
            try{_bp['method']('Hit')['invoke'](999,0,n5LocalPlayerPos(),[0,0,0],null,null);_count++;continue;}catch(_){}
            try{const _balloon=_bp['method']('get_balloon')['invoke']();if(_balloon&&(!_balloon['handle']||!_balloon['handle']['isNull']())){_balloon['method']('Pop')['invoke']();_count++;}}catch(_){}
        }
        currentNotification='Balloons popped: '+_count;notifactionResetTime=time+2;
        return _count;
    }
    function n5SpawnPrefabNameAtHand(_name,_dist=1.0){
        try{const _p=n5RightHandPose(_dist);return _0x5b9456(_name,_p.pos,_p.rot||_0x554b79);}catch(_){return null;}
    }
    function n5ActivateBuff(_id=n5BuffId){
        try{
            const _cls=_0xa03cc7['class']('AnimalCompany.PlayerBuffController');
            let _inst=null;
            try{_inst=_cls['field']('_instance')['value'];}catch(_){}
            if(!_inst||(_inst['handle']&&_inst['handle']['isNull']())){
                try{_inst=_0x1f7740['method']('FindObjectOfType',0)['inflate'](_cls)['invoke']();}catch(_){}
            }
            if(!_inst||(_inst['handle']&&_inst['handle']['isNull']()))return false;
            _inst['method']('ActivateBuff',1)['invoke'](_id|0);
            currentNotification='Buff ID: '+(_id|0);notifactionResetTime=time+2;
            return true;
        }catch(_e){console.error('[N5 Buff]',_e);currentNotification='buff failed';notifactionResetTime=time+2;return false;}
    }
    function n5ClearBuffs(){
        try{_0xa03cc7['class']('AnimalCompany.PlayerBuffController')['method']('DeactivateAllBuffs')['invoke']();currentNotification='Buffs cleared';notifactionResetTime=time+2;return true;}catch(_e){console.error('[N5 ClearBuffs]',_e);return false;}
    }
    function n5RunBuffSpam(){
        if(!n5BuffSpam||time<n5BuffSpamDelay)return;
        n5BuffSpamDelay=time+0.25;
        n5ActivateBuff(n5BuffId);
    }
    function n5ActivateBuffSilent(_id){
        try{
            const _cls=_0xa03cc7['class']('AnimalCompany.PlayerBuffController');
            let _inst=null;
            try{_inst=_cls['field']('_instance')['value'];}catch(_){}
            if(!_inst||(_inst['handle']&&_inst['handle']['isNull']())){
                try{_inst=_0x1f7740['method']('FindObjectOfType',0)['inflate'](_cls)['invoke']();}catch(_){}
            }
            if(!_inst||(_inst['handle']&&_inst['handle']['isNull']()))return false;
            _inst['method']('ActivateBuff',1)['invoke'](_id|0);
            return true;
        }catch(_){return false;}
    }
    function n5RunInfFart(){
        if(!n5InfFartEnabled||time<n5InfFartDelay)return;
        n5InfFartDelay=time+0.06;
        const _did=n5ActivateBuffSilent(11)|n5ActivateBuffSilent(12);
        try{
            const _p=n5LocalPlayerPos();
            n5PlayVFXAt(VFXTypes['MidAirJump_Fart']||VFXTypes['Asset_FartTag'],_p,_0x554b79);
        }catch(_){}
        if(_did&&frameCount%60===0){currentNotification='Inf Fart ON';notifactionResetTime=time+1;}
    }
    function n5RunInfiniteJetpack(){
        if(!n5InfiniteJetpackEnabled||time<n5InfiniteJetpackDelay)return;
        n5InfiniteJetpackDelay=time+0.03;
        let _count=0;
        for(const _jp of n5FindAllClass('AnimalCompany.JetpackHandy')){
            try{_jp['field']('_isUsed')['value']=false;}catch(_){}
            try{_jp['method']('RPC_UseJetpack')['invoke']();_count++;}catch(_){}
            try{_jp['method']('RPC_PlayJetpackAnimation')['invoke']();}catch(_){}
        }
        if(_count&&frameCount%90===0){currentNotification='Infinite Jetpack x'+_count;notifactionResetTime=time+1;}
    }
    function n5ActivateAllTimebombs(_notify=true){
        if(time<n5TimebombSpamDelay&&!_notify)return 0;
        n5TimebombSpamDelay=time+0.06;
        let _count=0;
        for(const _tb of n5FindAllClass('AnimalCompany.TimeBomb')){
            try{_tb['method']('SetBomb')['invoke'](0);}catch(_){}
            try{_tb['method']('Explode')['invoke']();_count++;continue;}catch(_){}
            try{_tb['method']('RPC_Explode')['invoke']();_count++;continue;}catch(_){}
            try{_tb['method']('ExplodeInternal')['invoke']();_count++;}catch(_){}
        }
        for(const _ex of n5FindAllClass('AnimalCompany.HandExplosive')){
            try{_ex['field']('_isExploded')['value']=false;}catch(_){}
            try{_ex['method']('Activate')['invoke'](true);_count++;continue;}catch(_){}
            try{_ex['method']('ForceExplode')['invoke']();_count++;continue;}catch(_){}
            try{_ex['method']('RPC_Explode')['invoke']();_count++;}catch(_){}
        }
        if(_notify){currentNotification='Activated timebombs: '+_count;notifactionResetTime=time+2;}
        return _count;
    }
    function n5StartAllTimebombTimers(_seconds=3){
        let _count=0;
        let _tickTimerClass=null;
        try{_tickTimerClass=Il2Cpp['domain']['assembly']('Fusion.Runtime')['image']['class']('Fusion.TickTimer');}catch(_){}
        for(const _tb of n5FindAllClass('AnimalCompany.TimeBomb')){
            let _did=false;
            try{_tb['field']('_isTimeoutSoundPlayed')['value']=false;}catch(_){}
            try{_tb['method']('SetBomb')['invoke'](_seconds|0);_did=true;}catch(_){}
            try{
                const _routine=_tb['method']('StartTimerCoroutine')['invoke'](_seconds|0);
                try{_tb['method']('StartCoroutine',1)['invoke'](_routine);_did=true;}catch(_){}
                try{_tb['method']('StartCoroutine')['invoke'](_routine);_did=true;}catch(_){}
            }catch(_){}
            if(_tickTimerClass){
                try{
                    let _runner=null;
                    try{_runner=_tb['method']('get_Runner')['invoke']();}catch(_){}
                    if(_runner&&(!_runner['handle']||!_runner['handle']['isNull']())){
                        const _timer=_tickTimerClass['method']('CreateFromSeconds',2)['invoke'](_runner,+_seconds);
                        try{_tb['method']('set__timerExplode')['invoke'](_timer);_did=true;}catch(_){}
                        try{_tb['field']('__timerExplode')['value']=_timer;_did=true;}catch(_){}
                    }
                }catch(_){}
            }
            try{_tb['method']('HandleTimerChanged')['invoke']();_did=true;}catch(_){}
            try{_tb['method']('FixedUpdateNetwork')['invoke']();}catch(_){}
            try{_tb['method']('RPC_PlayTimeoutSound')['invoke']();}catch(_){}
            if(_did)_count++;
        }
        for(const _ex of n5FindAllClass('AnimalCompany.HandExplosive')){
            try{_ex['field']('_isExploded')['value']=false;}catch(_){}
            try{_ex['method']('Activate')['invoke'](false);_count++;continue;}catch(_){}
            try{_ex['method']('RPC_Use')['invoke'](false,false);_count++;}catch(_){}
        }
        currentNotification='Timebomb countdowns: '+_count;notifactionResetTime=time+2;
        return _count;
    }
    function n5DoorOpenAll(){const _c=n5CallMethodsOnAll('AnimalCompany.AreaDoorsNetObject',['OpenAllDoors']);currentNotification='Door open calls: '+_c;notifactionResetTime=time+2;}
    function n5DoorCloseAll(){const _c=n5CallMethodsOnAll('AnimalCompany.AreaDoorsNetObject',['CloseAllDoors']);currentNotification='Door close calls: '+_c;notifactionResetTime=time+2;}
    function n5ThunderStrike(){
        let _c=0;
        for(const _o of n5FindAllClass('AnimalCompany.ThunderController')){
            try{_o['method']('Strike')['invoke']();_c++;continue;}catch(_){}
            try{_o['method']('RPC_Strike')['invoke'](7,Math.floor(Math.random()*255));_c++;}catch(_){}
        }
        if(!_c)_0x5b9456('ThunderController',n5RightHandPose(1.4).pos,_0x554b79);
        currentNotification='Thunder: '+(_c||'spawned');notifactionResetTime=time+2;
    }
    function n5DuplicationMachineMax(){
        let _c=n5SetFieldsOnAll('AnimalCompany.DuplicationMachine',{'_duckValue':999.0,'_chaosValue':999.0,'machineInProgress':false});
        for(const _o of n5FindAllClass('AnimalCompany.DuplicationMachine')){
            try{_o['method']('RPC_KeycardEnter')['invoke']();}catch(_){}
            try{_o['field']('_storedEquipmentID')['value']=Il2Cpp['string'](itemIDs[itemIndex]||'item_goldbar');}catch(_){}
        }
        currentNotification='Dupe machines juiced: '+_c;notifactionResetTime=time+2;
    }
    function n5SellingMachines(){
        const _out=n5FindAllClass('AnimalCompany.ItemSellingMachineController');
        try{const _inst=_0xa03cc7['class']('AnimalCompany.ItemSellingMachineController')['method']('get_instance')['invoke']();if(_inst&&(!_inst['handle']||!_inst['handle']['isNull']()))_out.push(_inst);}catch(_){}
        const _dedup=[],_seen=new Set();
        for(const _o of _out){let _k='';try{_k=String(_o['handle']||_o);}catch(_){_k=String(_o);}if(!_seen.has(_k)){_seen.add(_k);_dedup.push(_o);}}
        return _dedup;
    }
    function n5SpawnSellingMachine(){
        const _obj=n5SpawnPrefabNameAtHand('ItemSellingMachineController',1.2)||n5SpawnPrefabNameAtHand('item_selling_machine',1.2);
        if(_obj){
            try{_obj['method']('Spawned')['invoke']();}catch(_){}
            try{_obj['method']('Setup')['invoke']();}catch(_){}
        }
        currentNotification=_obj?'Selling machine spawned':'Selling failed';notifactionResetTime=time+2;
        return _obj;
    }
    function n5SellingMachineCall(_mode='button'){
        let _c=0;
        for(const _m of n5SellingMachines()){
            try{_m['field']('_isSellingInProgress')['value']=false;}catch(_){}
            try{_m['field']('_isOverheated')['value']=false;}catch(_){}
            try{_m['field']('_isExploded')['value']=false;}catch(_){}
            try{_m['field']('_heatMeter')['value']=0.0;}catch(_){}
            try{_m['field']('_itemSoldValue')['value']=999999;}catch(_){}
            if(_mode==='explode'){try{_m['method']('RPC_ExplodeMachine')['invoke']();_c++;continue;}catch(_){}}
            if(_mode==='recover'){try{_m['method']('RPC_RecoverExplosion')['invoke']();_c++;continue;}catch(_){}}
            if(_mode==='sell'){try{_m['method']('RPC_StartItemSelling')['invoke'](0.01);_c++;continue;}catch(_){}}
            for(let _i=0;_i<11;_i++){
                try{_m['method']('ButtonPressed')['invoke'](_i);_c++;}catch(_){}
                try{_m['method']('RPC_ButtonPressed')['invoke'](_i);_c++;}catch(_){}
            }
        }
        currentNotification='Selling '+_mode+': '+_c;notifactionResetTime=time+2;
        return _c;
    }
    function n5RunSellAmountSpam(_notify=false){
        if(!n5SellAmountSpam&&!_notify)return;
        if(!_notify&&time<n5MachineSpamDelay)return;
        n5MachineSpamDelay=time+0.1;
        const _max=2147483647;
        let _c=0;
        for(const _m of n5SellingMachines()){
            try{_m['field']('_isSellingInProgress')['value']=false;}catch(_){}
            try{_m['field']('_isOverheated')['value']=false;}catch(_){}
            try{_m['field']('_isExploded')['value']=false;}catch(_){}
            try{_m['field']('_heatMeter')['value']=0.0;}catch(_){}
            try{_m['field']('_itemSoldValue')['value']=_max;_c++;}catch(_){}
            try{_m['method']('set_itemSoldValue')['invoke'](_max);_c++;}catch(_){}
            try{_m['method']('RPC_StartItemSelling')['invoke'](0.01);_c++;}catch(_){}
            for(const _amt of [2000000000,2000000000,2000000000,2000000000,1999999999]){
                try{_m['method']('RPC_AddPlayerMoneyToAll')['invoke'](_amt,null);_c++;}catch(_){}
                try{_m['method']('RPC_AddPlayerMoneyToAll')['invoke'](_amt);_c++;}catch(_){}
            }
        }
        if(_notify||(_c&&frameCount%60===0)){currentNotification='Sell amount spam: 9999999999';notifactionResetTime=time+2;}
        return _c;
    }
    function n5RunSellingSpasm(){
        if(!n5SellingSpasm||time<n5MachineSpamDelay)return;
        n5MachineSpamDelay=time+0.12;
        n5SellingMachineCall('button');
        n5SellingMachineCall('sell');
    }
    function n5FlushToilets(_spawnFallback=true){
        let _c=0;
        for(const _t of n5FindAllClass('AnimalCompany.ToiletPullChain')){
            try{_t['method']('FlushToilet')['invoke']();_c++;continue;}catch(_){}
            try{_t['method']('PopRandomItem')['invoke']();_c++;continue;}catch(_){}
            try{_t['method']('SpawnItem')['invoke']();_c++;}catch(_){}
        }
        if(!_c&&_spawnFallback){
            const _p=n5RightHandPose(0.8);
            for(const _id of ['item_toilet_paper','item_toilet_paper_mega','item_toilet_paper_roll_empty','item_plunger']){
                try{if(n5SpawnConfiguredItemAt(_id,_p.pos,_p.rot))_c++;}catch(_){}
            }
            try{_0x5b9456('ToiletPullChain',_p.pos,_p.rot||_0x554b79);}catch(_){}
        }
        currentNotification='Toilet flush: '+_c;notifactionResetTime=time+2;
        return _c;
    }
    function n5RunToiletSpam(){
        if(!n5ToiletSpam||time<n5MachineSpamDelay)return;
        n5MachineSpamDelay=time+0.2;
        n5FlushToilets(false);
    }
    function n5ToiletPaperBurst(){
        try{
            const _p=n5RightHandPose(0.8),_ids=['item_toilet_paper','item_toilet_paper_mega','item_toilet_paper_roll_empty','item_plunger'];
            let _c=0;
            for(let _i=0;_i<24;_i++){
                const _a=Math.PI*2*_i/24,_pos=[(_p.pos[0]||0)+Math.cos(_a)*0.8,(_p.pos[1]||0)+0.04*_i,(_p.pos[2]||0)+Math.sin(_a)*0.8];
                if(n5SpawnConfiguredItemAt(_ids[_i%_ids.length],_pos,_0x554b79))_c++;
            }
            currentNotification='Toilet burst: '+_c;notifactionResetTime=time+2;
        }catch(_e){console.error('[N5 ToiletBurst]',_e);}
    }
    function n5ActivateTeleporters(){
        const _c=n5CallMethodsOnAll('AnimalCompany.TeleportationMachine',['RPC_RequestActivation','RPC_PlayChargingParticles','MasterTeleport','RPC_Teleport']);
        currentNotification='Teleporter calls: '+_c;notifactionResetTime=time+2;
    }
    function n5CoreTeleporterHot(){
        const _c=n5SetFieldsOnAll('AnimalCompany.CoreTeleporter',{'_requiredLaserCount':0,'_requiredHoldDuration':0.0,'_activeDuration':999.0,'_rearmDelay':0.0,'_pullForce':999.0,'_blackHoleMaxScale':8.0});
        currentNotification='Core teleporters hot: '+_c;notifactionResetTime=time+2;
    }
    function n5MomSupplyBurst(){
        let _c=0;
        try{
            const _m=n5MomBoss();
            if(_m){
                let _sp=null;
                try{_sp=_m['method']('get_itemSpawner')['invoke']();}catch(_){}
                if(_sp&&(!_sp['handle']||!_sp['handle']['isNull']())){
                    try{_sp['method']('SpawnSupplyItems')['invoke']();_c++;}catch(_){}
                    try{_sp['method']('SpawnItems')['invoke'](['item_arena_pistol','item_shotgun_ammo','item_company_ration_heal'],5,5.0);_c++;}catch(_){}
                }
            }
        }catch(_e){console.error('[N5 MomSupply]',_e);}
        if(!_c){const _p=n5RightHandPose(1.1);for(const _id of ['item_arena_pistol','item_shotgun_ammo','item_company_ration_heal','item_rpg_ammo'])for(let _i=0;_i<4;_i++)n5SpawnItemAt(_id,[(_p.pos[0]||0)+(Math.random()-0.5)*1.5,(_p.pos[1]||0)+Math.random(),(_p.pos[2]||0)+(Math.random()-0.5)*1.5],_0x554b79);}
        currentNotification='Mom supplies: '+(_c||'fallback');notifactionResetTime=time+2;
    }
    function n5HordeControl(_active=true){
        let _c=n5SetFieldsOnAll('AnimalCompany.HordeMobController',{'_n_isActive':_active,'_n_mobCountToSpawn':_active?64:0,'_ignoreLootDrop':false});
        _c+=n5SetFieldsOnAll('AnimalCompany.HordeMobSpawner',{'_enableTest':_active,'_testAutoWave':_active,'_autoKillFromThisPlayer':!_active});
        currentNotification='Horde '+(_active?'on':'off')+': '+_c;notifactionResetTime=time+2;
    }
    function n5RunShotgunNoCooldown(){
        if(!n5ShotgunNoCooldown)return;
        try{
            const _cls=_0xa03cc7['class']('AnimalCompany.Shotgun');
            const _arr=_0x1f7740['method']('FindObjectsOfType',0)['inflate'](_cls)['invoke']();
            const _len=(_arr&&typeof _arr['length']==='number')?_arr['length']:0;
            for(let _i=0;_i<_len;_i++){
                const _sg=_arr.get?_arr.get(_i):_arr[_i];
                if(!_sg||(_sg['handle']&&_sg['handle']['isNull']()))continue;
                try{_sg['field']('_reloadTimer')['value']=0;}catch(_){}
                try{_sg['method']('set__ammoLeft')['invoke'](99);}catch(_){}
                try{_sg['field']('__ammoLeft')['value']=99;}catch(_){}
                try{
                    const _gun=_sg['field']('_gun')['value'];
                    if(_gun&&!_gun['handle']['isNull']()){
                        try{const _cfg=_gun['method']('get_config')['invoke']();if(_cfg&&!_cfg['handle']['isNull']())_cfg['field']('shootTime')['value']=0.01;}catch(_){}
                    }
                }catch(_){}
            }
        }catch(_){}
    }
    function n5ApplyRainbowItemConfig(_obj){
        n5RainbowPhase=((n5RainbowPhase||0)+0.075)%1;
        const _h=Math.floor(((n5RainbowPhase||0)%1)*255)&255;
        n5ApplyBlueprintItemConfig(_obj,{scaleModifier:0,colorHue:_h,colorSaturation:127});
        n5ApplyItemVisualConfig(_obj,_h,127,0);
    }
    function n5Il2CppStringToJs(_value){
        try{
            if(_value&&typeof _value['toString']==='function')return String(_value['toString']());
        }catch(_){}
        return String(_value||'');
    }
    function n5GetDroppedItemID(_grabbableObject){
        try{
            let _gi=null;
            try{
                if(_grabbableObject&&_grabbableObject['method']){
                    const _direct=_grabbableObject['method']('get_itemID')['invoke']();
                    if(_direct)return n5Il2CppStringToJs(_direct).replace(/^item_prefab\//,'');
                }
            }catch(_){}
            try{
                if(_grabbableObject&&_grabbableObject['field']){
                    const _direct=_grabbableObject['field']('_itemID')['value'];
                    if(_direct)return n5Il2CppStringToJs(_direct).replace(/^item_prefab\//,'');
                }
            }catch(_){}
            try{_gi=_grabbableObject['method'](_0x476e10['BGTMU'],1)['inflate'](_0xaf18fa)['invoke']();}catch(_){}
            if((!_gi||(_gi['handle']&&_gi['handle']['isNull']()))&&_grabbableObject){
                try{
                    const _go=_grabbableObject['method'](_0x476e10['ZqQpU'])['invoke']();
                    if(_go&&!_go['isNull']())_gi=_go['method'](_0x476e10['BGTMU'],1)['inflate'](_0xaf18fa)['invoke']();
                }catch(_){}
            }
            if(_gi&&(!_gi['handle']||!_gi['handle']['isNull']())){
                try{return n5Il2CppStringToJs(_gi['method']('get_itemID')['invoke']()).replace(/^item_prefab\//,'');}catch(_){}
                try{return n5Il2CppStringToJs(_gi['field']('_itemID')['value']).replace(/^item_prefab\//,'');}catch(_){}
            }
        }catch(_){}
        return null;
    }
    function n5DupeDroppedBagItem(_grabbableObject){
        if(!n5BagDropDupeEnabled||time<n5BagDropDupeDelay)return;
        n5BagDropDupeDelay=time+0.04;
        try{
            const _id=n5GetDroppedItemID(_grabbableObject);
            if(!_id)return;
            let _tf=null;
            try{_tf=_0xc4cf2f(_grabbableObject);}catch(_){}
            if(!_tf||(_tf['isNull']&&_tf['isNull']()))return;
            const _pos=_tf['method'](_0x476e10['YApVv'])['invoke']();
            let _rot=_0x554b79;
            try{_rot=_tf['method'](_0x476e10['YqqIM'])['invoke']();}catch(_){}
            let _made=0;
            const _amt=Math.max(1,Math.min(75,n5BagDropDupeAmount|0));
            for(let _i=0;_i<_amt;_i++){
                const _a=Math.PI*2*(_i/Math.max(1,_amt));
                const _off=[Math.cos(_a)*0.12*(1+(_i%4)),0.04+0.02*_i,Math.sin(_a)*0.12*(1+(_i%4))];
                const _spawnPos=[(_pos[0]||0)+_off[0],(_pos[1]||0)+_off[1],(_pos[2]||0)+_off[2]];
                const _obj=n5SpawnConfiguredItemAt(_id,_spawnPos,_rot);
                if(_obj)_made++;
            }
            currentNotification='Bag drop dupe: '+_made+'x '+_id;notifactionResetTime=time+2;
        }catch(_e){console.error('[N5 BagDropDupe]',_e);}
    }
    function n5InstallBagDropDupeHooks(){
        try {
            const _dropHandlerCls = _0xa03cc7['class']('AnimalCompany.GrabbableObjectDropHandler');
            const _tryToDrop = _dropHandlerCls.method('TryToDrop',1);
            _tryToDrop['implementation'] = function(_grabbableObject) {
                let _ret=true;
                if(!allowAllContainers)_ret=this['method']('TryToDrop',1)['invoke'](_grabbableObject);
                if(n5BagDropDupeEnabled&&_ret!==false)n5DupeDroppedBagItem(_grabbableObject);
                return allowAllContainers?true:_ret;
            };
        } catch(_dropTryHookErr){ console.error('[BagDropDupe] TryToDrop hook failed:',_dropTryHookErr); }
        try {
            const _quiverCls = _0xa03cc7['class']('AnimalCompany.Quiver');
            const _nextOut = _quiverCls.method('TryGetNextItemOut',1);
            _nextOut['implementation'] = function(_grabbableObject) {
                const _ret=this['method']('TryGetNextItemOut',1)['invoke'](_grabbableObject);
                if(n5BagDropDupeEnabled&&_ret!==false)n5DupeDroppedBagItem(_grabbableObject);
                return _ret;
            };
        } catch(_quiverOutHookErr){ console.error('[BagDropDupe] Quiver out hook failed:',_quiverOutHookErr); }
        try {
            const _backpackCls = _0xa03cc7['class']('AnimalCompany.BackpackItem');
            const _tryOut = _backpackCls.method('TryGetItemOut',2);
            _tryOut['implementation'] = function(_rootItemID,_grabbableItem) {
                const _ret=this['method']('TryGetItemOut',2)['invoke'](_rootItemID,_grabbableItem);
                if(n5BagDropDupeEnabled&&_ret!==false)n5DupeDroppedBagItem(_grabbableItem);
                return _ret;
            };
            const _removeItem = _backpackCls.method('RemoveItem',1);
            _removeItem['implementation'] = function(_itemKey) {
                if(n5BagDropDupeEnabled||n5NoBackpackRemoveEnabled)return;
                return this['method']('RemoveItem',1)['invoke'](_itemKey);
            };
        } catch(_backpackOutHookErr){ console.error('[BagDropDupe] Backpack out hook failed:',_backpackOutHookErr); }
    }
    function n5HeldGrabbable(_handIndex=0){
        try{
            const _pl=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
            if(!_pl)return null;
            const _hand=_pl['method'](_0x476e10['MdbSA'],1)['invoke'](_handIndex);
            if(!_hand)return null;
            const _anchor=_hand['field'](_0x476e10['qNTul'])['value'];
            if(!_anchor)return null;
            const _held=_anchor['method'](_0x476e10['NumVQ'])['invoke']();
            return _held&&(!_held['handle']||!_held['handle']['isNull']())?_held:null;
        }catch(_){return null;}
    }
    function n5HeldItemComponent(_handIndex=0){
        const _held=n5HeldGrabbable(_handIndex);
        if(!_held)return null;
        try{
            const _gi=_held['method'](_0x476e10['BGTMU'],1)['inflate'](_0xaf18fa)['invoke']();
            if(_gi&&(!_gi['handle']||!_gi['handle']['isNull']()))return _gi;
        }catch(_){}
        try{
            const _go=_held['method'](_0x476e10['ZqQpU'])['invoke']();
            const _gi=_go['method'](_0x476e10['BGTMU'],1)['inflate'](_0xaf18fa)['invoke']();
            if(_gi&&(!_gi['handle']||!_gi['handle']['isNull']()))return _gi;
        }catch(_){}
        return null;
    }
    function n5SetHeldItemValue(_amount=n5HeldValueAmount){
        try{
            const _gi=n5HeldItemComponent(0)||n5HeldItemComponent(1);
            if(!_gi){currentNotification='Hold an item first';notifactionResetTime=time+2;return false;}
            const _v=Math.max(0,Math.min(2147483647,_amount|0));
            try{_gi['method']('SetAdditionalSellValue',1)['invoke'](_v);}catch(_){}
            try{_gi['method']('RPC_SetAdditionalSellValue',1)['invoke'](_v);}catch(_){}
            try{_gi['method']('set_additionalSellValue')['invoke'](_v);}catch(_){}
            try{_gi['field']('_additionalSellValue')['value']=_v;}catch(_){}
            currentNotification='Item value: '+_v;notifactionResetTime=time+2;
            return true;
        }catch(_e){console.error('[N5 ItemValue]',_e);currentNotification='Item value failed';notifactionResetTime=time+2;return false;}
    }
    function n5DisableItemDespawn(_it){
        if(!_it||(_it['handle']&&_it['handle']['isNull']()))return false;
        try{_it['method']('set_disableAutoDespawnTimer')['invoke'](true);}catch(_){}
        try{_it['field']('_disableAutoDespawnTimer')['value']=true;}catch(_){}
        try{_it['field']('useCustomAutoDestroyTime')['value']=false;}catch(_){}
        try{_it['field']('autoDestroyTime')['value']=99999999;}catch(_){}
        return true;
    }
    function n5InstallNeverDespawnHook(){
        if(n5NeverDespawnHookInstalled)return true;
        try{
            const _giCls=_0xa03cc7['class']('AnimalCompany.GrabbableItem');
            try{
                const _spawned=_giCls['method']('Spawned',0);
                _spawned['implementation']=function(){
                    const _ret=this['method']('Spawned',0)['invoke']();
                    if(n5NeverDespawnItems)n5DisableItemDespawn(this);
                    return _ret;
                };
            }catch(_){}
            try{
                const _upd=_giCls['method']('UpdateDespawnTimer',1);
                _upd['implementation']=function(_resetEvenIfRunning){
                    if(n5NeverDespawnItems){n5DisableItemDespawn(this);return;}
                    return this['method']('UpdateDespawnTimer',1)['invoke'](_resetEvenIfRunning);
                };
            }catch(_){}
            n5NeverDespawnHookInstalled=true;
            return true;
        }catch(_e){console.error('[N5 NeverDespawn hook]',_e);return false;}
    }
    function n5RunNeverDespawnItems(){
        if(!n5NeverDespawnItems||time<n5NeverDespawnDelay)return;
        n5NeverDespawnDelay=time+0.75;
        try{
            const _all=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_0xaf18fa)['invoke'](0);
            let _c=0;
            for(let _i=0;_all&&_i<_all['length'];_i++){
                try{
                    const _it=_all['get'](_i);
                    if(!_it||(_it['handle']&&_it['handle']['isNull']()))continue;
                    n5DisableItemDespawn(_it);
                    _c++;
                }catch(_){}
            }
            if(frameCount%180===0){currentNotification='No despawn items: '+_c;notifactionResetTime=time+1;}
        }catch(_e){console.error('[N5 NeverDespawnItems]',_e);}
    }
    function n5JuiceGunConfig(_cfg){
        if(!_cfg||(_cfg['handle']&&_cfg['handle']['isNull']()))return false;
        try{_cfg['field']('hitDamage')['value']=999999;}catch(_){}
        try{_cfg['field']('minDamage')['value']=999999;}catch(_){}
        try{_cfg['field']('bulletsPerShot')['value']=24;}catch(_){}
        try{_cfg['field']('shotSpread')['value']=0;}catch(_){}
        try{_cfg['field']('hitForceMag')['value']=4500;}catch(_){}
        try{_cfg['field']('recoilForceMag')['value']=0;}catch(_){}
        try{_cfg['field']('handRecoilForceMag')['value']=0;}catch(_){}
        try{_cfg['field']('shootTime')['value']=0.01;}catch(_){}
        try{_cfg['field']('defaultMaxAmmo')['value']=255;}catch(_){}
        try{_cfg['field']('maxDistance')['value']=9999;}catch(_){}
        try{_cfg['field']('headShotMultiplier')['value']=99;}catch(_){}
        return true;
    }
    function n5RunInfiniteGunStats(_notify=false){
        if(!n5InfiniteGunStats&&!_notify)return;
        if(!_notify&&time<n5GunStatsDelay)return;
        n5GunStatsDelay=time+0.5;
        let _c=0;
        try{
            const _gunCls=_0xa03cc7['class']('AnimalCompany.Gun');
            const _guns=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_gunCls)['invoke'](0);
            for(let _i=0;_guns&&_i<_guns['length'];_i++){
                try{
                    const _g=_guns['get'](_i);
                    if(!_g||(_g['handle']&&_g['handle']['isNull']()))continue;
                    let _cfg=null;
                    try{_cfg=_g['method']('get_config')['invoke']();}catch(_){}
                    try{if(!_cfg)_cfg=_g['field']('_config')['value'];}catch(_){}
                    if(n5JuiceGunConfig(_cfg))_c++;
                    try{_g['method']('set_shootTimer')['invoke'](0);}catch(_){}
                    try{_g['field']('_shootTimer')['value']=0;}catch(_){}
                }catch(_){}
            }
        }catch(_e){console.error('[N5 InfiniteGunStats]',_e);}
        try{n5RunShotgunNoCooldown();}catch(_){}
        if(_notify){currentNotification='Juiced guns: '+_c;notifactionResetTime=time+2;}
    }
    function n5RunNoRecoil(_notify=false){
        if(!n5NoRecoilEnabled&&!_notify)return;
        if(!_notify&&time<n5GunStatsDelay)return;
        n5GunStatsDelay=time+0.35;
        let _c=0;
        try{
            const _gunCls=_0xa03cc7['class']('AnimalCompany.Gun');
            const _guns=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_gunCls)['invoke'](0);
            for(let _i=0;_guns&&_i<_guns['length'];_i++){
                try{
                    const _g=_guns['get'](_i);
                    if(!_g||(_g['handle']&&_g['handle']['isNull']()))continue;
                    let _cfg=null;
                    try{_cfg=_g['method']('get_config')['invoke']();}catch(_){}
                    try{if(!_cfg)_cfg=_g['field']('_config')['value'];}catch(_){}
                    if(_cfg&&(!_cfg['handle']||!_cfg['handle']['isNull']())){
                        try{_cfg['field']('recoilForceMag')['value']=0.0;}catch(_){}
                        try{_cfg['field']('handRecoilForceMag')['value']=0.0;}catch(_){}
                        try{_cfg['field']('shotSpread')['value']=0.0;}catch(_){}
                        try{_cfg['field']('shotSpreadMin')['value']=0.0;}catch(_){}
                        try{_cfg['field']('shotSpreadMax')['value']=0.0;}catch(_){}
                        _c++;
                    }
                    try{_g['field']('_recoilCooldown')['value']=0.0;}catch(_){}
                    try{_g['field']('recoilForceMag')['value']=0.0;}catch(_){}
                    try{_g['field']('_recoilForceMag')['value']=0.0;}catch(_){}
                }catch(_){}
            }
        }catch(_e){console.error('[N5 NoRecoil]',_e);}
        if(_notify){currentNotification='No recoil guns: '+_c;notifactionResetTime=time+2;}
    }
    function n5RunItemForceCannon(){
        if(!rightGrab||!rightTrigger||time<n5ItemForceDelay)return;
        n5ItemForceDelay=time+0.04;
        try{
            const _g=_0x22649c(),_r=_g['ray'];
            if(!_r||(_r['handle']&&_r['handle']['isNull']()))return;
            const _hit=_r['method'](_0x476e10['avlli'])['invoke']();
            const _fwd=_0x35ade8['method'](_0x476e10['itVwD'])['invoke']();
            const _force=_0xe4d316['method'](_0x476e10['BGmZg'],2)['invoke'](_fwd,185);
            const _all=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_0xaf18fa)['invoke'](0);
            let _c=0;
            for(let _i=0;_all&&_i<_all['length'];_i++){
                try{
                    const _it=_all['get'](_i);
                    if(!_it||(_it['handle']&&_it['handle']['isNull']()))continue;
                    const _p=_0xc4cf2f(_it)['method'](_0x476e10['YApVv'])['invoke']();
                    const _d=_0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_hit,_p);
                    if(_d>4.0)continue;
                    let _ok=false;
                    try{_it['method']('AddExternalForceVelocity',1)['invoke'](_force);_ok=true;}catch(_){}
                    try{if(!_ok)_it['method']('AddExternalForce',2)['invoke'](_force,1);_ok=true;}catch(_){}
                    if(!_ok){
                        const _go=_it['method'](_0x476e10['ZqQpU'])['invoke']();
                        const _rb=_go['method'](_0x476e10['BGTMU'],1)['inflate'](_0x1d3a80)['invoke']();
                        if(_rb&&(!_rb['handle']||!_rb['handle']['isNull']())){_rb['method'](_0x476e10['YeICc'],2)['invoke'](_force,1);_ok=true;}
                    }
                    if(_ok)_c++;
                }catch(_){}
            }
            if(_c>0){currentNotification='Item force: '+_c;notifactionResetTime=time+0.5;}
        }catch(_e){console.error('[N5 ItemForceCannon]',_e);}
    }
    function n5PickupTypeValue(_name,_fallback){
        try{
            const _enum=_0xa03cc7['class']('AnimalCompany.PickupType');
            const _v=_enum['field'](_name)['value'];
            if(_v!==null&&_v!==undefined)return _v;
        }catch(_){}
        return _fallback;
    }
    function n5SpawnPickupAt(_pickupName,_pos,_count,_fallbackItemId){
        let _ok=false;
        try{
            const _mgr=_0xa03cc7['class']('AnimalCompany.PickupManager');
            const _ptype=_pickupName==='Nuts'?n5PickupTypeValue('Nuts',2):n5PickupTypeValue('Ammo',1);
            try{_mgr['method']('SpawnPickup',4)['overload']('AnimalCompany.PickupType','UnityEngine.Vector3','System.Int32','System.Boolean')['invoke'](_ptype,_pos,_count|0,true);_ok=true;}catch(_){}
            try{if(!_ok)_mgr['method']('SpawnPickup',4)['invoke'](_ptype,_pos,_count|0,true);_ok=true;}catch(_){}
            try{if(!_ok)_mgr['method']('SpawnPickup',4)['invoke'](_ptype,_pos,_count|0,false);_ok=true;}catch(_){}
        }catch(_e){console.error('[N5 Pickup SpawnPickup]',_e);}
        if(!_ok&&_fallbackItemId){
            try{_ok=!!n5SpawnConfiguredItemAt(_fallbackItemId,_pos,_0x554b79);}catch(_){}
        }
        return _ok;
    }
    function n5RunPickupGun(_pickupName,_label,_fallbackItemId,_count=1){
        if(!rightGrab||!rightTrigger)return;
        n5PickupGunDelay=time;
        try{
            const _g=_0x22649c(),_r=_g['ray'];
            if(!_r||(_r['handle']&&_r['handle']['isNull']()))return;
            const _pos=_r['method'](_0x476e10['avlli'])['invoke']();
            const _ok=n5SpawnPickupAt(_pickupName,_pos,_count,_fallbackItemId);
            currentNotification=_ok?(_label+' pickup spawned'):(_label+' pickup failed');
            notifactionResetTime=time+1.5;
        }catch(_e){console.error('[N5 PickupGun '+_label+']',_e);}
    }
    function n5DestroyItemObject(_obj){
        if(!_obj)return false;
        try{_obj['method']('RPC_Destroy')['invoke']();return true;}catch(_){}
        try{_obj['method']('DestroySelf')['invoke']();return true;}catch(_){}
        try{_obj['method']('Despawn')['invoke']();return true;}catch(_){}
        try{_obj['method'](_0x476e10['uXViU'])['invoke']([0,-99999,0]);return true;}catch(_){}
        try{_0xc4cf2f(_obj)['method'](_0x476e10['ZKeBc'])['invoke']([0,-99999,0]);}catch(_){}
        try{const _go=_obj['method'](_0x476e10['ZqQpU'])['invoke']();if(_go&&!_go['isNull']())_0x1f7740['method']('Destroy',1)['invoke'](_go);return true;}catch(_){}
        try{_0x1f7740['method']('Destroy',1)['invoke'](_obj);return true;}catch(_){}
        return false;
    }
    function n5ItemFromRayHit(_ray){
        try{
            const _col=_ray['method']('get_collider')['invoke']();
            if(!_col||(_col['isNull']&&_col['isNull']()))return null;
            let _it=null;
            try{_it=_0x35440f(_col,_0xaf18fa);}catch(_){}
            if(!_it||(_it['handle']&&_it['handle']['isNull']()))try{_it=_0x35440f(_col,_0x3e7a10);}catch(_){}
            if(_it&&(!_it['handle']||!_it['handle']['isNull']()))return _it;
            try{
                const _go=_col['method']('get_gameObject')['invoke']();
                if(_go&&!_go['isNull']()){
                    try{_it=_go['method'](_0x476e10['BGTMU'],1)['inflate'](_0xaf18fa)['invoke']();}catch(_){}
                    if(!_it||(_it['handle']&&_it['handle']['isNull']()))try{_it=_go['method'](_0x476e10['BGTMU'],1)['inflate'](_0x3e7a10)['invoke']();}catch(_){}
                    if(_it&&(!_it['handle']||!_it['handle']['isNull']()))return _it;
                }
            }catch(_){}
        }catch(_){}
        return null;
    }
    function n5EnumField(_className,_fieldName){
        try{return _0xa03cc7['class'](_className)['field'](_fieldName)['value'];}catch(_){}
        return null;
    }
    function n5RunVoxelNuke(){
        if(!rightGrab||!rightTrigger)return;
        n5VoxelNukeDelay=time;
        try{
            const _g=_0x22649c(),_r=_g['ray'];
            if(!_r||(_r['handle']&&_r['handle']['isNull']()))return;
            const _p=_r['method'](_0x476e10['avlli'])['invoke']();
            const _vmCls=_0xa03cc7['class']('AnimalCompany.Voxel.VoxelManager');
            let _vm=null;
            try{_vm=_vmCls['method']('get_instance')['invoke']();}catch(_){}
            if(!_vm||(_vm['handle']&&_vm['handle']['isNull']()))try{_vm=_0x1f7740['method']('FindObjectOfType',0)['inflate'](_vmCls)['invoke']();}catch(_){}
            if(!_vm||(_vm['handle']&&_vm['handle']['isNull']())){currentNotification='VoxelManager not found';notifactionResetTime=time+2;return;}
            const _damage=n5EnumField('AnimalCompany.DamageType','Explosive') ?? 4;
            const _src=n5EnumField('AnimalCompany.Voxel.VoxelEventSource','Player') ?? 0;
            let _count=0;
            try{_count=_vm['method']('MineWorldRadius',6)['invoke'](_p,7.5,999999,_damage,false,_src);}catch(_){}
            if(!_count)try{_count=_vm['method']('MineWorldRadius')['invoke'](_p,7.5,999999,4,false,0);}catch(_){}
            currentNotification='Voxel nuke: '+_count;notifactionResetTime=time+1.5;
        }catch(_e){console.error('[N5 VoxelNuke]',_e);currentNotification='Voxel nuke failed';notifactionResetTime=time+2;}
    }
    function n5FirePrefabLauncher(_prefabName,_label,_power=0,_cooldown=0){
        if(!rightGrab||!rightTrigger||time<n5OrbitFuckeryShootDelay)return;
        n5OrbitFuckeryShootDelay=time+_cooldown;
        try{
            const _handPos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
            const _handRot=_0x35ade8['method'](_0x476e10['YqqIM'])['invoke']();
            const _handFwd=_0x35ade8['method'](_0x476e10['itVwD'])['invoke']();
            const _spawnPos=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_handPos,_0xe4d316['method'](_0x476e10['BGmZg'],2)['invoke'](_handFwd,0.65));
            const _obj=_0x5b9456(_prefabName,_spawnPos,_handRot);
            if(_obj&&_power>0)n5LaunchItemObject(_obj,_handFwd,_power);
            currentNotification='Launched: '+(_label||_prefabName);notifactionResetTime=time+1;
        }catch(_e){console.error('[N5 PrefabLauncher]',_e);}
    }
    function n5FireFlareProjectileLauncher(){
        if(!rightGrab||!rightTrigger)return;
        try{
            const _handPos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
            const _handRot=_0x35ade8['method'](_0x476e10['YqqIM'])['invoke']();
            const _handFwd=_0x35ade8['method'](_0x476e10['itVwD'])['invoke']();
            const _spawnPos=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_handPos,_0xe4d316['method'](_0x476e10['BGmZg'],2)['invoke'](_handFwd,0.75));
            const _obj=_0x5b9456('FlareGunProjectile',_spawnPos,_handRot);
            if(_obj)n5LaunchItemObject(_obj,_handFwd,75);
            currentNotification='Launched: flare';notifactionResetTime=time+1;
        }catch(_e){console.error('[N5 FlareProjectileLauncher]',_e);}
    }
    function n5FireItemLauncher(_itemId,_label,_power=95,_cooldown=0,_rainbow=false){
        if(!rightGrab||!rightTrigger||time<n5OrbitFuckeryShootDelay)return;
        n5OrbitFuckeryShootDelay=time+_cooldown;
        try{
            const _handPos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
            const _handRot=_0x35ade8['method'](_0x476e10['YqqIM'])['invoke']();
            const _handFwd=_0x35ade8['method'](_0x476e10['itVwD'])['invoke']();
            const _spawnPos=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_handPos,_0xe4d316['method'](_0x476e10['BGmZg'],2)['invoke'](_handFwd,0.65));
            const _obj=_rainbow?(n5SpawnItemSyncAt(_itemId,_spawnPos,_handRot)||n5SpawnItemObjectAt(_itemId,_spawnPos,_handRot)):n5SpawnConfiguredItemAt(_itemId,_spawnPos,_handRot);
            if(_obj&&_obj!==true){
                if(_rainbow)n5ApplyRainbowItemConfig(_obj);
                n5LaunchItemObject(_obj,_handFwd,_power);
            }else{
                if(!_rainbow)n5SpawnItemAt(_itemId,_spawnPos,_handRot);
                else{currentNotification='Rainbow spawn needs sync item object';notifactionResetTime=time+1;return;}
            }
            currentNotification='Launched: '+(_label||_itemId);notifactionResetTime=time+1;
        }catch(_e){console.error('[N5 ItemLauncher]',_e);}
    }
    function n5BuildLaunchersCategory(){
        return [new _0x3d4c89({'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main','method':()=>{currentCategory=0;currentPage=0;}}),
            new _0x3d4c89({'buttonText':'Item +','isTogglable':false,'toolTip':'next item','method':()=>{itemIndex=(itemIndex+1)%itemIDs.length;currentNotification='ITEM: '+itemIDs[itemIndex];notifactionResetTime=time+2;}}),
            new _0x3d4c89({'buttonText':'Item -','isTogglable':false,'toolTip':'previous item','method':()=>{itemIndex=((itemIndex-1)+itemIDs.length)%itemIDs.length;currentNotification='ITEM: '+itemIDs[itemIndex];notifactionResetTime=time+2;}}),
            new _0x3d4c89({'buttonText':'Selected Item Launcher','isTogglable':true,'toolTip':'hold right grip and trigger to spam launch selected item','method':()=>n5FireItemLauncher(itemIDs[itemIndex],itemIDs[itemIndex],95,0)}),
            new _0x3d4c89({'buttonText':'Rainbow Item Launcher','isTogglable':true,'toolTip':'hold right grip and trigger to spam launch selected item with rainbow color','method':()=>n5FireItemLauncher(itemIDs[itemIndex],'rainbow '+itemIDs[itemIndex],105,0,true)}),
            new _0x3d4c89({'buttonText':'Timebomb Launcher','isTogglable':true,'toolTip':'hold right grip and trigger to spam launch timebombs','method':()=>n5FireItemLauncher('item_timebomb','timebomb',100,0)}),
            new _0x3d4c89({'buttonText':'Pelican Case Launcher','isTogglable':true,'toolTip':'hold right grip and trigger to spam launch pelican cases','method':()=>n5FireItemLauncher('item_pelican_case','pelican case',90,0)}),
            new _0x3d4c89({'buttonText':'Rare Card Launcher','isTogglable':true,'toolTip':'hold right grip and trigger to spam launch rare cards','method':()=>n5FireItemLauncher('item_rare_card','rare card',105,0)}),
            new _0x3d4c89({'buttonText':'Rocket Launcher','isTogglable':true,'toolTip':'hold right grip and trigger to fire RPGRocket','method':()=>n5FirePrefabLauncher('RPGRocket','rocket',0)}),
            new _0x3d4c89({'buttonText':'Robot Rocket Launcher','isTogglable':true,'toolTip':'hold right grip and trigger to fire RobotDogRPG','method':()=>n5FirePrefabLauncher('RobotDogRPG','robot rocket',0)}),
            new _0x3d4c89({'buttonText':'Rocket Spear Launcher','isTogglable':true,'toolTip':'hold right grip and trigger to fire RPGRocketSpear','method':()=>n5FirePrefabLauncher('RPGRocketSpear','rocket spear',0)}),
            new _0x3d4c89({'buttonText':'Rocket Egg Launcher','isTogglable':true,'toolTip':'hold right grip and trigger to fire RPGRocketEgg','method':()=>n5FirePrefabLauncher('RPGRocketEgg','rocket egg',0)}),
            new _0x3d4c89({'buttonText':'Flare Launcher','isTogglable':true,'toolTip':'hold right grip and trigger to fire FlareGunProjectile','method':()=>n5FireFlareProjectileLauncher()}),
            new _0x3d4c89({'buttonText':'Buggy Launcher','isTogglable':true,'toolTip':'hold right grip and trigger to spam launch buggies','method':()=>n5FirePrefabLauncher('Vehicle_Buggy','buggy',85,0)})
        ];
    }
        function n5RunInfiniteHoverpadBattery(){
        if (!n5InfiniteHoverpadBattery)return;
        try{
            const _cls=_0xa03cc7['class']('AnimalCompany.Hoverpad');
            const _arr=_0x1f7740['method']('FindObjectsOfType',0)['inflate'](_cls)['invoke']();
            const _len=(_arr&&typeof _arr['length']==='number')?_arr['length']:0;
            for(let _i=0;_i<_len;_i++){
                const _hp = _arr instanceof Map ? _arr.get(_i) : _arr[_i];
                if(!_hp||(_hp['handle']&&_hp['handle']['isNull']()))continue;
                try{_hp['method']('set_battery')['invoke'](1.0);}catch(_){}
                try{_hp['field']('_battery')['value']=1.0;}catch(_){}
                try{_hp['method']('HandleBatteryChanged')['invoke']();}catch(_){}
            }
        }catch(_){}
    }

    function n5BuildArenaFuckeryCategory(){
        return [new _0x3d4c89({'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main','method':()=>{currentCategory=0;currentPage=0;}}),
            new _0x3d4c89({'buttonText':'Arena Start','isTogglable':false,'toolTip':'calls ArenaGameManager.StartGame from dump','method':()=>n5ArenaManagerCall('StartGame')}),
            new _0x3d4c89({'buttonText':'Arena End','isTogglable':false,'toolTip':'calls ArenaGameManager.EndGame from dump','method':()=>n5ArenaManagerCall('EndGame')}),
            new _0x3d4c89({'buttonText':'Spam Start+Stop','isTogglable':true,'toolTip':'spams ArenaGameManager.StartGame and EndGame together','enableMethod':()=>{n5ArenaStartStopSpam=true;},'disableMethod':()=>{n5ArenaStartStopSpam=false;},'method':()=>n5RunArenaStartStopSpam()}),
            new _0x3d4c89({'buttonText':'Arena Enter Map','isTogglable':false,'toolTip':'calls ArenaGameManager.EnterMap','method':()=>n5ArenaManagerCall('EnterMap')}),
            new _0x3d4c89({'buttonText':'Arena Exit Map','isTogglable':false,'toolTip':'calls ArenaGameManager.ExitMap','method':()=>n5ArenaManagerCall('ExitMap')}),
            new _0x3d4c89({'buttonText':'Arena Team 1','isTogglable':false,'toolTip':'set local arena team 1','method':()=>n5ArenaManagerCall('SetLocalPlayerTeam',1)}),
            new _0x3d4c89({'buttonText':'Arena Team 2','isTogglable':false,'toolTip':'set local arena team 2','method':()=>n5ArenaManagerCall('SetLocalPlayerTeam',2)}),
            new _0x3d4c89({'buttonText':'Spam Arena','isTogglable':true,'toolTip':'spams arena prefabs/items at right hand','method':()=>n5SpamArenaStuff()}),
            new _0x3d4c89({'buttonText':'Arena Ore Burst','isTogglable':false,'toolTip':'uses ArenaOreSpawner SpawnGold/SpawnEmerald, fallback hell ores','method':()=>n5ArenaOreBurst()}),
            new _0x3d4c89({'buttonText':'Arena Item Burst','isTogglable':false,'toolTip':'spawns arena guns, ammo, ores, and weapon boxes','method':()=>n5ArenaItemBurst(false)}),
            new _0x3d4c89({'buttonText':'Arena Item Gun','isTogglable':true,'toolTip':'hold right grip + trigger to spawn arena items at pointer','method':()=>{if(!rightGrab||!rightTrigger||time<n5ArenaSpamDelay)return;n5ArenaSpamDelay=time+0.35;n5ArenaItemBurst(true);}}),
            new _0x3d4c89({'buttonText':'Arena Guns Burst','isTogglable':false,'toolTip':'spawns arena guns and shotgun ammo','method':()=>{try{const _pose=n5RightHandPose(1.0),_ids=['item_arena_pistol','item_arena_shotgun','item_shotgun_ammo','item_revolver_ammo'];for(let _i=0;_i<20;_i++){const _a=Math.PI*2*_i/20;n5SpawnItemAt(_ids[_i%_ids.length],[(_pose.pos[0]||0)+Math.cos(_a)*0.5,(_pose.pos[1]||0)+0.05*_i,(_pose.pos[2]||0)+Math.sin(_a)*0.5],_0x554b79);}currentNotification='Arena guns burst';notifactionResetTime=time+2;}catch(_e){console.error('[N5 Arena Guns]',_e);}}}),
            new _0x3d4c89({'buttonText':'Giveaway Bag Launcher','isTogglable':true,'toolTip':'hold right grip + B to launch a random filled bag','method':()=>{if(!(rightGrab&&rightSecondary)||time<n5GiveawayBagDelay)return;n5GiveawayBagDelay=time+0.45;n5SpawnGiveawayBag(true);}})
        ];
    }
    function n5BuildRigShitCategory(){
        return [new _0x3d4c89({'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main','method':()=>{currentCategory=0;currentPage=0;}}),
            new _0x3d4c89({'buttonText':'Rig Duper','isTogglable':false,'toolTip':'spawn a NetPlayer dupe at your position','method':()=>n5RigDupeMe(1)}),
            new _0x3d4c89({'buttonText':'Rig Burst x5','isTogglable':false,'toolTip':'spawn five NetPlayer dupes around you','method':()=>n5RigDupeMe(5)}),
            new _0x3d4c89({'buttonText':'Rig Duper Gun','isTogglable':true,'toolTip':'hold right grip and trigger to spawn rig dupes at pointer','method':()=>n5RigDupeGun()}),
            new _0x3d4c89({'buttonText':'Spam Rigs','isTogglable':true,'toolTip':'spams NetPlayer dupes around your rig','method':()=>n5RigSpam()}),
            new _0x3d4c89({'buttonText':'Rig Spasm','isTogglable':true,'toolTip':'makes your local rig/hands spasm','enableMethod':()=>{n5RigSpasmEnabled=true;n5RigSpasmBase=null;},'disableMethod':()=>{n5RigSpasmEnabled=false;n5StopRigSpasm();},'method':()=>n5RunRigSpasm()}),
            new _0x3d4c89({'buttonText':'Stop Rig Spasm','isTogglable':false,'toolTip':'resets rig spasm offsets and hand scale','method':()=>{n5RigSpasmEnabled=false;n5StopRigSpasm();currentNotification='Rig spasm stopped';notifactionResetTime=time+2;}}),
            new _0x3d4c89({'buttonText':'Rig At Hand','isTogglable':false,'toolTip':'spawn a NetPlayer dupe from your right hand','method':()=>{const _p=n5RightHandPose(0.75);n5SpawnRigDupeAt(_p.pos,1);}}),
            new _0x3d4c89({'buttonText':'Rig Rain','isTogglable':true,'toolTip':'hold right grip to rain rig dupes above you','method':()=>{if(!rightGrab||time<n5RigSpamDelay)return;n5RigSpamDelay=time+0.2;const _p=n5LocalPlayerPos();n5SpawnRigDupeAt([(_p[0]||0)+(Math.random()-0.5)*4,(_p[1]||0)+3+Math.random()*2,(_p[2]||0)+(Math.random()-0.5)*4],1);}})
        ];
    }
    function n5BuildBuffFuckeryCategory(){
        return [new _0x3d4c89({'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main','method':()=>{currentCategory=0;currentPage=0;}}),
            new _0x3d4c89({'buttonText':'Buff ID +','isTogglable':false,'toolTip':'next dumped PlayerBuff id','method':()=>{n5BuffId=(n5BuffId+1)&0x7fff;currentNotification='Buff ID: '+n5BuffId;notifactionResetTime=time+2;}}),
            new _0x3d4c89({'buttonText':'Buff ID -','isTogglable':false,'toolTip':'previous dumped PlayerBuff id','method':()=>{n5BuffId=Math.max(0,n5BuffId-1);currentNotification='Buff ID: '+n5BuffId;notifactionResetTime=time+2;}}),
            new _0x3d4c89({'buttonText':'Activate Buff','isTogglable':false,'toolTip':'PlayerBuffController.ActivateBuff selected id','method':()=>n5ActivateBuff(n5BuffId)}),
            new _0x3d4c89({'buttonText':'Spam Buff','isTogglable':true,'toolTip':'spams selected buff id','enableMethod':()=>{n5BuffSpam=true;},'disableMethod':()=>{n5BuffSpam=false;},'method':()=>n5RunBuffSpam()}),
            new _0x3d4c89({'buttonText':'Inf Fart','isTogglable':true,'toolTip':'spams Farty/FartBoost and fart VFX','enableMethod':()=>{n5InfFartEnabled=true;n5RunInfFart();currentNotification='Inf Fart ON';notifactionResetTime=time+2;},'disableMethod':()=>{n5InfFartEnabled=false;currentNotification='Inf Fart OFF';notifactionResetTime=time+2;},'method':()=>n5RunInfFart()}),
            new _0x3d4c89({'buttonText':'Clear Buffs','isTogglable':false,'toolTip':'PlayerBuffController.DeactivateAllBuffs','method':()=>n5ClearBuffs()}),
            new _0x3d4c89({'buttonText':'Buff Burst 0-30','isTogglable':false,'toolTip':'try the first 31 buff ids','method':()=>{let _c=0;for(let _i=0;_i<=30;_i++)if(n5ActivateBuff(_i))_c++;currentNotification='Buff burst tried: '+_c;notifactionResetTime=time+2;}})
        ];
    }
    function n5BuildWorldFuckeryCategory(){
        return [new _0x3d4c89({'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main','method':()=>{currentCategory=0;currentPage=0;}}),
            new _0x3d4c89({'buttonText':'Open All Doors','isTogglable':false,'toolTip':'AreaDoorsNetObject.OpenAllDoors','method':()=>n5DoorOpenAll()}),
            new _0x3d4c89({'buttonText':'Close All Doors','isTogglable':false,'toolTip':'AreaDoorsNetObject.CloseAllDoors','method':()=>n5DoorCloseAll()}),
            new _0x3d4c89({'buttonText':'Thunder Strike','isTogglable':false,'toolTip':'ThunderController Strike/RPC_Strike','method':()=>n5ThunderStrike()}),
            new _0x3d4c89({'buttonText':'Spam Thunder','isTogglable':true,'toolTip':'spam thunder strikes','method':()=>{if(time<n5WorldSpamDelay)return;n5WorldSpamDelay=time+0.35;n5ThunderStrike();}}),
            new _0x3d4c89({'buttonText':'Toggle All Boomboxes','isTogglable':false,'toolTip':'Boombox.RPC_ToggleOnOff on every boombox','method':()=>n5ToggleAllBoomboxes()}),
            new _0x3d4c89({'buttonText':'Pop All Balloons','isTogglable':false,'toolTip':'pop every Balloon/BalloonPopable found','method':()=>n5PopAllBalloons()}),
            new _0x3d4c89({'buttonText':'Spawn Blackhole','isTogglable':false,'toolTip':'spawn Blackhole prefab','method':()=>{currentNotification=n5SpawnPrefabNameAtHand('Blackhole',1.2)?'Blackhole spawned':'Blackhole failed';notifactionResetTime=time+2;}}),
            new _0x3d4c89({'buttonText':'Voxel Nuke','isTogglable':true,'toolTip':'hold right grip and trigger to MineWorldRadius at aim point','method':()=>n5RunVoxelNuke()}),
            new _0x3d4c89({'buttonText':'Spawn CoreTeleporter','isTogglable':false,'toolTip':'spawn CoreTeleporter prefab','method':()=>{currentNotification=n5SpawnPrefabNameAtHand('CoreTeleporter',1.2)?'CoreTeleporter spawned':'Core spawn failed';notifactionResetTime=time+2;}}),
            new _0x3d4c89({'buttonText':'Spawn Spaceship TP','isTogglable':false,'toolTip':'spawn SpaceshipTeleporter prefab','method':()=>{currentNotification=n5SpawnPrefabNameAtHand('SpaceshipTeleporter',1.2)?'Spaceship teleporter spawned':'Spaceship failed';notifactionResetTime=time+2;}}),
            new _0x3d4c89({'buttonText':'Spawn Network Lever','isTogglable':false,'toolTip':'spawn NetworkedLever_SecretLeft','method':()=>{currentNotification=n5SpawnPrefabNameAtHand('NetworkedLever_SecretLeft',1.0)?'Lever spawned':'Lever failed';notifactionResetTime=time+2;}})
        ];
    }
    function n5BuildMachineFuckeryCategory(){
        return [new _0x3d4c89({'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main','method':()=>{currentCategory=0;currentPage=0;}}),
            new _0x3d4c89({'buttonText':'Spawn Dupe Machine','isTogglable':false,'toolTip':'spawn Duplicator/DuplicationMachine prefab','method':()=>{currentNotification=(n5SpawnPrefabNameAtHand('Duplicator',1.2)||n5SpawnPrefabNameAtHand('DuplicationMachine',1.2))?'Dupe machine spawned':'dupe machine failed';notifactionResetTime=time+2;}}),
            new _0x3d4c89({'buttonText':'Juice Dupe Machine','isTogglable':false,'toolTip':'max duck/chaos and keycard-enter dupe machines','method':()=>n5DuplicationMachineMax()}),
            new _0x3d4c89({'buttonText':'Spam Dupe Juice','isTogglable':true,'toolTip':'keeps juicing dupe machines','method':()=>{if(time<n5MachineSpamDelay)return;n5MachineSpamDelay=time+0.5;n5DuplicationMachineMax();}}),
            new _0x3d4c89({'buttonText':'Spawn Claw Machine','isTogglable':false,'toolTip':'spawn ClawMachineNetObject','method':()=>{currentNotification=n5SpawnPrefabNameAtHand('ClawMachineNetObject',1.2)?'Claw spawned':'Claw failed';notifactionResetTime=time+2;}}),
            new _0x3d4c89({'buttonText':'Spawn Sell Machine','isTogglable':false,'toolTip':'spawn and setup ItemSellingMachineController','method':()=>n5SpawnSellingMachine()}),
            new _0x3d4c89({'buttonText':'Sell Button Spam','isTogglable':false,'toolTip':'press all ItemSellingMachineController buttons from dump','method':()=>n5SellingMachineCall('button')}),
            new _0x3d4c89({'buttonText':'Selling Spasm','isTogglable':true,'toolTip':'keeps spamming selling buttons and sell animation','enableMethod':()=>{n5SellingSpasm=true;},'disableMethod':()=>{n5SellingSpasm=false;},'method':()=>n5RunSellingSpasm()}),
            new _0x3d4c89({'buttonText':'Sell Amount Spam 9999999999','isTogglable':true,'toolTip':'forces huge sell value and spams selling/money RPC chunks','enableMethod':()=>{n5SellAmountSpam=true;n5RunSellAmountSpam(true);},'disableMethod':()=>{n5SellAmountSpam=false;currentNotification='Sell amount spam OFF';notifactionResetTime=time+2;},'method':()=>n5RunSellAmountSpam(false)}),
            new _0x3d4c89({'buttonText':'Sell Start','isTogglable':false,'toolTip':'RPC_StartItemSelling on all selling machines','method':()=>n5SellingMachineCall('sell')}),
            new _0x3d4c89({'buttonText':'Sell Explode','isTogglable':false,'toolTip':'RPC_ExplodeMachine on all selling machines','method':()=>n5SellingMachineCall('explode')}),
            new _0x3d4c89({'buttonText':'Sell Recover','isTogglable':false,'toolTip':'RPC_RecoverExplosion on all selling machines','method':()=>n5SellingMachineCall('recover')}),
            new _0x3d4c89({'buttonText':'Flush Toilets','isTogglable':false,'toolTip':'ToiletPullChain.FlushToilet from dump','method':()=>n5FlushToilets(true)}),
            new _0x3d4c89({'buttonText':'Spam Toilets','isTogglable':true,'toolTip':'repeatedly flush every live toilet chain','enableMethod':()=>{n5ToiletSpam=true;},'disableMethod':()=>{n5ToiletSpam=false;},'method':()=>n5RunToiletSpam()}),
            new _0x3d4c89({'buttonText':'Toilet Paper Burst','isTogglable':false,'toolTip':'spawn toilet paper, mega rolls, empty rolls, plungers','method':()=>n5ToiletPaperBurst()}),
            new _0x3d4c89({'buttonText':'Spawn Money Gun','isTogglable':false,'toolTip':'spawn item_moneygun','method':()=>{const _p=n5RightHandPose(0.8);currentNotification=n5SpawnItemAt('item_moneygun',_p.pos,_p.rot)?'Money gun spawned':'Money gun failed';notifactionResetTime=time+2;}}),
            new _0x3d4c89({'buttonText':'Spawn Scanner','isTogglable':false,'toolTip':'spawn item_prop_scanner','method':()=>{const _p=n5RightHandPose(0.8);currentNotification=n5SpawnItemAt('item_prop_scanner',_p.pos,_p.rot)?'Scanner spawned':'Scanner failed';notifactionResetTime=time+2;}})
        ];
    }
    function n5SpawnN5TuffHellOres(){
        try{
            const _pose=n5SelfSpawnPose(1.35,0.65),_base=[
                n5VecNum(_pose.pos,0,'x')-n5VecNum(_pose.right,0,'x')*2.05,
                n5VecNum(_pose.pos,1,'y')-n5VecNum(_pose.right,1,'y')*2.05,
                n5VecNum(_pose.pos,2,'z')-n5VecNum(_pose.right,2,'z')*2.05
            ],_hf=_pose.forward,_hr=_pose.right,_hu=_pose.up;
            const _panel=_0xb7e991(_base,_pose.rot,[2.6,0.55,0.03],3,[0.04,0.01,0.01,0.72],null,true);
            _0x41a4cf(_panel,'n5 is tuff',[1,0.18,0.08,1],[0,0,0.02],[2.25,0.42,0.01]);
            const _font={
                'N':['10001','11001','10101','10011','10001'],
                '5':['11111','10000','11110','00001','11110'],
                'I':['111','010','010','010','111'],
                'S':['1111','1000','1110','0001','1110'],
                'T':['11111','00100','00100','00100','00100'],
                'U':['1001','1001','1001','1001','1111'],
                'F':['1111','1000','1110','1000','1000']
            };
            const _text='N5 IS TUFF';
            const _xStep=0.095,_yStep=0.082,_letterGap=2,_spaceGap=5;
            let _x=0,_spawned=0;
            for(const _ch of _text){
                if(_ch===' '){_x+=_spaceGap;continue;}
                const _rows=_font[_ch]||[];
                const _w=_rows[0]?_rows[0].length:0;
                for(let _y=0;_y<_rows.length;_y++){
                    for(let _c=0;_c<_rows[_y].length;_c++){
                        if(_rows[_y][_c]!=='1')continue;
                        const _xx=(_x+_c)*_xStep;
                        const _yy=-_y*_yStep;
                        const _pos=[
                            _base[0]+n5VecNum(_hr,0,'x')*_xx+n5VecNum(_hu,0,'x')*_yy+n5VecNum(_hf,0,'x')*0.08,
                            _base[1]+n5VecNum(_hr,1,'y')*_xx+n5VecNum(_hu,1,'y')*_yy+n5VecNum(_hf,1,'y')*0.08,
                            _base[2]+n5VecNum(_hr,2,'z')*_xx+n5VecNum(_hu,2,'z')*_yy+n5VecNum(_hf,2,'z')*0.08
                        ];
                        if(n5SpawnHellOreAt(_pos,_0x554b79))_spawned++;
                    }
                }
                _x+=_w+_letterGap;
            }
            currentNotification='n5 is tuff hell ores: '+_spawned;notifactionResetTime=time+3;
        }catch(_e){currentNotification='hell ore text failed';notifactionResetTime=time+2;console.error('[N5 HellOreText]',_e);}
    }
    function n5SpawnHellOreRing(){
        try{
            const _pose=n5SelfSpawnPose(0.85,0.35);
            const _center=_pose.pos;
            let _count=0;
            for(let _i=0;_i<24;_i++){
                const _a=Math.PI*2*_i/24;
                const _pos=[n5VecNum(_center,0,'x')+Math.cos(_a)*0.9,n5VecNum(_center,1,'y')+Math.sin(_a)*0.9,n5VecNum(_center,2,'z')];
                if(n5SpawnHellOreAt(_pos,_0x554b79))_count++;
            }
            currentNotification='Hell ore ring: '+_count;notifactionResetTime=time+3;
        }catch(_e){currentNotification='hell ore ring failed';notifactionResetTime=time+2;console.error('[N5 HellOreRing]',_e);}
    }
    function n5SpawnMimiLavaText(){
        try{
            const _pose=n5SelfSpawnPose(1.55,0.75),_base=[
                n5VecNum(_pose.pos,0,'x')-n5VecNum(_pose.right,0,'x')*2.3,
                n5VecNum(_pose.pos,1,'y')-n5VecNum(_pose.right,1,'y')*2.3,
                n5VecNum(_pose.pos,2,'z')-n5VecNum(_pose.right,2,'z')*2.3
            ],_hf=_pose.forward,_hr=_pose.right,_hu=_pose.up;
            try{
                const _ft=_0xa03cc7['class']('AnimalCompany.FloatingTextManager');
                _ft['method']('Show',6)['invoke'](Il2Cpp['string']('I love MIMI'),0.65,[1,0.22,0.02,1],_base,5.0,0);
            }catch(_){}
            const _font={
                'I':['111','010','010','010','111'],
                'L':['1000','1000','1000','1000','1111'],
                'O':['1110','1001','1001','1001','1110'],
                'V':['10001','10001','01010','01010','00100'],
                'E':['1111','1000','1110','1000','1111'],
                'M':['10001','11011','10101','10001','10001']
            };
            const _text='I LOVE MIMI';
            const _xStep=0.095,_yStep=0.082,_letterGap=2,_spaceGap=5;
            let _x=0,_spawned=0;
            for(const _ch of _text){
                if(_ch===' '){_x+=_spaceGap;continue;}
                const _rows=_font[_ch]||[];
                const _w=_rows[0]?_rows[0].length:0;
                for(let _y=0;_y<_rows.length;_y++){
                    for(let _c=0;_c<_rows[_y].length;_c++){
                        if(_rows[_y][_c]!=='1')continue;
                        const _xx=(_x+_c)*_xStep;
                        const _yy=-_y*_yStep;
                        const _pos=[
                            _base[0]+n5VecNum(_hr,0,'x')*_xx+n5VecNum(_hu,0,'x')*_yy+n5VecNum(_hf,0,'x')*0.08,
                            _base[1]+n5VecNum(_hr,1,'y')*_xx+n5VecNum(_hu,1,'y')*_yy+n5VecNum(_hf,1,'y')*0.08,
                            _base[2]+n5VecNum(_hr,2,'z')*_xx+n5VecNum(_hu,2,'z')*_yy+n5VecNum(_hf,2,'z')*0.08
                        ];
                        if(n5SpawnHellOreAt(_pos,_0x554b79))_spawned++;
                    }
                }
                _x+=_w+_letterGap;
            }
            currentNotification='I love MIMI lava text: '+_spawned;notifactionResetTime=time+3;
        }catch(_e){currentNotification='MIMI lava text failed';notifactionResetTime=time+2;console.error('[N5 MimiLavaText]',_e);}
    }
    function n5SpawnSheldonLavaText(){
        try{
            const _pose=n5SelfSpawnPose(1.75,1.05),_base=[
                n5VecNum(_pose.pos,0,'x')-n5VecNum(_pose.right,0,'x')*3.55,
                n5VecNum(_pose.pos,1,'y')-n5VecNum(_pose.right,1,'y')*3.55,
                n5VecNum(_pose.pos,2,'z')-n5VecNum(_pose.right,2,'z')*3.55
            ],_hf=_pose.forward,_hr=_pose.right,_hu=_pose.up;
            try{
                const _ft=_0xa03cc7['class']('AnimalCompany.FloatingTextManager');
                _ft['method']('Show',6)['invoke'](Il2Cpp['string']('Sheldon Lee Cooper You Dawg'),0.65,[1,0.22,0.02,1],_base,5.0,0);
            }catch(_){}
            const _font={
                'A':['01110','10001','11111','10001','10001'],
                'C':['01111','10000','10000','10000','01111'],
                'D':['11110','10001','10001','10001','11110'],
                'E':['11111','10000','11110','10000','11111'],
                'G':['01111','10000','10111','10001','01111'],
                'H':['10001','10001','11111','10001','10001'],
                'L':['10000','10000','10000','10000','11111'],
                'N':['10001','11001','10101','10011','10001'],
                'O':['01110','10001','10001','10001','01110'],
                'P':['11110','10001','11110','10000','10000'],
                'R':['11110','10001','11110','10010','10001'],
                'S':['01111','10000','01110','00001','11110'],
                'U':['10001','10001','10001','10001','01110'],
                'W':['10001','10001','10101','11011','10001'],
                'Y':['10001','01010','00100','00100','00100']
            };
            const _text='SHELDON LEE COOPER\nYOU DAWG';
            const _xStep=0.066,_yStep=0.074,_letterGap=2,_spaceGap=5,_lineGap=7;
            let _x=0,_line=0,_spawned=0;
            for(const _ch of _text){
                if(_ch==='\n'){_line++;_x=0;continue;}
                if(_ch===' '){_x+=_spaceGap;continue;}
                const _rows=_font[_ch]||[];
                const _w=_rows[0]?_rows[0].length:0;
                for(let _y=0;_y<_rows.length;_y++){
                    for(let _c=0;_c<_rows[_y].length;_c++){
                        if(_rows[_y][_c]!=='1')continue;
                        const _xx=(_x+_c)*_xStep;
                        const _yy=-((_line*_lineGap)+_y)*_yStep;
                        const _pos=[
                            _base[0]+n5VecNum(_hr,0,'x')*_xx+n5VecNum(_hu,0,'x')*_yy+n5VecNum(_hf,0,'x')*0.08,
                            _base[1]+n5VecNum(_hr,1,'y')*_xx+n5VecNum(_hu,1,'y')*_yy+n5VecNum(_hf,1,'y')*0.08,
                            _base[2]+n5VecNum(_hr,2,'z')*_xx+n5VecNum(_hu,2,'z')*_yy+n5VecNum(_hf,2,'z')*0.08
                        ];
                        if(n5SpawnHellOreAt(_pos,_0x554b79))_spawned++;
                    }
                }
                _x+=_w+_letterGap;
            }
            currentNotification='Sheldon lava text: '+_spawned;notifactionResetTime=time+3;
        }catch(_e){currentNotification='Sheldon lava text failed';notifactionResetTime=time+2;console.error('[N5 SheldonLavaText]',_e);}
    }
    function n5SpawnDumpMobPack(){
        try{
            const _hand=_0x199f18['field'](_0x476e10['gOCqt'])['value']||_0x35ade8;
            const _hp=_hand['method'](_0x476e10['YApVv'])['invoke']();
            const _hf=_hand['method'](_0x476e10['itVwD'])['invoke']();
            const _valid=['Angler','Banshee','Bomb','Chicken','FakeGorilla','BigHead','Spider','Lanky','Blob','Cutie','Mimic','RobotDog','Shadow','BigShark','EdenZombie','Skinwalker','ArmstrongSpace','Smiley'];
            let _count=0;
            for(let _i=0;_i<8;_i++){
                const _a=Math.PI*2*_i/8;
                const _pos=[(_hp[0]||0)+(_hf[0]||0)*2.0+Math.cos(_a)*1.25,(_hp[1]||0)+0.1,(_hp[2]||0)+(_hf[2]||0)*2.0+Math.sin(_a)*1.25];
                const _id=_valid[Math.floor(Math.random()*_valid.length)];
                if(n5SpawnMobAt(_id,_pos,_0x554b79))_count++;
            }
            currentNotification='Dump mob pack: '+_count+'/8';notifactionResetTime=time+3;
        }catch(_e){currentNotification='mob pack failed';notifactionResetTime=time+2;console.error('[N5 DumpMobPack]',_e);}
    }
    function n5SpawnPissBurstAtTransform(_tf,_count=1){
        try{
            if(!_tf)return 0;
            const _pos=_tf['method'](_0x476e10['YApVv'])['invoke']();
            const _fwd=_tf['method'](_0x476e10['itVwD'])['invoke']();
            const _rot=_tf['method'](_0x476e10['YqqIM'])['invoke']();
            let _made=0;
            for(let _i=0;_i<_count;_i++){
                const _sp=[(_pos[0]||0)+(_fwd[0]||0)*0.16+(Math.random()-0.5)*0.05,(_pos[1]||0)-0.25+(Math.random()-0.5)*0.03,(_pos[2]||0)+(_fwd[2]||0)*0.16+(Math.random()-0.5)*0.05];
                const _obj=n5SpawnItemObjectAt('item_goop',_sp,_rot)||n5SpawnItemSyncAt('item_goop',_sp,_rot);
                if(_obj&&_obj!==true){
                    n5ApplyItemVisualConfig(_obj,56,100,0);
                    n5SetObjectVelocity(_obj,_fwd,5.2);
                    try{_0x1f7740['method']('Destroy',2)['invoke'](_obj['method'](_0x476e10['ZqQpU'])['invoke'](),2.2);}catch(_){}
                    _made++;
                }else if(n5SpawnItemAt('item_goop',_sp,_rot))_made++;
            }
            return _made;
        }catch(_e){console.error('[N5 PissBurst]',_e);return 0;}
    }
    function n5RunPissMod(){
        if(time<n5GoopSpamDelay)return;
        n5GoopSpamDelay=time+0.055;
        try{
            let _tf=null;
            try{_tf=_0xc4cf2f(_0x376315);}catch(_){}
            if(!_tf||(_tf['isNull']&&_tf['isNull']()))_tf=_0x35ade8;
            n5SpawnPissBurstAtTransform(_tf,1);
        }catch(_e){console.error('[N5 PissMod]',_e);}
    }
    function n5RunPissGun(){
        if(!rightGrab||!rightTrigger||time<n5GoopSpamDelay)return;
        n5GoopSpamDelay=time+0.055;
        try{
            const _g=_0x22649c(),_p=_g['point'];
            if(!_p)return;
            const _obj=n5SpawnItemObjectAt('item_goop',_p,_0x554b79)||n5SpawnItemSyncAt('item_goop',_p,_0x554b79);
            if(_obj&&_obj!==true)n5ApplyItemVisualConfig(_obj,56,100,0);
            else n5SpawnItemAt('item_goop',_p,_0x554b79);
        }catch(_e){console.error('[N5 PissGun]',_e);}
    }
    function n5BuildGooningCategory(){
        return [new _0x3d4c89({
            'buttonText':'<< Back','isTogglable':false,'toolTip':'back',
            'method':()=>{currentCategory=0;currentPage=0;}
        }),new _0x3d4c89({
            'buttonText':'Spawn n5 is tuff','isTogglable':false,'toolTip':'spawn n5 is tuff text with hell ores',
            'method':()=>{n5SpawnN5TuffHellOres();}
        }),new _0x3d4c89({
            'buttonText':'Hell Ore Ring','isTogglable':false,'toolTip':'spawn a ring of hell ores',
            'method':()=>{n5SpawnHellOreRing();}
        }),new _0x3d4c89({
            'buttonText':'I love MIMI Lava','isTogglable':false,'toolTip':'spawn I love MIMI lava text',
            'method':()=>{n5SpawnMimiLavaText();}
        }),new _0x3d4c89({
            'buttonText':'Sheldon Lava','isTogglable':false,'toolTip':'spawn Sheldon Lee Cooper You Dawg lava text',
            'method':()=>{n5SpawnSheldonLavaText();}
        }),new _0x3d4c89({
            'buttonText':'Dump Mob Pack','isTogglable':false,'toolTip':'spawn random valid mobs from the dumped MobID enum',
            'method':()=>{n5SpawnDumpMobPack();}
        }),new _0x3d4c89({
            'buttonText':'Goop Spam','isTogglable':true,'toolTip':'hold right grip to spam goop from right hand',
            'method':()=>{
                if(!rightGrab)return;
                try{
                    _0x22649c();
                    const _rh=_0x199f18['field'](_0x476e10['gOCqt'])['value']||_0x35ade8;
                    const _hp=_rh['method'](_0x476e10['YApVv'])['invoke']();
                    const _hf=_rh['method'](_0x476e10['itVwD'])['invoke']();
                    const _hr=_rh['method'](_0x476e10['YqqIM'])['invoke']();
                    const _pos=[(_hp[0]||0)+(_hf[0]||0)*0.22,(_hp[1]||0)+(_hf[1]||0)*0.22,(_hp[2]||0)+(_hf[2]||0)*0.22];
                    n5SpawnItemAt('item_goop',_pos,_hr);
                }catch(_e){console.error('[N5 GoopSpam]',_e);}
            }
        }),new _0x3d4c89({
            'buttonText':'Piss Mod','isTogglable':true,'toolTip':'yellow goop stream from body',
            'enableMethod':()=>{n5GoopSpamDelay=0;currentNotification='Piss Mod ON';notifactionResetTime=time+2;},
            'disableMethod':()=>{currentNotification='Piss Mod OFF';notifactionResetTime=time+2;},
            'method':()=>{n5RunPissMod();}
        }),new _0x3d4c89({
            'buttonText':'Piss Gun','isTogglable':true,'toolTip':'hold right grip and trigger to spawn yellow goop at pointer',
            'method':()=>{n5RunPissGun();}
        }),new _0x3d4c89({
            'buttonText':'Cover All','isTogglable':false,'toolTip':'cover all players in goopfish',
            'method':()=>{
                try{
                    let _count=0;
                    const _vals=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']();
                    const _en=_vals['method'](_0x476e10['UhwEm'])['invoke']();
                    while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                        const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                        if(!_pl||_pl['handle']['isNull']())continue;
                        const _p=_0xc4cf2f(_pl)['method'](_0x476e10['YApVv'])['invoke']();
                        const _spots=[[0,0.2,0],[0.35,0.6,0],[-0.35,0.6,0],[0,1.0,0.35],[0,1.0,-0.35],[0,1.4,0]];
                        for(const _o of _spots){
                            const _pos=[(_p[0]||0)+_o[0],(_p[1]||0)+_o[1],(_p[2]||0)+_o[2]];
                            if(n5SpawnItemAt('item_goopfish',_pos,_0x554b79))_count++;
                        }
                    }
                    currentNotification='Covered with goopfish: '+_count;notifactionResetTime=time+3;
                }catch(_e){currentNotification='Cover All failed';notifactionResetTime=time+2;console.error('[N5 CoverAll]',_e);}
            }
        })];
    }
    function n5BuildUsersCategory(){
        const _sel=()=>n5SelectedUser();
        const _label=()=>{
            const _u=_sel();
            if(!_u)return 'User: none';
            return 'User: '+n5GetPlayerDisplayName(_u);
        };
        const _act=(_name,_fn)=>{
            const _u=_sel();
            if(!_u){currentNotification='No user selected';notifactionResetTime=time+2;return;}
            const _ok=_fn(_u);
            currentNotification=_name+(_ok?' ok':' failed');notifactionResetTime=time+2;
        };
        return [new _0x3d4c89({
            'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main','method':()=>{currentCategory=0;currentPage=0;}
        }),new _0x3d4c89({
            'buttonText':_label(),'isTogglable':false,'toolTip':'selected user','method':()=>{currentNotification=_label();notifactionResetTime=time+3;}
        }),new _0x3d4c89({
            'buttonText':'User +','isTogglable':false,'toolTip':'next user','method':()=>{const _n=n5AllNetPlayers().length||1;n5UserIndex=(n5UserIndex+1)%_n;currentNotification=_label();notifactionResetTime=time+2;_0x8d3cef[33]=n5BuildUsersCategory();_n5MenuLastCat=-1;}
        }),new _0x3d4c89({
            'buttonText':'User -','isTogglable':false,'toolTip':'previous user','method':()=>{const _n=n5AllNetPlayers().length||1;n5UserIndex=((n5UserIndex-1)+_n)%_n;currentNotification=_label();notifactionResetTime=time+2;_0x8d3cef[33]=n5BuildUsersCategory();_n5MenuLastCat=-1;}
        }),new _0x3d4c89({
            'buttonText':'Refresh Users','isTogglable':false,'toolTip':'reload live players list','method':()=>{n5RefreshUsersCategory();}
        }),new _0x3d4c89({
            'buttonText':'Save Lobby Users','isTogglable':false,'toolTip':'write lobby player IDs, names, offline flag, whitelist state to json','method':()=>n5SaveLobbyUsers()
        }),new _0x3d4c89({
            'buttonText':'TP Selected To Me','isTogglable':false,'toolTip':'teleport selected user to you','method':()=>_act('TP to me',_u=>n5TeleportSelectedUserToMe(_u))
        }),new _0x3d4c89({
            'buttonText':'TP Me To Selected','isTogglable':false,'toolTip':'teleport yourself to selected user','method':()=>_act('TP to user',_u=>n5TeleportMeToSelectedUser(_u))
        }),new _0x3d4c89({
            'buttonText':'TP Selected To Map','isTogglable':false,'toolTip':'teleport selected user to the selected Map ID','method':()=>_act('TP to '+mapIDs[n5MapIndex].name,_u=>n5TeleportUserToMap(_u,mapIDs[n5MapIndex].id))
        }),new _0x3d4c89({
            'buttonText':'TP Everyone To Map','isTogglable':false,'toolTip':'teleport every remote user to the selected Map ID','method':()=>{const _map=mapIDs[n5MapIndex],_pos=n5FindTeleTargetPosition(_map.id);if(!_pos){currentNotification='Map target not in scene';notifactionResetTime=time+2;return;}const _c=n5ForUsers(n5AllRemoteUsers(),_u=>n5TeleportUserToPosition(_u,_pos));currentNotification='TP everyone to '+_map.name+': '+_c;notifactionResetTime=time+2;}
        }),new _0x3d4c89({
            'buttonText':'Kick Selected','isTogglable':false,'toolTip':'send kick to selected user','method':()=>_act('Kick',_u=>n5KickPlayerObject(_u))
        }),new _0x3d4c89({
            'buttonText':'Kick Everyone Once','isTogglable':false,'toolTip':'send kick to every non-local user once','method':()=>{const _c=n5KickAllUsers(true);currentNotification='Kick everyone once: '+_c;notifactionResetTime=time+2;}
        }),new _0x3d4c89({
            'buttonText':'Auto Kick All','isTogglable':true,'toolTip':'keeps spamming the same kick method on everyone except you','enableMethod':()=>{n5AutoKickAllDelay=0;currentNotification='Auto kick all ON';notifactionResetTime=time+2;},'disableMethod':()=>{currentNotification='Auto kick all OFF';notifactionResetTime=time+2;},'method':()=>n5KickAllUsers(false)
        }),new _0x3d4c89({
            'buttonText':'Whitelist Selected','isTogglable':false,'toolTip':'add selected user to whitelist','method':()=>_act('Whitelist',_u=>n5WhitelistAdd(_u))
        }),new _0x3d4c89({
            'buttonText':'Unwhitelist Selected','isTogglable':false,'toolTip':'remove selected user from whitelist','method':()=>_act('Unwhitelist',_u=>n5WhitelistRemove(_u))
        }),new _0x3d4c89({
            'buttonText':'Buff ID +','isTogglable':false,'toolTip':'next buff id','method':()=>{n5BuffId=(n5BuffId+1)&0x7fff;currentNotification='Buff ID: '+n5BuffId;notifactionResetTime=time+2;}
        }),new _0x3d4c89({
            'buttonText':'Buff ID -','isTogglable':false,'toolTip':'previous buff id','method':()=>{n5BuffId=Math.max(0,n5BuffId-1);currentNotification='Buff ID: '+n5BuffId;notifactionResetTime=time+2;}
        }),new _0x3d4c89({
            'buttonText':'Buff Selected','isTogglable':false,'toolTip':'try selected buff on selected user','method':()=>_act('Buff '+n5BuffId,_u=>n5ApplyBuffToPlayer(_u,n5BuffId))
        }),new _0x3d4c89({
            'buttonText':'Buff Everyone','isTogglable':false,'toolTip':'try selected buff id on everyone except you','method':()=>{const _c=n5ForUsers(n5AllRemoteUsers(),_u=>n5ApplyBuffToPlayer(_u,n5BuffId));currentNotification='Buff everyone '+n5BuffId+': '+_c;notifactionResetTime=time+2;}
        }),new _0x3d4c89({
            'buttonText':'Shake Screen Selected','isTogglable':false,'toolTip':'screen shake selected user','method':()=>_act('Shake screen',_u=>n5ShakePlayerScreen(_u))
        }),new _0x3d4c89({
            'buttonText':'Shake Screen Everyone','isTogglable':false,'toolTip':'screen shake everyone except you','method':()=>{const _c=n5ForUsers(n5AllRemoteUsers(),_u=>n5ShakePlayerScreen(_u));currentNotification='Shake everyone: '+_c;notifactionResetTime=time+2;}
        }),new _0x3d4c89({
            'buttonText':'Stun Selected','isTogglable':false,'toolTip':'stun selected user','method':()=>_act('Stun',_u=>n5StunUser(_u))
        }),new _0x3d4c89({
            'buttonText':'Stun Everyone','isTogglable':false,'toolTip':'stun everyone except you','method':()=>{const _c=n5ForUsers(n5AllRemoteUsers(),_u=>n5StunUser(_u));currentNotification='Stun everyone: '+_c;notifactionResetTime=time+2;}
        }),new _0x3d4c89({
            'buttonText':'Size + Selected','isTogglable':false,'toolTip':'make selected user larger locally','method':()=>_act('Size +',_u=>n5SetPlayerScale(_u,0.15))
        }),new _0x3d4c89({
            'buttonText':'Size - Selected','isTogglable':false,'toolTip':'make selected user smaller locally','method':()=>_act('Size -',_u=>n5SetPlayerScale(_u,-0.15))
        }),new _0x3d4c89({
            'buttonText':'Grow Selected','isTogglable':false,'toolTip':'set selected user big','method':()=>_act('Grow',_u=>n5SetPlayerScaleExact(_u,2.5))
        }),new _0x3d4c89({
            'buttonText':'Small Selected','isTogglable':false,'toolTip':'set selected user tiny','method':()=>_act('Small',_u=>n5SetPlayerScaleExact(_u,0.35))
        }),new _0x3d4c89({
            'buttonText':'Reset Size Selected','isTogglable':false,'toolTip':'reset selected user size','method':()=>_act('Reset size',_u=>n5SetPlayerScaleExact(_u,1.0))
        }),new _0x3d4c89({
            'buttonText':'Grow Everyone','isTogglable':false,'toolTip':'set everyone except you big','method':()=>{const _c=n5ForUsers(n5AllRemoteUsers(),_u=>n5SetPlayerScaleExact(_u,2.5));currentNotification='Grow everyone: '+_c;notifactionResetTime=time+2;}
        }),new _0x3d4c89({
            'buttonText':'Small Everyone','isTogglable':false,'toolTip':'set everyone except you tiny','method':()=>{const _c=n5ForUsers(n5AllRemoteUsers(),_u=>n5SetPlayerScaleExact(_u,0.35));currentNotification='Small everyone: '+_c;notifactionResetTime=time+2;}
        }),new _0x3d4c89({
            'buttonText':'Reset Size Everyone','isTogglable':false,'toolTip':'reset everyone except you size','method':()=>{const _c=n5ForUsers(n5AllRemoteUsers(),_u=>n5SetPlayerScaleExact(_u,1.0));currentNotification='Reset everyone: '+_c;notifactionResetTime=time+2;}
        }),new _0x3d4c89({
            'buttonText':'Mute Selected','isTogglable':false,'toolTip':'set selected player voice volume to zero','method':()=>_act('Mute',_u=>n5SetVoiceVolumeForRig(_u,0.0))
        }),new _0x3d4c89({
            'buttonText':'Loud Selected','isTogglable':false,'toolTip':'set selected player voice volume high','method':()=>_act('Loud',_u=>n5SetVoiceVolumeForRig(_u,2.0))
        }),new _0x3d4c89({
            'buttonText':'Mute Everyone','isTogglable':false,'toolTip':'set everyone except you voice volume to zero','method':()=>{const _c=n5ForUsers(n5AllRemoteUsers(),_u=>n5SetVoiceVolumeForRig(_u,0.0));currentNotification='Mute everyone: '+_c;notifactionResetTime=time+2;}
        }),new _0x3d4c89({
            'buttonText':'Loud Everyone','isTogglable':false,'toolTip':'set everyone except you voice volume high','method':()=>{const _c=n5ForUsers(n5AllRemoteUsers(),_u=>n5SetVoiceVolumeForRig(_u,2.0));currentNotification='Loud everyone: '+_c;notifactionResetTime=time+2;}
        })];
    }

    function n5SelectIdValue(_kind,_value){
        try{
            if(_kind==='item'){
                const _idx=itemIDs.indexOf(_value);
                if(_idx>=0)itemIndex=_idx;
                currentNotification='ITEM: '+_value;
            }else if(_kind==='mob'){
                const _idx=mobIDs.indexOf(_value);
                if(_idx>=0)mobIndex=_idx;
                currentNotification='MOB: '+_value;
            }else if(_kind==='prefab'){
                const _idx=prefabList.indexOf(_value);
                if(_idx>=0)prefabIndex=_idx;
                currentNotification='PREFAB: '+_value;
            }else if(_kind==='map'){
                const _idx=mapIDs.findIndex(_map=>_map.id===_value.id);
                if(_idx>=0)n5MapIndex=_idx;
                currentNotification='MAP: '+_value.name+' ('+_value.id+')';
            }
            notifactionResetTime=time+3;
        }catch(_e){console.error('[IDs 2.0 select]',_e);}
    }
    function n5IdButton(_kind,_value){
        const _label=_kind==='map'?(_value.name+' ['+_value.id+']'):_value;
        return new _0x3d4c89({
            'buttonText':_label,
            'isTogglable':false,
            'toolTip':'select '+_kind+' id: '+_label,
            'method':()=>n5SelectIdValue(_kind,_value)
        });
    }
    function n5BuildIds20Category(){
        return [new _0x3d4c89({'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main','method':()=>{currentCategory=0;currentPage=0;}}),
            new _0x3d4c89({'buttonText':'Items','isTogglable':false,'toolTip':'full item id picker','method':()=>{currentCategory=38;currentPage=0;}}),
            new _0x3d4c89({'buttonText':'Mobs','isTogglable':false,'toolTip':'full mob id picker','method':()=>{currentCategory=39;currentPage=0;}}),
            new _0x3d4c89({'buttonText':'Prefabs','isTogglable':false,'toolTip':'full prefab id picker','method':()=>{currentCategory=40;currentPage=0;}}),
            new _0x3d4c89({'buttonText':'Map IDs','isTogglable':false,'toolTip':'full map teleport id picker','method':()=>{currentCategory=41;currentPage=0;}}),
            new _0x3d4c89({'buttonText':'Teleport Me To Selected Map','isTogglable':false,'toolTip':'teleport to the selected Map ID','method':()=>teleportTo(mapIDs[n5MapIndex].id)}),
            new _0x3d4c89({'buttonText':'Current IDs','isTogglable':false,'toolTip':'show currently selected ids','method':()=>{currentNotification='ITEM:'+itemIDs[itemIndex]+' | MOB:'+mobIDs[mobIndex]+' | PREFAB:'+prefabList[prefabIndex]+' | MAP:'+mapIDs[n5MapIndex].name+'('+mapIDs[n5MapIndex].id+')';notifactionResetTime=time+5;}})
        ];
    }
    function n5BuildIdListCategory(_kind,_list){
        const _buttons=[new _0x3d4c89({'buttonText':'<< Back to IDs 2.0','isTogglable':false,'toolTip':'back','method':()=>{currentCategory=37;currentPage=0;}})];
        for(const _id of _list)_buttons.push(n5IdButton(_kind,_id));
        return _buttons;
    }
    const _0x8d3cef=[[new _0x3d4c89( {
        'buttonText':'Settings','method':()=> {
            currentCategory=0x1dcf+0x5eb*0x1+-0x24*0xfe,currentPage=-0x1bc2+0xd9f+0x2f*0x4d;
        },
        'isTogglable':![],'toolTip':'settings n stuff'
    }
    ),new _0x3d4c89( {
        'buttonText':'Movement','method':()=> {
            currentCategory=-0xa5c+0xadf+-0x80,currentPage=0x20e7*0x1+0x1930+0x1*-0x3a17;
        },
        'isTogglable':![],'toolTip':'movement stuff'
    }
    ),new _0x3d4c89( {
        'buttonText':'Player','method':()=> {
            currentCategory=-0x216e+-0x1*-0x11d7+-0xf9b*-0x1,currentPage=-0x7*-0x41e+0x5c4+-0x114b*0x2;
        },
        'isTogglable':![],'toolTip':'player stuff'
    }
    ),new _0x3d4c89( {
        'buttonText':'Other Players','method':()=> {
            currentCategory=0x5d1*0x3+0x151c+-0x1*0x268a,currentPage=-0x3*-0x8a9+0x1*-0x20a5+0x6aa;
        },
        'isTogglable':![],'toolTip':'other players'
    }
    ),new _0x3d4c89( {
        'buttonText':'Cosmetics','method':()=> {
            currentCategory=-0x361+-0x2651+-0xde8*-0x3,currentPage=0x7d*-0x2b+-0x33e+0x183d*0x1;
        },
        'isTogglable':![],'toolTip':'item mods'
    }
    ),new _0x3d4c89( {
        'buttonText':'Spawning','method':()=> {
            currentCategory=0x130*-0x1c+0x5c1+0x1b86,currentPage=-0x1fa1+0x19de+0x5c3;
        },
        'isTogglable':![],'toolTip':'spawning stuff'
    }
    ),new _0x3d4c89( {
        'buttonText':'Weapons','method':()=> {
            currentCategory=-0x46*0x5e+-0x2de*0x1+0x1c9a,currentPage=-0x2408+-0x4*0x422+0x3490;
        },
        'isTogglable':![],'toolTip':'gun mods'
    }
    ),new _0x3d4c89( {
        'buttonText':'Utility','method':()=> {
            currentCategory=0x1bdf+-0x302*0xa+0x23e,currentPage=0x1121+0x65*-0x3b+-0x626*-0x1;
        },
        'isTogglable':![],'toolTip':'utility stuff'
    }
    ),new _0x3d4c89( {
        'buttonText':'Prefabs','method':()=> {
            currentCategory=0x14b4+-0x11b6+-0x97*0x5,currentPage=0x436*0x2+0x2379+-0x2be5;
        },
        'isTogglable':![],'toolTip':'prefab stuff'
    }
    ),new _0x3d4c89({
        'buttonText':'Guns','method':()=>{currentCategory=15;currentPage=0;},
        'isTogglable':false,'toolTip':'all the guns pmo'
    }),new _0x3d4c89({
        'buttonText':'Launchers','isTogglable':false,'toolTip':'item, rocket, case, card, and timebomb launchers','method':()=>{currentCategory=34;currentPage=0;}
    }),new _0x3d4c89( {
        'buttonText':'IDs','isTogglable':false,'toolTip':'change the ids','method':()=>{currentCategory=12;currentPage=0;}
    }),new _0x3d4c89( {
        'buttonText':'ids 2.0','isTogglable':false,'toolTip':'paged full item, mob, and prefab id picker','method':()=>{currentCategory=37;currentPage=0;}
    }),new _0x3d4c89( {
        'buttonText':'Presets','isTogglable':false,'toolTip':'save ur stuff','method':()=>{currentCategory=13;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Soundboard','isTogglable':false,'toolTip':'play sounds bro','method':()=>{currentCategory=14;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Tab','isTogglable':false,'toolTip':'whitelist','method':()=>{currentCategory=17;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'RPC Blocks','isTogglable':false,'toolTip':'Toggle which incoming RPCs are blocked','method':()=>{currentCategory=18;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Credits','isTogglable':false,'toolTip':'credits','method':()=>{currentCategory=19;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Quiver Fuckery','isTogglable':false,'toolTip':'quiver and backpack chaos','method':()=>{currentCategory=20;currentPage=0;} }
    ),new _0x3d4c89({
        'buttonText':'Orbit Fuckery','isTogglable':false,'toolTip':'prefab orbits, item spawning, and mob spawning','method':()=>{currentCategory=21;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Larping','isTogglable':false,'toolTip':'become prefabs with no collisions','method':()=>{currentCategory=22;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Whitelisting','isTogglable':false,'toolTip':'whitelist gun and whitelist hand powers','method':()=>{currentCategory=23;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Mommy Milker','isTogglable':false,'toolTip':'mom boss tools','method':()=>{currentCategory=24;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Blueprints','isTogglable':false,'toolTip':'spawn saved blueprint jsons','method':()=>{_0x8d3cef[25]=n5BuildBlueprintCategory();_0x564127=new Map();_0x8d3cef['flat']()['forEach'](_b=>_0x564127['set'](_b['buttonText'],_b));currentCategory=25;currentPage=0;_n5MenuLastCat=-1;}
    }),new _0x3d4c89({
        'buttonText':'Gooning','isTogglable':false,'toolTip':'goop spam tools','method':()=>{currentCategory=26;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Arena Fuckery','isTogglable':false,'toolTip':'arena game, ores, spam, giveaway bag tools','method':()=>{currentCategory=27;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Rig Shit','isTogglable':false,'toolTip':'rig duping and rig spasm tools','method':()=>{currentCategory=28;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Buff Fuckery','isTogglable':false,'toolTip':'player buff activation and clearing','method':()=>{currentCategory=29;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'World Fuckery','isTogglable':false,'toolTip':'doors, thunder, blackholes, world objects','method':()=>{currentCategory=30;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Machine Fuckery','isTogglable':false,'toolTip':'dupe, selling, claw, and machine tools','method':()=>{currentCategory=31;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Users','isTogglable':false,'toolTip':'select users, save lobby, kick, buffs, whitelist','method':()=>{_0x8d3cef[33]=n5BuildUsersCategory();_0x564127=new Map();_0x8d3cef['flat']()['forEach'](_b=>_0x564127['set'](_b['buttonText'],_b));currentCategory=33;currentPage=0;_n5MenuLastCat=-1;}
    }),new _0x3d4c89({
        'buttonText':'Shadow Boss Shit','isTogglable':false,'toolTip':'shadow boss spawn, phase, smite, laser, and dive tools','method':()=>{currentCategory=35;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Good Shit','isTogglable':false,'toolTip':'shop, dev, no-spend, cosmetics, and blueprint bypasses','method':()=>{currentCategory=36;currentPage=0;}
    }
    )],[new _0x3d4c89( {
        'buttonText':_0x476e10['gjAjh'],'method':()=> {

            try {
                const _runner = _0x1e0b92['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['RhZfj'])['invoke']();
                if(_runner && !_runner['isNull']()) {
                    _runner['method']('Shutdown')['invoke']();
                    currentNotification='Disconnecting...';notifactionResetTime=time+3;
                }
            } catch(_e){ console.error('[Disconnect]',_e); }
        },
        'isTogglable':![],'toolTip':_0x476e10['Gvuap']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['Zzuyo'],'method':()=> {
            const _0x3f64fa=_0x240047,_0x17dbe7=_0x476e10['yhReC'](Math['ceil'](_0x476e10['vbaeB'](_0x8d3cef[currentCategory]['length'],0x1554+0x244a+-0x3996)),0x1*0x9af+0xc7*-0x2+-0x820);
            currentPage--;
            if(_0x476e10['zFoqP'](currentPage,-0x18*-0x6a+0x2269*0x1+-0x2c59*0x1))currentPage=_0x17dbe7;
        },
        'isTogglable':![]
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['tkgxf'],'method':()=> {
            const _0x4f0dc5=_0x240047,_0x2a4448=_0x476e10['QcdsO'](Math['ceil'](_0x476e10['YEtTY'](_0x8d3cef[currentCategory]['length'],-0x1c48+0x5d0*-0x3+0x2dc0)),0xe8a*-0x1+-0x132f+0x21ba);
            currentPage++,currentPage%=_0x476e10['wJVCE'](_0x2a4448,-0x12d1*0x2+0x193*-0x9+0x33ce);
        },
        'isTogglable':![]
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['FIcve'],'method':()=> {
            currentCategory=-0x3*0xb03+0x1011*0x1+0x10f8,currentPage=0x10bd+-0x1588*-0x1+0x1*-0x2645;
        },
        'isTogglable':![],'toolTip':_0x476e10['CvvKF']
    }
    )],[new _0x3d4c89( {
        'buttonText':_0x476e10['fXUix'],'method':()=> {
            currentCategory=-0x19d*0x7+0x2491+-0x1946,currentPage=0x1a33+-0x219b*0x1+0x768;
        },
        'isTogglable':![],'toolTip':_0x476e10['CvvKF']
    }
    ),new _0x3d4c89({
        'buttonText':'Item ID+','isTogglable':false,'toolTip':'cycle item ID forward',
        'method':()=>{
            itemIndex=(itemIndex+1)%itemIDs.length;
            currentNotification='ITEM: '+itemIDs[itemIndex]; notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Item ID-','isTogglable':false,'toolTip':'cycle item ID backward',
        'method':()=>{
            itemIndex=((itemIndex-1)+itemIDs.length)%itemIDs.length;
            currentNotification='ITEM: '+itemIDs[itemIndex]; notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Prefab ID+','isTogglable':false,'toolTip':'cycle prefab forward',
        'method':()=>{
            prefabIndex=(prefabIndex+1)%prefabList.length;
            currentNotification='PREFAB: '+prefabList[prefabIndex]; notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Prefab ID-','isTogglable':false,'toolTip':'cycle prefab backward',
        'method':()=>{
            prefabIndex=((prefabIndex-1)+prefabList.length)%prefabList.length;
            currentNotification='PREFAB: '+prefabList[prefabIndex]; notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Show Current IDs','isTogglable':false,'toolTip':'print current item/mob/prefab IDs to notification',
        'method':()=>{
            currentNotification='ITEM:'+itemIDs[itemIndex]+' | MOB:'+mobIDs[mobIndex]+' | PREFAB:'+prefabList[prefabIndex];
            notifactionResetTime=time+5;
        }
    }),new _0x3d4c89( {
        'buttonText':_0x476e10['WDhXx'],'method':()=> {
            const _0x151a05=_0x240047;
            rightGrab?itemIndex--:itemIndex++,itemIndex=_0x476e10['hXWTf'](_0x476e10['HaQtP'](_0x476e10['hXWTf'](itemIndex,itemIDs['length']),itemIDs['length']),itemIDs['length']),console['log'](itemIDs[itemIndex]),_0x476e10['vFJQf'](_0x3dddf7,_0x476e10['HaQtP'](_0x476e10['mAIPj'](_0x476e10['cRLnB'],_0x476e10['jEocR']),itemIDs[itemIndex]),![]);
        },
        'isTogglable':![],'toolTip':_0x476e10['vjzRb']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['QLGvF'],'method':()=> {
            const _0x31dd9f=_0x240047;
            rightGrab?mobIndex--:mobIndex++,mobIndex=_0x476e10['PijQq'](_0x476e10['ACbPx'](_0x476e10['Oulwf'](mobIndex,mobIDs['length']),mobIDs['length']),mobIDs['length']),_0x476e10['wIoQl'](_0x3dddf7,_0x476e10['wJVCE'](_0x476e10['FsYCF'],mobIDs[mobIndex]),![]);
        },
        'isTogglable':![],'toolTip':_0x476e10['STAOa']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['SNsOx'],'method':()=> {
            const _0x114678=_0x240047,_0x1c1d0b= {
                'fGcqg':_0x476e10['SDpKB'],'cIgmb':_0x476e10['bfnsC']
            };
            !devModeHookSet&&(_0x178e96['method'](_0x476e10['bfnsC'])['implementation']=function() {
                const _0x277351=_0x114678;
                this['field'](_0x1c1d0b['fGcqg'])['value']=!![],this['method'](_0x1c1d0b['cIgmb'])['invoke']();
            },
            devModeHookSet=!![]);
        },
        'disableMethod':()=> {
            const _0x55f7de=_0x240047;
            _0x178e96['method'](_0x476e10['bfnsC'])['implementation']=null,devModeHookSet=![];
        },
        'isTogglable':!![],'toolTip':_0x476e10['GBQHN']
    }
    ),new _0x3d4c89({
        'buttonText':'Name: hi','isTogglable':false,
        'toolTip':'pick a name',
        'method':()=>{
            n5NameIndex=(n5NameIndex+1)%n5Names.length;
            currentNotification='Name: '+n5Names[n5NameIndex];notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Name <','isTogglable':false,'toolTip':'prev name',
        'method':()=>{n5NameIndex=((n5NameIndex-1)+n5Names.length)%n5Names.length;currentNotification='Name: '+n5Names[n5NameIndex];notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Apply Name','isTogglable':false,'toolTip':'apply name',
        'method':()=>{
            try {
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp)return;

                const _cleanName = n5Names[n5NameIndex].replace(/<color=[^>]+>/gi,'').replace(/<\/color>/gi,'');
                _lp['method'](_0x476e10['LoSCC'])['invoke'](Il2Cpp['string'](_cleanName));
                currentNotification='Name set: '+_cleanName;notifactionResetTime=time+3;
            } catch(_e){console.error('Name spoof:',_e);}
        }
    }),new _0x3d4c89({'buttonText':'>> Next Theme','isTogglable':false,'toolTip':'next theme','method':()=>{n5ThemeIndex=(n5ThemeIndex+1)%n5ThemeKeys.length;currentNotification='Theme: '+n5ThemeKeys[n5ThemeIndex];notifactionResetTime=time+3;}
    }),new _0x3d4c89({'buttonText':'Galaxy','isTogglable':false,'toolTip':'galaxy','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Galaxy');currentNotification='Theme: Galaxy';notifactionResetTime=time+3;}
    }),new _0x3d4c89({'buttonText':'Rainbow','isTogglable':false,'toolTip':'rainbow','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Rainbow');currentNotification='Theme: Rainbow';notifactionResetTime=time+3;}
    }),new _0x3d4c89({'buttonText':'Blood Red','isTogglable':false,'toolTip':'blood red','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Blood Red');currentNotification='Theme: Blood Red';notifactionResetTime=time+3;}
    }),new _0x3d4c89({'buttonText':'Ocean','isTogglable':false,'toolTip':'ocean','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Ocean');currentNotification='Theme: Ocean';notifactionResetTime=time+3;}
    }),new _0x3d4c89({'buttonText':'Gold','isTogglable':false,'toolTip':'gold','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Gold');currentNotification='Theme: Gold';notifactionResetTime=time+3;}
    }),new _0x3d4c89({'buttonText':'Ice','isTogglable':false,'toolTip':'ice','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Ice');currentNotification='Theme: Ice';notifactionResetTime=time+3;}}
    ),new _0x3d4c89({'buttonText':'Neon','isTogglable':false,'toolTip':'neon','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Neon');currentNotification='Theme: Neon';notifactionResetTime=time+3;}}
    ),new _0x3d4c89({'buttonText':'Sunset','isTogglable':false,'toolTip':'sunset','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Sunset');currentNotification='Theme: Sunset';notifactionResetTime=time+3;}}
    ),new _0x3d4c89({'buttonText':'Matrix','isTogglable':false,'toolTip':'matrix','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Matrix');currentNotification='Theme: Matrix';notifactionResetTime=time+3;}}
    ),new _0x3d4c89({'buttonText':'Midnight','isTogglable':false,'toolTip':'midnight','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Midnight');currentNotification='Theme: Midnight';notifactionResetTime=time+3;}}
    ),new _0x3d4c89({'buttonText':'Toxic','isTogglable':false,'toolTip':'toxic','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Toxic');currentNotification='Theme: Toxic';notifactionResetTime=time+3;}}
    ),new _0x3d4c89({'buttonText':'Fire','isTogglable':false,'toolTip':'fire','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Fire');currentNotification='Theme: Fire';notifactionResetTime=time+3;}}
    ),new _0x3d4c89({'buttonText':'Void','isTogglable':false,'toolTip':'void','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Void');currentNotification='Theme: Void';notifactionResetTime=time+3;}}
    ),new _0x3d4c89({'buttonText':'Snow','isTogglable':false,'toolTip':'snow','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Snow');currentNotification='Theme: Snow';notifactionResetTime=time+3;}}
    ),new _0x3d4c89({'buttonText':'Cyber','isTogglable':false,'toolTip':'cyber','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Cyber');currentNotification='Theme: Cyber';notifactionResetTime=time+3;}}
    ),new _0x3d4c89({'buttonText':'Jade','isTogglable':false,'toolTip':'jade','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Jade');currentNotification='Theme: Jade';notifactionResetTime=time+3;}}
    ),new _0x3d4c89({'buttonText':'Sakura','isTogglable':false,'toolTip':'sakura','method':()=>{n5ThemeIndex=n5ThemeKeys.indexOf('Sakura');currentNotification='Theme: Sakura';notifactionResetTime=time+3;}}
    ),new _0x3d4c89({'buttonText':'Default Theme','isTogglable':false,'toolTip':'default','method':()=>{n5ThemeIndex=N5_DEFAULT_THEME_INDEX;currentNotification='Theme: Void';notifactionResetTime=time+3;}
    }),new _0x3d4c89({'buttonText':'Scale +','isTogglable':false,'toolTip':'scale up','method':()=>{n5MenuScale=Math.min(1.5,n5MenuScale+0.1);currentNotification='Scale: '+n5MenuScale.toFixed(1);notifactionResetTime=time+2;}
    }),new _0x3d4c89({'buttonText':'Scale -','isTogglable':false,'toolTip':'scale down','method':()=>{n5MenuScale=Math.max(0.5,n5MenuScale-0.1);currentNotification='Scale: '+n5MenuScale.toFixed(1);notifactionResetTime=time+2;}}
    ),new _0x3d4c89({'buttonText':'Orbit Speed +','isTogglable':false,'toolTip':'faster orbit','method':()=>{orbitSpeed=Math.min(5.0,+(orbitSpeed+0.25).toFixed(2));currentNotification='Orbit speed: '+orbitSpeed.toFixed(2);notifactionResetTime=time+1.5;}}
    ),new _0x3d4c89({'buttonText':'Orbit Speed -','isTogglable':false,'toolTip':'slower orbit','method':()=>{orbitSpeed=Math.max(0.05,+(orbitSpeed-0.25).toFixed(2));currentNotification='Orbit speed: '+orbitSpeed.toFixed(2);notifactionResetTime=time+1.5;}}
    ),new _0x3d4c89({
        'buttonText':'Item Rain','isTogglable':true,
        'toolTip':'rains selected items above your live position',
        'method':()=>{
            if(time<n5ItemRainDelay)return;
            n5ItemRainDelay=time+0.12;
            try{
                const _p=n5LocalPlayerPos();
                for(let _i=0;_i<2;_i++){
                    const _sp=[
                        (_p[0]||0)+(Math.random()-0.5)*7,
                        (_p[1]||0)+6+Math.random()*3,
                        (_p[2]||0)+(Math.random()-0.5)*7
                    ];
                    if(!n5SpawnConfiguredItemAt(itemIDs[itemIndex],_sp,_0x554b79)){
                        n5SpawnItemAt(itemIDs[itemIndex],_sp,_0x554b79);
                    }
                }
            }catch(_e){console.error('[ItemRain]',_e);}
        },
        'enableMethod':()=>{n5ItemRainEnabled=true;currentNotification='Item Rain ON  '+itemIDs[itemIndex];notifactionResetTime=time+2;},
        'disableMethod':()=>{n5ItemRainEnabled=false;currentNotification='Item Rain OFF';notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Spawn Circle (x8)','isTogglable':false,
        'toolTip':'spawn 8 of selected item in a circle around you',
        'method':()=>{
            try{
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                const _p=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
                let _c=0;
                for(let _i=0;_i<8;_i++){
                    try{
                        const _ang=(_i/8)*Math.PI*2;
                        const _sp=[(_p[0]||0)+Math.cos(_ang)*2,(_p[1]||0)+0.5,(_p[2]||0)+Math.sin(_ang)*2];
                        if(n5SpawnConfiguredItemAt(itemIDs[itemIndex],_sp,_0x554b79))_c++;
                    }catch(_){}
                }
                currentNotification='Circle: '+_c+'/8 spawned';notifactionResetTime=time+2;
            }catch(_e){console.error('[SpawnCircle]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn Wall (x5 vertical)','isTogglable':false,
        'toolTip':'spawn 5 of selected item stacked vertically',
        'method':()=>{
            try{
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                const _p=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
                let _c=0;
                for(let _i=0;_i<5;_i++){
                    try{
                        const _sp=[(_p[0]||0)+1,(_p[1]||0)+_i*1.2,(_p[2]||0)+1];
                        if(n5SpawnConfiguredItemAt(itemIDs[itemIndex],_sp,_0x554b79))_c++;
                    }catch(_){}
                }
                currentNotification='Wall: '+_c+'/5 stacked';notifactionResetTime=time+2;
            }catch(_e){console.error('[SpawnWall]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Full NetPlayer Mirror Clone','isTogglable':true,
        'toolTip':'clones your live NetPlayer object locally and mirrors head, hands, body, fingers, and voice state',
        'enableMethod':()=>{
            n5NetMirrorCloneEnabled=true;
            n5CloneSelfDelay=0;
            currentNotification=n5CreateNetMirrorClone()?'Full mirror clone ON':'Mirror clone failed';
            notifactionResetTime=time+2;
        },
        'disableMethod':()=>{
            n5NetMirrorCloneEnabled=false;
            n5DestroyNetMirrorClone();
            currentNotification='Full mirror clone OFF';notifactionResetTime=time+2;
        },
        'method':()=>n5UpdateNetMirrorClone()
    }),new _0x3d4c89({
        'buttonText':'Server NetPlayer Follow Clone','isTogglable':true,
        'toolTip':'server-spawns a NetPlayer beside you and keeps it following your position',
        'enableMethod':()=>{
            n5ServerNetCloneEnabled=true;
            n5StopServerNetPlayerClone();
            n5ServerNetCloneEnabled=true;
            n5SpawnServerNetPlayerClone();
        },
        'disableMethod':()=>{
            n5StopServerNetPlayerClone();
            currentNotification='Server NetPlayer clone OFF';notifactionResetTime=time+2;
        },
        'method':()=>n5UpdateServerNetPlayerClone()
    }),new _0x3d4c89({
        'buttonText':'Rebuild NetPlayer Mirror','isTogglable':false,
        'toolTip':'destroys and recreates the live NetPlayer mirror clone',
        'method':()=>{
            try{
                n5NetMirrorCloneEnabled=true;
                currentNotification=n5CreateNetMirrorClone()?'Mirror rebuilt':'Mirror rebuild failed';
                notifactionResetTime=time+2;
            }catch(_e){console.error('[RebuildMirrorClone]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Mirror Offset +','isTogglable':false,
        'toolTip':'moves the clone farther to your right',
        'method':()=>{n5NetMirrorCloneOffset=Math.min(4.0,n5NetMirrorCloneOffset+0.25);currentNotification='Mirror offset '+n5NetMirrorCloneOffset.toFixed(2);notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Mirror Offset -','isTogglable':false,
        'toolTip':'moves the clone closer / to your left',
        'method':()=>{n5NetMirrorCloneOffset=Math.max(-4.0,n5NetMirrorCloneOffset-0.25);currentNotification='Mirror offset '+n5NetMirrorCloneOffset.toFixed(2);notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Spawn Mob Wave (5x)','isTogglable':false,
        'toolTip':'spawn 5 of selected mob spread around you',
        'method':()=>{
            try{
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                const _p=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
                let _c=0;
                for(let _i=0;_i<5;_i++){
                    try{
                        const _ang=(_i/5)*Math.PI*2;
                        const _sp=[(_p[0]||0)+Math.cos(_ang)*3,(_p[1]||0),(_p[2]||0)+Math.sin(_ang)*3];
                        if(n5SpawnMobAt(mobIDs[mobIndex],_sp,_0x554b79))_c++;
                    }catch(_){}
                }
                currentNotification='Mob Wave: '+_c+'/5 spawned';notifactionResetTime=time+2;
            }catch(_e){console.error('[MobWave]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Big Hands','isTogglable':true,
        'toolTip':'makes your hands massive',
        'enableMethod':()=>{
            try{
                _0x35ade8['method'](_0x476e10['AnNTs'])['invoke'](_0xe4d316['method'](_0x476e10['BGmZg'])['invoke']([1,1,1],3.0));
                _0x28a850['method'](_0x476e10['AnNTs'])['invoke'](_0xe4d316['method'](_0x476e10['BGmZg'])['invoke']([1,1,1],3.0));
                n5BigHandsEnabled=true; currentNotification='Big Hands ON';notifactionResetTime=time+2;
            }catch(_e){console.error('[BigHands]',_e);}
        },
        'disableMethod':()=>{
            try{
                _0x35ade8['method'](_0x476e10['AnNTs'])['invoke']([1,1,1]);
                _0x28a850['method'](_0x476e10['AnNTs'])['invoke']([1,1,1]);
                n5BigHandsEnabled=false; currentNotification='Big Hands OFF';notifactionResetTime=time+2;
            }catch(_e){}
        }
    }),new _0x3d4c89({
        'buttonText':'Tiny Hands','isTogglable':false,
        'toolTip':'makes hands tiny (0.1x)',
        'method':()=>{
            try{
                _0x35ade8['method'](_0x476e10['AnNTs'])['invoke']([0.1,0.1,0.1]);
                _0x28a850['method'](_0x476e10['AnNTs'])['invoke']([0.1,0.1,0.1]);
                currentNotification='Tiny Hands!';notifactionResetTime=time+2;
            }catch(_e){}
        }
    }),new _0x3d4c89({
        'buttonText':'Reset Hand Size','isTogglable':false,
        'toolTip':'reset hands to normal',
        'method':()=>{
            try{
                _0x35ade8['method'](_0x476e10['AnNTs'])['invoke']([1,1,1]);
                _0x28a850['method'](_0x476e10['AnNTs'])['invoke']([1,1,1]);
                currentNotification='Hands reset';notifactionResetTime=time+2;
            }catch(_e){}
        }
    }),new _0x3d4c89({
        'buttonText':'Random VFX Spam','isTogglable':false,
        'toolTip':'spam random VFX at your position',
        'method':()=>{
            try{
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                const _p=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
                const _vkeys=Object.keys(VFXTypes).filter(k=>k!=='None');
                let _c=0;
                for(let _i=0;_i<5&&_i<_vkeys.length;_i++){
                    try{
                        const _vk=_vkeys[Math.floor(Math.random()*_vkeys.length)];
                        if(n5PlayVFXAt(VFXTypes[_vk],_p,_0x554b79))_c++;
                    }catch(_){}
                }
                currentNotification='VFX Spam: '+_c+' effects';notifactionResetTime=time+2;
            }catch(_e){console.error('[VFXSpam]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Freeze Self (kinematic)','isTogglable':true,
        'toolTip':'makes your rigidbody kinematic so you dont move',
        'method':()=>{
            try{
                const _rb=_0x199f18['method'](_0x476e10['BGTMU'],1)['inflate'](_0x1d3a80)['invoke']();
                if(!_rb)return;
                const _cur=_rb['method'](_0x476e10['cLyfd'])['invoke']();
                _rb['method'](_0x476e10['cLyfd'])['invoke'](!_cur);
                currentNotification='Kinematic: '+(!_cur);notifactionResetTime=time+2;
            }catch(_e){console.error('[FreezeSelf]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Warp to Origin (0,0,0)','isTogglable':false,
        'toolTip':'teleport yourself to world origin',
        'method':()=>{
            try{
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp)return;
                _lp['method'](_0x476e10['uXViU'])['invoke']([0,2,0]);
                currentNotification='Warped to origin';notifactionResetTime=time+2;
            }catch(_e){console.error('[WarpOrigin]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Item Magnet','isTogglable':true,
        'toolTip':'pull all nearby items toward you each frame',
        'method':()=>{
            try{
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp)return;
                const _mp=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
                const _all=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_0xaf18fa)['invoke'](0);
                if(!_all||_all['length']===0)return;
                for(let _i=0;_i<Math.min(_all['length'],30);_i++){
                    try{
                        const _it=_all['get'](_i);
                        if(!_it||_it['handle']['isNull']())continue;
                        const _cp=_it['method'](_0x476e10['JvTJW'])['invoke']()['method'](_0x476e10['YApVv'])['invoke']();
                        const _dx=(_mp[0]||0)-(_cp[0]||0), _dy=(_mp[1]||0)-(_cp[1]||0), _dz=(_mp[2]||0)-(_cp[2]||0);
                        const _dist=Math.sqrt(_dx*_dx+_dy*_dy+_dz*_dz);
                        if(_dist>15||_dist<0.5)continue;
                        const _spd=5*deltaTime/_dist;
                        _it['method'](_0x476e10['uXViU'])['invoke']([(_cp[0]||0)+_dx*_spd,(_cp[1]||0)+_dy*_spd,(_cp[2]||0)+_dz*_spd]);
                    }catch(_){}
                }
            }catch(_e){}
        }
    }),new _0x3d4c89({
        'buttonText':'Infinite Jetpack','isTogglable':true,
        'toolTip':'keeps JetpackHandy usable and spams RPC_UseJetpack',
        'enableMethod':()=>{n5InfiniteJetpackEnabled=true;n5RunInfiniteJetpack();currentNotification='Infinite Jetpack ON';notifactionResetTime=time+2;},
        'disableMethod':()=>{n5InfiniteJetpackEnabled=false;currentNotification='Infinite Jetpack OFF';notifactionResetTime=time+2;},
        'method':()=>n5RunInfiniteJetpack()
    }),new _0x3d4c89({
        'buttonText':'Bag Drop Dupe','isTogglable':true,
        'toolTip':'dupes items as they are dropped out of bags or quivers',
        'enableMethod':()=>{n5BagDropDupeEnabled=true;currentNotification='Bag Drop Dupe ON x'+n5BagDropDupeAmount;notifactionResetTime=time+2;},
        'disableMethod':()=>{n5BagDropDupeEnabled=false;currentNotification='Bag Drop Dupe OFF';notifactionResetTime=time+2;},
        'method':()=>{}
    }),new _0x3d4c89({
        'buttonText':'No Backpack Remove','isTogglable':true,
        'toolTip':'keeps backpack RemoveItem from deleting contained items',
        'enableMethod':()=>{n5InstallBagDropDupeHooks();n5NoBackpackRemoveEnabled=true;currentNotification='No Backpack Remove ON';notifactionResetTime=time+2;},
        'disableMethod':()=>{n5NoBackpackRemoveEnabled=false;currentNotification='No Backpack Remove OFF';notifactionResetTime=time+2;},
        'method':()=>{}
    }),new _0x3d4c89({
        'buttonText':'Bag Dupe Amount +','isTogglable':false,
        'toolTip':'increase bag drop dupe amount',
        'method':()=>{n5BagDropDupeIndex=(n5BagDropDupeIndex+1)%n5BagDropDupeValues.length;n5BagDropDupeAmount=n5BagDropDupeValues[n5BagDropDupeIndex];currentNotification='Bag dupe amount: '+n5BagDropDupeAmount;notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Bag Dupe Amount -','isTogglable':false,
        'toolTip':'decrease bag drop dupe amount',
        'method':()=>{n5BagDropDupeIndex=((n5BagDropDupeIndex-1)+n5BagDropDupeValues.length)%n5BagDropDupeValues.length;n5BagDropDupeAmount=n5BagDropDupeValues[n5BagDropDupeIndex];currentNotification='Bag dupe amount: '+n5BagDropDupeAmount;notifactionResetTime=time+2;}
    })],[new _0x3d4c89({
        'buttonText':_0x476e10['acYFS'],'method':()=> {
            currentCategory=0x221c*0x1+0x17*0x1+0x203*-0x11,currentPage=0x1d20+0xcc*-0x2b+-0xbc*-0x7;
        },
        'isTogglable':![],'toolTip':_0x476e10['CvvKF']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['qltPS'],'method':()=> {
            const _0xa59724=_0x240047,_0x125d71=_0x199f18['method'](_0x476e10['BGTMU'],-0x115*-0x12+-0x1dc8+0xa4f)['inflate'](_0x1d3a80)['invoke']();
            if(!_0x125d71)return;
            if(rightTrigger) {
                const _0x4bc562=_0x35ade8['method'](_0x476e10['itVwD'])['invoke'](),_0x411a00=_0xe4d316['method'](_0x476e10['BGmZg'],0x1136+0xcfc+-0x70*0x45)['invoke'](_0x4bc562,_0x476e10['SBWkx'](flySpeed,deltaTime));
                _0x125d71['method'](_0x476e10['YeICc'],-0x1d83+0x18ec+0x499)['invoke'](_0x411a00,-0x23bc+-0x19d1+-0x33*-0x135);
            }
            if(leftTrigger) {
                const _0x1ebcec=_0x28a850['method'](_0x476e10['itVwD'])['invoke'](),_0x1d3a25=_0xe4d316['method'](_0x476e10['BGmZg'],0x3b*0x86+-0x535*0x2+-0x1476)['invoke'](_0x1ebcec,_0x476e10['SBWkx'](flySpeed,deltaTime));
                _0x125d71['method'](_0x476e10['YeICc'],0xf6*-0x1b+0x1022+0x9d2)['invoke'](_0x1d3a25,-0x1*-0x156b+0x131*0x1c+0x36c5*-0x1);
            }
        },
        'isTogglable':!![],'toolTip':'hold triggers to fly bro'
    }
    ),new _0x3d4c89({
        'buttonText':'Joystick Fly',
        'enableMethod':()=>{joystickFlyEnabled=true;currentNotification='Joystick Fly ON - L-stick up/down, R-stick fwd/back';notifactionResetTime=time+3;},
        'disableMethod':()=>{joystickFlyEnabled=false;currentNotification='Joystick Fly OFF';notifactionResetTime=time+2;},
        'isTogglable':true,'toolTip':'joystick fly ts pmo'
    }),new _0x3d4c89({
        'buttonText':'Hold-Grip Platforms',
        'enableMethod':()=>{currentNotification='Hold-Grip Platforms ON  hold grip to place';notifactionResetTime=time+2;},
        'disableMethod':()=>{n5DestroyGripPlatforms();currentNotification='Hold-Grip Platforms OFF';notifactionResetTime=time+2;},
        'isTogglable':true,
        'toolTip':'hold either grip to hold a platform under that hand',
        'method':()=>{n5UpdateGripPlatforms();}
    })],[new _0x3d4c89( {
        'buttonText':_0x476e10['XOVnG'],'method':()=> {
            currentCategory=0x2*-0x1d2+0x1cc+-0x3b*-0x8,currentPage=0x1*0x2697+0x19cc+0x137*-0x35;
        },
        'isTogglable':![],'toolTip':_0x476e10['CvvKF']
    }
    ),new _0x3d4c89({
        'buttonText':'Play Night Alarm','isTogglable':false,
        'toolTip':'calls NetPlayer/Watch/GameTimeManager PlayNightAlarm',
        'method':()=>{n5PlayNightAlarmSound();}
    }),new _0x3d4c89({
        'buttonText':'Allow All Move','isTogglable':true,
        'toolTip':'removes all restrictions from quivers and backpacks  put anything in them',
        'enableMethod':()=>{ allowAllContainers=true; currentNotification='Allow All Move: TRUE'; notifactionResetTime=time+2; },
        'disableMethod':()=>{ allowAllContainers=false; currentNotification='Allow All Move: FALSE'; notifactionResetTime=time+2; },
        'method':()=>{}
    }),new _0x3d4c89( {
        'buttonText':_0x476e10['nlhSi'],'enableMethod':()=> {
            const _0x54065d=_0x240047,_0x433351=_0xd2baad['method'](_0x476e10['VXfzs'])['invoke'](),_0x2795f6=_0x433351['method'](_0x476e10['gOGux'])['invoke']();
            if(!_0x2795f6)return null;
            const _0x3d562b=_0x2795f6['field'](_0x476e10['oNfLg'])['value'];
            if(!_0x3d562b)return null;
            _0x3d562b['method'](_0x476e10['ZKeBc'])['invoke']([-0xc9e+0x4a7+0x7f7,-99999,0x44f*-0x1+0x12a*0x8+0x3d*-0x15]);
        },
        'disableMethod':()=> {
            const _0x369bcf=_0x240047,_0xb2b0ef=_0xd2baad['method'](_0x476e10['VXfzs'])['invoke'](),_0x5c2416=_0xb2b0ef['method'](_0x476e10['gOGux'])['invoke']();
            if(!_0x5c2416)return null;
            const _0x38b3e2=_0x5c2416['field'](_0x476e10['oNfLg'])['value'];
            if(!_0x38b3e2)return null;
            _0x38b3e2['method'](_0x476e10['ZKeBc'])['invoke'](_0x476e10['wGoFA'](_0xc4cf2f,_0x33fb14)['method'](_0x476e10['YApVv'])['invoke']());
        },
        'isTogglable':!![],'toolTip':_0x476e10['GPtnG']
    }
    ),new _0x3d4c89({
        'buttonText':'No Red Watch',
        'method':()=>{
            try {
                const _lp = _0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp) return;
                _lp['method']('set_isWanted')['invoke'](false);
            } catch(_e){ console.error('[NoRedWatch]', _e); }
        },
        'disableMethod':()=>{
            try {
                const _lp = _0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp) return;
                _lp['method']('set_isWanted')['invoke'](false);
            } catch(_e){}
        },
        'isTogglable':!![],'toolTip':'removes red watch'
    }),new _0x3d4c89({
        'buttonText':'Godmode',
        'isTogglable':true,
        'toolTip':'blocks local maxHealth setter',
        'enableMethod':()=>{
            n5GodModeEnabled=n5InstallGodModeHook();
            currentNotification=n5GodModeEnabled?'Godmode ON':'Godmode hook failed';notifactionResetTime=time+2;
        },
        'disableMethod':()=>{
            n5GodModeEnabled=false;
            currentNotification='Godmode OFF';notifactionResetTime=time+2;
        },
        'method':()=>{}
    }),new _0x3d4c89({
        'buttonText':'No Death v2',
        'isTogglable':true,
        'toolTip':'blocks damage, death, stun, and keeps health topped',
        'enableMethod':()=>{
            n5BetterGodModeEnabled=n5InstallBetterGodModeHook();
            if(n5BetterGodModeEnabled)n5KeepAliveSelf();
            currentNotification=n5BetterGodModeEnabled?'No Death v2 ON':'No Death hook failed';notifactionResetTime=time+2;
        },
        'disableMethod':()=>{
            n5BetterGodModeEnabled=false;
            currentNotification='No Death v2 OFF';notifactionResetTime=time+2;
        },
        'method':()=>{if(n5BetterGodModeEnabled)n5KeepAliveSelf();}
    }),new _0x3d4c89({
        'buttonText':'Fullbright',
        'isTogglable':true,
        'toolTip':'makes the game full bright',
        'enableMethod':()=>{
            n5FullbrightEnabled=n5InstallFullbrightHook();
            if(n5FullbrightEnabled)n5SetFullbrightAmbient(1.0);
            currentNotification=n5FullbrightEnabled?'Fullbright ON':'Fullbright hook failed';notifactionResetTime=time+2;
        },
        'disableMethod':()=>{
            n5FullbrightEnabled=false;
            n5SetFullbrightAmbient(1.0);
            currentNotification='Fullbright OFF';notifactionResetTime=time+2;
        },
        'method':()=>{if(n5FullbrightEnabled&&frameCount%60===0)n5SetFullbrightAmbient(1.0);}
    }),new _0x3d4c89({
        'buttonText':'Revive Self',
        'isTogglable':false,
        'toolTip':'revives yourself if dead',
        'method':()=>{
            const _ok=n5ReviveSelf();
            currentNotification=_ok?'Revive Self sent':'Revive Self failed';notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Revive Full Health',
        'isTogglable':false,
        'toolTip':'revives and forces full health',
        'method':()=>{n5ReviveFullHealth();}
    }),new _0x3d4c89({
        'buttonText':'Auto Revive Self',
        'isTogglable':true,
        'toolTip':'automatically revives you when dead',
        'enableMethod':()=>{n5InstallReviveSelfHook();n5AutoReviveSelfEnabled=true;currentNotification='Auto Revive ON';notifactionResetTime=time+2;},
        'disableMethod':()=>{n5AutoReviveSelfEnabled=false;currentNotification='Auto Revive OFF';notifactionResetTime=time+2;},
        'method':()=>{
            if(!n5AutoReviveSelfEnabled||time<n5AutoReviveSelfDelay)return;
            n5AutoReviveSelfDelay=time+0.2;
            if(n5IsSelfDead())n5ReviveSelf();
        }
    }),new _0x3d4c89({
        'buttonText':'Test RPC Notif',
        'method':()=>{
            rpcAlertMsg=' BLOCKED: TestRPC'; rpcAlertExpiry=time+4;
        },
        'isTogglable':false,'toolTip':'test notif'
    }),new _0x3d4c89({
        'buttonText':'Despawn All Items',
        'method':()=>{
            try {
                const _items = _0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_0xaf18fa)['invoke'](0);
                if(!_items||_items['length']===0){ currentNotification='No items found'; notifactionResetTime=time+2; return; }
                let _count=0;
                const _col=[];
                for(let _i=0;_i<_items['length'];_i++){ try{const _x=_items['get'](_i);if(_x&&!_x['handle']['isNull']())_col.push(_x);}catch(_){} }
                for(const _it of _col){
                    try {

                        _it['method'](_0x476e10['uXViU'])['invoke']([0,-99999,0]);
                        _count++;
                    } catch(_e){

                        try{ _0x1f7740['method'](_0x476e10['iBVau'],1)['invoke'](_it['method'](_0x476e10['ZqQpU'])['invoke']()); _count++; }catch(_){}
                    }
                }
                currentNotification='Removed '+_count+' items'; notifactionResetTime=time+3;
            } catch(_e){ console.error('[DespawnItems]',_e); currentNotification='Items err: '+_e; notifactionResetTime=time+3; }
        },
        'isTogglable':false,'toolTip':'yeet all items'
    }),new _0x3d4c89({
        'buttonText':'Kill All Mobs',
        'method':()=>{
            try {
                const _count=n5KillAllMobsNow();
                currentNotification='Killed '+_count+' mobs'; notifactionResetTime=time+3;
            } catch(_e){ console.error('[KillMobs]',_e); currentNotification='Kill mobs err: '+_e; notifactionResetTime=time+3; }
        },
        'isTogglable':false,'toolTip':'kill all mobs'
    }),new _0x3d4c89({
        'buttonText':'Explode Machine',
        'method':()=>{
            try{
                const _m=_0x3b69e3['field'](_0x476e10['stYEa'])['value'];
                if(!_m||_m['isNull']()) throw new Error('no machine');
                _m['method']('RPC_ExplodeMachine')['invoke']();
                currentNotification=' Machine exploded!';notifactionResetTime=time+2;
            }catch(_e){ currentNotification='Machine not found';notifactionResetTime=time+2; }
        },
        'isTogglable':false,'toolTip':'explode the machine'
    }),new _0x3d4c89({
        'buttonText':'Recover Machine',
        'method':()=>{
            try{
                const _m=_0x3b69e3['field'](_0x476e10['stYEa'])['value'];
                if(!_m||_m['isNull']()) throw new Error('no machine');
                _m['method']('RPC_RecoverExplosion')['invoke']();
                currentNotification=' Machine recovered';notifactionResetTime=time+2;
            }catch(_e){ currentNotification='Machine not found';notifactionResetTime=time+2; }
        },
        'isTogglable':false,'toolTip':'recover the machine'
    }),new _0x3d4c89({
        'buttonText':'Spaz Machine',
        'method':()=>{
            try{
                const _m=_0x3b69e3['field'](_0x476e10['stYEa'])['value'];
                if(!_m||_m['isNull']()) throw new Error('no machine');
                _m['method']('RPC_ExplodeMachine')['invoke']();
                _m['method']('RPC_RecoverExplosion')['invoke']();
                currentNotification=' Machine spazzed';notifactionResetTime=time+2;
            }catch(_e){ currentNotification='Machine not found';notifactionResetTime=time+2; }
        },
        'isTogglable':false,'toolTip':'spaz the machine'
    }),new _0x3d4c89({
        'buttonText':'Spaz Item Buttons',
        'method':()=>{
            try{
                const _m=_0x3b69e3['field'](_0x476e10['stYEa'])['value'];
                if(!_m||_m['isNull']()) throw new Error('no machine');
                for(let _bi=0;_bi<10;_bi++) try{ _m['method']('RPC_ButtonPressed')['invoke'](_bi); }catch(_){}
                currentNotification='Spammed 10 machine buttons';notifactionResetTime=time+2;
            }catch(_e){ currentNotification='Machine not found';notifactionResetTime=time+2; }
        },
        'isTogglable':false,'toolTip':'spam machine buttons'
    }),new _0x3d4c89({
        'buttonText':'Item Orbit','isTogglable':true,
        'toolTip':'orbit selected item around u',
        'method':()=>{
            try{
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp||_lp['handle']['isNull']())return;
                const _myPos=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
                const _all=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_0xaf18fa)['invoke'](0);
                if(!_all||_all['length']===0)return;
                const _targetId='item_prefab/'+itemIDs[itemIndex];
                let _idx=0;
                for(let _i=0;_i<_all['length'];_i++){
                    try{
                        const _it=_all['get'](_i);
                        if(!_it||_it['handle']['isNull']())continue;
                        const _idObj=_it['method'](_0x476e10['egUoS'])['invoke']();
                        if(!_idObj||_idObj['isNull']())continue;
                        if(_idObj['content']!==itemIDs[itemIndex])continue;
                        const _ang=(_idx*(Math.PI*2/5))+(time*1.8);
                        const _tp=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_myPos,[Math.cos(_ang)*3.5,1.2,Math.sin(_ang)*3.5]);
                        _it['method'](_0x476e10['uXViU'])['invoke'](_tp);
                        _idx++;
                    }catch(_){}
                }
            }catch(_e){console.error('ItemOrbit:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Prefab Orbit','isTogglable':true,
        'toolTip':'orbit selected prefab around u',
        'method':()=>{
            try{
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp||_lp['handle']['isNull']())return;
                const _myPos=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
                let _netObjCls=null;
                try{_netObjCls=Il2Cpp.domain.assembly('Fusion.Runtime').image.class('Fusion.NetworkObject');}catch(_){}
                if(!_netObjCls)return;
                const _all=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_netObjCls)['invoke'](0);
                if(!_all||_all['length']===0)return;
                const _target=prefabList[prefabIndex];
                let _idx=0;
                for(let _i=0;_i<_all['length'];_i++){
                    try{
                        const _obj=_all['get'](_i);
                        if(!_obj||_obj['handle']['isNull']())continue;
                        try{if(_obj['method'](_0x476e10['qTups'])['invoke']())continue;}catch(_){}
                        const _nm=_obj['method'](_0x476e10['ZqQpU'])['invoke']()['method'](_0x476e10['DmuFQ'])['invoke']()['toString']();
                        if(!_nm.includes(_target))continue;
                        const _ang=(_idx*(Math.PI*2/5))+(time*1.8);
                        const _tp=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_myPos,[Math.cos(_ang)*3.5,1.2,Math.sin(_ang)*3.5]);
                        _0xc4cf2f(_obj)['method'](_0x476e10['ZKeBc'])['invoke'](_tp);
                        _idx++;
                    }catch(_){}
                }
            }catch(_e){console.error('PrefabOrbit:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Orbit All Items','isTogglable':true,
        'toolTip':'orbit every item around u',
        'method':()=>{
            try{
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp||_lp['handle']['isNull']())return;
                const _myPos=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
                const _all=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_0xaf18fa)['invoke'](0);
                if(!_all||_all['length']===0)return;
                for(let _i=0;_i<_all['length'];_i++){
                    try{
                        const _it=_all['get'](_i);
                        if(!_it||_it['handle']['isNull']())continue;
                        const _ang=(_i*(Math.PI*2/_all['length']))+(time*1.5);
                        const _r=3.2+(_i%3)*0.6;
                        const _tp=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_myPos,[Math.cos(_ang)*_r,1.0+(_i%4)*0.5,Math.sin(_ang)*_r]);
                        _it['method'](_0x476e10['uXViU'])['invoke'](_tp);
                    }catch(_){}
                }
            }catch(_e){console.error('OrbitAllItems:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Orbit All Prefabs','isTogglable':true,
        'toolTip':'orbit all prefabs around u',
        'method':()=>{
            try{
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp||_lp['handle']['isNull']())return;
                const _myPos=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
                let _netObjCls=null;
                try{_netObjCls=Il2Cpp.domain.assembly('Fusion.Runtime').image.class('Fusion.NetworkObject');}catch(_){}
                if(!_netObjCls)return;
                const _all=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_netObjCls)['invoke'](0);
                if(!_all||_all['length']===0)return;
                let _idx=0;
                for(let _i=0;_i<_all['length'];_i++){
                    try{
                        const _obj=_all['get'](_i);
                        if(!_obj||_obj['handle']['isNull']())continue;
                        try{if(_obj['method'](_0x476e10['qTups'])['invoke']())continue;}catch(_){}
                        const _ang=(_idx*(Math.PI*2/Math.max(1,_all['length'])))+(time*1.5);
                        const _r=3.2+(_idx%3)*0.6;
                        const _tp=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_myPos,[Math.cos(_ang)*_r,1.0+(_idx%4)*0.5,Math.sin(_ang)*_r]);
                        _0xc4cf2f(_obj)['method'](_0x476e10['ZKeBc'])['invoke'](_tp);
                        _idx++;
                    }catch(_){}
                }
            }catch(_e){console.error('OrbitAllPrefabs:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Bring All Items Gun','isTogglable':true,
        'toolTip':'pull all items to ur aim',
        'method':()=>{
            try{
                if(!rightGrab)return;
                const _g=_0x22649c(),_r=_g['ray'];
                if(!_r||_r['isNull']())return;
                if(frameCount%10!==0)return;
                const _pos=_r['method'](_0x476e10['avlli'])['invoke']();
                const _all=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_0xaf18fa)['invoke'](0);
                if(!_all||_all['length']===0)return;
                for(let _i=0;_i<_all['length'];_i++){
                    try{
                        const _it=_all['get'](_i);
                        if(!_it||_it['handle']['isNull']())continue;
                        _it['method'](_0x476e10['uXViU'])['invoke'](_pos);
                    }catch(_){}
                }
            }catch(_e){console.error('BringAllItemsGun:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn All In Bag','isTogglable':false,
        'toolTip':'spawn all items in a bag',
        'method':()=>{
            try{
                const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
                const _bag=_0x1e0b92['method'](_0x476e10['uZRqq'],4)['invoke'](Il2Cpp['string']('item_prefab/item_backpack_large_base'),_pos,_0x554b79,_0x2f880d);
                if(!_bag||_bag['handle']['isNull']()){ currentNotification='Bag spawn failed';notifactionResetTime=time+2;return; }
                const _bagPos=_0xc4cf2f(_bag)['method'](_0x476e10['YApVv'])['invoke']();
                for(let _i=0;_i<itemIDs.length;_i++){
                    try{
                        const _off=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_bagPos,[0,0.05*_i,0]);
                        _0x1e0b92['method'](_0x476e10['uZRqq'],4)['invoke'](Il2Cpp['string']('item_prefab/'+itemIDs[_i]),_off,_0x554b79,_0x2f880d);
                    }catch(_){}
                }
                currentNotification=' Spawned all '+itemIDs.length+' items in bag';notifactionResetTime=time+3;
            }catch(_e){console.error('SpawnAllInBag:',_e);currentNotification='Bag error';notifactionResetTime=time+2;}
        }
    }),new _0x3d4c89({
        'buttonText':'Rainbow Snowball Fist','isTogglable':true,
        'toolTip':'shoot rainbow snowballs from ur hand',
        'method':()=>{
            try{
                if(!rightTrigger)return;
                if(frameCount%3!==0)return;
                const _rh=_0x199f18['field'](_0x476e10['gOCqt'])['value'];
                const _handPos=_rh['method'](_0x476e10['YApVv'])['invoke']();
                const _handFwd=_rh['method'](_0x476e10['itVwD'])['invoke']();
                const _sb=_0x1e0b92['method'](_0x476e10['uZRqq'],4)['invoke'](Il2Cpp['string']('item_prefab/item_snowball'),_handPos,_0x554b79,_0x2f880d);
                if(!_sb||_sb['handle']['isNull']())return;
                const _gbi=_sb['method'](_0x476e10['ZqQpU'])['invoke']()['method'](_0x476e10['BGTMU'],1)['inflate'](_0xaf18fa)['invoke']();
                if(_gbi&&!_gbi['isNull']()){
                    const _h=Math.round(((time*0.7)%1.0)*254)-127;
                    try{_gbi['method'](_0x476e10['GBtXF'])['invoke'](_h);}catch(_){}
                    try{_gbi['method'](_0x476e10['ueDiE'])['invoke'](100);}catch(_){}
                    const _sc=Math.round((0.5+Math.random()*1.5)*50);
                    try{_gbi['method'](_0x476e10['LoUSE'])['invoke'](_sc);}catch(_){}
                }
                const _fwd=_0xe4d316['method'](_0x476e10['BGmZg'],2)['invoke'](_handFwd,18+Math.random()*10);
                try{_sb['method'](_0x476e10['GvlcC'],3)['invoke'](_fwd);}catch(_){}
            }catch(_e){console.error('RainbowSnowballFist:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Piss Fist','isTogglable':true,
        'toolTip':'piss from ur hand',
        'method':()=>{
            try{
                if(!rightTrigger)return;
                if(frameCount%3!==0)return;
                const _rh=_0x199f18['field'](_0x476e10['gOCqt'])['value'];
                const _handPos=_rh['method'](_0x476e10['YApVv'])['invoke']();
                const _handFwd=_rh['method'](_0x476e10['itVwD'])['invoke']();
                const _sb=_0x1e0b92['method'](_0x476e10['uZRqq'],4)['invoke'](Il2Cpp['string']('item_prefab/item_snowball'),_handPos,_0x554b79,_0x2f880d);
                if(!_sb||_sb['handle']['isNull']())return;
                const _gbi=_sb['method'](_0x476e10['ZqQpU'])['invoke']()['method'](_0x476e10['BGTMU'],1)['inflate'](_0xaf18fa)['invoke']();
                if(_gbi&&!_gbi['isNull']()){
                    try{_gbi['method'](_0x476e10['GBtXF'])['invoke'](-87);}catch(_){}
                    try{_gbi['method'](_0x476e10['ueDiE'])['invoke'](100);}catch(_){}
                }
                const _fwd=_0xe4d316['method'](_0x476e10['BGmZg'],2)['invoke'](_handFwd,20+Math.random()*8);
                try{_sb['method'](_0x476e10['GvlcC'],3)['invoke'](_fwd);}catch(_){}
            }catch(_e){console.error('PissFist:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Orbit Rainbow Snowballs','isTogglable':true,
        'toolTip':'7 colored snowballs orbit u',
        'enableMethod':()=>{
            _n5OrbitSnowBalls=new Array(7).fill(null);
            _n5OrbitSnowHues=[-127,-90,-54,-18,18,54,90];
            _n5OrbitSnowScales=[20,35,15,40,25,30,18];
        },
        'disableMethod':()=>{ _n5OrbitSnowBalls=null; },
        'method':()=>{
            try{
                if(!_n5OrbitSnowBalls)return;
                if(frameCount%2!==0)return;
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp||_lp['handle']['isNull']())return;
                const _myPos=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
                for(let _i=0;_i<7;_i++){
                    try{
                        let _sb=_n5OrbitSnowBalls[_i];
                        let _valid=false;
                        if(_sb){
                            try{_valid=!_sb['handle']['isNull']()&&_sb['method'](_0x476e10['zFjJA'])['invoke']();}catch(_){_valid=false;}
                        }
                        if(!_valid){
                            try{
                                _sb=_0x1e0b92['method'](_0x476e10['uZRqq'],4)['invoke'](Il2Cpp['string']('item_prefab/item_snowball'),_myPos,_0x554b79,_0x2f880d);
                                if(_sb&&!_sb['handle']['isNull']()){
                                    const _gbi=_sb['method'](_0x476e10['ZqQpU'])['invoke']()['method'](_0x476e10['BGTMU'],1)['inflate'](_0xaf18fa)['invoke']();
                                    if(_gbi&&!_gbi['isNull']()){
                                        try{_gbi['method'](_0x476e10['GBtXF'])['invoke'](_n5OrbitSnowHues[_i]);}catch(_){}
                                        try{_gbi['method'](_0x476e10['ueDiE'])['invoke'](100);}catch(_){}
                                        try{_gbi['method'](_0x476e10['LoUSE'])['invoke'](_n5OrbitSnowScales[_i]);}catch(_){}
                                    }
                                    _n5OrbitSnowBalls[_i]=_sb;
                                }
                            }catch(_){}
                            continue;
                        }
                        const _ang=(_i*(Math.PI*2/7))+(time*2.2);
                        const _r=1.5+(_i%3)*0.25;
                        const _tp=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_myPos,[Math.cos(_ang)*_r,0.9+Math.sin(time*1.5+_i)*0.3,Math.sin(_ang)*_r]);
                        _sb['method'](_0x476e10['uXViU'])['invoke'](_tp);
                    }catch(_){}
                }
            }catch(_e){console.error('OrbitSnow:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Despawn All Prefabs',
        'method':()=>{
            try {
                let _netObjCls=null;
                try{_netObjCls=Il2Cpp.domain.assembly('Fusion.Runtime').image.class('Fusion.NetworkObject');}catch(_){}
                if(!_netObjCls){ currentNotification='NetworkObject not found'; notifactionResetTime=time+2; return; }
                const _objs=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_netObjCls)['invoke'](0);
                if(!_objs||_objs['length']===0){ currentNotification='No networked objects'; notifactionResetTime=time+2; return; }
                let _count=0;
                const _col=[];
                for(let _i=0;_i<_objs['length'];_i++){
                    try{
                        const _x=_objs['get'](_i);
                        if(!_x||_x['handle']['isNull']()) continue;
                        try{if(_x['method'](_0x476e10['qTups'])['invoke']()) continue;}catch(_){}
                        _col.push(_x);
                    }catch(_){}
                }

                const _runner=_0x1e0b92['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['RhZfj'])['invoke']();
                for(const _obj of _col){
                    try{ _runner['method']('Despawn',1)['invoke'](_obj); _count++; }
                    catch(_e2){
                        try{ _obj['method'](_0x476e10['ZKeBc'])['invoke']([0,-99999,0]); _count++; }
                        catch(_e3){ try{_0x1f7740['method'](_0x476e10['iBVau'],1)['invoke'](_obj['method'](_0x476e10['ZqQpU'])['invoke']());_count++;}catch(_){} }
                    }
                }
                currentNotification='Removed '+_count+' prefabs'; notifactionResetTime=time+3;
            } catch(_e){ console.error('[DespawnPrefabs]',_e); currentNotification='Prefabs err: '+_e; notifactionResetTime=time+3; }
        },
        'isTogglable':false,'toolTip':'despawn all prefabs'
    })],[new _0x3d4c89( {
        'buttonText':_0x476e10['CHfNs'],'method':()=> {
            currentCategory=-0x1743+-0x267d+0x3dc0*0x1,currentPage=0x10c2+0x125d+-0x231f;
        },
        'isTogglable':![],'toolTip':_0x476e10['CvvKF']
    }
    ),new _0x3d4c89({
        'buttonText':'TP All To Me',
        'method':()=>{
            try {
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp)return;
                const _myPos=_lp['method'](_0x476e10['JvTJW'])['invoke']()['method'](_0x476e10['YApVv'])['invoke']();
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']())continue;
                    _pl['method'](_0x476e10['uXViU'])['invoke'](_myPos);
                }
                currentNotification='Teleported all to you';notifactionResetTime=time+2;
            } catch(_e){console.error('TPAllToMe:',_e);}
        },
        'isTogglable':false,'toolTip':'pull everyone to u'
    }),new _0x3d4c89({
        'buttonText':'Orbit All',
        'enableMethod':()=>{orbitAllEnabled=true;currentNotification='Orbit All ON';notifactionResetTime=time+2;},
        'disableMethod':()=>{orbitAllEnabled=false;currentNotification='Orbit All OFF';notifactionResetTime=time+2;},
        'isTogglable':true,'toolTip':'everyone orbits u'
    }),new _0x3d4c89({
        'buttonText':'Fling Player Gun','isTogglable':true,
        'toolTip':'fling nearest player up',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_gp=_g['gunPointer'];
            if(!rightTrigger||!_gp||_gp['isNull']())return;
            if(!(time>tagGunDelay))return;
            tagGunDelay=time+0.3;
            try {
                const _gpos=_0xc4cf2f(_gp)['method'](_0x476e10['YApVv'])['invoke']();
                let _minD=Number['MAX_SAFE_INTEGER'],_target=null;
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']())continue;
                    const _d=_0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_gpos,_0xc4cf2f(_pl)['method'](_0x476e10['YApVv'])['invoke']());
                    if(_d<_minD){_minD=_d;_target=_pl;}
                }
                if(_target&&!_target['handle']['isNull']())
                    _target['method'](_0x476e10['GvlcC'])['invoke'](_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke']([0,0,0],[0,80,0]));
            } catch(_e){console.error('Fling Player Gun:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Fling All','isTogglable':false,
        'toolTip':'fling everyone up',
        'method':()=>{
            try {
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                let _cnt=0;
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']())continue;
                    _pl['method'](_0x476e10['GvlcC'])['invoke'](_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke']([0,0,0],[0,80,0]));
                    _cnt++;
                }
                currentNotification='Flung '+_cnt+' players!';notifactionResetTime=time+2;
            } catch(_e){console.error('Fling All:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Tag All Stinky','isTogglable':false,
        'toolTip':'tag everyone stinky',
        'method':()=>{
            try {
                let _cnt=0;
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']())continue;
                    try{_pl['method'](_0x476e10['vatiI'])['invoke']();_cnt++;}catch(_){}
                }
                currentNotification='Stinkied '+_cnt+' players!';notifactionResetTime=time+2;
            } catch(_e){console.error('Tag All Stinky:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Kill All','isTogglable':false,
        'toolTip':'obliterate everyone',
        'method':()=>{
            try {
                const _sfx=_0x40792d['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['WxggD'])['invoke']();
                let _cnt=0;
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']())continue;
                    try {
                        const _pos=_0xc4cf2f(_pl)['method'](_0x476e10['YApVv'])['invoke']();
                        for(const _vk of Object.keys(VFXTypes)){if(_vk==='None')continue;try{n5PlayVFXAt(VFXTypes[_vk],_pos,_0x554b79);}catch(_){}}
                        _pl['method'](_0x476e10['uXViU'])['invoke']([0,-99999,0]);
                        _pl['method'](_0x476e10['GvlcC'])['invoke'](_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke']([0,0,0],[0,500,0]));
                        _pl['method'](_0x476e10['uKaRt'])['invoke'](NaN,NaN,NaN,NaN);
                        _cnt++;
                    } catch(_){}
                }
                currentNotification='Killed '+_cnt+' players!';notifactionResetTime=time+2;
            } catch(_e){console.error('Kill All:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Scale All +','isTogglable':false,
        'toolTip':'make everyone big',
        'method':()=>{
            try {
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']())continue;
                    try{_pl['method'](_0x476e10['UGkgO'])['invoke'](10);}catch(_){}
                }
                currentNotification='Scaled up all players';notifactionResetTime=time+2;
            } catch(_e){console.error('Scale All:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Scale All -','isTogglable':false,
        'toolTip':'make everyone small',
        'method':()=>{
            try {
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']())continue;
                    try{_pl['method'](_0x476e10['UGkgO'])['invoke'](-10);}catch(_){}
                }
                currentNotification='Shrunk all players';notifactionResetTime=time+2;
            } catch(_e){console.error('Scale All:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Drag Player','isTogglable':true,
        'toolTip':'pull player to ur aim',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_gp=_g['gunPointer'];
            if(!_gp||_gp['isNull']())return;
            if(!(time>tagGunDelay))return;
            tagGunDelay=time+0.1;
            try {
                const _gpos=_0xc4cf2f(_gp)['method'](_0x476e10['YApVv'])['invoke']();
                const _myPos=_0xc4cf2f(_0x199f18)['method'](_0x476e10['YApVv'])['invoke']();
                let _minD=Number['MAX_SAFE_INTEGER'],_target=null;
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']())continue;
                    const _d=_0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_gpos,_0xc4cf2f(_pl)['method'](_0x476e10['YApVv'])['invoke']());
                    if(_d<_minD){_minD=_d;_target=_pl;}
                }
                if(_target&&!_target['handle']['isNull']()){
                    const _tpos=_0xc4cf2f(_target)['method'](_0x476e10['YApVv'])['invoke']();
                    const _dir=_0xe4d316['method'](_0x476e10['sELqL'],2)['invoke'](_myPos,_tpos);
                    _target['method'](_0x476e10['GvlcC'])['invoke'](_0xe4d316['method'](_0x476e10['BGmZg'])['invoke'](_dir,25));
                }
            } catch(_e){console.error('Drag Player:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Give Self Money','isTogglable':false,
        'toolTip':'give urself money',
        'method':()=>{
            try{
                _0xa03cc7['class']('AnimalCompany.GameManager')['method']('AddPlayerMoney')['invoke'](999999);
                currentNotification=' Money given!';notifactionResetTime=time+2;
            }catch(_e){currentNotification='Give money failed';notifactionResetTime=time+2;}
        }
    }),new _0x3d4c89({
        'buttonText':'Pay All Money','isTogglable':false,
        'toolTip':'give everyone money',
        'method':()=>{
            try{
                let _cnt=0;
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']()) continue;
                    try{_pl['method']('RPC_AddPlayerMoney')['invoke'](777777);_cnt++;}catch(_){}
                }
                currentNotification=' Paid '+_cnt+' players';notifactionResetTime=time+2;
            }catch(_e){currentNotification='Pay all failed';notifactionResetTime=time+2;}
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn Item (hand)','isTogglable':false,
        'toolTip':'spawn item at hand',
        'method':()=>{
            try{
                const _rh=_0x199f18['field'](_0x476e10['gOCqt'])['value'];
                const _pos=_rh['method'](_0x476e10['YApVv'])['invoke']();
                const _spawned=n5SpawnConfiguredItemAt(itemIDs[itemIndex],_pos,_0x554b79);
                currentNotification=_spawned?' '+itemIDs[itemIndex]:'Spawn failed';notifactionResetTime=time+2;
            }catch(_e){currentNotification='Spawn failed';notifactionResetTime=time+2;}
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn Mob (hand)','isTogglable':false,
        'toolTip':'spawn mob at hand',
        'method':()=>{
            try{
                const _rh=_0x199f18['field'](_0x476e10['gOCqt'])['value'];
                const _pos=_rh['method'](_0x476e10['YApVv'])['invoke']();
                const _spawned=n5SpawnMobAt(mobIDs[mobIndex],_pos,_0x554b79);
                currentNotification=_spawned?' '+mobIDs[mobIndex]:'Mob spawn failed';notifactionResetTime=time+2;
            }catch(_e){currentNotification='Mob spawn failed';notifactionResetTime=time+2;}
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn All Items (hand)','isTogglable':false,
        'toolTip':'spawn all items at hand',
        'method':()=>{
            try{
                const _rh=_0x199f18['field'](_0x476e10['gOCqt'])['value'];
                const _pos=_rh['method'](_0x476e10['YApVv'])['invoke']();
                let _spawned=0;
                for(let _i=0;_i<itemIDs.length;_i++){
                    try{if(n5SpawnItemAt(itemIDs[_i],_pos,_0x554b79))_spawned++;}catch(_){}
                }
                currentNotification=' Spawned '+_spawned+'/'+itemIDs.length+' items';notifactionResetTime=time+3;
            }catch(_e){currentNotification='Spawn all items failed';notifactionResetTime=time+2;}
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn All Mobs (hand)','isTogglable':false,
        'toolTip':'spawn all mobs at hand',
        'method':()=>{
            try{
                const _rh=_0x199f18['field'](_0x476e10['gOCqt'])['value'];
                const _pos=_rh['method'](_0x476e10['YApVv'])['invoke']();
                let _spawned=0;
                for(let _i=0;_i<mobIDs.length;_i++){
                    try{if(n5SpawnMobAt(mobIDs[_i],_pos,_0x554b79))_spawned++;}catch(_){}
                }
                currentNotification=' Spawned '+_spawned+'/'+mobIDs.length+' mobs';notifactionResetTime=time+3;
            }catch(_e){currentNotification='Spawn all mobs failed';notifactionResetTime=time+2;}
        }
    }),new _0x3d4c89({
        'buttonText':'Rainbow Monsters','isTogglable':true,
        'toolTip':'rainbow all mobs',
        'method':()=>{
            try{
                const _mobCls=_0xa03cc7['class']('AnimalCompany.MobController');
                const _all=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_mobCls)['invoke'](0);
                if(!_all||_all['length']===0) return;
                for(let _i=0;_i<_all['length'];_i++){
                    try{
                        const _h=(time*0.3)%1;
                        _all['get'](_i)['method']('RPC_SetColorHSV')['invoke'](0.1,_h,1.0,1.0);
                    }catch(_){}
                }
            }catch(_e){}
        }
    }),new _0x3d4c89({
        'buttonText':'Rainbow Players','isTogglable':true,
        'toolTip':'rainbow all players',
        'method':()=>{
            try{
                const _h=(time*0.3)%1;
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']()) continue;
                    try{_pl['method'](_0x476e10['uKaRt'])['invoke'](_h,0.1,1.0,1.0);}catch(_){}
                }
            }catch(_e){}
        }
    }),new _0x3d4c89({
        'buttonText':'Up All','isTogglable':true,
        'toolTip':'launch everyone up constantly',
        'method':()=>{
            try{
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']()) continue;
                    try{_pl['method'](_0x476e10['GvlcC'])['invoke']([0,100,0]);}catch(_){}
                }
            }catch(_e){}
        }
    }),new _0x3d4c89({
        'buttonText':'Stun All','isTogglable':true,
        'toolTip':'Continuously stuns all players',
        'method':()=>{
            try{
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']()) continue;
                    try{
                        const _pos=_pl['method'](_0x476e10['JvTJW'])['invoke']()['method'](_0x476e10['YApVv'])['invoke']();
                        _pl['method'](_0x476e10['ZpbXB'])['invoke'](_pos,5,1,0);
                    }catch(_){}
                }
            }catch(_e){}
        }
    }),new _0x3d4c89({
        'buttonText':'Kick All','isTogglable':true,
        'toolTip':'kick everyone',
        'method':()=>{
            try{
                const _kickCls=_0xa03cc7['class']('AnimalCompany.NetSessionRPCs');
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']()) continue;
                    try{
                        const _uid=_pl['field']('_userID')['value'];
                        _kickCls['method']('RPC_KickPlayer')['invoke'](_uid);
                    }catch(_){}
                }
            }catch(_e){}
        }
    }),new _0x3d4c89({
        'buttonText':'Kill All Players','isTogglable':false,
        'toolTip':'kill everyone',
        'method':()=>{
            try{
                let _cnt=0;
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']()) continue;
                    try{
                        const _pos=_pl['method'](_0x476e10['JvTJW'])['invoke']()['method'](_0x476e10['YApVv'])['invoke']();
                        _pl['method']('RPC_PlayerHit')['invoke'](2147483647,_pos,_0x2f880d);
                        _cnt++;
                    }catch(_){}
                }
                currentNotification=' Killed '+_cnt+' players';notifactionResetTime=time+2;
            }catch(_e){currentNotification='Kill players failed';notifactionResetTime=time+2;}
        }
    }),new _0x3d4c89({
        'buttonText':'TP Death','isTogglable':false,
        'toolTip':'void all players',
        'method':()=>{
            try{
                let _cnt=0;
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()) continue;
                    try{_pl['method'](_0x476e10['uXViU'])['invoke']([0,-9999999,0]);_cnt++;}catch(_){}
                }
                currentNotification='TP Death: '+_cnt+' players';notifactionResetTime=time+2;
            }catch(_e){currentNotification='TP Death failed';notifactionResetTime=time+2;}
        }
    }),new _0x3d4c89({
        'buttonText':'TP Items Death','isTogglable':false,
        'toolTip':'void all items',
        'method':()=>{
            try{
                const _all=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_0xaf18fa)['invoke'](0);
                if(!_all||_all['length']===0){currentNotification='No items found';notifactionResetTime=time+2;return;}
                let _cnt=0;
                for(let _i=0;_i<_all['length'];_i++){
                    try{_all['get'](_i)['method'](_0x476e10['uXViU'])['invoke']([0,-9999999,0]);_cnt++;}catch(_){}
                }
                currentNotification='Yeeted '+_cnt+' items';notifactionResetTime=time+2;
            }catch(_e){currentNotification='TP items failed';notifactionResetTime=time+2;}
        }
    }),new _0x3d4c89( {
        'buttonText':_0x476e10['JTaDa'],'method':()=> {
            currentCategory=0x8b*0x24+0x208c+-0x340e,currentPage=0xa2f+-0x260e+0x1bdf;
        },
        'isTogglable':![],'toolTip':_0x476e10['CfiJb']
    }
    )],[new _0x3d4c89( {
        'buttonText':_0x476e10['rCgZK'],'method':()=> {
            currentCategory=-0x1424*0x1+-0x21e2+0x2*0x1b03,currentPage=-0x13fe+0xa3*0x26+-0x434;
        },
        'isTogglable':![],'toolTip':_0x476e10['CvvKF']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['SPUZO'],'method':()=> {
            const _0x1c870d=_0x240047;
            try {
                const _0x3d1124=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_0x3d1124)return;
                const _0x40b921=_0x3d1124['method'](_0x476e10['MdbSA'],-0x3*-0x233+0x347*0xb+-0x3*0xe37)['invoke'](0);
                if(!_0x40b921)return;
                const _0x64a95b=_0x40b921['field'](_0x476e10['qNTul'])['value'];
                if(!_0x64a95b)return;
                const _0x59b42b=_0x64a95b['method'](_0x476e10['NumVQ'])['invoke']();
                if(!_0x59b42b)return;
                if(rightGrab) {
                    scaleVal++;
                    if(_0x476e10['ysugx'](hueVal,0x15c6*0x1+0xdef*-0x1+-0x758))hueVal=-127;
                }
                if(leftGrab) {
                    scaleVal--;
                    if(_0x476e10['nCOmN'](hueVal,-127))hueVal=0x3*-0xd9+0x23ef*-0x1+-0xb*-0x38b;
                }
                _0x59b42b['method'](_0x476e10['GBtXF'])['invoke'](scaleVal);
            }
            catch(_0x5b3386) {
                console['error'](_0x5b3386);
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['kySgG']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['aWvGj'],'method':()=> {
            const _0xed7180=_0x240047;
            try {
                const _0x1de459=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_0x1de459)return;
                const _0xd13f06=_0x1de459['method'](_0x476e10['MdbSA'],-0x2*0x616+-0x38*-0xb1+0x5*-0x54f)['invoke'](0);
                if(!_0xd13f06)return;
                const _0x295661=_0xd13f06['field'](_0x476e10['qNTul'])['value'];
                if(!_0x295661)return;
                const _0x360759=_0x295661['method'](_0x476e10['NumVQ'])['invoke']();
                if(!_0x360759)return;
                if(rightGrab) {
                    satVal++;
                    if(_0x476e10['JUUvG'](satVal,-0x17d7+-0xac0+0x2316))scaleVal=-127;
                }
                if(leftGrab) {
                    satVal--;
                    if(_0x476e10['zFoqP'](satVal,-127))scaleVal=-0x1e26+-0xf63*-0x1+-0x2a*-0x5d;
                }
                _0x360759['method'](_0x476e10['ueDiE'])['invoke'](scaleVal);
            }
            catch(_0x1c3de3) {
                console['error'](_0x1c3de3);
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['kySgG']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['GaUGd'],'method':()=> {
            const _0x1fec10=_0x240047;
            try {
                const _0x29b4da=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_0x29b4da)return;
                const _0x3e1bfa=_0x29b4da['method'](_0x476e10['MdbSA'],-0x90c+-0x1e84+0x2791)['invoke'](0);
                if(!_0x3e1bfa)return;
                const _0x7ef714=_0x3e1bfa['field'](_0x476e10['qNTul'])['value'];
                if(!_0x7ef714)return;
                const _0x22c534=_0x7ef714['method'](_0x476e10['NumVQ'])['invoke']();
                if(!_0x22c534)return;
                if(rightGrab) {
                    scaleVal++;
                    if(_0x476e10['KAggX'](scaleVal,-0x13*-0x7f+0x4*-0x21c+-0x7e))scaleVal=-127;
                }
                if(leftGrab) {
                    scaleVal--;
                    if(_0x476e10['atZbg'](scaleVal,-127))scaleVal=0x221*-0x9+-0x1*-0x267d+0x3*-0x647;
                }
                _0x22c534['method'](_0x476e10['LoUSE'])['invoke'](scaleVal);
            }
            catch(_0xd6fc11) {
                console['error'](_0xd6fc11);
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['kySgG']
    }
    ),new _0x3d4c89( {
        'buttonText':'Jelly Held Item','method':()=> {
            try {
                const _pl=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_pl)return;
                const _hand=_pl['method'](_0x476e10['MdbSA'],1)['invoke'](0);
                if(!_hand)return;
                const _anchor=_hand['field'](_0x476e10['qNTul'])['value'];
                if(!_anchor)return;
                const _held=_anchor['method'](_0x476e10['NumVQ'])['invoke']();
                if(!_held)return;
                if(rightGrab)jellyVal=Math.min(255,jellyVal+5);
                if(leftGrab)jellyVal=Math.max(0,jellyVal-5);
                const _byte=jellyVal&0xff;
                try{_held['method']('SetJellyStrengthData')['invoke'](_byte);}catch(_){}
                try{_held['method']('RPC_SetJellyStrengthData')['invoke'](_byte);}catch(_){}
                try{_held['method']('SetJellyStrength')['invoke'](_byte/255.0);}catch(_){}
                try{_held['method']('set_jellyStrength')['invoke'](_byte);}catch(_){}
                try{_held['field']('_jellyStrength')['value']=_byte;}catch(_){}
                try{_held['method']('HandleJellyStrengthChanged')['invoke']();}catch(_){}
                if(time>tagGunDelay){currentNotification='Jelly: '+_byte;notifactionResetTime=time+1.5;tagGunDelay=time+0.25;}
            } catch(_e){console.error('[Jelly Held Item]',_e);}
        },
        'isTogglable':!![],'toolTip':'hold right grip to increase jelly, left grip to decrease'
    }
    ),new _0x3d4c89( {
        'buttonText':'Infinite Item Value','method':()=> {
            n5SetHeldItemValue(n5HeldValueAmount);
        },
        'isTogglable':![],'toolTip':'sets held item additional sell value huge'
    }
    ),new _0x3d4c89( {
        'buttonText':'Item Value +','method':()=> {
            n5HeldValueAmount=Math.min(2147483647,n5HeldValueAmount*10);
            currentNotification='Held value amount: '+n5HeldValueAmount;notifactionResetTime=time+2;
        },
        'isTogglable':![],'toolTip':'raise item value amount'
    }
    ),new _0x3d4c89( {
        'buttonText':'Item Value -','method':()=> {
            n5HeldValueAmount=Math.max(999,n5HeldValueAmount/10|0);
            currentNotification='Held value amount: '+n5HeldValueAmount;notifactionResetTime=time+2;
        },
        'isTogglable':![],'toolTip':'lower item value amount'
    }
    ),new _0x3d4c89( {
        'buttonText':'Never Despawn Items','enableMethod':()=> {
            n5InstallNeverDespawnHook();n5NeverDespawnItems=true;n5RunNeverDespawnItems();currentNotification='Never Despawn Items ON';notifactionResetTime=time+2;
        },
        'disableMethod':()=> {
            n5NeverDespawnItems=false;currentNotification='Never Despawn Items OFF';notifactionResetTime=time+2;
        },
        'method':()=>n5RunNeverDespawnItems(),
        'isTogglable':!![],'toolTip':'keeps GrabbableItem despawn timers disabled'
    }
    ),new _0x3d4c89( {
        'buttonText':'No Recoil','enableMethod':()=> {
            n5NoRecoilEnabled=true;n5RunNoRecoil(true);currentNotification='No Recoil ON';notifactionResetTime=time+2;
        },
        'disableMethod':()=> {
            n5NoRecoilEnabled=false;currentNotification='No Recoil OFF';notifactionResetTime=time+2;
        },
        'method':()=>n5RunNoRecoil(false),
        'isTogglable':!![],'toolTip':'removes recoil and spread from guns'
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['HLFWS'],'method':()=> {
            const _0x49d43d=_0x240047;
            try {
                const _0x22330a=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_0x22330a)return;
                const _0x5bff0a=_0x22330a['method'](_0x476e10['MdbSA'],-0x2*-0xac6+-0x1*0x10e9+0x1*-0x4a2)['invoke'](0);
                if(!_0x5bff0a)return;
                const _0x58045b=_0x5bff0a['field'](_0x476e10['qNTul'])['value'];
                if(!_0x58045b)return;
                const _0x3f4352=_0x58045b['method'](_0x476e10['NumVQ'])['invoke']();
                if(!_0x3f4352)return;
                if(rightGrab) {
                    hueVal++,satVal++;
                    if(_0x476e10['KAggX'](hueVal,-0x1e37+-0x207b+0x7*0x907))hueVal=-127;
                    if(_0x476e10['XkLGr'](satVal,0x1*-0x7c5+-0x1835+0x2079))satVal=-127;
                }
                if(leftGrab) {
                    hueVal--,satVal--;
                    if(_0x476e10['BxIhz'](hueVal,-127))hueVal=-0xb7*0x26+-0x109*0x23+0x3fe4;
                    if(_0x476e10['JUUvG'](satVal,0x15ca+0x108c+-0x25d7))satVal=-127;
                }
                _0x3f4352['method'](_0x476e10['GBtXF'])['invoke'](hueVal),_0x3f4352['method'](_0x476e10['ueDiE'])['invoke'](satVal);
            }
            catch(_0x36c026) {
                console['error'](_0x36c026);
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['YoDUM']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['dlYvp'],'method':()=> {
            const _0x17682e=_0x240047;
            try {
                if(rightGrab&&_0x476e10['KAggX'](time,tagGunDelay)) {
                    const _0x412612=_0x476e10['pcxdQ']['split']('|');
                    let _0x285779=0x9cd+-0x95d+0x2*-0x38;
                    while(!![]) {
                        switch(_0x412612[_0x285779++]) {
                            case'0':hueVal+=-0xa7*-0x37+0x1877*0x1+-0x1*0x3c53;
                            continue;
                            case'1':if(_0x476e10['UOInc'](satVal,-0x24f5+0x1*-0x25a2+-0x7*-0xaba))satVal=-127;
                            continue;
                            case'2':if(_0x476e10['wSMXB'](hueVal,-0x1102+0xc83*-0x1+0x1e04))hueVal=-127;
                            continue;
                            case'3':satVal+=0xc32*-0x2+0x1bf8+-0x38f*0x1;
                            continue;
                            case'4':tagGunDelay=_0x476e10['lYbRI'](time,-0x1*-0x206e+-0xab3+0x1*-0x15bb+0.1);
                            continue;
                        }
                        break;
                    }
                }
                if(leftGrab&&_0x476e10['XkLGr'](time,tagGunDelay)) {
                    const _0x1ec9e1=_0x476e10['kJXXM']['split']('|');
                    let _0x35c034=0x6*0x71+-0x12b+-0x17b;
                    while(!![]) {
                        switch(_0x1ec9e1[_0x35c034++]) {
                            case'0':if(_0x476e10['JUUvG'](satVal,-0xc0c+0x95*-0x22+0x2055))satVal=-127;
                            continue;
                            case'1':if(_0x476e10['PxRjI'](hueVal,-0x714+0x1*-0x14ca+-0x35*-0x89))hueVal=-127;
                            continue;
                            case'2':satVal-=0xbf1*0x3+0x2310+0x5e*-0xc1;
                            continue;
                            case'3':tagGunDelay=_0x476e10['edcaL'](time,0x129*0xa+0x249e+-0x2*0x181c+0.1);
                            continue;
                            case'4':hueVal-=-0x4a3*0x7+0xa8b+-0x463*-0x5;
                            continue;
                        }
                        break;
                    }
                }
                (_0x476e10['Ixelf'](_0x476e10['Oulwf'](frameCount,0xe1c+0x1783+0x233*-0x11),-0x2675+-0x201+0x2876)||!cachedItems)&&(cachedItems=_0x1f7740['method'](_0x476e10['AajWa'],-0x1*0x16b3+-0x1f*0xd+0x1847)['inflate'](_0x97c8f0)['invoke'](0));
                if(_0x476e10['jREgu'](_0x476e10['hXWTf'](frameCount,0x8e3*-0x1+0xd04*-0x2+-0x56*-0x68),0x1b4f+0x65*0x61+-0x4194))return;
                if(cachedItems)for(let _0x41f1ee=-0x231a+0x1f*-0x27+-0x1*-0x27d3;
                _0x476e10['EDrfY'](_0x41f1ee,cachedItems['length']);
                _0x41f1ee++) {
                    const _0x2f3b72=cachedItems['get'](_0x41f1ee);
                    if(!_0x2f3b72||_0x2f3b72['handle']['isNull']())continue;
                    _0x2f3b72['method'](_0x476e10['GBtXF'])['invoke'](hueVal),_0x2f3b72['method'](_0x476e10['ueDiE'])['invoke'](satVal);
                }
            }
            catch(_0x445f8e) {
                console['error'](_0x445f8e);
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['lDmfy']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['HDCTx'],'method':()=> {
            const _0x416e13=_0x240047;
            try {
                const _0x349709=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_0x349709)return;
                const _0x3886ec=_0x349709['method'](_0x476e10['MdbSA'],0x250a+0xdc7+-0x32d0)['invoke'](0);
                if(!_0x3886ec)return;
                const _0x26b9d7=_0x3886ec['field'](_0x476e10['qNTul'])['value'];
                if(!_0x26b9d7)return;
                const _0x2b88b3=_0x26b9d7['method'](_0x476e10['NumVQ'])['invoke']();
                if(!_0x2b88b3)return;
                if(rightGrab) {
                    const _0x368b1e=_0x476e10['XtnBN']['split']('|');
                    let _0x38a797=-0x192d+0x134+0x143*0x13;
                    while(!![]) {
                        switch(_0x368b1e[_0x38a797++]) {
                            case'0':satVal++;
                            continue;
                            case'1':if(_0x476e10['IOwcG'](hueVal,0x97*0x1b+-0x890+-0x6de))hueVal=-127;
                            continue;
                            case'2':if(_0x476e10['OLUcg'](scaleVal,-0x1dc6+-0x8da*-0x4+-0x523))scaleVal=-127;
                            continue;
                            case'3':scaleVal++;
                            continue;
                            case'4':hueVal++;
                            continue;
                            case'5':if(_0x476e10['yeIkz'](satVal,0x6*-0x517+0x317+-0x3fe*-0x7))satVal=-127;
                            continue;
                        }
                        break;
                    }
                }
                if(leftGrab) {
                    const _0x42a078=_0x476e10['FPkLf']['split']('|');
                    let _0x1bbbbb=0x202c+-0x1235+-0xdf7;
                    while(!![]) {
                        switch(_0x42a078[_0x1bbbbb++]) {
                            case'0':satVal--;
                            continue;
                            case'1':if(_0x476e10['EvFrr'](hueVal,-0x159a*-0x1+0xae7+-0x2002))hueVal=-127;
                            continue;
                            case'2':scaleVal--;
                            continue;
                            case'3':if(_0x476e10['BpGwN'](satVal,0x1da4+0xa61*0x1+-0x2786))satVal=-127;
                            continue;
                            case'4':hueVal--;
                            continue;
                            case'5':if(_0x476e10['EvFrr'](hueVal,-0x97*-0x25+-0x1f79+-0x35*-0x31))hueVal=-127;
                            continue;
                        }
                        break;
                    }
                }
                _0x2b88b3['method'](_0x476e10['GBtXF'])['invoke'](hueVal),_0x2b88b3['method'](_0x476e10['ueDiE'])['invoke'](satVal),_0x2b88b3['method'](_0x476e10['LoUSE'])['invoke'](scaleVal);
            }
            catch(_0x3e9e69) {
                console['error'](_0x3e9e69);
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['YoDUM']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['FJpeU'],'method':()=> {
            const _0x2ceb1a=_0x240047;
            try {
                if(rightGrab&&_0x476e10['OLUcg'](time,tagGunDelay)) {
                    const _0x4989d1=_0x476e10['PoVUL']['split']('|');
                    let _0x5057a9=0x1eb*0x2+-0x20b*-0x3+0x9f7*-0x1;
                    while(!![]) {
                        switch(_0x4989d1[_0x5057a9++]) {
                            case'0':tagGunDelay=_0x476e10['ACbPx'](time,0x31*0x77+0x1eb*-0x1+-0xc*0x1bd+0.1);
                            continue;
                            case'1':if(_0x476e10['DqBSp'](hueVal,0x2572+0xda8+-0x329b))hueVal=-127;
                            continue;
                            case'2':hueVal+=0x2328+0x207*0x3+-0x2938;
                            continue;
                            case'3':if(_0x476e10['EvFrr'](scaleVal,-0x2*-0x134f+-0x10a5+-0x157a))scaleVal=-127;
                            continue;
                            case'4':if(_0x476e10['ZcrPL'](satVal,0xe2b*-0x2+-0x1369+0x32*0xf7))satVal=-127;
                            continue;
                            case'5':satVal+=0xae7*0x1+0x16b+-0x2f*0x43;
                            continue;
                            case'6':scaleVal+=0x75*-0xb+0x1*-0x1cb7+-0x81*-0x43;
                            continue;
                        }
                        break;
                    }
                }
                if(leftGrab&&_0x476e10['wyifY'](time,tagGunDelay)) {
                    const _0x1ad9de=_0x476e10['RAwWF']['split']('|');
                    let _0x58b567=-0x1*0x361+-0x71f*-0x4+-0x191b*0x1;
                    while(!![]) {
                        switch(_0x1ad9de[_0x58b567++]) {
                            case'0':if(_0x476e10['XkLGr'](hueVal,0x1*-0x1145+0x1c14+-0xa50))hueVal=-127;
                            continue;
                            case'1':scaleVal-=-0x1*0x1328+-0x2229+-0x1aab*-0x2;
                            continue;
                            case'2':tagGunDelay=_0x476e10['MmpKN'](time,0x855*-0x2+0x23bc+-0x1312+0.1);
                            continue;
                            case'3':satVal-=-0x825+0x167b+0x1*-0xe51;
                            continue;
                            case'4':hueVal-=0x32*0x6f+0x5fd+-0x1ba6;
                            continue;
                            case'5':if(_0x476e10['wSMXB'](scaleVal,0xd*0x73+-0x5*0x68f+0x1b73*0x1))scaleVal=-127;
                            continue;
                            case'6':if(_0x476e10['DqBSp'](satVal,-0x265a*-0x1+-0x8*-0x41b+-0x46b3))satVal=-127;
                            continue;
                        }
                        break;
                    }
                }
                (_0x476e10['yHEdd'](_0x476e10['GywiG'](frameCount,-0x1*0x13c5+0xe37+-0x72*-0xd),0xb*0x283+-0x109f+-0x1*0xb02)||!cachedItems)&&(cachedItems=_0x1f7740['method'](_0x476e10['AajWa'],-0x6a*-0x26+-0x289*-0x2+-0x14cd)['inflate'](_0x97c8f0)['invoke'](0));
                if(_0x476e10['nNHgt'](_0x476e10['hXWTf'](frameCount,-0x1*0x1a61+0x361+0x1705*0x1),-0x2030*0x1+0x107*0x1d+0x265))return;
                if(cachedItems)for(let _0x2001ba=0x89*0x2e+0xa57+0xba7*-0x3;
                _0x476e10['FcmTD'](_0x2001ba,cachedItems['length']);
                _0x2001ba++) {
                    const _0x32d91a=cachedItems['get'](_0x2001ba);
                    if(!_0x32d91a||_0x32d91a['handle']['isNull']())continue;
                    _0x32d91a['method'](_0x476e10['GBtXF'])['invoke'](hueVal),_0x32d91a['method'](_0x476e10['ueDiE'])['invoke'](satVal),_0x32d91a['method'](_0x476e10['LoUSE'])['invoke'](scaleVal);
                }
            }
            catch(_0x427471) {
                console['error'](_0x427471);
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['lDmfy']
    }
    )],[new _0x3d4c89( {
        'buttonText':_0x476e10['GmfnB'],'method':()=> {
            currentCategory=0x3cb*-0x1+0x1ecc+-0x1f*0xdf,currentPage=-0xec+0x13aa+-0x1*0x12be;
        },
        'isTogglable':![],'toolTip':_0x476e10['CvvKF']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['eGvDq'],'method':()=> {
            const _0x4b2fd1=_0x240047;
            try {
                const _0x1a6f23=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_0x1a6f23||_0x1a6f23['handle']['isNull']())return;
                const _0x5d4b47=_0x476e10['ZrusN'](_0xc4cf2f,_0x1a6f23)['method'](_0x476e10['YApVv'])['invoke']();
                _0x1e0b92['method'](_0x476e10['cucnJ'])['invoke'](-0x168a+-0x222+0x18ac,_0x5d4b47,_0x554b79,![]);
            }
            catch(_0x1a5f02) {
                console['error'](_0x476e10['ZxRfO'],_0x1a5f02);
            }
        },
        'isTogglable':![],'toolTip':_0x476e10['BoGfl']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['bevhZ'],'method':()=> {
            const _0x511410=_0x240047;
            try {
                const _0x4dd0a3=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_0x4dd0a3||_0x4dd0a3['handle']['isNull']())return;
                const _0x7a0f35=_0x476e10['Cisel'](_0xc4cf2f,_0x4dd0a3)['method'](_0x476e10['YApVv'])['invoke']();
                _0x1e0b92['method'](_0x476e10['cucnJ'])['invoke'](0x219a+0x1*0x18d6+-0x3a6f,_0x7a0f35,_0x554b79,![]);
            }
            catch(_0x558847) {
                console['error'](_0x476e10['OsJFT'],_0x558847);
            }
        },
        'isTogglable':![],'toolTip':_0x476e10['uQvjr']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['wYiiV'],'method':()=> {
            const _0x203a54=_0x240047,_0x5dc546=_0x35ade8;
            if(_0x476e10['VrZnq'](rightSecondary,rightGrab))try {
                const _0x4721c3=n5SpawnConfiguredItemAt(itemIDs[itemIndex],_0x5dc546['method'](_0x476e10['YApVv'])['invoke'](),_0x5dc546['method'](_0x476e10['YqqIM'])['invoke']());
                !_0x4721c3?_0x476e10['lkoZK'](_0x3dddf7,_0x476e10['HaQtP'](_0x476e10['CCqaC'],itemIDs[itemIndex]),![]):_0x476e10['hLOTh'](_0x3dddf7,_0x476e10['edcaL'](_0x476e10['lSYZL'],itemIDs[itemIndex]),![]);
            }
            catch(_0x25ac42) {
                console['error'](_0x476e10['bLACt'],_0x25ac42),_0x476e10['ynbGE'](_0x3dddf7,_0x476e10['lYbRI'](_0x476e10['HBjxx'],_0x25ac42),![]);
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['qvRsA']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['MYNkf'],'method':()=> {
            const _0x2a7cfa=_0x240047,_0x192be6= {
                'znBSL':function(_0x5e1d48,_0x35d715) {
                    const _0x2ced75=_0x291a;
                    return _0x476e10['DVnqu'](_0x5e1d48,_0x35d715);
                },
                'UAvks':function(_0x3e4b1f,_0x4be960) {
                    const _0x3bba3a=_0x291a;
                    return _0x476e10['XBDpI'](_0x3e4b1f,_0x4be960);
                },
                'DBpsM':function(_0x2b8550,_0x47b109) {
                    const _0x321800=_0x291a;
                    return _0x476e10['Hpgcv'](_0x2b8550,_0x47b109);
                },
                'OQyyF':function(_0x10da44,_0x5165f9) {
                    const _0x1508c9=_0x291a;
                    return _0x476e10['dJpMD'](_0x10da44,_0x5165f9);
                }
            };
            if(!rightSecondary)return;
            function _0x4317fc(_0x2364f7,_0x1111e2) {
                const _0x543cc8=_0x291a;
                return _0x192be6['znBSL'](Math['floor'](_0x192be6['UAvks'](Math['random'](),_0x192be6['DBpsM'](_0x192be6['OQyyF'](_0x1111e2,_0x2364f7),0x3*0xb82+0x1*0x26c9+0x6aa*-0xb))),_0x2364f7);
            }
            try {
                const _0xf2f473=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_0xf2f473)return;
                const _0x4a4506=_0xf2f473['method'](_0x476e10['MdbSA'],-0x2440+-0x1*0x1c21+0x4062)['invoke'](0);
                if(!_0x4a4506)return;
                const _0xfbef72=_0x4a4506['field'](_0x476e10['qNTul'])['value'];
                if(!_0xfbef72)return;
                const _0x50a12d=_0xfbef72['method'](_0x476e10['NumVQ'])['invoke']();
                if(!_0x50a12d||_0x50a12d['isNull']())return;
                let _0x3f6298=_0x476e10['saSSG'];
                const _0x31a172=_0x50a12d['method'](_0x476e10['BGTMU'],-0x1*-0x1831+-0x2586+-0x472*-0x3)['inflate'](_0xaf18fa)['invoke']();
                if(_0x31a172&&!_0x31a172['isNull']()) {
                    const _0x4cfc35=_0x31a172['method'](_0x476e10['egUoS'])['invoke']();
                    if(_0x4cfc35&&!_0x4cfc35['isNull']())_0x3f6298=_0x4cfc35['content'];
                }
                const _0x604dff=_0x28a850['method'](_0x476e10['YApVv'])['invoke'](),_0x45ae5e=_0x1e0b92['method'](_0x476e10['uZRqq'],-0x1*-0xffd+-0x1199*0x1+-0xd*-0x20)['invoke'](Il2Cpp['string'](_0x476e10['ieSHm'](_0x476e10['tdeSU'],_0x3f6298)),_0x604dff,_0x554b79,_0x2f880d);
                if(!_0x45ae5e||_0x45ae5e['isNull']())return;
                const _0x1a2c4d=_0x45ae5e['method'](_0x476e10['BGTMU'],0x89+0x1b4f+0x1*-0x1bd7)['inflate'](_0x97c8f0)['invoke']();
                if(_0x1a2c4d&&!_0x1a2c4d['isNull']()) {
                    _0x1a2c4d['method'](_0x476e10['LoUSE'])['invoke'](_0x476e10['beLbR'](_0x4317fc,-128,0x1*0x8e5+0xba+-0x490*0x2)),_0x1a2c4d['method'](_0x476e10['GBtXF'])['invoke'](_0x476e10['lkoZK'](_0x4317fc,-127,0x17*0x53+-0xcb4+-0x31*-0x1e)),_0x1a2c4d['method'](_0x476e10['ueDiE'])['invoke'](_0x476e10['oBcVc'](_0x4317fc,-20,-0x42b*-0x9+-0x65b*-0x5+-0x44cb));
                    const _0x2f6f34=_0x28a850['method'](_0x476e10['itVwD'])['invoke'](),_0x4675d6=_0xe4d316['method'](_0x476e10['BGmZg'],0x1*0x1fed+0x1*0x9a7+-0x2992)['invoke'](_0x2f6f34,0xa9a*-0x1+0x40f*0x2+0x22*0x13);
                    _0x1a2c4d['method'](_0x476e10['TrWEY'],-0x39b*-0x3+0xb5*0xa+-0x11e2)['invoke'](_0x4675d6);
                }
            }
            catch(_0x5f4d22) {
                console['error'](_0x476e10['SchWF'],_0x5f4d22);
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['bubEt']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['TCFCh'],'isTogglable':!![],'method':()=> {
            const _0x13d7f7=_0x240047;
            if(!rightGrab)return;
            const _0x3d9733=_0x476e10['MtVJr'](_0x22649c),_0x48a83a=_0x3d9733['ray'];
            if(!_0x48a83a||_0x48a83a['handle']['isNull']())return;
            if(rightTrigger) {
                try {
                    const _0x18840a=_0x48a83a['method'](_0x476e10['avlli'])['invoke'](),_0x34df97=n5SpawnConfiguredItemAt(itemIDs[itemIndex],_0x18840a,_0x554b79);
                    !_0x34df97?_0x476e10['rQVgV'](_0x3dddf7,_0x476e10['aDTEz'](_0x476e10['CCqaC'],itemIDs[itemIndex]),![]):(console['log'](_0x476e10['CKKZE'],itemIDs[itemIndex]),_0x476e10['xPfzf'](_0x3dddf7,_0x476e10['mdRTM'](_0x476e10['lSYZL'],itemIDs[itemIndex]),![]));
                }
                catch(_0xb4bb9b) {
                    console['error'](_0x476e10['uipzP'],_0xb4bb9b),_0x476e10['jhmHU'](_0x3dddf7,_0x476e10['DVnqu'](_0x476e10['HBjxx'],_0xb4bb9b),![]);
                }
            }
        },
        'toolTip':_0x476e10['EUfAf']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['pMOpX'],'method':()=> {
            const _0xab0912=_0x240047,_0x5bc2dc=_0x35ade8;
            if(_0x476e10['VrZnq'](rightSecondary,rightGrab))try {
                const _0x1d872c=n5SpawnMobAt(mobIDs[mobIndex],_0x5bc2dc['method'](_0x476e10['YApVv'])['invoke'](),_0x5bc2dc['method'](_0x476e10['YqqIM'])['invoke']());
                !_0x1d872c?_0x476e10['CvRiU'](_0x3dddf7,_0x476e10['FfZRg'](_0x476e10['vUuIy'],mobIDs[mobIndex]),![]):_0x476e10['owkuk'](_0x3dddf7,_0x476e10['KsPWj'](_0x476e10['JrvAG'],mobIDs[mobIndex]),![]);
            }
            catch(_0x352ec9) {
                console['error'](_0x476e10['rEkKG'],_0x352ec9),_0x476e10['WTlRF'](_0x3dddf7,_0x476e10['beNCO'](_0x476e10['mMiDx'],_0x352ec9),![]);
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['sfDjj']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['SXxsO'],'isTogglable':!![],'method':()=> {
            const _0x4cd135=_0x240047;
            if(!rightGrab)return;
            const _0x4e0c2e=_0x476e10['mnMDs'](_0x22649c),_0x3c9cfe=_0x4e0c2e['ray'];
            if(!_0x3c9cfe||_0x3c9cfe['handle']['isNull']())return;
            if(rightTrigger) {
                try {
                    const _0x2a3cdf=_0x3c9cfe['method'](_0x476e10['avlli'])['invoke'](),_0x29b834=n5SpawnMobAt(mobIDs[mobIndex],_0x2a3cdf,_0x554b79);
                    !_0x29b834?_0x476e10['oJqAc'](_0x3dddf7,_0x476e10['qWRUu'](_0x476e10['vUuIy'],mobIDs[mobIndex]),![]):_0x476e10['vFJQf'](_0x3dddf7,_0x476e10['BvlLf'](_0x476e10['JrvAG'],mobIDs[mobIndex]),![]);
                }
                catch(_0x58f497) {
                    console['error'](_0x476e10['wZoUe'],_0x58f497),_0x476e10['wIoQl'](_0x3dddf7,_0x476e10['HpeJd'](_0x476e10['mMiDx'],_0x58f497),![]);
                }
            }
        },
        'toolTip':_0x476e10['ygESk']
    }
    )],[new _0x3d4c89( {
        'buttonText':_0x476e10['PVAUF'],'method':()=> {
            currentCategory=-0x9*0x213+-0x20d7+0x3382,currentPage=0x22*0xb3+-0xe62+-0x1*0x964;
        },
        'isTogglable':![],'toolTip':_0x476e10['CvvKF']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['xScEb'],'method':()=> {
            const _0x4ea10b=_0x240047;
            if(rightGrab) {
                const _0x3e7275=_0x476e10['MtVJr'](_0x22649c),_0x5cbcfb=_0x3e7275['gunPointer'];
                if(rightTrigger&&_0x476e10['IOwcG'](time,lagGunDelay)) {
                    lagGunDelay=_0x476e10['GOEAp'](time,0x1bd+-0x274*0x6+0xcfb+0.5);
                    try {
                        const _0x4c8293=_0x476e10['VpJwS'](_0xc4cf2f,_0x5cbcfb)['method'](_0x476e10['YApVv'])['invoke']();
                        let _0x28973a=Number['MAX_SAFE_INTEGER'],_0x52c8f9=null;
                        const _0x55b871=_0x126eec['field'](_0x476e10['ajDTO'])['value'],_0x3461e6=_0x55b871['method'](_0x476e10['Gzkrs'])['invoke'](),_0xf30024=_0x3461e6['method'](_0x476e10['UhwEm'])['invoke']();
                        while(_0xf30024['method'](_0x476e10['tcYql'])['invoke']()) {
                            const _0x3d6add=_0xf30024['method'](_0x476e10['UdBMu'])['invoke']();
                            if(!_0x3d6add||_0x3d6add['handle']['isNull']())continue;
                            if(_0x476e10['KaeSB'](_0x197b01,_0x3d6add))continue;
                            const _0x5408eb=_0x476e10['ZBNJL'](_0xc4cf2f,_0x3d6add)['method'](_0x476e10['YApVv'])['invoke'](),_0x2a3d2c=_0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_0x4c8293,_0x5408eb);
                            _0x476e10['EDrfY'](_0x2a3d2c,_0x28973a)&&(_0x28973a=_0x2a3d2c,_0x52c8f9=_0x3d6add);
                        }
                        if(_0x52c8f9&&!_0x52c8f9['handle']['isNull']()) {
                            const _0x2a8b78=_0x476e10['shNPV'](_0xc4cf2f,_0x52c8f9)['method'](_0x476e10['YApVv'])['invoke'](),_0x41fe31=[VFXTypes['MuzzleFlash_Shotgun'],VFXTypes['MuzzleFlash_FlareGun'],VFXTypes['CrateBreak'],VFXTypes['MuzzleFlash_SmallGun'],VFXTypes['MuzzleFlash_GoldRevolver'],VFXTypes['MuzzleFlash_DragonPistol'],VFXTypes['MuzzleFlash_ViperShotgun'],VFXTypes['Explosion_FlareGun'],VFXTypes['Explosion_Coins'],VFXTypes['Explosion_Nuts'],VFXTypes['Explosion_Keys'],VFXTypes['Explosion_Balloon'],VFXTypes['Explosion_TeleGrenadeSrc'],VFXTypes['Player_Touch_Lava'],VFXTypes['Portal_Teleport'],VFXTypes['Explosion_Coins_Vertical'],VFXTypes['Autumn_Leaves_Burst'],VFXTypes['Explosion_Feathers'],VFXTypes['Explosion_Popcorn'],VFXTypes['Electricity_Small'],VFXTypes['Impact_Snowball'],VFXTypes['Impact_GoldRevolver'],VFXTypes['Impact_MeleeHit'],VFXTypes['Impact_BigGroundHit'],VFXTypes['Impact_MeleeHit_CriticalSmall'],VFXTypes['Impact_MeleeHit_CriticalLarge'],VFXTypes['Impact_MeleeHit_AoE'],VFXTypes['Research_ZiplineAttachDetach'],VFXTypes['Research_Purchase1RP'],VFXTypes['Research_Purchase5RP'],VFXTypes['Research_Purchase10RP'],VFXTypes['Research_PurchaseRPBundle'],VFXTypes['Rope_ZiplineAttachDetach'],VFXTypes['MeatExplosion_1'],VFXTypes['MeatExplosion_2'],VFXTypes['MeatExplosion_Headshot'],VFXTypes['ServerRoomSplash_Small'],VFXTypes['ServerRoomSplash_Big'],VFXTypes['RAMActivationSparks'],VFXTypes['GreenBlink'],VFXTypes['ConfettiBurst'],VFXTypes['Ethereal_Void'],VFXTypes['MomBoss_NailBreak'],VFXTypes['MidAirJump_Fart'],VFXTypes['FuelExplosion']],_0x4dbcbb=_0x40792d['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['WxggD'])['invoke']();
                            for(const _0x4845ea of _0x41fe31) {
                                n5PlayVFXAt(_0x4845ea,_0x2a8b78,_0x554b79);
                            }
                            const _0x485a1e=_0x52c8f9['method'](_0x476e10['JvTJW'])['invoke'](),_0x4e4c35=_0x485a1e['method'](_0x476e10['itVwD'])['invoke'](),_0x8988cf=_0xe4d316['method'](_0x476e10['BGmZg'],-0xeda+0x5*0x1df+0x581)['invoke'](_0x4e4c35,_0x476e10['qtNkl'](0x1d12+0x1*0x1bcb+0x4a3*-0xb,deltaTime));
                            _0x52c8f9['method'](_0x476e10['uXViU'])['invoke']([-0x210f+0x1be+-0x1f51*-0x1,-9999999,0x2*0x296+-0x1*0xa1b+0x4ef]),_0x52c8f9['method'](_0x476e10['GvlcC'])['invoke'](_0x8988cf),_0x52c8f9['method'](_0x476e10['uKaRt'])['invoke'](NaN,NaN,NaN,NaN),_0x476e10['lkoZK'](_0x3dddf7,_0x476e10['xkGEj'],![]),console['log'](_0x476e10['gIHTF']);
                        }
                    }
                    catch(_0x57dde9) {
                        console['error'](_0x476e10['Crgyy'],_0x57dde9);
                    }
                }
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['TxPkM']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['WwPaK'],'method':()=> {
            const _0x40e099=_0x240047;
            if(!rightGrab)return;
            const _0x21184f=_0x476e10['LtKnW'](_0x22649c),_0x32d602=_0x21184f['ray'];
            if(!rightTrigger)return;
            if(!_0x32d602||_0x32d602['isNull']())return;
            try {
                const _0x2c502c=_0x32d602['method'](_0x476e10['avlli'])['invoke'](),_0x193fde=_0x126eec['field'](_0x476e10['ajDTO'])['value'],_0x5aaf96=_0x193fde['method'](_0x476e10['Gzkrs'])['invoke'](),_0x5bc444=_0x5aaf96['method'](_0x476e10['UhwEm'])['invoke']();
                while(_0x5bc444['method'](_0x476e10['tcYql'])['invoke']()) {
                    const _0x2e4f40=_0x5bc444['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_0x2e4f40||_0x2e4f40['handle']['isNull']())continue;
                    if(_0x2e4f40['method'](_0x476e10['qTups'])['invoke']())continue;
                    _0x2e4f40['method'](_0x476e10['uXViU'])['invoke'](_0x2c502c);
                }
            }
            catch(_0x26c12e) {
                console['error'](_0x476e10['OuNfV'],_0x26c12e);
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['cFdMf']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['jPXUq'],'method':()=> {
            const _0x2568ad=_0x240047;
            if(rightGrab) {
                const _0x38755a=_0x476e10['LtKnW'](_0x22649c),_0x43d980=_0x38755a['ray'];
                if(rightTrigger) {
                    const _0x44b4d8=(_0x43d980&&_0x43d980['method'])?_0x43d980['method'](_0x476e10['uYAQj'])['invoke']():null;
                    if(!_0x44b4d8||(_0x44b4d8['isNull']&&_0x44b4d8['isNull']()))return;
                    const _0x3e129e=_0x476e10['HMLmM'](_0x35440f,_0x44b4d8,_0x126eec);
                    _0x3e129e&&!_0x3e129e['handle']['isNull']()&&_0x476e10['jcLYt'](time,tagGunDelay)&&(!_0x476e10['mUojT'](_0x197b01,_0x3e129e)&&_0x3e129e['method'](_0x476e10['vatiI'])['invoke']());
                }
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['ZsFdS']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['CiZQy'],'enableMethod':()=>{InfAmmo=!![];},'disableMethod':()=>{InfAmmo=![];},'isTogglable':!![],'toolTip':_0x476e10['SGQmV']
    }
    ),new _0x3d4c89( {
        'buttonText':'Infinite Gun Stats','enableMethod':()=>{n5InfiniteGunStats=!![];n5RunInfiniteGunStats(true);},'disableMethod':()=>{n5InfiniteGunStats=![];currentNotification='Infinite Gun Stats OFF';notifactionResetTime=time+2;},'method':()=>n5RunInfiniteGunStats(false),'isTogglable':!![],'toolTip':'max GunConfig stats from dump'
    }
    ),new _0x3d4c89( {
        'buttonText':'Item Force Cannon','method':()=>n5RunItemForceCannon(),'isTogglable':!![],'toolTip':'blast items from your aim point'
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['zuDvN'],'method':()=> {
            const _0x56b892=_0x240047;
            try {
                const _0x49c710=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_0x49c710)return;
                const _0x11a354=_0x49c710['method'](_0x476e10['MdbSA'],-0x3*-0x608+-0x1*0x14bd+0x2a6)['invoke'](1);
                if(!_0x11a354)return;
                const _0x39ef82=_0x11a354['field'](_0x476e10['qNTul'])['value'];
                if(!_0x39ef82)return;
                const _0xbfd481=_0x39ef82['method'](_0x476e10['NumVQ'])['invoke']();
                if(!_0xbfd481)return;
                const _0x1d9a7f=_0x49c710['method'](_0x476e10['MdbSA'],0x1b5+0x10c3+0x1277*-0x1)['invoke'](0);
                if(!_0x1d9a7f)return;
                const _0x28653e=_0x1d9a7f['field'](_0x476e10['qNTul'])['value'];
                if(!_0x28653e)return;
                const _0x2f9d05=_0x28653e['method'](_0x476e10['NumVQ'])['invoke']();
                if(!_0x2f9d05)return;
                rightTrigger&&_0xbfd481['method'](_0x476e10['Ukmho'])['invoke'](),leftTrigger&&_0x2f9d05['method'](_0x476e10['Ukmho'])['invoke']();
            } catch(_0x4960bd){console['error'](_0x4960bd);}
        },
        'isTogglable':!![],'toolTip':_0x476e10['NiwpP']
    }
    )],[new _0x3d4c89( {
        'buttonText':_0x476e10['ApQeU'],'method':()=> {
            currentCategory=-0xc1e+0x2371+-0x1753,currentPage=-0x2fe+-0x1a8f+-0x59*-0x55;
        },
        'isTogglable':![],'toolTip':_0x476e10['CvvKF']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['MZfFV'],'method':()=>stashDupeEnabled=!![],'disableMethod':()=>stashDupeEnabled=![],'toolTip':_0x476e10['eKlhh']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['ZBqmm'],'method':()=> {
            const _0x26c4e3=_0x240047;
            ejectDupeIndex++,ejectDupeIndex%=ejectDupeValues['length'],ejectDupeAmount=ejectDupeValues[ejectDupeIndex],_0x476e10['mNBvp'](_0x3dddf7,_0x476e10['nmoBZ'](_0x476e10['UrDiH'],ejectDupeAmount),![]);
        },
        'isTogglable':![],'toolTip':_0x476e10['bPDqw']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['CiZQy'],'enableMethod':()=> {
            InfAmmo=!![];
        },
        'disableMethod':()=> {
            InfAmmo=![];
        },
        'isTogglable':!![],'toolTip':_0x476e10['SGQmV']
    }
    ),new _0x3d4c89( {
        'buttonText':'Remove Shotgun Cooldown','enableMethod':()=> {
            n5ShotgunNoCooldown=!![];
        },
        'disableMethod':()=> {
            n5ShotgunNoCooldown=![];
        },
        'method':()=> {
            n5RunShotgunNoCooldown();
        },
        'isTogglable':!![],'toolTip':'removes shotgun reload/shoot delay from dump fields'
    }
       ),new _0x3d4c89( {
        'buttonText':'Unlimited Hoverpad Battery','enableMethod':()=> {
            n5InfiniteHoverpadBattery=!![];
            n5RunInfiniteHoverpadBattery();
        },
        'disableMethod':()=> {
            n5InfiniteHoverpadBattery=![];
        },
        'method':()=> {
            n5RunInfiniteHoverpadBattery();
        },
        'isTogglable':!![],'toolTip':'removes hoverpad limit'
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['zuDvN'],'method':()=> {
            const _0x56b892=_0x240047;
            try {
                const _0x49c710=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_0x49c710)return;
                const _0x11a354=_0x49c710['method'](_0x476e10['MdbSA'],-0x3*-0x608+-0x1*0x14bd+0x2a6)['invoke'](1);
                if(!_0x11a354)return;
                const _0x39ef82=_0x11a354['field'](_0x476e10['qNTul'])['value'];
                if(!_0x39ef82)return;
                const _0xbfd481=_0x39ef82['method'](_0x476e10['NumVQ'])['invoke']();
                if(!_0xbfd481)return;
                const _0x1d9a7f=_0x49c710['method'](_0x476e10['MdbSA'],0x1b5+0x10c3+0x1277*-0x1)['invoke'](0);
                if(!_0x1d9a7f)return;
                const _0x28653e=_0x1d9a7f['field'](_0x476e10['qNTul'])['value'];
                if(!_0x28653e)return;
                const _0x2f9d05=_0x28653e['method'](_0x476e10['NumVQ'])['invoke']();
                if(!_0x2f9d05)return;
                rightTrigger&&_0xbfd481['method'](_0x476e10['Ukmho'])['invoke'](),leftTrigger&&_0x2f9d05['method'](_0x476e10['Ukmho'])['invoke']();
            }
            catch(_0x4960bd) {
                console['error'](_0x4960bd);
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['NiwpP']
    }
    ),new _0x3d4c89( {
        'buttonText':'Dev Menu',
        'enableMethod':()=>{

            try {
                const _appCls = _0xa03cc7['class']('AnimalCompany.App');
                const _isDev = _appCls['method']('get_state')['invoke']()
                    ['method']('get_user')['invoke']()
                    ['method']('get_isDeveloper')['invoke']();
                _isDev['field']('_value')['value'] = true;
            } catch(_e){ console.error('[DevMode] App err:', _e); }

            if(!devModeHookSet){
                _0x178e96['method'](_0x476e10['bfnsC'])['implementation']=function(){
                    this['field'](_0x476e10['SDpKB'])['value']=!![];
                    this['method'](_0x476e10['bfnsC'])['invoke']();
                };
                devModeHookSet=!![];
            }

            try {
                const _pwCls = _0xa03cc7['class']('AnimalCompany.PlayerWatch');
                const _en = _pwCls['field']('_allWatches')['value']['method']('GetEnumerator')['invoke']();
                while(_en['method']('MoveNext')['invoke']()){
                    const _w = _en['method']('get_Current')['invoke']();
                    if(_w['method'](_0x476e10['qTups'])['invoke']()){
                        const _dmv = _w['field']('_devMenuView')['value'];
                        if(_dmv && !_dmv['isNull']())
                            _dmv['method'](_0x476e10['ZqQpU'])['invoke']()['method'](_0x476e10['mkqJb'])['invoke'](true);
                        break;
                    }
                }
            } catch(_e){ console.error('[DevMode] Watch err:', _e); }

            try {
                const _lp = _0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(_lp && !_lp['isNull']()){
                    const _paths = [
                        'LeftHand/WalkieTalkieWatch/PlayerWatchView/SizeRoot/WalkieWatchV3/Canvases/Adventure_Canvas/PlayerWatchSideMenu/Interface (Dev)',
                        'LeftHand/WalkieTalkieWatch/PlayerWatchView/SizeRoot/WalkieWatchV3/Canvases/Adventure_Canvas/SideMenu/Interface (Dev)'
                    ];
                    for(const _p of _paths){
                        try {
                            const _t = _0xc4cf2f(_lp)['method']('Find')['invoke'](Il2Cpp['string'](_p));
                            if(_t && !_t['isNull']())
                                _0x602a9f['method']('GetComponent',0)['inflate'](_0x602a9f)['invoke']()
                                    ['method'](_0x476e10['ZqQpU'])['invoke']()['method'](_0x476e10['mkqJb'])['invoke'](true);
                        } catch(_e2){}
                    }
                }
            } catch(_e){ console.error('[DevMode] Find err:', _e); }
            currentNotification='Dev Mode ON';notifactionResetTime=time+3;
        },
        'disableMethod':()=>{

            _0x178e96['method'](_0x476e10['bfnsC'])['implementation']=null;
            devModeHookSet=![];

            try {
                const _appCls = _0xa03cc7['class']('AnimalCompany.App');
                const _isDev = _appCls['method']('get_state')['invoke']()
                    ['method']('get_user')['invoke']()
                    ['method']('get_isDeveloper')['invoke']();
                _isDev['field']('_value')['value'] = false;
            } catch(_e){}

            try {
                const _pwCls = _0xa03cc7['class']('AnimalCompany.PlayerWatch');
                const _en = _pwCls['field']('_allWatches')['value']['method']('GetEnumerator')['invoke']();
                while(_en['method']('MoveNext')['invoke']()){
                    const _w = _en['method']('get_Current')['invoke']();
                    if(_w['method'](_0x476e10['qTups'])['invoke']()){
                        const _dmv = _w['field']('_devMenuView')['value'];
                        if(_dmv && !_dmv['isNull']())
                            _dmv['method'](_0x476e10['ZqQpU'])['invoke']()['method'](_0x476e10['mkqJb'])['invoke'](false);
                        break;
                    }
                }
            } catch(_e){}
            currentNotification='Dev Mode OFF';notifactionResetTime=time+3;
        },
        'isTogglable':!![],'toolTip':'dev mode'
    }
    )],[new _0x3d4c89( {
        'buttonText':_0x476e10['xFdfl'],'method':()=> {
            currentCategory=-0x161b+0xf6+-0x3f*-0x56,currentPage=0x175c+-0x18f5+0x199;
        },
        'isTogglable':![],'toolTip':_0x476e10['eZCMu']
    }
    ),new _0x3d4c89({
        'buttonText':'Whitelist Fly',
        'method':()=>{n5RunWhitelistedFist(0.02,(_rig)=>n5WhitelistFlyPlayer(_rig));},
        'isTogglable':!![],'toolTip':'wl fly'
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand RPG',
        'method':()=>{
            if(time < tagGunDelay) return;
            tagGunDelay = time + 0.05;
            for(let _i=0; _i<whitelist.length; _i++){
                const _pl = whitelist[_i]; if(!_pl) continue;
                try {
                    const _fv = _pl['method'](_0x476e10['KsNte'])['invoke']()['field'](_0x476e10['pdSNt'])['value'];
                    if(!_fv || _fv['isNull']() || _fv['length'] < 1) continue;
                    const _f = _fv['get'](0);
                    if(_f['field']('_indexValue')['value'] > 0.8 &&
                       _f['field']('_middleValue')['value'] > 0.8 &&
                       _f['field']('_thumbValue')['value'] > 0.8){
                        const _hand = _pl['field']('handRight')['value'];
                        const _spawnResult = _1e0b92_spawnPrefab('RPGRocket',
                            _hand['method'](_0x476e10['YApVv'])['invoke'](),
                            _hand['method'](_0x476e10['YqqIM'])['invoke']()
                        );
                    }
                } catch(_e){}
            }
            function _1e0b92_spawnPrefab(_name, _pos, _rot){
                try {
                    const _runner = _0x1e0b92['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['RhZfj'])['invoke']();
                    if(!_runner||_runner['isNull']()) return null;
                    const _src = _runner['field'](_0x476e10['kWNSW'])['value']['field'](_0x476e10['cULYi'])['value']['field'](_0x476e10['LVBav'])['value'];
                    const _cnt = _src['method'](_0x476e10['lMNyg'])['invoke']();
                    for(let _k=0;_k<_cnt;_k++){
                        try {
                            const _entry = _src['method'](_0x476e10['XJNtT'])['invoke'](_k);
                            if(_entry['method'](_0x476e10['uWKdC'])['invoke']()['toString']()['includes'](_name)){
                                const _asset = _entry['method'](_0x476e10['NmKJA'])['invoke']();
                                if(!_asset||_asset['isNull']()) return null;

                                return null;
                            }
                        } catch(_e2){}
                    }
                } catch(_e){}
                return null;
            }
        },
        'isTogglable':!![],'toolTip':'wl rocket fist'
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand Flare',
        'method':()=>{
            if(time < tagGunDelay) return;
            tagGunDelay = time + 0.1;
            for(let _i=0; _i<whitelist.length; _i++){
                const _pl = whitelist[_i]; if(!_pl) continue;
                try {
                    const _fv = _pl['method'](_0x476e10['KsNte'])['invoke']()['field'](_0x476e10['pdSNt'])['value'];
                    if(!_fv || _fv['isNull']() || _fv['length'] < 1) continue;
                    const _f = _fv['get'](0);
                    if(_f['field']('_indexValue')['value'] > 0.8 &&
                       _f['field']('_middleValue')['value'] > 0.8 &&
                       _f['field']('_thumbValue')['value'] > 0.8){
                        const _hand = _pl['field']('handRight')['value'];

                        const _flare = _0x1e0b92['method'](_0x476e10['uZRqq'],4)['invoke'](
                            Il2Cpp['string'](_0x476e10['tdeSU'] + 'item_flaregun'),
                            _hand['method'](_0x476e10['YApVv'])['invoke'](),
                            _hand['method'](_0x476e10['YqqIM'])['invoke'](),
                            _0x2f880d
                        );
                        if(_flare && !_flare['isNull']()){
                            try {
                                const _rb = _flare['method']('GetComponent',0)['inflate'](_0x1d3a80)['invoke']();
                                if(_rb && !_rb['isNull']()){
                                    _rb['method'](_0x476e10['cLyfd'])['invoke'](false);
                                    _rb['method']('WakeUp')['invoke']();
                                    _rb['method']('set_linearVelocity')['invoke'](
                                        _0xe4d316['method'](_0x476e10['BGmZg'],2)['invoke'](
                                            _hand['method'](_0x476e10['itVwD'])['invoke'](), 30
                                        )
                                    );
                                }
                            } catch(_e2){}
                        }
                    }
                } catch(_e){}
            }
        },
        'isTogglable':!![],'toolTip':'wl flare fist'
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand Crate',
        'method':()=>{
            if(time < tagGunDelay) return;
            tagGunDelay = time + 0.1;
            for(let _i=0; _i<whitelist.length; _i++){
                const _pl = whitelist[_i]; if(!_pl) continue;
                try {
                    const _fv = _pl['method'](_0x476e10['KsNte'])['invoke']()['field'](_0x476e10['pdSNt'])['value'];
                    if(!_fv || _fv['isNull']() || _fv['length'] < 1) continue;
                    const _f = _fv['get'](0);
                    if(_f['field']('_indexValue')['value'] > 0.8 &&
                       _f['field']('_middleValue')['value'] > 0.8 &&
                       _f['field']('_thumbValue')['value'] > 0.8){
                        const _hand = _pl['field']('handRight')['value'];
                        _0x1e0b92['method'](_0x476e10['uZRqq'],4)['invoke'](
                            Il2Cpp['string']('item_prefab/item_crate'),
                            _hand['method'](_0x476e10['YApVv'])['invoke'](),
                            _hand['method'](_0x476e10['YqqIM'])['invoke'](),
                            _0x2f880d
                        );
                    }
                } catch(_e){}
            }
        },
        'isTogglable':!![],'toolTip':'wl crate fist'
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand Bomb',
        'method':()=>{
            if(time < tagGunDelay) return;
            tagGunDelay = time + 0.5;
            for(let _i=0; _i<whitelist.length; _i++){
                const _pl = whitelist[_i]; if(!_pl) continue;
                try {
                    const _fv = _pl['method'](_0x476e10['KsNte'])['invoke']()['field'](_0x476e10['pdSNt'])['value'];
                    if(!_fv || _fv['isNull']() || _fv['length'] < 1) continue;
                    const _f = _fv['get'](0);
                    if(_f['field']('_indexValue')['value'] > 0.8 &&
                       _f['field']('_middleValue')['value'] > 0.8 &&
                       _f['field']('_thumbValue')['value'] > 0.8){
                        const _hand = _pl['field']('handRight')['value'];
                        const _bomb = _0x1e0b92['method'](_0x476e10['uZRqq'],4)['invoke'](
                            Il2Cpp['string'](_0x476e10['tdeSU'] + 'item_dynamite'),
                            _hand['method'](_0x476e10['YApVv'])['invoke'](),
                            _hand['method'](_0x476e10['YqqIM'])['invoke'](),
                            _0x2f880d
                        );
                        if(_bomb && !_bomb['isNull']()){
                            try {
                                const _rb = _bomb['method']('GetComponent',0)['inflate'](_0x1d3a80)['invoke']();
                                if(_rb && !_rb['isNull']()){
                                    _rb['method'](_0x476e10['cLyfd'])['invoke'](false);
                                    _rb['method']('WakeUp')['invoke']();
                                    _rb['method']('set_linearVelocity')['invoke'](
                                        _0xe4d316['method'](_0x476e10['BGmZg'],2)['invoke'](
                                            _hand['method'](_0x476e10['itVwD'])['invoke'](), 20
                                        )
                                    );
                                }
                            } catch(_e2){}
                        }
                    }
                } catch(_e){}
            }
        },
        'isTogglable':!![],'toolTip':'wl bomb fist'
    }),new _0x3d4c89({
        'buttonText':'Whitelist Giveaway',
        'method':()=>{
            if(time < tagGunDelay) return;
            tagGunDelay = time + 0.3;
            for(let _i=0; _i<whitelist.length; _i++){
                const _pl = whitelist[_i]; if(!_pl) continue;
                try {
                    const _fv = _pl['method'](_0x476e10['KsNte'])['invoke']()['field'](_0x476e10['pdSNt'])['value'];
                    if(!_fv || _fv['isNull']() || _fv['length'] < 1) continue;
                    const _f = _fv['get'](0);
                    if(_f['field']('_indexValue')['value'] > 0.8 &&
                       _f['field']('_middleValue')['value'] > 0.8 &&
                       _f['field']('_thumbValue')['value'] > 0.8){
                        const _hand = _pl['field']('handRight')['value'];
                        const _rndItem = itemIDs[Math.floor(Math.random() * itemIDs.length)];
                        _0x1e0b92['method'](_0x476e10['uZRqq'],4)['invoke'](
                            Il2Cpp['string'](_0x476e10['tdeSU'] + _rndItem),
                            _hand['method'](_0x476e10['YApVv'])['invoke'](),
                            _hand['method'](_0x476e10['YqqIM'])['invoke'](),
                            _0x2f880d
                        );
                    }
                } catch(_e){}
            }
        },
        'isTogglable':!![],'toolTip':'wl item giveaway'
    }),new _0x3d4c89({
        'buttonText':'Whitelist Disintegrate',
        'method':()=>{
            for(let _i=0; _i<whitelist.length; _i++){
                const _pl = whitelist[_i];
                if(!_pl || _pl['handle']['isNull']()) continue;
                const _uid = _pl['field']('_userID')['value']['toString']();
                if(!whitelistDisintegrateDelays[_uid]) whitelistDisintegrateDelays[_uid] = 0;
                try {
                    const _fv = _pl['method'](_0x476e10['KsNte'])['invoke']()['field'](_0x476e10['pdSNt'])['value'];
                    if(!_fv || _fv['isNull']() || _fv['length'] < 1) continue;
                    const _f = _fv['get'](0);
                    if(_f['field']('_thumbValue')['value'] > 0.8 && time > whitelistDisintegrateDelays[_uid]){
                        whitelistDisintegrateDelays[_uid] = time + 1.0;

                        const _myPos = _0xc4cf2f(_pl)['method'](_0x476e10['YApVv'])['invoke']();
                        let _minD = Number['MAX_SAFE_INTEGER'], _target = null;
                        const _en = _0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                        while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                            const _t = _en['method'](_0x476e10['UdBMu'])['invoke']();
                            if(!_t || _t['handle']['isNull']()) continue;
                            if(_t['method'](_0x476e10['qTups'])['invoke']()) continue;
                            if(_t['field']('_userID')['value']['toString']() === _uid) continue;
                            const _d = _0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_myPos, _0xc4cf2f(_t)['method'](_0x476e10['YApVv'])['invoke']());
                            if(_d < _minD){ _minD = _d; _target = _t; }
                        }
                        if(_target && !_target['handle']['isNull']()){
                            const _tpos = _0xc4cf2f(_target)['method'](_0x476e10['YApVv'])['invoke']();
                            const _sfxRunner = _0x40792d['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['WxggD'])['invoke']();
                            const _vfxList = [VFXTypes['MuzzleFlash_Shotgun'],VFXTypes['CrateBreak'],VFXTypes['Explosion_FlareGun'],VFXTypes['Explosion_Coins'],VFXTypes['Portal_Teleport'],VFXTypes['Autumn_Leaves_Burst'],VFXTypes['MeatExplosion_1'],VFXTypes['MeatExplosion_2'],VFXTypes['MeatExplosion_Headshot'],VFXTypes['ConfettiBurst'],VFXTypes['Ethereal_Void'],VFXTypes['FuelExplosion']];
                            for(const _v of _vfxList){
                                try { n5PlayVFXAt(_v,_tpos,_0x554b79); } catch(_ev){}
                            }
                            _target['method'](_0x476e10['uXViU'])['invoke']([0, -9999999, 0]);
                            _target['method'](_0x476e10['GvlcC'],3)['invoke'](_0xe4d316['method'](_0x476e10['BGmZg'],2)['invoke'](_0xc4cf2f(_target)['method'](_0x476e10['itVwD'])['invoke'](), 9999 * deltaTime));
                            _target['method'](_0x476e10['uKaRt'])['invoke'](NaN, NaN, NaN, NaN);
                        }
                    }
                } catch(_e){ console.error('[WL Disintegrate]', _e); }
            }
        },
        'isTogglable':!![],'toolTip':'wl disintegrate'
    })],[new _0x3d4c89( {
        'buttonText':_0x476e10['Lmwax'],'method':()=> {
            currentCategory=-0x6b5*0x3+0x11*0x1e2+-0xbe3,currentPage=0x1*0x180d+-0xce1+-0xb2c;
        },
        'isTogglable':![],'toolTip':_0x476e10['pKees']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['OPMue'],'method':()=> {
            const _0x272b4c=_0x240047;
            rightGrab?prefabIndex--:prefabIndex++,prefabIndex=_0x476e10['GywiG'](_0x476e10['CDJgn'](_0x476e10['vuzIZ'](prefabIndex,prefabList['length']),prefabList['length']),prefabList['length']),_0x476e10['mNBvp'](_0x3dddf7,_0x476e10['VbxNI'](_0x476e10['Ujcsu'],prefabList[prefabIndex]),![]);
        },
        'isTogglable':![],'toolTip':_0x476e10['isbRH']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['DdyGO'],'method':()=> {
            const _0x4d488d=_0x240047,_0x9e5db9= {
                'GIxQV':_0x476e10['BPbnC'],'dSZQx':function(_0x3b2731,_0xc98002) {
                    const _0x23311a=_0x4d488d;
                    return _0x476e10['RhBIr'](_0x3b2731,_0xc98002);
                },
                'VAjOx':_0x476e10['DzTBa'],'RKJdK':function(_0x2cbe87,_0xb92078) {
                    const _0x2a0c52=_0x4d488d;
                    return _0x476e10['pUqkT'](_0x2cbe87,_0xb92078);
                },
                'avtYB':function(_0x56727f,_0x4536aa) {
                    const _0x1b924f=_0x4d488d;
                    return _0x476e10['jyUWX'](_0x56727f,_0x4536aa);
                }
            };
            try {
                const _0x39a316=_0x35ade8['method'](_0x476e10['YApVv'])['invoke'](),_0x24ec0f=_0x35ade8['method'](_0x476e10['YqqIM'])['invoke'](),_0x26abb0=_0x1e0b92['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['RhZfj'])['invoke']();
                if(!_0x26abb0||_0x26abb0['isNull']()) {
                    console['error'](_0x476e10['QQcZx']);
                    return;
                }
                const _0x3cedb0=_0x26abb0['field'](_0x476e10['kWNSW'])['value']['field'](_0x476e10['cULYi'])['value']['field'](_0x476e10['LVBav'])['value'],_0xccd904=_0x3cedb0['method'](_0x476e10['lMNyg'])['invoke'](),_0x21340e=prefabList[prefabIndex];
                let _0xe8c709=![];
                for(let _0x4e4bb3=-0x1*0x732+0x1d6c+-0x2*0xb1d;
                _0x476e10['VRaOu'](_0x4e4bb3,_0xccd904);
                _0x4e4bb3++) {
                    try {
                        const _0x417247=_0x3cedb0['method'](_0x476e10['XJNtT'])['invoke'](_0x4e4bb3),_0x3a72db=_0x417247['method'](_0x476e10['uWKdC'])['invoke']()['toString']();
                        if(_0x3a72db['includes'](_0x21340e)) {
                            const _0x3b646e=_0x417247['method'](_0x476e10['NmKJA'])['invoke']();
                            if(!_0x3b646e||_0x3b646e['isNull']()) {
                                console['error'](_0x476e10['nrqXT']);
                                return;
                            }
                            const _0x25896a=_0x297115=> {
                                const _0x159f9f=_0x4d488d;
                                if(_0x297115['class']['isEnum']||_0x297115['isPrimitive'])return-0x290+-0x1994+0x1c24*0x1;
                                if(!_0x297115['class']['isValueType'])return _0x2f880d;
                                const _0x34a723=_0x297115['class']['fields']['filter'](_0x9e7415=>!_0x9e7415['isStatic']);
                                if(_0x476e10['RhBIr'](_0x34a723['length'],0xf6a+-0x12b3+-0x1*-0x349))return-0x293*-0x7+-0xc44+-0x3*0x1eb;
                                return _0x34a723['map'](_0x3e7d48=>_0x25896a(_0x3e7d48['type']));
                            },
                            _0x1f6abc=(_0x3ebe9b,_0x40ffdc,_0x518fc6)=> {
                                const _0x2acc6f=_0x4d488d,_0x66e79b=_0x3ebe9b['class']['fields']['filter'](_0x541af9=>!_0x541af9['isStatic']);
                                return _0x66e79b['map'](_0x3f8756=> {
                                    const _0x3dbbca=_0x2acc6f,_0x5f8c95=_0x3f8756['name']['toLowerCase']();
                                    if(_0x5f8c95['includes'](_0x9e5db9['GIxQV']))return _0x40ffdc?0x1383+-0x8*0x427+0xdb6:0xa78+0x1*-0x1ebb+0x1443;
                                    if(_0x9e5db9['dSZQx'](_0x5f8c95,_0x9e5db9['VAjOx']))return _0x40ffdc?_0x518fc6:_0x9e5db9['RKJdK'](_0x25896a,_0x3f8756['type']);
                                    return _0x9e5db9['avtYB'](_0x25896a,_0x3f8756['type']);
                                }
                                );
                            },
                            _0x46519e=(_0x2cd2c4,_0x3e2a26)=> {
                                const _0x364f75=_0x4d488d;
                                if(_0x476e10['czDGi'](typeof _0x3e2a26,_0x476e10['ysFgC']))return _0x3e2a26?0x526*0x1+-0x1365+0x390*0x4:0x1*-0x57b+-0x2153+0x2*0x1367;
                                if(_0x476e10['nvsZB'](_0x3e2a26,Il2Cpp['ValueType'])) {
                                    const _0x5dada9=_0x2cd2c4['class']['fields']['filter'](_0x566e94=>!_0x566e94['isStatic']);
                                    if(_0x476e10['LMtKj'](_0x5dada9['length'],-0x16e0+-0x5*0x52+0xc3d*0x2))return-0x1*-0xfb3+0xece+-0x1e81;
                                    return _0x5dada9['map'](_0x26ce42=>_0x46519e(_0x26ce42['type'],_0x26ce42['bind'](_0x3e2a26)['value']));
                                }
                                if(Array['isArray'](_0x3e2a26))return _0x3e2a26['map'](_0x42f8b9=>_0x46519e(_0x2cd2c4,_0x42f8b9));
                                return _0x3e2a26;
                            },
                            _0x29ec94=(_0x1b6b67,_0x1b3938)=> {
                                const _0x35f1a6=_0x4d488d;
                                return _0x476e10['uTbxE'](_0x1f6abc,_0x1b6b67,!![],_0x476e10['hLOTh'](_0x46519e,_0x1b3938['type'],_0x1b3938));
                            };
                            let _0x3e82d4=null;
                            for(const _0x5e2b39 of _0x26abb0['method'](_0x476e10['vFQqx'])['overloads']()) {
                                if(_0x476e10['RwyBa'](_0x5e2b39['parameterCount'],-0x1f7*0x1+-0x10d*-0x23+-0x22ca)||_0x5e2b39['isGeneric'])continue;
                                const _0x1bd0c5=_0x5e2b39['parameters'];
                                if(_0x1bd0c5[0x1431*-0x1+-0x8ec*0x4+0xb2d*0x5]['type']['name']['includes'](_0x476e10['NeMHI'])&&_0x1bd0c5[0x1c31+0x43c*-0x1+-0x17f4]['type']['name']['startsWith'](_0x476e10['ROVVx'])&&_0x1bd0c5[-0x17*-0x172+0x1*-0x563+-0x1bda]['type']['name']['includes'](_0x476e10['QlcUr'])&&_0x1bd0c5[0xccd+0x65d+-0x265*0x8]['type']['name']['startsWith'](_0x476e10['ROVVx'])&&_0x1bd0c5[0xb*0x281+0x2*-0x7c7+0x1*-0xbfb]['type']['name']['includes'](_0x476e10['yYEnS'])&&_0x1bd0c5[0x1*-0x9f5+0xfe9+0x1fb*-0x3]['type']['name']['startsWith'](_0x476e10['ROVVx'])&&_0x1bd0c5[-0x17ca+0x1*-0x1579+0x2d46]['type']['name']['includes'](_0x476e10['FuqyM'])&&_0x1bd0c5[0x39e*-0x3+-0x3e3*0xa+-0xc6f*-0x4]['type']['name']['includes'](_0x476e10['EvbOE'])&&_0x1bd0c5[-0xeda+0x1ad0+-0xbf1]['type']['name']['includes'](_0x476e10['qswjV'])) {
                                    _0x3e82d4=_0x5e2b39;
                                    break;
                                }
                            }
                            if(!_0x3e82d4) {
                                console['error'](_0x476e10['WuvDS']);
                                return;
                            }
                            const _0x586329=_0x476e10['MPZmC'](_0x29ec94,_0x3e82d4['parameters'][0x1*-0x2141+0x1*0x269+0x95*0x35]['type'],_0x39a316),_0x3a9311=_0x476e10['mNBvp'](_0x29ec94,_0x3e82d4['parameters'][0x1326+-0x1358*0x1+0x4*0xd]['type'],_0x24ec0f),_0xc90bf7=_0x476e10['sYrWh'](_0x1f6abc,_0x3e82d4['parameters'][-0xa*-0x2e3+0x112*0xd+-0x2ac5]['type'],![],_0x476e10['UPDrY'](_0x25896a,_0x3e82d4['parameters'][-0x1532+-0x2*-0x9df+0x7d*0x3]['type'])),_0x40214a=_0x3e82d4['parameters'][0x1755+-0x50b*0x7+0x1*0xbfc]['type']['class']['isValueType']?_0x476e10['zXXqP'](_0x25896a,_0x3e82d4['parameters'][0x1a*0x11f+-0x153*0x1+0x3f9*-0x7]['type']):_0x2f880d;
                            _0x3e82d4['bind'](_0x26abb0)['invoke'](_0x3b646e,_0x586329,_0x3a9311,_0xc90bf7,_0x40214a,0xf*-0x1d7+-0x126b+0x136*0x26),_0x476e10['CvRiU'](_0x3dddf7,_0x476e10['KsPWj'](_0x476e10['lSYZL'],_0x21340e),![]),_0xe8c709=!![];
                            break;
                        }
                    }
                    catch(_0x4ef30e) {
                    }
                }
                if(!_0xe8c709)_0x476e10['pRxna'](_0x3dddf7,_0x476e10['dYxYI'](_0x476e10['RfFMX'],_0x21340e),![]);
            }
            catch(_0x27f178) {
                console['error'](_0x476e10['wdbsQ'](_0x476e10['HwdeS'],_0x27f178));
            }
        },
        'isTogglable':![],'toolTip':_0x476e10['lyyzS']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['tjfTT'],'method':()=> {
            const _0x2c5ab9=_0x240047,_0x31edda= {
                'CIeoQ':_0x476e10['BPbnC'],'YWuFU':function(_0x3a0dc8,_0x2138fd) {
                    const _0x5b898a=_0x2c5ab9;
                    return _0x476e10['UnErC'](_0x3a0dc8,_0x2138fd);
                },
                'nTtyY':_0x476e10['DzTBa'],'ISUIb':function(_0x2b7372,_0x9036ea) {
                    const _0x3fd05c=_0x2c5ab9;
                    return _0x476e10['IJdAK'](_0x2b7372,_0x9036ea);
                },
                'DirBm':_0x476e10['ysFgC'],'yDXGz':function(_0x3c0e74,_0x10a1f1) {
                    const _0x3e7dd2=_0x2c5ab9;
                    return _0x476e10['rAeaq'](_0x3c0e74,_0x10a1f1);
                }
            };
            if(!rightGrab)return;
            const _0x297825=_0x476e10['mnMDs'](_0x22649c),_0x40e231=_0x297825['ray'];
            if(!_0x40e231||_0x40e231['isNull']())return;
            if(!rightTrigger)return;
            try {
                const _0x4c8eb3=_0x40e231['method'](_0x476e10['avlli'])['invoke'](),_0x377d14=_0x554b79,_0x4bac75=_0x1e0b92['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['RhZfj'])['invoke']();
                if(!_0x4bac75||_0x4bac75['isNull']())return;
                const _0x2cb932=_0x4bac75['field'](_0x476e10['kWNSW'])['value']['field'](_0x476e10['cULYi'])['value']['field'](_0x476e10['LVBav'])['value'],_0xc76bbc=_0x2cb932['method'](_0x476e10['lMNyg'])['invoke'](),_0x11324c=prefabList[prefabIndex];
                for(let _0x2260b3=0xfa2+-0x430+0x2*-0x5b9;
                _0x476e10['mXFeC'](_0x2260b3,_0xc76bbc);
                _0x2260b3++) {
                    try {
                        const _0x27d2fd=_0x2cb932['method'](_0x476e10['XJNtT'])['invoke'](_0x2260b3),_0xf28b91=_0x27d2fd['method'](_0x476e10['uWKdC'])['invoke']()['toString']();
                        if(_0xf28b91['includes'](_0x11324c)) {
                            const _0x21728c=_0x27d2fd['method'](_0x476e10['NmKJA'])['invoke']();
                            if(!_0x21728c||_0x21728c['isNull']())return;
                            const _0xa92893=_0xb5d7a=> {
                                const _0x44149c=_0x2c5ab9;
                                if(_0xb5d7a['class']['isEnum']||_0xb5d7a['isPrimitive'])return 0x7df+0x13f2+-0x1*0x1bd1;
                                if(!_0xb5d7a['class']['isValueType'])return _0x2f880d;
                                const _0x4790c1=_0xb5d7a['class']['fields']['filter'](_0x1cc281=>!_0x1cc281['isStatic']);
                                if(_0x476e10['vGJLd'](_0x4790c1['length'],-0x464+0x646+-0x1e2))return 0x12a7+-0x1*0x24b5+-0x907*-0x2;
                                return _0x4790c1['map'](_0x545928=>_0xa92893(_0x545928['type']));
                            },
                            _0x259a33=(_0x327ad6,_0x5d9584,_0x2fe97f)=> {
                                const _0x41d007=_0x2c5ab9,_0xc2e7d0=_0x327ad6['class']['fields']['filter'](_0xfef866=>!_0xfef866['isStatic']);
                                return _0xc2e7d0['map'](_0x33d234=> {
                                    const _0x3d9d93=_0x41d007,_0x1f1115=_0x33d234['name']['toLowerCase']();
                                    if(_0x1f1115['includes'](_0x31edda['CIeoQ']))return _0x5d9584?-0x1edd+-0x4e+0x1f2c:0x7f*0x43+0x2373+-0x2*0x2258;
                                    if(_0x31edda['YWuFU'](_0x1f1115,_0x31edda['nTtyY']))return _0x5d9584?_0x2fe97f:_0x31edda['ISUIb'](_0xa92893,_0x33d234['type']);
                                    return _0x31edda['ISUIb'](_0xa92893,_0x33d234['type']);
                                }
                                );
                            },
                            _0x319237=(_0x2e4671,_0x23fddf)=> {
                                const _0x4ef633=_0x2c5ab9;
                                if(_0x31edda['YWuFU'](typeof _0x23fddf,_0x31edda['DirBm']))return _0x23fddf?-0x4c8*0x8+0x649+0x1ff8:-0x21b8+-0x1*-0x82+-0x27*-0xda;
                                if(_0x31edda['yDXGz'](_0x23fddf,Il2Cpp['ValueType'])) {
                                    const _0x9bb7d1=_0x2e4671['class']['fields']['filter'](_0x5c5179=>!_0x5c5179['isStatic']);
                                    if(_0x31edda['YWuFU'](_0x9bb7d1['length'],-0xd6d+-0xc+0xd79))return 0x2624+-0x2597+-0x8d;
                                    return _0x9bb7d1['map'](_0x1fef1e=>_0x319237(_0x1fef1e['type'],_0x1fef1e['bind'](_0x23fddf)['value']));
                                }
                                if(Array['isArray'](_0x23fddf))return _0x23fddf['map'](_0x5186de=>_0x319237(_0x2e4671,_0x5186de));
                                return _0x23fddf;
                            },
                            _0x2feb35=(_0x1cc3ec,_0x2b77f2)=> {
                                const _0x1b1728=_0x2c5ab9;
                                return _0x476e10['sYrWh'](_0x259a33,_0x1cc3ec,!![],_0x476e10['lkoZK'](_0x319237,_0x2b77f2['type'],_0x2b77f2));
                            };
                            let _0x48e600=null;
                            for(const _0x5a4a96 of _0x4bac75['method'](_0x476e10['vFQqx'])['overloads']()) {
                                if(_0x476e10['yCdEu'](_0x5a4a96['parameterCount'],0xa77*0x1+0x2*-0x8dd+0x749)||_0x5a4a96['isGeneric'])continue;
                                const _0x3f2038=_0x5a4a96['parameters'];
                                if(_0x3f2038[-0x1*-0x17a5+-0x1462*0x1+0xa7*-0x5]['type']['name']['includes'](_0x476e10['NeMHI'])&&_0x3f2038[-0xeb1*-0x1+0x4b1*-0x1+-0x9ff]['type']['name']['startsWith'](_0x476e10['ROVVx'])&&_0x3f2038[-0x83d+0x1667+0x19*-0x91]['type']['name']['includes'](_0x476e10['QlcUr'])&&_0x3f2038[-0x13cf+-0x2e*0x64+-0x239*-0x11]['type']['name']['startsWith'](_0x476e10['ROVVx'])&&_0x3f2038[0x1*-0x1b1+-0x3a*0x38+0x1*0xe63]['type']['name']['includes'](_0x476e10['yYEnS'])&&_0x3f2038[-0x5*0x17b+0x3*-0x55b+-0x177b*-0x1]['type']['name']['startsWith'](_0x476e10['ROVVx'])&&_0x3f2038[-0x2*-0x4f3+0x1aee+0x145*-0x1d]['type']['name']['includes'](_0x476e10['FuqyM'])&&_0x3f2038[0x18*-0x17f+-0x1dc7+0x41b3]['type']['name']['includes'](_0x476e10['EvbOE'])&&_0x3f2038[0x3ee*-0x7+-0x96+0x1c1d]['type']['name']['includes'](_0x476e10['qswjV'])) {
                                    _0x48e600=_0x5a4a96;
                                    break;
                                }
                            }
                            if(!_0x48e600)return;
                            const _0x512b33=_0x476e10['ISFoi'](_0x2feb35,_0x48e600['parameters'][-0x1f9d+-0x49e*-0x1+0x1b00]['type'],_0x4c8eb3),_0x21632b=_0x476e10['SuupE'](_0x2feb35,_0x48e600['parameters'][0x76a+-0x707+-0x61]['type'],_0x377d14),_0x463d57=_0x476e10['uTbxE'](_0x259a33,_0x48e600['parameters'][-0x2d*-0x1f+-0x946+-0x3d6*-0x1]['type'],![],_0x476e10['uwChI'](_0xa92893,_0x48e600['parameters'][0xaa8+-0x110b+-0x2*-0x333]['type'])),_0x595a5e=_0x48e600['parameters'][-0xb*0x354+0x1*-0xd1f+0x31bf]['type']['class']['isValueType']?_0x476e10['BHGRV'](_0xa92893,_0x48e600['parameters'][-0x1a0a+0x134d+-0x13*-0x5b]['type']):_0x2f880d;
                            _0x48e600['bind'](_0x4bac75)['invoke'](_0x21728c,_0x512b33,_0x21632b,_0x463d57,_0x595a5e,-0x18a7*0x1+-0x8*0x4bd+0x3e8f);
                            break;
                        }
                    }
                    catch(_0x58425a) {
                    }
                }
            }
            catch(_0x3a149a) {
                console['error'](_0x476e10['qWRUu'](_0x476e10['wFpuT'],_0x3a149a));
            }
        },
        'isTogglable':!![],'toolTip':_0x476e10['HOdGC']
    }
    ),new _0x3d4c89( {
        'buttonText':_0x476e10['hPTEO'],'method':()=> {
            const _0xda2ab7=_0x240047,_0x690442= {
                'BXyhI':_0x476e10['BPbnC'],'UwpQl':function(_0x44fb9e,_0x39d785) {
                    const _0xe22f16=_0xda2ab7;
                    return _0x476e10['UKxFn'](_0x44fb9e,_0x39d785);
                },
                'kydgN':_0x476e10['DzTBa'],'sOSgt':function(_0x522cbc,_0x25f10b) {
                    const _0x125068=_0xda2ab7;
                    return _0x476e10['wOtby'](_0x522cbc,_0x25f10b);
                },
                'qJPdV':function(_0x4fd6b7,_0x548445,_0x37608a) {
                    const _0x5ae0ab=_0xda2ab7;
                    return _0x476e10['oJqAc'](_0x4fd6b7,_0x548445,_0x37608a);
                },
                'pmblJ':function(_0x335dc2,_0x3e83c9,_0x4cb02e,_0x327367) {
                    const _0x104630=_0xda2ab7;
                    return _0x476e10['sYrWh'](_0x335dc2,_0x3e83c9,_0x4cb02e,_0x327367);
                }
            };
            if(!rightGrab)return;
            if(!rightTrigger)return;
            try {
                const _0x298037=_0x35ade8['method'](_0x476e10['YApVv'])['invoke'](),_0x18cc4a=_0x35ade8['method'](_0x476e10['YqqIM'])['invoke'](),_0x4e2f09=_0x1e0b92['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['RhZfj'])['invoke']();
                if(!_0x4e2f09||_0x4e2f09['isNull']())return;
                const _0x2a3737=_0x4e2f09['field'](_0x476e10['kWNSW'])['value']['field'](_0x476e10['cULYi'])['value']['field'](_0x476e10['LVBav'])['value'],_0x41c2f8=_0x2a3737['method'](_0x476e10['XJNtT'])['invoke'](4)['method'](_0x476e10['NmKJA'])['invoke']();
                if(!_0x41c2f8||_0x41c2f8['isNull']())return;
                const _0x351c22=_0x55d6e0=> {
                    const _0x395508=_0xda2ab7;
                    if(_0x55d6e0['class']['isEnum']||_0x55d6e0['isPrimitive'])return 0xd*0xd3+-0x1*0xe7d+-0x45*-0xe;
                    if(!_0x55d6e0['class']['isValueType'])return _0x2f880d;
                    const _0xde96b9=_0x55d6e0['class']['fields']['filter'](_0xb7cf25=>!_0xb7cf25['isStatic']);
                    if(_0x476e10['UnErC'](_0xde96b9['length'],-0xdfe+0x260f+0x1811*-0x1))return 0x17af*-0x1+0x7bb*0x1+0xff4;
                    return _0xde96b9['map'](_0x36e1cd=>_0x351c22(_0x36e1cd['type']));
                },
                _0x1c5c8f=(_0xd54780,_0x4410ac,_0x296732)=> {
                    const _0x1a230a=_0xda2ab7,_0x49fe7d=_0xd54780['class']['fields']['filter'](_0x2f5465=>!_0x2f5465['isStatic']);
                    return _0x49fe7d['map'](_0x4b3670=> {
                        const _0x4ac360=_0x1a230a,_0x3e90b5=_0x4b3670['name']['toLowerCase']();
                        if(_0x3e90b5['includes'](_0x690442['BXyhI']))return _0x4410ac?0x2*-0x7a9+-0x8*0x1b+0x102b*0x1:0x1*0x7c0+0xb*0xa3+-0xec1;
                        if(_0x690442['UwpQl'](_0x3e90b5,_0x690442['kydgN']))return _0x4410ac?_0x296732:_0x690442['sOSgt'](_0x351c22,_0x4b3670['type']);
                        return _0x690442['sOSgt'](_0x351c22,_0x4b3670['type']);
                    }
                    );
                },
                _0x39f9f3=(_0x94235d,_0x321c10)=> {
                    const _0x170754=_0xda2ab7;
                    if(_0x476e10['ANEeJ'](typeof _0x321c10,_0x476e10['ysFgC']))return _0x321c10?0x2*0x21f+-0x2271+0x1*0x1e34:-0xd*-0x127+0x14f*-0x1c+0x15a9;
                    if(_0x476e10['nvsZB'](_0x321c10,Il2Cpp['ValueType'])) {
                        const _0x38fcea=_0x94235d['class']['fields']['filter'](_0x2e20ea=>!_0x2e20ea['isStatic']);
                        if(_0x476e10['CLgNC'](_0x38fcea['length'],0xcc4+0x2397+-0x305b))return 0x293*0xb+0x32*-0x5c+-0xa59;
                        return _0x38fcea['map'](_0x3360fa=>_0x39f9f3(_0x3360fa['type'],_0x3360fa['bind'](_0x321c10)['value']));
                    }
                    if(Array['isArray'](_0x321c10))return _0x321c10['map'](_0x2a0e69=>_0x39f9f3(_0x94235d,_0x2a0e69));
                    return _0x321c10;
                },
                _0x381d25=(_0x2c10d8,_0xb024c3)=> {
                    const _0x139fb0=_0xda2ab7,_0x47af84=_0x690442['qJPdV'](_0x39f9f3,_0xb024c3['type'],_0xb024c3);
                    return _0x690442['pmblJ'](_0x1c5c8f,_0x2c10d8,!![],_0x47af84);
                };
                let _0x3bd6ef=null;
                for(const _0x686401 of _0x4e2f09['method'](_0x476e10['vFQqx'])['overloads']()) {
                    if(_0x476e10['yCdEu'](_0x686401['parameterCount'],0x2424+0xc1b+-0x3039)||_0x686401['isGeneric'])continue;
                    const _0xc36703=_0x686401['parameters'];
                    if(_0xc36703[-0xb44*-0x1+0xc85*0x1+-0x17c9]['type']['name']['includes'](_0x476e10['NeMHI'])&&_0xc36703[-0x1159+0x187*0xd+0x281*-0x1]['type']['name']['startsWith'](_0x476e10['ROVVx'])&&_0xc36703[0x1fe7+-0x2d3*-0x8+-0x367e]['type']['name']['includes'](_0x476e10['QlcUr'])&&_0xc36703[-0xdd*0x1d+0x1*0x67+0x18a4]['type']['name']['startsWith'](_0x476e10['ROVVx'])&&_0xc36703[-0x1*0x178f+0x24b9+0x2*-0x694]['type']['name']['includes'](_0x476e10['yYEnS'])&&_0xc36703[0x993+-0x9df+-0x4f*-0x1]['type']['name']['startsWith'](_0x476e10['ROVVx'])&&_0xc36703[-0x1a8c+-0x1a6e+0x5*0xa99]['type']['name']['includes'](_0x476e10['FuqyM'])&&_0xc36703[0xfef*-0x2+-0x2136+0x4118]['type']['name']['includes'](_0x476e10['EvbOE'])&&_0xc36703[-0x179d+0x2007+-0x865]['type']['name']['includes'](_0x476e10['qswjV'])) {
                        _0x3bd6ef=_0x686401;
                        break;
                    }
                }
                if(!_0x3bd6ef)return;
                const _0x168fe6=_0x476e10['WvbgP'](_0x381d25,_0x3bd6ef['parameters'][0x29*-0x1+0x3a*0x7c+0x226*-0xd]['type'],_0x298037),_0x4ee25f=_0x476e10['owkuk'](_0x381d25,_0x3bd6ef['parameters'][0x1a*0xcb+0xead*-0x1+-0x7*0xd9]['type'],_0x18cc4a),_0x115b68=_0x476e10['uTbxE'](_0x1c5c8f,_0x3bd6ef['parameters'][0x128+0xa98*0x3+-0x20ed]['type'],![],_0x476e10['wwKEr'](_0x351c22,_0x3bd6ef['parameters'][0x2134+0x18cd+-0x39fe]['type'])),_0x29ba7e=_0x3bd6ef['parameters'][-0x2018+0x1acd+-0x1*-0x54f]['type']['class']['isValueType']?_0x476e10['jUxxw'](_0x351c22,_0x3bd6ef['parameters'][0xa99+0xb*-0x2b+-0x8bc]['type']):_0x2f880d;
                _0x3bd6ef['bind'](_0x4e2f09)['invoke'](_0x41c2f8,_0x168fe6,_0x4ee25f,_0x115b68,_0x29ba7e,-0x1*0xc73+-0x136*0x6+0x1*0x13b7);
            }
            catch(_0x4fe7af) {
                console['error'](_0x476e10['ACbPx'](_0x476e10['ReCyV'],_0x4fe7af));
            }
        },
        'isTogglable':!![],'toolTip':'rocket launcher'
    }
    )],

    [new _0x3d4c89({'buttonText':'<< Back','isTogglable':false,'toolTip':'back','method':()=>{currentCategory=0;currentPage=0;}}
    ),n5ItemDisplay,
    new _0x3d4c89({'buttonText':'Item +','isTogglable':false,'toolTip':'next item','method':()=>{itemIndex=(itemIndex+1)%itemIDs.length;}}
    ),new _0x3d4c89({'buttonText':'Item -','isTogglable':false,'toolTip':'prev item','method':()=>{itemIndex=((itemIndex-1)+itemIDs.length)%itemIDs.length;}}
    ),n5MobDisplay,
    new _0x3d4c89({'buttonText':'Mob +','isTogglable':false,'toolTip':'next mob','method':()=>{mobIndex=(mobIndex+1)%mobIDs.length;}}
    ),new _0x3d4c89({'buttonText':'Mob -','isTogglable':false,'toolTip':'prev mob','method':()=>{mobIndex=((mobIndex-1)+mobIDs.length)%mobIDs.length;}}
    ),n5PrefabDisplay,
    new _0x3d4c89({'buttonText':'Prefab +','isTogglable':false,'toolTip':'next prefab','method':()=>{prefabIndex=(prefabIndex+1)%prefabList.length;}}
    ),new _0x3d4c89({'buttonText':'Prefab -','isTogglable':false,'toolTip':'prev prefab','method':()=>{prefabIndex=((prefabIndex-1)+prefabList.length)%prefabList.length;}}
    ),n5VFXDisplay,
    new _0x3d4c89({'buttonText':'VFX +','isTogglable':false,'toolTip':'next vfx','method':()=>{vfxIndex=(vfxIndex+1)%vfxKeys.length;}}
    ),new _0x3d4c89({'buttonText':'VFX -','isTogglable':false,'toolTip':'prev vfx','method':()=>{vfxIndex=((vfxIndex-1)+vfxKeys.length)%vfxKeys.length;}}
    )],

    [new _0x3d4c89({'buttonText':'<< Back','isTogglable':false,'toolTip':'back','method':()=>{currentCategory=0;currentPage=0;}}
    ),new _0x3d4c89({'buttonText':'Save Slot 1','isTogglable':false,'toolTip':'save 1','method':()=>{n5SavePreset(0);}}
    ),new _0x3d4c89({'buttonText':'Save Slot 2','isTogglable':false,'toolTip':'save 2','method':()=>{n5SavePreset(1);}}
    ),new _0x3d4c89({'buttonText':'Save Slot 3','isTogglable':false,'toolTip':'save 3','method':()=>{n5SavePreset(2);}}
    ),new _0x3d4c89({'buttonText':'Save Slot 4','isTogglable':false,'toolTip':'save 4','method':()=>{n5SavePreset(3);}}
    ),new _0x3d4c89({'buttonText':'Save Slot 5','isTogglable':false,'toolTip':'save 5','method':()=>{n5SavePreset(4);}}
    ),new _0x3d4c89({'buttonText':'Load Slot 1','isTogglable':false,'toolTip':'load 1','method':()=>{n5LoadPreset(0);}}
    ),new _0x3d4c89({'buttonText':'Load Slot 2','isTogglable':false,'toolTip':'load 2','method':()=>{n5LoadPreset(1);}}
    ),new _0x3d4c89({'buttonText':'Load Slot 3','isTogglable':false,'toolTip':'load 3','method':()=>{n5LoadPreset(2);}}
    ),new _0x3d4c89({'buttonText':'Load Slot 4','isTogglable':false,'toolTip':'load 4','method':()=>{n5LoadPreset(3);}}
    ),new _0x3d4c89({'buttonText':'Load Slot 5','isTogglable':false,'toolTip':'load 5','method':()=>{n5LoadPreset(4);}}
    )],

    [new _0x3d4c89({
        'buttonText':'<< Back','isTogglable':false,'toolTip':'back',
        'method':()=>{currentCategory=0;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Stop','isTogglable':false,'toolTip':'stop',
        'method':()=>{n5StopSound();currentNotification=' Stopped';notifactionResetTime=time+1;}
    }),new _0x3d4c89({
        'buttonText':'Audio ID +','isTogglable':false,'toolTip':'next server audio id',
        'method':()=>{n5ServerAudioId=(n5ServerAudioId+1)&0x7fff;currentNotification='Audio ID: '+n5ServerAudioId;notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Audio ID -','isTogglable':false,'toolTip':'previous server audio id',
        'method':()=>{n5ServerAudioId=Math.max(0,n5ServerAudioId-1);currentNotification='Audio ID: '+n5ServerAudioId;notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Play Audio ID','isTogglable':false,'toolTip':'play selected server audio id at right hand',
        'method':()=>{try{const _p=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();currentNotification=n5PlayServerAudioAt(n5ServerAudioId,_p)?'Audio '+n5ServerAudioId:'audio failed';notifactionResetTime=time+2;}catch(_e){console.error('[AudioID]',_e);}}
    }),new _0x3d4c89({
        'buttonText':'Grip Audio ID','isTogglable':true,'toolTip':'hold right grip to spam selected server audio id',
        'method':()=>{n5RunServerAudioGrip();}
    }),new _0x3d4c89({
        'buttonText':'Vol +','isTogglable':false,'toolTip':'vol up',
        'method':()=>{
            n5SoundVolume=Math.min(5.0,+(n5SoundVolume+0.25).toFixed(2));
            try{Il2Cpp.perform(()=>{if(n5SoundAudioSrc&&!n5SoundAudioSrc.isNull())n5SoundAudioSrc.method('set_volume').invoke(n5SoundVolume);})}catch(e){}
            currentNotification='Vol: '+n5SoundVolume.toFixed(2);notifactionResetTime=time+1;
        }
    }),new _0x3d4c89({
        'buttonText':'Vol -','isTogglable':false,'toolTip':'vol down',
        'method':()=>{
            n5SoundVolume=Math.max(0.0,+(n5SoundVolume-0.25).toFixed(2));
            try{Il2Cpp.perform(()=>{if(n5SoundAudioSrc&&!n5SoundAudioSrc.isNull())n5SoundAudioSrc.method('set_volume').invoke(n5SoundVolume);})}catch(e){}
            currentNotification='Vol: '+n5SoundVolume.toFixed(2);notifactionResetTime=time+1;
        }
    }),new _0x3d4c89({
        'buttonText':'Loop','isTogglable':true,'enabled':false,
        'toolTip':'loop',
        'enableMethod':()=>{n5SoundLoop=true;try{Il2Cpp.perform(()=>{if(n5SoundAudioSrc&&!n5SoundAudioSrc.isNull())n5SoundAudioSrc.method('set_loop').invoke(true);})}catch(e){}},
        'disableMethod':()=>{n5SoundLoop=false;try{Il2Cpp.perform(()=>{if(n5SoundAudioSrc&&!n5SoundAudioSrc.isNull())n5SoundAudioSrc.method('set_loop').invoke(false);})}catch(e){}}
    })    ,new _0x3d4c89({
        'buttonText':'3h6nv4','isTogglable':false,
        'toolTip':'play local',
        'method':()=>{
            currentNotification='Loading 3h6nv4...';notifactionResetTime=time+6;
            n5LoadWebSound(0,(ok)=>{
                if(ok){
                    _n5LoadedIdx=0;
                    n5PlaySound();
                    currentNotification=' Playing: 3h6nv4';notifactionResetTime=time+3;
                } else {
                    currentNotification=' Load failed: 3h6nv4';notifactionResetTime=time+3;
                }
            });
        }
    }),new _0x3d4c89({
        'buttonText':'+ 3h6nv4','isTogglable':false,
        'toolTip':'play + inject voice',
        'method':()=>{
            currentNotification='Loading 3h6nv4...';notifactionResetTime=time+6;
            n5LoadWebSound(0,(ok)=>{
                if(ok){
                    _n5LoadedIdx=0;
                    n5PlaySound();
                    n5SetVoiceInject(true);
                    currentNotification=' Playing+Injecting: 3h6nv4';notifactionResetTime=time+3;
                } else {
                    currentNotification=' Load failed: 3h6nv4';notifactionResetTime=time+3;
                }
            });
        }
    }),new _0x3d4c89({
        'buttonText':'Stop Inject','isTogglable':false,
        'toolTip':'stop voice inject',
        'method':()=>{ n5SetVoiceInject(false); }
    })],

    [new _0x3d4c89({'buttonText':'<< Back to Main','isTogglable':false,'toolTip':'back','method':()=>{currentCategory=0;currentPage=0;}}
    ),new _0x3d4c89({
        'buttonText':'TP ALL Gun','isTogglable':true,
        'toolTip':'tp everyone to aim',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_r=_g['ray'];
            if(!rightTrigger||!_r||_r['isNull']())return;
            try {
                const _pos=_r['method'](_0x476e10['avlli'])['invoke']();
                const _vals=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']();
                const _en=_vals['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()) {
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']())continue;
                    _pl['method'](_0x476e10['uXViU'])['invoke'](_pos);
                }
            } catch(_e){console.error('TP ALL Gun:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Disintegrate Gun','isTogglable':true,
        'toolTip':'obliterate aimed player',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_gp=_g['gunPointer'];
            if(!rightTrigger||!(time>lagGunDelay))return;
            lagGunDelay=time+0.5;
            try {
                const _gpos=_0xc4cf2f(_gp)['method'](_0x476e10['YApVv'])['invoke']();
                let _minD=Number['MAX_SAFE_INTEGER'],_target=null;
                const _vals=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']();
                const _en=_vals['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()) {
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_0x197b01(_pl))continue;
                    const _d=_0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_gpos,_0xc4cf2f(_pl)['method'](_0x476e10['YApVv'])['invoke']());
                    if(_d<_minD){_minD=_d;_target=_pl;}
                }
                if(_target&&!_target['handle']['isNull']()) {
                    const _sfx=_0x40792d['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['WxggD'])['invoke']();
                    const _tpos=_0xc4cf2f(_target)['method'](_0x476e10['YApVv'])['invoke']();
                    for(const _vk of Object.keys(VFXTypes)){if(_vk==='None')continue;n5PlayVFXAt(VFXTypes[_vk],_tpos,_0x554b79);}
                    _target['method'](_0x476e10['uXViU'])['invoke']([0,-99999,0]);
                    _target['method'](_0x476e10['GvlcC'])['invoke'](_0xe4d316['method'](_0x476e10['BGmZg'])['invoke'](_target['method'](_0x476e10['JvTJW'])['invoke']()['method'](_0x476e10['itVwD'])['invoke'](),500*deltaTime));
                    _target['method'](_0x476e10['uKaRt'])['invoke'](NaN,NaN,NaN,NaN);
                    currentNotification='Disintegrated!';notifactionResetTime=time+2;
                }
            } catch(_e){console.error('Disintegrate Gun:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'All VFX Gun','isTogglable':true,
        'toolTip':'all vfx on aimed player',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_gp=_g['gunPointer'];
            if(!rightTrigger||!(time>lagGunDelay))return;
            lagGunDelay=time+0.3;
            try {
                const _gpos=_0xc4cf2f(_gp)['method'](_0x476e10['YApVv'])['invoke']();
                let _minD=Number['MAX_SAFE_INTEGER'],_target=null;
                const _vals=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']();
                const _en=_vals['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_0x197b01(_pl))continue;
                    const _d=_0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_gpos,_0xc4cf2f(_pl)['method'](_0x476e10['YApVv'])['invoke']());
                    if(_d<_minD){_minD=_d;_target=_pl;}
                }
                if(_target&&!_target['handle']['isNull']()){
                    const _sfx=_0x40792d['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['WxggD'])['invoke']();
                    const _tpos=_0xc4cf2f(_target)['method'](_0x476e10['YApVv'])['invoke']();
                    for(const _vk of Object.keys(VFXTypes)){
                        if(_vk==='None')continue;
                        try{ n5PlayVFXAt(VFXTypes[_vk],_tpos,_0x554b79); }catch(_){}
                    }
                    currentNotification=' All VFX fired!';notifactionResetTime=time+1.5;
                }
            } catch(_e){console.error('AllVFXGun:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Stinky Gun','isTogglable':true,
        'toolTip':'stinky gun',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_r=_g['ray'];
            if(!rightTrigger)return;
            try {
                const _hitCol=(_r&&_r['method'])?_r['method'](_0x476e10['uYAQj'])['invoke']():null;
                if(!_hitCol||(_hitCol['isNull']&&_hitCol['isNull']()))return;
                const _col=_0x476e10['HMLmM'](_0x35440f,_hitCol,_0x126eec);
                if(_col&&!_col['handle']['isNull']()&&time>tagGunDelay&&!_0x197b01(_col)){
                    _col['method'](_0x476e10['vatiI'])['invoke']();
                    tagGunDelay=time+0.2;
                }
            } catch(_e){console.error('Stinky Gun:',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Infinite Gun Stats','isTogglable':true,
        'toolTip':'max damage, ammo, range, bullets, and fire speed on Gun configs',
        'enableMethod':()=>{n5InfiniteGunStats=true;n5RunInfiniteGunStats(true);},
        'disableMethod':()=>{n5InfiniteGunStats=false;currentNotification='Infinite Gun Stats OFF';notifactionResetTime=time+2;},
        'method':()=>n5RunInfiniteGunStats(false)
    }),new _0x3d4c89({
        'buttonText':'Item Force Cannon','isTogglable':true,
        'toolTip':'hold right grip and trigger to blast nearby items from aim point',
        'method':()=>n5RunItemForceCannon()
    }),new _0x3d4c89({
        'buttonText':'Shotgun Ammo Pickup Gun','isTogglable':true,
        'toolTip':'hold right grip and trigger to spawn an ammo pickup at aim',
        'method':()=>n5RunPickupGun('Ammo','Shotgun ammo','item_shotgun_ammo',1)
    }),new _0x3d4c89({
        'buttonText':'Revolver Ammo Pickup Gun','isTogglable':true,
        'toolTip':'hold right grip and trigger to spawn an ammo pickup at aim',
        'method':()=>n5RunPickupGun('Ammo','Revolver ammo','item_revolver_ammo',1)
    }),new _0x3d4c89({
        'buttonText':'Nut Pickup Gun','isTogglable':true,
        'toolTip':'hold right grip and trigger to spawn a nut pickup at aim',
        'method':()=>n5RunPickupGun('Nuts','Nut','item_nut',1)
    }),new _0x3d4c89({
        'buttonText':'Spawn Item Gun','isTogglable':true,
        'toolTip':'spawn item at aim',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_r=_g['ray'];
            if(!_r||_r['isNull']())return;
            if(rightTrigger&&time>=itemGunDelay){
                itemGunDelay=time;
                try {
                    const _pos=_r['method'](_0x476e10['avlli'])['invoke']();
                    const _spawned=n5SpawnConfiguredItemAt(itemIDs[itemIndex],_pos,_0x554b79);
                    currentNotification=_spawned?' '+itemIDs[itemIndex]:' spawn failed';
                    notifactionResetTime=time+1.5;
                } catch(_e){console.error('Item Gun:',_e);}
            }
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn Mob Gun','isTogglable':true,
        'toolTip':'spawn mob at aim',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_r=_g['ray'];
            if(!_r||_r['isNull']())return;
            if(rightTrigger&&time>=mobGunDelay2){
                mobGunDelay2=time;
                try {
                    const _pos=_r['method'](_0x476e10['avlli'])['invoke']();
                    const _spawned=n5SpawnMobAt(mobIDs[mobIndex],_pos,_0x554b79);
                    currentNotification=_spawned?' '+mobIDs[mobIndex]:' spawn failed';
                    notifactionResetTime=time+1.5;
                } catch(_e){console.error('Mob Gun:',_e);}
            }
        }
    }),new _0x3d4c89({
        'buttonText':'VFX Spawner Gun','isTogglable':true,
        'toolTip':'shoot vfx at aim',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_r=_g['ray'];
            if(!_r||_r['isNull']())return;
            if(rightTrigger&&time>vfxGunDelay){
                vfxGunDelay=time+0.1;
                try {
                    const _pos=_r['method'](_0x476e10['avlli'])['invoke']();
                    const _vfxType=VFXTypes[vfxKeys[vfxIndex%vfxKeys.length]];
                    n5PlayVFXAt(_vfxType,_pos,_0x554b79);
                    currentNotification='VFX: '+vfxKeys[vfxIndex%vfxKeys.length];
                    notifactionResetTime=time+0.5;
                } catch(_e){console.error('VFX Gun:',_e);}
            }
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn ALL Items Gun','isTogglable':true,
        'toolTip':'spawn all items at aim',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_r=_g['ray'];
            if(!_r||_r['isNull']())return;
            if(rightTrigger&&time>allItemsGunDelay){
                allItemsGunDelay=time+3.0;
                try {
                    const _pos=_r['method'](_0x476e10['avlli'])['invoke']();
                    let _spawned=0;
                    for(let _ii=0;_ii<itemIDs.length;_ii++){
                        const _off=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_pos,[(_ii%12)*0.6-3.3,0,Math.floor(_ii/12)*0.6]);
                        try{if(n5SpawnItemAt(itemIDs[_ii],_off,_0x554b79))_spawned++;}catch(_){}
                    }
                    currentNotification='Spawned '+_spawned+'/'+itemIDs.length+' items!';notifactionResetTime=time+3;
                } catch(_e){console.error('Spawn All Items Gun:',_e);}
            }
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn ALL Mobs Gun','isTogglable':true,
        'toolTip':'spawn all mobs at aim',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_r=_g['ray'];
            if(!_r||_r['isNull']())return;
            if(rightTrigger&&time>allMobsGunDelay){
                allMobsGunDelay=time+3.0;
                try {
                    const _pos=_r['method'](_0x476e10['avlli'])['invoke']();
                    let _sm=0;
                    for(let _mi=0;_mi<mobIDs.length;_mi++){
                        const _off=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_pos,[(_mi%6)*1.5-3.75,0,Math.floor(_mi/6)*1.5]);
                        try{if(n5SpawnMobAt(mobIDs[_mi],_off,_0x554b79))_sm++;}catch(_){}
                    }
                    currentNotification='Spawned '+_sm+'/'+mobIDs.length+' mobs!';notifactionResetTime=time+3;
                } catch(_e){console.error('Spawn All Mobs Gun:',_e);}
            }
        }
    }),new _0x3d4c89({
        'buttonText':'SPAWN ALL PREFABS Gun','isTogglable':true,
        'toolTip':'spawn all prefabs at aim',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_r=_g['ray'];
            if(!_r||_r['isNull']())return;
            if(rightTrigger&&time>allPrefabsGunDelay){
                allPrefabsGunDelay=time+5.0;
                try {
                    const _pos=_r['method'](_0x476e10['avlli'])['invoke']();
                    let _sp=0,_sk=0;
                    for(let _pi=0;_pi<prefabList.length;_pi++){
                        if(disableDangerousPrefabs&&dangerousPrefabs.indexOf(prefabList[_pi])>=0){_sk++;continue;}
                        const _off=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_pos,[(_pi%8)*2.0-7,0,Math.floor(_pi/8)*2.0]);
                        try{const _result=_0x5b9456(prefabList[_pi],_off,_0x554b79);if(_result!==null)_sp++;} catch(_){}
                    }
                    currentNotification='Spawned '+_sp+'/'+(_pi-_sk)+' prefabs, '+_sk+' skipped';notifactionResetTime=time+4;
                } catch(_e){console.error('Spawn All Prefabs Gun:',_e);}
            }
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn All Prefab Options','isTogglable':false,
        'toolTip':'prefab gun options',
        'method':()=>{currentCategory=16;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Despawn Item Gun','isTogglable':true,
        'toolTip':'yeet item to void',
        'method':()=>{
            if(!rightGrab) return;
            const _g=_0x22649c(),_r=_g['ray'];
            if(!_r||_r['isNull']()) return;
            if(rightTrigger&&time>=itemGunDelay){
                itemGunDelay=time;
                try{

                    const _pos=_r['method'](_0x476e10['avlli'])['invoke']();
                    const _hitItem=n5ItemFromRayHit(_r);
                    if(_hitItem&&n5DestroyItemObject(_hitItem)){
                        currentNotification=' Deleted hit item';notifactionResetTime=time+1;
                        return;
                    }
                    const _all=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_0xaf18fa)['invoke'](0);
                    if(!_all||_all['length']===0) return;
                    let _best=null,_bestD=2.0;
                    for(let _i=0;_i<_all['length'];_i++){
                        try{
                            const _it=_all['get'](_i);
                            if(!_it||_it['handle']['isNull']()) continue;
                            const _d=_0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_pos,_it['method'](_0x476e10['JvTJW'])['invoke']()['method'](_0x476e10['YApVv'])['invoke']());
                            if(_d<_bestD){_bestD=_d;_best=_it;}
                        }catch(_){}
                    }
                    if(_best){
                        n5DestroyItemObject(_best);
                        currentNotification=' Deleted item';notifactionResetTime=time+1;
                    }
                }catch(_e){console.error('DespawnItemGun:',_e);}
            }
        }
    }),new _0x3d4c89({
        'buttonText':'Kill Mob Gun','isTogglable':true,
        'toolTip':'kill mob gun',
        'method':()=>{
            if(!rightGrab) return;
            const _g=_0x22649c(),_r=_g['ray'];
            if(!_r||_r['isNull']()) return;
            if(rightTrigger&&time>=mobGunDelay2){
                mobGunDelay2=time;
                try{
                    const _pos=_r['method'](_0x476e10['avlli'])['invoke']();
                    const _all=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_0x3e7a10)['invoke'](0);
                    if(!_all||_all['length']===0) return;
                    let _best=null,_bestD=3.0;
                    for(let _i=0;_i<_all['length'];_i++){
                        try{
                            const _m=_all['get'](_i);
                            if(!_m||_m['handle']['isNull']()) continue;
                            try{ const _go=_m['method'](_0x476e10['ZqQpU'])['invoke'](); const _np=_go['method'](_0x476e10['BGTMU'],1)['inflate'](_0x126eec)['invoke'](); if(_np&&!_np['isNull']()) continue; }catch(_){}
                            const _d=_0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_pos,_m['method'](_0x476e10['JvTJW'])['invoke']()['method'](_0x476e10['YApVv'])['invoke']());
                            if(_d<_bestD){_bestD=_d;_best=_m;}
                        }catch(_){}
                    }
                    if(_best){
                        n5KillOneMob(_best);
                        currentNotification=' Killed mob';notifactionResetTime=time+1;
                    }
                }catch(_e){console.error('KillMobGun:',_e);}
            }
        }
    }),new _0x3d4c89({
        'buttonText':'Despawn Prefab Gun','isTogglable':true,
        'toolTip':'despawn anything',
        'method':()=>{
            if(!rightGrab) return;
            const _g=_0x22649c(),_r=_g['ray'];
            if(!_r||_r['isNull']()) return;
            if(rightTrigger&&time>lagGunDelay){
                lagGunDelay=time+0.3;
                try{
                    const _hitPos=_r['method'](_0x476e10['avlli'])['invoke']();
                    let _netObjCls=null;
                    try{_netObjCls=Il2Cpp.domain.assembly('Fusion.Runtime').image.class('Fusion.NetworkObject');}catch(_){}
                    if(!_netObjCls) return;
                    const _all=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_netObjCls)['invoke'](0);
                    if(!_all||_all['length']===0) return;
                    let _best=null,_bestD=3.0;
                    for(let _i=0;_i<_all['length'];_i++){
                        try{
                            const _obj=_all['get'](_i);
                            if(!_obj||_obj['handle']['isNull']()) continue;
                            try{if(_obj['method'](_0x476e10['qTups'])['invoke']()) continue;}catch(_){}
                            const _d=_0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_hitPos,_0xc4cf2f(_obj)['method'](_0x476e10['YApVv'])['invoke']());
                            if(_d<_bestD){_bestD=_d;_best=_obj;}
                        }catch(_){}
                    }
                    if(_best){

                        const _runner=_0x1e0b92['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['RhZfj'])['invoke']();
                        try{ _runner['method']('Despawn',1)['invoke'](_best); }
                        catch(_){ try{ _best['method'](_0x476e10['ZKeBc'])['invoke']([0,-99999,0]); }catch(_2){} }
                        currentNotification=' Despawned prefab';notifactionResetTime=time+1;
                    }
                }catch(_e){console.error('DespawnPrefabGun:',_e);}
            }
        }
    }),new _0x3d4c89({
        'buttonText':'Whitelist Gun','isTogglable':true,
        'toolTip':'whitelist gun',
        'method':()=>{
            if(!rightGrab) return;
            const _g=_0x22649c(),_gp=_g['gunPointer'];
            if(!rightTrigger||!_gp||_gp['isNull']()) return;
            if(!(time>tagGunDelay)) return;
            tagGunDelay=time+0.5;
            try {
                const _gpos=_0xc4cf2f(_gp)['method'](_0x476e10['YApVv'])['invoke']();
                let _minD=Number['MAX_SAFE_INTEGER'],_target=null;
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']()) continue;
                    const _d=_0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_gpos,_0xc4cf2f(_pl)['method'](_0x476e10['YApVv'])['invoke']());
                    if(_d<_minD){_minD=_d;_target=_pl;}
                }
                if(_target&&!_target['handle']['isNull']()){
                    const _already = whitelist.some(_w=>_w&&!_w['handle']['isNull']()&&_w['handle']['equals'](_target['handle']));
                    if(!_already){
                        whitelist.push(_target);
                        try {
                            const _name = _target['method'](_0x476e10['LdzTO'])['invoke']()['toString']();
                            currentNotification=' WL: '+_name;
                        } catch(_ne){ currentNotification=' Added to whitelist'; }
                    } else {
                        currentNotification='Already whitelisted';
                    }
                    notifactionResetTime=time+2;
                }
            } catch(_e){console.error('WhitelistGun:',_e);}
        }
    })],

    [new _0x3d4c89({'buttonText':'<< Back to Guns','isTogglable':false,'toolTip':'back','method':()=>{currentCategory=15;currentPage=0;}}
    ),new _0x3d4c89({
        'buttonText':'DISABLE DANGEROUS PREFABS',
        'enableMethod':()=>{
            disableDangerousPrefabs=true;
            currentNotification='Blocked: NetPlayer, NetSpectator';notifactionResetTime=time+3;
        },
        'disableMethod':()=>{
            disableDangerousPrefabs=false;
            currentNotification='All prefabs enabled';notifactionResetTime=time+2;
        },
        'isTogglable':true,'toolTip':'block dangerous prefabs'
    }),new _0x3d4c89({
        'buttonText':'Show Dangerous List',
        'isTogglable':false,
        'toolTip':'show dangerous list',
        'method':()=>{currentNotification='Dangerous: '+dangerousPrefabs.join(', ');notifactionResetTime=time+4;}
    }),
    new _0x3d4c89({
        'buttonText':'Helix Spawn (Selected)','isTogglable':false,
        'toolTip':'spawn a giant helix tower of selected prefab  spirals up above you',
        'method':()=>{
            try {
                if(time<n5HelixSpawnDelay){currentNotification='Helix cooldown';notifactionResetTime=time+1;return;}
                n5HelixSpawnDelay=time+4;
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp){currentNotification='no local player';notifactionResetTime=time+2;return;}
                const _myPos=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
                const _px=_myPos[0]||0, _py=_myPos[1]||0, _pz=_myPos[2]||0;
                const _prefabName=prefabList[prefabIndex];
                const _count=24; const _rBase=2.5; const _heightStep=0.9; const _rotStep=(Math.PI*2)/_count*3;
                let _spawned=0;
                for(let _i=0;_i<_count;_i++){
                    try{
                        if(disableDangerousPrefabs&&dangerousPrefabs.indexOf(_prefabName)>=0) break;
                        const _ang=_i*_rotStep;
                        const _r=_rBase+Math.sin(_i*0.4)*0.8;
                        const _off=[_px+Math.cos(_ang)*_r, _py+_i*_heightStep, _pz+Math.sin(_ang)*_r];
                        const _res=_0x5b9456(_prefabName,_off,_0x554b79);
                        if(_res!==null) _spawned++;
                    }catch(_){}
                }
                currentNotification=' Helix: '+_spawned+'/'+_count+' spawned'; notifactionResetTime=time+3;
            }catch(_e){console.error('[HelixSpawn]',_e); currentNotification='Helix err: '+_e; notifactionResetTime=time+3;}
        }
    }),new _0x3d4c89({
        'buttonText':'Helix Spawn (Item Gun)','isTogglable':false,
        'toolTip':'spawn helix tower of selected item at gun pointer',
        'method':()=>{
            try {
                if(time<n5HelixSpawnDelay){currentNotification='Helix cooldown';notifactionResetTime=time+1;return;}
                n5HelixSpawnDelay=time+4;
                const _g=_0x22649c(),_r=_g['ray'];
                if(!_r||_r['isNull']()){currentNotification='no gun ray';notifactionResetTime=time+2;return;}
                const _origin=_r['method'](_0x476e10['avlli'])['invoke']();
                const _ox=_origin[0]||0, _oy=_origin[1]||0, _oz=_origin[2]||0;
                const _count=20; const _rBase=2.0; const _heightStep=1.0; const _rotStep=(Math.PI*2)/_count*3;
                let _spawned=0;
                for(let _i=0;_i<_count;_i++){
                    try{
                        const _ang=_i*_rotStep;
                        const _rr=_rBase+Math.sin(_i*0.5)*0.7;
                        const _off=[_ox+Math.cos(_ang)*_rr, _oy+_i*_heightStep, _oz+Math.sin(_ang)*_rr];
                        const _res=_0x1e0b92['method'](_0x476e10['uZRqq'],4)['invoke'](Il2Cpp['string']('item_prefab/'+itemIDs[itemIndex]),_off,_0x554b79,_0x2f880d);
                        if(_res!==null&&!(_res['handle']&&_res['handle']['isNull']())) _spawned++;
                    }catch(_){}
                }
                currentNotification=' Item Helix: '+_spawned+'/'+_count; notifactionResetTime=time+3;
            }catch(_e){console.error('[HelixItemGun]',_e);}
        }
    }),
    new _0x3d4c89({
        buttonText: 'Angler Orbit',
        method: () => {
            const center = _0xa03cc7['class']('AnimalCompany.PlayerController').method('get_instance').invoke().method('get_head').invoke();
            function spawnOrbitObj() {
                orbiters = [];
                for (let i = 0; i < 16; i++) {
                    let angle = Math.PI * 2 / 8 * i;
                    const offset = _0xe4d316.alloc();
                    offset.method('.ctor').overload('System.Single','System.Single','System.Single').invoke(Math.cos(angle)*6.5, 0, Math.sin(angle)*6.5);
                    let cp = center.method('get_position').invoke();
                    let sp = _0xe4d316.method('op_Addition').invoke(cp, [offset.field('x').value, offset.field('y').value, offset.field('z').value]);
                    let no = _0x5b9456('AnglerController', sp, _0x4088e6.method('get_identity').invoke());
                    if (!no) continue;
                    orbitprefabs.push(no);
                    let tf = no.method('get_gameObject').invoke().method('get_transform').invoke();
                    orbiters.push({ transform: tf, angle });
                }
            }
            if (orbitprefabs.length < 16) spawnOrbitObj();
            let delta = _0x5be904.method('get_deltaTime').invoke();
            let cp = center.method('get_position').invoke();
            for (let orb of orbiters) {
                orb.angle += 1.5 * delta;
                const off = _0xe4d316.alloc();
                off.method('.ctor').overload('System.Single','System.Single','System.Single').invoke(Math.cos(orb.angle)*6.5, 0, Math.sin(orb.angle)*6.5);
                orb.transform.method('set_position').invoke(_0xe4d316.method('op_Addition').invoke(cp, [off.field('x').value, off.field('y').value, off.field('z').value]));
            }
        },
        disableMethod: () => {
            for (let p of orbitprefabs) { if (!p) continue; try { p.method('get_Runner').invoke().method('Despawn').invoke(p); } catch(_) {} }
            orbitprefabs = []; orbiters = [];
        },
        isTogglable: true,
        toolTip: 'Creates 16 Anglers that orbit you.'
    }),
    new _0x3d4c89({
        buttonText: 'Selling Machine Orbit',
        method: () => {
            const center = _0xa03cc7['class']('AnimalCompany.PlayerController').method('get_instance').invoke().method('get_head').invoke();
            function spawnOrbitObj() {
                orbiters = [];
                for (let i = 0; i < 16; i++) {
                    let angle = Math.PI * 2 / 8 * i;
                    const offset = _0xe4d316.alloc();
                    offset.method('.ctor').overload('System.Single','System.Single','System.Single').invoke(Math.cos(angle)*6.5, 0, Math.sin(angle)*6.5);
                    let cp = center.method('get_position').invoke();
                    let sp = _0xe4d316.method('op_Addition').invoke(cp, [offset.field('x').value, offset.field('y').value, offset.field('z').value]);
                    let no = _0x5b9456('ItemSellingMachineController', sp, _0x4088e6.method('get_identity').invoke());
                    if (!no) continue;
                    orbitprefabs.push(no);
                    let tf = no.method('get_gameObject').invoke().method('get_transform').invoke();
                    orbiters.push({ transform: tf, angle });
                }
            }
            if (orbitprefabs.length < 16) spawnOrbitObj();
            let delta = _0x5be904.method('get_deltaTime').invoke();
            let cp = center.method('get_position').invoke();
            for (let orb of orbiters) {
                orb.angle += 1.5 * delta;
                const off = _0xe4d316.alloc();
                off.method('.ctor').overload('System.Single','System.Single','System.Single').invoke(Math.cos(orb.angle)*6.6, 0, Math.sin(orb.angle)*6.6);
                orb.transform.method('set_position').invoke(_0xe4d316.method('op_Addition').invoke(cp, [off.field('x').value, off.field('y').value, off.field('z').value]));
            }
        },
        disableMethod: () => {
            for (let p of orbitprefabs) { if (!p) continue; try { p.method('get_Runner').invoke().method('Despawn').invoke(p); } catch(_) {} }
            orbitprefabs = []; orbiters = [];
        },
        isTogglable: true,
        toolTip: 'Orbits selling machines around you.'
    }),
    new _0x3d4c89({
        buttonText: 'Ogre Orbit',
        method: () => {
            const center = _0xa03cc7['class']('AnimalCompany.PlayerController').method('get_instance').invoke().method('get_head').invoke();
            function spawnOrbitObj() {
                orbiters = [];
                for (let i = 0; i < 16; i++) {
                    let angle = Math.PI * 2 / 8 * i;
                    const offset = _0xe4d316.alloc();
                    offset.method('.ctor').overload('System.Single','System.Single','System.Single').invoke(Math.cos(angle)*6.5, 0, Math.sin(angle)*6.5);
                    let cp = center.method('get_position').invoke();
                    let sp = _0xe4d316.method('op_Addition').invoke(cp, [offset.field('x').value, offset.field('y').value, offset.field('z').value]);
                    let no = _0x5b9456('GiantController', sp, _0x4088e6.method('get_identity').invoke());
                    if (!no) continue;
                    orbitprefabs.push(no);
                    let tf = no.method('get_gameObject').invoke().method('get_transform').invoke();
                    orbiters.push({ transform: tf, angle });
                }
            }
            if (orbitprefabs.length < 16) spawnOrbitObj();
            let delta = _0x5be904.method('get_deltaTime').invoke();
            let cp = center.method('get_position').invoke();
            for (let orb of orbiters) {
                orb.angle += 1.5 * delta;
                const off = _0xe4d316.alloc();
                off.method('.ctor').overload('System.Single','System.Single','System.Single').invoke(Math.cos(orb.angle)*6.6, 0, Math.sin(orb.angle)*6.6);
                orb.transform.method('set_position').invoke(_0xe4d316.method('op_Addition').invoke(cp, [off.field('x').value, off.field('y').value, off.field('z').value]));
            }
        },
        disableMethod: () => {
            for (let p of orbitprefabs) { if (!p) continue; try { p.method('get_Runner').invoke().method('Despawn').invoke(p); } catch(_) {} }
            orbitprefabs = []; orbiters = [];
        },
        isTogglable: true,
        toolTip: 'Orbits Giants around you.'
    }),
    new _0x3d4c89({
        buttonText: 'Christmas Box Orbit',
        method: () => {
            const center = _0xa03cc7['class']('AnimalCompany.PlayerController').method('get_instance').invoke().method('get_head').invoke();
            function spawnOrbitObj() {
                orbiters = [];
                for (let i = 0; i < 16; i++) {
                    let angle = Math.PI * 2 / 8 * i;
                    const offset = _0xe4d316.alloc();
                    offset.method('.ctor').overload('System.Single','System.Single','System.Single').invoke(Math.cos(angle)*6.5, 0, Math.sin(angle)*6.5);
                    let cp = center.method('get_position').invoke();
                    let sp = _0xe4d316.method('op_Addition').invoke(cp, [offset.field('x').value, offset.field('y').value, offset.field('z').value]);
                    let no = _0x5b9456('ChristmasBox', sp, _0x4088e6.method('get_identity').invoke());
                    if (!no) continue;
                    orbitprefabs.push(no);
                    let tf = no.method('get_gameObject').invoke().method('get_transform').invoke();
                    orbiters.push({ transform: tf, angle });
                }
            }
            if (orbitprefabs.length < 16) spawnOrbitObj();
            let delta = _0x5be904.method('get_deltaTime').invoke();
            let cp = center.method('get_position').invoke();
            for (let orb of orbiters) {
                orb.angle += 1.5 * delta;
                const off = _0xe4d316.alloc();
                off.method('.ctor').overload('System.Single','System.Single','System.Single').invoke(Math.cos(orb.angle)*6.6, 0, Math.sin(orb.angle)*6.6);
                orb.transform.method('set_position').invoke(_0xe4d316.method('op_Addition').invoke(cp, [off.field('x').value, off.field('y').value, off.field('z').value]));
            }
        },
        disableMethod: () => {
            for (let p of orbitprefabs) { if (!p) continue; try { p.method('get_Runner').invoke().method('Despawn').invoke(p); } catch(_) {} }
            orbitprefabs = []; orbiters = [];
        },
        isTogglable: true,
        toolTip: 'Orbits Christmas Boxes around you.'
    }),
    new _0x3d4c89({
        buttonText: 'Buggy Orbit',
        method: () => {
            const center = _0xa03cc7['class']('AnimalCompany.PlayerController').method('get_instance').invoke().method('get_head').invoke();
            function spawnOrbitObj() {
                orbiters = [];
                for (let i = 0; i < 16; i++) {
                    let angle = Math.PI * 2 / 8 * i;
                    const offset = _0xe4d316.alloc();
                    offset.method('.ctor').overload('System.Single','System.Single','System.Single').invoke(Math.cos(angle)*6.5, 0, Math.sin(angle)*6.5);
                    let cp = center.method('get_position').invoke();
                    let sp = _0xe4d316.method('op_Addition').invoke(cp, [offset.field('x').value, offset.field('y').value, offset.field('z').value]);
                    let no = _0x5b9456('Vehicle_Buggy', sp, _0x4088e6.method('get_identity').invoke());
                    if (!no) continue;
                    orbitprefabs.push(no);
                    let tf = no.method('get_gameObject').invoke().method('get_transform').invoke();
                    orbiters.push({ transform: tf, angle });
                }
            }
            if (orbitprefabs.length < 16) spawnOrbitObj();
            let delta = _0x5be904.method('get_deltaTime').invoke();
            let cp = center.method('get_position').invoke();
            for (let orb of orbiters) {
                orb.angle += 1.5 * delta;
                const off = _0xe4d316.alloc();
                off.method('.ctor').overload('System.Single','System.Single','System.Single').invoke(Math.cos(orb.angle)*6.6, 0, Math.sin(orb.angle)*6.6);
                orb.transform.method('set_position').invoke(_0xe4d316.method('op_Addition').invoke(cp, [off.field('x').value, off.field('y').value, off.field('z').value]));
            }
        },
        disableMethod: () => {
            for (let p of orbitprefabs) { if (!p) continue; try { p.method('get_Runner').invoke().method('Despawn').invoke(p); } catch(_) {} }
            orbitprefabs = []; orbiters = [];
        },
        isTogglable: true,
        toolTip: 'Orbits buggies around you.'
    }),
    new _0x3d4c89({
        buttonText: 'Leaderboard Orbit',
        method: () => {
            const center = _0xa03cc7['class']('AnimalCompany.PlayerController').method('get_instance').invoke().method('get_head').invoke();
            function spawnOrbitObj() {
                orbiters = [];
                for (let i = 0; i < 16; i++) {
                    let angle = Math.PI * 2 / 8 * i;
                    const offset = _0xe4d316.alloc();
                    offset.method('.ctor').overload('System.Single','System.Single','System.Single').invoke(Math.cos(angle)*6.5, 0, Math.sin(angle)*6.5);
                    let cp = center.method('get_position').invoke();
                    let sp = _0xe4d316.method('op_Addition').invoke(cp, [offset.field('x').value, offset.field('y').value, offset.field('z').value]);
                    let no = _0x5b9456('HordeMobLobbyHandler', sp, _0x4088e6.method('get_identity').invoke());
                    if (!no) continue;
                    orbitprefabs.push(no);
                    let tf = no.method('get_gameObject').invoke().method('get_transform').invoke();
                    orbiters.push({ transform: tf, angle });
                }
            }
            if (orbitprefabs.length < 16) spawnOrbitObj();
            let delta = _0x5be904.method('get_deltaTime').invoke();
            let cp = center.method('get_position').invoke();
            for (let orb of orbiters) {
                orb.angle += 1.5 * delta;
                const off = _0xe4d316.alloc();
                off.method('.ctor').overload('System.Single','System.Single','System.Single').invoke(Math.cos(orb.angle)*6.6, 0, Math.sin(orb.angle)*6.6);
                orb.transform.method('set_position').invoke(_0xe4d316.method('op_Addition').invoke(cp, [off.field('x').value, off.field('y').value, off.field('z').value]));
            }
        },
        disableMethod: () => {
            for (let p of orbitprefabs) { if (!p) continue; try { p.method('get_Runner').invoke().method('Despawn').invoke(p); } catch(_) {} }
            orbitprefabs = []; orbiters = [];
        },
        isTogglable: true,
        toolTip: 'Orbits HordeMobLobbyHandlers around you.'
    }),
    new _0x3d4c89({
        'buttonText':'Control Prefab','isTogglable':true,
        'toolTip':'grab nearest prefab to you and move it with thumbsticks  L-stick fwd/back/strafe, R-stick up/down. Press Stop Controlling below to release.',
        'enableMethod':()=>{
            try {
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp){currentNotification='no local player';notifactionResetTime=time+2;return;}
                const _myPos=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
                let _netObjCls=null;
                try{_netObjCls=Il2Cpp.domain.assembly('Fusion.Runtime').image.class('Fusion.NetworkObject');}catch(_){}
                if(!_netObjCls){currentNotification='Fusion not found';notifactionResetTime=time+2;return;}
                const _all=_0x1f7740['method'](_0x476e10['AajWa'],2)['inflate'](_netObjCls)['invoke'](0);
                let _best=null,_bestD=999;
                for(let _i=0;_all&&_i<_all['length'];_i++){
                    try{
                        const _o=_all['get'](_i);
                        if(!_o||_o['handle']['isNull']())continue;
                        try{if(_o['method'](_0x476e10['qTups'])['invoke']())continue;}catch(_){}
                        const _d=_0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_myPos,_0xc4cf2f(_o)['method'](_0x476e10['YApVv'])['invoke']());
                        if(_d<_bestD){_bestD=_d;_best=_o;}
                    }catch(_){}
                }
                if(_best){
                    n5ControlledPrefab=_best;
                    n5ControlPrefabEnabled=true;
                    n5ControlPrefabVel=[0,0,0];
                    currentNotification=' Controlling prefab (dist '+_bestD.toFixed(1)+'m)  use thumbsticks';
                } else {
                    currentNotification='No prefab found nearby';
                }
                notifactionResetTime=time+3;
            }catch(_e){console.error('[ControlPrefab enable]',_e);}
        },
        'disableMethod':()=>{
            n5ControlledPrefab=null; n5ControlPrefabEnabled=false;
            currentNotification=' Stopped controlling prefab'; notifactionResetTime=time+2;
        },
        'method':()=>{
            if(!n5ControlPrefabEnabled||!n5ControlledPrefab)return;
            try{
                if(n5ControlledPrefab['handle']['isNull']()){ n5ControlledPrefab=null; n5ControlPrefabEnabled=false; return; }
                let _lx=0,_ly=0,_rx=0,_ry=0;
                try {
                    const _devs=_0xa03cc7['class'](_0x476e10['bfioC'])['method']('GetFeatureValue',3);
                    if(leftStick){_ly=1;}
                } catch(_){}
                const _spd=3.5*deltaTime;
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                const _fwd=_lp?_0xc4cf2f(_lp)['method'](_0x476e10['itVwD'])['invoke']():[0,0,1];
                const _curPos=_0xc4cf2f(n5ControlledPrefab)['method'](_0x476e10['YApVv'])['invoke']();
                const _dx=(_fwd[0]||0)*_spd*_ly + (_fwd[2]||0)*_spd*_lx;
                const _dy=(rightStick?1:(leftPrimary?-1:0))*_spd*2;
                const _dz=(_fwd[2]||0)*_spd*_ly;
                const _newPos=[(_curPos[0]||0)+_dx,(_curPos[1]||0)+_dy,(_curPos[2]||0)+_dz];
                _0xc4cf2f(n5ControlledPrefab)['method'](_0x476e10['ZKeBc'])['invoke'](_newPos);
                if(currentNotification===''){currentNotification=' L-stick=fwd, R-stick-click=up, A=down'; notifactionResetTime=time+2;}
            }catch(_e){n5ControlledPrefab=null;n5ControlPrefabEnabled=false;}
        }
    }),new _0x3d4c89({
        'buttonText':'Stop Controlling','isTogglable':false,
        'toolTip':'release the prefab you are controlling',
        'method':()=>{
            n5ControlledPrefab=null; n5ControlPrefabEnabled=false;
            currentNotification='Released prefab control'; notifactionResetTime=time+2;
        }
    }),
    new _0x3d4c89({
        'buttonText':'Become Prefab','isTogglable':true,
        'toolTip':'a prefab follows you everywhere you go  it becomes you',
        'enableMethod':()=>{
            try {
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp){currentNotification='no local player';notifactionResetTime=time+2;return;}
                const _pos=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
                const _res=_0x5b9456(prefabList[prefabIndex],_pos,_0x554b79);
                if(_res){
                    n5BecomePrefabObj=_res;
                    n5BecomePrefabEnabled=true;
                    currentNotification=' You are now: '+prefabList[prefabIndex];
                } else {
                    currentNotification='Become Prefab: spawn failed';
                }
                notifactionResetTime=time+3;
            }catch(_e){console.error('[BecomePrefab enable]',_e);}
        },
        'disableMethod':()=>{
            if(n5BecomePrefabObj){
                try{
                    const _runner=_0x1e0b92['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['RhZfj'])['invoke']();
                    try{_runner['method']('Despawn',1)['invoke'](n5BecomePrefabObj);}catch(_){try{_0xc4cf2f(n5BecomePrefabObj)['method'](_0x476e10['ZKeBc'])['invoke']([0,-99999,0]);}catch(_2){}}
                }catch(_){}
            }
            n5BecomePrefabObj=null; n5BecomePrefabEnabled=false;
            currentNotification=' Stopped being a prefab'; notifactionResetTime=time+2;
        },
        'method':()=>{
            if(!n5BecomePrefabEnabled||!n5BecomePrefabObj)return;
            try{
                if(n5BecomePrefabObj['handle']['isNull']()){n5BecomePrefabObj=null;n5BecomePrefabEnabled=false;return;}
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_lp)return;
                const _myPos=_0xc4cf2f(_lp)['method'](_0x476e10['YApVv'])['invoke']();
                const _offset=[0, 0.5, 0];
                _0xc4cf2f(n5BecomePrefabObj)['method'](_0x476e10['ZKeBc'])['invoke']([(_myPos[0]||0)+_offset[0],(_myPos[1]||0)+_offset[1],(_myPos[2]||0)+_offset[2]]);
            }catch(_e){n5BecomePrefabObj=null;n5BecomePrefabEnabled=false;}
        }
    })],

    [new _0x3d4c89({
        'buttonText':'<< Back','isTogglable':false,'toolTip':'back',
        'method':()=>{currentCategory=0;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Refresh List','isTogglable':false,
        'toolTip':'refresh wl',
        'method':()=>{
            if(whitelist.length===0){
                currentNotification='Whitelist is empty';
            } else {
                const _names=[];
                for(let _i=0;_i<whitelist.length;_i++){
                    const _pl=whitelist[_i];
                    if(!_pl||_pl['handle']['isNull']()) continue;
                    try { _names.push(_pl['method'](_0x476e10['LdzTO'])['invoke']()['toString']().split('@')[0]); } catch(_e){ _names.push('Player '+_i); }
                }
                currentNotification='WL ('+whitelist.length+'): '+_names.join(', ');
            }
            notifactionResetTime=time+5;
        }
    }),new _0x3d4c89({
        'buttonText':'Clear Whitelist','isTogglable':false,
        'toolTip':'clear wl',
        'method':()=>{
            const _cnt=whitelist.length;
            whitelist.length=0;
            currentNotification='Cleared '+_cnt+' from whitelist';notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Remove Last','isTogglable':false,
        'toolTip':'remove last from wl',
        'method':()=>{
            if(whitelist.length===0){currentNotification='Whitelist empty';notifactionResetTime=time+2;return;}
            const _pl=whitelist.pop();
            try {
                const _name=_pl['method'](_0x476e10['LdzTO'])['invoke']()['toString']().split('@')[0];
                currentNotification='Removed: '+_name;
            } catch(_e){ currentNotification='Removed from whitelist'; }
            notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'WL Count','isTogglable':false,
        'toolTip':'wl count',
        'method':()=>{currentNotification='Whitelisted: '+whitelist.length+' player(s)';notifactionResetTime=time+3;}
    }),new _0x3d4c89({
        'buttonText':'Print Names','isTogglable':false,
        'toolTip':'print wl names',
        'method':()=>{
            if(whitelist.length===0){console.log('[WL] Empty');currentNotification='WL empty';notifactionResetTime=time+2;return;}
            console.log('[WL] Whitelisted players ('+whitelist.length+'):');
            for(let _i=0;_i<whitelist.length;_i++){
                const _pl=whitelist[_i];
                if(!_pl||_pl['handle']['isNull']()) {console.log('  ['+_i+'] (invalid)');continue;}
                try { console.log('  ['+_i+'] '+_pl['method'](_0x476e10['LdzTO'])['invoke']()['toString']()); } catch(_e){ console.log('  ['+_i+'] (name error)'); }
            }
            currentNotification='Printed '+whitelist.length+' names to console';notifactionResetTime=time+2;
        }
    })],

    [new _0x3d4c89({
        'buttonText':'<< Back','isTogglable':false,'toolTip':'back',
        'method':()=>{currentCategory=0;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Start Timebomb Timers',
        'isTogglable':false,
        'toolTip':'starts the visible TimeBomb countdown/tick coroutine',
        'method':()=>{n5StartAllTimebombTimers(3);}
    }),new _0x3d4c89({
        'buttonText':'Activate All Timebombs',
        'isTogglable':false,
        'toolTip':'calls TimeBomb/HandExplosive explosion RPC paths on every live bomb',
        'method':()=>{n5ActivateAllTimebombs(true);}
    }),new _0x3d4c89({
        'buttonText':'Block ApplyBuff',
        'isTogglable':true,'enabled':true,
        'toolTip':'Block RPC_ApplyBuff on your player (prevents forced buff effects)',
        'enableMethod': ()=>{ n5RpcBlocks['ApplyBuff']=true;  currentNotification=' ApplyBuff BLOCKED'; notifactionResetTime=time+2; },
        'disableMethod':()=>{ n5RpcBlocks['ApplyBuff']=false; currentNotification=' ApplyBuff ALLOWED'; notifactionResetTime=time+2; }
    }),new _0x3d4c89({
        'buttonText':'Block AddForce',
        'isTogglable':true,'enabled':true,
        'toolTip':'Block RPC_AddForce on your player (prevents being launched)',
        'enableMethod': ()=>{ n5RpcBlocks['AddForce']=true;  currentNotification=' AddForce BLOCKED'; notifactionResetTime=time+2; },
        'disableMethod':()=>{ n5RpcBlocks['AddForce']=false; currentNotification=' AddForce ALLOWED'; notifactionResetTime=time+2; }
    }),new _0x3d4c89({
        'buttonText':'Block Teleport',
        'isTogglable':true,'enabled':true,
        'toolTip':'Block RPC_Teleport on your player (prevents being moved)',
        'enableMethod': ()=>{ n5RpcBlocks['Teleport']=true;  currentNotification=' Teleport BLOCKED'; notifactionResetTime=time+2; },
        'disableMethod':()=>{ n5RpcBlocks['Teleport']=false; currentNotification=' Teleport ALLOWED'; notifactionResetTime=time+2; }
    }),new _0x3d4c89({
        'buttonText':'Block Stinky',
        'isTogglable':true,'enabled':true,
        'toolTip':'Block RPC_TagAsStinky on your player',
        'enableMethod': ()=>{ n5RpcBlocks['Stinky']=true;  currentNotification=' Stinky BLOCKED'; notifactionResetTime=time+2; },
        'disableMethod':()=>{ n5RpcBlocks['Stinky']=false; currentNotification=' Stinky ALLOWED'; notifactionResetTime=time+2; }
    }),new _0x3d4c89({
        'buttonText':'Block Stun',
        'isTogglable':true,'enabled':true,
        'toolTip':'Block RPC_PlayerStun on your player',
        'enableMethod': ()=>{ n5RpcBlocks['Stun']=true;  currentNotification=' Stun BLOCKED'; notifactionResetTime=time+2; },
        'disableMethod':()=>{ n5RpcBlocks['Stun']=false; currentNotification=' Stun ALLOWED'; notifactionResetTime=time+2; }
    }),new _0x3d4c89({
        'buttonText':'Block SetColor',
        'isTogglable':true,'enabled':true,
        'toolTip':'Block RPC_SetColor on your player (prevents color grief)',
        'enableMethod': ()=>{ n5RpcBlocks['SetColor']=true;  currentNotification=' SetColor BLOCKED'; notifactionResetTime=time+2; },
        'disableMethod':()=>{ n5RpcBlocks['SetColor']=false; currentNotification=' SetColor ALLOWED'; notifactionResetTime=time+2; }
    }),new _0x3d4c89({
        'buttonText':'Block KickPlayer',
        'isTogglable':true,'enabled':true,
        'toolTip':'Block NetSessionRPCs::KickPlayer (prevents being kicked)',
        'enableMethod': ()=>{ n5RpcBlocks['KickPlayer']=true;  currentNotification=' KickPlayer BLOCKED'; notifactionResetTime=time+2; },
        'disableMethod':()=>{ n5RpcBlocks['KickPlayer']=false; currentNotification=' KickPlayer ALLOWED'; notifactionResetTime=time+2; }
    }),new _0x3d4c89({
        'buttonText':'Block ALL',
        'isTogglable':false,
        'toolTip':'Enable all RPC blocks at once',
        'method':()=>{
            Object.keys(n5RpcBlocks).forEach(k=>n5RpcBlocks[k]=true);

            ['Block ApplyBuff','Block AddForce','Block Teleport','Block Stinky','Block Stun','Block SetColor','Block KickPlayer'].forEach(n=>{
                const _b=_0x564127.get(n); if(_b)_b['enabled']=true;
            });
            _n5MenuLastCat=-1; _n5FlatDirty=true;
            currentNotification=' ALL RPCs BLOCKED'; notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Allow ALL',
        'isTogglable':false,
        'toolTip':'Disable all RPC blocks at once',
        'method':()=>{
            Object.keys(n5RpcBlocks).forEach(k=>n5RpcBlocks[k]=false);
            ['Block ApplyBuff','Block AddForce','Block Teleport','Block Stinky','Block Stun','Block SetColor','Block KickPlayer'].forEach(n=>{
                const _b=_0x564127.get(n); if(_b)_b['enabled']=false;
            });
            _n5MenuLastCat=-1; _n5FlatDirty=true;
            currentNotification=' ALL RPCs ALLOWED'; notifactionResetTime=time+2;
        }
    })],
    [new _0x3d4c89({
        'buttonText':'<< Back','isTogglable':false,'toolTip':'back',
        'method':()=>{currentCategory=0;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Harry','isTogglable':false,
        'toolTip':'harry',
        'method':()=>{currentNotification='Harry  menu UI & core functions';notifactionResetTime=time+5;}
    }),new _0x3d4c89({
        'buttonText':'N5','isTogglable':false,
        'toolTip':'n5',
        'method':()=>{currentNotification='N5  improved menu, alot more functions added, overlay completely redesigned';notifactionResetTime=time+5;}
    }),new _0x3d4c89({
        'buttonText':'View Full Credits','isTogglable':false,
        'toolTip':'full credits',
        'method':()=>{currentNotification='Harry made the menu UI & some functions  |  N5 added more, improved menu, overlay redesigned';notifactionResetTime=time+7;}
    })],
    [new _0x3d4c89({
        'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main',
        'method':()=>{currentCategory=0;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Gun Pos Selected Quiver','isTogglable':false,'toolTip':'spawn modded quiver at gun pointer with 15 selected item IDs',
        'method':()=>{const _g=_0x22649c(),_p=_g['point'];n5SpawnModdedQuiverAt(_p||_0x35ade8['method'](_0x476e10['YApVv'])['invoke'](),itemIDs[itemIndex],15);}
    }),new _0x3d4c89({
        'buttonText':'Selected Quiver Launcher','isTogglable':true,'toolTip':'hold right grip + trigger to spawn selected-item quiver at gun pointer',
        'method':()=>{if(!rightGrab||!rightTrigger||time<n5OrbitFuckeryShootDelay)return;n5OrbitFuckeryShootDelay=time;const _g=_0x22649c(),_p=_g['point'];n5SpawnModdedQuiverAt(_p,itemIDs[itemIndex],15);}
    }),new _0x3d4c89({
        'buttonText':'Titan Suitcase','isTogglable':false,'toolTip':'quiver stuffed with 15 pelican cases',
        'method':()=>{
            try {
                const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
                const _bag=n5SpawnContainerItemAt('item_quiver',_pos,_0x554b79);
                if(!_bag||_bag['handle']['isNull']()){ currentNotification='bag spawn failed';notifactionResetTime=time+2;return; }
                let _con=null;
                _con=n5GetContainerFromItem(_bag);
                if(!_con||_con['handle']['isNull']()){currentNotification='no container on quiver';notifactionResetTime=time+2;return;}
                let _filled=0;
                for(let _i=0;_i<15;_i++){
                    try{
                        const _it=n5SpawnContainerItemAt('item_pelican_case',_pos,_0x554b79);
                        if(n5AddItemObjectToContainer(_it,_con)) _filled++;
                    }catch(_){}
                }
                currentNotification='Titan Suitcase: '+_filled+'/15 loaded';notifactionResetTime=time+3;
            }catch(_e){console.error('[TitanSuitcase]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Random Quiver','isTogglable':false,'toolTip':'quiver stuffed with 15 random items',
        'method':()=>{
            try {
                const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
                const _bag=n5SpawnContainerItemAt('item_quiver',_pos,_0x554b79);
                if(!_bag||_bag['handle']['isNull']()){currentNotification='bag spawn failed';notifactionResetTime=time+2;return;}
                let _con=null;
                _con=n5GetContainerFromItem(_bag);
                if(!_con||_con['handle']['isNull']()){currentNotification='no container on quiver';notifactionResetTime=time+2;return;}
                let _filled=0;
                for(let _i=0;_i<15;_i++){
                    const _id=itemIDs[Math.floor(Math.random()*itemIDs.length)];
                    try{
                        const _it=n5SpawnContainerItemAt(_id,_pos,_0x554b79);
                        if(n5AddItemObjectToContainer(_it,_con)) _filled++;
                    }catch(_){}
                }
                currentNotification='Random Quiver: '+_filled+'/15 loaded';notifactionResetTime=time+3;
            }catch(_e){console.error('[RandomQuiver]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Arena Pistol Quiver','isTogglable':false,'toolTip':'quiver stuffed with 15 arena pistols',
        'method':()=>{
            try {
                const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
                const _bag=n5SpawnContainerItemAt('item_quiver',_pos,_0x554b79);
                if(!_bag||_bag['handle']['isNull']()){currentNotification='bag spawn failed';notifactionResetTime=time+2;return;}
                let _con=null;
                _con=n5GetContainerFromItem(_bag);
                if(!_con||_con['handle']['isNull']()){currentNotification='no container on quiver';notifactionResetTime=time+2;return;}
                let _filled=0;
                for(let _i=0;_i<15;_i++){
                    try{
                        const _it=n5SpawnContainerItemAt('item_arena_pistol',_pos,_0x554b79);
                        if(n5AddItemObjectToContainer(_it,_con)) _filled++;
                    }catch(_){}
                }
                currentNotification='Pistol Quiver: '+_filled+'/15 loaded';notifactionResetTime=time+3;
            }catch(_e){console.error('[PistolQuiver]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Suitcase Quiver','isTogglable':false,'toolTip':'quivers inside quivers',
        'method':()=>{
            try {
                const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
                const _outer=n5SpawnContainerItemAt('item_quiver',_pos,_0x554b79);
                if(!_outer||_outer['handle']['isNull']()){currentNotification='outer bag spawn failed';notifactionResetTime=time+2;return;}
                let _outerCon=null;
                _outerCon=n5GetContainerFromItem(_outer);
                if(!_outerCon||_outerCon['handle']['isNull']()){currentNotification='no container on outer quiver';notifactionResetTime=time+2;return;}
                let _filled=0;
                for(let _i=0;_i<15;_i++){
                    try{
                        const _inner=n5SpawnContainerItemAt('item_quiver',_pos,_0x554b79);
                        if(n5AddItemObjectToContainer(_inner,_outerCon)) _filled++;
                    }catch(_){}
                }
                currentNotification='Suitcase Quiver: '+_filled+'/15 nested';notifactionResetTime=time+3;
            }catch(_e){console.error('[SuitcaseQuiver]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Make Your Own Quiver','isTogglable':false,'toolTip':'spawns a quiver with your custom-chosen items per slot  use Slot< Slot> and Select Slot below',
        'method':()=>{
            try {
                const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
                const _bag=n5SpawnContainerItemAt('item_quiver',_pos,_0x554b79);
                if(!_bag||_bag['handle']['isNull']()){currentNotification='quiver spawn failed';notifactionResetTime=time+2;return;}
                let _con=null;
                _con=n5GetContainerFromItem(_bag);
                if(!_con||_con['handle']['isNull']()){currentNotification='no container';notifactionResetTime=time+2;return;}
                let _filled=0;
                for(let _i=0;_i<n5QuiverSlots.length;_i++){
                    try{
                        const _sid=n5QuiverSlots[_i]||itemIDs[itemIndex];
                        const _it=n5SpawnContainerItemAt(_sid,_pos,_0x554b79);
                        if(n5AddItemObjectToContainer(_it,_con)) _filled++;
                    }catch(_){}
                }
                currentNotification='Custom Quiver: '+_filled+'/'+n5QuiverSlots.length+' loaded';notifactionResetTime=time+3;
            }catch(_e){console.error('[CustomQuiver]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Slot< Prev Quiver Slot','isTogglable':false,'toolTip':'go to previous quiver slot to configure',
        'method':()=>{
            n5QuiverSlotIndex=((n5QuiverSlotIndex-1)+n5QuiverSlots.length)%n5QuiverSlots.length;
            currentNotification='Slot '+(n5QuiverSlotIndex+1)+'/'+n5QuiverSlots.length+': '+n5QuiverSlots[n5QuiverSlotIndex];
            notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Slot> Next Quiver Slot','isTogglable':false,'toolTip':'go to next quiver slot to configure',
        'method':()=>{
            n5QuiverSlotIndex=(n5QuiverSlotIndex+1)%n5QuiverSlots.length;
            currentNotification='Slot '+(n5QuiverSlotIndex+1)+'/'+n5QuiverSlots.length+': '+n5QuiverSlots[n5QuiverSlotIndex];
            notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Select Slot On','isTogglable':false,'toolTip':'assigns selected item ID to current quiver slot',
        'method':()=>{
            n5QuiverSlots[n5QuiverSlotIndex]=itemIDs[itemIndex];
            currentNotification='Slot '+(n5QuiverSlotIndex+1)+' = '+itemIDs[itemIndex];
            notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn Select Own','isTogglable':false,'toolTip':'spawns the custom quiver with your assigned slots',
        'method':()=>{
            try {
                const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
                const _bag=n5SpawnContainerItemAt('item_quiver',_pos,_0x554b79);
                if(!_bag||_bag['handle']['isNull']()){currentNotification='spawn failed';notifactionResetTime=time+2;return;}
                let _con=null;
                _con=n5GetContainerFromItem(_bag);
                if(!_con||_con['handle']['isNull']()){currentNotification='no container';notifactionResetTime=time+2;return;}
                let _filled=0;
                const _preview=[];
                for(let _i=0;_i<n5QuiverSlots.length;_i++){
                    try{
                        const _sid=n5QuiverSlots[_i]||itemIDs[itemIndex];
                        if(_i<4)_preview.push(_sid.replace('item_',''));
                        const _it=n5SpawnContainerItemAt(_sid,_pos,_0x554b79);
                        if(n5AddItemObjectToContainer(_it,_con)) _filled++;
                    }catch(_){}
                }
                currentNotification=' Spawned ['+_preview.join(', ')+'...]: '+_filled+'/'+n5QuiverSlots.length;
                notifactionResetTime=time+4;
            }catch(_e){console.error('[SpawnSelectOwn]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'View Slot Config','isTogglable':false,'toolTip':'show current quiver slot configuration',
        'method':()=>{
            const _lines=n5QuiverSlots.map((_s,_i)=>'S'+(_i+1)+':'+(_s||'?').replace('item_','')).join(' | ');
            currentNotification=_lines; notifactionResetTime=time+5;
        }
    }),new _0x3d4c89({
        'buttonText':'Reset Slots to Current ID','isTogglable':false,'toolTip':'fill all 15 quiver slots with current selected item',
        'method':()=>{
            for(let _i=0;_i<n5QuiverSlots.length;_i++) n5QuiverSlots[_i]=itemIDs[itemIndex];
            currentNotification='All slots = '+itemIDs[itemIndex]; notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn Quiver','isTogglable':false,'toolTip':'spawns a plain quiver at your position',
        'method':()=>{
            try{
                const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
                const _b=n5SpawnContainerItemAt('item_quiver',_pos,_0x554b79);
                currentNotification=(_b&&!_b['handle']['isNull']())?' Quiver spawned':'Quiver spawn failed';notifactionResetTime=time+2;
            }catch(_e){console.error('[SpawnQuiver]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn Heart Quiver','isTogglable':false,'toolTip':'spawns item_quiver_heart',
        'method':()=>{
            try{
                const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
                const _b=n5SpawnContainerItemAt('item_quiver_heart',_pos,_0x554b79);
                currentNotification=(_b&&!_b['handle']['isNull']())?' Heart Quiver spawned':'spawn failed';notifactionResetTime=time+2;
            }catch(_e){console.error('[SpawnHeartQuiver]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn Backpack (Base)','isTogglable':false,'toolTip':'spawns item_backpack_large_base',
        'method':()=>{
            try{
                const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
                const _b=n5SpawnContainerItemAt('item_backpack_large_base',_pos,_0x554b79);
                currentNotification=(_b&&!_b['handle']['isNull']())?' Backpack spawned':'spawn failed';notifactionResetTime=time+2;
            }catch(_e){console.error('[SpawnBackpack]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Make Your Own Backpack','isTogglable':false,'toolTip':'spawns a large backpack loaded with your selected item ID (x15)',
        'method':()=>{
            try {
                const _id=itemIDs[itemIndex];
                const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
                const _bag=n5SpawnContainerItemAt('item_backpack_large_base',_pos,_0x554b79);
                if(!_bag||_bag['handle']['isNull']()){currentNotification='backpack spawn failed';notifactionResetTime=time+2;return;}
                let _con=null;
                _con=n5GetContainerFromItem(_bag);
                if(!_con||_con['handle']['isNull']()){currentNotification='no container';notifactionResetTime=time+2;return;}
                let _filled=0;
                for(let _i=0;_i<15;_i++){
                    try{
                        const _it=n5SpawnContainerItemAt(_id,_pos,_0x554b79);
                        if(n5AddItemObjectToContainer(_it,_con)) _filled++;
                    }catch(_){}
                }
                currentNotification='Custom Backpack ['+_id+']: '+_filled+'/15';notifactionResetTime=time+3;
            }catch(_e){console.error('[CustomBackpack]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Random Backpack','isTogglable':false,'toolTip':'large backpack stuffed with 15 random items',
        'method':()=>{
            try {
                const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
                const _bag=n5SpawnContainerItemAt('item_backpack_large_base',_pos,_0x554b79);
                if(!_bag||_bag['handle']['isNull']()){currentNotification='backpack spawn failed';notifactionResetTime=time+2;return;}
                let _con=null;
                _con=n5GetContainerFromItem(_bag);
                if(!_con||_con['handle']['isNull']()){currentNotification='no container';notifactionResetTime=time+2;return;}
                let _filled=0;
                for(let _i=0;_i<15;_i++){
                    const _id=itemIDs[Math.floor(Math.random()*itemIDs.length)];
                    try{
                        const _it=n5SpawnContainerItemAt(_id,_pos,_0x554b79);
                        if(n5AddItemObjectToContainer(_it,_con)) _filled++;
                    }catch(_){}
                }
                currentNotification='Random Backpack: '+_filled+'/15 loaded';notifactionResetTime=time+3;
            }catch(_e){console.error('[RandomBackpack]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn All Backpack Variants','isTogglable':false,'toolTip':'spawns every backpack variant at your position',
        'method':()=>{
            const _backpackIDs=['item_backpack','item_backpack_black','item_backpack_green','item_backpack_large_base','item_backpack_large_basketball','item_backpack_large_clover','item_backpack_pink','item_backpack_small_base','item_backpack_white','item_backpack_with_flashlight'];
            try{
                const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
                let _spawned=0;
                for(const _id of _backpackIDs){
                    try{
                        const _off=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_pos,[0,0.15*_spawned,0]);
                        const _b=n5SpawnContainerItemAt(_id,_off,_0x554b79);
                        if(_b&&!_b['handle']['isNull']()) _spawned++;
                    }catch(_){}
                }
                currentNotification=' Spawned '+_spawned+'/'+_backpackIDs.length+' backpacks';notifactionResetTime=time+3;
            }catch(_e){console.error('[AllBackpacks]',_e);}
        }
    })],

    [new _0x3d4c89({
        'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main',
        'method':()=>{currentCategory=0;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Prefab +','isTogglable':false,'toolTip':'next prefab',
        'method':()=>{prefabIndex=(prefabIndex+1)%prefabList.length;currentNotification='PREFAB: '+prefabList[prefabIndex];notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Prefab -','isTogglable':false,'toolTip':'previous prefab',
        'method':()=>{prefabIndex=((prefabIndex-1)+prefabList.length)%prefabList.length;currentNotification='PREFAB: '+prefabList[prefabIndex];notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Item +','isTogglable':false,'toolTip':'next item',
        'method':()=>{itemIndex=(itemIndex+1)%itemIDs.length;currentNotification='ITEM: '+itemIDs[itemIndex];notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Item -','isTogglable':false,'toolTip':'previous item',
        'method':()=>{itemIndex=((itemIndex-1)+itemIDs.length)%itemIDs.length;currentNotification='ITEM: '+itemIDs[itemIndex];notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Mob +','isTogglable':false,'toolTip':'next mob',
        'method':()=>{mobIndex=(mobIndex+1)%mobIDs.length;currentNotification='MOB: '+mobIDs[mobIndex];notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Mob -','isTogglable':false,'toolTip':'previous mob',
        'method':()=>{mobIndex=((mobIndex-1)+mobIDs.length)%mobIDs.length;currentNotification='MOB: '+mobIDs[mobIndex];notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Random Item Color/Size','isTogglable':true,'toolTip':'randomizes color and size for item spawns/launcher',
        'enableMethod':()=>{n5RandomSpawnConfig=true;currentNotification='Random item config ON';notifactionResetTime=time+2;},
        'disableMethod':()=>{n5RandomSpawnConfig=false;currentNotification='Random item config OFF';notifactionResetTime=time+2;},
        'method':()=>{}
    }),new _0x3d4c89({
        'buttonText':'Spawn Selected Item','isTogglable':false,'toolTip':'spawn selected item at your right hand',
        'method':()=>{
            const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
            const _rot=_0x35ade8['method'](_0x476e10['YqqIM'])['invoke']();
            const _obj=n5SpawnConfiguredItemAt(itemIDs[itemIndex],_pos,_rot);
            currentNotification=_obj?'Spawned item: '+itemIDs[itemIndex]:'Item spawn failed';notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn Selected Mob','isTogglable':false,'toolTip':'spawn selected mob at your right hand',
        'method':()=>{
            const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
            const _rot=_0x35ade8['method'](_0x476e10['YqqIM'])['invoke']();
            const _obj=n5SpawnMobAt(mobIDs[mobIndex],_pos,_rot);
            currentNotification=_obj?'Spawned mob: '+mobIDs[mobIndex]:'Mob spawn failed';notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn Shark','isTogglable':false,'toolTip':'spawn BigSharkController at your right hand',
        'method':()=>{
            try{
                const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
                const _rot=_0x35ade8['method'](_0x476e10['YqqIM'])['invoke']();
                const _ok=n5SpawnMobAt('BigSharkController',_pos,_rot)||_0x5b9456('BigSharkController',_pos,_rot)||_0x5b9456('mob_prefab/BigSharkController',_pos,_rot);
                currentNotification=_ok?'Shark spawned':'Shark spawn failed';notifactionResetTime=time+2;
            }catch(_e){currentNotification='Shark spawn failed';notifactionResetTime=time+2;console.error('[N5 SpawnShark]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn Selected Prefab','isTogglable':false,'toolTip':'spawn selected network prefab at your right hand',
        'method':()=>{
            const _name=prefabList[prefabIndex];
            if(disableDangerousPrefabs && dangerousPrefabs.indexOf(_name)>=0){currentNotification='Dangerous prefab blocked';notifactionResetTime=time+2;return;}
            const _pos=_0x35ade8['method'](_0x476e10['YApVv'])['invoke']();
            const _rot=_0x35ade8['method'](_0x476e10['YqqIM'])['invoke']();
            const _obj=_0x5b9456(_name,_pos,_rot);
            currentNotification=_obj?'Spawned prefab: '+_name:'Prefab spawn failed';notifactionResetTime=time+2;
        }
    }),new _0x3d4c89({
        'buttonText':'Hold Selected Prefab',
        'isTogglable':true,
        'toolTip':'keeps selected prefab locked to right hand',
        'enableMethod':()=>{n5StartHeldPrefab(prefabList[prefabIndex]);},
        'disableMethod':()=>{n5StopHeldPrefab();},
        'method':()=>{n5UpdateHeldPrefab();}
    }),new _0x3d4c89({
        'buttonText':'Stop Holding Prefab',
        'isTogglable':false,
        'toolTip':'despawns the held prefab',
        'method':()=>{n5StopHeldPrefab();}
    }),new _0x3d4c89({
        'buttonText':'Prefab Gun','isTogglable':true,'toolTip':'hold right grip and trigger to spawn selected prefab at pointer',
        'method':()=>{
            if(!rightGrab)return;
            const _name=prefabList[prefabIndex];
            if(disableDangerousPrefabs && dangerousPrefabs.indexOf(_name)>=0){currentNotification='Dangerous prefab blocked';notifactionResetTime=time+2;return;}
            const _g=_0x22649c(),_r=_g['ray'],_p=_g['point'];
            if(!_p||!rightTrigger||time<n5OrbitFuckeryShootDelay)return;
            n5OrbitFuckeryShootDelay=time;
            _0x5b9456(_name,_r&&!_r['isNull']()?_r['method'](_0x476e10['avlli'])['invoke']():_p,_0x554b79);
        }
    }),new _0x3d4c89({
        'buttonText':'Projectile +','isTogglable':false,'toolTip':'next projectile prefab',
        'method':()=>{n5ProjectileIndex=(n5ProjectileIndex+1)%n5ProjectilePrefabs.length;currentNotification='Projectile: '+n5ProjectilePrefabs[n5ProjectileIndex];notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Projectile -','isTogglable':false,'toolTip':'previous projectile prefab',
        'method':()=>{n5ProjectileIndex=((n5ProjectileIndex-1)+n5ProjectilePrefabs.length)%n5ProjectilePrefabs.length;currentNotification='Projectile: '+n5ProjectilePrefabs[n5ProjectileIndex];notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Projectile Swapper','isTogglable':true,'toolTip':'flare gun shots also launch selected projectile',
        'enableMethod':()=>{n5ProjectileSwapEnabled=true;currentNotification='Projectile swap: '+n5ProjectilePrefabs[n5ProjectileIndex];notifactionResetTime=time+2;},
        'disableMethod':()=>{n5ProjectileSwapEnabled=false;},
        'method':()=>{}
    }),new _0x3d4c89({
        'buttonText':'Selected Projectile Gun','isTogglable':true,'toolTip':'hold right grip and trigger to launch selected projectile',
        'method':()=>{n5LaunchSelectedProjectile();}
    }),new _0x3d4c89({
        'buttonText':'Flare Lands Prefab','isTogglable':true,'toolTip':'flare gun target/impact spawns selected prefab',
        'enableMethod':()=>{n5FlarePrefabImpactEnabled=true;currentNotification='Flare prefab ON: '+prefabList[prefabIndex];notifactionResetTime=time+2;},
        'disableMethod':()=>{n5FlarePrefabImpactEnabled=false;},
        'method':()=>{n5FlarePrefabFallback();}
    }),new _0x3d4c89({
        'buttonText':'Spawn Prefab Left','isTogglable':false,'toolTip':'spawn selected prefab normally on left hand',
        'method':()=>{const _p=_0x28a850['method'](_0x476e10['YApVv'])['invoke'](),_r=_0x28a850['method'](_0x476e10['YqqIM'])['invoke'](),_name=prefabList[prefabIndex];currentNotification=_0x5b9456(_name,_p,_r)?'Left spawned: '+_name:'Left prefab failed';notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Spawn Selling Left','isTogglable':false,'toolTip':'spawn selling machine normally on left hand',
        'method':()=>{const _p=_0x28a850['method'](_0x476e10['YApVv'])['invoke'](),_r=_0x28a850['method'](_0x476e10['YqqIM'])['invoke']();currentNotification=_0x5b9456('ItemSellingMachineController',_p,_r)?'Selling left spawned':'Selling left failed';notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Spawn Buggy Left','isTogglable':false,'toolTip':'spawn buggy normally on left hand',
        'method':()=>{const _p=_0x28a850['method'](_0x476e10['YApVv'])['invoke'](),_r=_0x28a850['method'](_0x476e10['YqqIM'])['invoke']();currentNotification=_0x5b9456('Vehicle_Buggy',_p,_r)?'Buggy left spawned':'Buggy left failed';notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Selected Prefab Orbit','isTogglable':true,'toolTip':'orbit the selected prefab around you',
        'method':()=>{n5RunPrefabOrbit(prefabList[prefabIndex],16,6.5,0.0);},
        'disableMethod':()=>{n5ClearOrbitFuckery();currentNotification='Orbit cleared';notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Angler Orbit','isTogglable':true,'toolTip':'orbit AnglerController prefabs',
        'method':()=>{n5RunPrefabOrbit('AnglerController',16,6.5,0.0);},
        'disableMethod':()=>{n5ClearOrbitFuckery();}
    }),new _0x3d4c89({
        'buttonText':'Selling Machine Orbit','isTogglable':true,'toolTip':'orbit selling machine prefabs',
        'method':()=>{n5RunPrefabOrbit('ItemSellingMachineController',16,6.6,0.0);},
        'disableMethod':()=>{n5ClearOrbitFuckery();}
    }),new _0x3d4c89({
        'buttonText':'Selling Tower Orbit','isTogglable':true,'toolTip':'3-story selling machine tower orbit',
        'method':()=>{n5RunSellingTowerOrbit();},
        'disableMethod':()=>{n5ClearTowerOrbit();currentNotification='Selling tower orbit cleared';notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Ogre Orbit','isTogglable':true,'toolTip':'orbit GiantController prefabs',
        'method':()=>{n5RunPrefabOrbit('GiantController',16,6.6,0.0);},
        'disableMethod':()=>{n5ClearOrbitFuckery();}
    }),new _0x3d4c89({
        'buttonText':'Buggy Orbit','isTogglable':true,'toolTip':'orbit buggy prefabs',
        'method':()=>{n5RunPrefabOrbit('Vehicle_Buggy',16,6.6,0.0);},
        'disableMethod':()=>{n5ClearOrbitFuckery();}
    }),new _0x3d4c89({
        'buttonText':'Christmas Box Orbit','isTogglable':true,'toolTip':'orbit ChristmasBox prefabs',
        'method':()=>{n5RunPrefabOrbit('ChristmasBox',16,6.6,0.0);},
        'disableMethod':()=>{n5ClearOrbitFuckery();}
    }),new _0x3d4c89({
        'buttonText':'Leaderboard Orbit','isTogglable':true,'toolTip':'orbit HordeMobLobbyHandler prefabs',
        'method':()=>{n5RunPrefabOrbit('HordeMobLobbyHandler',16,6.6,0.0);},
        'disableMethod':()=>{n5ClearOrbitFuckery();}
    }),new _0x3d4c89({
        'buttonText':'Clear Orbit Prefabs','isTogglable':false,'toolTip':'despawn prefabs created by this tab',
        'method':()=>{n5ClearOrbitFuckery();currentNotification='Orbit prefabs cleared';notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Spawn Item Gun','isTogglable':true,'toolTip':'hold right grip and trigger to spawn selected item at pointer',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_r=_g['ray'],_p=_g['point'];
            if(!_p||!rightTrigger||time<n5OrbitFuckeryShootDelay)return;
            n5OrbitFuckeryShootDelay=time;
            n5SpawnConfiguredItemAt(itemIDs[itemIndex],_r&&!_r['isNull']()?_r['method'](_0x476e10['avlli'])['invoke']():_p,_0x554b79);
        }
    }),new _0x3d4c89({
        'buttonText':'Spawn Mob Gun','isTogglable':true,'toolTip':'hold right grip and trigger to spawn selected mob at pointer',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_r=_g['ray'],_p=_g['point'];
            if(!_p||!rightTrigger||time<n5OrbitFuckeryShootDelay)return;
            n5OrbitFuckeryShootDelay=time;
            n5SpawnMobAt(mobIDs[mobIndex],_r&&!_r['isNull']()?_r['method'](_0x476e10['avlli'])['invoke']():_p,_0x554b79);
        }
    }),new _0x3d4c89({
        'buttonText':'Kick Gun','isTogglable':true,'toolTip':'aim at a player and pull trigger',
        'method':()=>{
            if(!rightGrab)return;
            const _g=_0x22649c(),_r=_g['ray'];
            if(!_r||_r['isNull']()||!rightTrigger||time<tagGunDelay)return;
            tagGunDelay=time+0.75;
            try{
                const _col=_r['method']('get_collider')['invoke']();
                const _target=_col ? _col['method']('GetComponentInParent',1)['inflate'](_0x126eec)['invoke']() : null;
                if(_target&&!_target['handle']['isNull']()&&!_target['method'](_0x476e10['qTups'])['invoke']()){
                    currentNotification=n5KickPlayerObject(_target)?'Kick sent':'Kick failed';notifactionResetTime=time+2;
                }
            }catch(_e){console.error('[KickGun]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Kick All Once','isTogglable':false,'toolTip':'send kick to every non-local player once',
        'method':()=>{
            let _cnt=0;
            try{
                const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                    const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                    if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']())continue;
                    if(n5KickPlayerObject(_pl)) _cnt++;
                }
            }catch(_e){console.error('[KickAllOnce]',_e);}
            currentNotification='Kick sent to '+_cnt+' players';notifactionResetTime=time+2;
        }
    })],

    [new _0x3d4c89({
        'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main',
        'method':()=>{currentCategory=0;currentPage=0;}
    }),n5PrefabDisplay,new _0x3d4c89({
        'buttonText':'Prefab +','isTogglable':false,'toolTip':'next prefab',
        'method':()=>{prefabIndex=(prefabIndex+1)%prefabList.length;currentNotification='PREFAB: '+prefabList[prefabIndex];notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Prefab -','isTogglable':false,'toolTip':'previous prefab',
        'method':()=>{prefabIndex=((prefabIndex-1)+prefabList.length)%prefabList.length;currentNotification='PREFAB: '+prefabList[prefabIndex];notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Larp Selected Prefab','isTogglable':true,'toolTip':'selected prefab follows inside you with collisions off',
        'enableMethod':()=>{n5StartLarpPrefab(prefabList[prefabIndex]);},
        'disableMethod':()=>{n5StopLarpPrefab();},
        'method':()=>{n5UpdateLarpPrefab();}
    }),new _0x3d4c89({
        'buttonText':'Larp SellingMachine','isTogglable':true,'toolTip':'selling machine follows inside you with collisions off',
        'enableMethod':()=>{n5StartLarpPrefab('ItemSellingMachineController');},
        'disableMethod':()=>{n5StopLarpPrefab();},
        'method':()=>{n5UpdateLarpPrefab();}
    }),new _0x3d4c89({
        'buttonText':'Larp Buggy','isTogglable':true,'toolTip':'buggy follows inside you with collisions off',
        'enableMethod':()=>{n5StartLarpPrefab('Vehicle_Buggy');},
        'disableMethod':()=>{n5StopLarpPrefab();},
        'method':()=>{n5UpdateLarpPrefab();}
    }),new _0x3d4c89({
        'buttonText':'Stop Larping','isTogglable':false,'toolTip':'remove the larp prefab',
        'method':()=>{n5StopLarpPrefab();}
    })],

    [new _0x3d4c89({
        'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main',
        'method':()=>{currentCategory=0;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Whitelist gun','isTogglable':true,
        'toolTip':'point at player and pull trigger to whitelist/unwhitelist them',
        'disableMethod':()=>{gunColor=[0.08,0.08,0.08,0.75];},
        'method':()=>{
            if(!rightGrab){gunColor=[0.08,0.08,0.08,0.75];return;}
            const _g=_0x22649c(),_r=_g['ray'];
            let _target=null;
            try{
                if(_r&&!_r['isNull']()){
                    const _col=_r['method'](_0x476e10['uYAQj'])['invoke']();
                    _target=_col?_col['method']('GetComponentInParent',1)['inflate'](_0x126eec)['invoke']():null;
                    if(_target&&(!_target['handle']||!_target['handle']['isNull']())&&!_target['method'](_0x476e10['qTups'])['invoke']()){
                        gunColor=n5WhitelistHas(_target)?[0.2,1.0,0.3,1.0]:[1.0,0.2,0.2,1.0];
                    }else{_target=null;gunColor=[0.08,0.08,0.08,0.75];}
                }
                if(rightTrigger&&time>idGunDelay){
                    idGunDelay=time+0.2;
                    if(_target){
                        if(n5WhitelistHas(_target)){
                            n5WhitelistRemove(_target);
                            currentNotification='Removed from whitelist';gunColor=[1.0,0.2,0.2,1.0];
                        }else{
                            n5WhitelistAdd(_target);
                            currentNotification='Added to whitelist';gunColor=[0.2,1.0,0.3,1.0];
                        }
                        notifactionResetTime=time+2;
                    }
                }
            }catch(_e){console.error('[Whitelist gun]',_e);}
        }
    }),new _0x3d4c89({
        'buttonText':'Whitelist All','isTogglable':false,'toolTip':'adds every non-local player to whitelist',
        'method':()=>{n5WhitelistAllPlayers();}
    }),new _0x3d4c89({
        'buttonText':'Unwhitelist all','isTogglable':false,'toolTip':'clears the entire whitelist',
        'method':()=>{const _c=whitelist.length;whitelist=[];currentNotification='Whitelist cleared ('+_c+')';notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Count','isTogglable':false,'toolTip':'show whitelist count',
        'method':()=>{currentNotification='Whitelisted: '+whitelist.length;notifactionResetTime=time+2;}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Fly','isTogglable':true,'toolTip':'whitelisted players can fly by right fist',
        'method':()=>{n5RunWhitelistedFist(0.02,(_rig)=>n5WhitelistFlyPlayer(_rig));}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand RPG','isTogglable':true,'toolTip':'whitelisted players shoot rockets by right fist',
        'method':()=>{n5RunWhitelistedFist(0.05,(_rig)=>{n5WhitelistSpawnPrefabFromHand('RPGRocket',n5GetRigHand(_rig,true),0);n5WhitelistSpawnPrefabFromHand('RPGRocket',n5GetRigHand(_rig,false),0);});}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand RPG Spear','isTogglable':true,'toolTip':'whitelisted players shoot spear rockets by right fist',
        'method':()=>{n5RunWhitelistedFist(0.05,(_rig)=>{n5WhitelistSpawnPrefabFromHand('RPGRocketSpear',n5GetRigHand(_rig,true),0);});}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand Flare','isTogglable':true,'toolTip':'whitelisted players shoot flares by right fist',
        'method':()=>{n5RunWhitelistedFist(0.08,(_rig)=>{n5WhitelistSpawnPrefabFromHand('FlareGunProjectile',n5GetRigHand(_rig,true),20);});}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand RPG Sniper','isTogglable':true,'toolTip':'whitelisted players shoot fast rockets by right fist',
        'method':()=>{n5RunWhitelistedFist(0.08,(_rig)=>{n5WhitelistSpawnPrefabFromHand('RPGRocket',n5GetRigHand(_rig,true),500);});}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand Xmas','isTogglable':true,'toolTip':'whitelisted players spawn Christmas boxes by right fist',
        'method':()=>{n5RunWhitelistedFist(0.7,(_rig)=>{n5WhitelistSpawnPrefabFromHand('ChristmasBox',n5GetRigHand(_rig,true),0);});}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand Selling','isTogglable':true,'toolTip':'whitelisted players spawn selling machines by right fist',
        'method':()=>{n5RunWhitelistedFist(0.7,(_rig)=>{n5WhitelistSpawnPrefabFromHand('ItemSellingMachineController',n5GetRigHand(_rig,true),0);});}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand Car','isTogglable':true,'toolTip':'whitelisted players launch cars by right fist',
        'method':()=>{n5RunWhitelistedFist(0.5,(_rig)=>{n5WhitelistSpawnPrefabFromHand('Vehicle_Buggy',n5GetRigHand(_rig,true),20);});}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand Crate','isTogglable':true,'toolTip':'whitelisted players spawn crates by right fist',
        'method':()=>{n5RunWhitelistedFist(0.1,(_rig)=>{n5WhitelistSpawnItemFromHand('item_crate',n5GetRigHand(_rig,true),0);});}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand Suitcase','isTogglable':true,'toolTip':'whitelisted players spawn suitcases by right fist',
        'method':()=>{n5RunWhitelistedFist(0.1,(_rig)=>{n5WhitelistSpawnItemFromHand('item_pelican_case',n5GetRigHand(_rig,true),0);});}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand Bomb','isTogglable':true,'toolTip':'whitelisted players launch bombs by right fist',
        'method':()=>{n5RunWhitelistedFist(0.5,(_rig)=>{n5WhitelistSpawnPrefabFromHand('BombController',n5GetRigHand(_rig,true),20)||n5WhitelistSpawnItemFromHand('item_dynamite',n5GetRigHand(_rig,true),20);});}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand Egg','isTogglable':true,'toolTip':'whitelisted players launch eggs by right fist',
        'method':()=>{n5RunWhitelistedFist(0.3,(_rig)=>{n5WhitelistSpawnPrefabFromHand('RPGRocketEgg',n5GetRigHand(_rig,true),20)||n5WhitelistSpawnPrefabFromHand('ExplosiveEgg',n5GetRigHand(_rig,true),20);});}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand Balloon','isTogglable':true,'toolTip':'whitelisted players spawn balloons by right fist',
        'method':()=>{n5RunWhitelistedFist(0.3,(_rig)=>{n5WhitelistSpawnPrefabFromHand('InflatedBalloon',n5GetRigHand(_rig,true),0);});}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Hand Giveaway','isTogglable':true,'toolTip':'whitelisted players get random items by right fist',
        'method':()=>{n5RunWhitelistedFist(0.3,(_rig)=>{const _id=itemIDs[Math.floor(Math.random()*itemIDs.length)];n5WhitelistSpawnItemFromHand(_id,n5GetRigHand(_rig,true),0);});}
    }),new _0x3d4c89({
        'buttonText':'Whitelist Disintegrate','isTogglable':true,'toolTip':'whitelisted players disintegrate nearest player with thumb',
        'method':()=>{
            for(const _rig of n5WhitelistedPlayers()){
                try{
                    const _uid=n5GetPlayerUserId(_rig);
                    if(!_uid)continue;
                    if(!whitelistDisintegrateDelays[_uid])whitelistDisintegrateDelays[_uid]=0;
                    const _f=n5GetRightFingers(_rig);
                    if(!_f||_f['isNull']()||_f['field']('_thumbValue')['value']<=0.8||time<=whitelistDisintegrateDelays[_uid])continue;
                    whitelistDisintegrateDelays[_uid]=time+1.0;
                    const _pos=_0xc4cf2f(_rig)['method'](_0x476e10['YApVv'])['invoke']();
                    let _target=null,_best=Number['MAX_SAFE_INTEGER'];
                    const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                    while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                        const _pl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                        if(!_pl||_pl['handle']['isNull']()||_pl['method'](_0x476e10['qTups'])['invoke']()||n5GetPlayerUserId(_pl)===_uid)continue;
                        const _d=_0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_pos,_0xc4cf2f(_pl)['method'](_0x476e10['YApVv'])['invoke']());
                        if(_d<_best){_best=_d;_target=_pl;}
                    }
                    if(_target&&!_target['handle']['isNull']()){
                        const _tpos=_0xc4cf2f(_target)['method'](_0x476e10['YApVv'])['invoke']();
                        const _runner=_0x40792d['field'](_0x476e10['WTTxg'])['value']['method'](_0x476e10['WxggD'])['invoke']();
                        for(const _k of Object.keys(VFXTypes)){if(_k==='None')continue;try{n5PlayVFXAt(VFXTypes[_k],_tpos,_0x554b79);}catch(_){}}
                        _target['method'](_0x476e10['uXViU'])['invoke']([0,-9999999,0]);
                        try{_target['method'](_0x476e10['GvlcC'],3)['invoke'](_0xe4d316['method'](_0x476e10['BGmZg'],2)['invoke'](_0xc4cf2f(_target)['method'](_0x476e10['itVwD'])['invoke'](),1500*deltaTime));}catch(_){}
                        try{_target['method'](_0x476e10['uKaRt'])['invoke'](NaN,NaN,NaN,NaN);}catch(_){}
                    }
                }catch(_e){console.error('[Whitelist Disintegrate]',_e);}
            }
        }
    }),new _0x3d4c89({
        'buttonText':'Kick Whitelist','isTogglable':false,'toolTip':'kick every whitelisted non-local player',
        'method':()=>{let _c=0;for(const _rig of n5WhitelistedPlayers()){try{if(n5KickPlayerObject(_rig))_c++;}catch(_){}}currentNotification='Kick sent to '+_c+' whitelisted';notifactionResetTime=time+2;}
    })],

    [new _0x3d4c89({
        'buttonText':'<< Back','isTogglable':false,'toolTip':'back to main',
        'method':()=>{currentCategory=0;currentPage=0;}
    }),new _0x3d4c89({
        'buttonText':'Spawn Mom Boss','isTogglable':false,'toolTip':'spawn mom boss related prefab/item at right hand',
        'method':()=>{n5SpawnMomBossAtHand();}
    }),new _0x3d4c89({
        'buttonText':'Spawn Mom At Me','isTogglable':false,'toolTip':'spawn mom boss at your position',
        'method':()=>{n5SpawnMomBossAt(n5LocalPlayerPos(),_0x554b79);}
    }),new _0x3d4c89({
        'buttonText':'Mom Reset Game','isTogglable':false,'toolTip':'calls MomBoss ResetGame/RPC_ResetGame',
        'method':()=>{n5MomBossCall('ResetGame')||n5MomBossCall('RPC_ResetGame');}
    }),new _0x3d4c89({
        'buttonText':'Mom Easy Mode','isTogglable':false,'toolTip':'sets mom boss easy mode field from dump',
        'method':()=>{n5MomBossSetField('_isEasyMode',true);}
    }),new _0x3d4c89({
        'buttonText':'Mom Always Win','isTogglable':false,'toolTip':'sets mom boss always-win field from dump',
        'method':()=>{n5MomBossSetField('_isAlwaysWinMode',true);}
    }),new _0x3d4c89({
        'buttonText':'Mom Toy Block','isTogglable':false,'toolTip':'change mom boss game mode to toy block',
        'method':()=>{n5MomBossCall('SetToyBlockGameState')||n5MomBossCall('TestP2ToyBlock');}
    }),new _0x3d4c89({
        'buttonText':'Mom Simon Says','isTogglable':false,'toolTip':'change mom boss game mode to simon says',
        'method':()=>{n5MomBossCall('SetSimonSaysGameState')||n5MomBossCall('TestP2SimonSays');}
    }),new _0x3d4c89({
        'buttonText':'Mom Floor Slap','isTogglable':false,'toolTip':'change mom boss game mode to floor slap',
        'method':()=>{n5MomBossCall('SetFloorSlappingGameState')||n5MomBossCall('TestP3FloorSlap');}
    }),new _0x3d4c89({
        'buttonText':'Mom Blade Ball','isTogglable':false,'toolTip':'change mom boss game mode to blade ball',
        'method':()=>{n5MomBossCall('SetBladeBallGameState')||n5MomBossCall('TestP4BladeBall');}
    }),new _0x3d4c89({
        'buttonText':'Mom Summon Zombies','isTogglable':false,'toolTip':'calls mom boss SummonZombies',
        'method':()=>{n5MomBossCall('SummonZombies')||n5MomBossCall('SetSummonZombiesP3GameState');}
    }),new _0x3d4c89({
        'buttonText':'Mom Supply Burst','isTogglable':false,'toolTip':'MomBossItemSpawner.SpawnSupplyItems / fallback supplies',
        'method':()=>{n5MomSupplyBurst();}
    }),new _0x3d4c89({
        'buttonText':'Horde On','isTogglable':false,'toolTip':'turns horde controller/spawner fields on',
        'method':()=>{n5HordeControl(true);}
    }),new _0x3d4c89({
        'buttonText':'Horde Off','isTogglable':false,'toolTip':'turns horde controller/spawner fields off',
        'method':()=>{n5HordeControl(false);}
    }),new _0x3d4c89({
        'buttonText':'Mom Kill Zombies','isTogglable':false,'toolTip':'calls mom boss KillAllZombies',
        'method':()=>{n5MomBossCall('KillAllZombies');}
    }),new _0x3d4c89({
        'buttonText':'Mom Success','isTogglable':false,'toolTip':'force mom boss success state',
        'method':()=>{n5MomBossCall('SetGameSuccessGameState')||n5MomBossCall('TestP2Success');}
    }),new _0x3d4c89({
        'buttonText':'Mom Death','isTogglable':false,'toolTip':'force mom boss death state',
        'method':()=>{n5MomBossCall('SetDeathGameState')||n5MomBossCall('SetFatalHitGameState');}
    }),new _0x3d4c89({
        'buttonText':'Mom Boss to Me','isTogglable':false,
        'toolTip':'teleports the Mom Boss to your position',
        'method':()=>{
            try{
                const _player=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(!_player||_player['handle']['isNull']()){currentNotification='No local player';notifactionResetTime=time+2;return;}
                const _pos=_0xc4cf2f(_player)['method'](_0x476e10['YApVv'])['invoke']();
                const _momCls=_0xa03cc7['class']('AnimalCompany.MomBossController');
                let _inst=null;
                try{_inst=_momCls['field']('_instance')['value'];}catch(_){}
                try{if(!_inst||_inst['isNull']())_inst=_0x1f7740['method']('FindObjectOfType',0)['inflate'](_momCls)['invoke']();}catch(_){}
                if(!_inst||_inst['isNull']()){currentNotification='MomBoss not found - spawn her first';notifactionResetTime=time+3;return;}
                const _tf=_0xc4cf2f(_inst);
                let _usedNative=false;
                const _teleportNames=['Teleport','TeleportTo','SetPosition','NetworkTeleport','WarpTo','RpcTeleport','RPC_Teleport'];
                for(const _name of _teleportNames){
                    try{_momCls['method'](_name)['invoke'](_inst,_pos);_usedNative=true;break;}catch(_){}
                    try{_inst['method'](_name)['invoke'](_pos);_usedNative=true;break;}catch(_){}
                    try{_inst['method'](_name)['invoke'](_pos,_0x554b79);_usedNative=true;break;}catch(_){}
                }
                if(!_usedNative){
                    const _ntNames=[
                        'Mirror.NetworkTransform',
                        'Mirror.NetworkTransformBase',
                        'Mirror.NetworkTransformReliable',
                        'Mirror.NetworkTransformUnreliable',
                        'FishNet.Component.Transforming.NetworkTransform',
                        'NetworkTransform'
                    ];
                    let _nt=null;
                    for(const _name of _ntNames){
                        try{_nt=_inst['component'](_name);if(_nt&&!_nt['handle']['isNull']())break;}catch(_){}
                        try{
                            let _cls=null;
                            for(const _asm of Il2Cpp.domain.assemblies){
                                try{_cls=_asm.image.class(_name);if(_cls)break;}catch(_){}
                            }
                            if(_cls){
                                const _go=_inst['method'](_0x476e10['ZqQpU'])['invoke']();
                                _nt=_go['method'](_0x476e10['BGTMU'],1)['inflate'](_cls)['invoke']();
                                if(_nt&&!_nt['handle']['isNull']())break;
                            }
                        }catch(_){}
                    }
                    if(_nt&&!_nt['handle']['isNull']()){
                        try{_nt['field']('syncPosition')['value']=false;}catch(_){}
                        try{_nt['property']('syncPosition')['value']=false;}catch(_){}
                        _tf['method'](_0x476e10['ZKeBc'])['invoke'](_pos);
                        const _targetFields=['targetSyncPosition','targetPosition','lastPosition','_syncPos','goal'];
                        for(const _f of _targetFields){try{_nt['field'](_f)['value']=_pos;}catch(_){}}
                        const _syncMethods=['ForceTeleport','ForceSync','SetDirty','RpcTeleport','Teleport','RPC_Teleport'];
                        for(const _m of _syncMethods){
                            try{_nt['method'](_m)['invoke'](_pos);break;}catch(_){}
                            try{_nt['method'](_m)['invoke']();break;}catch(_){}
                        }
                        try{_nt['field']('syncPosition')['value']=true;}catch(_){}
                        try{_nt['property']('syncPosition')['value']=true;}catch(_){}
                    }else{
                        _tf['method'](_0x476e10['ZKeBc'])['invoke'](_pos);
                    }
                }
                try{
                    const _go=_inst['method'](_0x476e10['ZqQpU'])['invoke']();
                    if(_go&&!_go['isNull']()){
                        try{_go['method'](_0x476e10['mkqJb'])['invoke'](true);}catch(_){}
                        const _renderCls=Il2Cpp['domain']['assembly'](_0x476e10['uyrgn'])['image']['class'](_0x476e10['TdDEc']);
                        const _renders=_go['method']('GetComponentsInChildren',1)['inflate'](_renderCls)['invoke'](true);
                        for(let _ri=0;_renders&&_ri<_renders['length'];_ri++){
                            try{const _r=_renders['get'](_ri);if(_r&&!_r['handle']['isNull']())_r['method'](_0x476e10['nORQm'])['invoke'](true);}catch(_){}
                        }
                        const _cols=_go['method']('GetComponentsInChildren',1)['inflate'](_0x44c8fe)['invoke'](true);
                        for(let _ci=0;_cols&&_ci<_cols['length'];_ci++){
                            try{const _c=_cols['get'](_ci);if(_c&&!_c['handle']['isNull']())_c['method'](_0x476e10['nORQm'])['invoke'](true);}catch(_){}
                        }
                    }
                }catch(_eVis){console.error('[MomBoss visible fix]',_eVis);}
                currentNotification='Mom Boss teleported to you!';notifactionResetTime=time+3;
            }catch(_e){currentNotification='Mom Boss to Me failed: '+_e;notifactionResetTime=time+3;console.error('[MomBossToMe]',_e);}
        }
    })],n5BuildBlueprintCategory(),n5BuildGooningCategory(),n5BuildArenaFuckeryCategory(),n5BuildRigShitCategory(),n5BuildBuffFuckeryCategory(),n5BuildWorldFuckeryCategory(),n5BuildMachineFuckeryCategory(),[],n5BuildUsersCategory(),n5BuildLaunchersCategory(),n5BuildShadowBossCategory(),n5BuildGoodShitCategory(),n5BuildIds20Category(),n5BuildIdListCategory('item',itemIDs),n5BuildIdListCategory('mob',mobIDs),n5BuildIdListCategory('prefab',prefabList),n5BuildIdListCategory('map',mapIDs)];
    _0x8d3cef[9].push(new _0x3d4c89({'buttonText':'Tele: Moon Core','isTogglable':false,'toolTip':'teleport to Dig Moon Core','method':()=>teleportTo(TeleTarget.Dig_Moon_Core)}));
    _0x8d3cef[1]=_0x8d3cef[1]['filter'](_b=>!['Spawn Circle (x8)','Spawn Wall (x5 vertical)','Spawn Mob Wave (5x)']['includes'](_b['buttonText']));
    _0x8d3cef[16]=_0x8d3cef[16]['filter'](_b=>['<< Back to Guns','DISABLE DANGEROUS PREFABS','Show Dangerous List']['includes'](_b['buttonText']));
    const _n5DangerousView=_0x8d3cef[16]['find'](_b=>_b['buttonText']==='Show Dangerous List');
    if(_n5DangerousView)_n5DangerousView['buttonText']='View Dangerous Prefabs';
    let _0x564127=new Map();
    _0x8d3cef['flat']()['forEach'](_0x260728=> {
        const _0xc0ad40=_0x240047;
        _0x564127['set'](_0x260728['buttonText'],_0x260728);
    }
    );
    function _0x5b5535(_0x44b729) {
        try {
            const _categoryButtons=_0x8d3cef[currentCategory]||[];
            const _pageStart=currentPage*8;
            const _pageButtons=_categoryButtons['slice'](_pageStart,_pageStart+8);
            for(const _button of _pageButtons) {
                if(_button&&_button['buttonText']===_0x44b729)return _button;
            }
            for(const _button of _categoryButtons) {
                if(_button&&_button['buttonText']===_0x44b729)return _button;
            }
        } catch(_) {}
        return _0x564127['get'](_0x44b729);
    }
    let _n5GetNameMethod = null;
    try { _n5GetNameMethod = _0x73884e['method'](_0x476e10['LdzTO']); } catch(_){ }

    let _n5PendingAction = null;

    const _0x3eba72=_0x73884e['method'](_0x476e10['eLdQE']);
    _0x3eba72['implementation']=function(_0x2cd2fa) {
        if(referenceCollider) {
            try {
                if(_0x2cd2fa['handle']['equals'](referenceCollider['handle'])) {
                    try {
                        const _0x20a040=this['method'](_0x476e10['LdzTO'])['invoke']()['toString']();
                        if(_0x476e10['tNkhl'](_0x20a040['length'],-0x5*-0x19f+-0xf8c+0x2*0x3b9)&&_0x476e10['JhRIq'](_0x20a040[-0x7*0x114+0x1b1*0xb+-0xb0e],'@')) {
                            const _0x540252=_0x20a040['substring'](-0x9*0x195+0x1c1d+-0xdde,_0x476e10['LbcGm'](_0x20a040['length'],0x8*-0x214+0x832+0x11*0x7f)),_0x40b782=_0x5be904['method'](_0x476e10['sEmwP'])['invoke']();
                            if(_0x476e10['iQbAQ'](_0x40b782,buttonClickDelay) && (_0x40b782 - _n5BtnLastClickTime) >= _n5BtnDebounce) {
                                buttonClickDelay=_0x476e10['HAqgE'](_0x40b782,0x1*0x1bfe+-0x13e9+-0x815+0.2);
                                _n5BtnLastClickTime = _0x40b782;
                                _n5PendingAction = _0x540252;
                                _n5MenuClickBounce = 1;
                            }
                        }
                    } catch(_e) { console.error('[N5 OnTriggerEnter]', _e); }
                    return;
                }
            } catch(_) {}
        }
        try { return this['method'](_0x476e10['eLdQE'])['invoke'](_0x2cd2fa); }
        catch(_e){ return; }
    };
    function _0x410075() {
        try {
        const _0x176193=_0x240047,_0x53f9ca=_0x1aa095['method'](_0x476e10['TQNch'],-0x457*-0x1+-0x19d9+-0x1583*-0x1)['invoke'](4),_0x2ebe8c=_0x1aa095['method'](_0x476e10['TQNch'],0x871*0x1+-0x14*-0x185+-0x26d4)['invoke'](5);

        if(!_n5InputBuf) _n5InputBuf=Il2Cpp['alloc'](1);
        const _0x414f19=_n5InputBuf;
        _0x53f9ca['method'](_0x476e10['ureWX'],0x921+-0x2468+0x1b49)['invoke'](_0x26833e['field'](_0x476e10['OQjDm'])['value'],_0x414f19),leftPrimary=_0x476e10['yCdEu'](_0x414f19['readU8'](),0x9d8+-0x7e6+-0x1f2),_0x53f9ca['method'](_0x476e10['ureWX'],0x268a*0x1+0x1*-0x16cf+0xaf*-0x17)['invoke'](_0x26833e['field'](_0x476e10['uLWZU'])['value'],_0x414f19),leftSecondary=_0x476e10['oHAfR'](_0x414f19['readU8'](),0x2*0x9c9+0x1b07+-0x2e99),_0x53f9ca['method'](_0x476e10['ureWX'],0x26f1+-0xbaa+0x1b45*-0x1)['invoke'](_0x26833e['field'](_0x476e10['zVPHi'])['value'],_0x414f19),leftGrab=_0x476e10['yCdEu'](_0x414f19['readU8'](),0x25f9+-0x20b4+0x13*-0x47),_0x53f9ca['method'](_0x476e10['ureWX'],-0xefc+0xb*0x2b+0xd25)['invoke'](_0x26833e['field'](_0x476e10['triPL'])['value'],_0x414f19),leftTrigger=_0x476e10['LjsNU'](_0x414f19['readU8'](),0x1894+-0x1aff+-0x26b*-0x1),_0x53f9ca['method'](_0x476e10['ureWX'],0x1b24+0xf6*-0xd+-0xea4)['invoke'](_0x26833e['field'](_0x476e10['GTnCs'])['value'],_0x414f19),leftStick=_0x476e10['RwyBa'](_0x414f19['readU8'](),0xbcf*0x3+-0x4ae+-0x1*0x1ebf),_0x2ebe8c['method'](_0x476e10['ureWX'],-0x396+-0x5a7*-0x4+-0x1304)['invoke'](_0x26833e['field'](_0x476e10['OQjDm'])['value'],_0x414f19),rightPrimary=_0x476e10['EICZf'](_0x414f19['readU8'](),0x1*0xc15+0x17c0+0x1*-0x23d5),_0x2ebe8c['method'](_0x476e10['ureWX'],0xe12*-0x2+0x257+-0x19cf*-0x1)['invoke'](_0x26833e['field'](_0x476e10['uLWZU'])['value'],_0x414f19),rightSecondary=_0x476e10['DtSku'](_0x414f19['readU8'](),0x33*-0x78+0x1*0x24a+-0x1*-0x159e),_0x2ebe8c['method'](_0x476e10['ureWX'],-0x68b*-0x2+-0x49c*-0x3+-0x1ae8)['invoke'](_0x26833e['field'](_0x476e10['triPL'])['value'],_0x414f19),rightTrigger=_0x476e10['yCdEu'](_0x414f19['readU8'](),0xf69+0xe2*0x12+-0x1*0x1f4d),_0x2ebe8c['method'](_0x476e10['ureWX'],0x1*-0x88f+-0x1d4b+0x25dc)['invoke'](_0x26833e['field'](_0x476e10['zVPHi'])['value'],_0x414f19),rightGrab=_0x476e10['EICZf'](_0x414f19['readU8'](),0x1*-0x1115+-0x767+0x187c),_0x2ebe8c['method'](_0x476e10['ureWX'],0x2dd*-0x6+-0x1*-0x6bd+0xa73)['invoke'](_0x26833e['field'](_0x476e10['GTnCs'])['value'],_0x414f19),rightStick=_0x476e10['EICZf'](_0x414f19['readU8'](),0x502+0x23ee+-0x28f0);
        } catch(_0x410075_err){ console['error']('[N5 input poll] uncaught:',_0x410075_err); }
    }
    const _0x16045b=_0x199f18['method'](_0x476e10['ccrlx']);
    _0x16045b['implementation']=function() {
        const _0x945560=_0x240047;

        if(!_n5AuthChecked) return _0x16045b['invoke']();
        try {

        if(_n5PendingAction !== null) {
            const _pendingText = _n5PendingAction;
            _n5PendingAction = null;
            let _btn;
            try { _btn = _0x476e10['uokiD'](_0x5b5535, _pendingText); } catch(_) { _btn = null; }
            if(_btn) {
                if(_btn['isTogglable']) {
                    _btn['enabled'] = !_btn['enabled'];
                    _n5MenuLastCat=-1; _n5MenuLastPage=-1; _n5FlatDirty=true;
                    if(_btn['enabled']) {
                        if(_btn['toolTip']) _0x476e10['XNrbp'](_0x3dddf7, _0x476e10['BvlLf'](_0x476e10['JBkaJ'], _btn['toolTip']), ![]);
                        const _enM = _btn['enableMethod'];
                        if(_enM != null && _enM !== void 0) try { _enM.call(_btn); } catch(_e){ console.error('[N5 enable]',_e); }
                    } else {
                        if(_btn['toolTip']) _0x476e10['CsCnK'](_0x3dddf7, _0x476e10['KsPWj'](_0x476e10['LBUba'], _btn['toolTip']), ![]);
                        const _disM = _btn['disableMethod'];
                        if(_disM != null && _disM !== void 0) try { _disM.call(_btn); } catch(_e){ console.error('[N5 disable]',_e); }
                    }
                } else {
                    _n5MenuLastCat=-1; _n5MenuLastPage=-1; _n5FlatDirty=true;
                    if(_btn['toolTip']) _0x476e10['lkoZK'](_0x3dddf7, _btn['toolTip'], ![]);
                    const _actM = _btn['method'];
                    if(_actM != null && _actM !== void 0) try { _actM.call(_btn); } catch(_e){ console.error('[N5 action]',_e); }
                }
            }
        }

        deltaTime=_0x5be904['method'](_0x476e10['fJzdg'])['invoke'](),time=_0x5be904['method'](_0x476e10['sEmwP'])['invoke'](),_0x476e10['LtKnW'](_0x410075),frameCount++;
        _n5WlPruneTimer+=deltaTime;
        if(_n5WlPruneTimer>5.0){ _n5WlPruneTimer=0; for(let _wi=whitelist.length-1;_wi>=0;_wi--){ try{ if(!whitelist[_wi]||whitelist[_wi]['handle']['isNull']()) whitelist.splice(_wi,1); }catch(_){ whitelist.splice(_wi,1); } } }
        n5UpdateTheme(deltaTime);
        n5PollUWR();
        n5ProcessBlueprintQueue();
        n5RunRigSpasm();
        n5RunBuffSpam();
        n5RunInfFart();
        n5RunInfiniteJetpack();
        n5RunNoRecoil(false);
        n5RunSellingSpasm();
        n5RunSellAmountSpam(false);
        n5RunToiletSpam();
        n5UpdateNetMirrorClone();
        n5UpdateServerNetPlayerClone();

        if(rpcAlertMsg && time < rpcAlertExpiry){
            try {
                if(!_n5RpcOverlayObj || rpcAlertMsg !== _n5RpcOverlayLastMsg){
                    if(_n5RpcOverlayObj){
                        try{ _0x1f7740['method'](_0x476e10['iBVau'],1)['invoke'](_n5RpcOverlayObj); }catch(_){}
                        _n5RpcOverlayObj=null;
                    }
                    let _rpcParent = null;
                    try{
                        const _hc=_0x199f18['field'](_0x476e10['vfsAm'])['value'];
                        if(_hc&&!_hc['isNull']()) _rpcParent=_0xc4cf2f(_hc);
                    }catch(_){}
                    if(_rpcParent && !_rpcParent['isNull']()){
                        _n5RpcOverlayObj = _0xb7e991(
                            _0x4c14b4, _0x554b79,
                            [0.0, -0.15, 0.55, 1.0],
                            -1,
                            [0.02, 0.08, 0.04, 0.95],
                            _rpcParent
                        );
                        if(_n5RpcOverlayObj && !_n5RpcOverlayObj['isNull']()){
                            _0x41a4cf(
                                _n5RpcOverlayObj,
                                rpcAlertMsg,
                                [1.0, 0.3, 1.0, 1.0],
                                _0x4c14b4,
                                _0x268d36
                            );
                            _0xc4cf2f(_n5RpcOverlayObj)['method'](_0x476e10['AnNTs'])['invoke']([0.0014, 0.0014, 0.0014]);
                            _n5RpcOverlayLastMsg = rpcAlertMsg;
                        }
                    }
                }
            } catch(_rpcErr){ _n5RpcOverlayObj=null; }
        } else {
            if(_n5RpcOverlayObj){
                try{ _0x1f7740['method'](_0x476e10['iBVau'],1)['invoke'](_n5RpcOverlayObj); }catch(_){}
                _n5RpcOverlayObj=null;
            }
            if(time >= rpcAlertExpiry){ rpcAlertMsg=''; _n5RpcOverlayLastMsg=''; }
        }

        if(joystickFlyEnabled){
            try {
                const _rb=_0x199f18['method'](_0x476e10['BGTMU'],0x1*0x1304+-0x1dc8+0xa4f)['inflate'](_0x1d3a80)['invoke']();
                if(_rb){


                    const _fwd=_0x35ade8['method'](_0x476e10['itVwD'])['invoke']();
                    const _up=[0,1,0];
                    if(leftStick) _rb['method'](_0x476e10['YeICc'],0x1*0x1304+-0x1dc8+0xa4f)['invoke'](_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke']([0,0,0],[0,flySpeed*deltaTime*60,0]),0);
                    if(rightStick) _rb['method'](_0x476e10['YeICc'],0x1*0x1304+-0x1dc8+0xa4f)['invoke'](_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke']([0,0,0],[0,-flySpeed*deltaTime*60,0]),0);
                }
            } catch(_je){}
        }
        if(orbitAllEnabled){
            orbitPhase=(orbitPhase||0)+deltaTime*orbitSpeed;
            try {
                const _lp=_0x126eec['method'](_0x476e10['vQatN'])['invoke']();
                if(_lp&&!_lp['handle']['isNull']()){
                    const _myPos=_lp['method'](_0x476e10['JvTJW'])['invoke']()['method'](_0x476e10['YApVv'])['invoke']();
                    const _en=_0x126eec['field'](_0x476e10['ajDTO'])['value']['method'](_0x476e10['Gzkrs'])['invoke']()['method'](_0x476e10['UhwEm'])['invoke']();
                    let _oi=0;
                    while(_en['method'](_0x476e10['tcYql'])['invoke']()){
                        const _opl=_en['method'](_0x476e10['UdBMu'])['invoke']();
                        if(!_opl||_opl['handle']['isNull']()||_opl['method'](_0x476e10['qTups'])['invoke']()){_oi++;continue;}
                        const _angle=orbitPhase+(_oi*(Math.PI*2/8));
                        const _op=_0xe4d316['method'](_0x476e10['ZOiTU'])['invoke'](_myPos,[Math.cos(_angle)*2.5,3.5,Math.sin(_angle)*2.5]);
                        _opl['method'](_0x476e10['uXViU'])['invoke'](_op);
                        _oi++;
                    }
                }
            } catch(_oe){}
        }
        if (_n5GAKS) {
            const _qDown = _n5KeyDown(_VK_Q);
            if (_qDown && !_n5PCQWasDown) {
                if (!_n5PCMode) {
                    _n5PCMode       = true;
                    _n5PCMenuOpen   = false;
                    _n5PCFlyEnabled = true;
                    _n5PCLastCursorX = -1;
                    console.log('[N5 PC] PC mode ON  Q=menu  WASD+RMB=fly  Esc=exit');
                } else {
                    _n5PCMenuOpen = !_n5PCMenuOpen;
                    _n5PCMenuSelector = 0;
                    _n5MenuLastCat = -1; _n5MenuLastPage = -1; _n5FlatDirty = true;
                }
            }
            _n5PCQWasDown = _qDown;

            const _escDown = _n5KeyDown(_VK_ESCAPE);
            if (_escDown && !_n5PCEscWasDown && _n5PCMode) {
                _n5PCMode = false; _n5PCMenuOpen = false; _n5PCRmbWasDown = false;
                console.log('[N5 PC] PC mode OFF');
            }
            _n5PCEscWasDown = _escDown;

            const _5Down = _n5KeyDown(_VK_5);
            if (_5Down && !_n5PC5WasDown) {
                try {
                    const _screen = _0x428c96['class']('UnityEngine.Screen');
                    const _w = _screen['method']('get_width')['invoke']();
                    const _h = _screen['method']('get_height')['invoke']();
                    try {
                        // Try SetResolution with FullScreenMode (Unity 2019+)
                        _screen['method']('SetResolution', 3)['invoke'](_w, _h, 1, 0);
                    } catch(_) {
                        try {
                            // Fallback: SetResolution(w, h, fullscreen=true)
                            _screen['method']('SetResolution', 3)['invoke'](_w, _h, true);
                        } catch(_2) {
                            // Last resort: just set fullscreen property
                            _screen['method']('set_fullScreen')['invoke'](true);
                        }
                    }
                    try { _screen['method']('set_fullScreenMode')['invoke'](1); } catch(_) {}
                    currentNotification = 'Fullscreen forced!'; notifactionResetTime = time + 3;
                    console.log('[N5] Forced fullscreen');
                } catch(_fsErr) { console.error('[N5] Fullscreen error:', _fsErr); }
            }
            _n5PC5WasDown = _5Down;

            if (_n5PCMode) {
                const _rmbDown = _n5KeyDown(_VK_RBUTTON);
                const _lmbDown = _n5KeyDown(_VK_LBUTTON);
                const _mmbDown = _n5KeyDown(_VK_MBUTTON);
                if (!_n5PCMenuOpen) {
                    rightGrab = _rmbDown;
                    rightTrigger = _lmbDown;
                    rightSecondary = _mmbDown;
                }
                if (_rmbDown) {
                    if (_n5GCP) {
                        try {
                            _n5GCP(_n5PCPoint);
                            const _cx = _n5PCPoint.readS32();
                            const _cy = _n5PCPoint.add(4).readS32();
                            if (_n5PCLastCursorX >= 0) {
                                const _dx = _cx - _n5PCLastCursorX;
                                const _dy = _cy - _n5PCLastCursorY;
                                _n5PCYaw   = (_n5PCYaw + _dx * 0.15) % 360;
                                _n5PCPitch = Math.max(-89, Math.min(89, _n5PCPitch - _dy * 0.15));
                            }
                            _n5PCLastCursorX = _cx;
                            _n5PCLastCursorY = _cy;
                        } catch (_cpErr) {}
                    }
                } else {
                    _n5PCLastCursorX = -1;
                }
                _n5PCRmbWasDown = _rmbDown;

                if (_n5PCFlyEnabled && _n5PCMode && _rmbDown) {
                    try {
                        const _yawR  = _n5PCYaw   * Math.PI / 180;
                        const _pitR  = _n5PCPitch * Math.PI / 180;
                        const _fwd   = [Math.cos(_pitR)*Math.sin(_yawR), -Math.sin(_pitR), Math.cos(_pitR)*Math.cos(_yawR)];
                        const _right = [Math.cos(_yawR), 0, -Math.sin(_yawR)];
                        let _vx=0, _vy=0, _vz=0;
                        if (_n5KeyDown(_VK_W)) { _vx+=_fwd[0]; _vy+=_fwd[1]; _vz+=_fwd[2]; }
                        if (_n5KeyDown(_VK_S)) { _vx-=_fwd[0]; _vy-=_fwd[1]; _vz-=_fwd[2]; }
                        if (_n5KeyDown(_VK_A)) { _vx-=_right[0]; _vz-=_right[2]; }
                        if (_n5KeyDown(_VK_D)) { _vx+=_right[0]; _vz+=_right[2]; }
                        if (_n5KeyDown(_VK_SPACE)) _vy+=1;
                        if (_n5KeyDown(_VK_SHIFT)) _vy-=1;
                        if (_vx!==0||_vy!==0||_vz!==0) {
                            const _len=Math.sqrt(_vx*_vx+_vy*_vy+_vz*_vz)||1;
                            const _pcFlySpeed=flySpeed*0.06;
                            const _force=[(_vx/_len)*_pcFlySpeed,(_vy/_len)*_pcFlySpeed,(_vz/_len)*_pcFlySpeed];
                            let _usedPCForce=false;
                            try{
                                const _pc=_0xa03cc7['class']('AnimalCompany.PlayerController')['method']('get_instance')['invoke']();
                                if(_pc&&!_pc['handle']['isNull']()){
                                    try{_pc['method']('AddExternalForceVelocity',2)['invoke'](_force,true);_usedPCForce=true;}catch(_){}
                                    if(!_usedPCForce){try{_pc['method']('AddExternalForceVelocity',1)['invoke'](_force);_usedPCForce=true;}catch(_){}}
                                }
                            }catch(_){}
                            if(!_usedPCForce){
                                const _rb = _0x199f18['method'](_0x476e10['BGTMU'], 0x1*0x1304+-0x1dc8+0xa4f)['inflate'](_0x1d3a80)['invoke']();
                                if (_rb) _rb['method'](_0x476e10['YeICc'], 0x1*0x1304+-0x1dc8+0xa4f)['invoke'](_force, 0);
                            }
                        }
                        {
                            try {
                                const _ht = _0xc4cf2f(_0x33fb14);
                                if (_ht && !_ht['isNull']())
                                    _ht['method'](_0x476e10['yqzdi'])['invoke'](_0x4088e6['method'](_0x476e10['sDZcS'])['invoke'](_n5PCPitch, _n5PCYaw, 0));
                            } catch (_re) {}
                        }
                    } catch (_fe) { console.error('[N5 PC fly]', _fe); }
                }

                if (_n5PCMenuOpen) {
                    const _cnt = (_0x8d3cef[currentCategory]||[]).slice(currentPage*8,(currentPage+1)*8).length||1;
                    const _upDown = _n5KeyDown(_VK_UP);
                    if (_upDown && !_n5PCUpWasDown) {
                        _n5PCMenuSelector = (_n5PCMenuSelector - 1 + _cnt) % _cnt;
                        _n5MenuLastCat=-1; _n5MenuLastPage=-1; _n5FlatDirty=true;
                    }
                    _n5PCUpWasDown = _upDown;

                    const _downDown = _n5KeyDown(_VK_DOWN);
                    if (_downDown && !_n5PCDownWasDown) {
                        _n5PCMenuSelector = (_n5PCMenuSelector + 1) % _cnt;
                        _n5MenuLastCat=-1; _n5MenuLastPage=-1; _n5FlatDirty=true;
                    }
                    _n5PCDownWasDown = _downDown;

                    const _entDown = _n5KeyDown(_VK_RETURN) || _n5KeyDown(_VK_SPACE);
                    if (_entDown && !_n5PCEnterWasDown) {
                        const _btn = (_0x8d3cef[currentCategory]||[]).slice(currentPage*8,(currentPage+1)*8)[_n5PCMenuSelector];
                        if (_btn) { _n5PendingAction = _btn['buttonText']; _n5MenuClickBounce=1; _n5MenuLastCat=-1; _n5MenuLastPage=-1; _n5FlatDirty=true; }
                    }
                    _n5PCEnterWasDown = _entDown;

                    const _leftDown = _n5KeyDown(_VK_LEFT);
                    if (_leftDown && !_n5PCLeftWasDown) {
                        const _maxPagePrev = Math.max(Math.ceil((_0x8d3cef[currentCategory]||[]).length / 8) - 1, 0);
                        currentPage--;
                        if (currentPage < 0) currentPage = _maxPagePrev;
                        _n5PCMenuSelector = 0; _n5MenuLastCat=-1; _n5MenuLastPage=-1; _n5FlatDirty=true;
                    }
                    _n5PCLeftWasDown = _leftDown;

                    const _rightDown = _n5KeyDown(_VK_RIGHT);
                    if (_rightDown && !_n5PCRightWasDown) {
                        const _maxPageNext = Math.max(Math.ceil((_0x8d3cef[currentCategory]||[]).length / 8) - 1, 0);
                        currentPage = (currentPage + 1) % (_maxPageNext + 1);
                        _n5PCMenuSelector = 0; _n5MenuLastCat=-1; _n5MenuLastPage=-1; _n5FlatDirty=true;
                    }
                    _n5PCRightWasDown = _rightDown;
                }
            }
        }
        const _n5ShouldShowMenu = _n5PCMode
            ? _n5PCMenuOpen
            : (_0x476e10['Uclmp'](righthand,rightSecondary)||_0x476e10['zbXmh'](!righthand,leftSecondary));

        if(_n5ShouldShowMenu||_0x476e10['CdBQN'](menu,null)) {
            if(_0x476e10['VHWzp'](currentNotification,'')&&_0x476e10['IOwcG'](time,notifactionResetTime))_0x476e10['LtKnW'](_0x421954);
            try{ if(!_0x79991c||_0x79991c['isNull']()) _0x79991c=_0x50b70c['method'](_0x476e10['nkPOg'],-0xe9a+0xff8+-0x1*0x15d)['inflate'](_0x3d5ee4)['invoke'](Il2Cpp['string'](_0x476e10['ICSPz'])); }catch(_){}
            if(_0x476e10['uzhlw'](menu,null)) {
                try { _0x476e10['MtVJr'](_0x1ab2e6); } catch(_mbErr){ console.error('[N5 menu build]',_mbErr); }
                _n5MenuBaseScale=null;
                if(_n5ShouldShowMenu){_n5MenuAnim=Math.max(_n5MenuAnim,0.001);_n5MenuAnimTarget=1;_n5MenuAnimKick=1;}
                _n5MenuLastCat=currentCategory; _n5MenuLastPage=currentPage;
                if (_n5PCMode) { try { _n5PCPositionMenuAtHead(); } catch(_){ _0x476e10['uMIkA'](_0x40c67f); } }
                else _0x476e10['uMIkA'](_0x40c67f);
            } else {
                if(currentCategory!==_n5MenuLastCat||currentPage!==_n5MenuLastPage){
                    if(!_n5MenuRebuildLock){
                        _n5MenuRebuildLock=true;
                        try { _0x476e10['LtKnW'](_0x421954); } catch(_){ }
                        try { _0x476e10['MtVJr'](_0x1ab2e6); } catch(_mbErr2){ console.error('[N5 menu rebuild]',_mbErr2); }
                        _n5MenuBaseScale=null;_n5MenuAnim=Math.max(_n5MenuAnim,0.35);_n5MenuAnimKick=1;
                        _n5MenuLastCat=currentCategory; _n5MenuLastPage=currentPage;
                        _n5MenuRebuildLock=false;
                    }
                }
                if (_n5PCMode) { try { _n5PCPositionMenuAtHead(); } catch(_){ try{_0x476e10['uMIkA'](_0x40c67f);}catch(_2){} } }
                else { try { _0x476e10['uMIkA'](_0x40c67f); } catch(_pErr){} }
            }
            if(!n5ApplyMenuAnimation(_n5ShouldShowMenu)){
                if(_0x476e10['CdBQN'](menu,null))try{_0x476e10['ZEINj'](_0x5a6201,menu);}catch(_){}
                menu=null;_n5MenuBaseScale=null;
            }
        }
        else _0x476e10['CdBQN'](menu,null)&&(_0x476e10['ZEINj'](_0x5a6201,menu),menu=null,_n5MenuBaseScale=null,_n5MenuAnim=0);
        if(_0x476e10['oUVci'](menu,null))_0x476e10['izVoi'](reference,null)&&(_0x476e10['VpQAP'](_0x5a6201,reference),reference=null);
        else {
            if(_0x476e10['FdHMz'](reference,null))_0x476e10['JDQif'](_0x17df8c);
        }
        try {
            if(_0x476e10['izVoi'](_0x3edbd5,null)) {
                if(!_0x3edbd5['method'](_0x476e10['zFjJA'])['invoke']())_0x476e10['uwChI'](_0x5a6201,_0x3edbd5),_0x3edbd5=null;
                else _0x3edbd5['method'](_0x476e10['mkqJb'])['invoke'](![]);
            }

            if(_0x476e10['jMFpp'](_0x49110b,null)) {
                let _0x5614ad=_0x49110b['method'](_0x476e10['ZqQpU'])['invoke']();
                if(_0x476e10['jMFpp'](_0x5614ad,null)) {
                    if(!_0x5614ad['method'](_0x476e10['zFjJA'])['invoke']())_0x476e10['Piovm'](_0x5a6201,_0x5614ad),_0x49110b=null;
                    else _0x5614ad['method'](_0x476e10['mkqJb'])['invoke'](![]);
                }
            }
        }
        catch(_0x2559f0) {
        }

        if(!_n5FlatCache || _n5FlatDirty) {
            _n5FlatCache = _0x8d3cef['flat']();
            _n5FlatDirty = false;
        }
        const _n5Enabled = _n5FlatCache;
        for(let _fi=0;_fi<_n5Enabled.length;_fi++){
            const _0x45d9f8=_n5Enabled[_fi];
            if(!_0x45d9f8['enabled']||!_0x45d9f8['method']) continue;
            try { _0x45d9f8['method'](); }
            catch(_0xf483e6){ console['error']('[OnLateUpdate] Error in \''+_0x45d9f8['buttonText']+'\x27:',_0xf483e6); }
        }
        } catch(_0x16045b_err) { console['error']('[N5 OnLateUpdate] uncaught:',_0x16045b_err); }
        return _0x16045b['invoke']();
    };
    function _0x3b1937() {
        const _0x3234cd=_0x240047,_0x4387f4=_0xa03cc7['class'](_0x476e10['mBXDr'])['method'](_0x476e10['ZqFAL']);
        _0x4387f4['implementation']=function() {
            return;
        };
    }
    const _0x2aaa69=_0xa03cc7['class'](_0x476e10['sYyWr'])['method'](_0x476e10['RkDyB']);
    _0x2aaa69['implementation']=function() {
        const _0x447a37=_0x240047;
        if(InfAmmo)return!![];
        return this['method'](_0x476e10['RkDyB'])['invoke']();
    };
    const _0x5b3e7=_0xa03cc7['class'](_0x476e10['QYFjq'])['method'](_0x476e10['QTXqM']);
    _0x5b3e7['implementation']=function() {
        const _0x4bec31=_0x240047;
        if(InfAmmo)return-0x1*-0x2325+-0x2*-0xc89+-0x3b38;
        return this['method'](_0x476e10['QTXqM'])['invoke']();
    };
    const _0x40cc54=_0xa03cc7['class'](_0x476e10['QYFjq'])['method'](_0x476e10['buwGY']);
    _0x40cc54['implementation']=function() {
        const _0x100d1e=_0x240047;
        if(InfAmmo)return!![];
        return this['method'](_0x476e10['buwGY'])['invoke']();
    };
    const _0x1239a6=_0xa03cc7['class'](_0x476e10['xppKc'])['method'](_0x476e10['NqJfX']);
    _0x1239a6['implementation']=function() {
        const _0x5bcd17=_0x240047;
        if(InfAmmo)return!![];
        return this['method'](_0x476e10['NqJfX'])['invoke']();
    };
    const _0x2f1e7a=_0xa03cc7['class'](_0x476e10['QLUlY'])['method'](_0x476e10['ygcbw']);
    _0x2f1e7a['implementation']=function() {
        const _0x2c012c=_0x240047;
        if(InfAmmo||n5ShotgunNoCooldown)return 0x1c52+0x126a+-0xf3f*0x3;
        return this['method'](_0x476e10['ygcbw'])['invoke']();
    };
    try{
        const _n5ShotgunCls=_0xa03cc7['class'](_0x476e10['QLUlY']);
        const _n5ShotgunUse=_n5ShotgunCls['method']('HandleUse');
        _n5ShotgunUse['implementation']=function(){
            if(n5ShotgunNoCooldown){
                try{this['field']('_reloadTimer')['value']=0;}catch(_){}
                try{this['method']('set__ammoLeft')['invoke'](99);}catch(_){}
                try{this['field']('__ammoLeft')['value']=99;}catch(_){}
                try{const _gun=this['field']('_gun')['value'];const _cfg=_gun&&_gun['method']('get_config')['invoke']();if(_cfg&&!_cfg['handle']['isNull']())_cfg['field']('shootTime')['value']=0.01;}catch(_){}
            }
            return this['method']('HandleUse')['invoke']();
        };
        const _n5ShotgunUpdate=_n5ShotgunCls['method']('OnUpdate');
        _n5ShotgunUpdate['implementation']=function(){
            if(n5ShotgunNoCooldown){
                try{this['field']('_reloadTimer')['value']=0;}catch(_){}
                try{this['method']('set__ammoLeft')['invoke'](99);}catch(_){}
                try{this['field']('__ammoLeft')['value']=99;}catch(_){}
            }
            return this['method']('OnUpdate')['invoke']();
        };
    }catch(_n5ShotgunHookErr){console.error('[N5 Shotgun cooldown hook]',_n5ShotgunHookErr);}
    const _0x49094f=_0xa03cc7['class'](_0x476e10['NXIVI'])['method'](_0x476e10['hqQgl']);
    _0x49094f['implementation']=function() {
        const _0x3db220=_0x240047,_0x2211f9=this['method'](_0x476e10['hqQgl'])['invoke']();
        return InfAmmo&&(_0x2211f9['field'](_0x476e10['fWdEN'])['value']=!![],this['method'](_0x476e10['IjPBK'])['invoke'](_0x2211f9)),_0x2211f9;
    };
    const _0x9f88e5=_0xa03cc7['class'](_0x476e10['dZcjg'])['method'](_0x476e10['ygcbw']);
    _0x9f88e5['implementation']=function() {
        const _0x20be5a=_0x240047;
        if(InfAmmo)return-0x3*-0x1fa+0x1*0x1a4a+-0x1f39;
        return this['method'](_0x476e10['ygcbw'])['invoke']();
    };
    const _0x1685a6=_0xa03cc7['class'](_0x476e10['cmsiw'])['method'](_0x476e10['dmXgr']);
    _0x1685a6['implementation']=function() {
        const _0x45bca7=_0x240047;
        InfAmmo?(this['method'](_0x476e10['dmXgr'])['invoke'](),this['field'](_0x476e10['wtDgq'])['value']=![]):this['method'](_0x476e10['dmXgr'])['invoke']();
    };
    try {
    const _n5HoverpadCls = _0xa03cc7['class']('AnimalCompany.Hoverpad');
    const _n5HoverpadFill = function(_hp) {
        try { _hp['method']('set_battery')['invoke'](1.0); } catch(_) {}
        try { _hp['field']('_battery')['value'] = 1.0; } catch(_) {}
        try { _hp['method']('HandleBatteryChanged')['invoke'](); } catch(_) {}
    };
    const _n5HoverpadGetBattery = _n5HoverpadCls['method']('get_battery');
    _n5HoverpadGetBattery['implementation'] = function() {
        if(n5InfiniteHoverpadBattery) return 1.0;
        return this['method']('get_battery')['invoke']();
    };
    const _n5HoverpadSetBattery = _n5HoverpadCls['method']('set_battery');
    _n5HoverpadSetBattery['implementation'] = function(_value) {
        if(n5InfiniteHoverpadBattery) _value = 1.0;
        return this['method']('set_battery')['invoke'](_value);
    };
    for(const _methodName of ['Spawned','FixedUpdateNetwork','HandleUse','Update','FixedUpdate','UpdateForce','CopyBackingFieldsToState','CopyStateToBackingFields']) {
        try {
            const _method = _n5HoverpadCls['method'](_methodName);
            _method['implementation'] = function() {
                if(n5InfiniteHoverpadBattery) _n5HoverpadFill(this);
                const _ret = this['method'](_methodName)['invoke'](...arguments);
                if(n5InfiniteHoverpadBattery) _n5HoverpadFill(this);
                return _ret;
            };
        } catch(_) {}
    }
} catch(_n5HoverpadHookErr) { console.error('[N5 Hoverpad battery hook]', _n5HoverpadHookErr); }
try {
    try{
        const _n5FlareCls=_0xa03cc7['class'](_0x476e10['sYyWr']);
        const _n5FlareUse=_n5FlareCls['method']('HandleUse');
        _n5FlareUse['implementation']=function(){
            const _ret=this['method']('HandleUse')['invoke']();
            try{
                if(n5ProjectileSwapEnabled){
                    const _pose=n5RightHandPose(0.35),_name=n5ProjectilePrefabs[n5ProjectileIndex%n5ProjectilePrefabs.length];
                    const _obj=_0x5b9456(_name,_pose.pos,_pose.rot);
                    if(_obj)n5LaunchItemObject(_obj,_pose.forward,35);
                }
                if(n5FlarePrefabImpactEnabled){
                    const _g=_0x22649c(),_p=_g['point'];
                    if(_p)_0x5b9456(prefabList[prefabIndex],_p,_0x554b79);
                }
            }catch(_e){console.error('[N5 Flare hook extras]',_e);}
            return _ret;
        };
    }catch(_n5FlareHookErr){console.error('[N5 Flare hook]',_n5FlareHookErr);}
    try{
        const _n5FlareProjCls=_0xa03cc7['class']('AnimalCompany.FlareGunProjectile');
        const _n5FlareProjUpdate=_n5FlareProjCls['method']('FixedUpdateNetwork');
        _n5FlareProjUpdate['implementation']=function(){
            const _ret=this['method']('FixedUpdateNetwork')['invoke']();
            try{
                if(n5FlarePrefabImpactEnabled){
                    const _key=String(this['handle']||this);
                    const _pos=_0xc4cf2f(this)['method'](_0x476e10['YApVv'])['invoke']();
                    let _seen=n5FlareProjectileSeen[_key];
                    if(!_seen){
                        n5FlareProjectileSeen[_key]={born:time,last:_pos,still:0,done:false};
                    }else if(!_seen.done){
                        const _moved=_0xe4d316['method'](_0x476e10['BpzgF'])['invoke'](_seen.last,_pos);
                        _seen.last=_pos;
                        _seen.still=(_moved<0.035)?(_seen.still+1):0;
                        if((time-_seen.born>0.3&&_seen.still>=3)||(time-_seen.born>2.0)){
                            _0x5b9456(prefabList[prefabIndex],_pos,_0x554b79);
                            _seen.done=true;
                            n5FlareImpactSeen.add(_key);
                            if(n5FlareImpactSeen.size>80){n5FlareImpactSeen=new Set();n5FlareProjectileSeen={};}
                        }
                    }
                }
            }catch(_){}
            return _ret;
        };
    }catch(_n5FlareProjHookErr){console.error('[N5 Flare projectile hook]',_n5FlareProjHookErr);}
    const _0xf47f1d=_0xa03cc7['class'](_0x476e10['XQYIQ'])['method'](_0x476e10['RCynW']);
    _0xf47f1d['implementation']=function(_0xe39338) {
        const _0x30f27d=_0x240047;
        if(stashDupeEnabled)for(let _0x42870a=-0xa7*0x29+-0x19b2+0xb3*0x4b;
        _0x476e10['zFoqP'](_0x42870a,ejectDupeAmount);
        _0x42870a++) {
            this['method'](_0x476e10['RCynW'])['invoke'](_0xe39338);
        }
        else this['method'](_0x476e10['RCynW'])['invoke'](_0xe39338);
    };
    function _0x4168f5() {
        const _0x4a0008=_0x240047,_0x14bdae= {
            'EPqKB':_0x476e10['qTups'],'jwqEb':_0x476e10['uXViU'],'JrZXs':_0x476e10['vatiI'],'yHOvg':_0x476e10['uKaRt']
        },
        _0x57bb67=_0xa03cc7['class'](_0x476e10['EsIlc'])['method'](_0x476e10['UGkgO']);
        _0x57bb67['implementation']=function(_0x5877fc) {
            if(this['method'](_0x476e10['qTups'])['invoke']()&&n5RpcBlocks['ApplyBuff']){ rpcAlertMsg=' BLOCKED: ApplyBuff'; rpcAlertExpiry=time+4; return; }
            return this['method'](_0x476e10['UGkgO'])['invoke'](_0x5877fc);
        };
        const _0x5e35c2=_0xa03cc7['class'](_0x476e10['EsIlc'])['method'](_0x476e10['GvlcC']);
        _0x5e35c2['implementation']=function(_0x2a06b3) {
            if(this['method'](_0x476e10['qTups'])['invoke']()&&n5RpcBlocks['AddForce']){ rpcAlertMsg=' BLOCKED: AddForce'; rpcAlertExpiry=time+4; return; }
            return this['method'](_0x476e10['GvlcC'])['invoke'](_0x2a06b3);
        };
        const _0x170a36=_0xa03cc7['class'](_0x476e10['EsIlc'])['method'](_0x476e10['uXViU']);
        _0x170a36['implementation']=function(_0x4370dc) {
            if(this['method'](_0x14bdae['EPqKB'])['invoke']()&&n5RpcBlocks['Teleport']){ rpcAlertMsg=' BLOCKED: Teleport'; rpcAlertExpiry=time+4; return; }
            return this['method'](_0x14bdae['jwqEb'])['invoke'](_0x4370dc);
        };
        const _0x2d2f38=_0xa03cc7['class'](_0x476e10['EsIlc'])['method'](_0x476e10['vatiI']);
        _0x2d2f38['implementation']=function() {
            if(this['method'](_0x14bdae['EPqKB'])['invoke']()&&n5RpcBlocks['Stinky']){ rpcAlertMsg=' BLOCKED: Stinky'; rpcAlertExpiry=time+4; return; }
            return this['method'](_0x14bdae['JrZXs'])['invoke']();
        };
        const _0x37fe32=_0xa03cc7['class'](_0x476e10['EsIlc'])['method'](_0x476e10['ZpbXB']);
        _0x37fe32['implementation']=function(_0x59dac4,_0xa9222d,_0x20b029,_0xb26ad2) {
            if(this['method'](_0x476e10['qTups'])['invoke']()&&n5RpcBlocks['Stun']){ rpcAlertMsg=' BLOCKED: Stun'; rpcAlertExpiry=time+4; return; }
            return this['method'](_0x476e10['ZpbXB'])['invoke'](_0x59dac4,_0xa9222d,_0x20b029,_0xb26ad2);
        };
        const _0x32456b=_0xa03cc7['class'](_0x476e10['EsIlc'])['method'](_0x476e10['uKaRt']);
        _0x32456b['implementation']=function(_0x27954a,_0x3daa3a,_0x230cf5,_0x2f71d5) {
            if(this['method'](_0x14bdae['EPqKB'])['invoke']()&&n5RpcBlocks['SetColor']){ rpcAlertMsg=' BLOCKED: SetColor'; rpcAlertExpiry=time+4; return; }
            return this['method'](_0x14bdae['yHOvg'])['invoke'](_0x27954a,_0x3daa3a,_0x230cf5,_0x2f71d5);
        };

        try {
            const _netSessionRPCs = _0xa03cc7['class']('AnimalCompany.NetSessionRPCs');
            const _kickMethod = _netSessionRPCs['method']('RPC_KickPlayer');

            const _kickOrig = _kickMethod['implementation'];
            _kickMethod['implementation'] = function() {

                if(n5RpcBlocks['KickPlayer']&&!_n5OutgoingKick){
                    rpcAlertMsg=' BLOCKED: RPC_KickPlayer'; rpcAlertExpiry=time+4;
                    return;
                }

                if(_kickOrig) return _kickOrig.apply(this, arguments);
                return this['method']('RPC_KickPlayer')['invoke'](...arguments);
            };
        } catch(_e2){ console.error('[KickBlock] NetSessionRPCs::RPC_KickPlayer hook failed:',_e2); }

        (()=>{
            const _bagClassNames = [
                'AnimalCompany.GrabbableObject',
                'AnimalCompany.GrabbableItem',
                'AnimalCompany.IGrabbableObjectContainer',
                'AnimalCompany.GrabbableObjectDropHandler',
            ];
            const _canAddMethods = ['CanAddToBag','CanAcceptItem','CanAdd','IsCompatible','CanBeAddedToBag','IsItemCompatible','CanDrop','CanDropItem','CanDropObject','CanAcceptDrop','CanHandleDrop','IsValidDrop','IsValidDropTarget','IsValidForContainer','CanAddToContainer','TryToDrop','get_canAddToBag','get_allowAddToBag','get_allowAddToQuiver'];
            for(const _cn of _bagClassNames){
                try {
                    const _cls = _0xa03cc7['class'](_cn);
                    for(const _m of _canAddMethods){
                        try {
                            const _meth = _cls['method'](_m);
                            const _mName = _m;
                            _meth['implementation'] = function() {
                                if(allowAllContainers) return true;
                                return this['method'](_mName)['invoke'](...arguments);
                            };
                        } catch(_){ }
                    }
                } catch(_){ }
            }
            try {
                const DropHandlerClass = Il2Cpp.domain.assembly('AnimalCompany').image.class('AnimalCompany.GrabbableObjectDropHandler');
                for(const _m of _canAddMethods){
                    try {
                        const _meth = DropHandlerClass.method(_m);
                        const _mName = _m;
                        _meth['implementation'] = function() {
                            if(allowAllContainers) return true;
                            return this['method'](_mName)['invoke'](...arguments);
                        };
                    } catch(_){ }
                }
                for(const _meth of DropHandlerClass.methods){
                    try {
                        const _mName = _meth.name;
                        if(!/can|valid|accept|allow|compatible/i.test(_mName)) continue;
                        const _ret = String((_meth.returnType&&_meth.returnType.name)||'');
                        if(_ret && !/Boolean|bool/i.test(_ret)) continue;
                        _meth['implementation'] = function() {
                            if(allowAllContainers) return true;
                            return this['method'](_mName)['invoke'](...arguments);
                        };
                    } catch(_){ }
                }
            } catch(_dropHandlerErr){ console.error('[AllowAllMove] DropHandler hook failed:',_dropHandlerErr); }
            try {
                const _grabItemCls = _0xa03cc7['class']('AnimalCompany.GrabbableItem');
                for(const _m of ['get_canAddToBag','get_allowAddToBag']){
                    try {
                        const _meth = _grabItemCls.method(_m);
                        const _mName = _m;
                        _meth['implementation'] = function() {
                            if(allowAllContainers) return true;
                            return this['method'](_mName)['invoke'](...arguments);
                        };
                    } catch(_){}
                }
            } catch(_grabItemGetterErr){ console.error('[AllowAllMove] GrabbableItem getter hook failed:',_grabItemGetterErr); }
            try {
                const _gameplayItemStateCls = _0xa03cc7['class']('AnimalCompany.GameplayItemState');
                const _isBagLikeState=function(_self){
                    try{
                        const _idObj=_self['method']('get_id')['invoke']();
                        const _id=n5ManagedString(_idObj).toLowerCase();
                        return _id.indexOf('stash')!==-1||_id.indexOf('quiver')!==-1||_id.indexOf('backpack')!==-1||_id.indexOf('crossbow')!==-1||_id.indexOf('heart_gun')!==-1||_id.indexOf('grenade_launcher')!==-1||_id.indexOf('salmoncannon')!==-1||_id.indexOf('salmon_cannon')!==-1;
                    }catch(_){return false;}
                };
                try{
                    const _meth=_gameplayItemStateCls.method('get_isBag');
                    _meth['implementation']=function(){if(_isBagLikeState(this)||allowAllContainers)return true;return this['method']('get_isBag')['invoke']();};
                }catch(_){}
                try{
                    const _meth=_gameplayItemStateCls.method('get_baseCapacity');
                    _meth['implementation']=function(){
                        const _ret=this['method']('get_baseCapacity')['invoke']();
                        if(_isBagLikeState(this)||allowAllContainers){
                            try{_ret['field']('_value')['value']=9999;}catch(_){}
                            try{_ret['field']('value')['value']=9999;}catch(_){}
                        }
                        return _ret;
                    };
                }catch(_){}
                for(const _m of ['get_allowAddToBag','get_allowAddToQuiver','get_allowAttachToItem','get_allowAttachToBack','get_allowAttachToHip','get_isBackpack']){
                    try {
                        const _meth = _gameplayItemStateCls.method(_m);
                        const _mName = _m;
                        _meth['implementation'] = function() {
                            if(allowAllContainers||_mName.indexOf('allow')>=0||_mName==='get_isBackpack') return true;
                            return this['method'](_mName)['invoke'](...arguments);
                        };
                    } catch(_){}
                }
                for(const _m of ['get_totalCurrCapacity','get_containerCapacity','get_maxContainerCapacity']){
                    try{
                        const _meth=_gameplayItemStateCls.method(_m);
                        const _mName=_m;
                        _meth['implementation']=function(){if(allowAllContainers||_isBagLikeState(this))return 9999;return this['method'](_mName)['invoke'](...arguments);};
                    }catch(_){}
                }
            } catch(_gameplayItemStateErr){ console.error('[AllowAllMove] GameplayItemState hook failed:',_gameplayItemStateErr); }
            try {
                const _dropHandlerCls = _0xa03cc7['class']('AnimalCompany.GrabbableObjectDropHandler');
                const _tryToDrop = _dropHandlerCls.method('TryToDrop',1);
                _tryToDrop['implementation'] = function(_grabbableObject) {
                    let _ret=true;
                    if(!allowAllContainers)_ret=this['method']('TryToDrop',1)['invoke'](_grabbableObject);
                    if(n5BagDropDupeEnabled&&_ret!==false)n5DupeDroppedBagItem(_grabbableObject);
                    return allowAllContainers?true:_ret;
                };
            } catch(_dropTryHookErr){ console.error('[AllowAllMove] TryToDrop hook failed:',_dropTryHookErr); }
            try {
                const _quiverCls = _0xa03cc7['class']('AnimalCompany.Quiver');
                const _nextOut = _quiverCls.method('TryGetNextItemOut',1);
                _nextOut['implementation'] = function(_grabbableObject) {
                    const _ret=this['method']('TryGetNextItemOut',1)['invoke'](_grabbableObject);
                    if(n5BagDropDupeEnabled&&_ret!==false)n5DupeDroppedBagItem(_grabbableObject);
                    return _ret;
                };
            } catch(_quiverOutHookErr){ console.error('[BagDropDupe] Quiver out hook failed:',_quiverOutHookErr); }
            try {
                const _backpackCls = _0xa03cc7['class']('AnimalCompany.BackpackItem');
                const _tryOut = _backpackCls.method('TryGetItemOut',2);
                _tryOut['implementation'] = function(_rootItemID,_grabbableItem) {
                    const _ret=this['method']('TryGetItemOut',2)['invoke'](_rootItemID,_grabbableItem);
                    if(n5BagDropDupeEnabled&&_ret!==false)n5DupeDroppedBagItem(_grabbableItem);
                    return _ret;
                };
            } catch(_backpackOutHookErr){ console.error('[BagDropDupe] Backpack out hook failed:',_backpackOutHookErr); }
            try {
                const _quiverCls = _0xa03cc7['class']('AnimalCompany.Quiver');
                const _checkToAdd = _quiverCls.method('CheckToAddItem',1);
                _checkToAdd['implementation'] = function(_item) {
                    if(allowAllContainers) return true;
                    return this['method']('CheckToAddItem',1)['invoke'](_item);
                };
                try{_quiverCls.method('CanAddItem',1)['implementation']=function(_item){return true;};}catch(_){}
                try{_quiverCls.method('get_capacity')['implementation']=function(){return 9999;};}catch(_){}
                try{_quiverCls.method('get_baseCapacity')['implementation']=function(){return 9999;};}catch(_){}
                try{_quiverCls.method('get_isFull')['implementation']=function(){return false;};}catch(_){}
                try{_quiverCls.method('set_capacity',1)['implementation']=function(_value){try{this['field']('_capacity')['value']=9999;}catch(_){}return;};}catch(_){}
                try{_quiverCls.method('HandleTryToDrop',1)['implementation']=function(_item){return true;};}catch(_){}
                for(const _m of ['AddToBagAck','CheckToAddItem']){
                    try{_quiverCls.method(_m,1)['implementation']=function(_obj){try{this['field']('_capacity')['value']=9999;}catch(_){}return true;};}catch(_){}
                }
            } catch(_quiverHookErr){ console.error('[AllowAllMove] Quiver hook failed:',_quiverHookErr); }
            try {
                const _backpackCls = _0xa03cc7['class']('AnimalCompany.BackpackItem');
                try{_backpackCls.method('CheckToAddItem',1)['implementation']=function(_item){return true;};}catch(_){}
                try{_backpackCls.method('get_capacity')['implementation']=function(){return 9999;};}catch(_){}
                try{_backpackCls.method('get_baseCapacity')['implementation']=function(){return 9999;};}catch(_){}
                try{_backpackCls.method('get_isFull')['implementation']=function(){return false;};}catch(_){}
                try{_backpackCls.method('set_capacity',1)['implementation']=function(_value){try{this['field']('_capacity')['value']=9999;}catch(_){}return;};}catch(_){}
                for(const _m of ['AddToBagAck','HandleAddItemTrigger']){
                    try{_backpackCls.method(_m,1)['implementation']=function(_obj){try{this['field']('_capacity')['value']=9999;}catch(_){}try{this['method']('set_isOpen')['invoke'](true);}catch(_){}return true;};}catch(_){}
                }
            } catch(_backpackHookErr){ console.error('[AllowAllMove] Backpack capacity hook failed:',_backpackHookErr); }
            try {
                const _grabItemCls = _0xa03cc7['class']('AnimalCompany.GrabbableItem');
                const _addMethod = _grabItemCls['method']('AddToBagInternal');
                const _origAdd = _addMethod['implementation'];
                _addMethod['implementation'] = function(_container) {
                    if(allowAllContainers){
                        try { return this['method']('AddToBagInternal')['invoke'](_container); } catch(_){ return; }
                    }
                    return this['method']('AddToBagInternal')['invoke'](_container);
                };
            } catch(_e4){ }
            try {
                for(const _asm of Il2Cpp.domain.assemblies){
                    try {
                        const _asmName = _asm.name;
                        if(_asmName !== 'AnimalCompany') continue;
                        for(const _klass of _asm.image.classes){
                            try {
                                for(const _m of _canAddMethods){
                                    try {
                                        const _meth = _klass.method(_m);
                                        if(!_meth) continue;
                                        const _mName = _m;
                                        _meth['implementation'] = function() {
                                            if(allowAllContainers) return true;
                                            return this['method'](_mName)['invoke'](...arguments);
                                        };
                                    } catch(_){ }
                                }
                            } catch(_){ }
                        }
                    } catch(_){ }
                }
            } catch(_e5){ console.error('[AllowAllMove] assembly scan failed:',_e5); }
            try{n5InstallBagDropDupeHooks();}catch(_dupeHookErr){console.error('[BagDropDupe] late hook install failed:',_dupeHookErr);}
        })();
    }
    _0x476e10['aGSAx'](_0x3b1937),_0x476e10['aGSAx'](_0x4168f5),console['log']('[N5.exe OWNER] menu loaded v'+version+'  '+n5ThemeKeys.length+' themes, '+_0x8d3cef.length+' categories');
} catch(_n5OuterErr) { console.error('[N5 outer]', _n5OuterErr); }
});
}
Il2Cpp['perform'](() => {
    console.log("vr detection thingy");
    const ac = Il2Cpp.domain
        .assembly("AnimalCompany")
        .image;
    const apputils = ac.class("AnimalCompany.AppUtils");
    const status = ac.class("AnimalCompany.AppUtils").nested("SteamVRHeadsetStatus");
    const xr = apputils.method("GetXRBackend");
    const getstatus = apputils.method("GetSteamVRHeadsetStatus");
    const active = apputils.method("IsSteamVRHeadsetActive");
    active.implementation = function () {
        return true;
    };
    xr.implementation = function () {
        return 2;
    };
    getstatus.implementation = function () {
        const spoof = status.new().unbox();
        spoof.field("activeLoaderPresent").value = true;
        spoof.field("xrDisplayRunning").value = true;
        spoof.field("headDeviceValid").value = true;
        spoof.field("userPresenceKnown").value = true;
        spoof.field("userPresent").value = true;
        return spoof;
    };
});

setTimeout(_n5BootMenu, 20000);
